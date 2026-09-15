import Image from 'next/image'
import Link from 'next/link'
import LocalizedServiceHero from '@/components/services/LocalizedServiceHero'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'process', label: 'Process' },
  { id: 'get-care', label: 'Get care' },
] as const

const metrics = [
  { title: 'Muscle mass', desc: 'See lean tissue levels that support strength, metabolism, and long-term function.' },
  { title: 'Body fat', desc: 'Understand fat distribution — not just total weight — for clearer risk and goal setting.' },
  { title: 'Bone density', desc: 'Track structural health that scales and BMI alone cannot show.' },
  { title: 'Hydration', desc: 'Measure water balance that affects energy, recovery, and day-to-day wellbeing.' },
]

const benefits = [
  {
    title: 'Targeted health goals',
    desc: 'Muscle and fat percentages help you set realistic fitness or weight goals — and track progress accurately.',
  },
  {
    title: 'Smarter weight management',
    desc: 'Know whether a change came from fat loss or muscle gain, then adjust diet and exercise with confidence.',
  },
  {
    title: 'Chronic disease prevention',
    desc: 'High body fat and low muscle mass raise risk for heart disease, diabetes, and osteoporosis. Tracking lets you act early.',
  },
  {
    title: 'Better fitness & lifestyle plans',
    desc: 'Detailed composition data helps us shape diet, exercise, and lifestyle recommendations around your body — not a scale number.',
  },
]

const steps = [
  {
    title: 'Personal consultation',
    desc: 'A short conversation about your health goals and history so we tailor the analysis to what matters for you.',
  },
  {
    title: 'Quick, non-invasive scan',
    desc: 'Medical-grade equipment measures muscle, fat, bone density, and hydration — painless and efficient.',
  },
  {
    title: 'Results review',
    desc: 'Our clinicians walk through key metrics and what they mean for your health in plain language.',
  },
  {
    title: 'Custom health plan',
    desc: 'We turn your results into practical diet, exercise, and lifestyle recommendations matched to your goals.',
  },
]

export default function BodyCompositionAnalysisContent() {
  return (
    <>
            <LocalizedServiceHero
        serviceId="body-composition"
        image="/service-bodycomp.jpg"
        imageAlt="Body composition analysis at StarMed Clinic"
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

      {/* Overview */}
      <section id="overview" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-14">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                Overview
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                Track health —{' '}
                <span className="font-normal text-[#3BA3E8]">not just weight.</span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-[#5A6270] lg:col-span-5 lg:justify-self-end lg:text-right">
              Medical-grade analysis separates muscle, fat, bone, and water — giving a clearer picture
              than a scale or BMI alone.
            </p>
          </div>

          <div className="mt-12 grid gap-0 overflow-hidden border border-[#D5DEEA] bg-white sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((item, index) => (
              <div
                key={item.title}
                className={`px-5 py-7 sm:px-6 ${
                  index < metrics.length - 1
                    ? 'border-b border-[#D5DEEA] sm:border-b-0 sm:border-r lg:border-b-0'
                    : ''
                } ${index < 2 ? 'sm:border-b lg:border-b-0' : ''} ${
                  index === 1 ? 'sm:border-r-0 lg:border-r' : ''
                } ${index === 2 ? 'border-b sm:border-b-0 sm:border-r' : ''}`}
              >
                <span
                  aria-hidden="true"
                  className="font-serif text-2xl font-medium tabular-nums leading-none text-[#3BA3E8]"
                >
                  {index + 1}
                </span>
                <h3 className="mt-3 font-serif text-lg font-medium tracking-tight text-[#222863]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5A6270]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid items-center gap-8 border border-[#D5DEEA] bg-white lg:grid-cols-12 lg:gap-0">
            <div className="px-6 py-8 sm:px-8 lg:col-span-6 lg:py-10 lg:pr-10">
              <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#3BA3E8]">
                Medical-grade analysis
              </p>
              <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight text-[#222863]">
                What it actually measures
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
                Unlike a regular scale, this method breaks your body into meaningful parts. At
                StarMed, we use advanced tools so results are accurate — and useful for real care
                decisions.
              </p>
            </div>
            <div className="relative min-h-[16rem] lg:col-span-6 lg:min-h-[20rem]">
              <Image
                src="/service-bodycomp-photo.webp"
                alt="Body composition scan and health metrics review at StarMed"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              Benefits
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              Why composition matters{' '}
              <span className="font-normal text-[#3BA3E8]">for your health.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
              Knowing what your body is made of helps you set better goals, manage weight more
              intelligently, and plan care that fits your real physiology.
            </p>
          </div>

          <ol className="mt-12 grid list-none grid-cols-1 gap-px bg-[#D5DEEA] p-0 sm:grid-cols-2">
            {benefits.map((item, index) => (
              <li key={item.title} className="flex flex-col bg-[#F4F7FB] px-6 py-8 sm:px-8 sm:py-9">
                <span className="font-serif text-3xl font-medium tabular-nums leading-none text-[#3BA3E8]">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-serif text-xl font-medium tracking-tight text-[#222863]">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-[#5A6270]">{item.desc}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 border-l-2 border-[#3BA3E8] bg-[#F4F7FB] px-6 py-6 sm:px-8">
            <h3 className="font-serif text-xl font-medium tracking-tight text-[#222863]">
              Is it right for you?
            </h3>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#5A6270]">
              Yes — for athletes, people managing chronic conditions, and anyone who wants clearer
              insight into their body. Composition analysis supports better health decisions and
              helps you track a fitness or wellness plan with real data.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4 lg:sticky lg:top-[136px] lg:self-start">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                Process
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                How we perform{' '}
                <span className="font-normal text-[#3BA3E8]">the analysis.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
                A clear four-step visit — from consultation to a plan you can act on.
              </p>
            </div>

            <ol className="m-0 flex list-none flex-col gap-4 p-0 lg:col-span-8">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex gap-5 rounded-xl bg-white px-5 py-6 sm:gap-6 sm:px-6 sm:py-7"
                >
                  <span
                    aria-hidden="true"
                    className="font-serif text-2xl font-medium tabular-nums leading-none text-[#3BA3E8] sm:text-3xl"
                  >
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-serif text-xl font-medium tracking-tight text-[#222863] sm:text-[1.35rem]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5A6270] sm:text-base">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Get care */}
      <section id="get-care" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden border border-[#D5DEEA] lg:grid-cols-12">
            <div className="flex flex-col justify-center px-6 py-10 sm:px-8 sm:py-12 lg:col-span-6 lg:px-10">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                Get care
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                See the full picture{' '}
                <span className="font-normal text-[#3BA3E8]">of your body.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#5A6270]">
                Ready for composition insights that go beyond the scale? Contact StarMed to schedule
                your analysis and start a clearer health plan.
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
                src="/service-weight.jpg"
                alt="Clinician discussing body composition results with a patient"
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
              Know your body —{' '}
              <span className="font-normal text-[#7EC8F0]">not just your weight.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Schedule a body composition analysis and build a plan grounded in real metrics.
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
