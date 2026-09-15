export const locales = ['en', 'es'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'
export const LOCALE_COOKIE = 'NEXT_LOCALE'

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function getLocaleFromPathname(pathname: string): Locale | null {
  const segment = pathname.split('/').filter(Boolean)[0]
  return segment && isLocale(segment) ? segment : null
}

/** Strip leading /en or /es from a pathname */
export function stripLocale(pathname: string): string {
  const parts = pathname.split('/')
  if (parts[1] && isLocale(parts[1])) {
    const rest = parts.slice(2).join('/')
    return rest ? `/${rest}` : '/'
  }
  return pathname || '/'
}

/** Prefix a path with the active locale */
export function withLocale(pathname: string, locale: Locale): string {
  const hashIndex = pathname.indexOf('#')
  const hash = hashIndex >= 0 ? pathname.slice(hashIndex) : ''
  const pathOnly = hashIndex >= 0 ? pathname.slice(0, hashIndex) : pathname
  const clean = pathOnly.startsWith('/') ? pathOnly : `/${pathOnly}`
  const base = !clean || clean === '/' ? `/${locale}` : `/${locale}${clean}`
  return `${base}${hash}`
}

/** Swap locale in the current pathname, keeping the rest of the path */
export function swapLocalePath(pathname: string, nextLocale: Locale): string {
  const without = stripLocale(pathname)
  return withLocale(without, nextLocale)
}
