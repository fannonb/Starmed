'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowDown, MapPin, Pause, Play } from 'lucide-react'
import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'
import GoogleMark from '@/components/ui/GoogleMark'

/** `position` frames the people in each photo: the phone band first, then the tablet/desktop backdrop. */
const slides = [
  { src: '/hero-slide-1.jpg', position: 'object-[60%_center] sm:object-[70%_center]' },
  { src: '/hero-slide-2.jpg', position: 'object-[60%_center] sm:object-[64%_center]' },
  { src: '/hero-slide-3.jpg', position: 'object-[50%_center] sm:object-[56%_center]' },
]

const SLIDE_MS = 7000

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
  const [active, setActive] = useState(0)
  const [previous, setPrevious] = useState<number | null>(null)
  const [playing, setPlaying] = useState(true)
  // Only the first photo loads with the page; the rest mount after hydration
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPlaying(false)
  }, [])

  const show = (index: number) => {
    if (index === active) return
    setPrevious(active)
    setActive(index)
  }

  useEffect(() => {
    if (!playing || !ready) return
    const timer = window.setTimeout(() => {
      setPrevious(active)
      setActive((active + 1) % slides.length)
    }, SLIDE_MS)
    return () => window.clearTimeout(timer)
  }, [active, playing, ready])

  return (
    <section className="relative w-full overflow-hidden bg-[#0B1530]">
      {/* Phone: photo band above the copy. Tablet/desktop: full-bleed backdrop behind it. */}
      <div className="relative h-60 sm:absolute sm:inset-0 sm:h-auto">
        <div aria-hidden="true" className="absolute inset-0">
          {slides.map((slide, index) => {
            if (index > 0 && !ready) return null
            const visible = index === active
            // Keep the outgoing photo zooming while it fades so it doesn't snap back
            const zooming = index === active || index === previous
            return (
              <div
                key={slide.src}
                className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out motion-reduce:transition-none ${
                  visible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={slide.src}
                  alt=""
                  fill
                  preload={index === 0}
                  sizes="100vw"
                  className={`object-cover ${slide.position} ${
                    zooming ? 'motion-safe:animate-[hero-zoom_9s_ease-out_forwards]' : ''
                  }`}
                  style={{ animationPlayState: playing ? 'running' : 'paused' }}
                />
              </div>
            )
          })}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#0B1530] sm:hidden" />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
          <div className="mx-auto flex max-w-6xl justify-end px-4 pb-3 sm:px-6 sm:pb-6 lg:px-8 lg:pb-8">
            <div
              role="group"
              aria-label={t.slidesLabel}
              className="pointer-events-auto flex items-center gap-2 rounded-full bg-black/25 py-1 pl-1 pr-3 ring-1 ring-white/20 backdrop-blur-sm"
            >
              <button
                type="button"
                onClick={() => setPlaying((value) => !value)}
                aria-label={playing ? t.pauseSlides : t.playSlides}
                className="flex h-7 w-7 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                {playing ? (
                  <Pause className="h-3.5 w-3.5" aria-hidden="true" fill="currentColor" />
                ) : (
                  <Play className="h-3.5 w-3.5" aria-hidden="true" fill="currentColor" />
                )}
              </button>
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => show(index)}
                  aria-label={t.showSlide.replace('{n}', String(index + 1))}
                  aria-current={index === active}
                  className="flex h-7 items-center rounded-full px-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-500 ${
                      index === active ? 'w-6 bg-white' : 'w-1.5 bg-white/45 hover:bg-white/70'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tablet/desktop: left→right wash keeps the copy readable and the people bright on the right */}
      <div
        className="pointer-events-none absolute inset-0 hidden sm:block"
        style={{
          background:
            'linear-gradient(90deg, rgba(8,16,32,0.90) 0%, rgba(8,16,32,0.78) 28%, rgba(8,16,32,0.38) 52%, rgba(8,16,32,0.08) 72%, transparent 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 hidden sm:block"
        style={{
          background: 'linear-gradient(115deg, rgba(34,40,99,0.28) 0%, transparent 42%)',
        }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col px-4 pb-10 pt-4 sm:min-h-[34rem] sm:justify-center sm:px-6 sm:py-14 lg:min-h-[38rem] lg:px-8">
        <div className="max-w-2xl">
          {/* Trust first, so it's visible without scrolling */}
          <ul className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/90">
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
          </ul>

          <h1 className="max-w-xl font-serif text-[2rem] font-medium leading-[1.12] tracking-tight text-white sm:text-[2.6rem] lg:text-[2.9rem]">
            {t.titleBefore} <span className="italic font-normal">{t.titleAccent}</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg">
            {t.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LocaleLink
              href="/appointments"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-sm font-semibold text-[#222863] shadow-[0_12px_28px_-14px_rgba(0,0,0,0.55)] transition-colors hover:bg-[#EAF0FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t.bookCta}
            </LocaleLink>
            <a
              href="#care-finder"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/40 px-6 text-sm font-semibold text-white transition-colors hover:border-white/70 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t.finderCta}
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
