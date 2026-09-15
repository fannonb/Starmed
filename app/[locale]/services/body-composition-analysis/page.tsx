import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BodyCompositionAnalysisContent from '@/components/services/BodyCompositionAnalysisContent'

export const metadata: Metadata = {
  title: 'Body Composition Analysis | StarMed Clinic San Antonio',
  description:
    'Medical-grade body composition analysis in San Antonio — muscle, fat, bone density, and hydration insights to guide your health plan at StarMed Clinic.',
}

export default function BodyCompositionAnalysisPage() {
  return (
    <div
      className="min-h-screen bg-[#F4F7FB] text-[#1A1A1A] selection:bg-[#222863] selection:text-white"
      id="top"
    >
      <Header />
      <main id="main">
        <BodyCompositionAnalysisContent />
      </main>
      <Footer />
    </div>
  )
}
