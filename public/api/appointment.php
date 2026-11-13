<?php
/**
 * Appointment request handler (posted to by components/pages/AppointmentForm.tsx).
 * Replies with JSON matching AppointmentFormState in data/appointments.ts.
 * Keep the ids, hours and limits below in sync with data/appointments.ts.
 */
define('STARMED_FORMS', true);
require __DIR__ . '/_forms.php';

$visitTypeIds = ['urgent', 'wellness', 'primary', 'labs', 'mental', 'weight', 'omt', 'medspa', 'other'];
$patientStatusIds = ['new', 'returning'];
$clinicHours = ['startHour' => 8, 'endHour' => 17, 'stepMinutes' => 30];
$clinicTimeZone = 'America/Chicago';
$maxDaysAhead = 90;
$limits = ['name' => 100, 'email' => 254, 'phone' => 30, 'notes' => 500];

/** Plain English labels for the front-desk email. */
$staffLabels = [
    'urgent' => 'Sick or hurt (urgent)',
    'wellness' => 'Checkup or physical',
    'primary' => 'Primary care / ongoing condition',
    'labs' => 'Lab work or tests',
    'mental' => 'Mental health',
    'weight' => 'Weight loss',
    'omt' => 'Back pain / OMT',
    'medspa' => 'MedSpa consultation',
    'other' => 'Something else',
    'new' => 'New patient',
    'returning' => 'Returning patient',
];

starmed_require_post();

// Bots get a fake success so they have no signal to adapt to.
if (starmed_is_likely_bot()) starmed_respond(['status' => 'success']);

$fields = [
    'visitType' => starmed_field('visitType'),
    'patientStatus' => starmed_field('patientStatus'),
    'date' => starmed_field('date'),
    'time' => starmed_field('time'),
    'name' => starmed_field('name'),
    'email' => strtolower(starmed_field('email')),
    'phone' => starmed_field('phone'),
    'notes' => starmed_field('notes', true),
];

$errors = [];
foreach (['visitType', 'patientStatus', 'date', 'time', 'name', 'email', 'phone'] as $field) {
    if ($fields[$field] === '') $errors[$field] = 'required';
}
if ($fields['visitType'] !== '' && !in_array($fields['visitType'], $visitTypeIds, true)) $errors['visitType'] = 'invalid';
if ($fields['patientStatus'] !== '' && !in_array($fields['patientStatus'], $patientStatusIds, true)) $errors['patientStatus'] = 'invalid';
if ($fields['email'] !== '' && !starmed_valid_email($fields['email'])) $errors['email'] = 'invalid';
if ($fields['phone'] !== '' && !starmed_valid_phone($fields['phone'])) $errors['phone'] = 'invalid';
foreach ($limits as $field => $max) {
    if (starmed_length($fields[$field]) > $max) $errors[$field] = 'too-long';
}

// Date and time are checked against the clinic's own clock and opening days.
$now = new DateTime('now', new DateTimeZone($clinicTimeZone));
$today = $now->format('Y-m-d');
$nowMinutes = (int) $now->format('G') * 60 + (int) $now->format('i');

$date = null;
if ($fields['date'] !== '') {
    if (preg_match('/^(\d{4})-(\d{2})-(\d{2})$/', $fields['date'], $m) && checkdate((int) $m[2], (int) $m[3], (int) $m[1])) {
        $date = new DateTime($fields['date'], new DateTimeZone('UTC'));
    } else {
        $errors['date'] = 'invalid';
    }
}
if ($date) {
    $todayUtc = new DateTime($today, new DateTimeZone('UTC'));
    $daysAhead = (int) round(($date->getTimestamp() - $todayUtc->getTimestamp()) / 86400);
    $weekday = (int) $date->format('w');
    if ($daysAhead < 0) $errors['date'] = 'past';
    elseif ($weekday === 0 || $weekday === 6) $errors['date'] = 'closed';
    elseif ($daysAhead > $maxDaysAhead) $errors['date'] = 'too-far';
}

