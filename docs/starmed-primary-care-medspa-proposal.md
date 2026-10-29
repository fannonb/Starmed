# StarMed: Primary Care and Medspa Website Proposal

Date: October 28, 2026  
Status: Proposed implementation brief; no website changes made  
Reference: [`../index.html`](../index.html) and the existing bilingual Next.js website

**Revision — October 29, 2026:** The user has selected Essential, Premier, and Radiance from `index.html` as the intended membership packages. See [the revised homepage and membership proposal](starmed-homepage-layout-and-membership-revision.md) for the current homepage section order, wireframe, package benefits, and mobile layout. That revision supersedes Section 4's original homepage layout and any earlier recommendation to retain the existing membership model. The service mapping in Section 3 remains applicable.

## 1. Objective

Extend the existing StarMed website to present two clear service categories: **Primary Care** and **Medspa**. Give both categories a distinct patient journey while keeping one brand, one bilingual website, and shared contact and booking infrastructure.

Use the existing Next.js application as the implementation foundation. Adapt the reference HTML's split layouts, generous spacing, and image-led presentation into the established site design.

This document is the proposed direction for the two-category expansion. Where it conflicts with `starmed-proposed-homepage-layout.md`, use this proposal for category structure and homepage section order. The older document remains historical context.

## 2. Core information architecture

- **Primary Care:** everyday healthcare, family care, ongoing conditions, clinical wellness, specialty services, and employer care.
- **Medspa:** aesthetic treatments and consultation-led wellness treatments.
- **Membership:** a way to access care, separate from the service taxonomy.
- **Individuals, families, and employers:** audiences within the relevant category, rather than additional top-level service categories.
- **Wellness:** a descriptive subgroup or cross-link, rather than a third main service category.

The Primary Care label acts as the medical-services umbrella. Specialty services retain clear subgroup names so visitors can distinguish them from routine primary care.

### Proposed navigation

Desktop:

`Logo | Primary Care | Medspa | Membership | About | Contact | EN/ES | Book`

- The logo links to the homepage.
- Primary Care and Medspa each link to a landing page and offer grouped dropdown navigation.
- Keep employer care accessible within Primary Care and in the footer.
- Book opens an explicit category choice on general pages. On category and service pages, it leads to the relevant visit or consultation request.
- On mobile, retain the working navigation menu and language switcher. Present Primary Care and Medspa as expandable groups.
- Use one shared header across the site.

### Proposed route structure

Paths below include the existing locale prefix in production, such as `/en` or `/es`.

| Path | Purpose |
| --- | --- |
| `/` | Shared brand homepage with two category entry points |
| `/services` | Overview of both categories and links to their landing pages |
| `/services/primary-care` | Medical-services landing page |
| `/services/medspa` | Medspa landing page |
| Existing `/services/<service-slug>` paths | Preserve current medical service pages and URLs |
| `/services/medspa/<treatment-slug>` | New Medspa treatment pages, when availability and content are confirmed |
| `/membership` | Essential, Premier, and Radiance package collection, benefits, and billing options |
| `/care/employers` | Existing employer audience journey |
| `/appointments` | Shared request entry point with category-aware fields and messaging |

Preserve existing medical service URLs. Update navigation and breadcrumbs to express their category without requiring a URL migration. If any existing route must change, define and verify a redirect before release.

## 3. Service mapping

“Existing” below means represented in the current site's catalog. “Proposed” means present in the reference HTML and requiring clinic confirmation before being presented as available.

### Primary Care

| Group | Service | Source and implementation treatment |
| --- | --- | --- |
| Everyday and family care | Primary and preventive care | Existing; retain service page |
| Everyday and family care | Urgent and minor care | Existing; retain service page |
| Everyday and family care | Physical and wellness exams | Existing; retain service page |
| Everyday and family care | Pediatric and geriatric care | Existing; retain service page |
| Ongoing health | Chronic condition management | Existing; retain service page |
| Ongoing health | Diagnostics and laboratory services | Existing; retain service page |
| Specialty care | Mental wellness | Existing; retain service page and mental health pathway |
| Specialty care | Ketamine infusion therapy | Existing; retain clinical context within the medical category |
| Specialty care | Osteopathic manipulative treatment | Existing; retain service page |
| Medical wellness | Medical weight management | Existing weight loss management service; use one page |
| Medical wellness | Body composition analysis | Existing; use one page |
| Medical wellness | Hormone health | Proposed; confirm offering and develop content |
| Employer care | Direct primary care for businesses | Existing; retain service page and employer pathway |

