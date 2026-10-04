import Image from 'next/image'
import LocaleLink from '@/components/layout/LocaleLink'
import LocalizedServiceHero from '@/components/services/LocalizedServiceHero'
import { clinic } from '@/data/clinic'

const employeePerks = [
  { title: 'Same-day or next-day visits', desc: 'For sickness and minor injuries.' },
  { title: 'Video visits and messaging', desc: 'Quick answers without leaving work.' },
  { title: 'Lab work', desc: 'Tests when they need them.' },
  { title: 'No co-pays', desc: 'No co-pays or hidden fees.' },
  {
    title: 'Wellness support',
    desc: 'Help with nutrition, fitness, mental health, and long-term conditions.',
  },
]

const businessPerks = [
  { title: 'Predictable costs', desc: 'One clear monthly fee, instead of surprise bills.' },
  { title: 'Fewer sick days', desc: 'Quick care keeps small problems from turning into time off.' },
  {
    title: 'Fewer injury claims',
    desc: 'Fast treatment keeps minor workplace injuries from getting worse.',
  },
  { title: 'Less paperwork for HR', desc: 'We work directly with your employees on their care.' },
]

const steps = [
  { title: 'Talk with us', desc: 'Tell us about your team and what you need.' },
  { title: 'We build your plan', desc: 'A membership that fits your company and budget.' },
  { title: 'Your team starts care', desc: 'Employees book visits directly with us.' },
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
      <DirectPrimaryCareBusinessesBody />
    </>
  )
}

/** Page body below the hero — shared with the /care/employers pathway page. */
export function DirectPrimaryCareBusinessesBody() {
  return (
    <>
      {/* What your employees get */}
      <section id="employees" className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              What your employees get
            </h2>
            <ul className="mt-6 list-none divide-y divide-[#DCE3F0] p-0">
              {employeePerks.map((item) => (
                <li key={item.title} className="py-4">
                  <h3 className="text-base font-semibold text-[#222863]">{item.title}</h3>
                  <p className="mt-1 text-base leading-relaxed text-[#3D4452]">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:col-span-6 lg:min-h-[28rem]">
            <Image
              src="/service-business-photo.webp"
              alt="A StarMed doctor with an employee patient"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* What your business gets */}
      <section id="business" className="bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
            What your business gets
          </h2>
          <ul className="mt-10 grid list-none gap-6 p-0 sm:grid-cols-2">
            {businessPerks.map((item) => (
              <li key={item.title} className="rounded-2xl bg-white px-6 py-7 sm:px-8">
                <h3 className="font-serif text-xl font-medium tracking-tight text-[#222863] sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#3D4452]">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to get started */}
      <section id="get-started" className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6 lg:order-2">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              How to get started
            </h2>
            <ol className="mt-8 list-none space-y-6 p-0">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-5">
                  <span className="font-serif text-3xl font-medium tabular-nums leading-none text-[#3BA3E8]">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[#222863]">{step.title}</h3>
                    <p className="mt-1 text-base leading-relaxed text-[#3D4452]">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <LocaleLink
                href="/contact"
                className="inline-flex h-11 items-center rounded-lg bg-[#222863] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52]"
              >
                Talk with our team
              </LocaleLink>
              <a
                href={clinic.phoneHref}
                className="inline-flex h-11 items-center rounded-lg border border-[#D5DEEA] bg-white px-5 text-sm font-semibold text-[#222863] transition-colors hover:border-[#222863]"
              >
                {clinic.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:col-span-6 lg:order-1 lg:min-h-[26rem]">
            <Image
              src="/service-primary-photo.jpg"
              alt="A StarMed doctor meeting with a patient"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>
    </>
  )
}
