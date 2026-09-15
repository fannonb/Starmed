import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MembershipPageContent from '@/components/pages/MembershipPageContent'
import { isLocale, type Locale } from '@/lib/i18n'
import { getMessages } from '@/messages'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : 'en'
  const t = getMessages(locale)
  return {
    title: t.membership.metaTitle,
    description: t.membership.metaDesc,
  }
}

export default function MembershipPage() {
  return (
    <div
      className="min-h-screen bg-[#F4F7FB] text-[#1A1A1A] selection:bg-[#222863] selection:text-white"
      id="top"
    >
      <Header />
      <main id="main">
        <MembershipPageContent />
      </main>
      <Footer />
    </div>
  )
}
