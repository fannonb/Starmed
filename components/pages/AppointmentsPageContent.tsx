'use client'

import Image from 'next/image'
import { FormEvent, useState } from 'react'
import AppointmentDatePicker from '@/components/forms/AppointmentDatePicker'
import AppointmentTimePicker from '@/components/forms/AppointmentTimePicker'
import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'

const PHONE_DISPLAY = '(726) 242-3011'
const PHONE_HREF = 'tel:7262423011'

const fieldClass =
  'mt-2 h-11 w-full rounded-lg border border-[#D5DEEA] bg-white px-3 text-sm text-[#1A1A1A] outline-none transition-shadow focus:border-[#3BA3E8] focus:ring-2 focus:ring-[#3BA3E8]/20'
const labelClass = 'block text-sm font-medium text-[#222863]'

export default function AppointmentsPageContent() {
  const messages = useTranslations()
  const t = messages.pages.appointments
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    window.setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <>
      <section className="relative min-h-[20rem] overflow-hidden sm:min-h-[22rem] lg:min-h-[26rem]">
        <Image
          src="/consultation-preview.jpg"
          alt="StarMed clinician scheduling care with a patient"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[55%_28%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(8,16,32,0.94) 0%, rgba(18,28,58,0.88) 32%, rgba(34,40,99,0.55) 58%, rgba(59,163,232,0.2) 78%, transparent 100%)',
          }}
        />
        <div className="relative z-10 mx-auto flex min-h-[20rem] max-w-6xl flex-col justify-end px-4 pb-10 pt-14 sm:min-h-[22rem] sm:px-6 sm:pb-12 lg:min-h-[26rem] lg:justify-center lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/55">
              <li>
                <LocaleLink href="/" className="transition-colors hover:text-[#7EC8F0]">
                  {messages.common.home}
                </LocaleLink>
              </li>
              <li aria-hidden="true" className="text-[#3BA3E8]/70">
                /
              </li>
              <li className="text-[#7EC8F0]">{t.eyebrow}</li>
            </ol>
          </nav>
          <h1 className="max-w-2xl font-serif text-[2.15rem] font-medium leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
            {t.title}{' '}
            <span className="font-normal text-[#7EC8F0]">{t.titleAccent}</span>
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80">{t.heroDesc}</p>
          <p className="mt-3 text-sm font-medium text-[#7EC8F0]">{t.hoursNote}</p>
        </div>
      </section>

      <section className="bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-[88px]">
                <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                  {t.formEyebrow}
                </p>
                <h2 className="mt-3 font-serif text-2xl font-medium tracking-tight text-[#222863] sm:text-3xl">
                  {t.formTitle}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#5A6270]">{t.formDesc}</p>

                <div className="mt-8 rounded-2xl bg-[#222863] px-5 py-6 text-white">
                  <p className="font-serif text-xl font-medium">{t.sideTitle}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{t.sideDesc}</p>
                  <a
                    href={PHONE_HREF}
                    className="mt-5 inline-flex h-10 items-center rounded-md bg-white px-4 text-sm font-semibold text-[#222863] transition-colors hover:bg-[#EAF2FA]"
                  >
                    {t.callCta}
                  </a>
                  <LocaleLink
                    href="/contact"
                    className="mt-3 block text-sm font-semibold text-[#7EC8F0] hover:text-white"
                  >
                    {t.contactCta} →
                  </LocaleLink>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-[#5A6270]">{t.emergency}</p>
              </div>
            </aside>

            <div className="border border-[#D5DEEA] bg-white px-5 py-7 sm:px-8 sm:py-9 lg:col-span-8">
              {submitted ? (
                <div className="flex min-h-[22rem] flex-col justify-center">
                  <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#3BA3E8]">
                    {t.successEyebrow}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight text-[#222863]">
                    {t.successTitle}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-[#5A6270]">
                    {t.successDesc}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="inline-flex h-11 items-center justify-center rounded-lg border border-[#D5DEEA] bg-white px-5 text-sm font-semibold text-[#222863] transition-colors hover:bg-[#EEF2F7]"
                    >
                      {t.another}
                    </button>
                    <a
                      href={PHONE_HREF}
                      className="inline-flex h-11 items-center justify-center rounded-lg bg-[#222863] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52]"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className={labelClass}>
                      {t.name}
                      <input required name="name" type="text" autoComplete="name" className={fieldClass} />
                    </label>
                    <label className={labelClass}>
                      {t.email}
                      <input
                        required
                        name="email"
                        type="email"
                        autoComplete="email"
                        className={fieldClass}
                      />
                    </label>
                  </div>

                  <label className={labelClass}>
                    {t.phone}
                    <input required name="phone" type="tel" autoComplete="tel" className={fieldClass} />
                  </label>

                  <label className={labelClass}>
                    {t.location}
                    <select required name="location" defaultValue="" className={fieldClass}>
                      <option value="" disabled>
                        —
                      </option>
                      <option value="either">{t.locationAny}</option>
                      <option value="suite-202">{t.location202}</option>
                      <option value="suite-1206">{t.location1206}</option>
                    </select>
                  </label>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <span className={labelClass}>{t.date}</span>
                      <AppointmentDatePicker name="date" required />
                    </div>
                    <div>
                      <span className={labelClass}>{t.time}</span>
                      <AppointmentTimePicker name="time" required />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className={labelClass}>
                      {t.visitType}
                      <select required name="visitType" defaultValue="" className={fieldClass}>
                        <option value="" disabled>
                          —
                        </option>
                        <option value="primary">{t.visitPrimary}</option>
                        <option value="urgent">{t.visitUrgent}</option>
                        <option value="wellness">{t.visitWellness}</option>
                        <option value="specialty">{t.visitSpecialty}</option>
                        <option value="other">{t.visitOther}</option>
                      </select>
                    </label>
                    <label className={labelClass}>
                      {t.access}
                      <select required name="access" defaultValue="" className={fieldClass}>
                        <option value="" disabled>
                          —
                        </option>
                        <option value="membership">{t.accessMembership}</option>
                        <option value="insurance">{t.accessInsurance}</option>
                        <option value="unsure">{t.accessNotSure}</option>
                      </select>
                    </label>
                  </div>

                  <label className={labelClass}>
                    {t.reason}
                    <textarea
                      required
                      name="reason"
                      rows={4}
                      placeholder={t.reasonPlaceholder}
                      className="mt-2 w-full resize-y rounded-lg border border-[#D5DEEA] bg-white px-3 py-2.5 text-sm text-[#1A1A1A] outline-none transition-shadow focus:border-[#3BA3E8] focus:ring-2 focus:ring-[#3BA3E8]/20"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-[#222863] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52] disabled:opacity-70 sm:w-auto"
                  >
                    {loading ? t.submitting : t.submit}
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
