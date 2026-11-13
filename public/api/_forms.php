<?php
/**
 * Shared code for the website form handlers (contact.php, appointment.php).
 * Not reachable from the web: .htaccess in this folder denies files starting with "_".
 *
 * Settings come from starmed-forms.config.php, kept OUTSIDE public_html (one level above
 * the site's document root) so the Turnstile secret is never downloadable.
 * See deploy/starmed-forms.config.example.php in the project.
 *
 * Works on PHP 7.4+.
 */

if (!defined('STARMED_FORMS')) {
    http_response_code(404);
    exit;
}

/** Submissions faster than this are almost always bots. */
const STARMED_MIN_FILL_MS = 3000;
const STARMED_RATE_MAX = 5;
const STARMED_RATE_WINDOW = 600; // seconds

function starmed_config()
{
    static $config = null;
    if ($config !== null) return $config;

    $defaults = [
        'turnstile_secret' => '',
        'mail_to' => 'info@starmedtx.com',
        'mail_from' => 'info@starmedtx.com',
        'mail_from_name' => 'StarMed Clinic Website',
        'data_dir' => '',
    ];
    $file = dirname(rtrim($_SERVER['DOCUMENT_ROOT'] ?? __DIR__ . '/..', '/')) . '/starmed-forms.config.php';
    $loaded = is_file($file) ? include $file : [];
    $config = array_merge($defaults, is_array($loaded) ? $loaded : []);
    return $config;
}

function starmed_respond(array $payload, int $code = 200)
{
    http_response_code($code);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    header('X-Content-Type-Options: nosniff');
    echo json_encode($payload);
    exit;
}

/** POST only, from this site's own pages. */
function starmed_require_post()
{
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
        header('Allow: POST');
        starmed_respond(['status' => 'unavailable'], 405);
    }
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    if ($origin !== '') {
        $originHost = strtolower((string) parse_url($origin, PHP_URL_HOST));
        $host = strtolower(preg_replace('/:\d+$/', '', $_SERVER['HTTP_HOST'] ?? ''));
        if ($originHost !== $host) starmed_respond(['status' => 'unavailable'], 403);
    }
}

/** Strip control characters; single-line fields also lose line breaks (blocks header injection). */
function starmed_clean($value, $multiline = false)
{
    if (!is_string($value)) return '';
    $pattern = $multiline ? '/[\x00-\x09\x0B-\x1F\x7F]/u' : '/[\x00-\x1F\x7F]/u';
    $cleaned = preg_replace($pattern, $multiline ? '' : ' ', $value);
    return trim($cleaned === null ? '' : $cleaned);
}

function starmed_field($name, $multiline = false)
{
    return starmed_clean($_POST[$name] ?? '', $multiline);
}

function starmed_length($value)
{
    return function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value);
}

function starmed_valid_email($email)
{
    return (bool) preg_match('/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/', $email)
        && filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

function starmed_valid_phone($phone)
{
    return (bool) preg_match('/^[0-9+().\-\s]{7,}$/', $phone);
}

/** Honeypot filled, or form sent too fast: treat as a bot. */
function starmed_is_likely_bot()
{
    if (starmed_field('company') !== '') return true;
    $elapsed = $_POST['elapsedMs'] ?? '';
    if (!is_string($elapsed) || !ctype_digit($elapsed)) return true;
    return (int) $elapsed < STARMED_MIN_FILL_MS;
}

function starmed_client_ip()
{
    // Behind Cloudflare's proxy the visitor's address is in CF-Connecting-IP.
    $cf = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? '';
    if ($cf !== '' && filter_var($cf, FILTER_VALIDATE_IP)) return $cf;
    return $_SERVER['REMOTE_ADDR'] ?? 'unknown';
}

function starmed_data_dir()
{
    $config = starmed_config();
    $dir = $config['data_dir'] !== ''
        ? $config['data_dir']
        : dirname(rtrim($_SERVER['DOCUMENT_ROOT'] ?? __DIR__ . '/..', '/')) . '/starmed-forms-data';
    if (!is_dir($dir) && !@mkdir($dir, 0700, true)) {
        $dir = sys_get_temp_dir() . '/starmed-forms-data';
        if (!is_dir($dir)) @mkdir($dir, 0700, true);
    }
    return $dir;
}

/** Counts a send for this visitor and form; true once they hit the limit. */
function starmed_is_rate_limited($form)
{
    $file = starmed_data_dir() . '/rate-' . hash('sha256', $form . '|' . starmed_client_ip()) . '.json';
    $handle = @fopen($file, 'c+');
    if (!$handle) return false; // Never block real patients because of a storage problem.

    flock($handle, LOCK_EX);
    $now = time();
    $hits = json_decode(stream_get_contents($handle) ?: '[]', true);
    $hits = array_values(array_filter(is_array($hits) ? $hits : [], function ($t) use ($now) {
        return is_int($t) && $now - $t < STARMED_RATE_WINDOW;
    }));
    $limited = count($hits) >= STARMED_RATE_MAX;
    if (!$limited) $hits[] = $now;

    ftruncate($handle, 0);
    rewind($handle);
    fwrite($handle, json_encode($hits));
    flock($handle, LOCK_UN);
    fclose($handle);
    return $limited;
}

/** Verifies the Cloudflare Turnstile token the widget added to the form. */
function starmed_passes_turnstile()
{
    $secret = starmed_config()['turnstile_secret'];
    if ($secret === '') {
        error_log('StarMed forms: turnstile_secret is not set; skipping the Cloudflare check.');
        return true;
    }

    $token = $_POST['cf-turnstile-response'] ?? '';
    if (!is_string($token) || $token === '' || strlen($token) > 2048) return false;

    $body = http_build_query([
        'secret' => $secret,
        'response' => $token,
        'remoteip' => starmed_client_ip(),
    ]);
    $url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $body,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 8,
        ]);
        $raw = curl_exec($ch);
        curl_close($ch);
    } else {
        $raw = @file_get_contents($url, false, stream_context_create(['http' => [
            'method' => 'POST',
            'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
            'content' => $body,
            'timeout' => 8,
        ]]));
    }

    $result = is_string($raw) ? json_decode($raw, true) : null;
    if (!is_array($result)) {
        // Cloudflare unreachable: fail closed; the visitor is told to retry or call.
        error_log('StarMed forms: Turnstile verification request failed');
        return false;
    }
    if (empty($result['success'])) {
        $codes = isset($result['error-codes']) ? implode(', ', (array) $result['error-codes']) : 'unknown';
        error_log("StarMed forms: Turnstile rejected ($codes)");
        return false;
    }
    return true;
}

