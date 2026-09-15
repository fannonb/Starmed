'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from 'react'
import { usePathname, useRouter } from 'next/navigation'
import {
  LOCALE_COOKIE,
  type Locale,
  swapLocalePath,
} from '@/lib/i18n'
import { getMessages, type Messages } from '@/messages'

type LocaleContextValue = {
  locale: Locale
  messages: Messages
  setLocale: (next: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function persistLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=31536000;samesite=lax`
  try {
    localStorage.setItem(LOCALE_COOKIE, locale)
  } catch {
    /* ignore */
  }
}

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale
  children: ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const messages = useMemo(() => getMessages(locale), [locale])

  useEffect(() => {
    document.documentElement.lang = locale
    persistLocale(locale)
  }, [locale])

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === locale) return
      persistLocale(next)
      router.push(swapLocalePath(pathname || '/', next))
    },
    [locale, pathname, router],
  )

  const value = useMemo(
    () => ({ locale, messages, setLocale }),
    [locale, messages, setLocale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return ctx
}

export function useTranslations() {
  return useLocale().messages
}
