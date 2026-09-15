import Image from 'next/image'
import Link from 'next/link'
import LocalizedServiceHero from '@/components/services/LocalizedServiceHero'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'pediatric', label: 'Pediatric' },
  { id: 'geriatric', label: 'Geriatric' },
  { id: 'why-starmed', label: 'Why StarMed' },
  { id: 'get-care', label: 'Get care' },
] as const

const pediatricServices = [
  {
    title: 'Routine checkups & immunizations',
    desc: 'Wellness visits and vaccines that protect your child from preventable illness as they grow.',
  },
  {
    title: 'Developmental screenings',
    desc: 'Close monitoring of growth and development so concerns are spotted early — and addressed with care.',
  },
  {
    title: 'Common childhood illness',
    desc: 'Quick, skilled treatment for ear infections, colds, allergies, and the ailments kids get most.',
  },
  {
    title: 'Nutrition & healthy habits',
    desc: 'Practical guidance on diet and habits that support physical and mental health through childhood.',
  },
]

const geriatricServices = [
  {
    title: 'Chronic condition management',
    desc: 'Steady support for high blood pressure, diabetes, arthritis, heart disease, and related concerns.',
  },
  {
    title: 'Fall prevention & mobility',
    desc: 'Risk assessment, home-safety advice, and guidance on aids or therapy that help seniors stay steady.',
  },
  {
    title: 'Medication management',
    desc: 'Review what you take, why you take it, and how to avoid side effects and unsafe interactions.',
  },
  {
    title: 'Comprehensive wellness exams',
    desc: 'Routine visits that screen for age-related issues and keep ongoing concerns on the radar.',
  },
]

