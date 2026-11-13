import { notFound } from 'next/navigation'
import { SiteShell, siteMetadata, siteViewport } from '@/app/site-shell'
import { LocaleProvider } from '@/components/layout/LocaleProvider'
import MobileActionBar from '@/components/layout/MobileActionBar'
import ScrollToTop from '@/components/layout/ScrollToTop'
import { isLocale, type Locale } from '@/lib/i18n'

export const metadata = siteMetadata
export const viewport = siteViewport

// Only /en and /es exist; anything else is a 404 (required for static export).
export const dynamicParams = false

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }]
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  if (!isLocale(raw)) notFound()
  const locale = raw as Locale

  return (
    <SiteShell lang={locale}>
      <LocaleProvider locale={locale}>
        {children}
        <MobileActionBar />
        <ScrollToTop />
      </LocaleProvider>
    </SiteShell>
  )
}
