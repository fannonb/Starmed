'use client'

import { FormEvent, startTransition, useActionState, useEffect, useRef, useState, type ReactNode } from 'react'
import AppointmentDatePicker from '@/components/forms/AppointmentDatePicker'
import AppointmentTimePicker from '@/components/forms/AppointmentTimePicker'
import { useTranslations } from '@/components/layout/LocaleProvider'
import { clinic } from '@/data/clinic'
import {
  appointmentLimits,
  clinicHours,
  patientStatusIds,
  visitTypeIds,
  type AppointmentField,
  type AppointmentFormState,
  type VisitTypeId,
} from '@/data/appointments'
import { requestAppointment } from '@/lib/actions/appointment'

const initialState: AppointmentFormState = { status: 'idle' }

const inputBase =
  'mt-2 w-full rounded-lg border bg-white px-3 text-base text-[#1A1A1A] outline-none transition-shadow focus:border-[#3BA3E8] focus:ring-2 focus:ring-[#3BA3E8]/20'
const labelClass = 'block text-sm font-semibold text-[#222863]'

function Step({ number, title, children }: { number: number; title: string; children: ReactNode }) {
  return (
    <fieldset className="space-y-4 border-t border-[#DCE3F0] pt-6 first:border-t-0 first:pt-0">
      <legend className="flex items-center gap-3 font-serif text-xl font-medium tracking-tight text-[#222863]">
        <span
          aria-hidden="true"
          className="flex h-7 w-7 items-center justify-center rounded-full bg-[#222863] font-sans text-sm font-semibold text-white"
        >
          {number}
        </span>
        {title}
      </legend>
      {children}
    </fieldset>
  )
}

