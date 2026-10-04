'use client'

import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'
import { clinic } from '@/data/clinic'

export default function VisitUs() {
  const t = useTranslations().pages.visitUs

  return (
    <section className="bg-[#F4F7FB] py-16 sm:py-20 lg:py-24 scroll-mt-32" id="contact">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            {t.title}{' '}
            <span className="italic font-normal text-[#3BA3E8]">{t.titleAccent}</span>
          </h2>
          <p className="mt-3 text-base text-[#5A6270]">{t.desc}</p>
        </header>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {clinic.locations.map((location) => (
            <article
              key={location.name}
              className="flex flex-col rounded-2xl bg-white p-6 ring-1 ring-[#DCE3F0] sm:p-7"
            >
              <div className="-mx-6 -mt-6 mb-5 h-44 overflow-hidden rounded-t-2xl bg-[#E8F0F8] sm:-mx-7 sm:-mt-7">
                <iframe
                  src={location.mapEmbedUrl}
                  title={t.mapTitle.replace('{name}', location.name)}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
              <MapPin aria-hidden="true" className="h-5 w-5 text-[#3BA3E8]" />
              <h3 className="mt-4 font-serif text-2xl font-medium tracking-tight text-[#222863]">
                {location.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#5A6270]">
                {location.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#222863] transition-colors hover:text-[#3BA3E8]"
              >
                {t.directions}
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}

          <article className="flex flex-col rounded-2xl bg-[#222863] p-6 text-white sm:p-7">
            <dl className="flex-1 space-y-4 text-sm">
              <div className="flex gap-3">
                <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#7EC8F0]" />
                <div>
                  <dt className="text-white/60">{t.phoneLabel}</dt>
                  <dd>
                    <a href={clinic.phoneHref} className="font-semibold hover:text-[#7EC8F0]">
                      {clinic.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#7EC8F0]" />
                <div>
                  <dt className="text-white/60">{t.emailLabel}</dt>
                  <dd>
                    <a href={`mailto:${clinic.email}`} className="font-semibold hover:text-[#7EC8F0]">
                      {clinic.email}
                    </a>
                    <span className="block text-white/60">{t.emailNote}</span>
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#7EC8F0]" />
                <div>
                  <dt className="text-white/60">{t.hoursLabel}</dt>
                  <dd className="font-semibold">{t.hoursValue}</dd>
                </div>
              </div>
            </dl>

            <LocaleLink
              href="/appointments"
              className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#222863] transition-colors hover:bg-[#EAF0FF]"
            >
              {t.bookCta}
            </LocaleLink>
            <p className="mt-3 text-center text-xs text-white/60">{t.emergency}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
