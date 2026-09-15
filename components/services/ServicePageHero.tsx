'use client'

import Image from 'next/image'
import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'

type ServicePageHeroProps = {
  title: string
  titleAccent?: string
  description: string
  image: string
  imageAlt: string
  breadcrumb: string
  imagePosition?: string
}

export default function ServicePageHero({
  title,
  titleAccent,
  description,
  image,
  imageAlt,
  breadcrumb,
  imagePosition = 'center 28%',
}: ServicePageHeroProps) {
  const servicesLabel = useTranslations().pages.common.services

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
            'linear-gradient(105deg, rgba(8,16,32,0.94) 0%, rgba(18,28,58,0.88) 28%, rgba(34,40,99,0.55) 52%, rgba(59,163,232,0.22) 72%, rgba(8,16,32,0.08) 90%, transparent 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#081020]/80 via-transparent to-[#3BA3E8]/10"
      />

      <div className="relative z-10 mx-auto flex min-h-[22rem] max-w-6xl flex-col justify-end px-4 pb-10 pt-14 sm:min-h-[24rem] sm:px-6 sm:pb-12 lg:min-h-[28rem] lg:justify-center lg:px-8 lg:pb-14">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
            <li>
              <LocaleLink href="/services" className="transition-colors hover:text-[#7EC8F0]">
                {servicesLabel}
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
