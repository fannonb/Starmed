'use client'

import Image from 'next/image'
import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'
import { clinic } from '@/data/clinic'

export default function FaqPageContent() {
  const t = useTranslations()
  const copy = t.faq

  return (
    <>
      <section className="relative min-h-[20rem] overflow-hidden sm:min-h-[22rem] lg:min-h-[24rem]">
        <Image
          src="/consultation-preview.jpg"
          alt="A StarMed doctor answering a patient's questions"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[60%_28%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(8,16,32,0.94) 0%, rgba(18,28,58,0.88) 32%, rgba(34,40,99,0.52) 58%, rgba(59,163,232,0.2) 78%, transparent 100%)',
          }}
        />
        <div className="relative z-10 mx-auto flex min-h-[20rem] max-w-6xl flex-col justify-end px-4 pb-10 pt-14 sm:min-h-[22rem] sm:px-6 sm:pb-12 lg:min-h-[24rem] lg:justify-center lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/55">
              <li>
                <LocaleLink href="/" className="transition-colors hover:text-[#7EC8F0]">
                  {t.common.home}
                </LocaleLink>
              </li>
              <li aria-hidden="true" className="text-[#3BA3E8]/70">
                /
              </li>
              <li className="text-[#7EC8F0]">{copy.breadcrumb}</li>
            </ol>
          </nav>
          <h1 className="max-w-2xl font-serif text-[2.15rem] font-medium leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
            {copy.title}
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80">{copy.heroDesc}</p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Topic links */}
          <nav aria-label={copy.topicsLabel} className="flex flex-wrap gap-2">
            {copy.groups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="rounded-full bg-[#F4F7FB] px-4 py-2 text-sm font-semibold text-[#222863] ring-1 ring-[#DCE3F0] transition-colors hover:bg-[#EAF0F8]"
              >
                {group.title}
              </a>
            ))}
          </nav>

          {copy.groups.map((group) => (
            <div
              key={group.id}
              id={group.id}
              className="mt-12 scroll-mt-32 grid gap-6 border-t border-[#E3E8F0] pt-10 lg:mt-14 lg:grid-cols-12 lg:gap-14"
            >
              <h2 className="font-serif text-2xl font-medium tracking-tight text-[#222863] sm:text-3xl lg:col-span-4">
                {group.title}
              </h2>

              <div className="divide-y divide-[#DCE3F0] overflow-hidden rounded-2xl bg-[#F4F7FB] lg:col-span-8">
                {group.items.map((item) => (
                  <details key={item.q} className="group">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-5 text-left sm:px-6 [&::-webkit-details-marker]:hidden">
                      <span className="text-base font-semibold text-[#222863] sm:text-lg">
                        {item.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className="shrink-0 text-xl leading-none text-[#3BA3E8] transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <div className="px-5 pb-5 sm:px-6">
                      <p className="text-base leading-relaxed text-[#3D4452]">{item.a}</p>
                      {'href' in item && item.href ? (
                        <LocaleLink
                          href={item.href}
                          className="mt-3 inline-flex text-sm font-semibold text-[#222863] transition-colors hover:text-[#3BA3E8]"
                        >
                          {item.linkLabel} →
                        </LocaleLink>
                      ) : null}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have a question? */}
      <section className="bg-[#F4F7FB] py-14 sm:py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222863] sm:text-4xl">
              {copy.stillTitle}
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-[#3D4452]">{copy.stillDesc}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={clinic.phoneHref}
              className="inline-flex h-11 items-center justify-center rounded-lg bg-[#222863] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f52]"
            >
              {copy.call}
            </a>
            <LocaleLink
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-[#D5DEEA] bg-white px-5 text-sm font-semibold text-[#222863] transition-colors hover:border-[#222863]"
            >
              {copy.contactUs}
            </LocaleLink>
          </div>
        </div>
      </section>
    </>
  )
}
