'use client'

import Image from 'next/image'
import { FormEvent, useState } from 'react'
import { useTranslations } from '@/components/layout/LocaleProvider'

const PHONE_DISPLAY = '(726) 242-3011'
const PHONE_HREF = 'tel:7262423011'
const EMAIL = 'info@starmed.clinic'

const locations = [
  {
    name: 'Suite 202',
    tagline: 'I-10 Frontage',
    lines: ['24165 W Interstate 10 Frontage Rd Suite 202', 'San Antonio, TX 78257'],
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=24165+W+Interstate+10+Frontage+Rd+Suite+202,+San+Antonio,+TX+78257',
    embedUrl:
      'https://maps.google.com/maps?q=24165+W+Interstate+10+Frontage+Rd+Suite+202,+San+Antonio,+TX+78257&z=15&output=embed',
  },
  {
    name: 'Suite 1206',
    tagline: 'I-10 Medical Corridor',
    lines: ['22211 I-10 Suite 1206', 'San Antonio, TX 78257'],
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=22211+I-10+Suite+1206,+San+Antonio,+TX+78257',
    embedUrl:
      'https://maps.google.com/maps?q=22211+I-10+Suite+1206,+San+Antonio,+TX+78257&z=15&output=embed',
  },
]

export default function ContactPageContent() {
  const t = useTranslations().pages.contactPage
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    window.setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 700)
  }

  const channels = [
    {
      label: t.emailLabel,
      title: EMAIL,
      desc: t.emailDesc,
      href: `mailto:${EMAIL}`,
      cta: t.emailCta,
    },
    {
      label: t.phoneLabel,
      title: PHONE_DISPLAY,
      desc: t.phoneDesc,
      href: PHONE_HREF,
      cta: t.phoneCta,
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[18rem] overflow-hidden sm:min-h-[20rem] lg:min-h-[24rem]">
        <Image
          src="/consultation-preview.jpg"
          alt="StarMed clinician speaking with a patient during a consultation"
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
        <div className="relative z-10 mx-auto flex min-h-[18rem] max-w-6xl flex-col justify-end px-4 pb-10 pt-14 sm:min-h-[20rem] sm:px-6 sm:pb-12 lg:min-h-[24rem] lg:justify-center lg:px-8">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#7EC8F0]">
            {t.eyebrow}
          </p>
          <h1 className="mt-3 max-w-xl font-serif text-[2.1rem] font-medium leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.85rem]">
            {t.title}{' '}
            <span className="font-normal text-[#7EC8F0]">{t.titleAccent}</span>
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80">{t.heroDesc}</p>
        </div>
      </section>

      {/* Channels */}
      <section className="bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              Reach us
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              Contact our{' '}
              <span className="font-normal text-[#3BA3E8]">team.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
              For questions, appointments, or to learn about our services — we&apos;re here to help.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {channels.map((channel) => (
              <div
                key={channel.label}
                className="flex flex-col border border-[#D5DEEA] bg-white px-6 py-8 sm:px-8"
              >
                <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#3BA3E8]">
                  {channel.label}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight text-[#222863]">
                  {channel.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5A6270]">{channel.desc}</p>
                <a
                  href={channel.href}
                  className="mt-6 inline-flex text-sm font-semibold text-[#222863] transition-colors hover:text-[#3BA3E8]"
                >
                  {channel.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations with Google Maps */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                Locations
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                Visit us in{' '}
                <span className="font-normal text-[#3BA3E8]">San Antonio.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
                Two clinic suites along the I-10 corridor — pinned on the map so you can plan your
                visit with confidence.
              </p>
            </div>
            <p className="text-sm text-[#5A6270] lg:max-w-xs lg:text-right">
              Tap a pin on the map or open directions in Google Maps.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {locations.map((location, index) => (
              <article
                key={location.name}
                className="group overflow-hidden border border-[#D5DEEA] bg-[#F4F7FB] transition-shadow duration-300 hover:shadow-[0_18px_40px_-28px_rgba(34,40,99,0.45)]"
              >
                <div className="relative h-52 overflow-hidden sm:h-60">
                  <iframe
                    title={`Map showing StarMed ${location.name}`}
                    src={location.embedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full border-0 grayscale-[0.15] contrast-[1.05] transition-[filter] duration-500 group-hover:grayscale-0"
                    allowFullScreen
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F4F7FB] to-transparent"
                  />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold tracking-[0.12em] uppercase text-[#222863] shadow-sm ring-1 ring-[#D5DEEA]">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3BA3E8] opacity-50" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#3BA3E8]" />
                    </span>
                    Pin {index + 1}
                  </div>
                </div>

                <div className="relative px-6 py-7 sm:px-8">
                  <div className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#222863] text-white shadow-[0_10px_24px_-12px_rgba(34,40,99,0.8)]"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 22s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinejoin="round"
                        />
                        <circle cx="12" cy="10" r="2.4" fill="#3BA3E8" />
                      </svg>
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#3BA3E8]">
                        Official office · {location.tagline}
                      </p>
                      <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight text-[#222863]">
                        {location.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#5A6270]">
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
                        Get directions
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                Message
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                Send us a note —{' '}
                <span className="font-normal text-[#3BA3E8]">we&apos;ll follow up.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#5A6270]">
                Share a few details and our team will get back to you. Prefer to talk now? Call{' '}
                <a href={PHONE_HREF} className="font-semibold text-[#222863] hover:text-[#3BA3E8]">
                  {PHONE_DISPLAY}
                </a>{' '}
                or email{' '}
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-semibold text-[#222863] hover:text-[#3BA3E8]"
                >
                  {EMAIL}
                </a>
                .
              </p>
            </div>

            <div className="border border-[#D5DEEA] bg-white px-5 py-7 sm:px-8 sm:py-9 lg:col-span-7">
              {submitted ? (
                <div className="flex min-h-[18rem] flex-col justify-center">
                  <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#3BA3E8]">
                    Message received
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight text-[#222863]">
                    Thank you — we&apos;ll be in touch soon.
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-[#5A6270]">
                    Our team reviews messages during clinic hours. For urgent medical needs, call the
                    clinic or 911 for emergencies.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 inline-flex h-11 w-fit items-center justify-center rounded-lg border border-[#D5DEEA] bg-white px-5 text-sm font-semibold text-[#222863] transition-colors hover:bg-[#EEF2F7]"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block text-sm font-medium text-[#222863]">
                      Your name
                      <input
                        required
                        name="name"
                        type="text"
                        autoComplete="name"
                        className="mt-2 h-11 w-full rounded-lg border border-[#D5DEEA] bg-white px-3 text-sm text-[#1A1A1A] outline-none transition-shadow focus:border-[#3BA3E8] focus:ring-2 focus:ring-[#3BA3E8]/20"
                      />
                    </label>
                    <label className="block text-sm font-medium text-[#222863]">
                      Email
                      <input
                        required
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="mt-2 h-11 w-full rounded-lg border border-[#D5DEEA] bg-white px-3 text-sm text-[#1A1A1A] outline-none transition-shadow focus:border-[#3BA3E8] focus:ring-2 focus:ring-[#3BA3E8]/20"
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block text-sm font-medium text-[#222863]">
                      Phone
                      <input
                        required
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className="mt-2 h-11 w-full rounded-lg border border-[#D5DEEA] bg-white px-3 text-sm text-[#1A1A1A] outline-none transition-shadow focus:border-[#3BA3E8] focus:ring-2 focus:ring-[#3BA3E8]/20"
                      />
                    </label>
                    <label className="block text-sm font-medium text-[#222863]">
                      Subject
                      <input
                        required
                        name="subject"
                        type="text"
                        className="mt-2 h-11 w-full rounded-lg border border-[#D5DEEA] bg-white px-3 text-sm text-[#1A1A1A] outline-none transition-shadow focus:border-[#3BA3E8] focus:ring-2 focus:ring-[#3BA3E8]/20"
                      />
                    </label>
                  </div>

                  <label className="block text-sm font-medium text-[#222863]">
                    Anything else you want to ask
                    <textarea
                      name="message"
                      rows={4}
                      className="mt-2 w-full resize-y rounded-lg border border-[#D5DEEA] bg-white px-3 py-2.5 text-sm text-[#1A1A1A] outline-none transition-shadow focus:border-[#3BA3E8] focus:ring-2 focus:ring-[#3BA3E8]/20"
                    />
                  </label>

                  <label className="flex items-start gap-3 text-sm leading-relaxed text-[#5A6270]">
                    <input
                      required
                      name="terms"
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-[#D5DEEA] text-[#222863] focus:ring-[#3BA3E8]"
                    />
                    <span>
                      I agree to StarMed Terms of Service &amp; Privacy Policy.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex h-11 items-center justify-center rounded-lg bg-[#222863] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52] disabled:cursor-wait disabled:opacity-70"
                  >
                    {loading ? 'Sending…' : 'Submit response'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
