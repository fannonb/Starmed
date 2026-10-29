# StarMed Homepage Redesign: Primary Care, MedSpa, and a Simpler Path to Booking

Date: October 29, 2026  
Status: Homepage implemented locally for review (hero, Step 1 care panels, Step 2 access options, FAQs, booking links); `/membership` and a MedSpa landing page not yet updated  
References: `../index.html` (MedSpa concept), the current homepage (`app/[locale]/page.tsx`), `starmed-primary-care-medspa-proposal.md`

This proposal supersedes the homepage section order in `starmed-homepage-layout-and-membership-revision.md`. The service mapping in `starmed-primary-care-medspa-proposal.md` still applies.

## Summary

Bring the MedSpa and wellness services from `index.html` onto the homepage next to Primary Care. Replace the current membership with the three packages from `index.html`: **StarMED Essential**, **StarMED Premier**, and **StarMED Radiance**. Keep insurance visits and self-pay visits visible as ways to get care without a membership.

The visitor answers two questions, then books:

1. **What do you need?** Medical care, or aesthetics and wellness.
2. **How do you want to access it?** A membership, or pay as you go (insurance, self-pay, or per MedSpa treatment).

Each homepage section answers one of these questions. No other section asks the visitor to make a choice.

## What the two pages do today

### `index.html` (MedSpa concept)

Strengths:

- Puts primary care, wellness (weight, hormones, IV/NAD+) and aesthetics in one place.
- Strong split layout, generous white space, image-led sections.
- Three clearly positioned tiers: Essential (everyday medical access), Premier (concierge medical care plus MedSpa benefits), Radiance (aesthetics and wellness).

Weaknesses:

- Insurance and self-pay get a single line in the care section.
- No booking path. Links point to placeholders (the old site and an example email address).
- Its own notes say the MedSpa menu and membership benefits are proposed and not yet confirmed.

### Current homepage

Section order: `Hero → CareFinder → ChooseYourPath → ServicesByNeed → CareThatFits → StandardOfCare → PatientTestimonials → VisitUs`

- Entirely primary care. The hero, the quiz, and the 12 service tiles are all medical.
- A visitor makes four decisions before booking: the three-step quiz, an audience (individuals / employers / mental health), a service, then a way to pay. Adding MedSpa to this structure would make the page longer and harder to follow.
- StandardOfCare promises 24/7 doctor access and same- or next-day visits "for members". Under the new packages only Premier offers this, so visitors could wrongly expect it from Essential or Radiance.
- The membership is one plan billed monthly, quarterly, or annually. That model does not fit three named packages.

## Proposed homepage layout

```text
HEADER  Logo | Primary Care ▾ | MedSpa & Wellness ▾ | Memberships | About | Contact | EN/ES | [Book]
        ([Book] first asks: "Medical visit" or "MedSpa consultation")
──────────────────────────────────────────────────────────────────────────
1. HERO (split, static image pair: clinical + aesthetic)
   "Primary care and medical aesthetics, under one roof in San Antonio."
   [Book a medical visit]   [Book a MedSpa consultation]
   ★ 5.0 Google · 10+ years in San Antonio · English / Español
──────────────────────────────────────────────────────────────────────────
2. STEP 1: CHOOSE YOUR CARE (two equal panels)
   PRIMARY CARE                         MEDSPA & WELLNESS
   image + one sentence                 image + one sentence
   • Everyday & urgent visits           • Botox & fillers
   • Chronic care & diagnostics         • Skin rejuvenation, laser & RF
   • Mental health & specialty care     • IV hydration & NAD+
   • Weight & hormone health            • Hair & regenerative care
   [See all medical services]           [See the MedSpa menu]
   small link: "Care for your team →" (employers)
──────────────────────────────────────────────────────────────────────────
3. STEP 2: CHOOSE HOW YOU'D LIKE TO ACCESS CARE
   ── Memberships ──
   ESSENTIAL           PREMIER ★              RADIANCE
   Medical             Medical + MedSpa       MedSpa & wellness
   Everyday access     Signature concierge    Aesthetic & wellness club
   3–4 key benefits    3–4 key benefits       3–4 key benefits
   [Request details]   [Request details]      [Request details]
                       [Compare all benefits →]
   ── Or pay as you go, no membership needed ──
   INSURANCE VISIT  |  SELF-PAY VISIT  |  MEDSPA PER TREATMENT
   Billed to plan   |  Pay per visit   |  Consult + quote
   [Book a visit]   |  [Book a visit]  |  [Book a consult]
   "Membership does not replace health insurance."
──────────────────────────────────────────────────────────────────────────
4. PATIENT REVIEWS (existing component, fewer cards, source link)
──────────────────────────────────────────────────────────────────────────
5. QUICK FAQs (4–5)
──────────────────────────────────────────────────────────────────────────
6. STEP 3: VISIT US (existing VisitUs: map, hours, phone)
   [Book a medical visit]   [Book a MedSpa consultation]
──────────────────────────────────────────────────────────────────────────
FOOTER  Primary Care · MedSpa · Essential · Premier · Radiance · Employers · FAQ · Contact
```

