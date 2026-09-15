'use client'

import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLocale, useTranslations } from '@/components/layout/LocaleProvider'
import { cn } from '@/lib/utils'

type AppointmentDatePickerProps = {
  name?: string
  required?: boolean
  className?: string
}

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate())
}

function toISODate(d: Date) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function parseISODate(value: string) {
  const [y, m, d] = value.split('-').map(Number)
  if (!y || !m || !d) return null
  return new Date(y, m - 1, d)
}

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function buildMonthGrid(view: Date) {
  const first = new Date(view.getFullYear(), view.getMonth(), 1)
  const startOffset = first.getDay()
  const gridStart = new Date(view.getFullYear(), view.getMonth(), 1 - startOffset)
  return Array.from({ length: 42 }, (_, i) => {
    const date = new Date(gridStart)
    date.setDate(gridStart.getDate() + i)
    return date
  })
}

export default function AppointmentDatePicker({
  name = 'date',
  required = true,
  className,
}: AppointmentDatePickerProps) {
  const { locale } = useLocale()
  const t = useTranslations().pages.appointments
  const today = useMemo(() => startOfDay(new Date()), [])
  const [value, setValue] = useState('')
  const [open, setOpen] = useState(false)
  const [view, setView] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1))
  const rootRef = useRef<HTMLDivElement>(null)
  const listboxId = useId()

  const selected = value ? parseISODate(value) : null
  const days = useMemo(() => buildMonthGrid(view), [view])

  const weekdayLabels = useMemo(() => {
    const formatter = new Intl.DateTimeFormat(locale, { weekday: 'short' })
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(2024, 0, 7 + i) // Sunday-start week
      return formatter.format(d).replace(/\.$/, '')
    })
  }, [locale])

  const monthLabel = useMemo(
    () =>
      new Intl.DateTimeFormat(locale, {
        month: 'long',
        year: 'numeric',
      }).format(view),
    [locale, view],
  )

  const displayValue = useMemo(() => {
    if (!selected) return ''
    return new Intl.DateTimeFormat(locale, {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(selected)
  }, [locale, selected])

  useEffect(() => {
    if (!open) return
    function onPointerDown(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  function shiftMonth(delta: number) {
    setView((v) => new Date(v.getFullYear(), v.getMonth() + delta, 1))
  }

  function choose(date: Date) {
    if (startOfDay(date) < today) return
    setValue(toISODate(date))
    setView(new Date(date.getFullYear(), date.getMonth(), 1))
    setOpen(false)
  }

  return (
    <div ref={rootRef} className={cn('relative mt-2', className)}>
      <input type="hidden" name={name} value={value} required={required} />
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={listboxId}
        onClick={() => {
          setOpen((o) => !o)
          if (selected) setView(new Date(selected.getFullYear(), selected.getMonth(), 1))
          else setView(new Date(today.getFullYear(), today.getMonth(), 1))
        }}
        className={cn(
          'flex h-11 w-full items-center gap-2.5 rounded-lg border border-[#D5DEEA] bg-white px-3 text-left text-sm transition-shadow outline-none',
          'focus:border-[#3BA3E8] focus:ring-2 focus:ring-[#3BA3E8]/20',
          open && 'border-[#3BA3E8] ring-2 ring-[#3BA3E8]/20',
        )}
      >
        <Calendar className="size-4 shrink-0 text-[#3BA3E8]" aria-hidden="true" />
        <span className={cn('flex-1 truncate', value ? 'text-[#1A1A1A]' : 'text-[#5A6270]/70')}>
          {displayValue || t.datePlaceholder}
        </span>
      </button>

      {open ? (
        <div
          id={listboxId}
          role="dialog"
          aria-label={t.date}
          className="absolute left-0 z-40 mt-2 w-[min(100%,20.5rem)] overflow-hidden rounded-2xl border border-[#D5DEEA] bg-white shadow-[0_18px_40px_-18px_rgba(34,40,99,0.45)]"
        >
          <div className="bg-gradient-to-br from-[#222863] to-[#1a1f52] px-4 py-3.5 text-white">
            <div className="flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => shiftMonth(-1)}
                className="inline-flex size-8 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label={t.prevMonth}
              >
                <ChevronLeft className="size-4" />
              </button>
              <p className="font-serif text-[1.05rem] font-medium tracking-tight capitalize">
                {monthLabel}
              </p>
              <button
                type="button"
                onClick={() => shiftMonth(1)}
                className="inline-flex size-8 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label={t.nextMonth}
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          <div className="px-3 pt-3 pb-2">
            <div className="mb-1 grid grid-cols-7 gap-0.5">
              {weekdayLabels.map((label, i) => (
                <div
                  key={i}
                  className="py-1 text-center text-[10px] font-bold tracking-[0.08em] text-[#5A6270]/80 uppercase"
                >
                  {label}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-0.5">
              {days.map((date) => {
                const inMonth = date.getMonth() === view.getMonth()
                const isToday = sameDay(date, today)
                const isSelected = selected ? sameDay(date, selected) : false
                const disabled = startOfDay(date) < today

                return (
                  <button
                    key={toISODate(date)}
                    type="button"
                    disabled={disabled}
                    onClick={() => choose(date)}
                    className={cn(
                      'relative flex h-9 items-center justify-center rounded-lg text-sm font-medium transition-colors',
                      !inMonth && !isSelected && 'text-[#9AA3B2]',
                      inMonth && !isSelected && !disabled && 'text-[#222863]',
                      !disabled && !isSelected && 'hover:bg-[#EEF5FB]',
                      disabled && 'cursor-not-allowed text-[#C5CDD8]',
                      isToday &&
                        !isSelected &&
                        'ring-1 ring-inset ring-[#3BA3E8]/55 text-[#222863]',
                      isSelected && 'bg-[#222863] text-white shadow-sm hover:bg-[#1a1f52]',
                    )}
                  >
                    {date.getDate()}
                    {isToday && !isSelected ? (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-[#3BA3E8]"
                      />
                    ) : null}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-[#E3E8F0] bg-[#F4F7FB] px-3 py-2.5">
            <button
              type="button"
              onClick={() => {
                setValue('')
                setOpen(false)
              }}
              className="rounded-md px-2 py-1 text-sm font-semibold text-[#5A6270] transition-colors hover:bg-white hover:text-[#222863]"
            >
              {t.clearDate}
            </button>
            <button
              type="button"
              onClick={() => choose(today)}
              className="rounded-md px-2 py-1 text-sm font-semibold text-[#3BA3E8] transition-colors hover:bg-white"
            >
              {t.today}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
