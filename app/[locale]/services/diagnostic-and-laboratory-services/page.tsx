import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import DiagnosticLaboratoryContent from '@/components/services/DiagnosticLaboratoryContent'

export const metadata: Metadata = {
  title: 'Diagnostic & Laboratory Services | StarMed Clinic San Antonio',
  description:
    'Blood tests, X-rays, ultrasounds, CT, MRI, bone density scans, EKGs, and breathing tests in San Antonio — with results explained in plain language at StarMed Clinic.',
}

export default function DiagnosticLaboratoryPage() {
  return (
    <div
      className="min-h-screen bg-[#F4F7FB] text-[#1A1A1A] selection:bg-[#222863] selection:text-white"
      id="top"
    >
      <Header />
      <main id="main">
        <DiagnosticLaboratoryContent />
      </main>
      <Footer />
    </div>
  )
}