export default function PediatricGeriatricCareContent() {
  return (
    <>
            <LocalizedServiceHero
        serviceId="pediatric-geriatric"
        image="/service-family.jpg"
        imageAlt="Family-centered pediatric and geriatric care at StarMed Clinic"
        imagePosition="center 30%"
      />

      <nav
        aria-label="On this page"
        className="sticky top-[60px] sm:top-[76px] lg:top-[88px] z-30 border-b border-[#E3E8F0] bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/90"
      >
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2.5 sm:px-6 lg:px-8">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="shrink-0 rounded-md px-3 py-2 text-sm font-medium text-[#5A6270] transition-colors hover:bg-[#F4F7FB] hover:text-[#222863]"
            >
              {section.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Overview */}
      <section id="overview" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-14">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                Overview
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                Care that grows with{' '}
                <span className="font-normal text-[#3BA3E8]">your family.</span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-[#5A6270] lg:col-span-5 lg:justify-self-end lg:text-right">
              Health needs change from childhood to later life. Our teams focus on kids and older
              adults with the same priority: attentive, personalized care.
            </p>
          </div>

          <div className="mt-12 grid gap-0 overflow-hidden border border-[#D5DEEA] bg-white lg:grid-cols-2">
            <div className="border-b border-[#D5DEEA] px-6 py-8 sm:px-8 lg:border-b-0 lg:border-r">
              <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#3BA3E8]">
                Pediatric
              </p>
              <h3 className="mt-3 font-serif text-xl font-medium tracking-tight text-[#222863]">
                Supporting healthy development
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5A6270]">
                Attentive care as children grow — checkups, vaccines, screenings, and a calm space
                where kids feel at ease.
              </p>
              <a
                href="#pediatric"
                className="mt-5 inline-flex text-sm font-semibold text-[#222863] transition-colors hover:text-[#3BA3E8]"
              >
                See pediatric services →
              </a>
            </div>
            <div className="px-6 py-8 sm:px-8">
              <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#3BA3E8]">
                Geriatric
              </p>
              <h3 className="mt-3 font-serif text-xl font-medium tracking-tight text-[#222863]">
                Kind-hearted support for seniors
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5A6270]">
                Help navigating aging safely — independence, chronic conditions, medications, and
                wellness that protect quality of life.
              </p>
              <a
                href="#geriatric"
                className="mt-5 inline-flex text-sm font-semibold text-[#222863] transition-colors hover:text-[#3BA3E8]"
              >
                See geriatric services →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pediatric */}
      <section id="pediatric" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                Pediatric care
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                Supporting healthy{' '}
                <span className="font-normal text-[#3BA3E8]">development.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#5A6270]">
                Children need skilled, attentive care as they grow. Our pediatric services keep your
                child healthy, address concerns early, and create a comforting space where kids feel
                safe receiving care.
              </p>
            </div>
            <div className="relative min-h-[16rem] overflow-hidden sm:min-h-[20rem] lg:col-span-6 lg:min-h-[24rem]">
              <Image
                src="/service-pediatric-care.webp"
                alt="Pediatric care visit for a child at StarMed Clinic"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4 lg:sticky lg:top-[136px] lg:self-start">
              <h3 className="font-serif text-2xl font-medium tracking-tight text-[#222863] sm:text-3xl">
                Our pediatric services{' '}
                <span className="font-normal text-[#3BA3E8]">include</span>
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
                From routine wellness to everyday illness — care shaped around how children grow.
              </p>
            </div>
            <ul className="m-0 flex list-none flex-col gap-4 p-0 lg:col-span-8">
              {pediatricServices.map((item, index) => (
                <li
                  key={item.title}
                  className="flex gap-5 rounded-xl bg-[#F4F7FB] px-5 py-5 sm:gap-6 sm:px-6 sm:py-6"
                >
                  <span
                    aria-hidden="true"
                    className="font-serif text-2xl font-medium tabular-nums leading-none text-[#3BA3E8] sm:text-3xl"
                  >
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <h4 className="font-serif text-xl font-medium tracking-tight text-[#222863] sm:text-[1.35rem]">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-[#5A6270] sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bridge band */}
      <section className="bg-[#222863] py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#7EC8F0]">
              Care for all ages
            </p>
            <h2 className="mt-3 font-serif text-2xl font-medium tracking-tight text-white sm:text-3xl">
              From children to seniors — personalized care at every step.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Your family&apos;s health is our priority. One clinic, two focused teams, and plans
              built around each person&apos;s stage of life.
            </p>
          </div>
        </div>
      </section>

      {/* Geriatric */}
      <section id="geriatric" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="relative min-h-[16rem] overflow-hidden sm:min-h-[20rem] lg:col-span-6 lg:order-2 lg:min-h-[24rem]">
              <Image
                src="/service-geriatric-care.webp"
                alt="Geriatric care consultation for an older adult at StarMed Clinic"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="lg:col-span-6 lg:order-1">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                Geriatric care
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                Kind-hearted support{' '}
                <span className="font-normal text-[#3BA3E8]">for seniors.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#5A6270]">
                As we age, healthcare needs change. StarMed helps older adults navigate those
                changes safely — staying independent, managing chronic conditions, and protecting
                quality of life.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4 lg:sticky lg:top-[136px] lg:self-start">
              <h3 className="font-serif text-2xl font-medium tracking-tight text-[#222863] sm:text-3xl">
                Our geriatric services{' '}
                <span className="font-normal text-[#3BA3E8]">include</span>
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
                Practical support for the concerns that matter most as adults grow older.
              </p>
            </div>
            <ul className="m-0 flex list-none flex-col gap-4 p-0 lg:col-span-8">
              {geriatricServices.map((item, index) => (
                <li
                  key={item.title}
                  className="flex gap-5 rounded-xl bg-white px-5 py-5 sm:gap-6 sm:px-6 sm:py-6"
                >
                  <span
                    aria-hidden="true"
                    className="font-serif text-2xl font-medium tabular-nums leading-none text-[#3BA3E8] sm:text-3xl"
                  >
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <h4 className="font-serif text-xl font-medium tracking-tight text-[#222863] sm:text-[1.35rem]">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-[#5A6270] sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why StarMed */}
      <section id="why-starmed" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              Why StarMed
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              One place for kids{' '}
              <span className="font-normal text-[#3BA3E8]">and seniors.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
              Our team focuses on each person&apos;s unique needs and goals — crafting plans that
              keep children safe and treat older adults with respect. Routine checkups and chronic
              care, all under one roof, with skill and kindness.
            </p>
          </div>

          <ol className="mt-12 grid list-none grid-cols-1 gap-px bg-[#D5DEEA] p-0 sm:grid-cols-3">
            {[
              {
                title: 'Age-aware care',
                desc: 'Plans shaped around childhood development or senior independence — not a generic checklist.',
              },
              {
                title: 'Family continuity',
                desc: 'Kids and grandparents can be seen in the same clinic with coordinated, familiar clinicians.',
              },
              {
                title: 'Respectful visits',
                desc: 'Calm spaces for children and unhurried, dignified appointments for older adults.',
              },
            ].map((item, index) => (
              <li key={item.title} className="flex flex-col bg-[#F4F7FB] px-6 py-8 sm:px-7">
                <span className="font-serif text-3xl font-medium tabular-nums leading-none text-[#3BA3E8]">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-serif text-xl font-medium tracking-tight text-[#222863]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5A6270]">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Get care */}
      <section id="get-care" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              Get care
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              Book a visit for your{' '}
              <span className="font-normal text-[#3BA3E8]">family.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#5A6270]">
              Need a child checkup or support for a senior family member? Contact StarMed — we&apos;re
              ready to meet you and explain how complete, age-aware care works here.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-lg bg-[#222863] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52]"
            >
              Contact the clinic
            </Link>
          </div>

          <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:col-span-6 lg:min-h-[26rem]">
            <Image
              src="/service-pediatric.jpg"
              alt="StarMed clinician providing family-centered care"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section
        className="py-14 sm:py-16 lg:py-20"
        style={{
          background: 'linear-gradient(120deg, #1a1f4a 0%, #222863 48%, #2a5f8f 100%)',
        }}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:px-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl lg:leading-[1.12]">
              Complete care for all ages —{' '}
              <span className="font-normal text-[#7EC8F0]">start today.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              From routine child checkups to senior support, StarMed is ready when your family needs
              us.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-[#222863] transition-colors hover:bg-[#EAF4FC]"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  )
}
