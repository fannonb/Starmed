'use client'

import { useState } from 'react'
import { Check, ArrowRight, Sparkles, Shield, Clock, Phone, Heart, Users } from 'lucide-react'

export default function CareComparison() {
  const [selectedPlan, setSelectedPlan] = useState<'concierge' | 'insurance'>('concierge')

  return (
    <section className="py-20 lg:py-28 bg-[#F3ECE4]" id="comparison">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="badge-kicker">
            <span>Transparent Healthcare Choices</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#231618] tracking-tight">
            Two Ways To Feel <em className="text-[#C87D75] font-normal italic">Cared For</em>
          </h2>

          <p className="text-[#5C4B4E] text-base sm:text-lg leading-relaxed">
            Whether you desire an ongoing 24/7 relationship with your personal doctor or a familiar clinic to visit with your insurance, StarMed meets you where you are.
          </p>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Card 1: Concierge Membership */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border-2 border-[#C87D75] relative flex flex-col justify-between group">
            {/* Best Value / Most Popular Ribbon */}
            <div className="absolute -top-3.5 right-8 bg-[#C87D75] text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1 rounded-full shadow-md">
              Most Human & Proactive
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C87D75]">
                  Direct Primary Care (DPC)
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#4E1B24] mt-1">
                  Concierge Membership
                </h3>
                <p className="text-sm text-[#5C4B4E] mt-2 leading-relaxed">
                  For individuals, families, and executives who want maximum access and an unhurried doctor who knows their story.
                </p>
              </div>

              {/* Highlights Matrix */}
              <div className="space-y-4 pt-4 border-t border-[#EADBCE]">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F9EBE8] text-[#C87D75] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} strokeWidth={2.5} />
                  </div>
                  <div>
                    <strong className="text-xs font-semibold text-[#231618]">24/7 Direct Clinician Access:</strong>
                    <p className="text-xs text-[#5C4B4E]">Direct phone, text, and email with your physician anytime concerns arise.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F9EBE8] text-[#C87D75] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} strokeWidth={2.5} />
                  </div>
                  <div>
                    <strong className="text-xs font-semibold text-[#231618]">Guaranteed Same/Next-Day Visits:</strong>
                    <p className="text-xs text-[#5C4B4E]">Skip waiting rooms. Walk in or schedule immediately with zero delays.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F9EBE8] text-[#C87D75] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} strokeWidth={2.5} />
                  </div>
                  <div>
                    <strong className="text-xs font-semibold text-[#231618]">45–60 Minute Unrushed Appointments:</strong>
                    <p className="text-xs text-[#5C4B4E]">Ample time to explore complex health questions and preventative strategy.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F9EBE8] text-[#C87D75] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} strokeWidth={2.5} />
                  </div>
                  <div>
                    <strong className="text-xs font-semibold text-[#231618]">Included Screenings & Labs:</strong>
                    <p className="text-xs text-[#5C4B4E]">Flat monthly or quarterly fee with wholesale generic meds and lab savings.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[#EADBCE]">
              <a 
                href="#contact" 
                className="btn-primary w-full text-center"
              >
                <span>Inquire About Membership</span>
                <ArrowRight size={15} />
              </a>
              <p className="text-[11px] text-center text-[#8E7B7E] mt-2.5">
                No long-term contracts • Transparent flat pricing
              </p>
            </div>
          </div>

          {/* Card 2: Traditional Insurance Visits */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-[#EADBCE] relative flex flex-col justify-between group">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C4B4E]">
                  Conventional Healthcare
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#231618] mt-1">
                  Insurance-Based Visit
                </h3>
                <p className="text-sm text-[#5C4B4E] mt-2 leading-relaxed">
                  For patients who prefer to utilize their commercial health insurance coverage for standard clinic visits.
                </p>
              </div>

              {/* Highlights Matrix */}
              <div className="space-y-4 pt-4 border-t border-[#EADBCE]">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F3ECE4] text-[#5C4B4E] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} strokeWidth={2.5} />
                  </div>
                  <div>
                    <strong className="text-xs font-semibold text-[#231618]">Most Major Plans Accepted:</strong>
                    <p className="text-xs text-[#5C4B4E]">We accept Blue Cross Blue Shield, UnitedHealthcare, Aetna, Cigna, and more.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F3ECE4] text-[#5C4B4E] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} strokeWidth={2.5} />
                  </div>
                  <div>
                    <strong className="text-xs font-semibold text-[#231618]">Standard Office Hours Access:</strong>
                    <p className="text-xs text-[#5C4B4E]">Appointments scheduled during regular clinic hours Monday through Friday.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F3ECE4] text-[#5C4B4E] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} strokeWidth={2.5} />
                  </div>
                  <div>
                    <strong className="text-xs font-semibold text-[#231618]">Thoughtful Clinical Staff:</strong>
                    <p className="text-xs text-[#5C4B4E]">Even for insurance visits, our staff treats you with genuine courtesy and warmth.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F3ECE4] text-[#5C4B4E] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} strokeWidth={2.5} />
                  </div>
                  <div>
                    <strong className="text-xs font-semibold text-[#231618]">Copay & Deductible Billing:</strong>
                    <p className="text-xs text-[#5C4B4E]">Direct billing to your insurer with verified in-network co-pay arrangements.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[#EADBCE]">
              <a 
                href="#contact" 
                className="btn-secondary w-full text-center"
              >
                <span>Book an Insurance Visit</span>
                <ArrowRight size={15} />
              </a>
              <p className="text-[11px] text-center text-[#8E7B7E] mt-2.5">
                Our front desk will verify your insurance eligibility prior to your arrival
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
