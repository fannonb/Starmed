'use client'

import Image from 'next/image'
import { Languages, MapPin } from 'lucide-react'
import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'
import GoogleMark from '@/components/ui/GoogleMark'

function Star() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" aria-hidden="true">
      <path
        fill="#FBBC04"
        d="M8 1.2l1.76 3.57 3.94.57-2.85 2.78.67 3.92L8 10.2l-3.52 1.84.67-3.92L2.3 5.34l3.94-.57L8 1.2z"
      />
    </svg>
  )
}

export default function Hero() {
  const messages = useTranslations()
  const t = messages.pages.hero

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: 'linear-gradient(115deg, #0B1530 0%, #151d47 55%, #222863 100%)' }}
    >
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-12 pt-6 sm:px-6 sm:py-14 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-20 lg:px-8">
        {/* Phones: both kinds of care side by side above the copy. Desktop: overlapping pair on the right. */}
        <div className="order-first lg:order-last lg:col-span-6">
          <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:hidden">
            <div className="relative h-44 overflow-hidden rounded-xl sm:h-64">
              <Image
                src="/hero-slide-1.jpg"
                alt={t.clinicImageAlt}
                fill
                preload
                sizes="50vw"
                className="object-cover object-[70%_center]"
              />
            </div>
            <div className="relative h-44 overflow-hidden rounded-xl sm:h-64">
              <Image
                src="/medspa-treatment.jpg"
                alt={t.medspaImageAlt}
                fill
                sizes="50vw"
                className="object-cover object-[55%_center]"
              />
            </div>
          </div>

          <div className="relative hidden h-[30rem] lg:block">
            <div className="absolute right-0 top-0 h-[82%] w-[80%] overflow-hidden rounded-[1.75rem] shadow-[0_32px_70px_-36px_rgba(0,0,0,0.7)]">
              <Image
                src="/hero-slide-1.jpg"
                alt={t.clinicImageAlt}
                fill
                preload
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[92%_center]"
              />
            </div>
            <div className="absolute bottom-0 left-0 h-[52%] w-[50%] overflow-hidden rounded-[1.5rem] ring-[6px] ring-[#151d47] shadow-[0_28px_60px_-30px_rgba(0,0,0,0.75)]">
              <Image
                src="/medspa-treatment.jpg"
                alt={t.medspaImageAlt}
                fill
                sizes="(min-width: 1024px) 25vw, 100vw"
                className="object-cover object-[55%_center]"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <h1 className="max-w-xl font-serif text-[2rem] font-medium leading-[1.12] tracking-tight text-white sm:text-[2.6rem] lg:text-[2.9rem]">
            {t.titleBefore} <span className="italic font-normal">{t.titleAccent}</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
            {t.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LocaleLink
              href="/appointments"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-sm font-semibold text-[#222863] shadow-[0_12px_28px_-14px_rgba(0,0,0,0.55)] transition-colors hover:bg-[#EAF0FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t.bookCta}
            </LocaleLink>
            <LocaleLink
              href="/appointments?visit=medspa"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/40 px-6 text-sm font-semibold text-white transition-colors hover:border-white/70 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t.medspaCta}
            </LocaleLink>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-white/90">
            <li>
              <a
                href="#testimonials"
                aria-label={t.ratingLabel}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 py-1.5 pl-2 pr-3.5 ring-1 ring-white/20 transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                  <GoogleMark className="h-3.5 w-3.5" />
                </span>
                <span className="flex items-center gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} />
                  ))}
                </span>
                <span className="font-semibold text-white">5.0</span>
                <span className="text-white/70">· {messages.pages.testimonials.reviewCount}</span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#7EC8F0]" aria-hidden="true" />
              {t.trustYears}
            </li>
            <li className="flex items-center gap-2">
              <Languages className="h-4 w-4 text-[#7EC8F0]" aria-hidden="true" />
              {t.bilingual}
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