export default function AppointmentForm() {
  const t = useTranslations().pages.appointments
  const [state, formAction, pending] = useActionState(requestAppointment, initialState)
  const [dismissed, setDismissed] = useState<AppointmentFormState | null>(null)
  const [formKey, setFormKey] = useState(0)
  const [visitType, setVisitType] = useState('')
  const startedAt = useRef(0)

  // Time-on-form check for bots; set after mount so server and client HTML match.
  useEffect(() => {
    startedAt.current = Date.now()
  }, [formKey])

  // Other pages link here with ?visit=<type> to pre-select the visit type.
  useEffect(() => {
    const visit = new URLSearchParams(window.location.search).get('visit')
    if (visit && visitTypeIds.includes(visit as VisitTypeId)) setVisitType(visit)
  }, [formKey])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // Submit manually so the form keeps what the visitor entered if the server asks for fixes.
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    data.set('startedAt', String(startedAt.current))
    startTransition(() => formAction(data))
  }

  const errors = state !== dismissed ? (state.errors ?? {}) : {}
  const errorText = (field: AppointmentField) => {
    const code = errors[field]
    if (!code) return null
    if (field === 'email' && code === 'invalid') return t.errors.emailInvalid
    if (field === 'phone' && code === 'invalid') return t.errors.phoneInvalid
    return t.errors[code]
  }
  const describedBy = (field: AppointmentField, extra?: string) =>
    [errors[field] ? `${field}-error` : null, extra].filter(Boolean).join(' ') || undefined
  const inputProps = (field: AppointmentField) => ({
    name: field,
    'aria-invalid': errors[field] ? true : undefined,
    'aria-describedby': describedBy(field),
    className: `${inputBase} h-11 ${errors[field] ? 'border-[#C62828]' : 'border-[#D5DEEA]'}`,
  })
  const fieldError = (field: AppointmentField) =>
    errors[field] ? (
      <span id={`${field}-error`} className="mt-1.5 block text-sm font-medium text-[#C62828]">
        {errorText(field)}
      </span>
    ) : null

  /** A short list of options as tappable choices (easier than a dropdown for 2–3 options). */
  const choiceGroup = (
    field: 'patientStatus',
    legend: string,
    ids: readonly string[],
    labels: Record<string, string>,
  ) => (
    <fieldset aria-describedby={describedBy(field)}>
      <legend className={labelClass}>{legend}</legend>
      <div className="mt-2 flex flex-wrap gap-2">
        {ids.map((id) => (
          <label
            key={id}
            className={`flex cursor-pointer items-center gap-2.5 rounded-lg border bg-white px-3.5 py-2.5 text-base text-[#1A1A1A] transition-colors has-[:checked]:border-[#222863] has-[:checked]:bg-[#EEF3FF] has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#3BA3E8]/40 ${
              errors[field] ? 'border-[#C62828]' : 'border-[#D5DEEA]'
            }`}
          >
            <input type="radio" name={field} value={id} required className="h-4 w-4 accent-[#222863]" />
            {labels[id]}
          </label>
        ))}
      </div>
      {fieldError(field)}
    </fieldset>
  )

  if (state.status === 'success' && state !== dismissed) {
    return (
      <div className="flex min-h-[20rem] flex-col justify-center" role="status">
        <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863]">
          {t.successTitle}
        </h2>
        <p className="mt-3 max-w-md text-lg leading-relaxed text-[#3D4452]">{t.successDesc}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => {
              setDismissed(state)
              setVisitType('')
              setFormKey((key) => key + 1)
            }}
            className="inline-flex h-11 items-center justify-center rounded-lg border border-[#D5DEEA] bg-white px-5 text-sm font-semibold text-[#222863] transition-colors hover:border-[#222863]"
          >
            {t.another}
          </button>
        </div>
      </div>
    )
  }

  const [urgentBefore, urgentAfter] = t.urgentHint.split('{phone}')
  const [unavailableBefore, unavailableAfter] = t.errors.unavailable.split('{phone}')
  const showAlert = state !== dismissed && state.status !== 'idle' && state.status !== 'success'
  const phoneLink = (
    <a href={clinic.phoneHref} className="font-semibold underline underline-offset-4">
      {clinic.phoneDisplay}
    </a>
  )

  return (
    <form key={formKey} onSubmit={handleSubmit} className="space-y-6">
      {showAlert ? (
        <p
          role="alert"
          className="rounded-lg border border-[#C62828]/40 bg-[#FDF3F3] px-4 py-3 text-base text-[#8E1C1C]"
        >
          {state.status === 'invalid' ? t.errors.checkFields : null}
          {state.status === 'rate-limited' ? t.errors['rate-limited'] : null}
          {state.status === 'unavailable' ? (
            <>
              {unavailableBefore}
              {phoneLink}
              {unavailableAfter}
            </>
          ) : null}
        </p>
      ) : null}

      <p className="text-sm text-[#5A6270]">{t.requiredNote}</p>

      {/* Honeypot: hidden from people and assistive tech; bots tend to fill every field. */}
      <div aria-hidden="true" className="absolute left-[-10000px] h-px w-px overflow-hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Step number={1} title={t.stepNeed}>
        <label className={labelClass}>
          {t.visitType}
          <select
            {...inputProps('visitType')}
            required
            value={visitType}
            onChange={(e) => setVisitType(e.target.value)}
          >
            <option value="" disabled>
              {t.choose}
            </option>
            {visitTypeIds.map((id) => (
              <option key={id} value={id}>
                {t.visitTypes[id]}
              </option>
            ))}
          </select>
          {fieldError('visitType')}
        </label>
        {visitType === 'urgent' ? (
          <p className="rounded-lg bg-[#EEF3FF] px-4 py-3 text-base text-[#222863]">
            {urgentBefore}
            {phoneLink}
            {urgentAfter}
          </p>
        ) : null}
        {choiceGroup('patientStatus', t.patientStatus, patientStatusIds, t.patientOptions)}
      </Step>

      <Step number={2} title={t.stepWhen}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <span className={labelClass}>{t.date}</span>
            <AppointmentDatePicker name="date" required />
            {fieldError('date')}
          </div>
          <div>
            <span className={labelClass}>{t.time}</span>
            <AppointmentTimePicker
              name="time"
              required
              startHour={clinicHours.startHour}
              endHour={clinicHours.endHour}
              stepMinutes={clinicHours.stepMinutes}
            />
            {fieldError('time')}
          </div>
        </div>
        <p className="text-sm text-[#5A6270]">{t.whenNote}</p>
      </Step>

      <Step number={3} title={t.stepYou}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className={labelClass}>
            {t.name}
            <input
              {...inputProps('name')}
              required
              type="text"
              autoComplete="name"
              maxLength={appointmentLimits.name}
            />
            {fieldError('name')}
          </label>
          <label className={labelClass}>
            {t.phone}
            <input
              {...inputProps('phone')}
              required
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              maxLength={appointmentLimits.phone}
            />
            {fieldError('phone')}
          </label>
        </div>
        <label className={labelClass}>
          {t.email}
          <input
            {...inputProps('email')}
            required
            type="email"
            autoComplete="email"
            inputMode="email"
            maxLength={appointmentLimits.email}
          />
          {fieldError('email')}
        </label>
        <label className={labelClass}>
          {t.notes}
          <textarea
            name="notes"
            rows={3}
            maxLength={appointmentLimits.notes}
            aria-invalid={errors.notes ? true : undefined}
            aria-describedby={describedBy('notes', 'notes-hint')}
            className={`${inputBase} resize-y py-2.5 ${errors.notes ? 'border-[#C62828]' : 'border-[#D5DEEA]'}`}
          />
          <span id="notes-hint" className="mt-1.5 block text-sm font-normal text-[#5A6270]">
            {t.notesHint}
          </span>
          {fieldError('notes')}
        </label>
      </Step>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-[#222863] px-6 text-base font-semibold text-white transition-colors hover:bg-[#1a1f52] disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {pending ? t.submitting : t.submit}
      </button>
    </form>
  )
}
