import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ChronicConditionManagementContent from '@/components/services/ChronicConditionManagementContent'

export const metadata: Metadata = {
  title: 'Chronic Condition Management | StarMed Clinic San Antonio',
  description:
    'Ongoing support for diabetes, high blood pressure, cholesterol, and other chronic conditions in San Antonio — personalized care at StarMed Clinic.',
}

export default function ChronicConditionManagementPage() {
  return (
    <div
      className="min-h-screen bg-[#F4F7FB] text-[#1A1A1A] selection:bg-[#222863] selection:text-white"
      id="top"
    >
      <Header />
      <main id="main">
        <ChronicConditionManagementContent />
      </main>
      <Footer />
    </div>
  )
}
