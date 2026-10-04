'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Phone, RotateCcw } from 'lucide-react'
import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'
import { clinic } from '@/data/clinic'
import { useLocalizedServices } from '@/hooks/useLocalizedServices'
import type { VisitTypeId } from '@/data/appointments'

type Who = 'me' | 'child' | 'parent' | 'team'
type When = 'today' | 'week' | 'planning'
type NeedId =
  | 'urgent'
  | 'wellness-exams'
  | 'primary'
  | 'chronic'
  | 'diagnostics'
  | 'omt'
  | 'weight-loss'
  | 'mental-wellness'
  | 'ketamine'
  | 'other'

const whoOptions: Who[] = ['me', 'child', 'parent', 'team']
const whenOptions: When[] = ['today', 'week', 'planning']
const needOptions: NeedId[] = [
  'urgent',
  'wellness-exams',
  'primary',
  'chronic',
  'diagnostics',
  'omt',
  'weight-loss',
  'mental-wellness',
  'ketamine',
  'other',
]

/** Maps a recommended service to the appointment form's visit type. */
const visitTypeByService: Record<string, VisitTypeId> = {
  primary: 'primary',
  chronic: 'primary',
  diagnostics: 'labs',
  'pediatric-geriatric': 'primary',
  urgent: 'urgent',
  'wellness-exams': 'wellness',
  omt: 'omt',
  'weight-loss': 'weight',
  'body-composition': 'weight',
  'mental-wellness': 'mental',
  ketamine: 'mental',
}

const mindServices = new Set(['mental-wellness', 'ketamine'])

function recommend(who: Who, need: NeedId | null, when: When | null): string {
  if (who === 'team') return 'businesses'
  const forFamily = who === 'child' || who === 'parent'
  if (need === 'other' || need === null) {
    if (when === 'today') return 'urgent'
    return forFamily ? 'pediatric-geriatric' : 'primary'
  }
  if (forFamily && (need === 'primary' || need === 'wellness-exams')) return 'pediatric-geriatric'
  return need
}

