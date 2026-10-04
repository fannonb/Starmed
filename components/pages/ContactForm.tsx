'use client'

import { FormEvent, startTransition, useActionState, useEffect, useRef, useState } from 'react'
import { useTranslations } from '@/components/layout/LocaleProvider'
import { clinic } from '@/data/clinic'
import { contactLimits, inquiryIds, type ContactField, type ContactFormState } from '@/data/contact'
import { sendContactMessage } from '@/lib/actions/contact'

const initialState: ContactFormState = { status: 'idle' }

const inputClass =
  'mt-2 w-full rounded-lg border bg-white px-3 text-base text-[#1A1A1A] outline-none transition-shadow focus:border-[#3BA3E8] focus:ring-2 focus:ring-[#3BA3E8]/20'

export default function ContactForm() {
  const t = useTranslations().pages.contactPage
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState)
  const [dismissed, setDismissed] = useState<ContactFormState | null>(null)
  const [formKey, setFormKey] = useState(0)
  const startedAt = useRef(0)

  // Time-on-form check for bots; set after mount so server and client HTML match.
  useEffect(() => {
    startedAt.current = Date.now()
  }, [formKey])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // Submit manually so the form keeps what the visitor typed if the server asks for fixes.
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    data.set('startedAt', String(startedAt.current))
    startTransition(() => formAction(data))
  }

  const errors = state.errors ?? {}
  const errorText = (field: ContactField) => {
    const code = errors[field]
    if (!code) return null
    if (field === 'email' && code === 'invalid') return t.errors.emailInvalid
    if (field === 'phone' && code === 'invalid') return t.errors.phoneInvalid
    return t.errors[code]
  }
  const fieldProps = (field: ContactField) => ({
    name: field,
    'aria-invalid': errors[field] ? true : undefined,
    'aria-describedby': errors[field] ? `${field}-error` : undefined,
    className: `${inputClass} ${errors[field] ? 'border-[#C62828]' : 'border-[#D5DEEA]'}`,
  })
  const fieldError = (field: ContactField) =>
    errors[field] ? (
      <span id={`${field}-error`} className="mt-1.5 block text-sm font-medium text-[#C62828]">
        {errorText(field)}
      </span>
    ) : null

  if (state.status === 'success' && state !== dismissed) {
    return (
      <div className="flex min-h-[16rem] flex-col justify-center" role="status">
        <h3 className="font-serif text-2xl font-medium tracking-tight text-[#222863]">
          {t.successTitle}
        </h3>
        <p className="mt-3 max-w-md text-base leading-relaxed text-[#3D4452]">{t.successDesc}</p>
        <button
          type="button"
          onClick={() => {
            setDismissed(state)
            setFormKey((key) => key + 1)
          }}
          className="mt-7 inline-flex h-11 w-fit items-center justify-center rounded-lg border border-[#D5DEEA] bg-white px-5 text-sm font-semibold text-[#222863] transition-colors hover:border-[#222863]"
        >
          {t.another}
        </button>
      </div>
    )
  }

  const [unavailableBefore, unavailableAfter] = t.errors.unavailable.split('{email}')
  const showAlert = state !== dismissed && state.status !== 'idle' && state.status !== 'success'

  return (
    <form key={formKey} onSubmit={handleSubmit} className="space-y-4">
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
              <a href={`mailto:${clinic.email}`} className="font-semibold underline underline-offset-4">
                {clinic.email}
              </a>
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

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-[#222863]">
          {t.name}
          <input
            {...fieldProps('name')}
            required
            type="text"
            autoComplete="name"
            maxLength={contactLimits.name}
            className={`${fieldProps('name').className} h-11`}
          />
          {fieldError('name')}
        </label>
        <label className="block text-sm font-semibold text-[#222863]">
          {t.email}
          <input
            {...fieldProps('email')}
            required
            type="email"
            autoComplete="email"
            inputMode="email"
            maxLength={contactLimits.email}
            className={`${fieldProps('email').className} h-11`}
          />
          {fieldError('email')}
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-[#222863]">
          {t.phone}
          <input
            {...fieldProps('phone')}
            required
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            maxLength={contactLimits.phone}
            className={`${fieldProps('phone').className} h-11`}
          />
          {fieldError('phone')}
        </label>
        <label className="block text-sm font-semibold text-[#222863]">
          {t.inquiry}
          <select
            {...fieldProps('inquiry')}
            required
            defaultValue=""
            className={`${fieldProps('inquiry').className} h-11`}
          >
            <option value="" disabled>
              {t.inquiryPlaceholder}
            </option>
            {inquiryIds.map((id) => (
              <option key={id} value={id}>
                {t.inquiries[id]}
              </option>
            ))}
          </select>
          {fieldError('inquiry')}
        </label>
      </div>

      <label className="block text-sm font-semibold text-[#222863]">
        {t.message}
        <textarea
          {...fieldProps('message')}
          required
          rows={5}
          maxLength={contactLimits.message}
          className={`${fieldProps('message').className} resize-y py-2.5`}
        />
        {fieldError('message')}
      </label>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-11 items-center justify-center rounded-lg bg-[#222863] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52] disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? t.sending : t.submit}
      </button>
    </form>
  )
}
