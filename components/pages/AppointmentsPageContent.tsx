'use client'

import Image from 'next/image'
import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'
import AppointmentForm from '@/components/pages/AppointmentForm'
import { clinic } from '@/data/clinic'

export default function AppointmentsPageContent() {
  const messages = useTranslations()
  const t = messages.pages.appointments

  return (
    <>
      <section className="relative min-h-[18rem] overflow-hidden sm:min-h-[20rem] lg:min-h-[22rem]">
        <Image
          src="/consultation-preview.jpg"
          alt="A StarMed doctor with a patient"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[55%_28%]"
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
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/55">
              <li>
                <LocaleLink href="/" className="transition-colors hover:text-[#7EC8F0]">
                  {messages.common.home}
                </LocaleLink>
              </li>
              <li aria-hidden="true" className="text-[#3BA3E8]/70">
                /
              </li>
              <li className="text-[#7EC8F0]">{t.eyebrow}</li>
            </ol>
          </nav>
          <h1 className="max-w-2xl font-serif text-[2.15rem] font-medium leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
            {t.title}
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80">{t.heroDesc}</p>
        </div>
      </section>

      <section className="bg-[#F4F7FB] py-12 sm:py-14 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div className="relative rounded-2xl bg-white px-5 py-7 ring-1 ring-[#DCE3F0] sm:px-8 sm:py-9 lg:col-span-8">
            <AppointmentForm />
          </div>

          <aside className="lg:col-span-4">
            <div className="rounded-2xl bg-white px-6 py-6 ring-1 ring-[#DCE3F0] lg:sticky lg:top-28">
              <h2 className="font-serif text-2xl font-medium tracking-tight text-[#222863]">
                {t.sideTitle}
              </h2>
              <p className="mt-2 text-base leading-relaxed text-[#3D4452]">{t.sideDesc}</p>
              <a
                href={clinic.phoneHref}
                className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-lg bg-[#222863] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52]"
              >
                {t.callCta}
              </a>
              <p className="mt-5 border-t border-[#E3E8F0] pt-4 text-sm font-semibold text-[#222863]">
                {t.emergency}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
