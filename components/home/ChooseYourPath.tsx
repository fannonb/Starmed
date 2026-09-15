'use client'

import Image from 'next/image'
import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'

function ArrowButton() {
  return (
    <span
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/35 bg-white/15 text-white backdrop-blur-sm transition-colors group-hover:border-white/60 group-hover:bg-white/25"
      aria-hidden="true"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M3.5 3.5 L10.5 10.5 M10.5 5.25 V10.5 H5.25"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

type PathCardProps = {
  title: string
  desc: string
  href: string
  image: string
  imageAlt: string
  layout: 'feature' | 'compact'
}

function PathCard({ title, desc, href, image, imageAlt, layout }: PathCardProps) {
  const isFeature = layout === 'feature'

  return (
    <LocaleLink
      href={href}
      className={`group relative flex min-h-[18rem] overflow-hidden rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222863] ${
        isFeature ? 'lg:min-h-full lg:row-span-2' : 'min-h-[16.5rem] sm:min-h-[17.5rem]'
      }`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes={isFeature ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 50vw, 100vw'}
        className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
          isFeature ? 'object-[center_20%]' : 'object-center'
        }`}
      />
      <div
        className="absolute inset-0"
        style={{
          background: isFeature
            ? 'linear-gradient(180deg, rgba(14,22,40,0.08) 18%, rgba(14,22,40,0.45) 52%, rgba(14,22,40,0.92) 100%)'
            : 'linear-gradient(180deg, rgba(14,22,40,0.12) 0%, rgba(14,22,40,0.50) 42%, rgba(14,22,40,0.94) 100%)',
        }}
      />
      <div className="relative mt-auto flex w-full items-end justify-between gap-4 p-6 sm:p-7">
        <div className="min-w-0 max-w-[19rem]">
          <h3 className="font-serif text-xl font-medium leading-snug tracking-tight text-white sm:text-[1.35rem]">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/90">{desc}</p>
        </div>
        <ArrowButton />
      </div>
    </LocaleLink>
  )
}

export default function ChooseYourPath() {
  const t = useTranslations()

  const pathways = [
    {
      id: 'family',
      title: t.home.pathFamilyTitle,
      desc: t.home.pathFamilyDesc,
      href: '/care/individuals',
      image: '/service-pediatric.jpg',
      imageAlt: 'A StarMed clinician with a child and parent during a visit',
      layout: 'feature' as const,
    },
    {
      id: 'business',
      title: t.home.pathBusinessTitle,
      desc: t.home.pathBusinessDesc,
      href: '/care/employers',
      image: '/consultation-preview.jpg',
      imageAlt: 'A workplace care consult between clinician and team member',
      layout: 'compact' as const,
    },
    {
      id: 'brain',
      title: t.home.pathBrainTitle,
      desc: t.home.pathBrainDesc,
      href: '/care/mental-health',
      image: '/service-brain-mapping.jpg',
      imageAlt: 'A quiet brain-wellness session at StarMed',
      layout: 'compact' as const,
    },
  ]

  const feature = pathways[0]
  const side = pathways.slice(1)

  return (
    <section className="scroll-mt-28 bg-white py-16 sm:py-20 lg:scroll-mt-32 lg:py-24" id="pathways">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-6">
            <p className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#3BA3E8]">
              {t.home.pathEyebrow}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              {t.home.pathTitle}{' '}
              <span className="italic font-normal text-[#3BA3E8]">{t.home.pathTitleAccent}</span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="max-w-md text-base leading-relaxed text-[#5A6270] lg:ml-auto lg:text-right">
              {t.home.pathDesc}
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:grid-rows-2 lg:gap-5">
          <PathCard {...feature} />
          {side.map((path) => (
            <PathCard key={path.id} {...path} />
          ))}
        </div>
      </div>
    </section>
  )
}
