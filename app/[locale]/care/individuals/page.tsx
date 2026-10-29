import { permanentRedirect } from 'next/navigation'
import { isLocale } from '@/lib/i18n'

/** Merged into the Primary Care hub; kept so existing links and search results still land. */
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  permanentRedirect(`/${isLocale(locale) ? locale : 'en'}/primary-care`)
}
