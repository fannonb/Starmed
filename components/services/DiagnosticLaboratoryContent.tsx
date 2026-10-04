import Image from 'next/image'
import LocalizedServiceHero from '@/components/services/LocalizedServiceHero'
import ServiceWaysToPay from '@/components/services/ServiceWaysToPay'

type TestGroup = {
  title: string
  desc: string
  items: { title: string; desc: string }[]
}

const labTests: TestGroup = {
  title: 'Blood tests',
  desc: 'Lab work that finds problems early.',
  items: [
    { title: 'Cholesterol', desc: 'Shows your risk of heart disease.' },
    { title: 'Blood sugar', desc: 'Checks for diabetes or prediabetes.' },
    { title: 'Screening tests', desc: 'Help find conditions like heart disease or cancer early.' },
  ],
}

const heartLungTests: TestGroup = {
  title: 'Heart & lung tests',
  desc: 'Quick tests of how your heart and lungs work.',
  items: [
    { title: 'EKG', desc: 'Checks your heartbeat for problems like an irregular rhythm.' },
    { title: 'Breathing test (spirometry)', desc: 'Checks for asthma, COPD, and other lung problems.' },
  ],
}

const imaging: TestGroup = {
  title: 'Scans & imaging',
  desc: 'Pictures of the inside of your body.',
  items: [
    { title: 'X-ray', desc: 'Checks bones and joints for breaks and other problems.' },
    { title: 'Ultrasound', desc: 'Looks at your organs and blood flow.' },
    { title: 'CT scan', desc: 'Detailed pictures to find injuries, infections, or tumors.' },
    { title: 'MRI', desc: 'Detailed pictures of the brain, muscles, joints, and heart.' },
    {
      title: 'Bone density scan (DEXA)',
      desc: 'Checks for weak bones (osteoporosis) and your risk of breaking one.',
    },
  ],
}

const steps = [
  {
    title: 'Your doctor orders the test',
    desc: 'Only the tests you need, based on your symptoms and health.',
  },
  {
    title: 'We explain your results',
    desc: 'In plain language, in person or by video.',
  },
  {
    title: 'We agree on next steps',
    desc: 'Treatment, a follow-up, or nothing more to do.',
  },
]

function TestBox({ group }: { group: TestGroup }) {
  return (
    <div className="rounded-2xl bg-[#F4F7FB] px-6 py-7 sm:px-8 sm:py-8">
      <h3 className="font-serif text-2xl font-medium tracking-tight text-[#222863]">
        {group.title}
      </h3>
      <p className="mt-1 text-base text-[#5A6270]">{group.desc}</p>
      <ul className="mt-4 list-none divide-y divide-[#DCE3F0] p-0">
        {group.items.map((item) => (
          <li key={item.title} className="py-4 last:pb-0">
            <p className="text-base font-semibold text-[#222863]">{item.title}</p>
            <p className="mt-1 text-base leading-relaxed text-[#3D4452]">{item.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function DiagnosticLaboratoryContent() {
  return (
    <>
      <LocalizedServiceHero
        serviceId="diagnostics"
        image="/service-diagnostics.jpg"
        imageAlt="Diagnostic and laboratory services at StarMed Clinic"
        imagePosition="center 30%"
      />

      {/* Tests we offer */}
      <section id="tests" className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
            Tests we offer
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#3D4452]">
            Your doctor will tell you which tests you need and why.
          </p>

          <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
            <div className="grid gap-6">
              <TestBox group={labTests} />
              <TestBox group={heartLungTests} />
            </div>
            <TestBox group={imaging} />
          </div>
        </div>
      </section>

      {/* After your test */}
      <section id="after-your-test" className="bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6">
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

          <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:col-span-6 lg:min-h-[26rem]">
            <Image
              src="/service-diagnostics-live.webp"
              alt="Lab testing at StarMed Clinic"
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
