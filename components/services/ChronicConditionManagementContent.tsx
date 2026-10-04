import Image from 'next/image'
import LocalizedServiceHero from '@/components/services/LocalizedServiceHero'
import ServiceWaysToPay from '@/components/services/ServiceWaysToPay'

const conditions = [
  {
    title: 'Diabetes',
    desc: 'Keep your blood sugar in a healthy range.',
    points: [
      'Checking your blood sugar at home',
      'What to eat',
      'Exercise that’s safe for you',
      'Taking your medicine',
      'Handling the stress of living with diabetes',
    ],
  },
  {
    title: 'High blood pressure',
    desc: 'Bring your numbers down and keep them there.',
    points: [
      'Checking your blood pressure at home',
      'What your numbers mean',
      'Habits that lower blood pressure',
      'Taking your medicine on time',
      'Managing stress',
    ],
  },
  {
    title: 'High cholesterol',
    desc: 'Lower your cholesterol and protect your heart.',
    points: ['What your numbers mean', 'What to eat', 'Exercise', 'Your medicine, explained'],
  },
]

const ongoing = [
  {
    title: 'Regular check-ins',
    desc: 'We track your numbers so small changes get caught early.',
  },
  {
    title: 'Medicine reviews',
    desc: 'We check what you take, why you take it, and whether it still works for you.',
  },
  {
    title: 'A plan that changes with you',
    desc: 'If something isn’t working, we change it together.',
  },
  {
    title: 'Help from specialists',
    desc: 'If you need a specialist, we coordinate your care with them.',
  },
]

export default function ChronicConditionManagementContent() {
  return (
    <>
      <LocalizedServiceHero
        serviceId="chronic"
        image="/service-chronic.jpg"
        imageAlt="Chronic condition management consultation at StarMed Clinic"
        imagePosition="center 30%"
      />

      {/* Conditions we help with */}
      <section id="conditions" className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
            Conditions we help with
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#3D4452]">
            We also treat thyroid problems and other long-term conditions. Ask us about yours.
          </p>

          <ul className="mt-10 grid list-none gap-6 p-0 lg:grid-cols-3">
            {conditions.map((condition) => (
              <li
                key={condition.title}
                className="rounded-2xl bg-[#F4F7FB] px-6 py-7 sm:px-8 sm:py-8"
              >
                <h3 className="font-serif text-2xl font-medium tracking-tight text-[#222863]">
                  {condition.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#3D4452]">{condition.desc}</p>
                <p className="mt-5 border-t border-[#DCE3F0] pt-5 text-sm font-semibold text-[#222863]">
                  We help you with:
                </p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-base text-[#3D4452] marker:text-[#3BA3E8]">
                  {condition.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Care over time */}
      <section id="care-over-time" className="bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              Care that keeps going
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#3D4452]">
              Long-term conditions need more than one visit. Here&apos;s how we stay with you.
            </p>
            <ul className="mt-6 list-none divide-y divide-[#DCE3F0] p-0">
              {ongoing.map((item) => (
                <li key={item.title} className="py-4">
                  <h3 className="text-base font-semibold text-[#222863]">{item.title}</h3>
                  <p className="mt-1 text-base leading-relaxed text-[#3D4452]">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:col-span-6 lg:min-h-[26rem]">
            <Image
              src="/service-chronic-photo.jpg"
              alt="A StarMed doctor reviewing a care plan with a patient"
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
