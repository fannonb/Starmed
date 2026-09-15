'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from '@/components/layout/LocaleProvider'

const googleReviewsUrl = 'https://share.google/SiY944fka7cAuEggz'

function GoogleMark({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

function GoogleStars({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
          <path
            fill="#FBBC04"
            d="M8 1.2l1.76 3.57 3.94.57-2.85 2.78.67 3.92L8 10.2l-3.52 1.84.67-3.92L2.3 5.34l3.94-.57L8 1.2z"
          />
        </svg>
      ))}
    </div>
  )
}

function Chevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d={dir === 'left' ? 'M11 4.5 6.5 9 11 13.5' : 'M7 4.5 11.5 9 7 13.5'}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function PatientTestimonials() {
  const t = useTranslations().pages.testimonials
  const reviews = t.reviews
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateControls = () => {
    const el = trackRef.current
    if (!el) return

    const maxScroll = el.scrollWidth - el.clientWidth
    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft < maxScroll - 8)

    const cards = Array.from(el.querySelectorAll<HTMLElement>('[data-review-card]'))
    if (!cards.length) return

    const center = el.scrollLeft + el.clientWidth / 2
    let nearest = 0
    let nearestDist = Infinity
    cards.forEach((card, i) => {
      const mid = card.offsetLeft + card.offsetWidth / 2
      const dist = Math.abs(mid - center)
      if (dist < nearestDist) {
        nearestDist = dist
        nearest = i
      }
    })
    setActive(nearest)
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    updateControls()
    el.addEventListener('scroll', updateControls, { passive: true })
    window.addEventListener('resize', updateControls)
    return () => {
      el.removeEventListener('scroll', updateControls)
      window.removeEventListener('resize', updateControls)
    }
  }, [])

  const scrollByCard = (direction: -1 | 1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-review-card]')
    const amount = card ? card.offsetWidth + 16 : el.clientWidth * 0.8
    el.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  const scrollToIndex = (index: number) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelectorAll<HTMLElement>('[data-review-card]')[index]
    if (!card) return
    el.scrollTo({ left: card.offsetLeft - 4, behavior: 'smooth' })
  }

  return (
    <section
      className="relative overflow-hidden bg-[#222863] py-16 text-white sm:py-20 scroll-mt-32"
      id="testimonials"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 0% 0%, rgba(79,111,232,0.26), transparent 55%), radial-gradient(ellipse 55% 40% at 100% 100%, rgba(107,60,200,0.16), transparent 50%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-3.5 py-2 ring-1 ring-white/15 transition-colors hover:bg-white/15"
            >
              <GoogleMark className="h-5 w-5" />
              <span className="text-sm font-semibold tracking-tight text-white">
                {t.reviewsOnGoogle}
              </span>
              <span className="hidden h-3.5 w-px bg-white/20 sm:block" />
              <span className="hidden items-center gap-1.5 sm:inline-flex">
                <GoogleStars />
                <span className="text-sm font-bold text-white">5.0</span>
                <span className="text-sm text-white/55">· 20</span>
              </span>
            </a>

            <h2 className="mt-5 max-w-xl font-serif text-3xl font-medium tracking-tight text-white sm:text-[2.35rem] sm:leading-[1.15]">
              {t.title}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-[#1A1A1A] shadow-[0_16px_40px_-24px_rgba(0,0,0,0.5)]">
              <GoogleMark className="h-8 w-8" />
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="text-xl font-bold tracking-tight leading-none">5.0</p>
                  <GoogleStars />
                </div>
                <p className="mt-1 text-xs text-[#5A6270]">{t.reviewCount}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                disabled={!canPrev}
                aria-label={t.prevLabel}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition-colors hover:bg-white/18 disabled:cursor-not-allowed disabled:opacity-35"
              >
                <Chevron dir="left" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                disabled={!canNext}
                aria-label={t.nextLabel}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#222863] transition-colors hover:bg-[#EAF0FF] disabled:cursor-not-allowed disabled:opacity-35"
              >
                <Chevron dir="right" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative mt-8 sm:mt-10">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label={t.carouselLabel}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') {
                e.preventDefault()
                scrollByCard(-1)
              }
              if (e.key === 'ArrowRight') {
                e.preventDefault()
                scrollByCard(1)
              }
            }}
          >
            {reviews.map((review) => (
              <article
                key={review.name}
                data-review-card
                className="relative flex w-[min(100%,22.5rem)] shrink-0 snap-start flex-col justify-between rounded-[1.35rem] bg-white/[0.07] p-6 ring-1 ring-white/12 sm:w-[min(100%,26rem)] sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <GoogleMark className="h-4 w-4" />
                      <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-white/45">
                        {t.reviewBadge}
                      </span>
                    </div>
                    <GoogleStars />
                  </div>

                  <blockquote className="mt-5">
                    <p className="font-serif text-[1.15rem] font-medium leading-snug tracking-tight text-white sm:text-[1.25rem] sm:leading-[1.35]">
                      “{review.quote}”
                    </p>
                  </blockquote>
                </div>

                <footer className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3BA3E8] text-sm font-bold text-white">
                    {review.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{review.name}</p>
                    <p className="text-xs text-white/45">{t.postedOnGoogle}</p>
                  </div>
                </footer>
              </article>
            ))}
          </div>

          {/* Edge fades */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-[#222863] to-transparent sm:w-8"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#222863] to-transparent sm:w-12"
          />
        </div>

        <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2" role="tablist" aria-label={t.slidesLabel}>
            {reviews.map((review, i) => (
              <button
                key={review.name}
                type="button"
                role="tab"
                aria-selected={active === i}
                aria-label={t.goToReview.replace('{name}', review.name)}
                onClick={() => scrollToIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  active === i ? 'w-7 bg-white' : 'w-1.5 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 self-start rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#222863] transition-colors hover:bg-[#EAF0FF] sm:self-auto"
          >
            <GoogleMark className="h-4 w-4" />
            {t.googleCta}
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M2.5 7h9M8 3.5 L11.5 7 L8 10.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
