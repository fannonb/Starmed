'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'

type FaqCategory = 'all' | 'appointments' | 'membership' | 'services' | 'feedback'

export default function FaqPageContent() {
  const t = useTranslations()
  const [activeCategory, setActiveCategory] = useState<FaqCategory>('all')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const categories: { id: FaqCategory; label: string }[] = [
    { id: 'all', label: t.faq.all },
    { id: 'appointments', label: t.faq.appointments },
    { id: 'membership', label: t.faq.membershipCat },
    { id: 'services', label: t.faq.services },
    { id: 'feedback', label: t.faq.feedback },
  ]

  const visibleFaqs = useMemo(() => {
    const items = t.faq.items
    return activeCategory === 'all'
      ? [...items]
      : items.filter((item) => item.category === activeCategory)
  }, [activeCategory, t.faq.items])

  return (
    <>
      <section className="relative min-h-[22rem] overflow-hidden sm:min-h-[24rem] lg:min-h-[28rem]">
        <Image
          src="/consultation-preview.jpg"
          alt="StarMed clinician answering patient questions during a visit"
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
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/55">
              <li>
                <LocaleLink href="/" className="transition-colors hover:text-[#7EC8F0]">
                  {t.common.home}
                </LocaleLink>
              </li>
              <li aria-hidden="true" className="text-[#3BA3E8]/70">
                /
              </li>
              <li className="text-[#7EC8F0]">{t.faq.breadcrumb}</li>
            </ol>
          </nav>
          <h1 className="max-w-2xl font-serif text-[2.15rem] font-medium leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
            {t.faq.title}{' '}
            <span className="font-normal text-[#7EC8F0]">{t.faq.titleAccent}</span>
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80">{t.faq.heroDesc}</p>
        </div>
      </section>

      <section className="bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-[88px]">
                <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                  {t.faq.browseBy}
                </p>
                <h2 className="mt-3 font-serif text-2xl font-medium tracking-tight text-[#222863] sm:text-3xl">
                  {t.faq.findFaster}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#5A6270]">{t.faq.findDesc}</p>

                <div
                  className="mt-6 flex flex-wrap gap-2 lg:flex-col lg:items-stretch"
                  role="tablist"
                  aria-label="FAQ topics"
                >
                  {categories.map((category) => {
                    const active = activeCategory === category.id
                    return (
                      <button
                        key={category.id}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => {
                          setActiveCategory(category.id)
                          setOpenIndex(0)
                        }}
                        className={`rounded-md px-3.5 py-2.5 text-left text-sm font-semibold transition-colors ${
                          active
                            ? 'bg-[#222863] text-white'
                            : 'bg-white text-[#5A6270] ring-1 ring-[#D5DEEA] hover:text-[#222863]'
                        }`}
                      >
                        {category.label}
                      </button>
                    )
                  })}
                </div>

                <div className="mt-8 hidden rounded-2xl bg-[#222863] px-5 py-6 text-white lg:block">
                  <p className="font-serif text-xl font-medium">{t.faq.stillTitle}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{t.faq.stillDesc}</p>
                  <LocaleLink
                    href="/contact"
                    className="mt-5 inline-flex h-10 items-center rounded-md bg-white px-4 text-sm font-semibold text-[#222863] transition-colors hover:bg-[#EAF2FA]"
                  >
                    {t.faq.contactUs}
                  </LocaleLink>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-8">
              <p className="mb-4 text-sm text-[#5A6270]">
                {t.faq.showing}{' '}
                <span className="font-semibold text-[#222863]">{visibleFaqs.length}</span>{' '}
                {visibleFaqs.length === 1 ? t.faq.question : t.faq.questions}
              </p>

              <div className="divide-y divide-[#D5DEEA] border border-[#D5DEEA] bg-white">
                {visibleFaqs.map((faq, index) => {
                  const open = openIndex === index
                  return (
                    <div key={faq.q}>
                      <button
                        type="button"
                        aria-expanded={open}
                        onClick={() => setOpenIndex(open ? null : index)}
                        className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
                      >
                        <span className="font-serif text-lg font-medium tracking-tight text-[#222863] sm:text-xl">
                          {faq.q}
                        </span>
                        <span
                          aria-hidden="true"
                          className={`mt-1 shrink-0 text-xl leading-none text-[#3BA3E8] transition-transform ${
                            open ? 'rotate-45' : ''
                          }`}
                        >
                          +
                        </span>
                      </button>
                      {open ? (
                        <p className="px-5 pb-5 text-sm leading-relaxed text-[#5A6270] sm:px-6 sm:pb-6 sm:text-base">
                          {faq.a}
                        </p>
                      ) : null}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-20">
        <Image
          src="/home-hero-3.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(8,16,32,0.94) 0%, rgba(34,40,99,0.88) 55%, rgba(34,40,99,0.7) 100%)',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl">
              {t.faq.ctaTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">{t.faq.ctaDesc}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LocaleLink
                href="/contact"
                className="inline-flex h-11 items-center rounded-md bg-white px-5 text-sm font-semibold text-[#222863] transition-colors hover:bg-[#EAF2FA]"
              >
                {t.faq.contactUs}
              </LocaleLink>
              <LocaleLink
                href="/membership"
                className="inline-flex h-11 items-center rounded-md border border-white/35 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {t.faq.exploreMembership}
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
