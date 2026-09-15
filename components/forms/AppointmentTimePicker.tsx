'use client'

import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { Clock } from 'lucide-react'
import { useLocale, useTranslations } from '@/components/layout/LocaleProvider'
import { cn } from '@/lib/utils'

type AppointmentTimePickerProps = {
  name?: string
  required?: boolean
  className?: string
  /** Inclusive start hour in 24h local time */
  startHour?: number
  /** Inclusive end hour in 24h local time */
  endHour?: number
  /** Slot step in minutes */
  stepMinutes?: number
}

function buildSlots(startHour: number, endHour: number, stepMinutes: number) {
  const slots: string[] = []
  const start = startHour * 60
  const end = endHour * 60
  for (let mins = start; mins <= end; mins += stepMinutes) {
    const h = Math.floor(mins / 60)
    const m = mins % 60
    slots.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`)
  }
  return slots
}

function formatSlot(value: string, locale: string) {
  const [h, m] = value.split(':').map(Number)
  const date = new Date()
  date.setHours(h, m, 0, 0)
  return new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: '2-digit',
  }).format(date)
}

export default function AppointmentTimePicker({
  name = 'time',
  required = true,
  className,
  startHour = 8,
  endHour = 17,
  stepMinutes = 30,
}: AppointmentTimePickerProps) {
  const { locale } = useLocale()
  const t = useTranslations().pages.appointments
  const [value, setValue] = useState('')
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const listboxId = useId()

  const slots = useMemo(
    () => buildSlots(startHour, endHour, stepMinutes),
    [startHour, endHour, stepMinutes],
  )

  const displayValue = value ? formatSlot(value, locale) : ''

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

  return (
    <div ref={rootRef} className={cn('relative mt-2', className)}>
      <input type="hidden" name={name} value={value} required={required} />
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        onClick={() => setOpen((o) => !o)}
        className={cn(
          'flex h-11 w-full items-center gap-2.5 rounded-lg border border-[#D5DEEA] bg-white px-3 text-left text-sm transition-shadow outline-none',
          'focus:border-[#3BA3E8] focus:ring-2 focus:ring-[#3BA3E8]/20',
          open && 'border-[#3BA3E8] ring-2 ring-[#3BA3E8]/20',
        )}
      >
        <Clock className="size-4 shrink-0 text-[#3BA3E8]" aria-hidden="true" />
        <span className={cn('flex-1 truncate', value ? 'text-[#1A1A1A]' : 'text-[#5A6270]/70')}>
          {displayValue || t.timePlaceholder}
        </span>
      </button>

      {open ? (
        <div
          id={listboxId}
          role="listbox"
          aria-label={t.time}
          className="absolute left-0 z-40 mt-2 w-[min(100%,20.5rem)] overflow-hidden rounded-2xl border border-[#D5DEEA] bg-white shadow-[0_18px_40px_-18px_rgba(34,40,99,0.45)]"
        >
          <div className="bg-gradient-to-br from-[#222863] to-[#1a1f52] px-4 py-3 text-white">
            <p className="font-serif text-[1.05rem] font-medium tracking-tight">{t.time}</p>
            <p className="mt-0.5 text-xs text-white/70">{t.timeHoursNote}</p>
          </div>

          <div className="max-h-64 overflow-y-auto p-2">
            <div className="grid grid-cols-3 gap-1.5">
              {slots.map((slot) => {
                const selected = value === slot
                return (
                  <button
                    key={slot}
                    type="button"
                    role="option"
                    aria-selected={selected}
                    onClick={() => {
                      setValue(slot)
                      setOpen(false)
                    }}
                    className={cn(
                      'h-10 rounded-lg text-sm font-medium transition-colors',
                      selected
                        ? 'bg-[#222863] text-white shadow-sm'
                        : 'bg-[#F4F7FB] text-[#222863] hover:bg-[#EAF2FA]',
                    )}
                  >
                    {formatSlot(slot, locale)}
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
              {t.clearTime}
            </button>
            <span className="px-1 text-xs font-medium text-[#5A6270]/80">{t.timeSlotHint}</span>
          </div>
        </div>
      ) : null}
    </div>
  )
}
