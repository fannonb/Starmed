'use client'

import { ChevronRight } from 'lucide-react'
import EmployerBand from '@/components/care/EmployerBand'
import { GroupHeading, GroupNav, HubFaq, HubHero, groupItemClass, groupListClass } from '@/components/care/HubSections'
import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'
import { primaryCareGroups } from '@/data/primaryCare'
import { useLocalizedServices } from '@/hooks/useLocalizedServices'

type NeedId = keyof ReturnType<typeof useTranslations>['pages']['servicesGrid']['needs']

const rowClass =
  'group flex items-center justify-between gap-4 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222863]'

/** The Primary Care hub: every medical service in the homepage panel's four groups, as plain rows. */
export default function PrimaryCareContent() {
  const { pages } = useTranslations()
  const t = pages.primaryCarePage
  const pay = pages.waysToPay
  const groupCopy = pages.carePanels.primaryGroups
  const needs = pages.servicesGrid.needs
  const services = useLocalizedServices()

  const payOptions = [
    { ...pay.insurance, href: '/appointments' },
    { ...pay.selfPay, href: '/appointments' },
    { ...pay.membership, href: '/membership#compare' },
  ]

  return (
    <>
      <HubHero
        title={t.title}
        desc={t.desc}
        bookHref="/appointments"
        bookLabel={t.bookCta}
        callLabel={t.callCta}
        image="/service-pediatric.jpg"
      />

      <GroupNav
        label={t.groupNavLabel}
        groups={primaryCareGroups.map((group) => ({ id: group.id, title: groupCopy[group.id].title }))}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {primaryCareGroups.map((group, index) => (
            <div
              key={group.id}
              id={group.id}
              className="border-b border-[#E3E8F0] py-10 lg:py-12"
            >
              <GroupHeading number={index + 1} title={groupCopy[group.id].title} desc={groupCopy[group.id].desc} />

              <ul className={groupListClass}>
                {group.serviceIds.flatMap((id) => {
                  const service = services.find((s) => s.id === id)
                  if (!service) return []
                  return (
                    <li key={id} className={groupItemClass}>
                      <LocaleLink href={service.href ?? '/primary-care'} className={rowClass}>
                        <span>
                          <span className="block font-semibold text-[#1A1A1A] transition-colors group-hover:text-[#3BA3E8]">
                            {needs[id as NeedId]}
                          </span>
                          <span className="mt-0.5 block text-sm text-[#5A6270]">{service.title}</span>
                        </span>
                        <ChevronRight
                          aria-hidden="true"
                          className="h-5 w-5 shrink-0 text-[#3BA3E8] transition-transform group-hover:translate-x-0.5"
                        />
                      </LocaleLink>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}

          {/* Employer care: the same band as the homepage, so business owners don't scroll past it */}
          <div className="py-10 lg:py-12">
            <EmployerBand heading="h2" />
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FB] py-14 sm:py-16" id="ways-to-pay">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
            {pages.common.waysToPay}
          </h2>
          <ul className="mt-8 grid list-none gap-4 p-0 md:grid-cols-3 lg:gap-6">
            {payOptions.map((option) => (
              <li key={option.title} className="flex flex-col rounded-2xl bg-white p-6 ring-1 ring-[#DCE3F0]">
                <h3 className="font-semibold text-[#1A1A1A]">{option.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#5A6270]">{option.desc}</p>
                <LocaleLink
                  href={option.href}
                  className="mt-5 text-sm font-semibold text-[#222863] transition-colors hover:text-[#3BA3E8]"
                >
                  {option.cta} <span aria-hidden="true">→</span>
                </LocaleLink>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-[#5A6270]">{pay.note}</p>
        </div>
      </section>

      <HubFaq items={t.faqs} />
    </>
  )
}
