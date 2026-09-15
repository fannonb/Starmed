import Image from 'next/image'
import Link from 'next/link'
import LocalizedServiceHero from '@/components/services/LocalizedServiceHero'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'services', label: 'Services' },
  { id: 'why-it-matters', label: 'Why it matters' },
  { id: 'get-care', label: 'Get care' },
] as const

const offerings = [
  {
    title: 'Body composition analysis',
    desc: 'We measure fat and muscle so your plan is based on real composition — not just the number on the scale.',
  },
  {
    title: 'Personalized nutrition plans',
    desc: 'Practical food guidance that supports weight control and a balanced lifestyle you can sustain.',
  },
  {
    title: 'Medical supervision',
    desc: 'Safe, clinician-guided options — including medications when appropriate — with ongoing oversight.',
  },
  {
    title: 'Physical activity guidance',
    desc: 'Exercise plans matched to your fitness level and health needs, designed to support effective weight loss.',
  },
  {
    title: 'Lifestyle & behavioral counseling',
    desc: 'Identify habits that drive weight gain, then build lasting changes that stick beyond the first few weeks.',
  },
]

const outcomes = [
  {
    title: 'Lower chronic disease risk',
    desc: 'Healthy weight management supports better heart health and helps reduce risk of diabetes and hypertension.',
  },
  {
    title: 'More everyday energy',
    desc: 'Feel more motivated and capable as daily tasks get easier with improved stamina.',
  },
  {
    title: 'Better movement',
    desc: 'Less joint strain and more flexibility — mobility that supports an active life.',
  },
  {
    title: 'Stronger confidence',
    desc: 'See progress in your body and health reflected in how you feel about yourself.',
  },
  {
    title: 'Longer, healthier life',
    desc: 'Sustainable habits that support longevity and a better quality of life over time.',
  },
]

export default function WeightLossManagementContent() {
  return (
    <>
            <LocalizedServiceHero
        serviceId="weight-loss"
        image="/service-weight.jpg"
        imageAlt="Weight loss management consultation at StarMed Clinic"
        imagePosition="center 32%"
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
                Sustainable weight loss,{' '}
                <span className="font-normal text-[#3BA3E8]">lasting results.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#5A6270]">
                At StarMed, a healthy weight is a personal journey. We don&apos;t chase short-term
                fixes — we build care plans for long-term health, combining medical expertise with
                lifestyle change.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
                That means addressing root causes of weight gain and giving you practical tools to
                keep your progress.
              </p>
            </div>

            <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:col-span-6 lg:min-h-[26rem]">
              <Image
                src="/service-weight-photo.webp"
                alt="Patient discussing a personalized weight loss plan at StarMed"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-0 overflow-hidden border border-[#D5DEEA] bg-white sm:grid-cols-3">
            {[
              {
                title: 'Medical expertise',
                desc: 'Clinician-guided care that keeps your plan safe and grounded in evidence.',
              },
              {
                title: 'Lifestyle change',
                desc: 'Nutrition, activity, and habit support designed for real life — not crash diets.',
              },
              {
                title: 'Root-cause focus',
                desc: 'We look beyond the scale to understand what drives weight gain for you.',
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`px-6 py-8 sm:px-7 ${
                  index < 2 ? 'border-b border-[#D5DEEA] sm:border-b-0 sm:border-r' : ''
                }`}
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
                What your program{' '}
                <span className="font-normal text-[#3BA3E8]">includes.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
                Proven lifestyle strategies paired with medical support — so you lose weight and keep
                it off while feeling healthier overall.
              </p>
            </div>

            <ol className="m-0 flex list-none flex-col gap-4 p-0 lg:col-span-8">
              {offerings.map((item, index) => (
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

      {/* Why it matters */}
      <section id="why-it-matters" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              Why it matters
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              A healthy weight is about{' '}
              <span className="font-normal text-[#3BA3E8]">more than appearance.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
              Effective weight management improves health and quality of life — from energy and
              mobility to long-term disease risk.
            </p>
          </div>

          <ol className="mt-12 grid list-none grid-cols-1 gap-px bg-[#D5DEEA] p-0 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((item, index) => (
              <li
                key={item.title}
                className={`flex flex-col bg-white px-6 py-8 sm:px-7 sm:py-9 ${
                  index === outcomes.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <span className="font-serif text-3xl font-medium tabular-nums leading-none text-[#3BA3E8]">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-serif text-xl font-medium tracking-tight text-[#222863]">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#5A6270]">{item.desc}</p>
              </li>
            ))}
          </ol>
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
                Take charge of your health{' '}
                <span className="font-normal text-[#3BA3E8]">with StarMed.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#5A6270]">
                Ready to lose weight with personalized care and support? Contact us to book a
                consultation and start a clearer path to lasting success.
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
                src="/service-bodycomp.jpg"
                alt="Body composition insights supporting a StarMed weight loss plan"
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
              Your success story starts{' '}
              <span className="font-normal text-[#7EC8F0]">with us.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Get personalized support from our team — sustainable solutions that address root
              causes and build healthier habits.
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
