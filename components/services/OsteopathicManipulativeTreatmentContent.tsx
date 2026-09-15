import Image from 'next/image'
import Link from 'next/link'
import LocalizedServiceHero from '@/components/services/LocalizedServiceHero'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'conditions', label: 'Conditions' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'get-care', label: 'Get care' },
] as const

const focusAreas = [
  {
    title: 'Musculoskeletal pain & injuries',
    desc: 'Relief for strains, joint pain, sports injuries, and chronic issues in the back, neck, shoulders, and hips.',
  },
  {
    title: 'Breathing & respiratory issues',
    desc: 'Support for lung-related concerns such as asthma, sinusitis, and recovery after respiratory infection.',
  },
  {
    title: 'Chronic pain relief',
    desc: 'Help with long-term pain from fibromyalgia, arthritis, migraines, and related tension patterns.',
  },
  {
    title: 'Pregnancy-related concerns',
    desc: 'Gentle care for swelling, sciatica, and sleep discomfort — improving comfort and calm during pregnancy.',
  },
]

const otherConditions = [
  { title: 'Digestive issues', desc: 'Supports abdominal mobility and can ease bloating and related discomfort.' },
  { title: 'TMJ dysfunction', desc: 'Eases jaw pain and tightness while improving range of motion.' },
  { title: 'Chronic fatigue', desc: 'Helps reduce muscle soreness and support energy and day-to-day function.' },
  { title: 'Postural issues', desc: 'Addresses alignment and muscle balance to improve posture and movement.' },
  { title: 'Tension headaches', desc: 'Loosens neck and shoulder tension and supports healthier blood flow.' },
  { title: 'Carpal tunnel', desc: 'Targets nerve pressure and improves wrist and hand mobility.' },
]

const techniques = [
  {
    title: 'Gentle stretching',
    desc: 'Lengthens tight muscles and improves flexibility without forcing the body.',
  },
  {
    title: 'Soft tissue pressure',
    desc: 'Relaxes tense muscles and fascia so movement feels freer and less guarded.',
  },
  {
    title: 'Joint mobilization',
    desc: 'Eases stiffness and restores smoother, more comfortable range of motion.',
  },
  {
    title: 'Muscle energy techniques',
    desc: 'Uses guided resistance to release tension and improve how joints and muscles work together.',
  },
]

const benefits = [
  {
    title: 'Noninvasive',
    desc: 'A gentle, drug-free approach that works with your body’s natural healing ability.',
  },
  {
    title: 'Reduces pain',
    desc: 'Helps manage acute and chronic pain without relying on medication alone.',
  },
  {
    title: 'Promotes healing',
    desc: 'Supports circulation, muscle function, and joint mobility for stronger recovery.',
  },
  {
    title: 'Personal care',
    desc: 'Fitted to your needs — whether you are dealing with injury or a long-standing issue.',
  },
  {
    title: 'Improves overall health',
    desc: 'Treats specific problems while encouraging better physical function and wellness.',
  },
]

