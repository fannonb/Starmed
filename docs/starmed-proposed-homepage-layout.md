# StarMed Clinic — Proposed Homepage Layout

**Companion to:** `starmed-homepage-audit-and-hcd-redesign.md`
**Purpose:** A ready-to-build layout spec for the redesigned homepage — section order, layout notes, and sample copy — so this can go straight to a designer or developer for review.

> Sample headlines, subheads, and stats below are written to demonstrate tone, length, and structure only. Swap in approved real numbers, legal-reviewed claims, and final pricing before anything ships.

---

## Section 1 — Header
**Layout:** Sticky top nav. Logo left, nav links center, language toggle + primary CTA button right.

**Nav items:** Home · About · Services (mega-menu) · Membership · For Business · Contact

**Services mega-menu (grouped, not flat):**
- **Everyday Care** — Primary & Preventive Care · Urgent Care & Minor Procedures · Pediatric & Geriatric Care · Physical & Wellness Exams
- **Diagnostics & Chronic Care** — Diagnostic & Laboratory Services · Body Composition Analysis · Chronic Condition Management
- **Specialty & Wellness** — Osteopathic Manipulative Treatment (OMT) · Weight Loss Management
- **Mental Health & Brain Wellbeing** — Mental Wellness Therapy · Ketamine Infusion Therapy · Neuro & Biofeedback · Brain Mapping
- **For Organizations** — Direct Primary Care for Businesses

**Primary CTA button:** "Book an Appointment"

---

## Section 2 — Hero
**Layout:** Full-width band. Text block left (headline, subhead, two CTAs), supporting image/photo right.

**Headline (sample):** "Healthcare That Actually Has Time for You"
**Subhead (sample):** "Choose concierge membership for 24/7 access, or visit us the traditional way with your insurance. Either way, you get a doctor who knows your name."

**Primary CTA:** "Book an Appointment"
**Secondary CTA:** "Compare Care Options" (anchor-links to Section 5)

---

## Section 3 — Trust Bar
**Layout:** Horizontal band, 3 stats, icon + number + label.

**Stats (verify current figures before publishing):**
- Years in practice
- Patients served
- Patient satisfaction rate

*(Replace "97% Accuracy in work" with the existing 95% patient-satisfaction figure — it's already on the site, just buried further down.)*

---

## Section 4 — "Choose Your Path" *(new section)*
**Layout:** 3-card row. Each card: icon, one-line label, one-sentence description, "Explore" link.

**Card 1 — Individuals & Families**
"Primary care, urgent visits, pediatrics, and more for you and your loved ones."
→ Links to Section 6 (Core Services)

**Card 2 — Businesses**
"Give your team direct, insurance-free access to care."
→ Links to Section 9 (For Businesses)

**Card 3 — Mental Health & Brain Wellbeing**
"Therapy, ketamine infusion, and brain mapping for real recovery."
→ Links to Section 8 (Mental Health spotlight)

*Why this section exists:* it does the audience-segmentation work in one glance, before asking anyone to read paragraphs about membership models or scroll through a 12-item service list.

---

## Section 5 — Concierge vs. Conventional
**Layout:** Two-column comparison card, side by side, one CTA under each column. Replaces today's two separate paragraphs.

| | Concierge Membership | Insurance-Based Visit |
|---|---|---|
| **Access** | 24/7 phone, text, and email with your doctor | Standard office hours |
| **Appointments** | Same-day or next-day | Subject to availability |
| **Cost** | Flat monthly, quarterly, or annual fee | Billed through your insurance |
| **Best for** | People who want maximum access and unhurried time with their doctor | People who want to use their existing insurance coverage |
| **CTA** | "See Membership Plans" | "Book an Insurance Visit" |

---

## Section 6 — Core Services
**Layout:** 4-group grid mirroring the nav taxonomy (Section 1). Each group has a header and an icon list; each item links to its own service page. One-line description per item (existing meta-descriptions are already well-written and can be reused here — no need to draft new copy).

**Bottom of section:** "View All Services" link → full services index (see the "Services Index" recommendation in the site-wide proposals document).

*This single grid replaces today's three separate, inconsistent lists ("What We Provide," "Our Core Services," "Services We Offer").*

---

## Section 7 — Membership Benefits (merged)
**Layout:** Icon grid, 6–8 cards maximum (down from ~16 spread across two duplicated sections today).

**Sample set:** 24/7 Access · Same/Next-Day Appointments · Direct Doctor Contact · Lab Work & Screenings Included · Specialist Referrals · Travel Medicine · Minor Emergency Care · Prescription Management

---

## Section 8 — Mental Health & Brain Wellbeing Spotlight
**Layout:** Promote to an earlier scroll position than today (it's currently one of the last sections despite being some of the strongest, most differentiated content on the site). Keep the existing 4-card structure — Mental Health, Ketamine Therapy, Neuro & Biofeedback, Brain Mapping — the copy here is already good.

**Addition:** one reassuring line about privacy/confidentiality, since this decision often carries more hesitation than booking a physical checkup.

**CTA:** "Talk to Our Mental Health Team" (distinct from the generic "Get Started" used elsewhere)

---

## Section 9 — For Businesses
**Layout:** Keep the current two-column layout (text + image). Keep the three existing bullets.

**CTA:** "Request a Business Consultation" (distinct from the patient-facing "Book an Appointment," since it's a different conversation with a different decision-maker)

---

## Section 10 — Testimonials
**Layout:** Carousel or 3-card row.

**Fixes:**
- De-duplicate the Olivia Smith quote (currently repeated back-to-back).
- Add a third testimonial specifically about the membership/concierge experience — the current two both describe acute/urgent-care visits, which doesn't help someone deciding whether membership is worth it.

---

## Section 11 — FAQ Teaser *(new section)*
**Layout:** 4-question accordion, "See All FAQs" link to the full FAQ page.

**Suggested questions to feature here:**
- "What's the difference between concierge and conventional care?"
- "How much does membership cost?"
- "Do you accept my insurance?"
- "Can I switch between plans later?"

*These are the exact questions a first-time visitor is holding when they land on this page — surfacing them here (instead of only in the footer-linked FAQ page) removes friction before it causes a bounce.*

---

## Section 12 — Booking Form
**Layout:** Keep the current fields (Name, Email, Phone, Subject, Message, consent checkbox).

**Addition:** one line setting expectations after submission — e.g., "We'll get back to you within one business day." Nothing like this exists today; the form currently just ends at "Submit Response" with no indication of what happens next.

---

## Section 13 — Footer
**Layout:** Keep the current structure (About blurb, social links, contact info, quick links, membership CTA box).

**Fix:** Correct the second listed phone number so its `tel:` link dials its own number instead of duplicating the first one.

---

## Full Section Order (at a glance)
1. Header
2. Hero
3. Trust Bar
4. Choose Your Path *(new)*
5. Concierge vs. Conventional
6. Core Services (consolidated grid)
7. Membership Benefits (merged)
8. Mental Health & Brain Wellbeing Spotlight
9. For Businesses
10. Testimonials
11. FAQ Teaser *(new)*
12. Booking Form
13. Footer
