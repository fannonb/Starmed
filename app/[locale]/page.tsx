import Header from '@/components/layout/Header'
import Hero from '@/components/home/Hero'
import HealthMatters from '@/components/home/HealthMatters'
import ChooseYourPath from '@/components/home/ChooseYourPath'
import ComprehensiveCareGrid from '@/components/home/ComprehensiveCareGrid'
import CareThatFits from '@/components/home/CareThatFits'
import PatientTestimonials from '@/components/home/PatientTestimonials'
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
        <HealthMatters />
        <ChooseYourPath />
        <ComprehensiveCareGrid />
        <CareThatFits />
        <PatientTestimonials />
      </main>

      <Footer />
    </div>
  )
}
