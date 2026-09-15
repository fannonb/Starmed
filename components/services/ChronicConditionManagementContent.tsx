import Image from 'next/image'
import Link from 'next/link'
import LocalizedServiceHero from '@/components/services/LocalizedServiceHero'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'conditions', label: 'Conditions' },
  { id: 'what-to-expect', label: 'What to expect' },
  { id: 'get-care', label: 'Get care' },
] as const

const conditions = [
  {
    title: 'Diabetes education',
    desc: 'Clear guidance so you understand your condition and what to do day to day.',
    points: [
      'Understanding diabetes',
      'Blood glucose monitoring',
      'Healthy eating and meal planning',
      'Exercise guidance',
      'Medication management',
      'Emotional wellbeing',
    ],
  },
  {
    title: 'High blood pressure',
    desc: 'Support to monitor readings, stick with treatment, and lower long-term risk.',
    points: [
      'Understanding high blood pressure',
      'Monitoring and interpreting readings',
      'Healthy lifestyle adjustments',
      'Medication adherence',
      'Stress management',
    ],
  },
  {
    title: 'Cholesterol education',
    desc: 'Practical steps to manage cholesterol and protect your heart health over time.',
    points: [
      'Understanding cholesterol and risks',
      'Dietary guidance',
      'Exercise recommendations',
      'Medication understanding',
      'Preventive lifestyle choices',
    ],
  },
]

const expectations = [
  {
    title: 'Ongoing tracking',
    desc: 'We monitor your chronic conditions over time — so small changes get attention before they become bigger problems.',
  },
  {
    title: 'Clear problem-solving',
    desc: 'When something is off, we work through it with you and adjust the plan — not just refill and send you out.',
  },
  {
    title: 'Medication updates',
    desc: 'Regular review of what you take, why you take it, and whether it still fits your health and lifestyle.',
  },
  {
    title: 'Practical education',
    desc: 'Simple wellness guidance and condition education so you can make informed decisions with confidence.',
  },
]

export default function ChronicConditionManagementContent() {
  return (
    <>
            <LocalizedServiceHero
        serviceId="chronic"
        image="/service-chronic.jpg"
        imageAlt="Chronic condition management consultation at StarMed Clinic"
        imagePosition="center 30%"
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

      <section id="overview" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-14">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                Overview
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                Care that stays with you{' '}
                <span className="font-normal text-[#3BA3E8]">over time.</span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-[#5A6270] lg:col-span-5 lg:justify-self-end lg:text-right">
              Managing a chronic illness is hard enough. We offer steady support — personalized
              plans, reliable guidance, and a team focused on your wellness.
            </p>
          </div>

          <div className="mt-12 grid gap-0 overflow-hidden border border-[#D5DEEA] bg-white lg:grid-cols-3">
            {[
              {
                title: 'Diabetes',
                desc: 'Education, monitoring, nutrition, activity, and medication support.',
              },
              {
                title: 'Blood pressure',
                desc: 'Reading tracking, lifestyle changes, and treatment adherence.',
              },
              {
                title: 'Cholesterol',
                desc: 'Risk education, diet, exercise, and preventive choices.',
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`px-6 py-8 sm:px-8 ${
                  index < 2 ? 'border-b border-[#D5DEEA] lg:border-b-0 lg:border-r' : ''
                }`}
              >
                <h3 className="font-serif text-xl font-medium tracking-tight text-[#222863]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5A6270]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="conditions" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4 lg:sticky lg:top-[136px] lg:self-start">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                Conditions
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                What we focus on{' '}
                <span className="font-normal text-[#3BA3E8]">treating.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
                Structured education and support for the chronic conditions we see most — with room
                for other long-term health needs too.
              </p>
            </div>

            <ul className="m-0 flex list-none flex-col gap-4 p-0 lg:col-span-8">
              {conditions.map((condition, index) => (
                <li
                  key={condition.title}
                  className="rounded-xl bg-[#F4F7FB] px-5 py-6 sm:px-6 sm:py-7"
                >
                  <div className="flex gap-5 sm:gap-6">
                    <span
                      aria-hidden="true"
                      className="font-serif text-2xl font-medium tabular-nums leading-none text-[#3BA3E8] sm:text-3xl"
                    >
                      {index + 1}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-serif text-xl font-medium tracking-tight text-[#222863] sm:text-[1.35rem]">
                        {condition.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#5A6270] sm:text-base">
                        {condition.desc}
                      </p>
                      <ul className="mt-4 grid list-none grid-cols-1 gap-2 p-0 sm:grid-cols-2">
                        {condition.points.map((point) => (
                          <li key={point} className="flex gap-2.5 text-sm text-[#5A6270]">
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3BA3E8]"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="what-to-expect" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              What to expect
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              You stay in charge of{' '}
              <span className="font-normal text-[#3BA3E8]">your health.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
              Our team helps you manage chronic issues, solve problems as they come up, and make
              informed decisions — with education and support that fit real life.
            </p>
          </div>

          <ol className="mt-12 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2">
            {expectations.map((item, index) => (
              <li
                key={item.title}
                className="flex gap-5 rounded-xl bg-white px-5 py-6 sm:gap-6 sm:px-6 sm:py-7"
              >
                <span
                  aria-hidden="true"
                  className="font-serif text-2xl font-medium tabular-nums leading-none text-[#3BA3E8] sm:text-3xl"
                >
                  {index + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="font-serif text-xl font-medium tracking-tight text-[#222863]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A6270]">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Get care — photo + copy + CTA (same grammar as wellness “For families”) */}
      <section id="get-care" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              Get care
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              Take control of your health{' '}
              <span className="font-normal text-[#3BA3E8]">today.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#5A6270]">
              StarMed offers personalized care for chronic conditions. Schedule a visit and start a
              steadier plan — with guidance you can rely on.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
              Available through concierge membership or a conventional clinic visit. Same clinicians,
              same steady approach.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-lg bg-[#222863] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52]"
            >
              Contact the clinic
            </Link>
          </div>

          <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:col-span-6 lg:min-h-[26rem]">
            <Image
              src="/service-chronic-photo.jpg"
              alt="Physician reviewing a chronic care plan with a patient"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section
        className="py-14 sm:py-16 lg:py-20"
        style={{
          background: 'linear-gradient(120deg, #1a1f4a 0%, #222863 48%, #2a5f8f 100%)',
        }}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:px-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl lg:leading-[1.12]">
              Ready to address your{' '}
              <span className="font-normal text-[#7EC8F0]">chronic condition?</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Contact us to schedule an appointment and start a clearer, more supported care plan.
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
