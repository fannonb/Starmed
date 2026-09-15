'use client'

import Image from 'next/image'
import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'
import { useLocalizedServices } from '@/hooks/useLocalizedServices'

export default function ComprehensiveCareGrid() {
  const messages = useTranslations()
  const t = messages.pages.servicesGrid
  const accessDesc = messages.pages.servicesPage.accessDesc
  const services = useLocalizedServices()

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28 scroll-mt-32"
      id="services"
      style={{
        background:
          'linear-gradient(rgb(42, 52, 112) 0%, rgb(34, 40, 99) 55%, rgb(26, 31, 74) 100%)',
      }}
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#7EC8F0]">
              {t.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              {t.title}{' '}
              <span className="italic font-normal text-[#7EC8F0]">{t.titleAccent}</span>
            </h2>
          </div>
          <div className="flex max-w-sm flex-col items-start gap-3 lg:items-end">
            <p className="text-sm leading-relaxed text-white/70 lg:text-right">{t.desc}</p>
            <LocaleLink
              href="/services"
              className="text-sm font-semibold text-[#7EC8F0] transition-colors hover:text-white"
            >
              {t.viewAll}
            </LocaleLink>
          </div>
        </header>

        <ol className="mt-14 grid list-none grid-cols-1 gap-5 p-0 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {services.map((service) => (
            <li key={service.id} className="min-w-0">
              <LocaleLink
                id={
                  service.id === 'mental-wellness'
                    ? 'mental-health'
                    : service.id === 'ketamine'
                      ? 'ketamine'
                      : undefined
                }
                href={service.href ?? `/services#${service.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_18px_40px_-28px_rgba(34,40,99,0.35)] ring-1 ring-[#222863]/8 transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222863] scroll-mt-32"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E8F0F8]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-lg font-medium leading-snug tracking-tight text-[#222863] sm:text-xl">
                      {service.title}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-[#3BA3E8] transition-transform duration-300 group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A6270]">{service.desc}</p>
                </div>
              </LocaleLink>
            </li>
          ))}
        </ol>

        <p className="mt-12 max-w-md border-t border-white/15 pt-8 text-base leading-relaxed text-white/70 sm:mt-14 sm:pt-10">
          {accessDesc}
        </p>
      </div>
    </section>
  )
}
