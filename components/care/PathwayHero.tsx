'use client'

import Image from 'next/image'
import LocaleLink from '@/components/layout/LocaleLink'

type PathwayHeroProps = {
  /** Used in breadcrumb only — not shown as a hero subtitle */
  breadcrumb: string
  homeLabel?: string
  title: string
  titleAccent?: string
  description: string
  image: string
  imageAlt: string
  imagePosition?: string
}

/**
 * Full-bleed gateway hero for audience pathway pages.
 * Pattern: breadcrumb + title (optional cyan accent) + description.
 * No eyebrow subtitle, no hero CTAs.
 */
export default function PathwayHero({
  breadcrumb,
  homeLabel = 'Home',
  title,
  titleAccent,
  description,
  image,
  imageAlt,
  imagePosition = 'center 28%',
}: PathwayHeroProps) {
  return (
    <section className="relative min-h-[22rem] overflow-hidden sm:min-h-[24rem] lg:min-h-[28rem]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        preload
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: imagePosition }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(105deg, rgba(8,16,32,0.95) 0%, rgba(18,28,58,0.9) 30%, rgba(34,40,99,0.55) 55%, rgba(59,163,232,0.2) 75%, rgba(8,16,32,0.15) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#081020]/85 via-transparent to-[#3BA3E8]/12"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-1/4 h-64 w-64 rounded-full opacity-40 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(59,163,232,0.5) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[22rem] max-w-6xl flex-col justify-end px-4 pb-10 pt-14 sm:min-h-[24rem] sm:px-6 sm:pb-12 lg:min-h-[28rem] lg:justify-center lg:px-8 lg:pb-14">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-white/55">
            <li>
              <LocaleLink href="/" className="transition-colors hover:text-[#7EC8F0]">
                {homeLabel}
              </LocaleLink>
            </li>
            <li aria-hidden="true" className="text-[#3BA3E8]/70">
              /
            </li>
            <li className="text-[#7EC8F0]">{breadcrumb}</li>
          </ol>
        </nav>

        <div className="max-w-2xl">
          <h1 className="font-serif text-[2.1rem] font-medium leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.85rem]">
            {title}
            {titleAccent ? (
              <>
                {' '}
                <span className="font-normal text-[#7EC8F0]">{titleAccent}</span>
              </>
            ) : null}
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80">{description}</p>
        </div>
      </div>
    </section>
  )
}
