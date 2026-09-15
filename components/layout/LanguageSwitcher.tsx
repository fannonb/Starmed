'use client'

import { useLocale } from '@/components/layout/LocaleProvider'
import type { Locale } from '@/lib/i18n'

const options: { id: Locale; label: string }[] = [
  { id: 'en', label: 'EN' },
  { id: 'es', label: 'ES' },
]

type LanguageSwitcherProps = {
  className?: string
  size?: 'sm' | 'md'
}

export default function LanguageSwitcher({
  className = '',
  size = 'sm',
}: LanguageSwitcherProps) {
  const { locale, setLocale, messages } = useLocale()
  const pad = size === 'sm' ? 'px-2.5 py-1 text-[11px]' : 'px-3 py-1.5 text-xs'

  return (
    <div
      role="group"
      aria-label={messages.nav.language}
      className={`inline-flex items-center rounded-full bg-white/80 p-0.5 ring-1 ring-[#D5DEEA] ${className}`}
    >
      {options.map((option) => {
        const active = locale === option.id
        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={active}
            onClick={() => setLocale(option.id)}
            className={`${pad} rounded-full font-bold tracking-wide transition-colors ${
              active
                ? 'bg-[#222863] text-white'
                : 'text-[#5A6270] hover:text-[#222863]'
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
