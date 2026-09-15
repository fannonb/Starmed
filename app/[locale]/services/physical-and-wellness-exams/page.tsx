import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PhysicalWellnessExamsContent from '@/components/services/PhysicalWellnessExamsContent'

export const metadata: Metadata = {
  title: 'Physical & Wellness Exams | StarMed Clinic San Antonio',
  description:
    'Annual physicals, women’s health exams, and school or sports clearance visits in San Antonio — thorough wellness checkups at StarMed Clinic.',
}

export default function PhysicalWellnessExamsPage() {
  return (
    <div
      className="min-h-screen bg-[#F4F7FB] text-[#1A1A1A] selection:bg-[#222863] selection:text-white"
      id="top"
    >
      <Header />
      <main id="main">
        <PhysicalWellnessExamsContent />
      </main>
      <Footer />
    </div>
  )
}
