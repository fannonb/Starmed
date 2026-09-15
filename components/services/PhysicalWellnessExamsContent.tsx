import Image from 'next/image'
import Link from 'next/link'
import LocalizedServiceHero from '@/components/services/LocalizedServiceHero'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'whats-included', label: "What's included" },
  { id: 'for-families', label: 'For families' },
  { id: 'get-care', label: 'Get care' },
] as const

const offerings = [
  {
    title: 'In-depth health checks',
    desc: 'We review your history, measure key indicators, and assess overall wellbeing — then tailor care to your goals.',
  },
  {
    title: 'Exams for women',
    desc: 'Age-appropriate women’s health checks — including gynecological and breast exams — with guidance as needs change over time.',
  },
  {
    title: 'Checkups for kids',
    desc: 'School, sports, and camp physicals that confirm readiness, spot risks early, and keep young patients safe to participate.',
  },
  {
    title: 'Care that fits you',
    desc: 'From annual physicals to focused wellness visits — exams shaped around your stage of life, not a one-size checklist.',
  },
]

const reasons = [
  {
    title: 'Find issues early',
    desc: 'Regular exams help catch problems before they become harder — and costlier — to treat.',
  },
  {
    title: 'Match care to goals',
    desc: 'We connect findings to your real priorities: energy, school, work, sports, or long-term prevention.',
  },
  {
    title: 'Track change over time',
    desc: 'Baseline vitals and history give us a clear picture of how your health is trending year to year.',
  },
  {
    title: 'Stay activity-ready',
    desc: 'Clearance for school, camp, and sports so kids and teens can take part safely and confidently.',
  },
]

export default function PhysicalWellnessExamsContent() {
  return (
    <>
            <LocalizedServiceHero
        serviceId="wellness-exams"
        image="/service-wellness.jpg"
        imageAlt="Physical and wellness exam at StarMed Clinic"
        imagePosition="center 28%"
      />

      <nav
        aria-label="On this page"
        className="sticky top-[60px] sm:top-[76px] lg:top-[88px] z-30 border-b border-[#E3E8F0] bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/90"
      >
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2.5 sm:px-6 lg:px-8">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="shrink-0 rounded-md px-3 py-2 text-sm font-medium text-[#5A6270] transition-colors hover:bg-[#F4F7FB] hover:text-[#222863]"
            >
              {section.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Overview */}
      <section id="overview" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              Overview
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              Checkups that protect{' '}
              <span className="font-normal text-[#3BA3E8]">long-term health.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
              Regular physical and wellness exams play a quiet but critical role — they catch issues
              early, update your plan, and keep care matched to where you are in life.
            </p>
          </div>

          <ol className="mt-12 grid list-none grid-cols-1 gap-px bg-[#D5DEEA] p-0 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <li key={reason.title} className="flex flex-col bg-white px-6 py-8 sm:px-8 sm:py-9">
                <span className="font-serif text-3xl font-medium tabular-nums leading-none text-[#3BA3E8]">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-serif text-xl font-medium tracking-tight text-[#222863]">
                  {reason.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-[#5A6270]">{reason.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What's included — simple editorial layout */}
      <section id="whats-included" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4 lg:sticky lg:top-[136px] lg:self-start">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                What&apos;s included
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                Here&apos;s what{' '}
                <span className="font-normal text-[#3BA3E8]">you get.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
                Thorough checks for adults, women, and kids — with room for questions and a plan
                you understand.
              </p>
            </div>

            <ul className="m-0 flex list-none flex-col gap-4 p-0 lg:col-span-8">
              {offerings.map((item, index) => (
                <li
                  key={item.title}
                  className="flex gap-5 rounded-xl bg-[#F4F7FB] px-5 py-5 sm:gap-6 sm:px-6 sm:py-6"
                >
                  <span
                    aria-hidden="true"
                    className="font-serif text-2xl font-medium tabular-nums leading-none text-[#3BA3E8] sm:text-3xl"
                  >
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-serif text-xl font-medium tracking-tight text-[#222863] sm:text-[1.35rem]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5A6270] sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* For families / school physicals */}
      <section id="for-families" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:col-span-6 lg:min-h-[26rem] lg:order-2">
            <Image
              src="/service-pediatric.jpg"
              alt="School and sports physical exam for a child at StarMed"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="lg:col-span-6 lg:order-1">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              For families
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              School, sports, and camp{' '}
              <span className="font-normal text-[#3BA3E8]">physicals.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#5A6270]">
              Monitoring growth helps spot physical and developmental concerns early. Camps and
              sports teams often require clearance — and a thorough exam keeps kids ready for
              swimming, hiking, cycling, and everything in between.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
              When something needs follow-up, we explain it clearly so parents, coaches, and camp
              leaders can support your child safely.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-[#222863] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52]"
            >
              Schedule a physical
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Get care */}
      <section id="get-care" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              Get care
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              Plan your exam{' '}
              <span className="font-normal text-[#3BA3E8]">today.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
              Focus on your health with an annual physical or wellness visit at StarMed. Our team is
              here to support your journey — with the care you need for a healthier, more balanced
              life.
            </p>
          </div>

          <div className="mt-10 grid gap-0 overflow-hidden border border-[#D5DEEA] lg:grid-cols-2">
            <div className="border-b border-[#D5DEEA] bg-[#F4F7FB] px-6 py-8 sm:px-8 lg:border-b-0 lg:border-r">
              <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#3BA3E8]">
                Concierge membership
              </p>
              <h3 className="mt-3 font-serif text-xl font-medium tracking-tight text-[#222863]">
                Unhurried annual visits
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5A6270]">
                Longer appointments and easier access — so your physical covers what matters, not
                just what fits in a short slot.
              </p>
              <Link
                href="/membership"
                className="mt-5 inline-flex text-sm font-semibold text-[#222863] transition-colors hover:text-[#3BA3E8]"
              >
                Explore membership →
              </Link>
            </div>
            <div className="bg-white px-6 py-8 sm:px-8">
              <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#5A6270]">
                Conventional visit
              </p>
              <h3 className="mt-3 font-serif text-xl font-medium tracking-tight text-[#222863]">
                Book a wellness exam
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5A6270]">
                Schedule a traditional physical or clearance exam. No membership required — same
                clinic, same thorough standard.
              </p>
              <Link
                href="/#contact"
                className="mt-5 inline-flex text-sm font-semibold text-[#222863] transition-colors hover:text-[#3BA3E8]"
              >
                Contact the clinic →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section
        className="py-14 sm:py-16 lg:py-20"
        style={{
          background: 'linear-gradient(120deg, #1a1f4a 0%, #222863 48%, #2a5f8f 100%)',
        }}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:px-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl lg:leading-[1.12]">
              Ready for your next{' '}
              <span className="font-normal text-[#7EC8F0]">physical exam?</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Schedule your appointment and start a clearer wellness plan — for you or your family.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-[#222863] transition-colors hover:bg-[#EAF4FC]"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  )
}
