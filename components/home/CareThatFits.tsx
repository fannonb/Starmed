'use client'

import Image from 'next/image'
import LocaleLink from '@/components/layout/LocaleLink'
import { useLocale, useTranslations } from '@/components/layout/LocaleProvider'

const includeKeys = [
  { title: '24/7 physician access', titleEs: 'Acceso 24/7 al médico', desc: 'Reach your doctor weekdays, nights, weekends, and holidays.', descEs: 'Comuníquese con su médico entre semana, noches, fines de semana y feriados.' },
  { title: 'Timely appointments', titleEs: 'Citas oportunas', desc: 'Same-day or next-day visits with time to cover what matters.', descEs: 'Visitas el mismo o siguiente día con tiempo para lo que importa.' },
  { title: 'Direct doctor contact', titleEs: 'Contacto directo con el médico', desc: 'Phone or email your physician — no call-center runaround.', descEs: 'Llame o escriba a su médico — sin laberintos de call center.' },
  { title: 'Personalized visits', titleEs: 'Visitas personalizadas', desc: 'Longer appointments for conversation, follow-up, and prevention.', descEs: 'Citas más largas para conversar, dar seguimiento y prevenir.' },
  { title: 'Hospitalization support', titleEs: 'Apoyo en hospitalización', desc: 'Your physician coordinates with hospital specialists and stays involved.', descEs: 'Su médico coordina con especialistas hospitalarios y permanece involucrado.' },
  { title: 'Travel medicine', titleEs: 'Medicina de viaje', desc: 'Vaccines, travel advice, and prescription support while you’re away.', descEs: 'Vacunas, consejos de viaje y apoyo con recetas mientras está fuera.' },
  { title: 'Minor emergency care', titleEs: 'Urgencias menores', desc: 'Care for sprains, stitches, sudden illness, and minor trauma.', descEs: 'Atención para esguinces, puntos, enfermedades repentinas y traumatismos menores.' },
  { title: 'Wellness & screenings', titleEs: 'Bienestar y detección', desc: 'Prevention plans plus labs that catch issues earlier.', descEs: 'Planes de prevención y laboratorios que detectan problemas a tiempo.' },
  { title: 'Referrals & prescriptions', titleEs: 'Referencias y recetas', desc: 'Specialist connections, lab orders, medication reviews, and refills.', descEs: 'Conexiones con especialistas, órdenes de laboratorio, revisión de medicamentos y resurtidos.' },
] as const

export default function CareThatFits() {
  const { locale } = useLocale()
  const t = useTranslations().pages.careThatFits

  const pathCompare = [
    {
      id: 'concierge',
      recommended: true,
      title: t.conciergeTitle,
      desc: t.conciergeDesc,
      points: t.conciergePoints,
      cta: t.conciergeCta,
      href: '/membership',
    },
    {
      id: 'conventional',
      recommended: false,
      title: t.conventionalTitle,
      desc: t.conventionalDesc,
      points: t.conventionalPoints,
      cta: t.conventionalCta,
      href: '/contact',
    },
  ]

  return (
    <section
      className="relative overflow-hidden bg-[#F4F7FB] py-16 sm:py-20 lg:py-28 scroll-mt-32"
      id="membership"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            {t.title}{' '}
            <span className="italic font-normal text-[#3BA3E8]">{t.titleAccent}</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5A6270]">{t.desc}</p>
        </header>

        <div className="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-6">
          {pathCompare.map((path) => (
            <article
              key={path.id}
              className={`relative flex flex-col rounded-[1.5rem] p-7 sm:p-8 lg:p-9 ${
                path.recommended
                  ? 'bg-[#222863] text-white shadow-[0_28px_60px_-36px_rgba(34,40,99,0.55)]'
                  : 'bg-white text-[#1A1A1A] ring-1 ring-[#DCE3F0]'
              }`}
            >
              <div>
                {path.recommended ? (
                  <p className="text-[12px] font-semibold tracking-[0.04em] text-[#9BB4FF]">
                    {t.recommended}
                  </p>
                ) : null}
                <h3
                  className={`font-serif font-medium tracking-tight ${
                    path.recommended ? 'mt-2' : 'mt-0'
                  } text-[1.85rem] leading-tight sm:text-[2.15rem] lg:text-[2.35rem]`}
                >
                  {path.title}
                </h3>
              </div>

              <p
                className={`mt-4 text-sm leading-relaxed sm:text-[0.95rem] ${
                  path.recommended ? 'text-white/70' : 'text-[#5A6270]'
                }`}
              >
                {path.desc}
              </p>

              <ul
                className="mt-7 flex-1 space-y-3 border-t pt-6"
                style={{
                  borderColor: path.recommended ? 'rgba(255,255,255,0.12)' : '#E3E8F0',
                }}
              >
                {path.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm">
                    <span
                      aria-hidden="true"
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        path.recommended
                          ? 'bg-white/10 text-[#7EB8F8]'
                          : 'bg-[#EEF3FF] text-[#222863]'
                      }`}
                    >
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path
                          d="M2 5.5 L4.4 8 L9 3"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className={path.recommended ? 'text-white/90' : 'text-[#1A1A1A]'}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <LocaleLink
                href={path.href}
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors ${
                  path.recommended
                    ? 'bg-white text-[#222863] hover:bg-[#EAF0FF]'
                    : 'bg-[#222863] text-white hover:bg-[#1a1f52]'
                }`}
              >
                {path.cta}
              </LocaleLink>
            </article>
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-[#DCE3F0]">
          <div className="grid lg:grid-cols-12">
            <div className="relative min-h-[16rem] lg:col-span-4 lg:min-h-full">
              <Image
                src="/consultation-preview.jpg"
                alt="StarMed concierge physician during a personalized visit"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover object-center"
              />
            </div>

            <div className="p-7 sm:p-8 lg:col-span-8 lg:p-10">
              <p className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#3BA3E8]">
                {t.includesEyebrow}
              </p>
              <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight text-[#1A1A1A] sm:text-[1.85rem]">
                {t.includesTitle}
              </h3>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {includeKeys.map((item) => (
                  <li
                    key={item.title}
                    className="flex gap-3 rounded-xl border border-[#E3E8F0] bg-[#F4F7FB] px-4 py-3.5 sm:py-4"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#222863] text-white"
                    >
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path
                          d="M2 5.5 L4.4 8 L9 3"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <p className="font-serif text-[0.95rem] font-medium tracking-tight text-[#1A1A1A]">
                        {locale === 'es' ? item.titleEs : item.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-[#5A6270]">
                        {locale === 'es' ? item.descEs : item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-3 border-t border-[#E3E8F0] pt-7 sm:flex-row sm:items-center sm:justify-between">
                <LocaleLink
                  href="/membership"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#222863] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2C3278]"
                >
                  {t.conciergeCta}
                </LocaleLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
