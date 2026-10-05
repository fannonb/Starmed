import Image from 'next/image'
import LocalizedServiceHero from '@/components/services/LocalizedServiceHero'
import ServiceWaysToPay from '@/components/services/ServiceWaysToPay'

const techniques = [
  { title: 'Stretching', desc: 'Gently loosens tight muscles.' },
  { title: 'Pressure', desc: 'Relaxes tense muscles so you move more freely.' },
  { title: 'Joint movement', desc: 'Eases stiffness so your joints move more easily.' },
  {
    title: 'Push-back movements',
    desc: 'You push gently against your doctor’s hand to release tension.',
  },
]

const conditionGroups = [
  {
    title: 'Pain and injuries',
    items: [
      'Back, neck, shoulder, and hip pain',
      'Sprains, strains, and sports injuries',
      'Arthritis and joint pain',
      'Fibromyalgia',
    ],
  },
  {
    title: 'Headaches and jaw pain',
    items: ['Migraines', 'Tension headaches', 'Jaw pain (TMJ)'],
  },
  {
    title: 'During pregnancy',
    items: ['Swelling', 'Sciatica (pain down the back of the leg)', 'Trouble sleeping'],
  },
  {
    title: 'Other problems',
    items: [
      'Asthma and sinus problems',
      'Bloating and digestive problems',
      'Carpal tunnel (numb or tingling hands)',
      'Poor posture',
      'Ongoing tiredness',
    ],
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

      {/* What it is */}
      <section id="what-it-is" className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              What it is
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#3D4452]">
              OMT is hands-on treatment from an osteopathic doctor (DO). Your doctor uses their
              hands to ease pain and help you move better. No needles, no medicine.
            </p>
            <ul className="mt-6 list-none divide-y divide-[#DCE3F0] p-0">
              {techniques.map((item) => (
                <li key={item.title} className="py-4">
                  <h3 className="font-sans text-lg font-bold leading-snug tracking-tight text-[#222863]">{item.title}</h3>
                  <p className="mt-1 text-base leading-relaxed text-[#3D4452]">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:col-span-6 lg:min-h-[28rem]">
            <Image
              src="/service-omt-photo.webp"
              alt="A StarMed doctor giving hands-on osteopathic treatment"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* What it can help with */}
      <section id="conditions" className="bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
            What it can help with
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#3D4452]">
            Not sure if OMT is right for your problem? Ask us.
          </p>

          <div className="mt-10 grid items-start gap-6 sm:grid-cols-2">
            {conditionGroups.map((group) => (
              <div key={group.title} className="rounded-2xl bg-white px-6 py-7 sm:px-8">
                <h3 className="font-serif text-2xl font-medium tracking-tight text-[#222863]">
                  {group.title}
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-[#3D4452] marker:text-[#3BA3E8]">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceWaysToPay />
    </>
  )
}
