import Image from 'next/image'
import LocalizedServiceHero from '@/components/services/LocalizedServiceHero'
import ServiceWaysToPay from '@/components/services/ServiceWaysToPay'

const exams = [
  {
    title: 'Yearly physical',
    who: 'For adults',
    desc: 'A full exam to check your health and catch problems early.',
  },
  {
    title: 'Women’s wellness exam',
    who: 'For women',
    desc: 'Breast and pelvic exams, plus checks that fit your age.',
  },
  {
    title: 'School, sports & camp physicals',
    who: 'For kids and teens',
    desc: 'We make sure your child is healthy enough to play and take part.',
  },
  {
    title: 'Work & travel physicals',
    who: 'For adults',
    desc: 'For a new job or an upcoming trip.',
  },
]

const steps = [
  {
    title: 'We talk',
    desc: 'About your health history, your family’s health, and anything that worries you.',
  },
  {
    title: 'We check',
    desc: 'Your height, weight, blood pressure, and other vital signs, then a physical exam.',
  },
  {
    title: 'We explain',
    desc: 'What we found and what to do next. If something needs a closer look, we tell you clearly.',
  },
]

export default function PhysicalWellnessExamsContent() {
  return (
    <>
      <LocalizedServiceHero
        serviceId="wellness-exams"
        image="/service-wellness.jpg"
        imageAlt="Physical and wellness exam at StarMed Clinic"
        imagePosition="center 28%"
      />

      {/* Exams we offer */}
      <section id="exams" className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
            Exams we offer
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#3D4452]">
            Not sure which one you need? Call us and we&apos;ll help you choose.
          </p>

          <ul className="mt-10 grid list-none gap-6 p-0 sm:grid-cols-2">
            {exams.map((exam) => (
              <li key={exam.title} className="rounded-2xl bg-[#F4F7FB] px-6 py-7 sm:px-8 sm:py-8">
                <p className="text-sm font-semibold text-[#3BA3E8]">{exam.who}</p>
                <h3 className="mt-1 font-serif text-2xl font-medium tracking-tight text-[#222863]">
                  {exam.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#3D4452]">{exam.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What happens at your exam */}
      <section id="what-happens" className="bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              What happens at your exam
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

          <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:col-span-6 lg:min-h-[26rem]">
            <Image
              src="/service-pediatric.jpg"
              alt="A child getting a physical at StarMed"
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
