'use client'

import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'

export default function FirstNinetyDays() {
  const t = useTranslations().pages.firstVisit

  return (
    <section className="bg-[#F4F7FB] py-16 sm:py-20 lg:py-24 scroll-mt-32" id="first-visit">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              {t.title}{' '}
              <span className="italic font-normal text-[#3BA3E8]">{t.titleAccent}</span>
            </h2>
            <p className="mt-3 max-w-lg text-base text-[#5A6270]">{t.desc}</p>
          </div>
          <LocaleLink
            href="/appointments"
            className="inline-flex h-12 shrink-0 items-center justify-center self-start rounded-full bg-[#222863] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52] sm:self-auto"
          >
            {t.cta}
          </LocaleLink>
        </header>

        <ol className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          <span
            aria-hidden="true"
            className="absolute left-5 right-5 top-5 hidden h-px bg-gradient-to-r from-[#222863] via-[#3BA3E8] to-[#3BA3E8]/20 lg:block"
          />
          {t.steps.map((step, index) => (
            <li key={step.title} className="relative flex gap-4 lg:block">
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#222863] font-serif text-lg text-white ring-4 ring-[#F4F7FB]">
                {index + 1}
              </span>
              <div className="lg:mt-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#3BA3E8]">
                  {step.when}
                </p>
                <h3 className="mt-2 font-serif text-xl font-medium tracking-tight text-[#222863] sm:text-[1.35rem]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5A6270]">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
