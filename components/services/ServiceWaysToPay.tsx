'use client'

import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'
import { clinic } from '@/data/clinic'

/** Membership, self-pay, or insurance visit, shared by service detail pages. */
export default function ServiceWaysToPay() {
  const { pages } = useTranslations()
  const t = pages.twoWays

  const options = [
    {
      title: t.memberTitle,
      desc: t.memberDesc,
      points: t.memberPoints,
      cta: t.memberCta,
      href: '/membership',
    },
    {
      title: t.selfPayTitle,
      desc: t.selfPayDesc,
      points: t.selfPayPoints,
      cta: t.selfPayCta,
      href: '/appointments',
    },
    {
      title: t.insuranceTitle,
      desc: t.insuranceDesc,
      points: t.insurancePoints,
      cta: t.insuranceCta,
      href: '/appointments',
    },
  ]

  return (
    <section id="ways-to-pay" className="bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
          {pages.common.waysToPay}
        </h2>

        <div className="mt-8 grid gap-0 overflow-hidden border border-[#D5DEEA] lg:grid-cols-3">
          {options.map((option, index) => (
            <div
              key={option.title}
              className={`flex flex-col bg-white px-6 py-8 sm:px-8 ${
                index < options.length - 1 ? 'border-b border-[#D5DEEA] lg:border-b-0 lg:border-r' : ''
              }`}
            >
              <h3 className="font-serif text-2xl font-medium tracking-tight text-[#222863]">
                {option.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5A6270] sm:text-base">
                {option.desc}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-[#251719]">
                {option.points.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span aria-hidden="true" className="text-[#3BA3E8]">
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <LocaleLink
                href={option.href}
                className="mt-7 inline-flex h-11 w-fit items-center rounded-lg bg-[#222863] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52]"
              >
                {option.cta}
              </LocaleLink>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-[#5A6270]">
          {pages.common.questions}{' '}
          <a
            href={clinic.phoneHref}
            className="font-semibold text-[#222863] underline-offset-4 hover:underline"
          >
            {clinic.phoneDisplay}
          </a>
        </p>
      </div>
    </section>
  )
}
