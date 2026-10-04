import Header from '@/components/layout/Header'
import Hero from '@/components/home/Hero'
import CareFinder from '@/components/home/CareFinder'
import ChooseYourPath from '@/components/home/ChooseYourPath'
import CareThatFits from '@/components/home/CareThatFits'
import ServicesByNeed from '@/components/home/ServicesByNeed'
import StandardOfCare from '@/components/home/StandardOfCare'
import PatientTestimonials from '@/components/home/PatientTestimonials'
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
        <CareFinder />
        <ChooseYourPath />
        <ServicesByNeed />
        <CareThatFits />
        <StandardOfCare />
        <PatientTestimonials />
        <VisitUs />
      </main>

      <Footer />
    </div>
  )
}