### Medspa

| Group | Service family | Source and implementation treatment |
| --- | --- | --- |
| Injectables | Botox and neuromodulators | Proposed; confirm actual treatments and naming |
| Injectables | Dermal fillers | Proposed; confirm offering |
| Skin treatments | Skin rejuvenation, microneedling, and chemical peels | Proposed; begin with one service-family page unless distinct treatments justify separate pages |
| Skin treatments | Laser and RF treatments | Proposed; confirm actual devices and available treatments before creating specific pages |
| Hair treatments | Hair restoration and PRP consultations | Proposed; confirm offering and treatment scope |
| Wellness treatments | IV hydration and NAD+ consultations | Proposed; confirm which services are available and whether separate pages are needed |

### Services shared across visitor interests

Feature links to medical weight management, body composition analysis, and hormone health in a Medspa section titled, for example, **Related medical wellness services**.

Each service has one owning category and one canonical detail page. Cross-listing uses the same catalog entry and URL. Avoid duplicate pages with slightly different copy or separate booking choices for the same service.

The reference's Medical Weight Loss card maps to the existing weight loss service; it is not a new treatment entry.

## 4. Homepage layout

Historical layout proposal: use `starmed-homepage-layout-and-membership-revision.md` for the current recommendation. The revision combines category introductions and service previews into two panels and replaces the access-options section with the three-package collection followed by a compact non-member access strip.

### 1. Shared header

Use the two-category navigation above. Keep the existing logo, bilingual routing, and accessible mobile navigation.

### 2. Balanced hero

Suggested draft copy:

> **Personalized care. Confidence in every visit.**
>
> Primary care, medical wellness, and aesthetic treatments in San Antonio.

Actions:

- **Explore Primary Care** → Primary Care landing page.
- **Explore Medspa** → Medspa landing page.

Use imagery that supports the combined practice. The reference's skincare image and “Medicine, beautifully elevated” headline emphasize aesthetics; the shared homepage should introduce both offerings clearly.

Keep trust information concise and use verified credentials and review information. Avoid adding unverified statistics.

### 3. Two category cards

Two equally prominent cards side by side on desktop and stacked on mobile. Each contains an image, category title, short description, three representative services, and a clear link.

- **Primary Care:** everyday visits, ongoing health, and medical wellness.
- **Medspa:** injectables, skin treatments, and hair or wellness consultations, based on confirmed availability.

These replace the current three-card audience pathway section on the homepage. Audience-specific content remains accessible within Primary Care.

### 4. Selected services

Use a Primary Care / Medspa selector with a small selection of services from each category, followed by a link to the complete category page.

- Aim for four to six representative services per category.
- Show both category entry links even when one selection is active.
- Make every service card a meaningful link.
- Use keyboard-accessible controls and a usable mobile grid or list.
- Keep the full catalog on category pages rather than extending the homepage into a twenty-item list.

### 5. Physician and team introduction

Reuse the existing About story. Add verified team photographs, names, roles, and credentials when available. Link to the full About page.

The reference identifies the physician as “MD”; the existing team data does not establish a credential. Confirm credentials before carrying that text into production.

### 6. Ways to access care

Explain membership, insurance, and self-pay in a clearly labeled **Primary Care** section. Add a separate Medspa consultation and pricing explanation.

Do not reuse medical payment claims automatically for Medspa treatments. Show treatment-specific payment information only when confirmed.

### 7. Reviews

Reuse the existing review component and verified source links. Only label testimonials as Medspa experiences when their content and source support that description.

### 8. Focused FAQs

Suggested topics:

