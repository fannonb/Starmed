'use client'

import type { SVGProps } from 'react'
import { Check } from 'lucide-react'
import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'
import { membershipPackages } from '@/data/membership'

const priceFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

/* Two-tone line icons drawn for StarMed: navy outline (currentColor) with a sky-blue medical detail. */
const iconProps: SVGProps<SVGSVGElement> = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}
const ACCENT = '#3BA3E8'

/** Health insurance member ID card: member photo, details, and a medical cross. */
function InsuranceCardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="2" y="4.5" width="20" height="15" rx="2.5" />
      <circle cx="8" cy="10.25" r="2.25" />
      <path d="M4.75 16.25c.55-1.75 1.8-2.75 3.25-2.75s2.7 1 3.25 2.75" />
      <path d="M16.75 7.75v3M15.25 9.25h3" stroke={ACCENT} />
      <path d="M14 13.25h5M14 16h3.5" />
    </svg>
  )
}

/** Price tag with a medical cross: pay for the visit itself. */
function PriceTagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M3 11.6V5a2 2 0 0 1 2-2h6.6a2 2 0 0 1 1.4.6l7.4 7.4a2 2 0 0 1 0 2.8l-6.6 6.6a2 2 0 0 1-2.8 0L3.6 13A2 2 0 0 1 3 11.6z" />
      <circle cx="7.5" cy="7.5" r="1.25" />
      <path d="M13.25 10.5v5M10.75 13h5" stroke={ACCENT} />
    </svg>
  )
}

/** Treatment pipette releasing a drop: a single MedSpa treatment. */
function PipetteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <g transform="rotate(45 13 11)">
        <rect x="10.75" y="0.75" width="4.5" height="5" rx="2" />
        <path d="M9.25 5.75h7.5" />
        <path d="M11 5.75v11L13 20l2-3.25v-11" />
        <path d="M11 12.5h4" stroke={ACCENT} />
      </g>
      <path d="M4.6 18.4c-.85 1.1-1.3 1.8-1.3 2.35a1.3 1.3 0 0 0 2.6 0c0-.55-.45-1.25-1.3-2.35z" stroke={ACCENT} />
    </svg>
  )
}

/** Pay-as-you-go options. The MedSpa link pre-selects the consultation on the booking form. */
const payOptions = [
  { id: 'insurance', Icon: InsuranceCardIcon, href: '/appointments' },
  { id: 'selfPay', Icon: PriceTagIcon, href: '/appointments' },
  { id: 'medspa', Icon: PipetteIcon, href: '/appointments?visit=medspa' },
] as const

export default function AccessOptions() {
  const t = useTranslations().pages.access

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 scroll-mt-32" id="membership">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-[2.5rem] lg:leading-[1.12]">
            {t.title} <span className="italic font-normal text-[#3BA3E8]">{t.titleAccent}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-[#5A6270]">{t.desc}</p>
        </header>

        <div className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-12 lg:gap-6">
          {membershipPackages.map((pkg) => {
            const copy = t.packages[pkg.id]
            return (
              <article
                key={pkg.id}
                className={`flex flex-col rounded-[1.5rem] bg-[#F4F7FB] p-7 sm:p-8 ${
                  pkg.featured
                    ? 'ring-2 ring-[#3BA3E8] shadow-[0_28px_60px_-36px_rgba(34,40,99,0.55)]'
                    : 'ring-1 ring-[#DCE3F0]'
                }`}
              >
                {/* Which kind of care the package covers, as a spec row rather than a badge */}
                <p className="-mx-7 -mt-7 rounded-t-[1.5rem] border-b border-[#DCE3F0] bg-white/70 px-7 py-3.5 text-sm font-semibold text-[#222863] sm:-mx-8 sm:-mt-8 sm:px-8">
                  {t.coversLabel} {t.categories[pkg.category]}
                </p>
                <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#3BA3E8]">
                  {copy.label}
                </p>

                <h4 className="mt-1.5 font-serif text-[1.6rem] font-medium leading-tight tracking-tight text-[#222863] sm:text-[1.75rem]">
                  {copy.name}
                </h4>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[#5A6270] md:min-h-[4.7rem]">{copy.desc}</p>

                <p className="mt-5 flex min-h-[2.25rem] items-baseline gap-2">
                  {pkg.price !== null ? (
                    <>
                      <span className="font-serif text-[2.25rem] font-medium leading-none tracking-tight text-[#222863]">
                        {priceFormat.format(pkg.price)}
                      </span>
                      <span className="text-sm text-[#5A6270]">{t.perMonth}</span>
                    </>
                  ) : (
                    <span className="font-serif text-xl font-medium tracking-tight text-[#222863]">
                      {t.priceOnRequest}
                    </span>
                  )}
                </p>

                <ul className="mt-5 flex-1 space-y-3 border-t border-[#DCE3F0] pt-5">
                  {copy.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-[#1A1A1A]">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[#222863]"
                      >
                        <Check className="h-3 w-3" strokeWidth={2.4} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <LocaleLink
                  href={`/contact?package=${pkg.id}#message`}
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-colors ${
                    pkg.featured
                      ? 'bg-[#222863] text-white hover:bg-[#1a1f52]'
                      : 'bg-white text-[#222863] ring-1 ring-[#222863] hover:bg-[#EAF0FF]'
                  }`}
                >
                  {t.requestDetails}
                </LocaleLink>
              </article>
            )
          })}
        </div>

        <p className="mt-6 text-center">
          <LocaleLink
            href="/membership#compare"
            className="text-sm font-semibold text-[#222863] transition-colors hover:text-[#3BA3E8]"
          >
            {t.compareLink}
          </LocaleLink>
        </p>

        {/* Pay as you go: one joined panel, an intro column then the three options, so it reads as the alternative to membership */}
        <div className="mt-14 grid overflow-hidden rounded-[1.5rem] ring-1 ring-[#DCE3F0] lg:grid-cols-4">
          <div className="flex flex-col justify-center bg-[#F4F7FB] p-7 sm:p-8">
            <h3 className="font-serif text-2xl font-medium tracking-tight text-[#222863] sm:text-[1.75rem] sm:leading-tight">
              {t.payTitle}
            </h3>
            <p className="mt-2 text-sm text-[#5A6270]">{t.payDesc}</p>
          </div>

          <ul className="grid bg-white md:grid-cols-3 lg:col-span-3">
            {payOptions.map(({ id, Icon, href }) => {
              const copy = t.payOptions[id]
              return (
                <li
                  key={id}
                  className="flex flex-col border-t border-[#DCE3F0] p-7 sm:p-8 md:[&:not(:first-child)]:border-l lg:border-l lg:border-t-0"
                >
                  <Icon className="h-9 w-9 text-[#222863]" />
                  <h4 className="mt-5 font-serif text-xl font-medium tracking-tight text-[#1A1A1A]">{copy.title}</h4>
                  <p className="mt-1 text-sm font-medium text-[#3BA3E8]">{copy.price}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5A6270]">{copy.desc}</p>
                  <LocaleLink
                    href={href}
                    className="mt-6 inline-flex w-fit items-center gap-1.5 border-b border-[#222863]/25 pb-0.5 text-sm font-semibold text-[#222863] transition-colors hover:border-[#3BA3E8] hover:text-[#3BA3E8]"
                  >
                    {copy.cta} <span aria-hidden="true">→</span>
                  </LocaleLink>
                </li>
              )
            })}
          </ul>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-[#5A6270]">
          {t.disclaimer}
        </p>
      </div>
    </section>
  )
}
