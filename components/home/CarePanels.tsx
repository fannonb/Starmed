'use client'

import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import EmployerBand from '@/components/care/EmployerBand'
import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'
import { medspaGroups } from '@/data/medspa'

/** Where each Primary Care group leads; MedSpa groups jump to their section on /medspa. */
const primaryHrefs = {
  everyday: '/primary-care#everyday',
  chronic: '/primary-care#chronic',
  mental: '/primary-care#mental',
  weight: '/primary-care#weight',
} as const

const panelClass =
  'flex flex-col overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-[#DCE3F0] scroll-mt-32'

export default function CarePanels() {
  const t = useTranslations().pages.carePanels

  return (
    <section className="bg-[#F4F7FB] py-16 sm:py-20 lg:py-24 scroll-mt-32" id="care">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-[2.5rem] lg:leading-[1.12]">
            {t.title} <span className="italic font-normal text-[#3BA3E8]">{t.titleAccent}</span>
          </h2>
          <p className="mt-3 text-base text-[#5A6270]">{t.desc}</p>
        </header>

        <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-2 lg:gap-6">
          <article className={panelClass} id="primary-care">
            <div className="relative h-52 sm:h-60">
              <Image
                src="/primary-care-consultation.jpg"
                alt="Primary Care doctor consultation"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[center_35%]"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <h3 className="font-serif text-[1.75rem] font-medium leading-tight tracking-tight text-[#222863]">
                {t.primaryTitle}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-[#5A6270] lg:min-h-[3rem]">{t.primaryDesc}</p>

              <ul className="mt-6 divide-y divide-[#E3E8F0] border-y border-[#E3E8F0]">
                {(Object.keys(primaryHrefs) as (keyof typeof primaryHrefs)[]).map((id) => (
                  <li key={id}>
                    <LocaleLink
                      href={primaryHrefs[id]}
                      className="group flex items-center justify-between gap-4 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222863]"
                    >
                      <span>
                        <span className="block font-semibold text-[#1A1A1A] transition-colors group-hover:text-[#3BA3E8]">
                          {t.primaryGroups[id].title}
                        </span>
                        <span className="mt-0.5 block text-sm text-[#5A6270]">{t.primaryGroups[id].desc}</span>
                      </span>
                      <ChevronRight
                        aria-hidden="true"
                        className="h-5 w-5 shrink-0 text-[#3BA3E8] transition-transform group-hover:translate-x-0.5"
                      />
                    </LocaleLink>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-4 pt-7 sm:flex-row sm:items-center sm:justify-between">
                <LocaleLink
                  href="/primary-care"
                  className="inline-flex items-center justify-center rounded-full bg-[#222863] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52]"
                >
                  {t.primaryCta}
                </LocaleLink>
              </div>
            </div>
          </article>

          <article className={panelClass} id="medspa">
            <div className="relative h-52 sm:h-60">
              <Image
                src="/medspa-facial-treatment.jpg"
                alt="MedSpa and aesthetic wellness treatment"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[center_35%]"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <h3 className="font-serif text-[1.75rem] font-medium leading-tight tracking-tight text-[#222863]">
                {t.medspaTitle}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-[#5A6270] lg:min-h-[3rem]">{t.medspaDesc}</p>

              <ul className="mt-6 divide-y divide-[#E3E8F0] border-y border-[#E3E8F0]">
                {medspaGroups.map(({ id }) => (
                  <li key={id}>
                    <LocaleLink
                      href={`/medspa#${id}`}
                      className="group flex items-center justify-between gap-4 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222863]"
                    >
                      <span>
                        <span className="block font-semibold text-[#1A1A1A] transition-colors group-hover:text-[#3BA3E8]">
                          {t.medspaGroups[id].title}
                        </span>
                        <span className="mt-0.5 block text-sm text-[#5A6270]">{t.medspaGroups[id].desc}</span>
                      </span>
                      <ChevronRight
                        aria-hidden="true"
                        className="h-5 w-5 shrink-0 text-[#3BA3E8] transition-transform group-hover:translate-x-0.5"
                      />
                    </LocaleLink>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-[#5A6270]">{t.medspaNote}</p>

              <div className="mt-auto flex flex-col gap-4 pt-7 sm:flex-row sm:items-center sm:justify-between">
                <LocaleLink
                  href="/appointments?visit=medspa"
                  className="inline-flex items-center justify-center rounded-full bg-[#222863] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52]"
                >
                  {t.medspaCta}
                </LocaleLink>
              </div>
            </div>
          </article>
        </div>

        {/* Employer care under both panels: visible to business owners without becoming a third category */}
        <div className="mt-5 lg:mt-6" id="employers">
          <EmployerBand />
        </div>
      </div>
    </section>
  )
}
