import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import OsteopathicManipulativeTreatmentContent from '@/components/services/OsteopathicManipulativeTreatmentContent'

export const metadata: Metadata = {
  title: 'Osteopathic Manipulative Treatment (OMT) | StarMed Clinic San Antonio',
  description:
    'Hands-on OMT in San Antonio for back pain, migraines, joint issues, sports injuries, and more — gentle osteopathic care at StarMed Clinic.',
}

export default function OsteopathicManipulativeTreatmentPage() {
  return (
    <div
      className="min-h-screen bg-[#F4F7FB] text-[#1A1A1A] selection:bg-[#222863] selection:text-white"
      id="top"
    >
      <Header />
      <main id="main">
        <OsteopathicManipulativeTreatmentContent />
      </main>
      <Footer />
    </div>
  )
}
