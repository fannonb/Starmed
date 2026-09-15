'use client'

import { useState } from 'react'
import { ArrowRight, Check, Heart, Brain, Building2, Users, Sparkles, ShieldCheck } from 'lucide-react'

const pathways = [
  {
    id: 'family',
    number: '01',
    badge: 'Personal & Family Medicine',
    title: 'You & Your Loved Ones',
    tagline: 'Everyday primary care for the people who matter most.',
    desc: 'From pediatric milestones and annual wellness exams to acute sick visits and senior vitality, experience medicine with a doctor who actually has time to listen.',
    image: '/service-pediatric.jpg',
    icon: Users,
    highlights: [
      'Same- or next-day appointments in San Antonio',
      '45–60 minute unhurried doctor conversations',
      'Pediatric, adult, and geriatric care under one roof',
      'Accepting major insurance or concierge membership',
    ],
    ctaText: 'Explore Family & Primary Care',
    href: '#solutions',
    theme: {
      tagBg: 'bg-[#F9EBE8]',
      tagText: 'text-[#4E1B24]',
      badgeBorder: 'border-[#EADBCE]',
    },
  },
  {
    id: 'brain',
    number: '02',
    badge: 'Specialized Brain & Mind',
    title: 'Mental Health & Brain Wellbeing',
    tagline: 'Private, evidence-informed care for real recovery.',
    desc: 'Step into a serene, compassionate suite dedicated to whole-mind wellness. Combining psychotherapy, quantitative EEG brain mapping, neurofeedback, and ketamine therapy.',
    image: '/service-brain-mapping.jpg',
    icon: Brain,
    highlights: [
      'Strictly confidential, tranquil clinical setting',
      'Non-invasive 19-channel QEEG brain mapping',
      'Medically monitored ketamine infusion protocols',
      'Empathetic psychotherapy that addresses root causes',
    ],
    ctaText: 'Explore Brain Wellbeing Care',
    href: '#solutions',
    theme: {
      tagBg: 'bg-[#F9EBE8]',
      tagText: 'text-[#4E1B24]',
      badgeBorder: 'border-[#EADBCE]',
    },
  },
  {
    id: 'business',
    number: '03',
    badge: 'Direct Primary Care for Teams',
    title: 'Employers & Organizations',
    tagline: 'Direct, insurance-free doctor access for your team.',
    desc: 'Transform employee wellbeing with direct primary care. Give your workforce unlimited access to trusted clinicians, cut out insurance middleman friction, and lower claims.',
    image: '/consultation-preview.jpg',
    icon: Building2,
    highlights: [
      'Zero copays & zero deductibles for employees',
      '24/7 direct doctor line, text & telehealth',
      'Reduces avoidable ER visits and employee absenteeism',
      'Simple, transparent monthly pricing per employee',
    ],
    ctaText: 'Explore Workplace Health Plans',
    href: '#contact',
    theme: {
      tagBg: 'bg-[#F9EBE8]',
      tagText: 'text-[#4E1B24]',
      badgeBorder: 'border-[#EADBCE]',
    },
  },
]

export default function PathSelection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] relative overflow-hidden" id="pathways">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#C87D75]/10 via-[#FAF7F2] to-[#4E1B24]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="badge-kicker">
            <Sparkles size={13} />
            <span>Choose Your Care Pathway</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#231618] tracking-tight leading-[1.15]">
            How Can We Care For <br className="hidden sm:inline" />
            <em className="text-[#C87D75] font-normal italic">Your Life Today?</em>
          </h2>

          <p className="text-[#5C4B4E] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Healthcare is deeply personal. Rather than navigating a confusing menu, start with the pathway created specifically for what you and your loved ones need right now.
          </p>
        </div>

        {/* 3-Card Pathway Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pathways.map((path) => {
            const Icon = path.icon
            const isHovered = hoveredCard === path.id

            return (
              <div
                key={path.id}
                onMouseEnter={() => setHoveredCard(path.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between group ${
                  isHovered 
                    ? 'border-[#C87D75] shadow-2xl -translate-y-2' 
                    : 'border-[#EADBCE] shadow-md hover:shadow-xl'
                }`}
              >
                <div>
                  {/* Card Visual Header with Photo */}
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-[#351118]">
                    <img 
                      src={path.image} 
                      alt={path.title} 
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 opacity-90"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#231618]/90 via-[#231618]/30 to-transparent" />

                    {/* Pathway Number & Badge */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="bg-white/95 backdrop-blur-md text-[#4E1B24] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm border border-white/40">
                        Pathway {path.number}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                        <Icon size={16} />
                      </div>
                    </div>

                    {/* Subtitle on image */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#E8A598] block mb-1">
                        {path.badge}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold leading-tight text-white">
                        {path.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body Content */}
                  <div className="p-6 sm:p-7 space-y-5">
                    <p className="text-xs sm:text-sm text-[#5C4B4E] leading-relaxed">
                      {path.desc}
                    </p>

                    {/* Highlighted Benefits */}
                    <div className="space-y-2.5 pt-2 border-t border-[#EADBCE]/60">
                      {path.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[#231618]">
                          <div className="w-4 h-4 rounded-full bg-[#F9EBE8] text-[#C87D75] flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={11} strokeWidth={3} />
                          </div>
                          <span className="leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA Action */}
                <div className="p-6 sm:p-7 pt-0">
                  <a
                    href={path.href}
                    className={`w-full py-3.5 px-5 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-between transition-all duration-200 ${
                      isHovered
                        ? 'bg-[#4E1B24] text-white shadow-lg'
                        : 'bg-[#FAF7F2] text-[#4E1B24] border border-[#EADBCE] hover:bg-[#F3ECE4]'
                    }`}
                  >
                    <span>{path.ctaText}</span>
                    <ArrowRight size={15} className={`transform transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
                  </a>
                </div>

              </div>
            )
          })}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-14 p-6 sm:p-7 rounded-3xl bg-[#F3ECE4] border border-[#EADBCE] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-white text-[#4E1B24] flex items-center justify-center shadow-sm shrink-0">
              <ShieldCheck size={20} className="text-[#C87D75]" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-[#231618]">
                Not sure which pathway is the right fit?
              </h4>
              <p className="text-xs text-[#5C4B4E] mt-0.5">
                Our San Antonio clinical team can walk you through care options in a quick 2-minute conversation.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a 
              href="tel:7262423011" 
              className="btn-secondary text-xs py-2.5 px-5"
            >
              Call (726) 242-3011
            </a>
            <a 
              href="#contact" 
              className="btn-primary text-xs py-2.5 px-5"
            >
              Ask Our Team
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