### Why this order

- **Memberships and pay-as-you-go options share one heading.** "How do I pay?" becomes a single decision in a single place. Insurance and self-pay stay clearly visible, while the three packages get most of the space.
- **The Step 1 / Step 2 / Step 3 labels** show visitors where they are without adding screens or a quiz.
- **Both hero buttons go straight to booking.** Visitors who already know what they want skip the page; everyone else scrolls through the two steps.

## Section details

### 1. Header

`Logo | Primary Care | MedSpa & Wellness | Memberships | About | Contact | EN/ES | Book`

Primary Care and MedSpa & Wellness open grouped menus. On general pages, Book first asks "Medical visit or MedSpa consultation?" On category and service pages it preselects the matching option.

### 2. Hero

Static split layout: copy on the left, a medical image and an aesthetic image on the right. Stacks on mobile. Replaces the current primary-care slideshow so both offerings are visible without waiting for slides.

Draft copy:

> **Primary care and medical aesthetics, under one roof in San Antonio.**
>
> See a doctor who has time for you, or plan treatments that help you look and feel your best — as a member, with insurance, or paying per visit.

Actions: **Book a medical visit** and **Book a MedSpa consultation**. Keep the verified Google rating, years in San Antonio, and English/Spanish availability below the buttons.

Do not make membership the first decision or imply that membership is required for care.

### 3. Step 1: Choose your care

Two equal panels side by side on desktop, stacked (Primary Care first) on mobile. Each panel has one image, a title, one sentence, four linked service groups, and a link to the full catalogue.

| Primary Care | MedSpa & Wellness |
| --- | --- |
| Everyday & urgent visits | Botox & fillers |
| Chronic care & diagnostics | Skin rejuvenation, laser & RF |
| Mental health & specialty care | IV hydration & NAD+ |
| Weight & hormone health | Hair & regenerative care |
| **See all medical services** | **See the MedSpa menu** |

- Service groups link to sections of the category landing pages.
- Weight management, body composition, and hormone health stay owned by Primary Care on their existing pages. The MedSpa panel can link to the same pages as related wellness services, so there are no duplicate pages.
- Employer care becomes a small **Care for your team** link under the Primary Care panel rather than a third card.
- Ketamine therapy, OMT, and mental wellness stay under Primary Care's specialty group.

This replaces ChooseYourPath and ServicesByNeed on the homepage. The full service lists stay on the category pages.

### 4. Step 2: Choose how you'd like to access care

#### Memberships

Three cards, same order on desktop and mobile. Each card shows its category tag, positioning label, three or four highlights, and a **Request details** button that carries the package name into the contact form.

| | Essential | Premier | Radiance |
| --- | --- | --- | --- |
| Category tag | Medical | Medical + MedSpa | MedSpa & wellness |
| Label | Everyday access | Signature concierge | Aesthetic & wellness club |
| Homepage highlights | Personalized preventive health plan; extended scheduled visits; chronic condition follow-up; preferred rates on select wellness services | Everything in Essential; direct physician communication under membership terms; same- or next-day priority, subject to availability; preferred MedSpa member benefits | Personalized aesthetic consultation; periodic skin and treatment-plan reviews; member rates on eligible injectables and facials; priority aesthetic scheduling |

- Premier gets the featured border, as in `index.html`. Label it "Signature concierge", not "Most popular", unless data supports that.
- Radiance always shows its MedSpa & wellness tag so it is not read as an upgrade over Premier.
- Full benefit lists, terms, and a comparison table live on `/membership`, linked by **Compare all benefits**.
- Until prices are supplied, show **Request details** instead of a price. Do not invent prices, quantities, or discount levels.
- Optional add-ons (for example IV add-ons in Radiance) must read as optional. Preferred rates must not read as included treatments.

#### Full benefit lists for `/membership`

**StarMED Essential — Everyday access**

- Personalized preventive health plan
- Extended scheduled visits
- Member scheduling privileges
- Chronic condition follow-up
- Preferred rates on select wellness services

