'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react'

const faqs = [
  {
    q: "What is the difference between concierge membership and conventional insurance visits?",
    a: "Concierge membership gives you direct 24/7 access to your personal doctor via phone, text, and email, alongside guaranteed same- or next-day appointments with 45–60 minute unhurried visits. Traditional insurance visits are billed through your commercial insurance provider during regular clinic hours for standard scheduled appointments.",
  },
  {
    q: "How much does concierge membership cost?",
    a: "We offer transparent, affordable flat monthly or quarterly membership tiers for individuals, couples, and families, with no surprise bills and no hidden fees. Many routine physicals, in-house rapid tests, and direct clinician communication are fully included.",
  },
  {
    q: "Do you accept my health insurance?",
    a: "Yes. For conventional clinic visits, StarMed accepts most major commercial health insurance plans, including Blue Cross Blue Shield, UnitedHealthcare, Aetna, Cigna, and Humana. Our front desk will verify your benefits before your appointment.",
  },
  {
    q: "Can I switch between plans or cancel my membership later?",
    a: "Absolutely. We believe healthcare should earn your trust every day. There are no mandatory multi-year contracts, and you can adjust your membership tier or transition between concierge and insurance care as your personal needs evolve.",
  },
  {
    q: "How quickly can I be seen if I have an urgent health concern?",
    a: "For concierge members, we offer same-day or next-day visits, plus direct 24/7 phone access for immediate clinical triage. For non-members, we reserve same-day urgent care slots daily across our San Antonio locations.",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2]" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="badge-kicker">
            <HelpCircle size={13} />
            <span>Answers to Your Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#231618] tracking-tight">
            Frequently Asked <em className="text-[#C87D75] font-normal italic">Questions</em>
          </h2>

          <p className="text-[#5C4B4E] text-base leading-relaxed max-w-xl mx-auto">
            Everything you need to know about choosing between concierge membership, insurance care, and booking your first visit.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={faq.q}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-white border-[#C87D75] shadow-md' 
                    : 'bg-white/80 border-[#EADBCE] hover:border-[#C87D75]/60'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-semibold text-base sm:text-lg text-[#231618]">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#4E1B24] text-white rotate-180' : 'bg-[#FAF7F2] text-[#4E1B24]'
                  }`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-sm text-[#5C4B4E] leading-relaxed border-t border-[#EADBCE]/40 mt-1">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Help footer */}
        <div className="text-center mt-10">
          <p className="text-xs text-[#8E7B7E]">
            Have a specific question not covered here?{' '}
            <a href="#contact" className="font-semibold text-[#4E1B24] hover:text-[#C87D75] underline underline-offset-2">
              Speak with our clinical team directly →
            </a>
          </p>
        </div>

      </div>
    </section>
  )
}
