import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CareIndividualsContent from '@/components/care/CareIndividualsContent'

export const metadata: Metadata = {
  title: 'Individuals & Families | StarMed Clinic San Antonio',
  description:
    'Primary care, urgent visits, pediatrics, wellness exams, and chronic care for individuals and families in San Antonio — membership or insurance visits.',
}

export default function CareIndividualsPage() {
  return (
    <div
      className="min-h-screen bg-[#F4F7FB] text-[#1A1A1A] selection:bg-[#222863] selection:text-white"
      id="top"
    >
      <Header />
      <main id="main">
        <CareIndividualsContent />
      </main>
      <Footer />
    </div>
  )
}
