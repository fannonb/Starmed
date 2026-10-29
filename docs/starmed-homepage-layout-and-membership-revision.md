# StarMed Homepage: Two Service Categories and Three Membership Packages

> **Superseded:** see [starmed-homepage-redesign-proposal.md](starmed-homepage-redesign-proposal.md) for the current homepage proposal. Kept for history.

Date: October 29, 2026  
Status: Proposal for review; no application implementation  
References: `../index.html`, the current homepage, and `starmed-primary-care-medspa-proposal.md`

**User-approved design adjustment:** Omit the physician/team/approach/credentials section from the homepage. Implement the two service panels followed directly by the membership collection, retaining the current Google Sans and P22 Mackinac fonts and navy/cyan palette. The team section described below is superseded by this instruction. The homepage design and shared membership preview are now implemented locally for review; Medspa inquiries use the existing contact form.

## Direction

Organize the homepage around **Primary Care** and **Medspa**, followed by a shared membership collection of **StarMED Essential**, **StarMED Premier**, and **StarMED Radiance**, as described in `index.html`.

The user has selected these three packages as the intended replacement for the current membership presentation. Their names and positioning are the target direction. Final prices, package terms, and treatment availability remain content inputs to resolve before release.

This revision supersedes the earlier recommendation to retain the existing membership as the target model. It also replaces the earlier suggestion of separate category cards followed by a service selector: combine category introduction and service discovery into two visible service panels to keep the homepage focused.

The homepage should answer three questions in order:

1. What type of care can I find here?
2. Which services fit my needs?
3. Would a membership suit me, and which one?

## Current homepage assessment

The current rendered component order in `app/[locale]/page.tsx` is:

`Header → Hero → CareFinder → ChooseYourPath → ServicesByNeed → CareThatFits → StandardOfCare → PatientTestimonials → VisitUs → Footer`

| Current element | Effect on the proposed offering | Recommended change |
| --- | --- | --- |
| Primary-care-only hero and clinical slideshow | Does not introduce Medspa | Balanced headline, category actions, and static split composition |
| Three-question Care Finder immediately after the hero | Introduces a medical decision flow before visitors can choose a category | Relocate to the Primary Care landing page |
| Individuals/families, businesses, and mental health pathway cards | Mix audiences and specialties where two category choices are needed | Replace with Primary Care and Medspa service panels |
| Twelve-item medical services grid | Adding the full Medspa menu would make a long, uneven catalog | Show four linked service groups per category; retain full catalogs on category pages |
| Membership / self-pay / insurance cards and three fit lists | Compares payment/access methods rather than the new packages | Replace the main section with Essential / Premier / Radiance; retain a compact non-member options strip |
| Standard-of-care promises of same/next-day visits and 24/7 doctor access for members | Could incorrectly imply Essential and Radiance include Premier access | Put package benefits on the relevant package cards; keep shared trust content category-neutral |
| Medical patient testimonials | Support the established practice, but do not establish Medspa experiences | Retain accurate attribution and introduce Medspa testimonials only when available |
| Location and simple copyright footer | Contact block can be reused; footer lacks category discovery | Add category and package links and contextual booking actions |

## Recommended homepage order

### 1. Shared header

`Logo | Primary Care | Medspa | Memberships | About | Contact | EN/ES | Book`

Primary Care and Medspa link to their category landing pages and expose grouped menus. Memberships links to the three-package collection. Put employer care inside Primary Care navigation and the footer.

On general pages, Book opens a medical visit / Medspa consultation choice. Category and service pages preselect the appropriate context.

### 2. Balanced hero

Use a static split composition: text on the left, a restrained paired image composition showing medical care and aesthetic consultation on the right. Stack on mobile. Both offerings remain visible without depending on slideshow timing.

Draft copy:

> **Personalized care. Confidence in every visit.**
>
> Primary care, medical wellness, and aesthetic treatments in San Antonio — with care options shaped around your goals.

Actions:

- **Explore Primary Care** → Primary Care landing page.
- **Explore Medspa** → Medspa landing page.

Keep a compact line of verified review information, San Antonio location, and English/Spanish availability. Do not make membership selection the first decision or imply that membership is required to obtain care.

Retain the existing navy, blue, and serif/sans identity. Adapt the reference's whitespace and split composition while giving both care categories clear representation.

### 3. Two service panels: category introduction and discovery together

