'use client'

import Image from 'next/image'
import { useState } from 'react'
import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'
import { clinic } from '@/data/clinic'
import { membershipPlans } from '@/data/membership'

const priceFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export default function MembershipPageContent() {
  const { pages } = useTranslations()
  const t = pages.membershipPage
  const plansCopy = pages.twoWays
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const fit = [
    { label: plansCopy.fitMemberLabel, points: plansCopy.fitMemberPoints },
    { label: plansCopy.fitInsuranceLabel, points: plansCopy.fitInsurancePoints },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[22rem] overflow-hidden sm:min-h-[24rem] lg:min-h-[28rem]">
        <Image
          src="/consultation-preview.jpg"
          alt="A StarMed doctor in an unhurried visit with a member"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[60%_28%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(8,16,32,0.94) 0%, rgba(18,28,58,0.88) 32%, rgba(34,40,99,0.52) 58%, rgba(59,163,232,0.2) 78%, transparent 100%)',
          }}
        />
        <div className="relative z-10 mx-auto flex min-h-[22rem] max-w-6xl flex-col justify-end px-4 pb-10 pt-14 sm:min-h-[24rem] sm:px-6 sm:pb-12 lg:min-h-[28rem] lg:justify-center lg:px-8">
          <h1 className="max-w-2xl font-serif text-[2.15rem] font-medium leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
            {t.title}
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80">{t.heroDesc}</p>
        </div>
      </section>

      {/* What's included */}
      <section id="included" className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
            {t.includedTitle}
          </h2>
          <ul className="mt-10 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {t.included.map((item) => (
              <li key={item.title} className="rounded-2xl bg-[#F4F7FB] px-6 py-6">
                <h3 className="text-base font-semibold text-[#222863]">{item.title}</h3>
                <p className="mt-1.5 text-base leading-relaxed text-[#3D4452]">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Plans and prices — prices come from data/membership.ts */}
      <section id="plans" className="bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
            {t.plansTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#3D4452]">{t.plansDesc}</p>

          <ul className="mt-10 grid list-none gap-5 p-0 md:grid-cols-3 lg:gap-6">
            {membershipPlans.map((plan) => (
              <li
                key={plan.id}
                className={`flex flex-col rounded-2xl px-6 py-7 sm:px-7 ${
                  plan.popular
                    ? 'bg-[#222863] text-white shadow-[0_24px_48px_-30px_rgba(34,40,99,0.6)]'
                    : 'bg-white text-[#222863] ring-1 ring-[#DCE3F0]'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-serif text-2xl font-medium tracking-tight">
                    {plansCopy.cadence[plan.id]}
                  </h3>
                  {plan.popular ? (
                    <span className="rounded-full bg-[#3BA3E8] px-2.5 py-0.5 text-xs font-semibold text-white">
                      {plansCopy.popular}
                    </span>
                  ) : null}
                </div>
                <p className={`mt-1 text-base ${plan.popular ? 'text-white/75' : 'text-[#3D4452]'}`}>
                  {t.planDesc[plan.id]}
                </p>

                <div className="mt-6 flex min-h-[3rem] items-baseline gap-2">
                  {plan.price !== null ? (
                    <>
                      <span className="font-serif text-[2.5rem] font-medium leading-none tracking-tight">
                        {priceFormat.format(plan.price)}
                      </span>
                      <span className={`text-sm ${plan.popular ? 'text-white/70' : 'text-[#5A6270]'}`}>
                        {plansCopy.per[plan.id]}
                      </span>
                    </>
                  ) : (
                    <a
                      href={clinic.phoneHref}
                      className={`font-serif text-xl font-medium tracking-tight underline underline-offset-4 ${
                        plan.popular
                          ? 'decoration-white/30 hover:decoration-white'
                          : 'decoration-[#222863]/25 hover:decoration-[#222863]'
                      }`}
                    >
                      {plansCopy.callForPricing}
                    </a>
                  )}
                </div>

                <LocaleLink
                  href="/contact"
                  className={`mt-7 inline-flex h-11 items-center justify-center rounded-lg px-5 text-sm font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-white text-[#222863] hover:bg-[#EAF0FF]'
                      : 'bg-[#222863] text-white hover:bg-[#1a1f52]'
                  }`}
                >
                  {t.planCta}
                </LocaleLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Membership or insurance visit? */}
      <section id="compare" className="scroll-mt-32 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
            {t.compareTitle}
          </h2>

          <table className="mt-10 w-full table-fixed border-collapse overflow-hidden rounded-2xl text-left text-sm ring-1 ring-[#D5DEEA] sm:text-base">
            <thead className="bg-[#F4F7FB] text-[#222863]">
              <tr>
                <th scope="col" className="w-[34%] px-4 py-4 font-semibold sm:px-6">
                  <span className="sr-only">{t.compareFeature}</span>
                </th>
                <th scope="col" className="border-l border-[#D5DEEA] px-4 py-4 font-semibold sm:px-6">
                  {t.compareMember}
                </th>
                <th scope="col" className="border-l border-[#D5DEEA] px-4 py-4 font-semibold sm:px-6">
                  {t.compareInsurance}
                </th>
              </tr>
            </thead>
            <tbody>
              {t.compareRows.map((row) => (
                <tr key={row.label} className="border-t border-[#D5DEEA]">
                  <th scope="row" className="px-4 py-4 font-semibold text-[#222863] sm:px-6">
                    {row.label}
                  </th>
                  <td className="border-l border-[#D5DEEA] px-4 py-4 text-[#3D4452] sm:px-6">
                    {row.member}
                  </td>
                  <td className="border-l border-[#D5DEEA] px-4 py-4 text-[#3D4452] sm:px-6">
                    {row.insurance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:gap-6">
            {fit.map((column) => (
              <div key={column.label} className="rounded-2xl bg-[#F4F7FB] px-6 py-7 sm:px-7">
                <h3 className="text-base font-semibold text-[#222863]">{column.label}</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-[#3D4452] marker:text-[#3BA3E8]">
                  {column.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions */}
      <section id="faq" className="bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
            {t.faqTitle}
          </h2>

          <div className="mt-10 divide-y divide-[#D5DEEA] overflow-hidden rounded-2xl bg-white ring-1 ring-[#D5DEEA]">
            {t.faqs.map((faq, index) => {
              const open = openFaq === index
              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? null : index)}
                    className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="text-base font-semibold text-[#222863] sm:text-lg">{faq.q}</span>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 text-xl leading-none text-[#3BA3E8] transition-transform ${
                        open ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {open ? (
                    <p className="px-5 pb-5 text-base leading-relaxed text-[#3D4452] sm:px-6">
                      {faq.a}
                    </p>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Ready to join? */}
      <section id="start" className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              {t.startTitle}
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-[#3D4452]">{t.startDesc}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={clinic.phoneHref}
              className="inline-flex h-11 items-center justify-center rounded-lg bg-[#222863] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52]"
            >
              {t.call}
            </a>
            <LocaleLink
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-[#D5DEEA] px-5 text-sm font-semibold text-[#222863] transition-colors hover:border-[#222863]"
            >
              {t.contactClinic}
            </LocaleLink>
          </div>
        </div>
      </section>
    </>
  )
}