function starmed_encode_header($text)
{
    return '=?UTF-8?B?' . base64_encode($text) . '?=';
}

require __DIR__ . '/_email.php';

/**
 * Builds the MIME body: plain text + HTML (with the logo embedded as an inline image).
 *   multipart/alternative
 *     text/plain
 *     multipart/related
 *       text/html
 *       image/png (Content-ID, referenced by the HTML as cid:...)
 * Returns [content-type header value, body].
 */
function starmed_build_mime($text, $html)
{
    $alt = 'starmed-alt-' . bin2hex(random_bytes(12));
    $rel = 'starmed-rel-' . bin2hex(random_bytes(12));
    $logoPath = __DIR__ . '/_email-logo.png';
    $logo = is_readable($logoPath) ? file_get_contents($logoPath) : false;
    $cid = 'logo.' . bin2hex(random_bytes(6)) . '@starmedtx.com';

    $html = str_replace('{{LOGO_SRC}}', $logo !== false ? "cid:$cid" : 'https://starmedtx.com/starmed-logo.png', $html);
    $qp = function ($s) {
        return quoted_printable_encode(str_replace(["\r\n", "\n"], ["\n", "\r\n"], $s));
    };

    $parts = [];
    $parts[] = "--$alt\r\n"
        . "Content-Type: text/plain; charset=UTF-8\r\n"
        . "Content-Transfer-Encoding: quoted-printable\r\n\r\n"
        . $qp($text) . "\r\n";

    if ($logo !== false) {
        $parts[] = "--$alt\r\n"
            . "Content-Type: multipart/related; boundary=\"$rel\"\r\n\r\n"
            . "--$rel\r\n"
            . "Content-Type: text/html; charset=UTF-8\r\n"
            . "Content-Transfer-Encoding: quoted-printable\r\n\r\n"
            . $qp($html) . "\r\n"
            . "--$rel\r\n"
            . "Content-Type: image/png; name=\"starmed-logo.png\"\r\n"
            . "Content-Transfer-Encoding: base64\r\n"
            . "Content-ID: <$cid>\r\n"
            . "Content-Disposition: inline; filename=\"starmed-logo.png\"\r\n\r\n"
            . chunk_split(base64_encode($logo), 76, "\r\n")
            . "--$rel--\r\n";
    } else {
        $parts[] = "--$alt\r\n"
            . "Content-Type: text/html; charset=UTF-8\r\n"
            . "Content-Transfer-Encoding: quoted-printable\r\n\r\n"
            . $qp($html) . "\r\n";
    }

    return ["multipart/alternative; boundary=\"$alt\"", implode('', $parts) . "--$alt--\r\n"];
}

/**
 * Sends a notification to the clinic inbox through the server's mail system (cPanel/Exim):
 * a designed HTML version plus a plain-text version for clients that prefer it.
 * Visitor text is escaped in the HTML (see _email.php), so it can never render as markup.
 * Never logs form contents: they may contain personal health information.
 */
function starmed_send_clinic_email($subject, $text, $html, $replyTo)
{
    $config = starmed_config();
    $from = $config['mail_from'];
    list($contentType, $body) = starmed_build_mime($text, $html);
    $headers = [
        'From: ' . starmed_encode_header($config['mail_from_name']) . " <$from>",
        'MIME-Version: 1.0',
        "Content-Type: $contentType",
        'X-Mailer: StarMed website',
    ];
    if (starmed_valid_email($replyTo)) $headers[] = "Reply-To: $replyTo";

    $sent = @mail(
        $config['mail_to'],
        starmed_encode_header($subject),
        $body,
        implode("\r\n", $headers),
        '-f' . $from
    );
    if (!$sent) error_log('StarMed forms: mail() failed to hand the message to the mail server');
    return $sent;
}
