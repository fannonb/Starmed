'use client'

import Image from 'next/image'
import Link from 'next/link'
import PathwayHero from '@/components/care/PathwayHero'
import { useTranslations } from '@/components/layout/LocaleProvider'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'care', label: 'Everyday care' },
  { id: 'access', label: 'How to get care' },
  { id: 'more', label: 'Also available' },
  { id: 'start', label: 'Get started' },
] as const

const everydayCare = [
  {
    title: 'Primary & preventive care',
    desc: 'A lasting relationship with a physician who knows your history — checkups, vaccines, and proactive plans.',
    href: '/services/primary-and-preventive-care',
    image: '/service-primary-photo.jpg',
  },
  {
    title: 'Urgent & minor care',
    desc: 'Same-day or next-day attention for sudden illness, sprains, stitches, and minor trauma.',
    href: '/services/urgent-care-and-minor-procedures',
    image: '/service-urgent-photo.jpg',
  },
  {
    title: 'Physical & wellness exams',
    desc: 'Unhurried physicals shaped around age, work, school, travel, and your goals.',
    href: '/services/physical-and-wellness-exams',
    image: '/service-wellness.jpg',
  },
  {
    title: 'Chronic condition management',
    desc: 'Steady partnership for hypertension, diabetes, thyroid disease, and other long-term needs.',
    href: '/services/chronic-condition-management',
    image: '/service-chronic-photo.jpg',
  },
  {
    title: 'Pediatric & geriatric care',
    desc: 'Thoughtful visits for growing kids and aging adults — patience and clarity at every stage.',
    href: '/services/pediatric-and-geriatric-care',
    image: '/service-pediatric-care.webp',
  },
]

const alsoAvailable = [
  {
    title: 'Diagnostic & laboratory',
    desc: 'Labs and screening kept close to your care plan.',
    href: '/services#diagnostics',
  },
  {
    title: 'Body composition analysis',
    desc: 'Muscle, fat, and metabolic insight beyond the scale.',
    href: '/services/body-composition-analysis',
  },
  {
    title: 'Weight loss management',
    desc: 'Medical guidance with nutrition and sustainable habits.',
    href: '/services/weight-loss-management',
  },
  {
    title: 'Osteopathic manipulative treatment',
    desc: 'Hands-on care for back pain, migraines, and tension.',
    href: '/services/osteopathic-manipulative-treatment',
  },
]

export default function CareIndividualsContent() {
  const t = useTranslations()

  return (
    <>
      <PathwayHero
        breadcrumb={t.care.individuals.breadcrumb}
        homeLabel={t.common.home}
        title={t.care.individuals.title}
        titleAccent={t.care.individuals.titleAccent}
        description={t.care.individuals.description}
        image="/service-pediatric.jpg"
        imageAlt="A StarMed clinician with a child during a family care visit"
        imagePosition="center 22%"
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
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              Overview
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15]">
              One clinic. Your whole household.{' '}
              <span className="font-normal text-[#3BA3E8]">Unhurried care.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#5A6270]">
              StarMed is built for San Antonio families who want a physician relationship — not a
              revolving door of short visits. Whether you need a checkup, same-week urgent help, or
              steady management of a long-term condition, we start with who you are and what you
              need next.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
              Choose concierge membership for continuous access, or a conventional insurance visit
              when that fits better. Same clinicians. Same standard.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:col-span-7 lg:aspect-[5/4]">
            <Image
              src="/service-family.jpg"
              alt="Family-centered care at StarMed Clinic"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover object-[center_25%]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#081020]/45 via-transparent to-transparent"
            />
            <p className="absolute bottom-5 left-5 right-5 font-serif text-lg text-white sm:text-xl">
              From first visits to lifelong follow-through.
            </p>
          </div>
        </div>
      </section>

      {/* Everyday care */}
      <section id="care" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              Everyday care
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              Start with the care you need most.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
              Five core pathways for individuals and families — each with a dedicated page when
              you’re ready to go deeper.
            </p>
          </div>

          <ol className="mt-12 space-y-0 divide-y divide-[#D5DEEA] border-y border-[#D5DEEA]">
            {everydayCare.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group grid items-center gap-6 py-7 transition-colors sm:grid-cols-12 sm:gap-8 sm:py-8"
                >
                  <span className="font-serif text-3xl text-[#3BA3E8] sm:col-span-1">
                    {index + 1}
                  </span>
                  <div className="sm:col-span-6 lg:col-span-5">
                    <h3 className="text-lg font-semibold text-[#222863] transition-colors group-hover:text-[#3BA3E8]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5A6270] sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                  <div className="relative hidden aspect-[16/10] overflow-hidden rounded-xl sm:col-span-5 sm:block lg:col-span-5 lg:col-start-8">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="280px"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <span
                    aria-hidden="true"
                    className="hidden text-[#3BA3E8] sm:col-span-1 sm:block lg:hidden"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Access models */}
      <section id="access" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              How to get care
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              Two ways in. One clinical standard.
            </h2>
          </div>

          <div className="mt-12 grid gap-0 overflow-hidden rounded-2xl border border-[#E3E8F0] lg:grid-cols-2">
            <div className="bg-[#222863] px-7 py-10 text-white sm:px-10 sm:py-12">
              <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#7EC8F0]">
                Concierge membership
              </p>
              <h3 className="mt-3 font-serif text-2xl font-medium sm:text-[1.75rem]">
                Continuous access to your physician
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                24/7 contact, same- or next-day visits, and longer appointments — for patients who
                want a deeper relationship than a standard schedule allows.
              </p>
              <Link
                href="/membership"
                className="mt-8 inline-flex h-11 items-center rounded-md bg-white px-5 text-sm font-semibold text-[#222863] transition-colors hover:bg-[#EAF2FA]"
              >
                Explore membership
              </Link>
            </div>
            <div className="bg-[#F4F7FB] px-7 py-10 sm:px-10 sm:py-12">
              <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#3BA3E8]">
                Conventional visits
              </p>
              <h3 className="mt-3 font-serif text-2xl font-medium text-[#222863] sm:text-[1.75rem]">
                Insurance visits when that fits
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
                Book a traditional clinic visit billed to your plan. No membership required — and
                you still receive StarMed’s unhurried clinical care.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex h-11 items-center rounded-md bg-[#222863] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52]"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Also available */}
      <section id="more" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 border-t border-[#E3E8F0] bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                Also available
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863]">
                Diagnostics, body goals, and hands-on specialty care.
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold text-[#3BA3E8] transition-colors hover:text-[#222863]"
            >
              View all services →
            </Link>
          </div>

          <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {alsoAvailable.map((item) => (
              <li key={item.href} className="border-t border-[#E3E8F0] pt-5">
                <Link href={item.href} className="group block">
                  <h3 className="text-base font-semibold text-[#222863] transition-colors group-hover:text-[#3BA3E8]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#5A6270]">{item.desc}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Get started */}
      <section id="start" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <Image
          src="/home-hero-2.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(8,16,32,0.94) 0%, rgba(34,40,99,0.88) 48%, rgba(34,40,99,0.72) 100%)',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Ready for care that fits your household?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              Tell us who you’re booking for — yourself, a child, a parent — and we’ll help you
              choose membership or a conventional visit.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-11 items-center rounded-md bg-white px-5 text-sm font-semibold text-[#222863] transition-colors hover:bg-[#EAF2FA]"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
