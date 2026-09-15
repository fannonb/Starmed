'use client'

import { useState } from 'react'
import { Award, Clock, Heart, ShieldCheck, Sparkles, Star, Users, ArrowRight } from 'lucide-react'

const stats = [
  {
    id: 'experience',
    value: '15+',
    unit: 'Years',
    kicker: 'CLINICAL HERITAGE',
    label: 'Years Caring for San Antonio',
    description: 'Independent, physician-led practice serving local families since 2011.',
    icon: Award,
  },
  {
    id: 'satisfaction',
    value: '95%',
    unit: 'Satisfaction',
    kicker: 'PATIENT TRUST',
    label: 'Patient Satisfaction Rating',
    description: 'Consistently rated 5 stars for empathetic listening and unhurried visits.',
    icon: Star,
  },
  {
    id: 'time',
    value: '45+',
    unit: 'Minutes',
    kicker: 'UNHURRIED CARE',
    label: 'Average Visit Duration',
    description: '3x longer than the national 12-minute assembly-line doctor visit.',
    icon: Clock,
  },
  {
    id: 'access',
    value: '24/7',
    unit: 'Direct',
    kicker: 'CONTINUOUS CONNECTION',
    label: 'Direct Clinician Access',
    description: 'Direct phone, text, and virtual triage for concierge members anytime.',
    icon: Heart,
  },
]

export default function TrustStatsSection() {
  const [hoveredStat, setHoveredStat] = useState<string | null>(null)

  return (
    <section className="py-16 sm:py-20 bg-[#FAF7F2] border-y border-[#EADBCE]/80 relative overflow-hidden" id="trust">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#C87D75]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#4E1B24]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Narrative: Elevating "Health Matters, You Matter" */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-14">
          <div className="lg:col-span-6 space-y-3">
            <div className="badge-kicker">
              <Sparkles size={13} className="text-[#C87D75]" />
              <span>Evidence of Compassionate Care</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-medium text-[#231618] tracking-tight leading-[1.15]">
              Health Matters. <br />
              <em className="text-[#C87D75] font-normal italic">You Matter Most.</em>
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="text-sm sm:text-base text-[#5C4B4E] leading-relaxed font-normal">
              Healthcare involves much more than routine 10-minute checkups. It is about forming a lasting clinical partnership with providers who know your name, respect your story, and provide unhurried, evidence-based guidance.
            </p>
          </div>
        </div>

        {/* 4-Card Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon
            const isHovered = hoveredStat === stat.id

            return (
              <div
                key={stat.id}
                onMouseEnter={() => setHoveredStat(stat.id)}
                onMouseLeave={() => setHoveredStat(null)}
                className={`bg-white rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between group ${
                  isHovered
                    ? 'border-[#C87D75] shadow-xl -translate-y-1.5'
                    : 'border-[#EADBCE] shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Bar with Micro-Badge and Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#C87D75] bg-[#F9EBE8] px-2.5 py-1 rounded-full">
                      {stat.kicker}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#FAF7F2] text-[#4E1B24] flex items-center justify-center group-hover:bg-[#4E1B24] group-hover:text-white transition-colors">
                      <Icon size={16} />
                    </div>
                  </div>

                  {/* Main Sculptural Metric */}
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#4E1B24] leading-none">
                      {stat.value}
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className="font-serif text-base font-semibold text-[#231618] mb-2 leading-snug">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#5C4B4E] leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Bottom Micro-Indicator */}
                <div className="mt-5 pt-4 border-t border-[#EADBCE]/50 flex items-center justify-between text-[11px] text-[#8E7B7E]">
                  <span className="flex items-center gap-1 font-medium text-[#4E1B24]">
                    <ShieldCheck size={12} className="text-[#C87D75]" />
                    Verified Benchmark
                  </span>
                  <span className="font-semibold text-[#C87D75]">
                    San Antonio, TX
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Satisfaction Detail Bar (Redesigning the Progress Bar Card) */}
        <div className="mt-8 bg-white rounded-3xl p-6 sm:p-8 border border-[#EADBCE] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1 text-[#C87D75] mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} className="fill-[#C87D75]" />
              ))}
              <span className="text-xs font-bold text-[#231618] ml-1.5">4.9 out of 5.0</span>
            </div>
            <h4 className="font-serif font-bold text-base sm:text-lg text-[#231618]">
              San Antonio’s Highest Patient Retention in Direct Care
            </h4>
            <p className="text-xs text-[#5C4B4E]">
              95% of patients report significant health clarity and peace of mind within their first 90 days.
            </p>
          </div>

          {/* Elegant Progress Line & SLA Badge */}
          <div className="w-full md:w-80 space-y-2 shrink-0">
            <div className="flex items-center justify-between text-xs font-semibold text-[#231618]">
              <span>Patient Satisfaction Benchmark</span>
              <span className="text-[#4E1B24] font-bold">95%</span>
            </div>
            {/* Clean, warm gradient progress bar */}
            <div className="w-full h-2.5 rounded-full bg-[#F3ECE4] overflow-hidden p-0.5 border border-[#EADBCE]/60">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-[#4E1B24] via-[#732A38] to-[#C87D75] transition-all duration-1000"
                style={{ width: '95%' }}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] text-[#8E7B7E]">
              <span>National Average: 72%</span>
              <span className="text-[#C87D75] font-semibold">StarMed Standard: 95%</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
