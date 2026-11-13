# Deploying StarMed to cPanel (starmedtx.com)

The site is a static export: `pnpm build` writes plain files to `out/`. Apache serves them,
`out/.htaccess` handles HTTPS, `www` → bare domain, language redirects and the 404 page, and the
two forms post to PHP handlers in `out/api/` that email **info@starmedtx.com** through cPanel mail.

## One-time setup

### 1. Email account (cPanel → Email Accounts)
Create **info@starmedtx.com**. Form submissions are sent *from* and *to* this mailbox.

### 2. Email deliverability (cPanel → Email Deliverability)
Make sure SPF and DKIM show **Valid** for starmedtx.com; if not, click **Repair**/**Install**.
starmedtx.com uses Namecheap hosting nameservers (`dns1/dns2.namecheaphosting.com`), so cPanel
manages these records itself. Optionally add a DMARC record in cPanel → Zone Editor:
TXT `_dmarc` = `v=DMARC1; p=none; rua=mailto:info@starmedtx.com`.
MX already points to Namecheap's mail servers, so info@ receives mail with no DNS changes.
(If DNS is ever moved to Cloudflare, copy these records there.)

### 3. Cloudflare Turnstile (Cloudflare dashboard → Turnstile → Add widget)
- Hostnames: `starmedtx.com` and `www.starmedtx.com`
- Widget mode: **Managed**
- Copy the **Site key** (goes into the build) and the **Secret key** (goes on the server).

### 4. Form settings on the server
Copy `deploy/starmed-forms.config.example.php` to the cPanel home folder **one level above
public_html**, named `starmed-forms.config.php`, and paste the Turnstile **secret key** into it.

### 5. SSL
cPanel → SSL/TLS Status → run AutoSSL for starmedtx.com and www.starmedtx.com.
If the site is proxied through Cloudflare (orange cloud), set Cloudflare SSL/TLS mode to
**Full (strict)**.

## Each release

1. Put the Turnstile site key in `.env.production.local`:
   `NEXT_PUBLIC_TURNSTILE_SITE_KEY=<site key>`
2. `pnpm build` (output in `out/`).
3. Upload the **contents** of `out/` into `public_html` (cPanel File Manager: upload a zip, then
   Extract). Include the hidden `.htaccess` files. Replace `_next/` entirely; old files there are
   harmless but can be deleted.

## Checking it works
- `https://starmedtx.com/` redirects to `/en/` (or `/es/` for Spanish browsers).
- Send a test from `/en/contact/` and `/en/appointments/`; both arrive at info@starmedtx.com,
  and **Reply** goes to the address typed in the form.
- If a form says it couldn't send: cPanel → Errors (or `public_html/error_log`) shows
  `StarMed forms:` lines (Turnstile rejected, mail() failed…). Form contents are never logged.
- `https://starmedtx.com/api/_forms.php` must return 403 (shared code is not public).
