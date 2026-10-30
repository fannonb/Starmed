'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'
import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'

/**
 * Employer care feature band, shared by the homepage (under the two care panels) and the Primary Care page.
 * `heading` matches the surrounding outline: h3 inside the homepage care section, h2 on Primary Care.
 */
export default function EmployerBand({ heading: Heading = 'h3' }: { heading?: 'h2' | 'h3' }) {
  const { pages, nav } = useTranslations()
  const t = pages.employerBand

  return (
    <article className="grid overflow-hidden rounded-[1.5rem] bg-white text-[#222863] ring-1 ring-[#DCE3F0] lg:grid-cols-12">
      <div className="relative h-44 sm:h-56 lg:col-span-4 lg:h-auto lg:min-h-[16rem]">
        <Image
          src="/employer-care-team.jpg"
          alt="StarMed physician consulting with employee team members"
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-col justify-center p-7 sm:p-8 lg:col-span-5 lg:p-10">
        <p className="text-sm font-semibold text-[#1A7FC1]">{nav.categoryEmployers}</p>
        <Heading className="mt-2 font-serif text-[1.75rem] font-medium leading-tight tracking-tight">
          {t.title}
        </Heading>
        <p className="mt-3 text-base leading-relaxed text-[#3D4452]">{t.desc}</p>

        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <LocaleLink
            href="/care/employers"
            className="inline-flex h-12 w-fit items-center rounded-lg bg-[#222863] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222863]"
          >
            {pages.common.learnMore}
          </LocaleLink>
          <LocaleLink
            href="/contact?inquiry=employers#message"
            className="w-fit text-sm font-semibold text-[#222863] underline decoration-[#222863]/30 underline-offset-4 transition-colors hover:decoration-[#222863]"
          >
            {t.talkCta}
          </LocaleLink>
        </div>
      </div>

      {/* What the business gets, so owners see the payoff before clicking */}
      <ul className="flex flex-col justify-center gap-4 border-t border-[#E3E8F0] px-7 py-7 sm:px-8 lg:col-span-3 lg:border-l lg:border-t-0 lg:px-8 lg:py-10">
        {t.perks.map((perk) => (
          <li key={perk} className="flex items-start gap-3 text-base font-semibold text-[#222863]">
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E4F2FC] text-[#3BA3E8]"
            >
              <Check className="h-3.5 w-3.5" strokeWidth={2.6} />
            </span>
            {perk}
          </li>
        ))}
      </ul>
    </article>
  )
}
