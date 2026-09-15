'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2, ChevronRight, X } from 'lucide-react'

const solutions = [
  {
    id: 'primary',
    image: '/service-primary-care.png',
    category: 'PRIMARY & PREVENTIVE',
    title: 'Whole-person care designed around your life',
    desc: 'From routine checkups and annual physicals to cardiovascular screenings, personalized preventative plans tailored to your life.',
    doctors: ['Dr. Emily Carter, DO (Board Certified Family Medicine)', 'Dr. Marcus Vance, MD (Preventive Cardiology)'],
    details: [
      'Comprehensive annual executive physicals',
      'Cardiovascular & metabolic risk screening',
      'Personalized preventative action roadmap',
      'Unhurried, thorough 45-minute doctor conversations',
    ],
  },
  {
    id: 'urgent',
    image: '/service-urgent-care.png',
    category: 'URGENT & MINOR PROCEDURES',
    title: 'Sudden illness or injury? Get seen today',
    desc: 'Prompt attention for acute infections, minor lacerations, respiratory issues, and unexpected health concerns that cannot wait days.',
    doctors: ['Dr. Michael Chen, MD (Acute & Emergency Medicine)', 'Sarah Alvarez, PA-C (Urgent Procedures)'],
    details: [
      'Same- or next-day urgent appointments',
      'Minor suturing, wound care, and joint injections',
      'Rapid strep, flu, COVID, and UTI testing on site',
      'Direct coordination with your primary clinician',
    ],
  },
  {
    id: 'chronic',
    image: '/service-chronic-care.png',
    category: 'CHRONIC CARE MANAGEMENT',
    title: 'Living with a chronic condition? Dedicated guidance',
    desc: 'Empathetic ongoing support for hypertension, diabetes, thyroid disorders, and autoimmune challenges with regular lab reviews.',
    doctors: ['Dr. Emily Carter, DO (Internal & Osteopathic Medicine)', 'Elena Rostova, FNP (Endocrine Support)'],
    details: [
      'Continuous blood glucose & pressure monitoring',
      'Holistic nutrition and medication optimization',
      'Quarterly lab reviews to track progress',
      'Avoidance of unnecessary emergency room visits',
    ],
  },
  {
    id: 'mental',
    image: '/service-brain-care.png',
    category: 'MENTAL WELLNESS & KETAMINE',
    title: 'Break free from chronic anxiety & burnout',
    desc: 'Private psychotherapy and medically supervised ketamine infusion protocols in a quiet, discrete clinical setting for neural reset.',
    doctors: ['Dr. Sophia Laurent, MD (Integrative Psychiatry)', 'James Holloway, LPC (Clinical Psychotherapy)'],
    details: [
      'Confidential clinical psychotherapy sessions',
      'Medically monitored ketamine infusions',
      'Integration support for lasting neural reset',
      'Gentle, compassionate clinical environment',
    ],
  },
  {
    id: 'osteopathic',
    image: '/service-osteopathic.jpg',
    category: 'OSTEOPATHIC MEDICINE (OMT)',
    title: 'Pain slowing you down? Restore mobility',
    desc: 'Hands-on musculoskeletal manipulation by board-certified physicians to alleviate chronic back pain, joint stiffness, and migraines.',
    doctors: ['Dr. Emily Carter, DO (Neuromusculoskeletal Specialist)', 'Dr. David Martinez, DO (Osteopathic Fellow)'],
    details: [
      'Myofascial release & gentle joint mobilization',
      'Relief for chronic back, neck, and pelvic pain',
      'Posture correction and mobility restoration',
      'Drug-free natural pain alleviation',
    ],
  },
  {
    id: 'diagnostics',
    image: '/service-diagnostics.jpg',
    category: 'PRECISION DIAGNOSTICS & LABS',
    title: 'Early detection with advanced biomarker panels',
    desc: 'Advanced blood panels, hormonal profiles, and body composition analysis to detect early metabolic shifts before symptoms arise.',
    doctors: ['Dr. Arthur Hayes, MD, PhD (Clinical Pathology)', 'StarMed San Antonio In-House Lab Team'],
    details: [
      'Advanced lipid, inflammatory & hormone panels',
      'Detailed body composition & visceral fat analysis',
      'Quick turnaround with in-house laboratory draw',
      'Detailed clinician review with actionable steps',
    ],
  },
  {
    id: 'brain-mapping',
    image: '/service-brain-mapping.jpg',
    category: 'NEUROFEEDBACK & BRAIN WELLNESS',
    title: 'Optimize cognitive focus & restorative sleep',
    desc: 'Quantitative EEG brain mapping and targeted neurofeedback training to improve mental clarity, sleep cycles, and focus.',
    doctors: ['Dr. Sophia Laurent, MD (Neuro-Cognitive Specialist)', 'Rachel Kim, BCN (Certified Neurotherapist)'],
    details: [
      '19-channel quantitative EEG brain mapping',
      'Non-invasive cognitive pattern training',
      'Improvement for ADHD, stress, and sleep cycles',
      'Objective visual reports of brain rhythm shifts',
    ],
  },
  {
    id: 'pediatric',
    image: '/service-pediatric.jpg',
    category: 'FAMILY & PEDIATRIC HEALTH',
    title: 'Generational medicine for the whole family',
    desc: 'Caring for your whole family: newborn checkups, adolescent wellness, adult prevention, and senior mobility and medication reviews.',
    doctors: ['Dr. Olivia Bennett, MD (Board Certified Pediatrics)', 'Dr. Emily Carter, DO (Family Medicine)'],
    details: [
      'Child wellness checks & developmental milestones',
      'Senior fall prevention and mobility reviews',
      'Careful medication reconciliation & simplification',
      'Caring for the whole family under one trusted roof',
    ],
  },
]