- How do I choose between a medical visit and a Medspa consultation?
- Do I need a membership?
- Which visits accept insurance?
- How do Medspa consultations and treatment pricing work?
- What happens after I request an appointment?

### 9. Visit and contact

Reuse the verified location, phone, hours, directions, and response expectations. Offer separate medical visit and Medspa consultation actions.

### 10. Shared footer

Include both service categories, About, Membership, employer care, FAQs, contact details, hours, and approved privacy information. Keep language navigation consistent.

### Homepage scaffold

```text
Shared header: Primary Care | Medspa | Membership | About | Contact
                              EN / ES | Book
----------------------------------------------------------------
Balanced hero + two category actions
----------------------------------------------------------------
Primary Care card                 | Medspa card
----------------------------------------------------------------
Selected services: Primary Care / Medspa
----------------------------------------------------------------
Physician and team introduction
----------------------------------------------------------------
Primary Care access options       | Medspa consultation information
----------------------------------------------------------------
Patient reviews
----------------------------------------------------------------
Focused FAQs
----------------------------------------------------------------
Location, hours, and two booking actions
----------------------------------------------------------------
Shared footer
```

Move the existing three-question Care Finder onto the Primary Care landing page. It is designed around medical visit needs and should not be an extra step for Medspa visitors.

## 5. Category and detail page templates

### Primary Care landing page

1. Medical-care hero and **Book a visit** action.
2. Links to service groups.
3. Everyday and family care.
4. Ongoing health and diagnostics.
5. Specialty care and medical wellness.
6. Existing Care Finder.
7. Essential and Premier preview, full package comparison link, and insurance/self-pay access information.
8. Employer care entry point.
9. Medical FAQs and contact action.

Retain links to the individuals/families and mental health pathways where they help visitors explore care in more detail.

### Medspa landing page

1. Treatment-focused hero and **Request a consultation** action.
2. Short explanation of the consultation process.
3. Injectable, skin, hair, and wellness service groups.
4. Related medical wellness service links.
5. Team and consultation expectations.
6. Radiance membership preview, approved treatment pricing or instructions for obtaining a quote.
7. Medspa FAQs and consultation action.

Only populate available treatments with booking links. Keep unconfirmed services in internal draft data, or explicitly label a future offering if the clinic chooses to announce it.

### Medspa treatment detail page

Use a reusable layout with:

- Category breadcrumb, treatment name, image, and concise introduction.
- What the consultation or treatment involves.
- Goals discussed during consultation and suitability assessment.
- Expected appointment length and treatment course, when confirmed.
- Recovery, aftercare, and follow-up information, when applicable.
- Approved price or consultation-based quote explanation.
- Treatment-specific FAQs.
- **Request a consultation** action carrying the selected service.

Reuse the existing medical detail-page layouts where suitable. Adapt the payment section and booking language to the service rather than applying the same content to every page.

## 6. Booking journey

Use a shared appointment entry point with explicit category context:

1. General Book action asks **Primary Care visit** or **Medspa consultation**.
2. Category and service links preselect that context.
3. Show only the relevant service choices.
4. Retain contact details, preferred date/time, and optional short notes.
5. Clearly state that a request requires confirmation.
6. Include category and service in the staff notification and confirmation message.

For Medspa, request a consultation rather than implying a selected treatment is already approved or scheduled. Do not collect unnecessary medical details in the public request form.

Update server validation and email handling alongside interface changes. Preserve the selected category and service across language switching. Maintain phone and email fallback routes when delivery fails.

On mobile, use category-aware booking text while retaining Call and Text shortcuts. General pages should open the category choice.

## 7. Membership presentation

The intended packages are now **StarMED Essential**, **StarMED Premier**, and **StarMED Radiance**, as selected by the user on October 29, 2026. These replace the current cadence-only membership presentation in the proposed implementation.

