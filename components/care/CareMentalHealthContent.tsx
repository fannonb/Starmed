'use client'

import Image from 'next/image'
import CareChooser from '@/components/care/CareChooser'
import PathwayHero from '@/components/care/PathwayHero'
import { useTranslations } from '@/components/layout/LocaleProvider'
import ServiceWaysToPay from '@/components/services/ServiceWaysToPay'

const serviceIds = ['mental-wellness', 'ketamine', 'omt'] as const

export default function CareMentalHealthContent() {
  const t = useTranslations()
  const copy = t.care.mental

  return (
    <>
      <PathwayHero
        breadcrumb={copy.breadcrumb}
        homeLabel={t.common.home}
        title={copy.title}
        titleAccent={copy.titleAccent}
        description={copy.description}
        image="/service-brain-mapping.jpg"
        imageAlt="A calm brain-wellbeing session at StarMed Clinic"
        imagePosition="center 35%"
      />

      <CareChooser serviceIds={serviceIds} />

      {/* How it starts */}
      <section id="how-it-starts" className="border-t border-[#E3E8F0] bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              {copy.stepsTitle}
            </h2>
            <ol className="mt-8 list-none space-y-6 p-0">
              {copy.steps.map((step, index) => (
                <li key={step.title} className="flex gap-5">
                  <span className="font-serif text-3xl font-medium tabular-nums leading-none text-[#3BA3E8]">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-sans text-lg font-bold leading-snug tracking-tight text-[#222863]">{step.title}</h3>
                    <p className="mt-1 text-base leading-relaxed text-[#3D4452]">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:col-span-6 lg:min-h-[24rem]">
            <Image
              src="/service-mental-live.webp"
              alt="A quiet consultation room at StarMed Clinic"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <ServiceWaysToPay />
    </>
  )
}