**StarMED Premier — Signature concierge**

- Everything in Essential
- Direct physician communication under membership terms
- Same- or next-day appointment priority, subject to availability
- Expanded annual wellness review
- Coordinated referrals and follow-up
- Preferred MedSpa member benefits

**StarMED Radiance — Aesthetic & wellness club**

- Personalized aesthetic consultation
- Periodic skin and treatment-plan reviews
- Member rates on eligible injectables and facials
- Priority aesthetic scheduling
- Optional IV and wellness add-ons

#### Pay as you go

Directly below the packages, under the line **Or pay as you go — no membership needed**:

| Insurance visit | Self-pay visit | MedSpa per treatment |
| --- | --- | --- |
| A regular clinic visit billed to your insurance | A regular clinic visit you pay for yourself | Consultation, then a quote for your treatment plan |
| Billed to your plan | Pay per visit | Priced per treatment |
| **Book a visit** | **Book a visit** | **Book a consultation** |

Close the section with: *Membership does not replace health insurance. Emergency care, outside labs, medications, procedures, and specialist services may be charged separately.*

This replaces the current CareThatFits section ("Three ways to see us").

### 5. Patient reviews

Reuse PatientTestimonials with fewer cards and a clear link to the source. Keep each review's real service context. Do not present medical reviews as MedSpa results; add MedSpa reviews only once real ones exist.

### 6. Quick FAQs

Reuse the existing HomeFaq component (built but not rendered today) with four or five questions, each linking to the full FAQ:

- What is the difference between Primary Care and MedSpa?
- Does Radiance include medical care?
- Can I book without a membership?
- Do you take my insurance?
- How is MedSpa treatment priced?

Answer package questions only from the confirmed benefit definitions.

### 7. Step 3: Visit us

Reuse VisitUs (map, address, hours, phone). End with **Book a medical visit** and **Book a MedSpa consultation**.

### 8. Footer

Add links to Primary Care, MedSpa & Wellness, Essential, Premier, Radiance, employer care, FAQ, and Contact above the existing copyright line.

## Changes from the current homepage

| Current section | Proposal |
| --- | --- |
| Hero (primary care slideshow) | Rewritten for medical and MedSpa care, with a static image pair and two booking buttons |
| CareFinder quiz | Moved to the Primary Care landing page; it is a medical triage tool, not a homepage first step |
| ChooseYourPath + ServicesByNeed | Combined into the two Step 1 care panels; employer care becomes a small link |
| CareThatFits (Membership / Self-pay / Insurance) | Becomes Step 2: three packages plus a pay-as-you-go row |
| Monthly / quarterly / annual membership | Each package gets its own ID; billing frequency becomes an option inside a package on `/membership`, only where offered |
| StandardOfCare | Removed, or rewritten with promises that apply to everyone (unhurried visits, clear treatment plans); Premier-only promises move to the Premier card |
| PatientTestimonials, VisitUs | Kept, slightly trimmed |
| HomeFaq (unused) | Brought back with the questions above |

The page goes from 8 sections to 6. Booking is available from the hero, every package and pay-as-you-go card, and the end of the page.

## Design notes

- Keep the current fonts (Google Sans and P22 Mackinac) and the navy/cyan palette. Take the spacing, split layout, and thin-bordered cards from `index.html`, not its fonts.
- Mobile: stack the care panels (Primary Care first), stack the packages in the same order, and show pay-as-you-go as a short list. The bottom bar keeps Book / Call / Text; Book asks "Medical or MedSpa?"
- Check the Spanish copy at narrow widths, especially the header, hero buttons, and package cards.

## Implementation notes (for later)

- Replace `MembershipCadence` in `data/membership.ts` with package IDs (`essential`, `premier`, `radiance`), each with a category, benefits, price state, and optional billing options.
- Define package benefits once and reuse them on the homepage, `/membership`, service pages (`ServiceWaysToPay`), and form notifications.
- Audit every generic membership promise (hero, StandardOfCare, service pages, FAQs, membership page) and scope it to the right package.
- Keep existing service URLs and bilingual routes. Carry category, service, and package context through booking and language switching.

## To confirm with StarMED before launch

1. **MedSpa services:** which treatments are actually offered. `index.html` says its menu is not yet verified.
2. **Package prices and terms:** until supplied, cards show "Request details".
3. **Radiance:** whether it includes any medical care. The FAQ answer depends on this.
4. **MedSpa and insurance:** confirm MedSpa treatments are self-pay only.
5. **Physician name:** `index.html` spells it "Derrick Randdolf, MD"; check against the About page.
