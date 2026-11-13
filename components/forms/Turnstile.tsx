'use client'

import { useEffect, useRef } from 'react'
import { useLocale } from '@/components/layout/LocaleProvider'

/**
 * Cloudflare Turnstile bot check for the website forms.
 * The widget adds a hidden `cf-turnstile-response` input to the surrounding form;
 * the PHP handlers verify it in `starmed_passes_turnstile` (public/api/_forms.php).
 * Renders nothing when NEXT_PUBLIC_TURNSTILE_SITE_KEY is unset (local development).
 */

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'

type TurnstileApi = {
  render: (container: HTMLElement, options: Record<string, unknown>) => string
  reset: (widgetId: string) => void
  remove: (widgetId: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

let scriptPromise: Promise<TurnstileApi> | null = null

function loadTurnstile() {
  if (window.turnstile) return Promise.resolve(window.turnstile)
  scriptPromise ??= new Promise<TurnstileApi>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.async = true
    script.onload = () => (window.turnstile ? resolve(window.turnstile) : reject())
    script.onerror = () => {
      scriptPromise = null
      reject()
    }
    document.head.appendChild(script)
  })
  return scriptPromise
}

/** `resetSignal` changes after each submission so the widget issues a fresh single-use token. */
export default function Turnstile({ resetSignal }: { resetSignal?: unknown }) {
  const { locale } = useLocale()
  const container = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | null>(null)

  useEffect(() => {
    if (!SITE_KEY || !container.current) return
    let cancelled = false
    loadTurnstile()
      .then((turnstile) => {
        if (cancelled || !container.current) return
        widgetId.current = turnstile.render(container.current, {
          sitekey: SITE_KEY,
          language: locale,
          appearance: 'interaction-only',
          theme: 'light',
        })
      })
      .catch(() => {
        // Script blocked or offline: the server rejects the submission and the visitor is asked to retry.
      })
    return () => {
      cancelled = true
      if (widgetId.current) window.turnstile?.remove(widgetId.current)
      widgetId.current = null
    }
  }, [locale])

  useEffect(() => {
    if (resetSignal === undefined || !widgetId.current) return
    window.turnstile?.reset(widgetId.current)
  }, [resetSignal])

  if (!SITE_KEY) return null
  return <div ref={container} className="empty:hidden" />
}
