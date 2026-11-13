<?php
/**
 * HTML email template for the clinic's form notifications.
 * Email-client safe: table layout, inline styles, system/web-safe fonts, no external CSS or JS.
 * The logo is embedded in the message (see starmed_send_clinic_email) so it shows without
 * the reader having to "load images".
 *
 * Every value that came from a visitor MUST go through starmed_h() before it is placed here.
 */

if (!defined('STARMED_FORMS')) {
    http_response_code(404);
    exit;
}

/** Escape text for HTML. */
function starmed_h($value)
{
    return htmlspecialchars((string) $value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

/** Visitor text with line breaks kept. */
function starmed_h_multiline($value)
{
    return nl2br(starmed_h($value), false);
}

function starmed_tel_href($phone)
{
    return 'tel:' . preg_replace('/[^0-9+]/', '', $phone);
}

function starmed_mailto_href($email, $subject)
{
    return 'mailto:' . $email . '?subject=' . rawurlencode($subject);
}

/** "Friday, November 13, 2026 at 1:32 PM" in the clinic's time zone. */
function starmed_received_label()
{
    $now = new DateTime('now', new DateTimeZone('America/Chicago'));
    return $now->format('l, F j, Y \a\t g:i A') . ' (Central Time)';
}

/**
 * Renders the notification email.
 *
 * $o = [
 *   'preheader' => string,              inbox preview line
 *   'eyebrow'   => string,              small label beside the logo, e.g. "Appointment request"
 *   'title'     => string,
 *   'highlight' => null | ['label' => string, 'primary' => string, 'secondary' => string],
 *   'rowsTitle' => string,
 *   'rows'      => [[label, text, href|null], ...],
 *   'messageTitle' => string, 'message' => string ('' hides the block),
 *   'actions'   => [['label' => string, 'href' => string, 'primary' => bool], ...],
 *   'note'      => string,
 * ]
 * Plain strings are escaped here; nothing is passed through raw.
 */
function starmed_render_email(array $o)
{
    $navy = '#222863';
    $ink = '#1F2430';
    $muted = '#6B7280';
    $line = '#ECE7DE';
    $serif = "Georgia, 'Times New Roman', serif";
    $sans = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

    $sectionLabel = function ($text) use ($muted, $sans) {
        return '<p style="margin:0 0 12px 0;font-family:' . $sans . ';font-size:11px;line-height:16px;'
            . 'font-weight:600;letter-spacing:1.4px;text-transform:uppercase;color:' . $muted . ';">'
            . starmed_h($text) . '</p>';
    };

    // Details table.
    $rowsHtml = '';
    $last = count($o['rows']) - 1;
    foreach ($o['rows'] as $i => $row) {
        list($label, $text, $href) = array_pad($row, 3, null);
        $border = $i === $last ? '' : 'border-bottom:1px solid ' . $line . ';';
        $value = $href
            ? '<a href="' . starmed_h($href) . '" style="color:' . $navy . ';text-decoration:underline;">' . starmed_h($text) . '</a>'
            : starmed_h($text);
        $rowsHtml .= '<tr>'
            . '<td valign="top" class="label-cell" style="padding:11px 16px 11px 0;' . $border . 'width:150px;'
            . 'font-family:' . $sans . ';font-size:14px;line-height:22px;color:' . $muted . ';">' . starmed_h($label) . '</td>'
            . '<td valign="top" style="padding:11px 0;' . $border . 'font-family:' . $sans . ';font-size:15px;'
            . 'line-height:22px;color:' . $ink . ';word-break:break-word;">' . $value . '</td>'
            . '</tr>';
    }

    // Requested time (appointments).
    $highlightHtml = '';
    if (!empty($o['highlight'])) {
        $h = $o['highlight'];
        $highlightHtml = '<tr><td class="px" style="padding:28px 40px 0 40px;">'
            . '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" '
            . 'style="background-color:#F7F4EE;border:1px solid #E6DFD2;border-radius:6px;">'
            . '<tr><td style="padding:20px 24px;">'
            . $sectionLabel($h['label'])
            . '<p style="margin:0;font-family:' . $serif . ';font-size:24px;line-height:30px;color:' . $navy . ';">'
            . starmed_h($h['primary']) . '</p>'
            . '<p style="margin:4px 0 0 0;font-family:' . $sans . ';font-size:16px;line-height:24px;color:' . $ink . ';">'
            . starmed_h($h['secondary']) . '</p>'
            . '</td></tr></table></td></tr>';
    }

    // Message / notes.
    $messageHtml = '';
    if (isset($o['message']) && $o['message'] !== '') {
        $messageHtml = '<tr><td class="px" style="padding:28px 40px 0 40px;">'
            . $sectionLabel($o['messageTitle'])
            . '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" '
            . 'style="background-color:#FAF8F4;border:1px solid ' . $line . ';border-radius:6px;">'
            . '<tr><td style="padding:16px 20px;font-family:' . $sans . ';font-size:15px;line-height:24px;'
            . 'color:' . $ink . ';word-break:break-word;">' . starmed_h_multiline($o['message']) . '</td></tr>'
            . '</table></td></tr>';
    }

    // Buttons.
    $buttons = [];
    foreach ($o['actions'] as $a) {
        $primary = !empty($a['primary']);
        $bg = $primary ? $navy : '#FFFFFF';
        $fg = $primary ? '#FFFFFF' : $navy;
        $border = $primary ? $navy : '#C9CFDB';
        $buttons[] = '<td class="stack" style="padding:0 12px 12px 0;">'
            . '<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>'
            . '<td bgcolor="' . $bg . '" style="border-radius:6px;border:1px solid ' . $border . ';">'
            . '<a href="' . starmed_h($a['href']) . '" style="display:inline-block;padding:12px 22px;'
            . 'font-family:' . $sans . ';font-size:15px;line-height:20px;font-weight:600;color:' . $fg . ';'
            . 'text-decoration:none;border-radius:6px;">' . starmed_h($a['label']) . '</a>'
            . '</td></tr></table></td>';
    }
    $actionsHtml = $buttons
        ? '<tr><td class="px" style="padding:30px 40px 0 40px;">'
            . '<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>'
            . implode('', $buttons) . '</tr></table></td></tr>'
        : '';

    $noteHtml = !empty($o['note'])
        ? '<tr><td class="px" style="padding:8px 40px 0 40px;font-family:' . $sans . ';font-size:13px;'
            . 'line-height:20px;color:' . $muted . ';">' . starmed_h($o['note']) . '</td></tr>'
        : '';

    // Keeps inbox previews to our preheader instead of the body text.
    $preheaderPad = str_repeat('&#8199;&#847; ', 40);

    return '<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>' . starmed_h($o['title']) . '</title>
<!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif]-->
<style>
  body { margin:0; padding:0; -webkit-text-size-adjust:100%; }
  a[x-apple-data-detectors] { color:inherit !important; text-decoration:none !important; }
  @media only screen and (max-width:620px) {
    .container { width:100% !important; }
    .px { padding-left:22px !important; padding-right:22px !important; }
    .header-eyebrow { display:none !important; }
    .label-cell { width:110px !important; }
    .stack { display:block !important; padding-right:0 !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background-color:#F4F0E8;">
<div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">'
        . starmed_h($o['preheader']) . $preheaderPad . '</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#F4F0E8" style="background-color:#F4F0E8;">
<tr><td align="center" style="padding:32px 12px 24px 12px;">

  <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0"
    style="width:600px;max-width:600px;background-color:#FFFFFF;border:1px solid #E4DDD0;border-top:4px solid ' . $navy . ';border-radius:6px;">

    <tr><td class="px" style="padding:28px 40px 22px 40px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
        <td valign="middle" style="width:200px;">
          <a href="https://starmedtx.com/" style="text-decoration:none;">
            <img src="{{LOGO_SRC}}" width="200" height="76" alt="StarMed — Reliable Health Care"
              style="display:block;width:200px;max-width:200px;height:auto;border:0;outline:none;text-decoration:none;font-family:' . $serif . ';font-size:20px;color:' . $navy . ';">
          </a>
        </td>
        <td valign="middle" align="right" class="header-eyebrow" style="font-family:' . $sans . ';font-size:11px;line-height:16px;font-weight:600;letter-spacing:1.4px;text-transform:uppercase;color:' . $muted . ';">'
        . starmed_h($o['eyebrow']) . '</td>
      </tr></table>
    </td></tr>

    <tr><td class="px" style="padding:0 40px;"><div style="height:1px;line-height:1px;font-size:1px;background-color:' . $line . ';">&nbsp;</div></td></tr>

    <tr><td class="px" style="padding:30px 40px 0 40px;">
      <h1 style="margin:0;font-family:' . $serif . ';font-size:28px;line-height:34px;font-weight:normal;color:' . $navy . ';">'
        . starmed_h($o['title']) . '</h1>
      <p style="margin:8px 0 0 0;font-family:' . $sans . ';font-size:14px;line-height:21px;color:' . $muted . ';">Received '
        . starmed_h(starmed_received_label()) . '</p>
    </td></tr>
' . $highlightHtml . '
    <tr><td class="px" style="padding:28px 40px 0 40px;">'
        . $sectionLabel($o['rowsTitle']) . '
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid ' . $line . ';border-bottom:1px solid ' . $line . ';">'
        . $rowsHtml . '</table>
    </td></tr>
' . $messageHtml . $actionsHtml . $noteHtml . '
    <tr><td style="padding:0 0 34px 0;font-size:1px;line-height:1px;">&nbsp;</td></tr>
  </table>

  <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;">
    <tr><td class="px" align="center" style="padding:22px 40px 0 40px;font-family:' . $sans . ';font-size:12px;line-height:19px;color:#8A8F98;">
      <strong style="color:#5A6070;font-weight:600;">StarMed Clinic</strong> &middot; 22211 I-10 Suite 1206, San Antonio, TX 78257 &middot; (726) 242-3011<br>
      Sent automatically by the form on <a href="https://starmedtx.com/" style="color:#5A6070;text-decoration:underline;">starmedtx.com</a>.<br>
      Contains patient information &mdash; please keep it within the clinic.
    </td></tr>
  </table>

</td></tr>
</table>
</body>
</html>';
}
