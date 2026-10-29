'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'
import { clinic } from '@/data/clinic'

/** Building blocks shared by the Primary Care and MedSpa & Wellness hub pages. */

type HubHeroProps = {
  title: string
  desc: string
  bookHref: string
  bookLabel: string
  callLabel: string
  image: string
  imagePosition?: string
}

export function HubHero({ title, desc, bookHref, bookLabel, callLabel, image, imagePosition = 'center 22%' }: HubHeroProps) {
  const { common } = useTranslations()

  return (
    <section className="relative overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: imagePosition }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(105deg, rgba(8,16,32,0.95) 0%, rgba(18,28,58,0.9) 32%, rgba(34,40,99,0.55) 58%, rgba(8,16,32,0.15) 100%)',
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
            <li>
              <LocaleLink href="/" className="transition-colors hover:text-[#7EC8F0]">
                {common.home}
              </LocaleLink>
            </li>
            <li aria-hidden="true" className="text-[#3BA3E8]/70">
              /
            </li>
            <li className="text-[#7EC8F0]">{title}</li>
          </ol>
        </nav>

        <h1 className="font-serif text-[2.1rem] font-medium leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.85rem]">
          {title}
        </h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">{desc}</p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <LocaleLink
            href={bookHref}
            className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-sm font-semibold text-[#222863] transition-colors hover:bg-[#EAF0FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {bookLabel}
          </LocaleLink>
          <a
            href={clinic.phoneHref}
            className="text-center text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
          >
            {callLabel.replace('{phone}', clinic.phoneDisplay)}
          </a>
        </div>
      </div>
    </section>
  )
}

/** Sticky jump links to each group, underlining the group currently in view. */
export function GroupNav({ label, groups }: { label: string; groups: { id: string; title: string }[] }) {
  const [active, setActive] = useState(groups[0]?.id)
  const navRef = useRef<HTMLUListElement>(null)

  // Underline the last group whose top has passed just below the sticky nav
  const ids = groups.map((group) => group.id).join(',')
  useEffect(() => {
    const list = ids.split(',')
    const update = () => {
      let current = list[0]
      for (const id of list) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 200) current = id
      }
      setActive(current)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [ids])

  // Phones: the nav scrolls sideways, so keep the underlined group in view
  useEffect(() => {
    const list = navRef.current
    const link = list?.querySelector<HTMLElement>(`a[href="#${active}"]`)
    if (list && link) list.scrollTo({ left: link.offsetLeft - 16, behavior: 'smooth' })
  }, [active])

  return (
    // Sticks under the header (64px phones/tablets, 76px desktop once scrolled)
    <nav aria-label={label} className="sticky top-16 z-40 border-b border-[#E3E8F0] bg-white lg:top-[76px]">
      <ul
        ref={navRef}
        className="relative mx-auto flex max-w-6xl list-none gap-6 overflow-x-auto px-4 [scrollbar-width:none] sm:gap-8 sm:px-6 lg:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {groups.map((group) => (
          <li key={group.id} className="shrink-0">
            <a
              href={`#${group.id}`}
              aria-current={active === group.id ? 'true' : undefined}
              className={`block border-b-2 py-4 text-sm font-semibold transition-colors ${
                active === group.id
                  ? 'border-[#222863] text-[#222863]'
                  : 'border-transparent text-[#5A6270] hover:text-[#222863]'
              }`}
            >
              {group.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

/** Numbered group heading with its description beneath; content below indents to line up with the title. */
export function GroupHeading({ number, title, desc }: { number: number; title: string; desc: string }) {
  return (
    <div className="flex gap-4 border-b border-[#E3E8F0] pb-5 sm:gap-6">
      <span
        aria-hidden="true"
        className="w-8 shrink-0 pt-1 font-serif text-lg tabular-nums text-[#3BA3E8] sm:w-10 sm:text-xl"
      >
        {number}
      </span>
      <div>
        <h2 className="font-serif text-2xl font-medium tracking-tight text-[#222863] sm:text-[1.75rem] sm:leading-tight">
          {title}
        </h2>
        <p className="mt-1.5 text-base text-[#5A6270]">{desc}</p>
      </div>
    </div>
  )
}

/** Two-column row list; drops the bottom rule on the last row in each column. */
export const groupListClass = 'mt-2 grid pl-12 sm:pl-16 md:grid-cols-2 md:gap-x-12'
export const groupItemClass =
  'border-b border-[#E3E8F0] last:border-b-0 md:[&:nth-last-child(2):nth-child(odd)]:border-b-0'

/** Closing quick-answers section. */
export function HubFaq({ items }: { items: { q: string; a: string }[] }) {
  const t = useTranslations().pages.primaryCarePage

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
        <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1A1A1A] sm:text-4xl lg:col-span-4">
          {t.faqTitle} <span className="italic font-normal text-[#3BA3E8]">{t.faqTitleAccent}</span>
        </h2>
        <div className="divide-y divide-[#E3E8F0] border-y border-[#E3E8F0] lg:col-span-8">
          {items.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-serif text-lg font-medium tracking-tight text-[#222863] [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-[#3BA3E8] transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="max-w-2xl pb-5 text-[0.95rem] leading-relaxed text-[#5A6270]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
