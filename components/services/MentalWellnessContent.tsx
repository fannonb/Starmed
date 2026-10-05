import Image from 'next/image'
import LocaleLink from '@/components/layout/LocaleLink'
import LocalizedServiceHero from '@/components/services/LocalizedServiceHero'
import ServiceWaysToPay from '@/components/services/ServiceWaysToPay'

const treatments = [
  {
    title: 'Talk therapy',
    desc: 'Talk with a counselor about what you’re going through and learn ways to cope.',
  },
  {
    title: 'Medicine',
    desc: 'If you need it, we prescribe it and check in to make sure it’s working and safe.',
  },
  {
    title: 'Neurofeedback & biofeedback',
    desc: 'Painless training that helps you control stress, focus, and emotions.',
  },
  {
    title: 'Brain mapping',
    desc: 'A painless test that records your brain’s activity to help us choose the right treatment.',
  },
  {
    title: 'Ketamine therapy',
    desc: 'For depression, anxiety, or PTSD that hasn’t improved with other treatment.',
    href: '/services/ketamine-infusion-therapy',
  },
]

const conditions = [
  'Depression',
  'Anxiety',
  'Stress & grief',
  'PTSD',
  'Bipolar disorder',
  'ADHD',
  'OCD',
  'Eating disorders',
  'Schizophrenia',
  'Substance use',
]

const steps = [
  {
    title: 'We listen',
    desc: 'Your first visit is a conversation about what you’re going through.',
  },
  {
    title: 'We make a plan',
    desc: 'Therapy, medicine, or other treatments, on their own or together.',
  },
  {
    title: 'We stay with you',
    desc: 'Regular follow-ups to see what’s working and change what isn’t.',
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

      {/* Ways we help */}
      <section id="treatments" className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              Ways we help
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#3D4452]">
              We match the treatment to you. Many people use more than one.
            </p>
            <ul className="mt-6 list-none divide-y divide-[#DCE3F0] p-0">
              {treatments.map((item) => (
                <li key={item.title} className="py-4">
                  <h3 className="font-sans text-lg font-bold leading-snug tracking-tight text-[#222863]">
                    {item.href ? (
                      <LocaleLink
                        href={item.href}
                        className="underline decoration-[#3BA3E8]/50 underline-offset-4 transition-colors hover:text-[#3BA3E8]"
                      >
                        {item.title}
                      </LocaleLink>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="mt-1 text-base leading-relaxed text-[#3D4452]">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:col-span-6 lg:min-h-[30rem]">
            <Image
              src="/service-mental-photo.webp"
              alt="A StarMed counselor talking with a patient"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Conditions we treat */}
      <section id="conditions" className="bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
            Conditions we treat
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#3D4452]">
            Don&apos;t see yours? Ask us.
          </p>
          <ul className="mt-8 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 lg:grid-cols-5">
            {conditions.map((condition) => (
              <li
                key={condition}
                className="rounded-xl bg-white px-4 py-4 text-base font-semibold text-[#222863]"
              >
                {condition}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it starts */}
      <section id="how-it-starts" className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6 lg:order-2">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              How it starts
            </h2>
            <ol className="mt-8 list-none space-y-6 p-0">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-5">
                  <span className="font-serif text-3xl font-medium tabular-nums leading-none text-[#3BA3E8]">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-sans text-lg font-bold leading-snug tracking-tight text-[#222863]">{step.title}</h3>
                    <p className="mt-1 text-base leading-relaxed text-[#3D4452]">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:col-span-6 lg:order-1 lg:min-h-[26rem]">
            <Image
              src="/service-brain-mapping.jpg"
              alt="Brain mapping at StarMed Clinic"
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
