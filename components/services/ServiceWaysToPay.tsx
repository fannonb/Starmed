'use client'

import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'
import { clinic } from '@/data/clinic'
import { bookingHref, groupOfService } from '@/data/primaryCare'
import { useCurrentService, useLocalizedServices } from '@/hooks/useLocalizedServices'

/**
 * Insurance, self-pay, or a medical membership, shared by Primary Care pages.
 * On a service page, booking links pre-select that visit type and related services in the same group follow.
 */
export default function ServiceWaysToPay() {
  const { pages } = useTranslations()
  const t = pages.waysToPay
  const current = useCurrentService()
  const services = useLocalizedServices()
  const book = bookingHref(current?.id)

  const options = [
    { ...t.insurance, href: book },
    { ...t.selfPay, href: book },
    // Medical pages point to the full comparison; Radiance there is marked as MedSpa-only
    { ...t.membership, href: '/membership#compare' },
  ]

  const related = current
    ? (groupOfService(current.id)?.serviceIds ?? [])
        .filter((id) => id !== current.id)
        .flatMap((id) => services.filter((service) => service.id === id))
    : []

  return (
    <section id="ways-to-pay" className="bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
          {pages.common.waysToPay}
        </h2>
        <p className="mt-3 text-base text-[#5A6270]">{t.desc}</p>

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
              <ul className="mt-5 flex-1 space-y-2 text-sm text-[#251719]">
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
          {t.note} {pages.common.questions}{' '}
          <a
            href={clinic.phoneHref}
            className="font-semibold text-[#222863] underline-offset-4 hover:underline"
          >
            {clinic.phoneDisplay}
          </a>
        </p>

        {related.length > 0 ? (
          <nav aria-labelledby="related-services" className="mt-12 border-t border-[#DCE3F0] pt-8">
            <h2 id="related-services" className="text-sm font-semibold text-[#222863]">
              {pages.common.related}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
              {related.map((service) => (
                <li key={service.id}>
                  <LocaleLink
                    href={service.href ?? '/primary-care'}
                    className="font-serif text-lg font-medium tracking-tight text-[#222863] transition-colors hover:text-[#3BA3E8]"
                  >
                    {service.title} <span aria-hidden="true">→</span>
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </section>
  )
}
