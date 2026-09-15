# StarMed Clinic

Next.js site for StarMed Clinic (San Antonio) — bilingual EN/ES, App Router.

## Project structure

```
app/                 # Next.js App Router (locale-aware routes under [locale]/)
components/
  layout/            # Header, Footer, Logo, i18n shell
  home/              # Homepage sections
  pages/             # Top-level page content (About, Contact, FAQ, …)
  care/              # Care pathway pages
  services/          # Individual service pages + heroes
  forms/             # Appointment date/time pickers
  ui/                # Shared UI primitives (shadcn)
  legacy/            # Unused earlier homepage experiments
data/                # Static data modules
docs/                # Design notes and layout specs
hooks/               # React hooks
lib/                 # i18n helpers, utils
messages/            # EN/ES copy catalogs
public/              # Static assets (images, fonts, icons)
scripts/             # One-off build utilities
proxy.ts             # Next.js locale proxy (replaces middleware)
```

## Scripts

- `pnpm dev` — local development
- `pnpm build` — production build
- `pnpm start` — serve production build
