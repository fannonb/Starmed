<?php
/**
 * Contact form handler (posted to by components/pages/ContactForm.tsx).
 * Replies with JSON matching ContactFormState in data/contact.ts.
 * Keep the ids and limits below in sync with data/contact.ts.
 */
define('STARMED_FORMS', true);
require __DIR__ . '/_forms.php';

$inquiryIds = ['appointment', 'membership', 'insurance', 'services', 'employers', 'feedback', 'other'];
$limits = ['name' => 100, 'email' => 254, 'phone' => 30, 'message' => 2000];

starmed_require_post();

// Bots get a fake success so they have no signal to adapt to.
if (starmed_is_likely_bot()) starmed_respond(['status' => 'success']);

$fields = [
    'name' => starmed_field('name'),
    'email' => strtolower(starmed_field('email')),
    'phone' => starmed_field('phone'),
    'inquiry' => starmed_field('inquiry'),
    'message' => starmed_field('message', true),
];

$errors = [];
foreach (['name', 'email', 'phone', 'inquiry', 'message'] as $field) {
    if ($fields[$field] === '') $errors[$field] = 'required';
}
if ($fields['email'] !== '' && !starmed_valid_email($fields['email'])) $errors['email'] = 'invalid';
if ($fields['phone'] !== '' && !starmed_valid_phone($fields['phone'])) $errors['phone'] = 'invalid';
if ($fields['inquiry'] !== '' && !in_array($fields['inquiry'], $inquiryIds, true)) $errors['inquiry'] = 'invalid';
foreach ($limits as $field => $max) {
    if (starmed_length($fields[$field]) > $max) $errors[$field] = 'too-long';
}

if ($errors) starmed_respond(['status' => 'invalid', 'errors' => $errors]);

// Checked after field validation so fixing a typo never needs a new security check.
if (!starmed_passes_turnstile()) starmed_respond(['status' => 'challenge-failed']);

// Only count messages that would actually be sent, so fixing typos never locks anyone out.
if (starmed_is_rate_limited('contact')) starmed_respond(['status' => 'rate-limited']);

/** Topic labels as the visitor saw them (English), from messages/pages.ts. */
$inquiryLabels = [
    'appointment' => 'Booking or changing a visit',
    'membership' => 'Membership',
    'insurance' => 'Insurance or billing',
    'services' => 'A question about our services',
    'employers' => 'Care for my business',
    'feedback' => 'Feedback',
    'other' => 'Something else',
];
$topic = $inquiryLabels[$fields['inquiry']];
$firstName = explode(' ', $fields['name'])[0];

$text = implode("\n", [
    'New message from starmedtx.com.',
    '',
    "Topic: $topic",
    "Name: {$fields['name']}",
    "Phone: {$fields['phone']}",
    "Email: {$fields['email']}",
    '',
    $fields['message'],
]);

$html = starmed_render_email([
    'preheader' => "$topic · {$fields['name']}: "
        . (function_exists('mb_substr') ? mb_substr($fields['message'], 0, 90, 'UTF-8') : substr($fields['message'], 0, 90)),
    'eyebrow' => 'Website message',
    'title' => "New message from $firstName",
    'highlight' => null,
    'rowsTitle' => 'Contact details',
    'rows' => [
        ['Topic', $topic, null],
        ['Name', $fields['name'], null],
        ['Phone', $fields['phone'], starmed_tel_href($fields['phone'])],
        ['Email', $fields['email'], 'mailto:' . $fields['email']],
    ],
    'messageTitle' => 'Message',
    'message' => $fields['message'],
    'actions' => [
        ['label' => "Reply to $firstName", 'href' => starmed_mailto_href($fields['email'], 'Re: Your message to StarMed Clinic'), 'primary' => true],
        ['label' => 'Call ' . $fields['phone'], 'href' => starmed_tel_href($fields['phone']), 'primary' => false],
    ],
    'note' => 'Replying to this email goes straight to the sender.',
]);

$sent = starmed_send_clinic_email(
    "Website message: $topic - {$fields['name']}",
    $text,
    $html,
    $fields['email']
);

starmed_respond(['status' => $sent ? 'success' : 'unavailable']);
