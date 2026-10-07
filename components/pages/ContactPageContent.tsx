'use client'

import Image from 'next/image'
import { useTranslations } from '@/components/layout/LocaleProvider'
import { clinic } from '@/data/clinic'
import ContactForm from '@/components/pages/ContactForm'

export default function ContactPageContent() {
  const t = useTranslations().pages.contactPage

  const channels = [
    { label: t.callLabel, value: clinic.phoneDisplay, note: t.callNote, href: clinic.phoneHref },
    { label: t.textLabel, value: clinic.phoneDisplay, note: t.textNote, href: clinic.smsHref },
    { label: t.emailLabel, value: clinic.email, note: t.emailNote, href: `mailto:${clinic.email}` },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[18rem] overflow-hidden sm:min-h-[20rem] lg:min-h-[22rem]">
        <Image
          src="/consultation-preview.jpg"
          alt="A StarMed doctor speaking with a patient"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[55%_30%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(8,16,32,0.94) 0%, rgba(18,28,58,0.88) 30%, rgba(34,40,99,0.55) 55%, rgba(59,163,232,0.18) 75%, transparent 100%)',
          }}
        />
        <div className="relative z-10 mx-auto flex min-h-[18rem] max-w-6xl flex-col justify-end px-4 pb-10 pt-14 sm:min-h-[20rem] sm:px-6 sm:pb-12 lg:min-h-[22rem] lg:justify-center lg:px-8">
          <h1 className="max-w-xl font-serif text-[2.1rem] font-medium leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.85rem]">
            {t.title}
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80">{t.heroDesc}</p>
        </div>
      </section>

      {/* Ways to reach us */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
            {t.reachTitle}
          </h2>
          <ul className="mt-8 grid list-none gap-4 p-0 md:grid-cols-3 lg:gap-6">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  className="flex h-full flex-col rounded-2xl bg-[#F4F7FB] px-6 py-6 transition-colors hover:bg-[#EAF0F8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222863]"
                >
                  <span className="text-sm font-semibold text-[#3BA3E8]">{channel.label}</span>
                  <span className="mt-1 break-words font-serif text-2xl font-medium tracking-tight text-[#222863]">
                    {channel.value}
                  </span>
                  <span className="mt-2 text-base text-[#3D4452]">{channel.note}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base font-semibold text-[#222863]">{t.emergency}</p>
        </div>
      </section>

      {/* Our clinic */}
      <section className="bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
            {t.clinicsTitle}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-[#3D4452]">{t.clinicsDesc}</p>

          <div className="mt-8 grid gap-6">
            {clinic.locations.map((location) => (
              <article key={location.name} className="overflow-hidden rounded-2xl bg-white ring-1 ring-[#DCE3F0] lg:grid lg:grid-cols-2">
                <div className="relative h-56 sm:h-64 lg:h-auto lg:min-h-72">
                  <iframe
                    title={t.mapTitle.replace('{name}', location.name)}
                    src={location.mapEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full border-0"
                    allowFullScreen
                  />
                </div>
                <div className="px-6 py-6 sm:px-7 lg:flex lg:flex-col lg:justify-center lg:p-10">
                  <h3 className="font-serif text-2xl font-medium tracking-tight text-[#222863]">
                    {location.name}
                  </h3>
                  <address className="mt-2 text-base not-italic leading-relaxed text-[#3D4452]">
                    {location.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  <a
                    href={location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex text-sm font-semibold text-[#222863] transition-colors hover:text-[#3BA3E8]"
                  >
                    {t.directions} →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Send a message */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              {t.formTitle}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#3D4452]">{t.formDesc}</p>
          </div>

          <div className="relative rounded-2xl bg-[#F4F7FB] px-5 py-7 sm:px-8 sm:py-8 lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
