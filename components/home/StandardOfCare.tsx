'use client'

import { useTranslations } from '@/components/layout/LocaleProvider'

export default function StandardOfCare() {
  const t = useTranslations().pages.standard

  return (
    <section className="bg-[#F4F7FB] py-16 sm:py-20 lg:py-24 scroll-mt-32" id="standard-of-care">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            {t.title}{' '}
            <span className="italic font-normal text-[#3BA3E8]">{t.titleAccent}</span>
          </h2>
          <p className="mt-3 text-base text-[#5A6270]">{t.desc}</p>
        </header>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {t.items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col rounded-2xl bg-white p-6 ring-1 ring-[#DCE3F0] sm:p-7"
            >
              <p className="font-serif text-2xl font-medium leading-tight tracking-tight text-[#222863] lg:min-h-[2.5em]">
                {item.stat}
              </p>
              <h3 className="mt-4 font-sans text-base font-bold leading-snug tracking-tight text-[#1A1A1A]">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#5A6270]">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
