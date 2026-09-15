import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import KetamineInfusionTherapyContent from '@/components/services/KetamineInfusionTherapyContent'

export const metadata: Metadata = {
  title: 'Ketamine Infusion Therapy | StarMed Clinic San Antonio',
  description:
    'Carefully monitored ketamine infusion therapy in San Antonio for treatment-resistant depression, PTSD, anxiety, and chronic pain at StarMed Clinic.',
}

export default function KetamineInfusionTherapyPage() {
  return (
    <div
      className="min-h-screen bg-[#F4F7FB] text-[#1A1A1A] selection:bg-[#222863] selection:text-white"
      id="top"
    >
      <Header />
      <main id="main">
        <KetamineInfusionTherapyContent />
      </main>
      <Footer />
    </div>
  )
}
