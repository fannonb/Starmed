'use client'

import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'
import { clinic } from '@/data/clinic'
import { useLocalizedServices } from '@/hooks/useLocalizedServices'

type NeedId = keyof ReturnType<typeof useTranslations>['pages']['servicesGrid']['needs']

/** "What do you need help with?" grid for pathway pages: need first, service name second. */
export default function CareChooser({ serviceIds }: { serviceIds: readonly NeedId[] }) {
  const t = useTranslations()
  const copy = t.care.chooser
  const needs = t.pages.servicesGrid.needs
  const services = useLocalizedServices()

  const items = serviceIds.flatMap((id) => {
    const service = services.find((s) => s.id === id)
    return service ? [{ service, need: needs[id] }] : []
  })

  const [notSureBefore, notSureAfter] = copy.notSure.split('{phone}')
  const columns = items.length % 3 === 0 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'

  return (
    <section id="care" className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
          {copy.title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#3D4452]">
          {notSureBefore}
          <a
            href={clinic.phoneHref}
            className="font-semibold text-[#222863] underline-offset-4 hover:underline"
          >
            {clinic.phoneDisplay}
          </a>
          {notSureAfter}
        </p>

        <ul className={`mt-10 grid list-none gap-4 p-0 sm:grid-cols-2 lg:gap-6 ${columns}`}>
          {items.map(({ service, need }) => (
            <li key={service.id}>
              <LocaleLink
                href={service.href ?? `/services#${service.id}`}
                className="group flex h-full flex-col rounded-2xl bg-[#F4F7FB] px-6 py-7 transition-colors hover:bg-[#EAF0F8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222863] sm:px-7"
              >
                <h3 className="font-serif text-xl font-medium tracking-tight text-[#222863] sm:text-2xl">
                  {need}
                </h3>
                <p className="mt-2 flex-1 text-base leading-relaxed text-[#3D4452]">
                  {service.detail}
                </p>
                <p className="mt-5 text-sm font-semibold text-[#3BA3E8] transition-colors group-hover:text-[#222863]">
                  {service.title} <span aria-hidden="true">→</span>
                </p>
              </LocaleLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
