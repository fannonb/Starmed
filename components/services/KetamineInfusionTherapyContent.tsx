import Image from 'next/image'
import Link from 'next/link'
import LocalizedServiceHero from '@/components/services/LocalizedServiceHero'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'advantages', label: 'Advantages' },
  { id: 'conditions', label: 'Conditions' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'get-care', label: 'Get care' },
] as const

const advantages = [
  {
    title: 'Fast relief',
    desc: 'Many patients notice mood or pain improvement within hours or days — not weeks of waiting.',
  },
  {
    title: 'Minimally invasive',
    desc: 'Delivered intravenously with minimal recovery time in a carefully controlled clinical setting.',
  },
  {
    title: 'Better quality of life',
    desc: 'Less pain and improved mood can make daily activities, relationships, and routines feel possible again.',
  },
  {
    title: 'Safe & monitored',
    desc: 'Administered by trained clinicians who keep you informed, supported, and closely observed throughout treatment.',
  },
]

const conditions = [
  {
    title: 'Treatment-resistant depression',
    desc: 'Hope when other treatments have fallen short — with potential for rapid mood improvement.',
  },
  {
    title: 'Suicidal thoughts',
    desc: 'Life-changing support for some of the darkest moments, as part of a carefully supervised care plan.',
  },
  {
    title: 'PTSD',
    desc: 'Focused therapy that helps the mind heal from trauma and regain a greater sense of control.',
  },
  {
    title: 'Severe anxiety & panic',
    desc: 'Quicker relief for overwhelming anxiety so you can reclaim peace of mind.',
  },
  {
    title: 'Bipolar disorder',
    desc: 'Support aimed at greater emotional balance and stability when symptoms are hard to manage.',
  },
  {
    title: 'Substance use disorders',
    desc: 'A therapy option that can help support recovery for both mind and body.',
  },
  {
    title: 'Neuropathic pain',
    desc: 'Relief for nerve pain that interferes with comfort and everyday living.',
  },
  {
    title: 'Fibromyalgia',
    desc: 'Help easing chronic pain and fatigue that drain quality of life.',
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
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                Overview
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                Targeted healing with{' '}
                <span className="font-normal text-[#3BA3E8]">ketamine.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#5A6270]">
                Ketamine infusions are carefully dosed and monitored by healthcare providers. They
                target specific brain receptors to help improve mood, relieve pain, and support
                mental health — often with faster results than traditional options alone.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
                For tough cases of depression, PTSD, anxiety, and chronic pain, this therapy can be
                a strong next step when other treatments have failed.
              </p>
            </div>

            <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:col-span-6 lg:min-h-[26rem]">
              <Image
                src="/service-ketamine-photo.webp"
                alt="Ketamine infusion therapy consultation at StarMed"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
              Advantages
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              It&apos;s time to{' '}
              <span className="font-normal text-[#3BA3E8]">feel better.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
              Compassionate, personalized care — so you feel safe, supported, and informed throughout
              treatment.
            </p>
          </div>

          <ol className="mt-12 grid list-none grid-cols-1 gap-px bg-[#D5DEEA] p-0 sm:grid-cols-2">
            {advantages.map((item, index) => (
              <li key={item.title} className="flex flex-col bg-[#F4F7FB] px-6 py-8 sm:px-8 sm:py-9">
                <span className="font-serif text-3xl font-medium tabular-nums leading-none text-[#3BA3E8]">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-serif text-xl font-medium tracking-tight text-[#222863]">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-[#5A6270]">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Conditions */}
      <section id="conditions" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4 lg:sticky lg:top-[136px] lg:self-start">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                Conditions
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                What we help{' '}
                <span className="font-normal text-[#3BA3E8]">treat.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
                Therapy tailored for individuals managing severe mental health challenges and
                chronic pain conditions.
              </p>
            </div>

            <ol className="m-0 flex list-none flex-col gap-4 p-0 lg:col-span-8">
              {conditions.map((item, index) => (
                <li
                  key={item.title}
                  className="flex gap-5 rounded-xl bg-white px-5 py-6 sm:gap-6 sm:px-6 sm:py-7"
                >
                  <span
                    aria-hidden="true"
                    className="font-serif text-2xl font-medium tabular-nums leading-none text-[#3BA3E8] sm:text-3xl"
                  >
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-serif text-xl font-medium tracking-tight text-[#222863] sm:text-[1.35rem]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5A6270] sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="relative min-h-[16rem] overflow-hidden sm:min-h-[20rem] lg:col-span-5 lg:min-h-[24rem]">
              <Image
                src="/service-ketamine-care.webp"
                alt="Monitored ketamine infusion therapy at StarMed Clinic"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
            </div>

            <div className="lg:col-span-7">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                How it works
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                Feel the change you&apos;ve been{' '}
                <span className="font-normal text-[#3BA3E8]">waiting for.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#5A6270]">
                Ketamine acts on NMDA receptors in the brain that help regulate mood, learning, and
                memory. By stimulating these pathways, it can support the repair of neural
                connections and encourage new growth — especially meaningful for people living with
                chronic conditions and severe mood disorders.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#5A6270]">
                Every infusion is personalized and monitored, so treatment stays aligned with your
                goals and clinical needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get care */}
      <section id="get-care" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden border border-[#D5DEEA] bg-white lg:grid-cols-12">
            <div className="flex flex-col justify-center px-6 py-10 sm:px-8 sm:py-12 lg:col-span-6 lg:px-10">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3BA3E8]">
                Get care
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                Take the first step toward{' '}
                <span className="font-normal text-[#3BA3E8]">recovery.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#5A6270]">
                Whether you need relief from mental health challenges or chronic pain, ketamine
                infusion therapy at StarMed offers a carefully supervised path toward hope and
                healing.
              </p>
              <Link
                href="/#contact"
                className="mt-8 inline-flex h-11 w-fit items-center justify-center rounded-lg bg-[#222863] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52]"
              >
                Contact the clinic
              </Link>
            </div>
            <div className="relative min-h-[16rem] sm:min-h-[20rem] lg:col-span-6 lg:min-h-[22rem]">
              <Image
                src="/service-brain-mapping.jpg"
                alt="Brain health support connected to ketamine therapy at StarMed"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
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
              Ready for a brighter path —{' '}
              <span className="font-normal text-[#7EC8F0]">start today.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Contact us to learn whether ketamine infusion therapy is the right next step for your
              care.
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