- **Essential:** everyday access and a closer primary care relationship.
- **Premier:** Essential benefits plus signature concierge access, coordination, and preferred Medspa benefits under defined terms.
- **Radiance:** aesthetic and wellness membership with consultation, treatment-plan reviews, eligible member rates, priority aesthetic scheduling, and optional add-ons.
- Monthly, quarterly, and annual are separate billing choices within a package where supported; they are not the package identities.
- Keep the three packages visible on the shared homepage. Feature Essential and Premier within Primary Care and Radiance within Medspa.
- Use the source benefit lists in the revised homepage proposal. Do not invent prices, treatment allowances, discounts, or unsupported cross-package inclusions.
- Audit existing same/next-day and 24/7 access statements: the current blanket promises must not automatically apply to Essential or Radiance.
- Self-pay and insurance remain access/payment information, separate from the package comparison.

See `starmed-homepage-layout-and-membership-revision.md` for the source benefits and proposed package-card layout. Fees and final package terms must be established before purchase or enrollment is enabled.

## 8. Design reuse and reference corrections

| Keep from the current site | Adapt from the reference | Revise before production |
| --- | --- | --- |
| Logo, navy/blue brand, existing typography | Split image-and-copy sections | Three pillars become two main categories |
| Bilingual routes and language control | Generous whitespace and restrained presentation | Skincare-heavy homepage hero becomes balanced |
| Shared header and mobile menu | Image-led category and treatment cards | Static service cards become detail-page links |
| Contact data and location blocks | Clear consultation calls to action | Placeholder email and homepage redirects become real destinations |
| Medical pages and care pathways | Separate Medspa visual emphasis within the brand | Proposed services and membership claims remain drafts until confirmed |
| Form validation and feedback | Structured treatment groupings | English-only reference content becomes fully bilingual |

Maintain a single design system. Differentiate the categories through photography, content, and restrained surface treatments rather than unrelated logos, fonts, or navigation patterns.

The standalone HTML is a reference document, not a replacement application. Its remote stock images and embedded styles should be assessed and adapted during implementation; they should not automatically replace existing production assets and components.

## 9. Catalog and component implementation plan

### Single source of truth

Refactor `data/services.ts` so each service can express:

- Stable service ID.
- Owning category: Primary Care or Medspa.
- Subgroup within that category.
- Optional cross-listing in the other category.
- Availability state, such as draft, coming soon, or available.
- Canonical detail-page path.
- Booking intent: medical visit or consultation.
- Image and localized content references.
- Service ordering and featured placement.

Use the catalog to derive navigation, category listings, homepage selections, related services, and appointment choices. Keep draft offerings out of public menus, booking choices, metadata, and sitemaps.

### Existing files affected

| File or area | Proposed responsibility |
| --- | --- |
| `data/services.ts` | Category, subgroup, cross-listing, availability, and booking metadata |
| `messages/catalog.ts` and `messages/pages.ts` | English and Spanish category and service copy |
| `hooks/useLocalizedServices.ts` | Localized catalog access and category filtering |
| `components/layout/Header.tsx` | Two category menus derived from the catalog |
| `components/home/Hero.tsx` | Balanced brand message and two category actions |
| `components/home/ChooseYourPath.tsx` | Replace homepage audience cards with category entry cards |
| `components/home/ServicesByNeed.tsx` | Category-aware featured service selection |
| `data/membership.ts` | Essential, Premier, and Radiance definitions with billing cadence stored separately |
| `components/home/CareThatFits.tsx` | Three-package collection and compact non-member access information |
| `components/home/StandardOfCare.tsx` | Shared trust content with access promises scoped to the relevant package |
| `components/pages/MembershipPageContent.tsx` | Full benefits, comparison, pricing, and inquiries for the new packages |
| `components/home/CareFinder.tsx` | Reuse within Primary Care; retain valid medical visit mappings |
| `components/pages/ServicesPageContent.tsx` | Two-category overview instead of a single medical catalog |
| New category page content components | Primary Care and Medspa landing-page layouts |
| `components/services/` | Shared detail-page elements and new Medspa template |
| `components/services/ServiceWaysToPay.tsx` | Service-appropriate payment content |
| `components/pages/AppointmentForm.tsx` | Category-aware request fields and preselection |
| `data/appointments.ts` and `lib/actions/appointment.ts` | Validate category/service combinations and include context in notifications |
| `components/layout/LocaleProvider.tsx` | Preserve booking query context when changing language |
| `components/layout/MobileActionBar.tsx` | Contextual visit/consultation action |
| `components/layout/Footer.tsx` | Category links and useful shared information |

