import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import UrgentMinorCareContent from '@/components/services/UrgentMinorCareContent'

export const metadata: Metadata = {
  title: 'Urgent Care & Minor Procedures | StarMed Clinic San Antonio',
  description:
    'Same-day urgent care and minor procedures in San Antonio — sprains, cuts, infections, sutures, and more without the long ER wait. StarMed Clinic.',
}

export default function UrgentMinorCarePage() {
  return (
    <div
      className="min-h-screen bg-[#F4F7FB] text-[#1A1A1A] selection:bg-[#222863] selection:text-white"
      id="top"
    >
      <Header />
      <main id="main">
        <UrgentMinorCareContent />
      </main>
      <Footer />
    </div>
  )
}
