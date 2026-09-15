import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PrimaryPreventiveCareContent from '@/components/services/PrimaryPreventiveCareContent'

export const metadata: Metadata = {
  title: 'Primary & Preventive Care | StarMed Clinic San Antonio',
  description:
    'Continuous primary and preventive care for individuals and families in San Antonio — checkups, screenings, vaccines, and early detection with StarMed Clinic.',
}

export default function PrimaryPreventiveCarePage() {
  return (
    <div
      className="min-h-screen bg-[#F4F7FB] text-[#1A1A1A] selection:bg-[#222863] selection:text-white"
      id="top"
    >
      <Header />
      <main id="main">
        <PrimaryPreventiveCareContent />
      </main>
      <Footer />
    </div>
  )
}
