'use client'

import { useEffect, useRef, useState } from 'react'
import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'
import { serviceIcons } from '@/components/services/serviceIcons'
import { useLocalizedServices } from '@/hooks/useLocalizedServices'

export default function ServicesByNeed() {
  const messages = useTranslations()
  const t = messages.pages.servicesGrid
  const services = useLocalizedServices()

  const items = serviceIcons.flatMap(([id, Icon]) => {
    const service = services.find((s) => s.id === id)
    return service ? [{ service, Icon }] : []
  })

  // Phone carousel progress: thumb width = visible share of the row, offset = scroll position
  const trackRef = useRef<HTMLUListElement>(null)
  const [progress, setProgress] = useState({ size: 1, offset: 0 })

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = track
      const size = scrollWidth > 0 ? Math.min(1, clientWidth / scrollWidth) : 1
      const max = scrollWidth - clientWidth
      setProgress({ size, offset: max > 0 ? (scrollLeft / max) * (1 - size) : 0 })
    }
    update()
    track.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      track.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <section className="bg-[#F4F7FB] py-16 sm:py-20 lg:py-24 scroll-mt-32" id="services">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              {t.title}{' '}
              <span className="italic font-normal text-[#3BA3E8]">{t.titleAccent}</span>
            </h2>
            <p className="mt-3 text-base text-[#5A6270]">{t.desc}</p>
          </div>
          <LocaleLink
            href="/services"
            className="shrink-0 text-sm font-semibold text-[#222863] transition-colors hover:text-[#3BA3E8]"
          >
            {t.viewAll}
          </LocaleLink>
        </header>

        {/* Phones: swipeable snap row (vertical padding leaves room for the hover lift). Tablet+: grid. */}
        <ul
          ref={trackRef}
          className="-mx-4 mt-8 flex list-none snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 py-2 [scrollbar-width:none] sm:mx-0 sm:mt-10 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:p-0 lg:mt-12 lg:grid-cols-4 lg:gap-5 [&::-webkit-scrollbar]:hidden"
        >
          {items.map(({ service, Icon }) => (
            <li key={service.id} className="w-[42%] min-w-[9.5rem] shrink-0 snap-start sm:w-auto sm:min-w-0">
              <LocaleLink
                href={service.href ?? `/services#${service.id}`}
                className="group flex h-full flex-col items-center rounded-[1.5rem] bg-white px-4 py-7 text-center ring-1 ring-[#DCE3F0] transition-[background-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:bg-[#222863] hover:shadow-[0_24px_48px_-28px_rgba(34,40,99,0.7)] hover:ring-[#222863] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222863] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:px-6 sm:py-9"
              >
                <span
                  aria-hidden="true"
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[#222863] transition-[background-color,color,transform] duration-300 ease-out group-hover:scale-110 group-hover:bg-white/10 group-hover:text-[#7EC8F0] motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:h-20 sm:w-20"
                >
                  <Icon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1.4} />
                </span>
                <span className="mt-5 block font-serif text-lg font-medium leading-snug tracking-tight text-[#222863] transition-colors duration-300 group-hover:text-white sm:text-xl">
                  {service.title}
                </span>
              </LocaleLink>
            </li>
          ))}
        </ul>

        <div aria-hidden="true" className="mx-auto mt-5 h-1 w-24 overflow-hidden rounded-full bg-[#DCE3F0] sm:hidden">
          <div
            className="h-full rounded-full bg-[#222863]"
            style={{
              width: `${progress.size * 100}%`,
              transform: `translateX(${(progress.offset / progress.size) * 100}%)`,
            }}
          />
        </div>
      </div>
    </section>
  )
}
