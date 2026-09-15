import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CareEmployersContent from '@/components/care/CareEmployersContent'

export const metadata: Metadata = {
  title: 'Direct Primary Care for Employers | StarMed Clinic San Antonio',
  description:
    'Employer Direct Primary Care in San Antonio — predictable access for teams, fewer work interruptions, and less insurance friction for everyday medicine.',
}

export default function CareEmployersPage() {
  return (
    <div
      className="min-h-screen bg-[#F4F7FB] text-[#1A1A1A] selection:bg-[#222863] selection:text-white"
      id="top"
    >
      <Header />
      <main id="main">
        <CareEmployersContent />
      </main>
      <Footer />
    </div>
  )
}