Before writing application code, read the relevant guides in `node_modules/next/dist/docs/` as required by `AGENTS.md`. Consult the Superdesign skill before implementing the new UI design.

### Search and accessibility requirements

- Localized titles and descriptions for both category pages and new treatments.
- Canonical URLs and English/Spanish alternate links.
- Sitemap entries for available public pages only.
- Breadcrumbs reflecting the owning category.
- Keyboard-operable menus and selectors, visible focus, and appropriate focus restoration.
- Explicit form labels and programmatically associated errors, including date and time controls.
- Consistent appointment rules in the picker and server validation.
- Responsive images and mobile layouts verified at narrow and wide viewports.
- Metadata and structured data reflect confirmed service availability and business details.

## 10. Implementation phases

### Phase 1: Confirm content and catalog

- Confirm the offered Medspa services, provider credentials, treatment names, and any relevant device names.
- Confirm pricing, consultation policies, and membership boundaries.
- Map existing service IDs and routes into the new taxonomy.
- Prepare English and Spanish category copy and approved assets.

### Phase 2: Build the two-category scaffold

- Add category metadata and shared catalog selectors.
- Build the two landing pages and services overview.
- Update navigation, homepage category cards, and featured services.
- Relocate Care Finder to Primary Care.
- Preserve existing routes and audience pathways.

### Phase 3: Connect treatment content and booking

- Populate confirmed Medspa service pages using the shared template.
- Add category-aware booking preselection and server validation.
- Update notification emails and language switching.
- Add contextual payment information, FAQs, and contact actions.

### Phase 4: Verify and release

- Review mobile and desktop layouts in English and Spanish.
- Verify keyboard navigation and form error handling.
- Verify request delivery using an authorized test destination.
- Check existing URLs, new links, and any redirects.
- Run TypeScript and production build checks.
- Review metadata, language alternates, and sitemap output.
- Confirm that unapproved services and membership packages are absent from public output.

## 11. Acceptance criteria

- Visitors can identify Primary Care and Medspa immediately from the homepage and navigation.
- The site has exactly two main service categories; subgroups do not become competing top-level categories.
- Every existing service remains discoverable and its current URL continues to work.
- Medical weight management, body composition, and hormone health use one owning page each, even when cross-listed.
- Medspa visitors can reach a relevant consultation request without completing the medical Care Finder.
- Booking selections remain consistent across the interface, server validation, staff notifications, and language changes.
- Primary Care payment options are not presented as blanket Medspa coverage.
- Essential, Premier, and Radiance are the package identities; billing frequency remains a separate choice where offered.
- Essential and Radiance do not inherit Premier access promises, and optional add-ons are not shown as included treatments.
- Proposed services and membership packages are not represented as available without clinic confirmation.
- Both languages contain complete navigation, booking, category content, and metadata for launched pages.
- Mobile navigation exposes both categories and does not reduce the site to a Contact link.
- There are no placeholder email addresses or consultation buttons that only return to the homepage.

## 12. Decisions to confirm before implementation

1. Which proposed Medspa treatments are available now, planned for later, or excluded?
2. Which providers deliver each service, and what credentials and photographs may be published?
3. Will hormone health and infusion wellness be offered, and what exact services do those labels cover?
4. What consultation fees, treatment prices, and payment terms can be shown?
5. Will Medspa use the same staff inbox, calendar, hours, and booking workflow as medical visits?
6. What are the final prices, billing choices, benefit limits, and terms for Essential, Premier, and Radiance?
7. Which approved images and treatment descriptions are available in English and Spanish?

The recommended implementation establishes the two-category structure, retains existing medical content, and introduces Essential, Premier, and Radiance with the finalized benefits and terms. Publish confirmed Medspa offerings through the shared catalog and page templates. Use the October 29 homepage revision as the current layout brief.