export default function SolutionsShowcase() {
  const [activeModal, setActiveModal] = useState<typeof solutions[0] | null>(null)

  return (
    <section className="py-20 lg:py-28 bg-[#E4F2FA] relative overflow-hidden" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Matching Design Inspiration Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 lg:mb-16">
          <div>
            <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#1B4D7E] mb-3">
              Specialized Clinical Offerings
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-serif font-normal text-[#102A43] tracking-tight leading-[1.12]">
              Explore <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-[#1B4D7E]">our Specialties</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#334E68] leading-relaxed font-normal">
            Find the right team for your personal health goals. Book an in-person appointment at our San Antonio clinics or begin with a virtual consult.
          </p>
        </div>

        {/* 8-Card Showcase Grid (Responsive Grid - NOT A CAROUSEL) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-7">
          {solutions.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[2.25rem] p-6 sm:p-7 shadow-[0_4px_24px_rgba(27,77,126,0.06)] hover:shadow-[0_16px_36px_rgba(27,77,126,0.12)] border border-[#CDE5F7] hover:border-[#1B4D7E]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Image Container — NO PILLS OVERLAY */}
                <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-[#F4F9FC] mb-5 border border-[#CDE5F7]/70">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Category Kicker */}
                <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#1B4D7E] mb-2">
                  {item.category}
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-xl sm:text-[1.3rem] font-semibold text-[#102A43] leading-snug mb-3 group-hover:text-[#1B4D7E] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-[#486581] leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Single Clean Pill Button — NO BOOK LINK */}
              <div className="pt-2">
                <button
                  onClick={() => setActiveModal(item)}
                  className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-2.5 bg-[#1B3B52] hover:bg-[#102433] text-white px-6 py-3 rounded-full text-xs sm:text-[13px] font-semibold tracking-wide shadow-sm group-hover:shadow transition-all duration-200"
                >
                  <span>View Doctors</span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Details Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-[#102A43] rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#CDE5F7] relative animate-in zoom-in-95 duration-200">
            
            {/* Modal Image Banner */}
            <div className="relative h-48 sm:h-56 w-full bg-[#D8EDFA]">
              <img 
                src={activeModal.image} 
                alt={activeModal.title} 
                className="w-full h-full object-cover object-center" 
              />
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#102A43] flex items-center justify-center shadow-md transition-colors"
                aria-label="Close details"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#1B4D7E]">
                {activeModal.category}
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#102A43]">
                {activeModal.title}
              </h3>

              <p className="text-sm text-[#486581] leading-relaxed">
                {activeModal.desc}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-3">
                  What&apos;s Included In This Specialty:
                </h4>
                <div className="space-y-2.5">
                  {activeModal.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-[#243B53]">
                      <CheckCircle2 size={15} className="text-[#1B4D7E] shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {activeModal.doctors && activeModal.doctors.length > 0 && (
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2.5">
                    Attending Clinical Team:
                  </h4>
                  <div className="space-y-1.5">
                    {activeModal.doctors.map((doc, i) => (
                      <div key={i} className="text-xs text-[#1B4D7E] font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1B4D7E]" />
                        <span>{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-5 border-t border-[#E1F2FC] flex items-center justify-between gap-4">
                <button
                  onClick={() => setActiveModal(null)}
                  className="text-xs font-semibold text-[#627D98] hover:text-[#102A43]"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setActiveModal(null)}
                  className="inline-flex items-center gap-2 bg-[#1B3B52] hover:bg-[#102433] text-white px-6 py-3 rounded-full text-xs font-semibold shadow-md transition-all"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  )
}
