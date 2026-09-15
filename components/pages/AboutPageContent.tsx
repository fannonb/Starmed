'use client'

import Image from 'next/image'
import LocaleLink from '@/components/layout/LocaleLink'
import { useLocale, useTranslations } from '@/components/layout/LocaleProvider'

const hybridPillarsEn = [
  {
    title: 'Concierge when life doesn’t wait',
    desc: 'Call, text, or email your doctor — evenings, weekends, and holidays included.',
  },
  {
    title: 'Insurance visits when you prefer',
    desc: 'Traditional appointments with the same clinicians and the same unhurried standard.',
  },
  {
    title: 'Whole-person support',
    desc: 'Primary care, diagnostics, mental wellness, and specialty care under one roof.',
  },
]

const hybridPillarsEs = [
  {
    title: 'Concierge cuando la vida no espera',
    desc: 'Llame, envíe mensaje o escriba a su médico — noches, fines de semana y feriados incluidos.',
  },
  {
    title: 'Visitas con seguro cuando lo prefiera',
    desc: 'Citas tradicionales con los mismos clínicos y el mismo estándar sin prisa.',
  },
  {
    title: 'Apoyo a la persona completa',
    desc: 'Cuidado primario, diagnóstico, bienestar mental y especialidades bajo un mismo techo.',
  },
]

const valuesEn = [
  {
    title: 'Easy access to your doctor',
    desc: 'Contact us anytime — call, text, or email, including evenings, weekends, and holidays.',
  },
  {
    title: 'Relaxed, extended visits',
    desc: 'Book when it works for you. Your doctor makes time to discuss every health concern.',
  },
  {
    title: 'Same-day scheduling',
    desc: 'Fewer patients mean better care. Urgent needs get quick, personalized attention.',
  },
  {
    title: 'Inclusive diagnostics',
    desc: 'Thorough testing designed around diverse health needs — clear, accurate results.',
  },
]

const valuesEs = [
  {
    title: 'Acceso fácil a su médico',
    desc: 'Contáctenos cuando lo necesite — llamada, mensaje o correo, incluyendo noches y fines de semana.',
  },
  {
    title: 'Visitas extendidas y sin prisa',
    desc: 'Reserve cuando le convenga. Su médico dedica tiempo a cada preocupación de salud.',
  },
  {
    title: 'Programación el mismo día',
    desc: 'Menos pacientes significan mejor cuidado. Las necesidades urgentes reciben atención rápida.',
  },
  {
    title: 'Diagnóstico inclusivo',
    desc: 'Pruebas completas diseñadas para diversas necesidades de salud — resultados claros y precisos.',
  },
]

export default function AboutPageContent() {
  const t = useTranslations().pages.about
  const { locale } = useLocale()
  const stats = [
    { value: '10+', label: t.statsYears },
    { value: '100+', label: t.statsFamilies },
    { value: '97%', label: t.statsPrecision },
  ]
  const hybridPillars = locale === 'es' ? hybridPillarsEs : hybridPillarsEn
  const values = locale === 'es' ? valuesEs : valuesEn

  return (
    <>
      <section className="relative min-h-[20rem] overflow-hidden sm:min-h-[22rem] lg:min-h-[26rem]">
        <Image
          src="/about-hero.jpg"
          alt="A StarMed doctor smiling and talking with a patient during a visit"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[62%_22%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(100deg, rgba(8,16,32,0.92) 0%, rgba(8,16,32,0.78) 32%, rgba(34,40,99,0.38) 58%, rgba(8,16,32,0.1) 80%, transparent 100%)',
          }}
        />
        <div className="relative z-10 mx-auto flex min-h-[20rem] max-w-6xl flex-col justify-end px-4 pb-10 pt-14 sm:min-h-[22rem] sm:px-6 sm:pb-12 lg:min-h-[26rem] lg:justify-center lg:px-8">
          <div className="max-w-xl">
            <h1 className="font-serif text-[2rem] font-medium leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.85rem]">
              {t.title}{' '}
              <span className="italic font-normal text-[#7EC8F0]">{t.titleAccent}</span>
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/80">{t.heroDesc}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FB] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              {t.philosophyEyebrow}
            </p>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-[1.15] tracking-tight text-[#222863] sm:text-[2.5rem]">
              {t.philosophyTitle}{' '}
              <span className="italic font-normal text-[#3BA3E8]">{t.philosophyTitleAccent}</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#5A6270]">{t.philosophyBody}</p>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-2xl font-medium text-[#222863]">{stat.value}</p>
                  <p className="mt-1 text-xs leading-snug text-[#5A6270]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              {t.hybridEyebrow}
            </p>
            <h2 className="mt-3 font-serif text-2xl font-medium text-[#222863] sm:text-3xl">
              {t.hybridTitle}
            </h2>
            <ul className="mt-8 space-y-6">
              {hybridPillars.map((item) => (
                <li key={item.title} className="border-t border-[#D5DEEA] pt-5">
                  <h3 className="font-semibold text-[#222863]">{item.title}</h3>
                  <p className="mt-1.5 text-base leading-relaxed text-[#5A6270]">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
            {t.valuesEyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-[#222863] sm:text-4xl">
            {t.valuesTitle}
          </h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2">
            {values.map((item) => (
              <li key={item.title} className="border-t border-[#E3E8F0] pt-5">
                <h3 className="font-semibold text-[#222863]">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-[#5A6270]">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#222863] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium text-white sm:text-4xl">{t.ctaTitle}</h2>
          <p className="mt-4 max-w-xl text-white/75">{t.ctaDesc}</p>
          <LocaleLink
            href="/contact"
            className="mt-8 inline-flex h-11 items-center rounded-md bg-white px-5 text-sm font-semibold text-[#222863]"
          >
            {t.ctaButton}
          </LocaleLink>
        </div>
      </section>
    </>
  )
}
