'use client'

import Image from 'next/image'
import {
  BadgePercent,
  CalendarCheck,
  ClipboardList,
  HeartHandshake,
  Sparkles,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react'
import { HubFaq, HubHero } from '@/components/care/HubSections'
import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'
import {
  medspaGroups,
  medspaTreatmentHrefs,
  radianceBenefitIds,
  type MedspaGroupId,
  type RadianceBenefitId,
} from '@/data/medspa'

// Body contouring has no photo yet; its panel renders without one
const groupImages: Partial<Record<MedspaGroupId, { src: string; alt: string; position?: string }>> = {
  injectables: {
    src: '/medspa-injectables.jpg',
    alt: 'Facial aesthetic injectables and consultation',
    position: 'center 30%',
  },
  laser: {
    src: '/medspa-skin.jpg',
    alt: 'Skin rejuvenation and facial laser treatment',
    position: 'center 35%',
  },
  renewal: {
    src: '/medspa-facial-treatment.jpg',
    alt: 'A clinician performing a facial skin treatment',
    position: 'center 35%',
  },
  wellness: {
    src: '/medspa-wellness.jpg',
    alt: 'IV hydration therapy and wellness lounge',
    position: 'center 30%',
  },
}

const radianceIcons: Record<RadianceBenefitId, LucideIcon> = {
  savings: BadgePercent,
  planning: ClipboardList,
  physician: Stethoscope,
  technology: Sparkles,
  continuity: HeartHandshake,
  priority: CalendarCheck,
}

/** The MedSpa & Wellness hub: our approach, the treatment menu in the homepage panel's groups, then Radiance. */
export default function MedspaContent() {
  const { pages } = useTranslations()
  const t = pages.medspaPage
  const panel = pages.carePanels
  const access = pages.access
  const radiance = access.packages.radiance
  const perTreatment = access.payOptions.medspa

  // One panel per group: menu entries with no link styling, except treatments run by Primary Care
  const groupPanel = (group: (typeof medspaGroups)[number], index: number) => {
    const imageInfo = groupImages[group.id]

    return (
      <article
        key={group.id}
        id={group.id}
        className="flex flex-col overflow-hidden scroll-mt-4 rounded-[1.5rem] bg-white ring-1 ring-[#DCE3F0]"
      >
        {imageInfo ? (
          <div className="relative h-48 w-full overflow-hidden sm:h-52">
            <Image
              src={imageInfo.src}
              alt={imageInfo.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              style={{ objectPosition: imageInfo.position || 'center' }}
            />
          </div>
        ) : null}

        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <div className="flex items-baseline gap-4">
            <span aria-hidden="true" className="font-serif text-xl tabular-nums text-[#3BA3E8]">
              {index + 1}
            </span>
            <div>
              <h3 className="font-serif text-2xl font-medium tracking-tight text-[#222863] sm:text-[1.75rem]">
                {panel.medspaGroups[group.id].title}
              </h3>
              <p className="mt-1 text-sm text-[#5A6270]">{panel.medspaGroups[group.id].desc}</p>
            </div>
          </div>

          <dl className="mt-6 divide-y divide-[#E3E8F0] border-t border-[#E3E8F0]">
            {group.treatmentIds.map((id) => {
              const copy = t.treatments[id]
              const href = medspaTreatmentHrefs[id]
              return (
                <div key={id} className="py-4">
                  <dt className="font-serif text-lg font-medium tracking-tight text-[#1A1A1A]">{copy.title}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-[#5A6270]">
                    <span className="block font-semibold text-[#222863]">{copy.tagline}</span>
                    {copy.desc}
                    {href ? (
                      <>
                        {' '}
                        <LocaleLink
                          href={href}
                          className="font-semibold text-[#222863] underline decoration-[#3BA3E8]/50 underline-offset-4 transition-colors hover:text-[#3BA3E8]"
                        >
                          {pages.common.primaryCare} →
                        </LocaleLink>
                      </>
                    ) : null}
                  </dd>
                </div>
              )
            })}
          </dl>
        </div>
      </article>
    )
  }

  return (
    <>
      <HubHero
        title={panel.medspaTitle}
        desc={t.heroDesc}
        bookHref="/appointments?visit=medspa"
        bookLabel={panel.medspaCta}
        callLabel={pages.primaryCarePage.callCta}
        image="/medspa-treatment.jpg"
        imagePosition="60% 30%"
      />

      <section className="bg-white py-14 sm:py-16" id="approach">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              {t.approachTitle}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#3D4452]">{t.approachText}</p>
          </div>
          <blockquote className="border-l-2 border-[#3BA3E8] pl-6 font-serif text-2xl italic leading-snug text-[#222863] lg:col-span-5">
            {t.approachQuote}
          </blockquote>
        </div>
      </section>

      {/* A treatment menu, not navigation: treatments are read here and booked through one consultation */}
      <section className="bg-[#F4F7FB] py-14 sm:py-16 lg:py-20" id="menu">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">{t.menuTitle}</h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-2 lg:gap-6">
            {medspaGroups.map((group, index) => groupPanel(group, index))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16" id="ways-to-pay">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
            {pages.common.waysToPay}
          </h2>

          {/* Radiance: the MedSpa membership, given the most room */}
          <article className="mt-8 grid gap-8 rounded-[1.5rem] bg-[#222863] p-7 text-white sm:p-10 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col lg:col-span-5">
              <p className="text-sm font-semibold text-[#7EC8F0]">
                {access.coversLabel} {access.categories.medspa}
              </p>
              <h3 className="mt-2 font-serif text-3xl font-medium tracking-tight sm:text-[2rem] sm:leading-tight">
                {radiance.name}
              </h3>
              <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60">
                {radiance.label}
              </p>
              <p className="mt-5 text-lg font-semibold leading-snug">{t.radianceLead}</p>
              <p className="mt-3 flex-1 text-base leading-relaxed text-white/80">{t.radianceDesc}</p>
              <LocaleLink
                href="/contact?package=radiance#message"
                className="mt-7 inline-flex h-12 w-fit items-center rounded-lg bg-white px-6 text-sm font-semibold text-[#222863] transition-colors hover:bg-[#EAF0FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {access.requestDetails}
              </LocaleLink>
            </div>
            <ul className="grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-2 lg:col-span-7 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              {radianceBenefitIds.map((id) => {
                const Icon = radianceIcons[id]
                const benefit = t.radianceBenefits[id]
                return (
                  <li key={id} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#7EC8F0]"
                    >
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </span>
                    <div>
                      <p className="font-semibold">{benefit.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-white/75">{benefit.desc}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </article>

          <article className="mt-4 flex flex-col gap-4 rounded-[1.5rem] bg-[#F4F7FB] p-7 ring-1 ring-[#DCE3F0] sm:p-8 md:flex-row md:items-center md:justify-between lg:mt-6">
            <div>
              <h3 className="font-serif text-2xl font-medium tracking-tight text-[#222863]">{perTreatment.title}</h3>
              <p className="mt-1 text-sm font-medium text-[#3BA3E8]">{perTreatment.price}</p>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-[#5A6270]">{perTreatment.desc}</p>
            </div>
            <LocaleLink
              href="/appointments?visit=medspa"
              className="shrink-0 text-sm font-semibold text-[#222863] transition-colors hover:text-[#3BA3E8]"
            >
              {perTreatment.cta} <span aria-hidden="true">→</span>
            </LocaleLink>
          </article>
        </div>
      </section>

      <HubFaq items={t.faqs} />

      <div className="bg-white pb-14 sm:pb-16">
        <p className="mx-auto max-w-6xl px-4 text-xs leading-relaxed text-[#5A6270] sm:px-6 lg:px-8">{t.disclaimer}</p>
      </div>
    </>
  )
}
