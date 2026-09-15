'use client'

import { useEffect, useState } from 'react'
import { useLocale } from '@/components/layout/LocaleProvider'

const DISMISS_KEY = 'starmed_es_welcome_dismissed'

/** One-time Spanish welcome under the utility bar on first ES visit */
export default function SpanishWelcome() {
  const { locale, messages } = useLocale()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (locale !== 'es') {
      setVisible(false)
      return
    }
    try {
      if (localStorage.getItem(DISMISS_KEY) === '1') {
        setVisible(false)
        return
      }
    } catch {
      /* ignore */
    }
    setVisible(true)
  }, [locale])

  if (!visible) return null

  return (
    <div className="border-b border-[#D5DEEA] bg-[#222863] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <p className="text-sm font-medium tracking-wide">{messages.common.spanishWelcome}</p>
        <button
          type="button"
          className="shrink-0 text-xs font-semibold text-[#7EC8F0] transition-colors hover:text-white"
          onClick={() => {
            try {
              localStorage.setItem(DISMISS_KEY, '1')
            } catch {
              /* ignore */
            }
            setVisible(false)
          }}
        >
          {messages.common.dismiss}
        </button>
      </div>
    </div>
  )
}
