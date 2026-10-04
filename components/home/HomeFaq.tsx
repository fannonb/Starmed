'use client'

import { ChevronDown } from 'lucide-react'
import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'

export default function HomeFaq() {
  const t = useTranslations().pages.homeFaq

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 scroll-mt-32" id="faq">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
        <div className="lg:col-span-4">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            {t.title}{' '}
            <span className="italic font-normal text-[#3BA3E8]">{t.titleAccent}</span>
          </h2>
          <LocaleLink
            href="/frequently-asked-questions"
            className="mt-4 inline-block text-sm font-semibold text-[#222863] transition-colors hover:text-[#3BA3E8]"
          >
            {t.allLink}
          </LocaleLink>
        </div>

        <div className="divide-y divide-[#E3E8F0] border-y border-[#E3E8F0] lg:col-span-8">
          {t.items.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-serif text-lg font-medium tracking-tight text-[#222863] [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-[#3BA3E8] transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="max-w-2xl pb-5 text-[0.95rem] leading-relaxed text-[#5A6270]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
