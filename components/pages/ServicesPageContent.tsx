'use client'

import Image from 'next/image'
import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'
import { useLocalizedServices } from '@/hooks/useLocalizedServices'

export default function ServicesPageContent() {
  const t = useTranslations().pages.servicesPage
  const care = useTranslations().pages.careThatFits
  const services = useLocalizedServices()

  return (
    <>
      <section
        className="border-b border-white/10 py-14 sm:py-16 lg:py-20"
        style={{
          background: 'linear-gradient(165deg, #1a1f4a 0%, #222863 50%, #2a3470 100%)',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#7EC8F0]">
              {t.eyebrow}
            </p>
            <h1 className="mt-3 font-serif text-[2.35rem] font-medium leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.1rem]">
              {t.title}{' '}
              <span className="italic font-normal text-[#7EC8F0]">{t.titleAccent}</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">{t.desc}</p>
          </div>
        </div>
      </section>

      <section id="service-catalog" className="scroll-mt-32 bg-[#F4F7FB] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-[#222863] sm:text-3xl">
            {t.catalogTitle}
          </h2>

          <ol className="mt-10 grid list-none grid-cols-1 gap-5 p-0 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
            {services.map((service) => (
              <li key={service.id} id={service.id} className="min-w-0 scroll-mt-36">
                <LocaleLink
                  href={service.href ?? '/contact'}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_16px_40px_-28px_rgba(34,40,99,0.28)] ring-1 ring-[#222863]/8 transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222863]"
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
                  <div className="flex flex-1 flex-col px-5 py-5 sm:px-6">
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
                    <p className="mt-2 text-sm leading-relaxed text-[#5A6270]">{service.detail}</p>
                  </div>
                </LocaleLink>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              {t.accessEyebrow}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              {t.accessTitle}{' '}
              <span className="italic font-normal text-[#3BA3E8]">{t.accessTitleAccent}</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A6270]">{t.accessDesc}</p>
          </div>

          <div className="mt-12 grid gap-0 overflow-hidden border border-[#E3E8F0] lg:grid-cols-2">
            <div className="border-b border-[#E3E8F0] bg-[#F4F7FB] px-6 py-10 sm:px-8 lg:border-b-0 lg:border-r lg:px-10 lg:py-12">
              <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#3BA3E8]">
                {care.conciergeTitle}
              </p>
              <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight text-[#222863]">
                {care.conciergeDesc}
              </h3>
              <LocaleLink
                href="/membership"
                className="mt-8 inline-flex h-11 items-center rounded-md bg-[#222863] px-5 text-sm font-semibold text-white hover:bg-[#1a1f52]"
              >
                {t.membershipCta}
              </LocaleLink>
            </div>
            <div className="bg-white px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
              <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#3BA3E8]">
                {care.conventionalTitle}
              </p>
              <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight text-[#222863]">
                {care.conventionalDesc}
              </h3>
              <LocaleLink
                href="/contact"
                className="mt-8 inline-flex h-11 items-center rounded-md border border-[#D5DEEA] px-5 text-sm font-semibold text-[#222863] hover:bg-[#F4F7FB]"
              >
                {t.contactCta}
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
