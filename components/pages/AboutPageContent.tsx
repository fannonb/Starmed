'use client'

import Image from 'next/image'
import { Building2, Clock, MessageCircle, Phone, Wallet, type LucideIcon } from 'lucide-react'
import LocaleLink from '@/components/layout/LocaleLink'
import { useLocale, useTranslations } from '@/components/layout/LocaleProvider'
import GoogleMark from '@/components/ui/GoogleMark'
import { about } from '@/data/about'
import { clinic } from '@/data/clinic'

const howIcons: LucideIcon[] = [Wallet, Clock, MessageCircle, Building2]

/** The pull quote on the proof strip — one of the Google reviews already shown on the homepage. */
const QUOTE_REVIEWER = 'H. G.'

type Tone = 'tint' | 'white'

const sectionBg: Record<Tone, string> = { tint: 'bg-[#F4F7FB]', white: 'bg-white' }
/** Cards sit on the opposite tone of their section so they stay visible. */
const cardBg: Record<Tone, string> = { tint: 'bg-white', white: 'bg-[#F4F7FB]' }

function SectionTitle({ title, accent }: { title: string; accent: string }) {
  return (
    <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
      {title} <span className="italic font-normal text-[#3BA3E8]">{accent}</span>
    </h2>
  )
}

export default function AboutPageContent() {
  const messages = useTranslations()
  const t = messages.pages.about
  const { locale } = useLocale()
  const quote = messages.pages.testimonials.reviews.find((review) => review.name === QUOTE_REVIEWER)

  const stats = [
    { value: '10+', label: t.statYears },
    { value: '5.0', label: t.statReviews, stars: true, href: '/#testimonials' },
    { value: String(clinic.locations.length), label: t.statLocations },
    { value: 'EN · ES', label: t.statLanguages },
  ]

  // Story and team render only once the clinic provides them (see data/about.ts);
  // section backgrounds alternate over whichever sections are visible.
  const sections = [
    about.story ? 'story' : null,
    about.team.length ? 'team' : null,
    'how',
    'proof',
  ].filter((id): id is 'story' | 'team' | 'how' | 'proof' => id !== null)
  const toneOf = (id: (typeof sections)[number]): Tone =>
    sections.indexOf(id) % 2 === 0 ? 'tint' : 'white'

  return (
    <>
      <section className="relative min-h-[20rem] overflow-hidden sm:min-h-[22rem] lg:min-h-[26rem]">
        {/* Mirrored so the doctor sits on the bright right side, clear of the copy */}
        <Image
          src="/about-hero.jpg"
          alt="A StarMed doctor smiling and talking with a patient during a visit"
          fill
          preload
          sizes="100vw"
          className="-scale-x-100 object-cover object-[60%_22%] sm:object-[30%_24%]"
        />
        {/* Phone: copy sits at the bottom, so darken from the bottom up */}
        <div
          aria-hidden="true"
          className="absolute inset-0 sm:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(8,16,32,0.2) 0%, rgba(8,16,32,0.7) 42%, rgba(8,16,32,0.92) 100%)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden sm:block"
          style={{
            background:
              'linear-gradient(100deg, rgba(8,16,32,0.92) 0%, rgba(8,16,32,0.78) 32%, rgba(34,40,99,0.38) 58%, rgba(8,16,32,0.1) 80%, transparent 100%)',
          }}
        />
        <div className="relative z-10 mx-auto flex min-h-[20rem] max-w-6xl flex-col justify-end px-4 pb-10 pt-14 sm:min-h-[22rem] sm:px-6 sm:pb-12 lg:min-h-[26rem] lg:justify-center lg:px-8">
          <div className="max-w-xl">
            <h1 className="font-serif text-[2rem] font-medium leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.85rem]">
              {t.title}{' '}
              <span className="italic font-normal text-[#7EC8F0]">{t.titleAccent}</span>
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/85">{t.heroDesc}</p>
          </div>
        </div>
      </section>

      {about.story ? (
        <section className={`${sectionBg[toneOf('story')]} py-16 sm:py-20 lg:py-24`}>
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div>
              <SectionTitle title={t.storyTitle} accent={t.storyTitleAccent} />
              {about.story.body[locale].split('\n\n').map((paragraph) => (
                <p key={paragraph} className="mt-5 text-base leading-relaxed text-[#5A6270]">
                  {paragraph}
                </p>
              ))}
            </div>
            {about.story.image ? (
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={about.story.image}
                  alt={about.story.imageAlt?.[locale] ?? ''}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {about.team.length ? (
        <section className={`${sectionBg[toneOf('team')]} py-16 sm:py-20 lg:py-24`}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title={t.teamTitle} accent={t.teamTitleAccent} />
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
              {about.team.map((member) => (
                <li key={member.name}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#E8F0F8]">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-medium tracking-tight text-[#222863]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#3BA3E8]">{member.role[locale]}</p>
                  {member.credentials ? (
                    <p className="mt-1 text-sm text-[#5A6270]">{member.credentials}</p>
                  ) : null}
                  {member.quote ? (
                    <p className="mt-3 font-serif text-base italic leading-relaxed text-[#1A1A1A]">
                      “{member.quote[locale]}”
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className={`${sectionBg[toneOf('how')]} py-16 sm:py-20 lg:py-24`}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.howTitle} accent={t.howTitleAccent} />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5">
            {t.how.map((item, index) => {
              const Icon = howIcons[index]
              return (
                <li
                  key={item.title}
                  className={`rounded-[1.5rem] p-6 ring-1 ring-[#DCE3F0] sm:p-7 ${cardBg[toneOf('how')]}`}
                >
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF3FF] text-[#222863]"
                  >
                    {Icon ? <Icon className="h-6 w-6" strokeWidth={1.5} /> : null}
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-medium leading-snug tracking-tight text-[#222863]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A6270]">{item.desc}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className={`${sectionBg[toneOf('proof')]} py-16 sm:py-20 lg:py-24`}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.proofTitle} accent={t.proofTitleAccent} />
          <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:items-center lg:gap-14">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:col-span-7">
              {stats.map((stat) => {
                const value = (
                  <span className="flex items-center gap-2 font-serif text-4xl font-medium tracking-tight text-[#222863] sm:text-5xl">
                    {stat.value}
                    {stat.stars ? (
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white ring-1 ring-[#DCE3F0]">
                        <GoogleMark className="h-4 w-4" />
                      </span>
                    ) : null}
                  </span>
                )
                return (
                  <div key={stat.label} className="border-t border-[#DCE3F0] pt-5">
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      {stat.href ? (
                        <LocaleLink href={stat.href} className="group inline-block">
                          {value}
                          <span className="mt-2 block text-sm text-[#5A6270] underline decoration-[#3BA3E8]/40 underline-offset-4 group-hover:text-[#222863]">
                            {stat.label}
                          </span>
                        </LocaleLink>
                      ) : (
                        <>
                          {value}
                          <span className="mt-2 block text-sm text-[#5A6270]">{stat.label}</span>
                        </>
                      )}
                    </dd>
                  </div>
                )
              })}
            </dl>

            {quote ? (
              <figure
                className={`rounded-[1.5rem] p-7 ring-1 ring-[#DCE3F0] sm:p-8 lg:col-span-5 ${cardBg[toneOf('proof')]}`}
              >
                <blockquote className="font-serif text-lg leading-relaxed text-[#1A1A1A] sm:text-xl lg:text-[1.35rem]">
                  “{quote.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 text-sm">
                  <GoogleMark className="h-5 w-5" />
                  <span>
                    <span className="block font-semibold text-[#222863]">{quote.name}</span>
                    <span className="block text-[#5A6270]">{messages.pages.testimonials.reviewBadge}</span>
                  </span>
                </figcaption>
              </figure>
            ) : null}
          </div>
        </div>
      </section>

      <section className="bg-[#222863] py-16 sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div>
            <h2 className="font-serif text-3xl font-medium text-white sm:text-4xl">{t.ctaTitle}</h2>
            <p className="mt-4 max-w-xl text-white/75">{t.ctaDesc}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <LocaleLink
              href="/appointments"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-sm font-semibold text-[#222863] transition-colors hover:bg-[#EAF0FF]"
            >
              {t.ctaBook}
            </LocaleLink>
            <a
              href={clinic.phoneHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/40 px-6 text-sm font-semibold text-white transition-colors hover:border-white/70 hover:bg-white/10"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {t.ctaCall} {clinic.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
