import Image from 'next/image'
import Link from 'next/link'
import LocalizedServiceHero from '@/components/services/LocalizedServiceHero'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'why-it-matters', label: 'Why it matters' },
  { id: 'whats-included', label: "What's included" },
  { id: 'who-its-for', label: "Who it's for" },
  { id: 'get-care', label: 'Get care' },
] as const

const benefits = [
  {
    title: 'Catch issues earlier',
    desc: 'Quicker diagnoses open the door to simpler, less invasive treatment when it still makes the biggest difference.',
  },
  {
    title: 'Lower long-term risk',
    desc: 'Prevention reduces the chance of chronic disease — including diabetes, heart disease, and some cancers.',
  },
  {
    title: 'Stay in control',
    desc: 'Clear screening plans and lifestyle guidance help you make informed choices about your health.',
  },
  {
    title: 'Avoid costly surprises',
    desc: 'Early detection can prevent hospital stays and complex treatment that costs more later.',
  },
]

const includedGroups = [
  {
    id: 'screenings',
    label: 'Clinical screenings',
    note: 'Tests that catch risk early',
    items: [
      {
        title: 'Blood pressure checks',
        desc: 'Routine monitoring to catch hypertension before it becomes a crisis.',
      },
      {
        title: 'Cholesterol testing',
        desc: 'Lipid panels that inform heart-risk conversations and next steps.',
      },
      {
        title: 'Diabetes screening',
        desc: 'Glucose and A1C checks tied to a plan you can actually follow.',
      },
      {
        title: 'Cancer screenings',
        desc: 'Age- and risk-appropriate screening recommendations, explained plainly.',
      },
    ],
  },
  {
    id: 'support',
    label: 'Guidance & protection',
    note: 'Support that keeps you well between visits',
    items: [
      {
        title: 'Lifestyle counseling',
        desc: 'Practical guidance on diet, activity, sleep, and habits that stick.',
      },
      {
        title: 'Immunizations & vaccinations',
        desc: 'Vaccines aligned with your age, health history, and travel needs.',
      },
      {
        title: 'Mental health screenings',
        desc: 'Brief, respectful checks for mood, stress, and emotional wellbeing.',
      },
    ],
  },
] as const

