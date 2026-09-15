import Image from 'next/image'
import Link from 'next/link'
import LocalizedServiceHero from '@/components/services/LocalizedServiceHero'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'get-started', label: 'Get started' },
] as const

const howItWorks = [
  {
    title: 'Convenient & accessible',
    desc: 'Telemedicine and secure messaging for quick access with fewer work interruptions — plus same- or next-day appointments for minor illness and injury.',
  },
  {
    title: 'Lower compensation costs',
    desc: 'Fast treatment helps keep minor injuries from escalating. Prevention and efficient management reduce claims and support a safer workplace.',
  },
  {
    title: 'DPC membership benefits',
    desc: 'Same-day appointments, lab support, and wellness programs with no co-pays or hidden fees — and flexible payment options for employers.',
  },
  {
    title: 'Focused employee care',
    desc: 'Wellness support for nutrition, fitness, and mental health — including resources for chronic conditions and injuries that affect productivity.',
  },
]

const businessBenefits = [
  {
    title: 'Affordable, predictable care',
    desc: 'A DPC model with clear monthly fees — often more cost-effective than traditional insurance-heavy approaches while reducing absences.',
  },
  {
    title: 'Higher employee satisfaction',
    desc: 'Healthier teams take less sick leave and stay more engaged. Easy access shows employees their wellbeing is a priority.',
  },
  {
    title: 'Easier administration',
    desc: 'Less insurance paperwork for HR. We work directly with employees on day-to-day care needs.',
  },
  {
    title: 'Care for every employee',
    desc: 'From wellness exams to chronic condition management — care shaped around the real health needs of your workforce.',
  },
]

export default function DirectPrimaryCareBusinessesContent() {
  return (
    <>
            <LocalizedServiceHero
        serviceId="businesses"
        image="/service-business.jpg"
        imageAlt="Direct primary care for businesses at StarMed Clinic"
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
                Help your team thrive —{' '}
                <span className="font-normal text-[#3BA3E8]">and your company save.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#5A6270]">
                StarMed&apos;s Direct Primary Care for businesses keeps employees healthier and more
                productive while lowering healthcare costs. We tailor services to your company&apos;s
                needs, then build an employee health plan that supports real outcomes.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
                No insurance intermediary. Clear access. Care that fits how modern teams work.
              </p>
            </div>

            <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:col-span-6 lg:min-h-[26rem]">
              <Image
                src="/service-business-photo.webp"
                alt="Employer and employee discussing StarMed Direct Primary Care for businesses"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              How it works
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              Smart healthcare for{' '}
              <span className="font-normal text-[#3BA3E8]">smarter teams.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
              Increase productivity and cut costs with Direct Primary Care that removes insurance
              friction and keeps care close to your people.
            </p>
          </div>

          <ol className="mt-12 grid list-none grid-cols-1 gap-px bg-[#D5DEEA] p-0 sm:grid-cols-2">
            {howItWorks.map((item, index) => (
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
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4 lg:sticky lg:top-[136px] lg:self-start">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                Benefits
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                How StarMed helps{' '}
                <span className="font-normal text-[#3BA3E8]">your business.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
                Better care for employees. Simpler operations for employers. A clearer path to a
                healthier, more productive workplace.
              </p>
            </div>

            <ol className="m-0 flex list-none flex-col gap-4 p-0 lg:col-span-8">
              {businessBenefits.map((item, index) => (
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

          <div className="mt-12 border border-[#D5DEEA] bg-white px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#3BA3E8]">
                  Better care, better business
                </p>
                <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight text-[#222863] sm:text-3xl">
                  Simple, affordable healthcare without insurance hassles.
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5A6270]">
                  Employees get easier access to vital care. Healthier staff means less sick leave.
                  Your company gets a straightforward DPC program built for modern teams.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Link
                  href="/#contact"
                  className="inline-flex h-11 items-center justify-center rounded-lg bg-[#222863] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52]"
                >
                  Talk with our team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get started */}
      <section id="get-started" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden border border-[#D5DEEA] lg:grid-cols-12">
            <div className="flex flex-col justify-center px-6 py-10 sm:px-8 sm:py-12 lg:col-span-6 lg:px-10">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                Get started
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                Reach out{' '}
                <span className="font-normal text-[#3BA3E8]">today.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#5A6270]">
                Thinking about Direct Primary Care for your team? Let&apos;s talk about how StarMed
                can support your company — contact us to set up a meeting and explore a plan that
                fits.
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
                src="/service-primary-photo.jpg"
                alt="StarMed clinician supporting employer Direct Primary Care members"
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
              Build a healthier team —{' '}
              <span className="font-normal text-[#7EC8F0]">start with DPC.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Contact StarMed to design an employee health plan that boosts wellness, productivity,
              and cost control.
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
