import Image from 'next/image'
import Link from 'next/link'
import LocalizedServiceHero from '@/components/services/LocalizedServiceHero'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'urgent-care', label: 'Urgent care' },
  { id: 'procedures', label: 'Procedures' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'get-care', label: 'Get care' },
] as const

const urgentServices = [
  {
    title: 'Colds, flu & infections',
    desc: 'Sore throats, ear infections, fevers, and common illness care.',
  },
  {
    title: 'Cuts, sprains & burns',
    desc: 'Minor injuries assessed and treated the same day.',
  },
  {
    title: 'Wound care',
    desc: 'Primary wound care and minor laceration repair.',
  },
  {
    title: 'On-site diagnostics',
    desc: 'Testing for quick, accurate assessments when you need answers.',
  },
  {
    title: 'Allergies & rashes',
    desc: 'Allergic reactions and rash treatment without an ER visit.',
  },
  {
    title: 'Mild respiratory care',
    desc: 'Support for mild breathing issues and asthma flare-ups.',
  },
]

const procedures = [
  {
    title: 'Abscess drainage',
    desc: 'Incision and drainage for abscesses in clinic.',
  },
  {
    title: 'Splinting',
    desc: 'Splinting support for minor fractures.',
  },
  {
    title: 'Foreign object removal',
    desc: 'Safe removal of foreign objects from skin or soft tissue.',
  },
  {
    title: 'Wart & skin tag care',
    desc: 'Wart removal and skin tag treatment.',
  },
  {
    title: 'Joint injections',
    desc: 'Injections for targeted pain relief.',
  },
  {
    title: 'Sutures & closure',
    desc: 'Simple sutures and wound closure.',
  },
]

const benefits = [
  {
    title: 'Quick, accessible care',
    desc: 'Same-day attention without the long ER wait — efficient, compassionate care when something can’t wait.',
  },
  {
    title: 'Personal attention',
    desc: 'A team that takes time to understand what’s wrong and treat it properly, without the chaos of a crowded ER.',
  },
  {
    title: 'Broad urgent coverage',
    desc: 'From allergies and infections to sprains and minor procedures — diagnosis and treatment in one place.',
  },
  {
    title: 'A smarter cost choice',
    desc: 'Avoid high emergency-room bills for non-life-threatening needs. Get the right level of care for your budget.',
  },
]

export default function UrgentMinorCareContent() {
  return (
    <>
            <LocalizedServiceHero
        serviceId="urgent"
        image="/service-urgent.jpg"
        imageAlt="Urgent care and minor procedures at StarMed Clinic"
        imagePosition="center 30%"
      />

      {/* Jump nav */}
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

      {/* Overview — clinic vs ER */}
      <section id="overview" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              Overview
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              Prompt care for what{' '}
              <span className="italic font-normal text-[#3BA3E8]">won&apos;t wait.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
              Same-day support for minor injuries, infections, and procedures — with diagnostics and
              clear next steps when your health needs attention now.
            </p>
          </div>

          <div className="mt-10 grid gap-0 overflow-hidden border border-[#D5DEEA] lg:grid-cols-2">
            <article className="border-b border-[#D5DEEA] bg-white px-6 py-8 sm:px-8 sm:py-10 lg:border-b-0 lg:border-r">
              <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#3BA3E8]">
                Come to StarMed for
              </p>
              <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight text-[#222863]">
                Urgent, non-emergency needs
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5A6270] sm:text-base">
                Fevers, sprains, cuts, rashes, mild breathing issues, and minor procedures — when
                you need skilled care today without an emergency-room visit.
              </p>
            </article>
            <article className="bg-[#222863] px-6 py-8 sm:px-8 sm:py-10">
              <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#7EC8F0]">
                Call 911 for
              </p>
              <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight text-white">
                Life-threatening emergencies
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                Chest pain, severe bleeding, trouble breathing, stroke symptoms, or major trauma —
                go to the ER or call 911. StarMed provides non-emergency urgent care only.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* What we treat — stacked for readability */}
      <section className="bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              What we treat
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              Urgent care and{' '}
              <span className="font-normal text-[#3BA3E8]">minor procedures.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
              Scan by category — illness and injury care first, then in-clinic procedures.
            </p>
          </div>

          {/* Urgent care */}
          <div
            id="urgent-care"
            className="mt-12 scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 border-t border-[#D5DEEA] bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-10"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#3BA3E8]">
                  Urgent care services
                </p>
                <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight text-[#222863] sm:text-[1.75rem]">
                  Same-day illness &amp; injury care
                </h3>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-[#5A6270] sm:text-right">
                When you need attention today — without the ER wait.
              </p>
            </div>

            <ul className="mt-8 grid list-none grid-cols-1 gap-x-10 gap-y-0 p-0 sm:grid-cols-2">
              {urgentServices.map((item) => (
                <li
                  key={item.title}
                  className="flex gap-3 border-t border-[#E3E8F0] py-5 first:border-t-0 sm:first:border-t sm:[&:nth-child(-n+2)]:border-t-0"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3BA3E8]"
                  />
                  <div className="min-w-0">
                    <p className="font-serif text-lg font-medium tracking-tight text-[#222863]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#5A6270]">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Procedures */}
          <div
            id="procedures"
            className="mt-5 scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#222863] px-5 py-8 sm:px-8 sm:py-10 lg:px-10"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#7EC8F0]">
                  Minor procedures
                </p>
                <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight text-white sm:text-[1.75rem]">
                  In-clinic procedures, done right
                </h3>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-white/60 sm:text-right">
                Common procedures handled here — clearly explained before we begin.
              </p>
            </div>

            <ul className="mt-8 grid list-none grid-cols-1 gap-x-10 gap-y-0 p-0 sm:grid-cols-2">
              {procedures.map((item) => (
                <li
                  key={item.title}
                  className="flex gap-3 border-t border-white/10 py-5 first:border-t-0 sm:first:border-t sm:[&:nth-child(-n+2)]:border-t-0"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7EC8F0]"
                  />
                  <div className="min-w-0">
                    <p className="font-serif text-lg font-medium tracking-tight text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-white/65">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                Benefits
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                Why patients choose StarMed{' '}
                <span className="italic font-normal text-[#3BA3E8]">urgent care.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#5A6270] lg:text-right">
              Flexible scheduling, helpful staff, and personal care — whether you need a quick
              consult or a minor procedure.
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

      {/* Get care */}
      <section id="get-care" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              Get care
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              Feel better faster —{' '}
              <span className="italic font-normal text-[#3BA3E8]">without the ER wait.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#5A6270]">
              Sprain, fever, or a minor procedure — we help you recover with skilled, compassionate
              care. Same-day appointments are available; call ahead or reach out and we&apos;ll get
              you seen.
            </p>
            <p className="mt-4 border-l-2 border-[#3BA3E8] pl-4 text-sm leading-relaxed text-[#5A6270]">
              <span className="font-semibold text-[#222863]">Emergencies:</span> call{' '}
              <a href="tel:911" className="font-semibold text-[#3BA3E8] hover:underline">
                911
              </a>
              . StarMed provides non-emergency urgent care only.
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
              src="/service-urgent-photo.jpg"
              alt="StarMed clinician providing urgent care for a patient"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
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
              Don&apos;t wait to feel better —{' '}
              <span className="italic font-normal text-[#7EC8F0]">reach out today.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Same-day appointments, caring service, and a team ready to help when urgent needs
              show up. Call or contact us and we&apos;ll take care of you without delay.
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
