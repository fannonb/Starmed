'use client'

import Image from 'next/image'
import Link from 'next/link'
import PathwayHero from '@/components/care/PathwayHero'
import { useTranslations } from '@/components/layout/LocaleProvider'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'pathways', label: 'Care pathways' },
  { id: 'process', label: 'How it works' },
  { id: 'privacy', label: 'What to expect' },
  { id: 'start', label: 'Get started' },
] as const

const specialtyPaths = [
  {
    title: 'Mental wellness',
    desc: 'Personal therapy and support for anxiety, stress, grief, and emotional wellbeing — shaped around your life, not a script.',
    href: '/services/mental-wellness',
    image: '/service-mental-photo.webp',
    imageAlt: 'A quiet mental wellness consultation at StarMed',
  },
  {
    title: 'Ketamine infusion therapy',
    desc: 'Supervised infusion care for treatment-resistant depression, anxiety, and PTSD when standard approaches fall short.',
    href: '/services/ketamine-infusion-therapy',
    image: '/service-ketamine-photo.webp',
    imageAlt: 'Ketamine infusion therapy setting at StarMed',
  },
  {
    title: 'Osteopathic manipulative treatment',
    desc: 'Hands-on OMT for migraines, tension, and musculoskeletal strain that often travel with stress and mood concerns.',
    href: '/services/osteopathic-manipulative-treatment',
    image: '/service-omt-photo.webp',
    imageAlt: 'Osteopathic manipulative treatment at StarMed',
  },
]

const process = [
  {
    title: 'Start with a conversation',
    desc: 'Share what you’re experiencing and what you’ve already tried. We listen first — then outline realistic options.',
  },
  {
    title: 'Build a clear plan',
    desc: 'Therapy, medical support, ketamine when appropriate, or coordinated primary care — matched to your goals and safety.',
  },
  {
    title: 'Stay supported',
    desc: 'Follow-up, medication review when needed, and a clinical home that doesn’t disappear between sessions.',
  },
]

export default function CareMentalHealthContent() {
  const t = useTranslations()

  return (
    <>
      <PathwayHero
        breadcrumb={t.care.mental.breadcrumb}
        homeLabel={t.common.home}
        title={t.care.mental.title}
        titleAccent={t.care.mental.titleAccent}
        description={t.care.mental.description}
        image="/service-brain-mapping.jpg"
        imageAlt="A calm brain-wellbeing session at StarMed Clinic"
        imagePosition="center 35%"
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
      <section id="overview" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-end lg:gap-16 lg:px-8">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              Overview
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              Specialty care with space to breathe —{' '}
              <span className="font-normal text-[#3BA3E8]">not a crowded waiting room.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-[#5A6270]">
              This path is for people seeking mood, trauma, and brain-focused support. We keep the
              tone calm, the setting discreet, and the plan clinical — whether you need talk therapy,
              carefully supervised ketamine therapy, or hands-on relief for tension that lives in the
              body.
            </p>
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section id="pathways" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              Care pathways
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              Three focused ways we can help.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
              Start with the path that feels closest. We’ll help refine from there after we
              understand your history and goals.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {specialtyPaths.map((path, index) => (
              <Link
                key={path.href}
                href={path.href}
                className="group grid overflow-hidden rounded-2xl border border-[#E3E8F0] transition-colors hover:border-[#3BA3E8]/40 lg:grid-cols-12"
              >
                <div className="relative aspect-[16/10] lg:col-span-5 lg:aspect-auto lg:min-h-[16rem]">
                  <Image
                    src={path.image}
                    alt={path.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col justify-center px-6 py-8 sm:px-9 lg:col-span-7">
                  <span className="font-serif text-2xl text-[#3BA3E8]">{index + 1}</span>
                  <h3 className="mt-2 font-serif text-2xl font-medium text-[#222863] transition-colors group-hover:text-[#3BA3E8]">
                    {path.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-[#5A6270]">
                    {path.desc}
                  </p>
                  <span className="mt-5 text-sm font-semibold text-[#3BA3E8]">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              How it works
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              From first contact to ongoing support.
            </h2>
          </div>

          <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {process.map((step, index) => (
              <li key={step.title} className="relative">
                <span className="font-serif text-4xl text-[#3BA3E8]">{index + 1}</span>
                <h3 className="mt-3 text-lg font-semibold text-[#222863]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5A6270] sm:text-base">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What to expect */}
      <section id="privacy" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:col-span-5 lg:aspect-[4/5]">
            <Image
              src="/service-mental-live.webp"
              alt="Discreet mental wellness care environment"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              What to expect
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              Private, clinical, and honest about fit.
            </h2>
            <ul className="mt-8 space-y-6">
              <li className="border-t border-[#E3E8F0] pt-5">
                <h3 className="font-semibold text-[#222863]">A discreet setting</h3>
                <p className="mt-1.5 text-base leading-relaxed text-[#5A6270]">
                  Sessions and infusions are designed for calm and confidentiality — not a busy
                  primary-care rush.
                </p>
              </li>
              <li className="border-t border-[#E3E8F0] pt-5">
                <h3 className="font-semibold text-[#222863]">Screening before specialty care</h3>
                <p className="mt-1.5 text-base leading-relaxed text-[#5A6270]">
                  Ketamine and advanced protocols begin with evaluation. We’ll tell you clearly if
                  another path is safer or more appropriate.
                </p>
              </li>
              <li className="border-t border-[#E3E8F0] pt-5">
                <h3 className="font-semibold text-[#222863]">Not an emergency room</h3>
                <p className="mt-1.5 text-base leading-relaxed text-[#5A6270]">
                  If you are in crisis or at immediate risk, call 911 or go to the nearest emergency
                  department. StarMed supports planned, supervised care.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#222863] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Take the next quiet step.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              Contact the clinic to ask about mental wellness, ketamine therapy, or whether
              another StarMed path fits better. We’ll help you start with clarity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center rounded-md bg-white px-5 text-sm font-semibold text-[#222863] transition-colors hover:bg-[#EAF2FA]"
              >
                Contact us
              </Link>
              <Link
                href="/care/individuals"
                className="inline-flex h-11 items-center rounded-md border border-white/30 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Looking for primary care instead?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