Place two equally sized panels side by side on desktop and stack Primary Care followed by Medspa on mobile. Both are visible in the page; avoid hiding one behind a selector in the initial proposal.

Each panel contains:

- One relevant image.
- Category title and one-sentence description.
- Four linked service groups.
- A clear link to the complete category catalog.

| Primary Care panel | Medspa panel |
| --- | --- |
| Everyday and family care | Injectables |
| Chronic care and diagnostics | Skin rejuvenation, laser and RF |
| Mental health and specialty care | Hair restoration |
| Medical weight and hormone health | IV and wellness consultations |
| **View Primary Care services** | **View Medspa services** |

Group links can lead to sections on the category landing page rather than attempting to represent each group with one treatment page.

Preserve the complete mapping:

- Primary Care includes routine and urgent visits, exams, family care, chronic conditions, diagnostics, mental wellness, ketamine therapy, OMT, body composition, weight management, hormone health, and employer care.
- Medspa includes the reference's injectable, skin, device-based, hair/PRP, and infusion wellness service families, subject to confirmed availability.
- Medical weight management, body composition, and hormone health remain owned by Primary Care. Medspa can link to them as related medical wellness services using the same detail pages.
- Employer care receives a small **Care for your team** link within the Primary Care panel or its landing page, rather than a third equal category card.

This combined section replaces both the homepage audience-card section and the exhaustive medical icon grid. It gives each category comparable prominence without repeating the same navigation in several sections.

### 4. Physician and team introduction

A concise image-and-copy section introduces the people behind the care, their verified credentials, and the practice's approach. Link to the full About page.

Use shared trust messages such as personal attention, clear consultation plans, and English/Spanish availability. Move package-specific access commitments out of the current generic Standard of Care section.

### 5. The StarMED Membership Collection

Three comparable cards on desktop, stacked in the same order on mobile:

| Essential | Premier | Radiance |
| --- | --- | --- |
| Everyday access | Signature concierge | Aesthetic & wellness club |
| Primary Care | Primary Care + selected Medspa benefits | Medspa |
| Closer relationship with the primary care team | Expanded access and coordination | Ongoing aesthetic maintenance |
| **Explore Essential** | **Explore Premier** | **Explore Radiance** |

Use a subtle featured treatment for Premier, matching its emphasis in the reference. Label it **Signature concierge**; do not call it Most popular without supporting information.

Keep card headings and actions aligned. Use three to four concise highlights per card on the homepage. Put full benefit lists, pricing, terms, and comparison on `/membership`.

Radiance is a separate aesthetic/wellness pathway. Its position as the third card must not suggest that it includes or upgrades Premier's medical benefits.

#### Source benefit lists to preserve on the membership page

**StarMED Essential — Everyday access**

- Personalized preventive health plan.
- Extended scheduled visits.
- Member scheduling privileges.
- Chronic condition follow-up.
- Preferred rates on select wellness services.

**StarMED Premier — Signature concierge**

- Everything in Essential.
- Direct physician communication under membership terms.
- Same- or next-day appointment priority, subject to availability.
- Expanded annual wellness review.
- Coordinated referrals and follow-up.
- Preferred Medspa member benefits.

**StarMED Radiance — Aesthetic & wellness club**

- Personalized aesthetic consultation.
- Periodic skin and treatment-plan reviews.
- Member rates on eligible injectables and facials.
- Priority aesthetic scheduling.
- Optional IV and wellness add-ons.

The reference does not specify prices, quantities, credit allowances, renewal terms, or exact discount levels. Do not invent them. Optional add-ons must remain visibly optional, and preferred rates must not be represented as included treatments.

Keep package selection separate from billing frequency. Monthly, quarterly, and annual can become payment choices within a package only where offered. Do not retain them as the three plan identities or introduce one global payment toggle unless all three packages support those choices.

Until fees are supplied, use **Request package details** instead of a fabricated price. A package inquiry should carry the selected package to the contact/request flow.

#### Suggested homepage highlights

| Package | Homepage highlights |
| --- | --- |
| Essential | Preventive health plan; extended scheduled visits; chronic condition follow-up; preferred select wellness rates |
| Premier | All Essential benefits; direct physician communication; same/next-day priority subject to availability; preferred Medspa benefits |
| Radiance | Personalized aesthetic consultation; skin/treatment reviews; eligible treatment member rates; priority aesthetic scheduling |

### 6. Compact non-member access strip

