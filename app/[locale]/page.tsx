import Header from '@/components/layout/Header'
import Hero from '@/components/home/Hero'
import CarePanels from '@/components/home/CarePanels'
import AccessOptions from '@/components/home/AccessOptions'
import PatientTestimonials from '@/components/home/PatientTestimonials'
import HomeFaq from '@/components/home/HomeFaq'
import VisitUs from '@/components/home/VisitUs'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-[#F4F7FB] text-[#1A1A1A] selection:bg-[#222863] selection:text-white"
      id="top"
    >
      <Header />

      <main id="main">
        <Hero />
        <CarePanels />
        <AccessOptions />
        <PatientTestimonials />
        <HomeFaq />
        <VisitUs />
      </main>

      <Footer />
    </div>
  )
}
