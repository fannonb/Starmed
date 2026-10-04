import Image from 'next/image'
import LocaleLink from '@/components/layout/LocaleLink'
import LocalizedServiceHero from '@/components/services/LocalizedServiceHero'
import ServiceWaysToPay from '@/components/services/ServiceWaysToPay'

const facts = [
  { title: 'Can work quickly', desc: 'Some people feel better within hours or days.' },
  { title: 'Watched the whole time', desc: 'Trained staff monitor you during every infusion.' },
  { title: 'Little recovery time', desc: 'Most people get back to their day soon after.' },
]

const conditionGroups = [
  {
    title: 'Mental health',
    items: [
      'Depression that hasn’t improved with other treatment',
      'Suicidal thoughts',
      'PTSD',
      'Severe anxiety and panic',
      'Bipolar disorder',
      'Substance use',
    ],
  },
  {
    title: 'Chronic pain',
    items: ['Nerve pain', 'Fibromyalgia'],
  },
]

const steps = [
  {
    title: 'Talk with us first',
    desc: 'We review your health and past treatments to see if ketamine is right for you.',
  },
  {
    title: 'Your infusions',
    desc: 'You rest while the medicine is given through an IV. We monitor you the whole time.',
  },
  {
    title: 'Follow-up',
    desc: 'We check how you’re doing and adjust your plan.',
  },
]

export default function KetamineInfusionTherapyContent() {
  return (
    <>
      <LocalizedServiceHero
        serviceId="ketamine"
        image="/service-ketamine.jpg"
        imageAlt="Ketamine infusion therapy at StarMed Clinic"
        imagePosition="center 30%"
      />

      {/* What it is */}
      <section id="what-it-is" className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              What it is
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#3D4452]">
              Ketamine is a medicine given slowly through an IV, a small tube in your arm. In low,
              carefully controlled doses, it can ease depression and pain, sometimes faster than
              other treatments.
            </p>
            <ul className="mt-6 list-none divide-y divide-[#DCE3F0] p-0">
              {facts.map((item) => (
                <li key={item.title} className="py-4">
                  <h3 className="text-base font-semibold text-[#222863]">{item.title}</h3>
                  <p className="mt-1 text-base leading-relaxed text-[#3D4452]">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:col-span-6 lg:min-h-[26rem]">
            <Image
              src="/service-ketamine-photo.webp"
              alt="A ketamine infusion at StarMed Clinic"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Who it may help */}
      <section id="who-it-may-help" className="bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
            Who it may help
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#3D4452]">
            Ketamine is usually for people who have tried other treatments without enough relief.
          </p>

          <div className="mt-10 grid items-start gap-6 lg:grid-cols-3">
            {conditionGroups.map((group, index) => (
              <div
                key={group.title}
                className={`rounded-2xl bg-white px-6 py-7 sm:px-8 ${index === 0 ? 'lg:col-span-2' : ''}`}
              >
                <h3 className="font-serif text-2xl font-medium tracking-tight text-[#222863]">
                  {group.title}
                </h3>
                <ul
                  className={`mt-4 grid list-disc gap-x-10 gap-y-2.5 pl-5 text-base text-[#3D4452] marker:text-[#3BA3E8] ${
                    index === 0 ? 'sm:grid-cols-2' : ''
                  }`}
                >
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <LocaleLink
            href="/services/mental-wellness"
            className="mt-6 inline-flex text-sm font-semibold text-[#222863] transition-colors hover:text-[#3BA3E8]"
          >
            See our other mental health treatments →
          </LocaleLink>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6 lg:order-2">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              How it works
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
          </div>

          <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:col-span-6 lg:order-1 lg:min-h-[26rem]">
            <Image
              src="/service-ketamine-care.webp"
              alt="A StarMed clinician checking on a patient during treatment"
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
