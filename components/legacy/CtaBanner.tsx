'use client'

import { Phone, ArrowRight, Sparkles, Heart } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#351118] text-white grid grid-cols-1 lg:grid-cols-12 border border-white/15">
          
          {/* Left Column: Photo of Renewed Patient Vitality */}
          <div className="lg:col-span-5 relative aspect-square sm:aspect-[4/3] lg:aspect-auto min-h-[320px]">
            <img 
              src="/patient-vitality.jpg" 
              alt="Healthy patient feeling renewed, energized, and healed after care at StarMed Clinic" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#351118]/80 hidden lg:block" />
          </div>

          {/* Right Column: Emotive Banner Content */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E8A598]">
              <Sparkles size={14} />
              <span>Begin Your New Healthcare Chapter</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#FAF7F2] tracking-tight leading-tight">
              Your Journey To Optimal Health <br className="hidden sm:inline" />
              <em className="text-[#E8A598] font-normal italic">Begins Here.</em>
            </h2>

            <p className="text-sm sm:text-base text-[#F3ECE4]/80 leading-relaxed max-w-xl font-normal">
              Whether you are managing a persistent condition, seeking a proactive primary care physician, or ready to experience 24/7 concierge medicine, our clinicians are here to listen.
            </p>

            {/* Actions & Phone Line */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-6">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 bg-[#FAF7F2] text-[#4E1B24] hover:bg-white hover:text-[#351118] px-8 py-4 rounded-full font-semibold text-sm sm:text-base shadow-lg transition-all hover:-translate-y-0.5"
              >
                <span>Book an Appointment</span>
                <ArrowRight size={16} />
              </a>

              <a 
                href="tel:7262423011" 
                className="flex items-center gap-3 text-white hover:text-[#E8A598] transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <Phone size={20} className="text-[#E8A598]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#E8A598]">Direct Clinic Line</div>
                  <div className="text-lg font-serif font-bold tracking-wide">(726) 242-3011</div>
                </div>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
