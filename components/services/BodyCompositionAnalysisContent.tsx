import Image from 'next/image'
import LocaleLink from '@/components/layout/LocaleLink'
import LocalizedServiceHero from '@/components/services/LocalizedServiceHero'
import ServiceWaysToPay from '@/components/services/ServiceWaysToPay'

const measures = [
  { title: 'Muscle', desc: 'How much muscle you have. Muscle keeps you strong and burns energy.' },
  { title: 'Body fat', desc: 'How much fat you carry and where it sits.' },
  { title: 'Bone density', desc: 'How strong your bones are.' },
  { title: 'Water', desc: 'How well hydrated your body is.' },
]

const audiences = [
  {
    title: 'People losing weight',
    desc: 'See whether you’re losing fat or muscle, and adjust your plan.',
  },
  {
    title: 'Athletes and active people',
    desc: 'Set training goals and track real progress.',
  },
  {
    title: 'People at risk of long-term illness',
    desc: 'High body fat and low muscle raise the risk of heart disease, diabetes, and weak bones.',
  },
  {
    title: 'Anyone who wants a clearer picture',
    desc: 'Learn more than a scale or BMI can tell you.',
  },
]

const steps = [
  {
    title: 'We talk about your goals',
    desc: 'A short chat about your health history and what you want to achieve.',
  },
  {
    title: 'You have the scan',
    desc: 'Quick and painless. Nothing goes into your body.',
  },
  {
    title: 'We make a plan',
    desc: 'We explain your results and give you diet and exercise advice that fits your goals.',
  },
]

export default function BodyCompositionAnalysisContent() {
  return (
    <>
      <LocalizedServiceHero
        serviceId="body-composition"
        image="/service-bodycomp.jpg"
        imageAlt="Body composition analysis at StarMed Clinic"
        imagePosition="center 30%"
      />

      {/* What it measures */}
      <section id="what-it-measures" className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              What it measures
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#3D4452]">
              A regular scale only shows your total weight. This scan breaks it down.
            </p>
            <ul className="mt-6 list-none divide-y divide-[#DCE3F0] p-0">
              {measures.map((item) => (
                <li key={item.title} className="py-4">
                  <h3 className="text-base font-semibold text-[#222863]">{item.title}</h3>
                  <p className="mt-1 text-base leading-relaxed text-[#3D4452]">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:col-span-6 lg:min-h-[26rem]">
            <Image
              src="/service-bodycomp-photo.webp"
              alt="Body composition scan results at StarMed"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Who it helps */}
      <section id="who-it-helps" className="bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
            Who it helps
          </h2>
          <ul className="mt-10 grid list-none gap-6 p-0 sm:grid-cols-2">
            {audiences.map((item) => (
              <li key={item.title} className="rounded-2xl bg-white px-6 py-7 sm:px-8">
                <h3 className="font-serif text-xl font-medium tracking-tight text-[#222863] sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#3D4452]">{item.desc}</p>
              </li>
            ))}
          </ul>
          <LocaleLink
            href="/services/weight-loss-management"
            className="mt-6 inline-flex text-sm font-semibold text-[#222863] transition-colors hover:text-[#3BA3E8]"
          >
            Working on weight loss? See weight loss management →
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
              src="/service-weight.jpg"
              alt="A StarMed clinician going over body composition results with a patient"
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
