'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'

const slides = [
  {
    src: '/hero-slide-1.jpg',
    alt: 'A StarMed clinician explaining care options to a patient',
    // Mobile: push subject right so copy sits on calmer left crop
    position: 'object-[82%_center] sm:object-[70%_center]',
  },
  {
    src: '/hero-slide-2.jpg',
    alt: 'A StarMed doctor listening closely during a primary care visit',
    position: 'object-[80%_center] sm:object-[68%_center]',
  },
  {
    src: '/hero-slide-3.jpg',
    alt: 'A StarMed clinician sharing a warm conversation with a patient',
    position: 'object-[78%_center] sm:object-[60%_center]',
  },
] as const

const INTERVAL_MS = 4500

export default function Hero() {
  const t = useTranslations().pages.hero
  const [active, setActive] = useState(0)

  const goNext = useCallback(() => {
    setActive((current) => (current + 1) % slides.length)
  }, [])

  useEffect(() => {
    const id = window.setInterval(goNext, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [goNext, active])

  return (
    <section
      className="relative min-h-[30rem] w-full overflow-hidden sm:min-h-[32rem] lg:min-h-[36rem]"
      aria-roledescription="carousel"
      aria-label={t.carouselLabel}
    >
      {slides.map((slide, index) => {
        const isActive = index === active
        return (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isActive ? 'z-[1] opacity-100' : 'z-0 opacity-0'
            }`}
            aria-hidden={!isActive}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              preload={index === 0}
              sizes="100vw"
              className={`object-cover ${slide.position}`}
            />
          </div>
        )
      })}

      {/* Mobile: full-bleed vertical navy scrim — copy sits in the dark band */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] sm:hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(8,16,32,0.72) 0%, rgba(8,16,32,0.78) 38%, rgba(8,16,32,0.88) 68%, rgba(8,16,32,0.94) 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] sm:hidden"
        style={{
          background:
            'radial-gradient(ellipse 120% 70% at 50% 0%, rgba(34,40,99,0.35), transparent 60%)',
        }}
      />

      {/* Desktop / tablet: left→right wash keeps the subject bright on the right */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] hidden sm:block"
        style={{
          background:
            'linear-gradient(90deg, rgba(8,16,32,0.90) 0%, rgba(8,16,32,0.78) 28%, rgba(8,16,32,0.38) 52%, rgba(8,16,32,0.08) 72%, transparent 100%)',
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-[2] hidden bg-gradient-to-t from-[#081020]/40 via-transparent to-transparent sm:block lg:from-transparent" />
      <div
        className="pointer-events-none absolute inset-0 z-[2] hidden sm:block"
        style={{
          background: 'linear-gradient(115deg, rgba(34,40,99,0.28) 0%, transparent 42%)',
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[30rem] max-w-6xl items-end px-4 pb-16 pt-14 sm:min-h-[32rem] sm:items-center sm:px-6 sm:py-12 lg:min-h-[36rem] lg:px-8 lg:py-14">
        <div className="max-w-xl">
          <h1 className="font-serif text-[2.15rem] font-medium leading-[1.14] tracking-tight text-white sm:text-5xl sm:leading-[1.12] lg:text-[3.35rem]">
            {t.titleLine1}
            <br />
            {t.titleLine2}
            <br />
            {t.titleLine3Before}{' '}
            <span className="italic font-normal">{t.titleLine3Accent}</span>
          </h1>

          <p className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-white sm:mt-5 sm:hidden">
            {t.descriptionMobile}
          </p>
          <p className="mt-5 hidden max-w-md text-base leading-relaxed text-white/90 sm:block">
            {t.description}
          </p>

          <div className="mt-7 sm:mt-8">
            <LocaleLink
              href="/#pathways"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-[#1A1A1A] shadow-[0_12px_28px_-14px_rgba(0,0,0,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t.cta}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M3 11 L11 3 M5.5 3 H11 V8.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </LocaleLink>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-6 lg:left-auto lg:right-8 lg:translate-x-0">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Slide ${index + 1}`}
            aria-current={index === active}
            onClick={() => setActive(index)}
            className={`h-2 rounded-full transition-all ${
              index === active ? 'w-6 bg-white' : 'w-2 bg-white/45 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
