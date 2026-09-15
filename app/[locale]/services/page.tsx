import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ServicesPageContent from '@/components/pages/ServicesPageContent'

export const metadata: Metadata = {
  title: 'Services | StarMed Clinic San Antonio',
  description:
    'Explore StarMed’s full clinical offering — primary care, diagnostics, OMT, mental wellness, ketamine therapy, weight management, and direct primary care for businesses.',
}

export default function ServicesPage() {
  return (
    <div
      className="min-h-screen bg-[#F4F7FB] text-[#1A1A1A] selection:bg-[#222863] selection:text-white"
      id="top"
    >
      <Header />
      <main id="main">
        <ServicesPageContent />
      </main>
      <Footer />
    </div>
  )
}