Replace the current second set of large fit/comparison cards with a short reassurance section:

> **Prefer to book an individual visit?**
>
> Explore insurance and self-pay options for Primary Care, or request a Medspa consultation and treatment quote.

Actions: **Book a medical visit** and **Request a Medspa consultation**.

This retains access information while giving the new membership collection the main comparison space. Keep insurance and payment wording specific to the relevant services.

### 7. Reviews

Reuse the current review component. Preserve service context and actual source attribution. Do not relabel medical testimonials as Medspa results.

Use a small selection and a clear source link; avoid making long testimonials a major obstacle between package comparison and the next action.

### 8. Focused FAQs

Four to five questions on the homepage, with links to complete answers:

- What is the difference between Primary Care and Medspa?
- Which membership suits my needs?
- Does Radiance include primary care?
- Can I book without a membership?
- How do insurance, treatment pricing, and consultation requests work?

Answer package-inclusion questions from the finalized benefit definitions. Do not infer that Radiance includes medical care or that all wellness treatments are bundled into a plan.

### 9. Visit and contact

Reuse the current address, map, phone, hours, and response expectations. End with **Book a medical visit** and **Request a Medspa consultation**. A package inquiry is also reachable from every membership card.

### 10. Footer

Include Primary Care, Medspa, Essential, Premier, Radiance, About, FAQs, employer care, contact details, and approved privacy information.

## Desktop layout wireframe

```text
LOGO   Primary Care  Medspa  Memberships  About  Contact  EN/ES  Book
------------------------------------------------------------------
Balanced headline + supporting copy     Medical + aesthetic imagery
[Explore Primary Care] [Explore Medspa]
Verified trust information
------------------------------------------------------------------
PRIMARY CARE                            MEDSPA
Image + short introduction              Image + short introduction
4 linked service groups                 4 linked service groups
[View Primary Care services]            [View Medspa services]
------------------------------------------------------------------
Team photograph                         Physician/team introduction
                                        [Meet the team]
------------------------------------------------------------------
                    THE MEMBERSHIP COLLECTION
ESSENTIAL                 PREMIER                    RADIANCE
Primary Care              Signature concierge        Medspa
Key benefits              Key benefits               Key benefits
[Explore Essential]       [Explore Premier]          [Explore Radiance]
                     [Compare all benefits]
------------------------------------------------------------------
Non-member access: medical visits | Medspa consultations
------------------------------------------------------------------
Patient reviews
------------------------------------------------------------------
Focused FAQs
------------------------------------------------------------------
Location + hours + medical/Medspa booking actions
------------------------------------------------------------------
Footer: categories, packages, contact, and useful links
```

## Mobile layout

- Keep both category actions visible in the hero, stacked when needed.
- Stack the Primary Care and Medspa panels; do not require sideways swiping to discover the second category.
- Use visible text links for each service group.
- Stack Essential, Premier, and Radiance with concise benefit lists and links to full details.
- Keep the category of each package visible so Radiance is clearly distinguished from the two medical packages.
- Use a compact Book / Call / Text bar. Book opens the category choice on the homepage; package actions retain their package context.
- Verify Spanish copy at narrow widths, especially the header, category actions, and package cards.

## Implications for later implementation

- Replace the cadence-only membership model with stable package IDs: Essential, Premier, and Radiance. Store billing options separately.
- Associate each package with its category, benefit definitions, eligible service benefits, pricing state, and inquiry destination.
- Define package benefits once and reuse them on the homepage, membership comparison, category pages, and request notifications.
- Audit existing generic membership promises across the hero, Standard of Care, service payment blocks, FAQs, and membership page. Scope every access promise to the correct package.
- Keep one service catalog for category ownership and cross-listing. Package eligibility is a separate relationship from category ownership.
- Preserve existing service URLs and bilingual routes.
- Preserve category, service, and package context across booking and language switching.

## Review decisions

The proposed review decision is the page hierarchy and package presentation, rather than implementation details:

1. Two category panels with service-group links replace the current finder, audience cards, and exhaustive service grid on the homepage.
2. Essential, Premier, and Radiance replace the main membership/payment comparison cards.
3. Premier receives visual emphasis; Radiance remains clearly identified as the Medspa package.
4. Self-pay and insurance information remains available in a compact section below the packages.
5. Package-specific promises replace the current blanket membership access claims.

No website code is changed as part of this proposal.