export default function OsteopathicManipulativeTreatmentContent() {
  return (
    <>
            <LocalizedServiceHero
        serviceId="omt"
        image="/service-omt.jpg"
        imageAlt="Osteopathic manipulative treatment at StarMed Clinic"
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
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                Overview
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                Hands-on care that helps you{' '}
                <span className="font-normal text-[#3BA3E8]">move and heal.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#5A6270]">
                Osteopathic physicians are specially trained to perform OMT. Their hands become
                tools — easing pain, improving mobility, and enhancing healing while working with
                your body&apos;s natural systems.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
                OMT can help with back and neck pain, migraines, joint aches, and sports injuries —
                often reducing the need for medications or procedures.
              </p>
            </div>

            <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:col-span-6 lg:min-h-[26rem]">
              <Image
                src="/service-omt-photo.webp"
                alt="Osteopathic physician providing hands-on musculoskeletal care"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section id="conditions" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              Conditions
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              What OMT can help{' '}
              <span className="font-normal text-[#3BA3E8]">treat.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
              From musculoskeletal pain to respiratory concerns and pregnancy-related discomfort —
              OMT offers relief, better movement, and support for overall wellness.
            </p>
          </div>

          <ol className="mt-12 grid list-none grid-cols-1 gap-px bg-[#D5DEEA] p-0 sm:grid-cols-2">
            {focusAreas.map((item, index) => (
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

          <div className="mt-14">
            <div className="grid items-end gap-6 border-b border-[#D5DEEA] pb-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h3 className="font-serif text-2xl font-medium tracking-tight text-[#222863] sm:text-3xl">
                  Other conditions treated{' '}
                  <span className="font-normal text-[#3BA3E8]">with OMT.</span>
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-[#5A6270] lg:col-span-5 lg:text-right">
                OMT reaches beyond the spine and joints — supporting digestion, posture, headaches,
                and more.
              </p>
            </div>

            <ul className="mt-0 grid list-none grid-cols-1 gap-0 p-0 sm:grid-cols-2 lg:grid-cols-3">
              {otherConditions.map((item, index) => (
                <li
                  key={item.title}
                  className={`border-b border-[#D5DEEA] py-6 sm:px-5 sm:py-7 ${
                    index % 2 === 0 ? 'sm:border-r' : 'sm:border-r-0'
                  } ${index % 3 !== 2 ? 'lg:border-r' : 'lg:border-r-0'} ${
                    index >= 3 ? 'lg:border-b-0' : ''
                  }`}
                >
                  <h4 className="font-serif text-lg font-medium tracking-tight text-[#222863]">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A6270]">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                How it works
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                How OMT works{' '}
                <span className="font-normal text-[#3BA3E8]">at StarMed.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#5A6270]">
                Together, these methods enhance physical wellbeing and mobility — gentle when needed,
                precise where it counts.
              </p>
              <div className="relative mt-8 min-h-[14rem] overflow-hidden sm:min-h-[18rem] lg:min-h-[20rem]">
                <Image
                  src="/service-omt-breathing.webp"
                  alt="OMT techniques supporting respiratory and musculoskeletal function"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <ol className="m-0 flex list-none flex-col gap-4 p-0 lg:col-span-7">
              {techniques.map((item, index) => (
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

      {/* Benefits */}
      <section id="benefits" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              Benefits
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              Why patients choose{' '}
              <span className="font-normal text-[#3BA3E8]">OMT.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
              A hands-on path to less pain, better mobility, and care shaped around your body —
              without relying on invasive treatment first.
            </p>
          </div>

          <ol className="mt-12 grid list-none grid-cols-1 gap-0 border-t border-[#D5DEEA] p-0 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item, index) => (
              <li
                key={item.title}
                className={`border-b border-[#D5DEEA] px-0 py-7 sm:px-5 sm:py-8 ${
                  index % 2 === 0 ? 'sm:border-r' : 'sm:border-r-0'
                } ${index % 3 !== 2 ? 'lg:border-r' : 'lg:border-r-0'} ${
                  index >= 3 ? 'lg:border-b-0' : ''
                } ${index === benefits.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <span
                  aria-hidden="true"
                  className="font-serif text-2xl font-medium tabular-nums leading-none text-[#3BA3E8]"
                >
                  {index + 1}
                </span>
                <h3 className="mt-3 font-serif text-lg font-medium tracking-tight text-[#222863] sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5A6270]">{item.desc}</p>
              </li>
            ))}
          </ol>
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
                Take the first step toward{' '}
                <span className="font-normal text-[#3BA3E8]">better health.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#5A6270]">
                Schedule an appointment to discuss how OMT can help relieve pain, improve mobility,
                and support long-term wellness — with a hands-on approach focused on natural healing.
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
                src="/service-osteopathic.jpg"
                alt="StarMed osteopathic care supporting natural healing and mobility"
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
              Ready for hands-on relief —{' '}
              <span className="font-normal text-[#7EC8F0]">start today.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Let us guide you with osteopathic care focused on natural healing and long-term
              wellness for you and your family.
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
