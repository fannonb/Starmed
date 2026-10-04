'use client'

import Image from 'next/image'
import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'
import { serviceIcons } from '@/components/services/serviceIcons'
import { clinic } from '@/data/clinic'
import { useLocalizedServices } from '@/hooks/useLocalizedServices'

/** Same icons as the homepage service grid and the header menu. */
const iconFor = new Map(serviceIcons)

/** Services grouped the way patients think about them, most common first. */
const groups = [
  { id: 'everyday', serviceIds: ['urgent', 'primary', 'wellness-exams', 'chronic', 'pediatric-geriatric'] },
  { id: 'tests', serviceIds: ['diagnostics', 'body-composition'] },
  { id: 'specialty', serviceIds: ['mental-wellness', 'ketamine', 'omt', 'weight-loss'] },
  { id: 'employers', serviceIds: ['businesses'] },
] as const

export default function ServicesPageContent() {
  const messages = useTranslations()
  const t = messages.pages.servicesPage
  const services = useLocalizedServices()
  const [notSureBefore, notSureAfter] = t.notSure.split('{phone}')

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[18rem] overflow-hidden sm:min-h-[20rem] lg:min-h-[22rem]">
        <Image
          src="/service-primary.jpg"
          alt="A StarMed doctor with a patient"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[center_28%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(8,16,32,0.94) 0%, rgba(18,28,58,0.88) 32%, rgba(34,40,99,0.55) 58%, rgba(59,163,232,0.2) 78%, transparent 100%)',
          }}
        />
        <div className="relative z-10 mx-auto flex min-h-[18rem] max-w-6xl flex-col justify-end px-4 pb-10 pt-14 sm:min-h-[20rem] sm:px-6 sm:pb-12 lg:min-h-[22rem] lg:justify-center lg:px-8">
          <h1 className="max-w-2xl font-serif text-[2.15rem] font-medium leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
            {t.title}
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">{t.desc}</p>
          <p className="mt-3 text-base text-white/85">
            {notSureBefore}
            <a href={clinic.phoneHref} className="font-semibold text-white underline underline-offset-4">
              {clinic.phoneDisplay}
            </a>
            {notSureAfter}
          </p>
        </div>
      </section>

      {/* Grouped services */}
      <section id="service-catalog" className="scroll-mt-32 bg-[#F4F7FB] py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:space-y-14 lg:px-8">
          {groups.map((group) => {
            const copy = t.groups[group.id]
            const items = group.serviceIds.flatMap((id) => {
              const service = services.find((s) => s.id === id)
              return service ? [service] : []
            })

            return (
              <div
                key={group.id}
                id={group.id}
                className="grid scroll-mt-32 gap-6 border-t border-[#DCE3F0] pt-10 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-10"
              >
                <div className="lg:col-span-4">
                  <h2 className="font-serif text-2xl font-medium tracking-tight text-[#222863] sm:text-3xl">
                    {copy.title}
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-[#3D4452]">{copy.desc}</p>
                </div>

                <ul className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:col-span-8">
                  {items.map((service) => {
                    const Icon = iconFor.get(service.id)
                    return (
                      <li
                        key={service.id}
                        id={service.id}
                        className={`scroll-mt-36 ${items.length === 1 ? 'sm:col-span-2' : ''}`}
                      >
                        <LocaleLink
                          href={service.href ?? '/contact'}
                          className="group flex h-full gap-4 rounded-2xl bg-white px-5 py-6 ring-1 ring-[#DCE3F0] transition-[box-shadow,ring-color] hover:ring-[#3BA3E8]/60 hover:shadow-[0_16px_36px_-24px_rgba(34,40,99,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222863] sm:px-6"
                        >
                          {Icon ? (
                            <span
                              aria-hidden="true"
                              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FF] text-[#222863] transition-colors group-hover:bg-[#222863] group-hover:text-[#7EC8F0]"
                            >
                              <Icon className="h-6 w-6" strokeWidth={1.5} />
                            </span>
                          ) : null}
                          <div className="min-w-0 flex-1">
                            <h3 className="flex items-start justify-between gap-3 font-serif text-xl font-medium leading-snug tracking-tight text-[#222863]">
                              {service.title}
                              <span
                                aria-hidden="true"
                                className="mt-0.5 shrink-0 text-[#3BA3E8] transition-transform group-hover:translate-x-0.5"
                              >
                                →
                              </span>
                            </h3>
                            <p className="mt-2 text-base leading-relaxed text-[#3D4452]">
                              {service.detail}
                            </p>
                          </div>
                        </LocaleLink>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {/* Not sure? */}
      <section className="bg-white py-12 sm:py-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              {t.endTitle}
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-[#3D4452]">{t.endDesc}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <LocaleLink
              href="/appointments"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-[#222863] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52]"
            >
              {t.book}
            </LocaleLink>
            <a
              href={clinic.phoneHref}
              className="inline-flex h-11 items-center justify-center rounded-lg border border-[#D5DEEA] px-5 text-sm font-semibold text-[#222863] transition-colors hover:border-[#222863]"
            >
              {t.call}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