export default function CareFinder() {
  const t = useTranslations().pages
  const f = t.careFinder
  const services = useLocalizedServices()
  const [step, setStep] = useState(0)
  const [who, setWho] = useState<Who | null>(null)
  const [need, setNeed] = useState<NeedId | null>(null)
  const [when, setWhen] = useState<When | null>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const hasInteracted = useRef(false)

  useEffect(() => {
    if (hasInteracted.current) headingRef.current?.focus()
  }, [step])

  const go = (next: number) => {
    hasInteracted.current = true
    setStep(next)
  }

  const chooseWho = (value: Who) => {
    setWho(value)
    go(value === 'team' ? 3 : 1)
  }

  const back = () => go(step === 3 && who === 'team' ? 0 : step - 1)

  const reset = () => {
    setWho(null)
    setNeed(null)
    setWhen(null)
    go(0)
  }

  const needs = needOptions.filter((id) => !(who === 'child' && id === 'ketamine'))
  const needLabel = (id: NeedId) =>
    id === 'other' ? f.needOther : t.servicesGrid.needs[id as keyof typeof t.servicesGrid.needs]

  const resultId = step === 3 && who ? recommend(who, need, when) : null
  const result = resultId ? services.find((service) => service.id === resultId) : undefined
  const isToday = when === 'today'
  const bookHref = `/appointments${resultId && visitTypeByService[resultId] ? `?visit=${visitTypeByService[resultId]}` : ''}`

  const optionClass = (selected: boolean) =>
    `group flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left text-[0.95rem] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222863] ${
      selected
        ? 'border-[#222863] bg-[#EEF3FF] text-[#222863]'
        : 'border-[#DCE3F0] bg-white text-[#1A1A1A] hover:border-[#3BA3E8] hover:bg-[#F4F9FE]'
    }`

  const questions = [f.whoQuestion, f.needQuestion, f.whenQuestion]

  return (
    <section className="bg-[#F4F7FB] py-16 sm:py-20 lg:py-24 scroll-mt-32" id="care-finder">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
        <header className="lg:col-span-5">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            {f.title}{' '}
            <span className="italic font-normal text-[#3BA3E8]">{f.titleAccent}</span>
          </h2>
          <p className="mt-3 max-w-md text-base leading-relaxed text-[#5A6270]">{f.desc}</p>
          <p className="mt-6 max-w-md text-xs leading-relaxed text-[#5A6270]">{f.disclaimer}</p>
        </header>

        <div className="rounded-[1.5rem] bg-white p-6 ring-1 ring-[#DCE3F0] sm:p-8 lg:col-span-7">
          {step < 3 ? (
            <>
              <div className="flex items-center justify-between gap-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#3BA3E8]">
                  {f.step.replace('{n}', String(step + 1))}
                </p>
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={back}
                    className="inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-[#5A6270] transition-colors hover:text-[#222863] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222863]"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    {f.back}
                  </button>
                ) : null}
              </div>
              <div className="mt-3 grid grid-cols-3 gap-1.5" aria-hidden="true">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={`h-1 rounded-full transition-colors ${i <= step ? 'bg-[#222863]' : 'bg-[#E3E8F0]'}`}
                  />
                ))}
              </div>

              <h3
                ref={headingRef}
                tabIndex={-1}
                className="mt-6 font-serif text-2xl font-medium tracking-tight text-[#222863] outline-none"
              >
                {questions[step]}
              </h3>

              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {step === 0
                  ? whoOptions.map((value) => (
                      <li key={value}>
                        <button
                          type="button"
                          aria-pressed={who === value}
                          className={optionClass(who === value)}
                          onClick={() => chooseWho(value)}
                        >
                          {f.who[value]}
                          <ArrowRight
                            aria-hidden="true"
                            className="h-4 w-4 shrink-0 text-[#3BA3E8] transition-transform group-hover:translate-x-0.5"
                          />
                        </button>
                      </li>
                    ))
                  : null}
                {step === 1
                  ? needs.map((value) => (
                      <li key={value}>
                        <button
                          type="button"
                          aria-pressed={need === value}
                          className={optionClass(need === value)}
                          onClick={() => {
                            setNeed(value)
                            go(2)
                          }}
                        >
                          {needLabel(value)}
                          <ArrowRight
                            aria-hidden="true"
                            className="h-4 w-4 shrink-0 text-[#3BA3E8] transition-transform group-hover:translate-x-0.5"
                          />
                        </button>
                      </li>
                    ))
                  : null}
                {step === 2
                  ? whenOptions.map((value) => (
                      <li key={value}>
                        <button
                          type="button"
                          aria-pressed={when === value}
                          className={optionClass(when === value)}
                          onClick={() => {
                            setWhen(value)
                            go(3)
                          }}
                        >
                          {f.when[value]}
                          <ArrowRight
                            aria-hidden="true"
                            className="h-4 w-4 shrink-0 text-[#3BA3E8] transition-transform group-hover:translate-x-0.5"
                          />
                        </button>
                      </li>
                    ))
                  : null}
              </ul>
            </>
          ) : result ? (
            <div aria-live="polite">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#3BA3E8]">
                  {f.resultEyebrow}
                </p>
                <button
                  type="button"
                  onClick={back}
                  className="inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-[#5A6270] transition-colors hover:text-[#222863] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222863]"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  {f.back}
                </button>
              </div>

              <h3
                ref={headingRef}
                tabIndex={-1}
                className="mt-4 font-serif text-[1.75rem] font-medium leading-tight tracking-tight text-[#222863] outline-none sm:text-[2rem]"
              >
                <LocaleLink
                  href={result.href ?? `/services#${result.id}`}
                  className="rounded-sm underline decoration-[#3BA3E8]/40 decoration-2 underline-offset-[6px] transition-colors hover:text-[#3BA3E8] hover:decoration-[#3BA3E8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222863]"
                >
                  {result.title}
                </LocaleLink>
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-[#5A6270]">{result.desc}</p>
              {isToday ? (
                <p className="mt-4 text-sm font-semibold text-[#222863]">{f.resultToday}</p>
              ) : null}

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                {who === 'team' ? (
                  <LocaleLink
                    href={result.href ?? '/care/employers'}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#222863] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52]"
                  >
                    {f.teamCta}
                  </LocaleLink>
                ) : isToday ? (
                  <>
                    <a
                      href={clinic.phoneHref}
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#222863] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52]"
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      {f.callCta} {clinic.phoneDisplay}
                    </a>
                    <LocaleLink
                      href={bookHref}
                      className="inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold text-[#222863] ring-1 ring-[#DCE3F0] transition-colors hover:bg-[#F4F7FB]"
                    >
                      {f.bookCta}
                    </LocaleLink>
                  </>
                ) : (
                  <LocaleLink
                    href={bookHref}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#222863] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52]"
                  >
                    {f.bookCta}
                  </LocaleLink>
                )}
                {who !== 'team' && result.href ? (
                  <LocaleLink
                    href={result.href}
                    className="inline-flex items-center justify-center gap-1 px-2 text-sm font-semibold text-[#222863] transition-colors hover:text-[#3BA3E8]"
                  >
                    {f.learnMore}
                    <span aria-hidden="true">→</span>
                  </LocaleLink>
                ) : null}
              </div>

              {isToday || (resultId && mindServices.has(resultId)) ? (
                <div className="mt-7 space-y-1.5 rounded-xl bg-[#F4F7FB] px-4 py-3 text-sm text-[#1A1A1A]">
                  {isToday ? <p>{f.emergency}</p> : null}
                  {resultId && mindServices.has(resultId) ? <p>{f.crisis}</p> : null}
                </div>
              ) : null}

              <button
                type="button"
                onClick={reset}
                className="mt-6 inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-[#5A6270] transition-colors hover:text-[#222863] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222863]"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                {f.startOver}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
