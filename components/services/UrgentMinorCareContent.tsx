import Image from 'next/image'
import LocalizedServiceHero from '@/components/services/LocalizedServiceHero'
import ServiceWaysToPay from '@/components/services/ServiceWaysToPay'
import { clinic } from '@/data/clinic'

const treatGroups = [
  {
    title: 'Illness and injury',
    items: [
      { title: 'Colds, flu & infections', desc: 'Fever, sore throat, ear infections, and more.' },
      { title: 'Cuts, sprains & burns', desc: 'Minor injuries checked and treated here.' },
      { title: 'Wound care', desc: 'Cleaning and dressing minor wounds.' },
      { title: 'Allergies & rashes', desc: 'Mild allergic reactions and skin rashes.' },
      { title: 'Mild breathing problems', desc: 'Including asthma flare-ups.' },
      { title: 'Tests on site', desc: 'Quick tests to find out what’s wrong.' },
    ],
  },
  {
    title: 'Small procedures',
    items: [
      { title: 'Stitches', desc: 'Closing cuts so they heal cleanly.' },
      { title: 'Draining an abscess', desc: 'Opening a painful, swollen skin infection so it can heal.' },
      { title: 'Splints', desc: 'Support for minor broken bones.' },
      { title: 'Removing splinters & objects', desc: 'Taking out things stuck in your skin.' },
      { title: 'Warts & skin tags', desc: 'Removed in the clinic.' },
      { title: 'Joint injections', desc: 'A shot into a sore joint to ease pain.' },
    ],
  },
]

const emergencies = [
  'Chest pain',
  'Severe trouble breathing',
  'Heavy bleeding',
  'Signs of a stroke: face drooping, arm weakness, slurred speech',
  'Serious injuries',
]

const steps = [
  {
    title: 'Call us',
    desc: `Tell us what’s wrong at ${clinic.phoneDisplay}. We’ll find you a time today or tomorrow.`,
  },
  {
    title: 'Come in',
    desc: 'We examine you, run any tests you need, and treat you.',
  },
  {
    title: 'Go home with a plan',
    desc: 'You leave knowing what to do next, with follow-up if you need it.',
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

      {/* What we treat */}
      <section id="what-we-treat" className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
            What we treat
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#3D4452]">
            Everyday illnesses and injuries that need a doctor soon, but aren&apos;t emergencies.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {treatGroups.map((group) => (
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

          {/* Emergency warning */}
          <div className="mt-6 rounded-2xl border-2 border-[#C62828] bg-[#FDF3F3] px-6 py-7 sm:px-8">
            <h3 className="font-serif text-2xl font-medium tracking-tight text-[#8E1C1C]">
              Call{' '}
              <a href="tel:911" className="underline underline-offset-4">
                911
              </a>{' '}
              for an emergency
            </h3>
            <p className="mt-2 text-base leading-relaxed text-[#3D4452]">
              We don&apos;t treat emergencies. Go to the ER or call 911 for:
            </p>
            <ul className="mt-4 grid list-disc gap-x-10 gap-y-2 pl-5 text-base text-[#251719] marker:text-[#C62828] sm:grid-cols-2">
              {emergencies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How to get seen */}
      <section id="how-to-get-seen" className="bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              How to get seen
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
            <p className="mt-8 text-sm text-[#5A6270]">Open Mon–Fri, 8 AM – 5 PM.</p>
            <a
              href={clinic.phoneHref}
              className="mt-4 inline-flex h-11 items-center rounded-lg bg-[#222863] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52]"
            >
              Call {clinic.phoneDisplay}
            </a>
          </div>

          <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:col-span-6 lg:min-h-[26rem]">
            <Image
              src="/service-urgent-photo.jpg"
              alt="A StarMed doctor treating a patient"
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
