import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import DirectPrimaryCareBusinessesContent from '@/components/services/DirectPrimaryCareBusinessesContent'

export const metadata: Metadata = {
  title: 'Direct Primary Care for Businesses | StarMed Clinic San Antonio',
  description:
    'Employer Direct Primary Care in San Antonio — predictable monthly membership, same-day access, and wellness support that reduce costs and keep teams productive.',
}

export default function DirectPrimaryCareBusinessesPage() {
  return (
    <div
      className="min-h-screen bg-[#F4F7FB] text-[#1A1A1A] selection:bg-[#222863] selection:text-white"
      id="top"
    >
      <Header />
      <main id="main">
        <DirectPrimaryCareBusinessesContent />
      </main>
      <Footer />
    </div>
  )
}
