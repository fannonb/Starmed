import { notFound } from 'next/navigation'
import { LocaleProvider } from '@/components/layout/LocaleProvider'
import { isLocale, type Locale } from '@/lib/i18n'

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

  return <LocaleProvider locale={locale}>{children}</LocaleProvider>
}
