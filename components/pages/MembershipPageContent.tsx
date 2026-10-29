'use client'

import { Check, Minus } from 'lucide-react'
import { HubFaq, HubHero } from '@/components/care/HubSections'
import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'
import { membershipBenefits, membershipPackages } from '@/data/membership'

const priceFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

/** The StarMED Membership Collection: choose a package, compare every benefit, or pay as you go. */
export default function MembershipPageContent() {
  const { pages } = useTranslations()
  const t = pages.membershipPage
  const access = pages.access

  const payOptions = [
    { ...access.payOptions.insurance, href: '/appointments' },
    { ...access.payOptions.selfPay, href: '/appointments' },
    { ...access.payOptions.medspa, href: '/appointments?visit=medspa' },
  ]

  return (
    <>
      <HubHero
        title={t.title}
        desc={t.heroDesc}
        bookHref="#compare"
        bookLabel={t.compareCta}
        callLabel={pages.primaryCarePage.callCta}
        image="/consultation-preview.jpg"
        imagePosition="60% 28%"
      />

      <section className="bg-[#F4F7FB] py-14 sm:py-16 lg:py-20" id="packages">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
            {t.packagesTitle}
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3 lg:gap-6">
            {membershipPackages.map((pkg) => {
              const copy = access.packages[pkg.id]
              return (
                <article
                  key={pkg.id}
                  className={`flex flex-col overflow-hidden rounded-[1.5rem] ${
                    pkg.featured
                      ? 'bg-[#222863] text-white shadow-[0_28px_60px_-36px_rgba(34,40,99,0.6)]'
                      : 'bg-white text-[#1A1A1A] ring-1 ring-[#DCE3F0]'
                  }`}
                >
                  <p
                    className={`border-b px-7 py-3.5 text-sm font-semibold sm:px-8 ${
                      pkg.featured ? 'border-white/15 text-[#7EC8F0]' : 'border-[#DCE3F0] text-[#222863]'
                    }`}
                  >
                    {access.coversLabel} {access.categories[pkg.category]}
                  </p>

                  <div className="flex flex-1 flex-col p-7 sm:p-8">
                    <p
                      className={`text-[12px] font-semibold uppercase tracking-[0.14em] ${
                        pkg.featured ? 'text-white/60' : 'text-[#3BA3E8]'
                      }`}
                    >
                      {copy.label}
                    </p>
                    <h3
                      className={`mt-1.5 font-serif text-[1.75rem] font-medium leading-tight tracking-tight ${
                        pkg.featured ? 'text-white' : 'text-[#222863]'
                      }`}
                    >
                      {copy.name}
                    </h3>
                    <p
                      className={`mt-2 text-[0.95rem] leading-relaxed md:min-h-[4.7rem] ${
                        pkg.featured ? 'text-white/75' : 'text-[#5A6270]'
                      }`}
                    >
                      {copy.desc}
                    </p>

                    <p className="mt-5 flex min-h-[2.25rem] items-baseline gap-2">
                      {pkg.price !== null ? (
                        <>
                          <span className="font-serif text-[2.25rem] font-medium leading-none tracking-tight">
                            {priceFormat.format(pkg.price)}
                          </span>
                          <span className={pkg.featured ? 'text-sm text-white/70' : 'text-sm text-[#5A6270]'}>
                            {access.perMonth}
                          </span>
                        </>
                      ) : (
                        <span className="font-serif text-xl font-medium tracking-tight">{access.priceOnRequest}</span>
                      )}
                    </p>

                    <ul
                      className={`mt-5 flex-1 space-y-3 border-t pt-5 ${
                        pkg.featured ? 'border-white/15' : 'border-[#DCE3F0]'
                      }`}
                    >
                      {copy.highlights.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm">
                          <Check
                            aria-hidden="true"
                            className={`mt-0.5 h-4 w-4 shrink-0 ${pkg.featured ? 'text-[#7EC8F0]' : 'text-[#3BA3E8]'}`}
                            strokeWidth={2.4}
                          />
                          <span className={pkg.featured ? 'text-white/90' : 'text-[#1A1A1A]'}>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <LocaleLink
                      href={`/contact?package=${pkg.id}#message`}
                      className={`mt-8 inline-flex h-12 items-center justify-center rounded-lg px-6 text-sm font-semibold transition-colors ${
                        pkg.featured
                          ? 'bg-white text-[#222863] hover:bg-[#EAF0FF]'
                          : 'bg-[#222863] text-white hover:bg-[#1a1f52]'
                      }`}
                    >
                      {access.requestDetails}
                    </LocaleLink>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Every benefit side by side; Premier's "Everything in Essential" is spelled out row by row */}
      <section className="bg-white py-14 sm:py-16 lg:py-20" id="compare">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
            {t.compareTitle}
          </h2>

          <div className="mt-8 overflow-hidden rounded-2xl ring-1 ring-[#DCE3F0]">
            <table className="w-full table-fixed border-collapse text-left text-sm">
              <thead className="bg-[#F4F7FB]">
                <tr>
                  <th scope="col" className="w-[40%] px-4 py-4 sm:w-[52%] sm:px-6">
                    <span className="sr-only">{t.benefitLabel}</span>
                  </th>
                  {membershipPackages.map((pkg) => (
                    <th
                      key={pkg.id}
                      scope="col"
                      className={`px-1 py-4 text-center text-[11px] font-semibold sm:font-serif sm:text-lg sm:font-medium sm:tracking-tight ${
                        pkg.featured ? 'bg-[#222863] text-white' : 'text-[#222863]'
                      }`}
                    >
                      {access.packages[pkg.id].name.replace('StarMED ', '')}
                    </th>
                  ))}
                </tr>
              </thead>
              {membershipBenefits.map((section) => (
                <tbody key={section.group}>
                  <tr className="border-t border-[#DCE3F0]">
                    <th
                      scope="colgroup"
                      colSpan={4}
                      className="bg-white px-4 pb-2 pt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#3BA3E8] sm:px-6"
                    >
                      {t.compareGroups[section.group]}
                    </th>
                  </tr>
                  {section.rows.map((row) => (
                    <tr key={row.id} className="border-t border-[#E3E8F0]">
                      <th scope="row" className="px-4 py-3.5 font-normal text-[#1A1A1A] sm:px-6">
                        {t.benefits[row.id]}
                      </th>
                      {membershipPackages.map((pkg) => {
                        const has = row.packages.includes(pkg.id)
                        return (
                          <td
                            key={pkg.id}
                            className={`px-1 py-3.5 text-center ${pkg.featured ? 'bg-[#F4F7FB]' : ''}`}
                          >
                            {has && row.optional ? (
                              <span className="text-xs font-semibold text-[#222863]">{t.optional}</span>
                            ) : has ? (
                              <>
                                <Check aria-hidden="true" className="mx-auto h-5 w-5 text-[#3BA3E8]" strokeWidth={2.4} />
                                <span className="sr-only">{t.included}</span>
                              </>
                            ) : (
                              <>
                                <Minus aria-hidden="true" className="mx-auto h-4 w-4 text-[#C5CEDC]" />
                                <span className="sr-only">{t.notIncluded}</span>
                              </>
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-[#5A6270]">{access.disclaimer}</p>
        </div>
      </section>

      <section className="bg-[#F4F7FB] py-14 sm:py-16" id="pay-as-you-go">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">{t.payTitle}</h2>
          <ul className="mt-8 grid list-none gap-4 p-0 md:grid-cols-3 lg:gap-6">
            {payOptions.map((option) => (
              <li key={option.title} className="flex flex-col rounded-2xl bg-white p-6 ring-1 ring-[#DCE3F0]">
                <h3 className="font-semibold text-[#1A1A1A]">{option.title}</h3>
                <p className="mt-0.5 text-sm font-medium text-[#3BA3E8]">{option.price}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5A6270]">{option.desc}</p>
                <LocaleLink
                  href={option.href}
                  className="mt-5 text-sm font-semibold text-[#222863] transition-colors hover:text-[#3BA3E8]"
                >
                  {option.cta} <span aria-hidden="true">→</span>
                </LocaleLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HubFaq items={t.faqs} />
    </>
  )
}
