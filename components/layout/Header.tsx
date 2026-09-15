'use client'

import { useEffect, useId, useMemo, useRef, useState } from 'react'
import Logo from '@/components/layout/Logo'
import LocaleLink from '@/components/layout/LocaleLink'
import LanguageSwitcher from '@/components/layout/LanguageSwitcher'
import SpanishWelcome from '@/components/layout/SpanishWelcome'
import { useTranslations } from '@/components/layout/LocaleProvider'
import { serviceCategories, type ServiceCategory } from '@/data/services'
import { useLocalizedServices } from '@/hooks/useLocalizedServices'

const PHONE_DISPLAY = '(726) 242-3011'
const PHONE_HREF = 'tel:7262423011'

const megaCategories = serviceCategories.filter(
  (category): category is { id: ServiceCategory; label: string } => category.id !== 'all',
)

export default function Header() {
  const t = useTranslations()
  const localizedServices = useLocalizedServices()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobilePathwaysOpen, setMobilePathwaysOpen] = useState(false)
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<ServiceCategory | null>(null)
  const servicesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const menuId = useId()
  const servicesId = useId()
  const mobileServicesId = useId()
  const mobilePathwaysId = useId()

  const categoryMeta: Record<
    ServiceCategory,
    { label: string; hint: string }
  > = useMemo(
    () => ({
      everyday: { label: t.nav.categoryEveryday, hint: t.nav.hintEveryday },
      diagnostics: { label: t.nav.categoryDiagnostics, hint: t.nav.hintDiagnostics },
      mind: { label: t.nav.categoryMind, hint: t.nav.hintMind },
      employers: { label: t.nav.categoryEmployers, hint: t.nav.hintEmployers },
    }),
    [t],
  )

  const servicesByCategory = useMemo(
    () =>
      megaCategories.map((category) => ({
        ...category,
        label: categoryMeta[category.id].label,
        hint: categoryMeta[category.id].hint,
        items: localizedServices.filter((service) => service.category === category.id),
      })),
    [categoryMeta, localizedServices],
  )

  const careLinks = useMemo(
    () => [
      {
        href: '/care/individuals',
        label: t.nav.careIndividuals,
        hint: t.nav.hintCareIndividuals,
      },
      {
        href: '/care/mental-health',
        label: t.nav.careMental,
        hint: t.nav.hintCareMental,
      },
      {
        href: '/care/employers',
        label: t.nav.careEmployers,
        hint: t.nav.hintCareEmployers,
      },
    ],
    [t],
  )

  const navLinks = useMemo(
    () => [
      { href: '/membership', label: t.nav.membership },
      { href: '/frequently-asked-questions', label: t.nav.faq },
      { href: '/contact', label: t.nav.contact },
    ],
    [t],
  )

  const openServices = () => {
    if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current)
    setServicesOpen(true)
  }

  const scheduleCloseServices = () => {
    if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current)
    servicesCloseTimer.current = setTimeout(() => setServicesOpen(false), 140)
  }

  useEffect(() => {
    return () => {
      if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current)
    }
  }, [])

  useEffect(() => {
    if (!mobileOpen) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!servicesOpen) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setServicesOpen(false)
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [servicesOpen])

  const closeMobile = () => {
    setMobileOpen(false)
    setMobileServicesOpen(false)
    setMobilePathwaysOpen(false)
    setMobileCategoryOpen(null)
  }

  const navLinkClass =
    'rounded-md px-3 py-2 text-base font-semibold text-[#5A6270] hover:text-[#1A1A1A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222863]'

  return (
    <header className="sticky top-0 z-50 bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-[#222863] focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <div
        className="h-1 w-full"
        style={{
          background: 'linear-gradient(90deg, #3BA3E8 0%, #222863 100%)',
        }}
        aria-hidden="true"
      />

      <SpanishWelcome />

      <div className="relative border-b border-[#E3E8F0] bg-white">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[72px] sm:px-6 lg:h-[84px] lg:px-8">
          <LocaleLink href="/" className="flex min-w-0 shrink-0 items-center" aria-label="StarMed home">
            <Logo preload className="h-10 w-auto sm:h-14 lg:h-[68px]" />
          </LocaleLink>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            <LocaleLink href="/" className={navLinkClass}>
              {t.nav.home}
            </LocaleLink>

            <LocaleLink href="/about" className={navLinkClass}>
              {t.nav.about}
            </LocaleLink>

            <div
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={scheduleCloseServices}
            >
              <LocaleLink
                href="/services"
                className={`inline-flex items-center gap-1 ${navLinkClass}`}
                aria-expanded={servicesOpen}
                aria-controls={servicesId}
                onFocus={openServices}
                onClick={() => setServicesOpen(false)}
              >
                {t.nav.services}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  aria-hidden="true"
                  className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                >
                  <path
                    d="M2.5 4.5 L6 8 L9.5 4.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </LocaleLink>
            </div>

            {navLinks.map((item) => (
              <LocaleLink key={item.href} href={item.href} className={navLinkClass}>
                {item.label}
              </LocaleLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />
            <LocaleLink
              href="/appointments"
              className="inline-flex h-10 items-center rounded-md bg-[#222863] px-4 text-sm font-semibold text-white hover:bg-[#1a1f52] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222863]"
            >
              {t.nav.bookAppointment}
            </LocaleLink>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <a
              href={PHONE_HREF}
              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-[#222863] px-3.5 text-sm font-semibold text-white"
              aria-label={`${t.nav.call} ${PHONE_DISPLAY}`}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6.2 4.8c.4-.5 1.1-.6 1.6-.3l2.4 1.2c.5.3.8.8.7 1.4l-.5 2.1c-.1.4 0 .8.3 1.1l2.4 2.4c.3.3.7.4 1.1.3l2.1-.5c.6-.1 1.1.2 1.4.7l1.2 2.4c.3.5.2 1.2-.3 1.6l-1.1 1.1c-.4.4-1 .6-1.6.5C10.2 18.7 5.3 13.8 5.3 8.4c0-.6.2-1.2.5-1.6l.4-.4Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
              {t.nav.call}
            </a>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-[#1A1A1A] hover:bg-[#F4F7FB]"
              aria-expanded={mobileOpen}
              aria-controls={menuId}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? (
                <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    d="M5 5 L15 15 M15 5 L5 15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    d="M4 6 H16 M4 10 H16 M4 14 H16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {servicesOpen ? (
          <div
            id={servicesId}
            className="absolute inset-x-0 top-full z-30 hidden border-b border-[#E3E8F0] bg-white shadow-[0_24px_48px_-28px_rgba(34,40,99,0.45)] lg:block"
            onMouseEnter={openServices}
            onMouseLeave={scheduleCloseServices}
          >
            <div
              aria-hidden="true"
              className="h-px w-full bg-gradient-to-r from-transparent via-[#3BA3E8]/50 to-transparent"
            />
            <div className="mx-auto max-w-6xl px-4 py-0 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-12">
                <div className="border-[#E3E8F0] bg-[#F4F7FB] px-5 py-7 sm:px-6 lg:col-span-4 lg:border-r lg:px-7 lg:py-8">
                  <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#3BA3E8]">
                    {t.nav.megaPathways}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-[#5A6270]">{t.nav.megaPathwaysDesc}</p>
                  <ul className="mt-5 space-y-1">
                    {careLinks.map((item) => (
                      <li key={item.href}>
                        <LocaleLink
                          href={item.href}
                          className="group block rounded-lg px-3 py-3 transition-colors hover:bg-white"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="block text-sm font-semibold text-[#3BA3E8] transition-colors group-hover:text-[#2B92D4]">
                            {item.label}
                          </span>
                          <span className="mt-0.5 block text-xs leading-snug text-[#5A6270]">
                            {item.hint}
                          </span>
                          <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#222863]/70 transition-colors group-hover:text-[#222863]">
                            {t.nav.viewPath}
                            <span aria-hidden="true">→</span>
                          </span>
                        </LocaleLink>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-5 py-7 sm:px-6 lg:col-span-8 lg:px-8 lg:py-8">
                  <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#3BA3E8]">
                        {t.nav.megaServices}
                      </p>
                      <p className="mt-2 text-sm leading-snug text-[#5A6270]">
                        {t.nav.megaServicesDesc}
                      </p>
                    </div>
                    <LocaleLink
                      href="/services"
                      className="text-sm font-semibold text-[#3BA3E8] transition-colors hover:text-[#2B92D4]"
                      onClick={() => setServicesOpen(false)}
                    >
                      {t.nav.viewAll} →
                    </LocaleLink>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {servicesByCategory.map((category) => (
                      <div key={category.id}>
                        <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#222863]">
                          {category.label}
                        </p>
                        <p className="mt-1 text-xs leading-snug text-[#5A6270]">{category.hint}</p>
                        <ul className="mt-2.5 space-y-0.5">
                          {category.items.map((service) => (
                            <li key={service.id}>
                              <LocaleLink
                                href={service.href ?? `/services#${service.id}`}
                                className="group -mx-2 flex items-start gap-2 rounded-md px-2 py-1.5 text-sm leading-snug text-[#1A1A1A] transition-colors hover:bg-[#F4F7FB] hover:text-[#222863]"
                                onClick={() => setServicesOpen(false)}
                              >
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#3BA3E8]/70 transition-colors group-hover:bg-[#222863]" />
                                {service.title}
                              </LocaleLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {mobileOpen ? (
        <div
          id={menuId}
          className="max-h-[calc(100dvh-5.5rem)] overflow-y-auto border-b border-[#E3E8F0] bg-white lg:hidden"
        >
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6" aria-label="Mobile">
            <LocaleLink
              href="/"
              className="border-b border-[#E3E8F0] py-3.5 text-base font-semibold text-[#1A1A1A]"
              onClick={closeMobile}
            >
              {t.nav.home}
            </LocaleLink>

            <LocaleLink
              href="/about"
              className="border-b border-[#E3E8F0] py-3.5 text-base font-semibold text-[#1A1A1A]"
              onClick={closeMobile}
            >
              {t.nav.about}
            </LocaleLink>

            <div className="border-b border-[#E3E8F0]">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="flex min-w-0 flex-1 items-center justify-between gap-3 py-3.5 text-left"
                  aria-expanded={mobileServicesOpen}
                  aria-controls={mobileServicesId}
                  onClick={() => {
                    setMobileServicesOpen((open) => {
                      if (open) {
                        setMobileCategoryOpen(null)
                        setMobilePathwaysOpen(false)
                      }
                      return !open
                    })
                  }}
                >
                  <span className="text-base font-semibold text-[#1A1A1A]">{t.nav.services}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                    className={`shrink-0 text-[#5A6270] transition-transform ${
                      mobileServicesOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <path
                      d="M2.5 4.5 L6 8 L9.5 4.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                {mobileServicesOpen ? (
                  <LocaleLink
                    href="/services"
                    className="shrink-0 py-3.5 text-sm font-semibold text-[#3BA3E8]"
                    onClick={closeMobile}
                  >
                    {t.nav.viewAll}
                  </LocaleLink>
                ) : null}
              </div>

              {mobileServicesOpen ? (
                <div id={mobileServicesId} className="pb-1">
                  <div className="border-t border-[#E3E8F0]">
                    <button
                      type="button"
                      className="flex w-full items-start justify-between gap-3 py-3.5 text-left"
                      aria-expanded={mobilePathwaysOpen}
                      aria-controls={mobilePathwaysId}
                      onClick={() => setMobilePathwaysOpen((open) => !open)}
                    >
                      <span>
                        <span className="block text-sm font-semibold text-[#3BA3E8]">
                          {t.nav.megaPathways}
                        </span>
                        <span className="mt-0.5 block text-xs text-[#5A6270]">
                          {t.nav.megaPathwaysDesc}
                        </span>
                      </span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 12 12"
                        aria-hidden="true"
                        className={`mt-1 shrink-0 text-[#5A6270] transition-transform ${
                          mobilePathwaysOpen ? 'rotate-180' : ''
                        }`}
                      >
                        <path
                          d="M2.5 4.5 L6 8 L9.5 4.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    {mobilePathwaysOpen ? (
                      <ul id={mobilePathwaysId} className="mb-3 rounded-lg bg-[#F4F7FB] px-3 py-1">
                        {careLinks.map((item) => (
                          <li key={item.href}>
                            <LocaleLink
                              href={item.href}
                              className="block py-2.5"
                              onClick={closeMobile}
                            >
                              <span className="block text-sm font-semibold text-[#3BA3E8]">
                                {item.label}
                              </span>
                              <span className="mt-0.5 block text-xs text-[#5A6270]">{item.hint}</span>
                            </LocaleLink>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>

                  {servicesByCategory.map((category) => {
                    const open = mobileCategoryOpen === category.id
                    return (
                      <div key={category.id} className="border-t border-[#E3E8F0]">
                        <button
                          type="button"
                          className="flex w-full items-start justify-between gap-3 py-3.5 text-left"
                          aria-expanded={open}
                          onClick={() => setMobileCategoryOpen(open ? null : category.id)}
                        >
                          <span>
                            <span className="block text-sm font-semibold text-[#222863]">
                              {category.label}
                            </span>
                            <span className="mt-0.5 block text-xs text-[#5A6270]">
                              {category.hint}
                            </span>
                          </span>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 12 12"
                            aria-hidden="true"
                            className={`mt-1 shrink-0 text-[#5A6270] transition-transform ${
                              open ? 'rotate-180' : ''
                            }`}
                          >
                            <path
                              d="M2.5 4.5 L6 8 L9.5 4.5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.4"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                        {open ? (
                          <ul className="mb-3 rounded-lg bg-[#F4F7FB] px-3 py-1">
                            {category.items.map((service) => (
                              <li key={service.id}>
                                <LocaleLink
                                  href={service.href ?? `/services#${service.id}`}
                                  className="block py-2.5 text-sm text-[#1A1A1A]"
                                  onClick={closeMobile}
                                >
                                  {service.title}
                                </LocaleLink>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    )
                  })}
                </div>
              ) : null}
            </div>

            {navLinks.map((item) => (
              <LocaleLink
                key={item.href}
                href={item.href}
                className="border-b border-[#E3E8F0] py-3.5 text-base font-semibold text-[#1A1A1A]"
                onClick={closeMobile}
              >
                {item.label}
              </LocaleLink>
            ))}

            <div className="mt-4 rounded-xl bg-[#F4F7FB] px-4 py-4 text-sm text-[#5A6270]">
              <p className="font-semibold text-[#222863]">{t.nav.clinicHours}</p>
              <p className="mt-1">{t.nav.hoursValue}</p>
              <LocaleLink
                href="/contact"
                className="mt-3 inline-flex font-semibold text-[#222863]"
                onClick={closeMobile}
              >
                {t.nav.viewLocations}
              </LocaleLink>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#E3E8F0] pt-4">
              <p className="text-xs font-semibold tracking-wide text-[#5A6270] uppercase">
                {t.nav.language}
              </p>
              <LanguageSwitcher size="md" />
            </div>

            <LocaleLink
              href="/appointments"
              className="mt-3 mb-2 inline-flex h-11 items-center justify-center rounded-md bg-[#222863] text-sm font-semibold text-white hover:bg-[#1a1f52]"
              onClick={closeMobile}
            >
              {t.nav.bookAppointment}
            </LocaleLink>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