$minutes = null;
if ($fields['time'] !== '') {
    if (preg_match('/^(\d{2}):(\d{2})$/', $fields['time'], $m)) {
        $value = (int) $m[1] * 60 + (int) $m[2];
        $start = $clinicHours['startHour'] * 60;
        $inHours = $value >= $start && $value < $clinicHours['endHour'] * 60;
        if ($inHours && ($value - $start) % $clinicHours['stepMinutes'] === 0) $minutes = $value;
    }
    if ($minutes === null) $errors['time'] = 'invalid';
}
if ($minutes !== null && !isset($errors['date']) && $fields['date'] === $today && $minutes <= $nowMinutes) {
    $errors['time'] = 'past';
}

if ($errors) starmed_respond(['status' => 'invalid', 'errors' => $errors]);

// Checked after field validation so fixing a mistake never needs a new security check.
if (!starmed_passes_turnstile()) starmed_respond(['status' => 'challenge-failed']);

// Only count requests that would actually be sent, so fixing mistakes never locks anyone out.
if (starmed_is_rate_limited('appointment')) starmed_respond(['status' => 'rate-limited']);

$day = DateTime::createFromFormat('!Y-m-d', $fields['date'], new DateTimeZone($clinicTimeZone));
$slot = DateTime::createFromFormat('!H:i', $fields['time'], new DateTimeZone($clinicTimeZone));
$dayLong = $day->format('l, F j, Y');          // Thursday, November 19, 2026
$dayShort = $day->format('D, M j');            // Thu, Nov 19
$timeLabel = $slot->format('g:i A');           // 10:00 AM
$firstName = explode(' ', $fields['name'])[0];
$visit = $staffLabels[$fields['visitType']];
$patient = $staffLabels[$fields['patientStatus']];

$text = implode("\n", [
    'New appointment request from starmedtx.com. Please confirm with the patient.',
    '',
    "Requested: $dayLong at $timeLabel (Central Time)",
    "Visit: $visit",
    "Patient: $patient",
    '',
    "Name: {$fields['name']}",
    "Phone: {$fields['phone']}",
    "Email: {$fields['email']}",
    '',
    'Notes: ' . ($fields['notes'] !== '' ? $fields['notes'] : '-'),
]);

$html = starmed_render_email([
    'preheader' => "$dayShort at $timeLabel · $visit · {$fields['name']}",
    'eyebrow' => 'Appointment request',
    'title' => 'New appointment request',
    'highlight' => [
        'label' => 'Requested time',
        'primary' => $day->format('l, F j'),   // Thursday, November 19 (requests are at most 90 days out)
        'secondary' => "$timeLabel · Central Time",
    ],
    'rowsTitle' => 'Patient',
    'rows' => [
        ['Name', $fields['name'], null],
        ['Phone', $fields['phone'], starmed_tel_href($fields['phone'])],
        ['Email', $fields['email'], 'mailto:' . $fields['email']],
        ['Visit type', $visit, null],
        ['Seen us before?', $fields['patientStatus'] === 'returning' ? 'Yes, returning patient' : 'No, new patient', null],
    ],
    'messageTitle' => 'Notes from the patient',
    'message' => $fields['notes'],
    'actions' => [
        ['label' => "Call $firstName", 'href' => starmed_tel_href($fields['phone']), 'primary' => true],
        ['label' => 'Reply by email', 'href' => starmed_mailto_href($fields['email'], 'Your StarMed appointment request'), 'primary' => false],
    ],
    'note' => 'This is a request, not a confirmed booking. Please confirm the time with the patient.',
]);

$sent = starmed_send_clinic_email(
    "Appointment request: $dayShort at $timeLabel - {$fields['name']}",
    $text,
    $html,
    $fields['email']
);

starmed_respond(['status' => $sent ? 'success' : 'unavailable']);
