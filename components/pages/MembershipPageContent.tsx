'use client'

import Image from 'next/image'
import LocaleLink from '@/components/layout/LocaleLink'
import { useState } from 'react'
import { useTranslations } from '@/components/layout/LocaleProvider'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'included', label: 'Included' },
  { id: 'plans', label: 'Plans' },
  { id: 'compare', label: 'Compare' },
  { id: 'faq', label: 'FAQ' },
  { id: 'start', label: 'Get started' },
] as const

const included = [
  {
    title: '24/7 physician access',
    desc: 'Reach your doctor weekdays, nights, weekends, and holidays — by phone or email.',
  },
  {
    title: 'Same-day or next-day visits',
    desc: 'Timely appointments with enough time to cover what actually matters.',
  },
  {
    title: 'Direct doctor contact',
    desc: 'No call-center maze. Message or call your physician when you need guidance.',
  },
  {
    title: 'Unhurried appointments',
    desc: 'Longer visits for conversation, follow-up, prevention, and clear next steps.',
  },
  {
    title: 'Hospitalization support',
    desc: 'Your physician coordinates with hospital specialists and stays involved in your care.',
  },
  {
    title: 'Travel medicine',
    desc: 'Vaccines, travel advice, and prescription support when you’re away from home.',
  },
  {
    title: 'Minor urgent care',
    desc: 'Help with sprains, stitches, sudden illness, and minor trauma — without defaulting to the ER.',
  },
  {
    title: 'Wellness & screenings',
    desc: 'Prevention plans and labs designed to catch issues earlier.',
  },
  {
    title: 'Referrals & prescriptions',
    desc: 'Specialist connections, lab orders, medication reviews, and prompt refills.',
  },
]

const planCadence = [
  {
    title: 'Monthly',
    desc: 'Flexible cash-pay rhythm for patients who prefer a lighter ongoing commitment.',
  },
  {
    title: 'Quarterly',
    desc: 'A steady middle option — predictable care access billed a few times a year.',
  },
  {
    title: 'Annual',
    desc: 'Year-long membership for continuous relationship-based care with fewer billing cycles.',
  },
]

const faqs = [
  {
    q: 'What is concierge membership?',
    a: 'A cash-pay membership that gives you continuous access to your StarMed physician — including 24/7 contact, timely appointments, and longer visits — beyond a standard clinic schedule.',
  },
  {
    q: 'How much does membership cost?',
    a: 'StarMed offers transparent flat monthly, quarterly, or annual tiers for individuals and families, with no surprise bills. Contact us for current pricing and the plan that fits your household.',
  },
  {
    q: 'Do I still need insurance?',
    a: 'Many members keep insurance for hospitalizations, specialists, or pharmacy benefits. Membership covers the relationship and access model with your StarMed physician; conventional insurance visits remain available if you prefer that path instead.',
  },
  {
    q: 'Can I cancel or change later?',
    a: 'Yes. There are no mandatory multi-year contracts. You can adjust your cadence or transition between membership and conventional visits as your needs change.',
  },
]

