import Image from 'next/image'
import LocaleLink from '@/components/layout/LocaleLink'
import LocalizedServiceHero from '@/components/services/LocalizedServiceHero'
import ServiceWaysToPay from '@/components/services/ServiceWaysToPay'

const planParts = [
  {
    title: 'Body composition scan',
    desc: 'We measure fat and muscle, not just weight.',
    href: '/services/body-composition-analysis',
  },
  { title: 'Eating plan', desc: 'Simple food advice you can stick to.' },
  { title: 'Exercise plan', desc: 'Activity that fits your fitness level and health.' },
  { title: 'Habit coaching', desc: 'Find what’s causing weight gain and change it for good.' },
  { title: 'Weight-loss medicine', desc: 'Prescribed and monitored by your doctor, if it’s right for you.' },
]

const steps = [
  {
    title: 'Your first visit',
    desc: 'We review your health and find out what’s behind your weight gain.',
  },
  {
    title: 'Your plan',
    desc: 'We put together the parts that fit your goals and your life.',
  },
  {
    title: 'Regular check-ins',
    desc: 'We track your progress and adjust your plan as you go.',
  },
]

export default function WeightLossManagementContent() {
  return (
    <>
      <LocalizedServiceHero
        serviceId="weight-loss"
        image="/service-weight.jpg"
        imageAlt="Weight loss management consultation at StarMed Clinic"
        imagePosition="center 32%"
      />

      {/* What's in your plan */}
      <section id="your-plan" className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              What&apos;s in your plan
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#3D4452]">
              Losing weight lowers your risk of diabetes, heart disease, and high blood pressure,
              and makes moving easier.
            </p>
            <ul className="mt-6 list-none divide-y divide-[#DCE3F0] p-0">
              {planParts.map((item) => (
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
              src="/service-weight-photo.webp"
              alt="A StarMed doctor planning weight loss with a patient"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
            How it works
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
                <p className="mt-2 text-base leading-relaxed text-[#3D4452]">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ServiceWaysToPay />
    </>
  )
}
