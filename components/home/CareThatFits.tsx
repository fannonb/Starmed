'use client'

import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'
import { clinic } from '@/data/clinic'
import { membershipPlans } from '@/data/membership'

function Check() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
      <path
        d="M2 5.5 L4.4 8 L9 3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const priceFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export default function CareThatFits() {
  const t = useTranslations().pages.twoWays
  const plan = membershipPlans.find((p) => p.popular) ?? membershipPlans[0]

  const options = [
    {
      id: 'membership',
      recommended: true,
      title: t.memberTitle,
      desc: t.memberDesc,
      points: t.memberPoints,
      cta: t.memberCta,
      href: '/membership',
    },
    {
      id: 'insurance',
      recommended: false,
      title: t.insuranceTitle,
      desc: t.insuranceDesc,
      points: t.insurancePoints,
      cta: t.insuranceCta,
      href: '/appointments',
    },
  ]

  const fit = [
    { label: t.fitMemberLabel, points: t.fitMemberPoints, accent: true },
    { label: t.fitInsuranceLabel, points: t.fitInsurancePoints, accent: false },
  ]

  return (
    <section
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 scroll-mt-32"
      id="membership"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            {t.title}{' '}
            <span className="italic font-normal text-[#3BA3E8]">{t.titleAccent}</span>
          </h2>
        </header>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:gap-6">
          {options.map((option) => (
            <article
              key={option.id}
              className={`relative flex flex-col rounded-[1.5rem] p-7 sm:p-8 ${
                option.recommended
                  ? 'bg-[#222863] text-white shadow-[0_28px_60px_-36px_rgba(34,40,99,0.55)]'
                  : 'bg-[#F4F7FB] text-[#1A1A1A] ring-1 ring-[#DCE3F0]'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-serif text-[1.75rem] font-medium leading-tight tracking-tight sm:text-[2rem]">
                  {option.title}
                </h3>
                {option.recommended ? (
                  <span className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-[12px] font-semibold text-[#9BB4FF]">
                    {t.recommended}
                  </span>
                ) : null}
              </div>

              <p
                className={`mt-3 text-[0.95rem] leading-relaxed ${
                  option.recommended ? 'text-white/75' : 'text-[#5A6270]'
                }`}
              >
                {option.desc}
              </p>

              {option.recommended ? (
                <div className="mt-6 flex min-h-[3rem] flex-wrap items-baseline gap-x-2 gap-y-1">
                  {plan.price !== null ? (
                    <>
                      <span className="font-serif text-[2.5rem] font-medium leading-none tracking-tight">
                        {priceFormat.format(plan.price)}
                      </span>
                      <span className="text-sm text-white/70">{t.per[plan.id]}</span>
                    </>
                  ) : (
                    <a
                      href={clinic.phoneHref}
                      className="font-serif text-xl font-medium tracking-tight underline decoration-white/30 underline-offset-4 hover:decoration-white"
                    >
                      {t.callForPricing}
                    </a>
                  )}
                </div>
              ) : (
                <div className="mt-6 flex min-h-[3rem] items-end">
                  <p className="font-serif text-xl font-medium tracking-tight text-[#222863]">
                    {t.insurancePrice}
                  </p>
                </div>
              )}

              <ul
                className="mt-6 flex-1 space-y-3 border-t pt-6"
                style={{
                  borderColor: option.recommended ? 'rgba(255,255,255,0.12)' : '#DCE3F0',
                }}
              >
                {option.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm">
                    <span
                      aria-hidden="true"
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        option.recommended
                          ? 'bg-white/10 text-[#7EB8F8]'
                          : 'bg-white text-[#222863]'
                      }`}
                    >
                      <Check />
                    </span>
                    <span className={option.recommended ? 'text-white/90' : 'text-[#1A1A1A]'}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <LocaleLink
                href={option.href}
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-colors ${
                  option.recommended
                    ? 'bg-white text-[#222863] hover:bg-[#EAF0FF]'
                    : 'bg-[#222863] text-white hover:bg-[#1a1f52]'
                }`}
              >
                {option.cta}
              </LocaleLink>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center">
          <LocaleLink
            href="/membership#compare"
            className="text-sm font-semibold text-[#222863] transition-colors hover:text-[#3BA3E8]"
          >
            {t.compareLink}
          </LocaleLink>
        </p>

        <div className="mt-14 border-t border-[#E3E8F0] pt-12 lg:mt-16">
          <h3 className="text-center font-serif text-2xl font-medium tracking-tight text-[#1A1A1A] sm:text-3xl">
            {t.fitTitle}{' '}
            <span className="italic font-normal text-[#3BA3E8]">{t.fitTitleAccent}</span>
          </h3>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:gap-6">
            {fit.map((column) => (
              <div key={column.label} className="rounded-2xl p-6 ring-1 ring-[#DCE3F0] sm:p-7">
                <p
                  className={`text-sm font-semibold ${column.accent ? 'text-[#222863]' : 'text-[#5A6270]'}`}
                >
                  {column.label}
                </p>
                <ul className="mt-4 space-y-3">
                  {column.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-[#1A1A1A]">
                      <span
                        aria-hidden="true"
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                          column.accent ? 'bg-[#222863]' : 'bg-[#3BA3E8]'
                        }`}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
