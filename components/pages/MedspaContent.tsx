'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'
import { HubFaq, HubHero } from '@/components/care/HubSections'
import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'
import { clinic } from '@/data/clinic'
import { medspaGroups, medspaTreatmentHrefs, type MedspaGroupId } from '@/data/medspa'

const groupImages: Record<MedspaGroupId, { src: string; alt: string; position?: string }> = {
  injectables: {
    src: '/medspa-injectables.jpg',
    alt: 'Facial aesthetic injectables and consultation',
    position: 'center 30%',
  },
  skin: {
    src: '/medspa-skin.jpg',
    alt: 'Skin rejuvenation and facial laser treatment',
    position: 'center 35%',
  },
  wellness: {
    src: '/medspa-wellness.jpg',
    alt: 'IV hydration therapy and wellness lounge',
    position: 'center 30%',
  },
  hair: {
    src: '/medspa-hair.jpg',
    alt: 'Hair restoration and scalp health consultation',
    position: 'center 25%',
  },
}

/** The MedSpa & Wellness hub: the treatment menu in the homepage panel's four groups, then Radiance. */
export default function MedspaContent() {
  const { pages } = useTranslations()
  const t = pages.medspaPage
  const panel = pages.carePanels
  const access = pages.access
  const radiance = access.packages.radiance
  const perTreatment = access.payOptions.medspa

  const menuGroups = medspaGroups.slice(0, -1)
  const lastGroup = medspaGroups[medspaGroups.length - 1]

  // One panel per group: menu entries with no link styling, except treatments run by Primary Care
  const groupPanel = (group: (typeof medspaGroups)[number]) => {
    const index = medspaGroups.indexOf(group)
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
        desc={panel.medspaDesc}
        bookHref="/appointments?visit=medspa"
        bookLabel={panel.medspaCta}
        callLabel={pages.primaryCarePage.callCta}
        image="/medspa-treatment.jpg"
        imagePosition="60% 30%"
      />

      {/* A treatment menu, not navigation: treatments are read here and booked through one consultation */}
      <section className="bg-[#F4F7FB] py-14 sm:py-16 lg:py-20" id="menu">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">{t.menuTitle}</h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-2 lg:gap-6">
            {menuGroups.map((group) => groupPanel(group))}

            {/* Last column: the short Hair group shares its space with the consultation call to action */}
            <div className="flex flex-col gap-5 lg:gap-6">
              {lastGroup ? groupPanel(lastGroup) : null}

              <article className="flex flex-1 flex-col justify-center rounded-[1.5rem] bg-[#222863] p-7 text-white sm:p-8">
                <h3 className="font-serif text-2xl font-medium tracking-tight sm:text-[1.75rem]">{t.consultTitle}</h3>
                <p className="mt-2 text-base leading-relaxed text-white/80">{panel.medspaNote}</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                  <LocaleLink
                    href="/appointments?visit=medspa"
                    className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-sm font-semibold text-[#222863] transition-colors hover:bg-[#EAF0FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {panel.medspaCta}
                  </LocaleLink>
                  <a
                    href={clinic.phoneHref}
                    className="text-center text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
                  >
                    {pages.primaryCarePage.callCta.replace('{phone}', clinic.phoneDisplay)}
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16" id="ways-to-pay">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
            {pages.common.waysToPay}
          </h2>

          <div className="mt-8 grid gap-4 lg:grid-cols-3 lg:gap-6">
            {/* Radiance: the MedSpa membership, given the most room */}
            <article className="grid gap-8 rounded-[1.5rem] bg-[#222863] p-7 text-white sm:p-10 md:grid-cols-2 lg:col-span-2">
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-[#7EC8F0]">
                  {access.coversLabel} {access.categories.medspa}
                </p>
                <h3 className="mt-2 font-serif text-3xl font-medium tracking-tight sm:text-[2rem] sm:leading-tight">
                  {radiance.name}
                </h3>
                <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60">
                  {radiance.label}
                </p>
                <p className="mt-4 flex-1 text-base leading-relaxed text-white/80">{radiance.desc}</p>
                <LocaleLink
                  href="/contact?package=radiance#message"
                  className="mt-7 inline-flex h-12 w-fit items-center rounded-lg bg-white px-6 text-sm font-semibold text-[#222863] transition-colors hover:bg-[#EAF0FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {access.requestDetails}
                </LocaleLink>
              </div>
              <ul className="space-y-3 border-t border-white/15 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                {radiance.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-white/90">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#7EC8F0]"
                    >
                      <Check className="h-3 w-3" strokeWidth={2.4} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </article>

            <article className="flex flex-col rounded-[1.5rem] bg-[#F4F7FB] p-7 ring-1 ring-[#DCE3F0] sm:p-8">
              <h3 className="font-serif text-2xl font-medium tracking-tight text-[#222863]">{perTreatment.title}</h3>
              <p className="mt-1 text-sm font-medium text-[#3BA3E8]">{perTreatment.price}</p>
              <p className="mt-4 flex-1 text-base leading-relaxed text-[#5A6270]">{perTreatment.desc}</p>
              <LocaleLink
                href="/appointments?visit=medspa"
                className="mt-7 text-sm font-semibold text-[#222863] transition-colors hover:text-[#3BA3E8]"
              >
                {perTreatment.cta} <span aria-hidden="true">→</span>
              </LocaleLink>
            </article>
          </div>
        </div>
      </section>

      <HubFaq items={t.faqs} />
    </>
  )
}
