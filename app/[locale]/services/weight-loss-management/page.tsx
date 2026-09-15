import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WeightLossManagementContent from '@/components/services/WeightLossManagementContent'

export const metadata: Metadata = {
  title: 'Weight Loss Management | StarMed Clinic San Antonio',
  description:
    'Personalized, medically guided weight loss in San Antonio — nutrition, activity, body composition, and lasting lifestyle support at StarMed Clinic.',
}

export default function WeightLossManagementPage() {
  return (
    <div
      className="min-h-screen bg-[#F4F7FB] text-[#1A1A1A] selection:bg-[#222863] selection:text-white"
      id="top"
    >
      <Header />
      <main id="main">
        <WeightLossManagementContent />
      </main>
      <Footer />
    </div>
  )
}
