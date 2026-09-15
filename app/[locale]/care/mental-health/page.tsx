import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CareMentalHealthContent from '@/components/care/CareMentalHealthContent'

export const metadata: Metadata = {
  title: 'Mental Health & Brain Wellbeing | StarMed Clinic San Antonio',
  description:
    'Mental wellness therapy, ketamine infusion therapy, and specialty support for anxiety, mood, and trauma in a discreet San Antonio clinic setting.',
}

export default function CareMentalHealthPage() {
  return (
    <div
      className="min-h-screen bg-[#F4F7FB] text-[#1A1A1A] selection:bg-[#222863] selection:text-white"
      id="top"
    >
      <Header />
      <main id="main">
        <CareMentalHealthContent />
      </main>
      <Footer />
    </div>
  )
}
