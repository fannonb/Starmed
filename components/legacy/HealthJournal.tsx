'use client'

import { ArrowRight, BookOpen, Calendar, Clock } from 'lucide-react'

const articles = [
  {
    title: 'The Science of Whole-Person Medicine: Why Unhurried Visits Yield Better Diagnoses',
    desc: 'Research shows when doctors spend 40+ minutes listening to a patient’s full medical and lifestyle context, misdiagnoses drop and chronic condition outcomes improve dramatically.',
    date: 'September 2026',
    readTime: '4 min read',
    tag: 'Clinical Philosophy',
    image: '/consultation-preview.jpg',
  },
  {
    title: 'Neurofeedback & Ketamine: Modern Evidence-Based Pathways for Mental Resilience',
    desc: 'How non-invasive quantitative EEG brain mapping and monitored ketamine therapy are helping patients break cycles of chronic anxiety and neural fatigue.',
    date: 'August 2026',
    readTime: '5 min read',
    tag: 'Brain Wellbeing',
    image: '/service-brain-mapping.jpg',
  },
  {
    title: 'Preventative Biomarkers: What Your Routine Annual Bloodwork Often Misses',
    desc: 'Beyond standard cholesterol and glucose: exploring advanced cardiovascular lipid fractions, inflammatory markers, and metabolic insulin resistance indicators.',
    date: 'July 2026',
    readTime: '6 min read',
    tag: 'Longevity & Labs',
    image: '/service-diagnostics.jpg',
  },
]

export default function HealthJournal() {
  return (
    <section className="py-20 lg:py-28 bg-[#F3ECE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="badge-kicker">
            <span>Evidence-Informed Education</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#231618] tracking-tight">
            Expert Insights & <em className="text-[#C87D75] font-normal italic">Health Resources</em>
          </h2>

          <p className="text-[#5C4B4E] text-base sm:text-lg leading-relaxed">
            Practical knowledge, clinical perspectives, and preventative strategies curated by our medical director to empower your daily wellness.
          </p>
        </div>

        {/* 3-Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((post) => (
            <article
              key={post.title}
              className="card-human flex flex-col justify-between overflow-hidden group bg-white border border-[#EADBCE]"
            >
              <div>
                {/* Article Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF7F2]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-md text-[#4E1B24] text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border border-[#EADBCE]">
                    {post.tag}
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] text-[#8E7B7E] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#231618] group-hover:text-[#4E1B24] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#5C4B4E] leading-relaxed line-clamp-3">
                    {post.desc}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <a
                  href="#contact"
                  className="btn-pill-rose text-xs font-semibold py-2 px-4 w-full sm:w-auto text-center"
                >
                  <span>Read Article</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
