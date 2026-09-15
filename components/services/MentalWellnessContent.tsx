import Image from 'next/image'
import Link from 'next/link'
import LocalizedServiceHero from '@/components/services/LocalizedServiceHero'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'services', label: 'Services' },
  { id: 'conditions', label: 'Conditions' },
  { id: 'value', label: 'Value' },
  { id: 'get-care', label: 'Get care' },
] as const

const services = [
  {
    title: 'Mental health counseling',
    desc: 'A supportive therapy space to explore feelings, build resilience, and create strategies that strengthen wellbeing.',
  },
  {
    title: 'Medication management',
    desc: 'Thorough evaluations, prescriptions when needed, and careful monitoring so medication supports your plan safely.',
  },
  {
    title: 'Neuro & biofeedback therapy',
    desc: 'Non-invasive training that helps you regulate focus, emotions, and stress by learning to guide brain and body responses.',
  },
  {
    title: 'Brain mapping',
    desc: 'Neural insights that reveal patterns linked to mental and cognitive challenges — guiding more targeted treatment.',
  },
  {
    title: 'Ketamine therapy',
    desc: 'A carefully supervised option for treatment-resistant depression, anxiety, and PTSD when standard care falls short.',
  },
]

const conditions = [
  'Depression',
  'Anxiety',
  'Bipolar disorder',
  'PTSD',
  'ADHD',
  'OCD',
  'Eating disorders',
  'Schizophrenia',
  'Substance use',
]

const valuePoints = [
  {
    title: 'Manage symptoms better',
    desc: 'Evidence-based care that helps you understand what you are facing and respond with clearer tools.',
  },
  {
    title: 'Improve daily life',
    desc: 'Stronger coping skills that support work, relationships, and the routines that keep you steady.',
  },
  {
    title: 'Sharper cognitive function',
    desc: 'Neurofeedback, biofeedback, and brain mapping can support clarity, memory, focus, and mental performance.',
  },
]

export default function MentalWellnessContent() {
  return (
    <>
            <LocalizedServiceHero
        serviceId="mental-wellness"
        image="/service-mental.jpg"
        imageAlt="Mental wellness care at StarMed Clinic"
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
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                Overview
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                Why mental wellbeing{' '}
                <span className="font-normal text-[#3BA3E8]">matters.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#5A6270]">
                Your mental health touches every part of life — relationships, work, and physical
                health. Caring for your mind builds strength and creates a happier, healthier future.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
                Our programs support your personal journey with tailored care, so you never have to
                face it alone.
              </p>
            </div>

            <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:col-span-6 lg:min-h-[26rem]">
              <Image
                src="/service-mental-photo.webp"
                alt="Supportive mental wellness conversation at StarMed Clinic"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4 lg:sticky lg:top-[136px] lg:self-start">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                Services
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                Mental and brain health{' '}
                <span className="font-normal text-[#3BA3E8]">care.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
                Comprehensive support personalized to your needs — promoting recovery, growth, and
                lasting wellbeing.
              </p>
            </div>

            <ol className="m-0 flex list-none flex-col gap-4 p-0 lg:col-span-8">
              {services.map((item, index) => (
                <li
                  key={item.title}
                  className="flex gap-5 rounded-xl bg-[#F4F7FB] px-5 py-6 sm:gap-6 sm:px-6 sm:py-7"
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
            </ol>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section id="conditions" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              Conditions
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              Mental health conditions{' '}
              <span className="font-normal text-[#3BA3E8]">we treat.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
              Expert, personalized care for a wide range of conditions — with a team dedicated to
              helping you find balance and wellbeing.
            </p>
          </div>

          <ul className="mt-12 m-0 grid list-none grid-cols-1 gap-0 border border-[#D5DEEA] bg-white p-0 sm:grid-cols-2 lg:grid-cols-3">
            {conditions.map((condition, index) => (
              <li
                key={condition}
                className={`flex items-center gap-4 border-[#D5DEEA] px-5 py-5 sm:px-6 ${
                  index < conditions.length - 1 ? 'border-b' : ''
                } ${index % 2 === 0 ? 'sm:border-r' : 'sm:border-r-0'} ${
                  index % 3 !== 2 ? 'lg:border-r' : 'lg:border-r-0'
                } ${index >= 6 ? 'lg:border-b-0' : 'lg:border-b'} ${
                  index >= 8 ? 'sm:border-b-0' : ''
                }`}
              >
                <span
                  aria-hidden="true"
                  className="font-serif text-xl font-medium tabular-nums leading-none text-[#3BA3E8]"
                >
                  {index + 1}
                </span>
                <span className="font-serif text-lg font-medium tracking-tight text-[#222863]">
                  {condition}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Value */}
      <section id="value" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                Value
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                What our care can{' '}
                <span className="font-normal text-[#3BA3E8]">change.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#5A6270]">
                Proven methods help you manage symptoms, improve quality of life, strengthen
                relationships, and support clearer thinking day to day.
              </p>
            </div>

            <ol className="m-0 flex list-none flex-col gap-0 border-t border-[#D5DEEA] p-0 lg:col-span-7">
              {valuePoints.map((item, index) => (
                <li
                  key={item.title}
                  className="grid grid-cols-[auto_1fr] gap-5 border-b border-[#D5DEEA] py-7 sm:gap-8 sm:py-8"
                >
                  <span
                    aria-hidden="true"
                    className="font-serif text-2xl font-medium tabular-nums leading-none text-[#3BA3E8] sm:text-3xl"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-medium tracking-tight text-[#222863]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-[#5A6270] sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Get care */}
      <section id="get-care" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden border border-[#D5DEEA] bg-white lg:grid-cols-12">
            <div className="flex flex-col justify-center px-6 py-10 sm:px-8 sm:py-12 lg:col-span-6 lg:px-10">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                Get care
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                Get the support you{' '}
                <span className="font-normal text-[#3BA3E8]">deserve.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#5A6270]">
                Our caring team provides tailored support for your journey to better mental health.
                Contact StarMed today — you don&apos;t have to face it alone.
              </p>
              <Link
                href="/#contact"
                className="mt-8 inline-flex h-11 w-fit items-center justify-center rounded-lg bg-[#222863] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52]"
              >
                Contact the clinic
              </Link>
            </div>
            <div className="relative min-h-[16rem] sm:min-h-[20rem] lg:col-span-6 lg:min-h-[22rem]">
              <Image
                src="/service-brain-mapping.jpg"
                alt="Brain health and mental wellness support at StarMed"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
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
              Find stability and wellbeing —{' '}
              <span className="font-normal text-[#7EC8F0]">start today.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Reach out to schedule care that supports your mind, your relationships, and your
              everyday life.
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
