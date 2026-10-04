import Image from 'next/image'
import LocaleLink from '@/components/layout/LocaleLink'
import LocalizedServiceHero from '@/components/services/LocalizedServiceHero'
import ServiceWaysToPay from '@/components/services/ServiceWaysToPay'

const includedGroups = [
  {
    title: 'Tests we may run',
    items: [
      { title: 'Blood pressure', desc: 'Checks if your blood pressure is too high.' },
      { title: 'Cholesterol', desc: 'A blood test that shows your risk of heart disease.' },
      { title: 'Blood sugar', desc: 'Checks for diabetes or prediabetes.' },
      { title: 'Cancer screening', desc: 'Tests that find cancer early, based on your age.' },
    ],
  },
  {
    title: 'Help to stay healthy',
    items: [
      { title: 'Vaccines', desc: 'Flu shots, routine vaccines, and shots for travel.' },
      { title: 'Diet, exercise & sleep', desc: 'Simple advice you can actually follow.' },
      { title: 'Mental health', desc: 'A short check on your mood and stress.' },
    ],
  },
]

const steps = [
  {
    title: 'Book',
    desc: 'Online or by phone. If you’re using insurance, we check your benefits first.',
  },
  {
    title: 'Your visit',
    desc: 'An unhurried exam, your history, and any tests you need.',
  },
  {
    title: 'Your plan',
    desc: 'We explain your results in plain language and set your next checkup.',
  },
]

export default function PrimaryPreventiveCareContent() {
  return (
    <>
      <LocalizedServiceHero
        serviceId="primary"
        image="/service-primary.jpg"
        imageAlt="A StarMed clinician providing primary and preventive care"
        imagePosition="center 28%"
      />

      {/* What's included */}
      <section id="whats-included" className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
            What&apos;s included
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#3D4452]">
            Every visit starts with a full checkup: an exam and a talk about your health. Your
            doctor then adds what fits your age and health.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {includedGroups.map((group) => (
              <div key={group.title} className="rounded-2xl bg-[#F4F7FB] px-6 py-7 sm:px-8 sm:py-8">
                <h3 className="font-serif text-2xl font-medium tracking-tight text-[#222863]">
                  {group.title}
                </h3>
                <ul className="mt-4 list-none divide-y divide-[#DCE3F0] p-0">
                  {group.items.map((item) => (
                    <li key={item.title} className="py-4 last:pb-0">
                      <p className="text-base font-semibold text-[#222863]">{item.title}</p>
                      <p className="mt-1 text-base leading-relaxed text-[#3D4452]">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section id="what-to-expect" className="bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
            What to expect
          </h2>
          <ol className="mt-10 grid list-none gap-px bg-[#D5DEEA] p-0 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="bg-white px-6 py-8 sm:px-8">
                <span className="font-serif text-3xl font-medium tabular-nums leading-none text-[#3BA3E8]">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-serif text-xl font-medium tracking-tight text-[#222863]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5A6270]">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Who it's for */}
      <section id="who-its-for" className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              Who it&apos;s for
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#5A6270]">
              Men, women, and children. Your checkup plan changes as you do, so the care you get
              at 30 isn&apos;t the same as at 60.
            </p>
            <LocaleLink
              href="/services/pediatric-and-geriatric-care"
              className="mt-6 inline-flex text-sm font-semibold text-[#222863] transition-colors hover:text-[#3BA3E8]"
            >
              Care for kids and older adults →
            </LocaleLink>
          </div>

          <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:col-span-6 lg:min-h-[24rem]">
            <Image
              src="/service-wellness.jpg"
              alt="A StarMed doctor talking with a patient"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <ServiceWaysToPay />
    </>
  )
}
