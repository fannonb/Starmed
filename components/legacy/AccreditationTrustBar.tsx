'use client'

import { ShieldCheck, Award, Building2, CheckCircle2 } from 'lucide-react'

const accreditations = [
  {
    institution: 'UT Health San Antonio',
    role: 'Clinical Affiliation & Training',
    acronym: 'UT HEALTH',
  },
  {
    institution: 'Baylor College of Medicine',
    role: 'Medical Residency & Fellowship',
    acronym: 'BAYLOR MED',
  },
  {
    institution: 'American College of Osteopathic Physicians',
    role: 'Board-Certified Specialists',
    acronym: 'ACOFP',
  },
  {
    institution: 'Texas Medical Association',
    role: 'Active Standing Member',
    acronym: 'TMA',
  },
  {
    institution: 'American Board of Family Medicine',
    role: 'Certified Quality Care',
    acronym: 'ABFM',
  },
]

export default function AccreditationTrustBar() {
  return (
    <section className="py-12 bg-white border-y border-[#EADBCE]" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Label */}
          <div className="text-center lg:text-left shrink-0">
            <h3 className="font-serif text-lg font-semibold text-[#231618]">
              Academic Training & <br className="hidden lg:inline" />
              <em className="text-[#C87D75] font-normal italic">Clinical Excellence</em>
            </h3>
            <p className="text-xs text-[#8E7B7E] mt-1">
              Trained at America&apos;s leading medical institutions
            </p>
          </div>

          {/* Institution Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 w-full lg:w-auto">
            {accreditations.map((item) => (
              <div 
                key={item.institution}
                className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#EADBCE] text-center hover:border-[#C87D75] transition-colors"
              >
                <span className="font-serif font-bold text-xs tracking-wider text-[#4E1B24] uppercase">
                  {item.acronym}
                </span>
                <span className="text-[10px] text-[#5C4B4E] font-medium mt-1 line-clamp-1">
                  {item.institution}
                </span>
                <span className="text-[9px] text-[#8E7B7E] mt-0.5">
                  {item.role}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