export default function MembershipPageContent() {
  const t = useTranslations().pages.membershipPage
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[22rem] overflow-hidden sm:min-h-[24rem] lg:min-h-[28rem]">
        <Image
          src="/consultation-preview.jpg"
          alt="StarMed physician in an unhurried membership visit with a patient"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[60%_28%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(8,16,32,0.94) 0%, rgba(18,28,58,0.88) 32%, rgba(34,40,99,0.52) 58%, rgba(59,163,232,0.2) 78%, transparent 100%)',
          }}
        />
        <div className="relative z-10 mx-auto flex min-h-[22rem] max-w-6xl flex-col justify-end px-4 pb-10 pt-14 sm:min-h-[24rem] sm:px-6 sm:pb-12 lg:min-h-[28rem] lg:justify-center lg:px-8">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#7EC8F0]">
            {t.eyebrow}
          </p>
          <h1 className="mt-3 max-w-2xl font-serif text-[2.15rem] font-medium leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
            {t.title}{' '}
            <span className="font-normal text-[#7EC8F0]">{t.titleAccent}</span>
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80">{t.heroDesc}</p>
        </div>
      </section>

      <nav
        aria-label="On this page"
        className="sticky top-[60px] sm:top-[76px] lg:top-[88px] z-30 border-b border-[#E3E8F0] bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/90"
      >
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2.5 sm:px-6 lg:px-8">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="shrink-0 rounded-md px-3 py-2 text-sm font-medium text-[#5A6270] transition-colors hover:bg-[#F4F7FB] hover:text-[#222863]"
            >
              {section.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Overview */}
      <section id="overview" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-14">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                Overview
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                Membership is a relationship —{' '}
                <span className="font-normal text-[#3BA3E8]">not a visit slot.</span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-[#5A6270] lg:col-span-5 lg:justify-self-end lg:text-right">
              Instead of waiting for the next appointment window, members get ongoing access to a
              physician who already knows their history — and has time to use it.
            </p>
          </div>

          <div className="mt-12 grid gap-0 overflow-hidden border border-[#D5DEEA] bg-white lg:grid-cols-3">
            {[
              {
                title: 'Access first',
                desc: '24/7 contact and timely appointments when something can’t wait for a routine schedule.',
              },
              {
                title: 'Time to think',
                desc: 'Unhurried visits for prevention, chronic issues, and the questions that get cut short elsewhere.',
              },
              {
                title: 'Cash-pay clarity',
                desc: 'Transparent membership billed annually, quarterly, or monthly — without surprise visit friction.',
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`px-6 py-8 sm:px-8 ${
                  index < 2 ? 'border-b border-[#D5DEEA] lg:border-b-0 lg:border-r' : ''
                }`}
              >
                <span
                  aria-hidden="true"
                  className="font-serif text-2xl font-medium tabular-nums leading-none text-[#3BA3E8]"
                >
                  {index + 1}
                </span>
                <h3 className="mt-3 font-serif text-xl font-medium tracking-tight text-[#222863]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5A6270]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included */}
      <section id="included" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4 lg:sticky lg:top-[136px] lg:self-start">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                Included
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                What membership{' '}
                <span className="font-normal text-[#3BA3E8]">covers.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
                Built for patients who want higher attention than a regular clinic visit — with
                access that follows real life, not office hours alone.
              </p>
              <div className="relative mt-8 hidden min-h-[16rem] overflow-hidden lg:block lg:min-h-[20rem]">
                <Image
                  src="/service-primary-photo.jpg"
                  alt="Personalized StarMed membership care"
                  fill
                  sizes="33vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <ol className="m-0 grid list-none grid-cols-1 gap-0 border-t border-[#D5DEEA] p-0 sm:grid-cols-2 lg:col-span-8">
              {included.map((item, index) => (
                <li
                  key={item.title}
                  className={`border-b border-[#D5DEEA] px-0 py-6 sm:px-5 sm:py-7 ${
                    index % 2 === 0 ? 'sm:border-r' : ''
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="font-serif text-2xl font-medium tabular-nums leading-none text-[#3BA3E8]"
                  >
                    {index + 1}
                  </span>
                  <h3 className="mt-3 font-serif text-lg font-medium tracking-tight text-[#222863] sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A6270]">{item.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              Plans
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              Pay on a rhythm that{' '}
              <span className="font-normal text-[#3BA3E8]">fits your life.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
              StarMed runs concierge membership as a cash-pay program — annual, quarterly, or
              monthly. Same access model; different billing cadence.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {planCadence.map((plan, index) => (
              <article
                key={plan.title}
                className={`flex flex-col border px-6 py-8 sm:px-7 ${
                  index === 1
                    ? 'border-[#222863] bg-[#222863] text-white'
                    : 'border-[#D5DEEA] bg-white text-[#222863]'
                }`}
              >
                <p
                  className={`text-[11px] font-bold tracking-[0.16em] uppercase ${
                    index === 1 ? 'text-[#7EC8F0]' : 'text-[#3BA3E8]'
                  }`}
                >
                  Cash-pay
                </p>
                <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight">{plan.title}</h3>
                <p
                  className={`mt-3 flex-1 text-sm leading-relaxed ${
                    index === 1 ? 'text-white/70' : 'text-[#5A6270]'
                  }`}
                >
                  {plan.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Compare */}
      <section id="compare" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              Compare
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              Membership or a{' '}
              <span className="font-normal text-[#3BA3E8]">conventional visit.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
              StarMed is a hybrid practice. Choose continuous membership access — or book an
              insurance visit when that fits better. Same clinic. Same standards.
            </p>
          </div>

          <div className="mt-12 overflow-hidden border border-[#D5DEEA]">
            <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-[#D5DEEA] bg-[#F4F7FB] text-[11px] font-bold tracking-[0.14em] uppercase text-[#5A6270]">
              <div className="px-4 py-4 sm:px-6">Feature</div>
              <div className="border-l border-[#D5DEEA] px-4 py-4 text-[#222863] sm:px-6">
                Membership
              </div>
              <div className="border-l border-[#D5DEEA] px-4 py-4 sm:px-6">Conventional</div>
            </div>
            {[
              ['Physician access', '24/7 direct contact', 'Clinic hours'],
              ['Appointments', 'Same-day / next-day priority', 'Scheduled visits'],
              ['Visit length', 'Unhurried, relationship-based', 'Standard visit slots'],
              ['Billing', 'Cash-pay membership', 'Insurance-based visits'],
              ['Membership required', 'Yes', 'No'],
            ].map((row) => (
              <div
                key={row[0]}
                className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-[#D5DEEA] last:border-b-0"
              >
                <div className="px-4 py-4 text-sm font-medium text-[#222863] sm:px-6">{row[0]}</div>
                <div className="border-l border-[#D5DEEA] bg-[#F8FBFE] px-4 py-4 text-sm text-[#5A6270] sm:px-6">
                  {row[1]}
                </div>
                <div className="border-l border-[#D5DEEA] px-4 py-4 text-sm text-[#5A6270] sm:px-6">
                  {row[2]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              FAQ
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              Common questions about{' '}
              <span className="font-normal text-[#3BA3E8]">membership.</span>
            </h2>
          </div>

          <div className="mt-10 divide-y divide-[#D5DEEA] border border-[#D5DEEA] bg-white">
            {faqs.map((faq, index) => {
              const open = openFaq === index
              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? null : index)}
                    className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
                  >
                    <span className="font-serif text-lg font-medium tracking-tight text-[#222863] sm:text-xl">
                      {faq.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`mt-1 shrink-0 text-[#3BA3E8] transition-transform ${
                        open ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {open ? (
                    <p className="px-5 pb-5 text-sm leading-relaxed text-[#5A6270] sm:px-6 sm:pb-6">
                      {faq.a}
                    </p>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Start */}
      <section id="start" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden border border-[#D5DEEA] lg:grid-cols-12">
            <div className="flex flex-col justify-center px-6 py-10 sm:px-8 sm:py-12 lg:col-span-6 lg:px-10">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                Get started
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                Ready for continuous{' '}
                <span className="font-normal text-[#3BA3E8]">physician access?</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#5A6270]">
                Contact StarMed to review membership options, confirm the right billing cadence, and
                start a clearer care relationship.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LocaleLink
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-lg bg-[#222863] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52]"
                >
                  Contact the clinic
                </LocaleLink>
                <a
                  href="tel:7262423011"
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-[#D5DEEA] px-5 text-sm font-semibold text-[#222863] transition-colors hover:bg-[#F4F7FB]"
                >
                  Call (726) 242-3011
                </a>
              </div>
            </div>
            <div className="relative min-h-[16rem] sm:min-h-[20rem] lg:col-span-6 lg:min-h-[22rem]">
              <Image
                src="/home-hero-2.jpg"
                alt="StarMed membership consultation in San Antonio"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section
        className="py-14 sm:py-16 lg:py-20"
        style={{
          background: 'linear-gradient(120deg, #1a1f4a 0%, #222863 48%, #2a5f8f 100%)',
        }}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:px-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl lg:leading-[1.12]">
              Put your health first —{' '}
              <span className="font-normal text-[#7EC8F0]">with membership that keeps up.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Prefer a conventional insurance visit instead? Same clinic, same quality — just tell
              us how you want to start.
            </p>
          </div>
          <LocaleLink
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-[#222863] transition-colors hover:bg-[#EAF4FC]"
          >
            Contact us
          </LocaleLink>
        </div>
      </section>
    </>
  )
}
