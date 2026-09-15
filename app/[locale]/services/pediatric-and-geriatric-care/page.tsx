import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PediatricGeriatricCareContent from '@/components/services/PediatricGeriatricCareContent'

export const metadata: Metadata = {
  title: 'Pediatric & Geriatric Care | StarMed Clinic San Antonio',
  description:
    'Thoughtful care for children and older adults in San Antonio — checkups, immunizations, senior wellness, and chronic support at StarMed Clinic.',
}

export default function PediatricAndGeriatricCarePage() {
  return (
    <div
      className="min-h-screen bg-[#F4F7FB] text-[#1A1A1A] selection:bg-[#222863] selection:text-white"
      id="top"
    >
      <Header />
      <main id="main">
        <PediatricGeriatricCareContent />
      </main>
      <Footer />
    </div>
  )
}
