import Image from 'next/image'
import LocaleLink from '@/components/layout/LocaleLink'
import LocalizedServiceHero from '@/components/services/LocalizedServiceHero'
import ServiceWaysToPay from '@/components/services/ServiceWaysToPay'

const audiences = [
  {
    id: 'children',
    title: 'Care for children',
    who: 'For kids and teens',
    desc: 'Checkups, vaccines, and care when your child gets sick.',
    image: '/service-pediatric-care.webp',
    imageAlt: 'A child at a checkup at StarMed Clinic',
    items: [
      {
        title: 'Checkups & vaccines',
        desc: 'Regular visits and shots to protect your child as they grow.',
      },
      {
        title: 'Growth & development',
        desc: 'We track how your child is growing and catch concerns early.',
      },
      {
        title: 'Everyday illness',
        desc: 'Ear infections, colds, allergies, and other common problems.',
      },
      {
        title: 'Healthy eating & habits',
        desc: 'Simple advice on food and healthy habits.',
      },
    ],
  },
  {
    id: 'older-adults',
    title: 'Care for older adults',
    who: 'For seniors',
    desc: 'Help staying healthy, safe, and independent as you age.',
    image: '/service-geriatric-care.webp',
    imageAlt: 'An older adult talking with a StarMed doctor',
    items: [
      {
        title: 'Long-term conditions',
        desc: 'High blood pressure, diabetes, arthritis, and heart disease.',
      },
      {
        title: 'Preventing falls',
        desc: 'We check your risk, share home-safety tips, and suggest aids or therapy if needed.',
      },
      {
        title: 'Medicine reviews',
        desc: 'We go over everything you take to avoid side effects and unsafe combinations.',
      },
      {
        title: 'Regular checkups',
        desc: 'Screenings for health problems that come with age.',
      },
    ],
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

      {audiences.map((audience, index) => {
        const imageFirst = index % 2 === 1

        return (
          <section
            key={audience.id}
            id={audience.id}
            className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#F4F7FB]'} py-14 sm:py-16 lg:py-20`}
          >
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
              <div className={`lg:col-span-6 ${imageFirst ? 'lg:order-2' : ''}`}>
                <p className="text-sm font-semibold text-[#3BA3E8]">{audience.who}</p>
                <h2 className="mt-1 font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
                  {audience.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[#3D4452]">{audience.desc}</p>
                <ul className="mt-6 list-none divide-y divide-[#DCE3F0] p-0">
                  {audience.items.map((item) => (
                    <li key={item.title} className="py-4">
                      <h3 className="text-base font-semibold text-[#222863]">{item.title}</h3>
                      <p className="mt-1 text-base leading-relaxed text-[#3D4452]">{item.desc}</p>
                    </li>
                  ))}
                </ul>
                {audience.id === 'older-adults' ? (
                  <LocaleLink
                    href="/services/chronic-condition-management"
                    className="mt-4 inline-flex text-sm font-semibold text-[#222863] transition-colors hover:text-[#3BA3E8]"
                  >
                    More on long-term conditions →
                  </LocaleLink>
                ) : null}
              </div>

              <div
                className={`relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:col-span-6 lg:min-h-[30rem] ${
                  imageFirst ? 'lg:order-1' : ''
                }`}
              >
                <Image
                  src={audience.image}
                  alt={audience.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </section>
        )
      })}

      <ServiceWaysToPay />
    </>
  )
}
