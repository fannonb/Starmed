import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AboutPageContent from '@/components/pages/AboutPageContent'

export const metadata: Metadata = {
  title: 'About StarMed Clinic | Human-Centered Hybrid Care in San Antonio',
  description:
    'Learn about StarMed’s hybrid care model — concierge access and conventional visits, extended appointments, and whole-person primary care in San Antonio, Texas.',
}

export default function AboutPage() {
  return (
    <div
      className="min-h-screen bg-[#F4F7FB] text-[#1A1A1A] selection:bg-[#222863] selection:text-white"
      id="top"
    >
      <Header />
      <main id="main">
        <AboutPageContent />
      </main>
      <Footer />
    </div>
  )
}
