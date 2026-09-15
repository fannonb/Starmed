'use client'

import Image from 'next/image'
import Link from 'next/link'
import PathwayHero from '@/components/care/PathwayHero'
import { useTranslations } from '@/components/layout/LocaleProvider'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'outcomes', label: 'Outcomes' },
  { id: 'included', label: 'What’s included' },
  { id: 'model', label: 'The DPC model' },
  { id: 'start', label: 'Get started' },
] as const

const outcomes = [
  {
    title: 'Fewer work interruptions',
    desc: 'Same- or next-day visits and telemedicine keep minor issues from becoming lost productivity.',
  },
  {
    title: 'Predictable monthly cost',
    desc: 'A clear DPC membership structure instead of surprise visit friction and claim complexity.',
  },
  {
    title: 'Healthier, present teams',
    desc: 'Prevention, chronic support, and fast urgent access help employees stay at work and feel cared for.',
  },
  {
    title: 'Lighter admin load',
    desc: 'Less insurance paperwork for day-to-day primary care — HR focuses on people, not claims chase.',
  },
]

const included = [
  'Same-day or next-day primary & urgent visits',
  'Telemedicine and secure messaging access',
  'Wellness exams and preventive guidance',
  'Support for common chronic conditions',
  'Lab coordination tied to the care plan',
  'A clinical home employees can actually reach',
]

export default function CareEmployersContent() {
  const t = useTranslations()

  return (
    <>
      <PathwayHero
        breadcrumb={t.care.employers.breadcrumb}
        homeLabel={t.common.home}
        title={t.care.employers.title}
        titleAccent={t.care.employers.titleAccent}
        description={t.care.employers.description}
        image="/service-business-photo.webp"
        imageAlt="Employer Direct Primary Care consultation at StarMed"
        imagePosition="center 30%"
      />

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
      <section id="overview" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              Overview
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15]">
              An access model for workplaces —{' '}
              <span className="font-normal text-[#3BA3E8]">not another specialty brochure.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#5A6270]">
              StarMed partners with San Antonio employers who want employees to reach a real
              physician quickly. Direct Primary Care (DPC) removes the insurance middleman from
              everyday primary care so teams get timely visits, wellness support, and fewer
              barriers when something minor needs attention now.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
              Built for owners, HR, and benefits leads who measure success in attendance,
              retention, and predictable spend — not claim volume.
            </p>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl lg:col-span-6">
            <Image
              src="/consultation-preview.jpg"
              alt="StarMed clinician supporting workplace care access"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-[center_25%]"
            />
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section id="outcomes" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#222863] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#7EC8F0]">
              Outcomes
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              What leadership actually feels.
            </h2>
          </div>

          <ol className="mt-12 grid gap-8 sm:grid-cols-2">
            {outcomes.map((item, index) => (
              <li key={item.title} className="border-t border-white/15 pt-6">
                <span className="font-serif text-3xl text-[#7EC8F0]">{index + 1}</span>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-white/75">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Included */}
      <section id="included" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              What’s included
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              Everyday medicine employees can use.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
              Exact plan design is tailored to your company. These are the access pillars most
              employer partners care about first.
            </p>
          </div>
          <ul className="lg:col-span-7">
            {included.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 border-t border-[#D5DEEA] py-4 first:border-t-0 first:pt-0"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[#3BA3E8]"
                />
                <span className="text-base font-medium leading-relaxed text-[#222863]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Model */}
      <section id="model" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-[#0B1220] lg:grid lg:grid-cols-12">
            <div className="relative aspect-[16/11] lg:col-span-5 lg:aspect-auto lg:min-h-full">
              <Image
                src="/service-business.jpg"
                alt="Direct primary care for business teams"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="px-7 py-10 text-white sm:px-10 sm:py-12 lg:col-span-7 lg:flex lg:flex-col lg:justify-center">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#7EC8F0]">
                The DPC model
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight sm:text-[2.1rem]">
                Flat access. Direct physicians. Clear next steps.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/75">
                Employees get a clinical relationship without co-pay theater for covered primary
                care. Employers get a membership conversation grounded in outcomes — not a pile of
                specialty marketing pages.
              </p>
              <Link
                href="/services/direct-primary-care-for-businesses"
                className="mt-8 inline-flex h-11 w-fit items-center rounded-md bg-white px-5 text-sm font-semibold text-[#222863] transition-colors hover:bg-[#EAF2FA]"
              >
                Read the full DPC overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 border-t border-[#E3E8F0] bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                Ready to design workplace access for your team?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#5A6270]">
                Tell us your headcount, locations, and what “good care access” means for your
                company. We’ll outline a Direct Primary Care path that fits.
              </p>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center rounded-md bg-[#222863] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52]"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
