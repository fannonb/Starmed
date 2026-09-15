import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MentalWellnessContent from '@/components/services/MentalWellnessContent'

export const metadata: Metadata = {
  title: 'Mental Wellness | StarMed Clinic San Antonio',
  description:
    'Evidence-based mental wellness care in San Antonio — counseling, medication management, neurofeedback, brain mapping, and more at StarMed Clinic.',
}

export default function MentalWellnessPage() {
  return (
    <div
      className="min-h-screen bg-[#F4F7FB] text-[#1A1A1A] selection:bg-[#222863] selection:text-white"
      id="top"
    >
      <Header />
      <main id="main">
        <MentalWellnessContent />
      </main>
      <Footer />
    </div>
  )
}
