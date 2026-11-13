<?php
/**
 * StarMed website form settings.
 *
 * Upload a copy named  starmed-forms.config.php  to the cPanel home folder,
 * ONE LEVEL ABOVE public_html (e.g. /home/<cpanel-user>/starmed-forms.config.php),
 * so it can never be downloaded from the website.
 */
return [
    // Cloudflare dashboard > Turnstile > your widget > Secret key.
    // Leaving it empty turns the Cloudflare check OFF (the PHP error log warns about it).
    'turnstile_secret' => '',

    // Inbox that receives contact and appointment submissions.
    'mail_to' => 'info@starmedtx.com',

    // Sender address. Must be a mailbox on this cPanel account (Email Accounts).
    'mail_from' => 'info@starmedtx.com',
    'mail_from_name' => 'StarMed Clinic Website',

    // Optional: folder for rate-limit counters. Default: starmed-forms-data next to this file.
    'data_dir' => '',
];