export default function PrimaryPreventiveCareContent() {
  return (
    <>
            <LocalizedServiceHero
        serviceId="primary"
        image="/service-primary.jpg"
        imageAlt="A StarMed clinician providing primary and preventive care"
        imagePosition="center 28%"
      />

      {/* Section jump links */}
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

      {/* Overview — Primary vs Preventive */}
      <section id="overview" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              Overview
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              What this care{' '}
              <span className="italic font-normal text-[#3BA3E8]">actually covers.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
              Regular check-ups monitor your health over time — stopping issues before they start
              and keeping you well for the long haul, with care shaped around you.
            </p>
          </div>

          <div className="mt-10 grid gap-0 overflow-hidden border border-[#D5DEEA] lg:grid-cols-2">
            <article className="border-b border-[#D5DEEA] bg-white px-6 py-8 sm:px-8 sm:py-10 lg:border-b-0 lg:border-r">
              <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#3BA3E8]">
                Primary care
              </p>
              <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight text-[#222863]">
                Your first line of defense
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5A6270] sm:text-base">
                Checkups, chronic condition management, and healthcare advice that adapts as your
                life changes. At StarMed, the focus stays on you — not a rushed script.
              </p>
            </article>
            <article className="bg-white px-6 py-8 sm:px-8 sm:py-10">
              <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#3BA3E8]">
                Preventive care
              </p>
              <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight text-[#222863]">
                Steps that keep illness away
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5A6270] sm:text-base">
                Screenings, vaccinations, and healthy-living guidance that lower risk. Diet,
                exercise, and habits matter here — and we make those conversations practical.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section id="why-it-matters" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                Why it matters
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                Prevention puts you{' '}
                <span className="italic font-normal text-[#3BA3E8]">in control.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#5A6270] lg:text-right">
              Finding health issues early helps you avoid costly, complex treatment later — and
              stay informed about your risks.
            </p>
          </div>

          <ol className="mt-12 grid list-none grid-cols-1 gap-px bg-[#D5DEEA] p-0 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <li key={benefit.title} className="flex flex-col bg-white px-6 py-8 sm:px-8 sm:py-9">
                <span className="font-serif text-3xl font-medium tabular-nums leading-none text-[#3BA3E8]">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-serif text-xl font-medium tracking-tight text-[#222863]">
                  {benefit.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-[#5A6270]">
                  {benefit.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What's included — clinical pathway */}
      <section id="whats-included" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-14">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                What&apos;s included
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                A clear preventive{' '}
                <span className="italic font-normal text-[#3BA3E8]">pathway.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:justify-self-end lg:text-right">
              <p className="max-w-md text-base leading-relaxed text-[#5A6270] lg:ml-auto">
                Screenings first, then the guidance that protects you between visits — recommended
                by age, gender, and personal risk.
              </p>
              <p className="mt-3 font-serif text-sm tabular-nums tracking-wide text-[#3BA3E8]">
                01 — 07 · seven core services
              </p>
            </div>
          </div>

          <div className="relative mt-12">
            <div
              aria-hidden="true"
              className="absolute top-0 bottom-0 left-[1.35rem] hidden w-px bg-gradient-to-b from-[#3BA3E8] via-[#3BA3E8]/35 to-[#222863] sm:left-[1.6rem] lg:left-8"
            />

            <div className="space-y-5 lg:space-y-6">
              {includedGroups.map((group, groupIndex) => {
                const startNum = groupIndex === 0 ? 0 : includedGroups[0].items.length
                const isDark = groupIndex === 1

                return (
                  <div
                    key={group.id}
                    className={
                      isDark
                        ? 'relative overflow-hidden bg-[#222863] shadow-[0_24px_60px_-36px_rgba(34,40,99,0.65)]'
                        : 'relative overflow-hidden border border-[#D5DEEA] bg-white'
                    }
                  >
                    <div
                      className={`flex flex-col gap-2 border-b px-6 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:px-8 lg:pl-16 ${
                        isDark ? 'border-white/15' : 'border-[#E3E8F0]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className={`hidden h-2.5 w-2.5 rounded-full ring-4 lg:block ${
                            isDark
                              ? 'bg-[#7EC8F0] ring-[#7EC8F0]/20'
                              : 'bg-[#3BA3E8] ring-[#3BA3E8]/15'
                          }`}
                        />
                        <p
                          className={`text-[11px] font-bold tracking-[0.16em] uppercase ${
                            isDark ? 'text-[#7EC8F0]' : 'text-[#3BA3E8]'
                          }`}
                        >
                          {group.label}
                        </p>
                      </div>
                      <p className={`text-sm ${isDark ? 'text-white/60' : 'text-[#5A6270]'}`}>
                        {group.note}
                      </p>
                    </div>

                    <ol className="m-0 grid list-none grid-cols-1 p-0 md:grid-cols-2">
                      {group.items.map((item, itemIndex) => {
                        const num = startNum + itemIndex + 1
                        const isLast = itemIndex === group.items.length - 1
                        const isLastOdd = group.items.length % 2 === 1 && isLast
                        const isLeftCol = itemIndex % 2 === 0

                        return (
                          <li
                            key={item.title}
                            className={[
                              'group relative flex gap-4 px-6 py-6 transition-colors duration-300 sm:gap-5 sm:px-8 sm:py-7 lg:pl-16',
                              isDark ? 'hover:bg-white/[0.04]' : 'hover:bg-[#F4F7FB]',
                              !isLast ? 'border-b' : '',
                              isDark ? 'border-white/10' : 'border-[#E3E8F0]',
                              isLeftCol && !isLastOdd ? 'md:border-r' : '',
                              isLastOdd ? 'md:col-span-2' : '',
                            ]
                              .filter(Boolean)
                              .join(' ')}
                          >
                            <span
                              aria-hidden="true"
                              className={`w-10 shrink-0 font-serif text-3xl font-medium tabular-nums leading-none transition-colors duration-300 sm:w-12 sm:text-4xl ${
                                isDark
                                  ? 'text-[#7EC8F0]/40 group-hover:text-[#7EC8F0]'
                                  : 'text-[#3BA3E8]/45 group-hover:text-[#3BA3E8]'
                              }`}
                            >
                              {String(num).padStart(2, '0')}
                            </span>
                            <div className={`min-w-0 pt-0.5 ${isLastOdd ? 'md:max-w-xl' : ''}`}>
                              <h3
                                className={`font-serif text-lg font-medium tracking-tight sm:text-xl ${
                                  isDark ? 'text-white' : 'text-[#222863]'
                                }`}
                              >
                                {item.title}
                              </h3>
                              <p
                                className={`mt-1.5 text-sm leading-relaxed ${
                                  isDark ? 'text-white/65' : 'text-[#5A6270]'
                                } ${isLastOdd ? '' : 'max-w-md'}`}
                              >
                                {item.desc}
                              </p>
                            </div>
                          </li>
                        )
                      })}
                    </ol>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section id="who-its-for" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              Who it&apos;s for
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              Care that fits men, women,{' '}
              <span className="italic font-normal text-[#3BA3E8]">and children.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#5A6270]">
              Recommended services depend on age, gender, and health needs. We map a screening and
              checkup plan to your stage of life — then adjust it as things change.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
              Schedule a primary and preventive care visit to talk through what you need now, and
              what to watch for next.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-[#222863] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52]"
            >
              Schedule a visit
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:col-span-6 lg:min-h-[26rem]">
            <Image
              src="/service-wellness.jpg"
              alt="Preventive care and wellness discussion at StarMed"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Get care — access paths */}
      <section id="get-care" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              Get care
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              Same clinical care —{' '}
              <span className="italic font-normal text-[#3BA3E8]">two ways in.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
              Primary and preventive care is available through concierge membership or a
              conventional clinic visit. Choose the access model that fits your life.
            </p>
          </div>

          <div className="mt-10 grid gap-0 overflow-hidden border border-[#D5DEEA] lg:grid-cols-2">
            <div className="border-b border-[#D5DEEA] bg-white px-6 py-8 sm:px-8 lg:border-b-0 lg:border-r">
              <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#3BA3E8]">
                Concierge membership
              </p>
              <h3 className="mt-3 font-serif text-xl font-medium tracking-tight text-[#222863]">
                Direct access, longer visits
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5A6270]">
                Cash-pay membership with easier physician access and unhurried appointments —
                including preventive planning built into your relationship.
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
                Insurance-friendly checkups
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5A6270]">
                Book a traditional visit billed to your plan. No membership required — same clinic,
                same preventive standards.
              </p>
              <Link
                href="/#contact"
                className="mt-5 inline-flex text-sm font-semibold text-[#222863] transition-colors hover:text-[#3BA3E8]"
              >
                Book a conventional visit →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section
        className="py-14 sm:py-16 lg:py-20"
        style={{
          background: 'linear-gradient(120deg, #1a1f4a 0%, #222863 50%, #2a5f8f 100%)',
        }}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:px-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl lg:leading-[1.12]">
              Protect your health with care that{' '}
              <span className="italic font-normal text-[#7EC8F0]">stays ahead.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Ready for a checkup plan that fits your age, goals, and history? Our team is here to
              help you get started.
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
