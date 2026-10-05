'use client'

import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Phone } from 'lucide-react'
import Logo from '@/components/layout/Logo'
import LocaleLink from '@/components/layout/LocaleLink'
import LanguageSwitcher from '@/components/layout/LanguageSwitcher'
import SpanishWelcome from '@/components/layout/SpanishWelcome'
import { useTranslations } from '@/components/layout/LocaleProvider'
import { serviceIcons } from '@/components/services/serviceIcons'
import { useLocalizedServices } from '@/hooks/useLocalizedServices'
import { stripLocale } from '@/lib/i18n'

const PHONE_HREF = 'tel:7262423011'

export default function Header() {
  const t = useTranslations()
  const localizedServices = useLocalizedServices()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const [headerHeight, setHeaderHeight] = useState(0)
  const path = stripLocale(usePathname() ?? '/')
  const servicesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const menuId = useId()
  const servicesId = useId()
  const mobileServicesId = useId()

  const menuServices = useMemo(
    () =>
      serviceIcons.flatMap(([id, Icon]) => {
        const service = localizedServices.find((s) => s.id === id)
        return service ? [{ service, Icon }] : []
      }),
    [localizedServices],
  )

  // Who the care is for: shown first in the Services menu
  const careLinks = useMemo(
    () => [
      { href: '/care/individuals', label: t.nav.careIndividuals },
      { href: '/care/mental-health', label: t.nav.careMental },
      { href: '/care/employers', label: t.nav.categoryEmployers },
    ],
    [t],
  )

  // Menu order: Home, About, Services (menu), then these
  const leadLinks = useMemo(
    () => [
      { href: '/', label: t.nav.home },
      { href: '/about', label: t.nav.about },
    ],
    [t],
  )

  const navLinks = useMemo(
    () => [
      { href: '/membership', label: t.nav.membership },
      { href: '/care/employers', label: t.nav.categoryEmployers },
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

  // The phone menu sits right under the header, which can change height (scroll, Spanish banner).
  useEffect(() => {
    const header = headerRef.current
    if (!header) return
    const observer = new ResizeObserver(() => setHeaderHeight(header.offsetHeight))
    observer.observe(header)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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
  }

  const isCurrent = (href: string) => path === href || path.startsWith(`${href}/`)
  const inServices = isCurrent('/services') || isCurrent('/care')

  const navLinkClass = (active: boolean) =>
    `relative whitespace-nowrap rounded-md px-2 py-2 text-base font-semibold xl:text-[17px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222863] after:absolute after:inset-x-2 after:-bottom-0.5 after:h-0.5 after:rounded-full after:transition-colors ${
      active
        ? 'text-[#222863] after:bg-[#3BA3E8]'
        : 'text-[#5A6270] after:bg-transparent hover:text-[#1A1A1A]'
    }`
  const mobileLinkClass = (active: boolean) =>
    `flex min-h-14 items-center border-b border-[#E3E8F0] text-lg font-semibold ${
      active ? 'text-[#222863] underline decoration-[#3BA3E8] decoration-2 underline-offset-8' : 'text-[#1A1A1A]'
    }`

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white">
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
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-[height] duration-200 sm:px-6 lg:px-6 xl:px-8 ${
            scrolled ? 'h-16 lg:h-[76px]' : 'h-16 sm:h-[76px] lg:h-[92px]'
          }`}
        >
          <LocaleLink href="/" className="flex min-w-0 shrink-0 items-center" aria-label="StarMed home">
            <Logo
              preload
              className={`w-auto transition-[height] duration-200 ${
                scrolled ? 'h-12 lg:h-14' : 'h-12 sm:h-14 lg:h-[68px]'
              }`}
            />
          </LocaleLink>

          <nav className="hidden items-center gap-0.5 lg:flex xl:gap-1" aria-label="Primary">
            {leadLinks.map((item) => (
              <LocaleLink
                key={item.href}
                href={item.href}
                aria-current={isCurrent(item.href) ? 'page' : undefined}
                className={navLinkClass(isCurrent(item.href))}
              >
                {item.label}
              </LocaleLink>
            ))}

            <div
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={scheduleCloseServices}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  setServicesOpen(false)
                }
              }}
            >
              <LocaleLink
                href="/services"
                className={`inline-flex items-center gap-1 ${navLinkClass(inServices)}`}
                aria-current={inServices && path === '/services' ? 'page' : undefined}
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

              {servicesOpen ? (
                // Top padding bridges the gap to the header's bottom edge so hover isn't lost
                <div id={servicesId} className="absolute left-0 top-full z-30 pt-7">
                  <div className="w-[40rem] overflow-hidden rounded-2xl bg-white shadow-[0_24px_48px_-20px_rgba(34,40,99,0.35)] ring-1 ring-[#E3E8F0]">
                    <div className="border-b border-[#E3E8F0] bg-[#F4F7FB] px-5 py-4">
                      <p className="text-sm text-[#5A6270]">{t.nav.megaPathways}</p>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {careLinks.map((item) => (
                          <li key={item.href}>
                            <LocaleLink
                              href={item.href}
                              aria-current={isCurrent(item.href) ? 'page' : undefined}
                              className="inline-flex rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-[#222863] ring-1 ring-[#DCE3F0] transition-colors hover:bg-[#222863] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222863]"
                              onClick={() => setServicesOpen(false)}
                            >
                              {item.label}
                            </LocaleLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <ul className="grid grid-cols-2 gap-x-2 gap-y-0.5 p-3">
                      {menuServices.map(({ service, Icon }) => (
                        <li key={service.id}>
                          <LocaleLink
                            href={service.href ?? `/services#${service.id}`}
                            className="group flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm font-medium leading-snug text-[#1A1A1A] transition-colors hover:bg-[#F4F7FB] hover:text-[#222863] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#222863]"
                            onClick={() => setServicesOpen(false)}
                          >
                            <span
                              aria-hidden="true"
                              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#222863] transition-colors group-hover:bg-[#222863] group-hover:text-white"
                            >
                              <Icon className="h-4 w-4" strokeWidth={1.6} />
                            </span>
                            {service.title}
                          </LocaleLink>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-[#E3E8F0] px-5 py-3 text-sm">
                      <LocaleLink
                        href="/services"
                        className="font-semibold text-[#3BA3E8] transition-colors hover:text-[#2B92D4]"
                        onClick={() => setServicesOpen(false)}
                      >
                        {t.nav.viewAll} →
                      </LocaleLink>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            {navLinks.map((item) => (
              <LocaleLink
                key={item.href}
                href={item.href}
                aria-current={isCurrent(item.href) ? 'page' : undefined}
                className={navLinkClass(isCurrent(item.href))}
              >
                {item.label}
              </LocaleLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex xl:gap-3">
            <LanguageSwitcher />
            <LocaleLink
              href="/appointments"
              className="inline-flex h-10 items-center whitespace-nowrap rounded-lg bg-[#222863] px-5 text-[15px] font-semibold text-white hover:bg-[#1a1f52] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222863]"
            >
              {t.nav.bookAppointment}
            </LocaleLink>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              className="inline-flex h-11 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-[#222863] ring-1 ring-[#DCE3F0] transition-colors hover:bg-[#F4F7FB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222863]"
              aria-expanded={mobileOpen}
              aria-controls={menuId}
              onClick={() => setMobileOpen((open) => !open)}
            >
              <span>{mobileOpen ? t.nav.close : t.nav.menu}</span>
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

      </div>

      {mobileOpen ? (
        <div
          id={menuId}
          className="fixed inset-x-0 bottom-0 z-50 flex flex-col border-t border-[#E3E8F0] bg-white lg:hidden"
          style={{ top: headerHeight }}
        >
          <nav className="mx-auto flex w-full max-w-2xl flex-1 flex-col overflow-y-auto px-4 pb-4 sm:px-6" aria-label="Mobile">
            {leadLinks.map((item) => (
              <LocaleLink
                key={item.href}
                href={item.href}
                aria-current={isCurrent(item.href) ? 'page' : undefined}
                className={mobileLinkClass(isCurrent(item.href))}
                onClick={closeMobile}
              >
                {item.label}
              </LocaleLink>
            ))}

            <div className="border-b border-[#E3E8F0]">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="flex min-h-14 min-w-0 flex-1 items-center justify-between gap-3 text-left"
                  aria-expanded={mobileServicesOpen}
                  aria-controls={mobileServicesId}
                  onClick={() => setMobileServicesOpen((open) => !open)}
                >
                  <span className={`text-lg font-semibold ${inServices ? 'text-[#222863]' : 'text-[#1A1A1A]'}`}>
                    {t.nav.services}
                  </span>
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
              </div>

              {mobileServicesOpen ? (
                <div id={mobileServicesId} className="pb-3">
                  <p className="px-1 text-sm text-[#5A6270]">{t.nav.megaPathways}</p>
                  <ul className="mt-2 mb-3 flex flex-wrap gap-2 px-1">
                    {careLinks.map((item) => (
                      <li key={item.href}>
                        <LocaleLink
                          href={item.href}
                          aria-current={isCurrent(item.href) ? 'page' : undefined}
                          className="inline-flex rounded-full bg-[#F4F7FB] px-3.5 py-2 text-sm font-semibold text-[#222863] ring-1 ring-[#DCE3F0]"
                          onClick={closeMobile}
                        >
                          {item.label}
                        </LocaleLink>
                      </li>
                    ))}
                  </ul>
                  <ul className="grid gap-0.5 rounded-xl bg-[#F4F7FB] p-2 sm:grid-cols-2">
                    {menuServices.map(({ service, Icon }) => (
                      <li key={service.id}>
                        <LocaleLink
                          href={service.href ?? `/services#${service.id}`}
                          className="flex min-h-11 items-center gap-3 rounded-lg px-2 py-1.5 text-base font-medium text-[#1A1A1A] active:bg-white"
                          onClick={closeMobile}
                        >
                          <span
                            aria-hidden="true"
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#222863]"
                          >
                            <Icon className="h-4 w-4" strokeWidth={1.6} />
                          </span>
                          {service.title}
                        </LocaleLink>
                      </li>
                    ))}
                  </ul>
                  <LocaleLink
                    href="/services"
                    className="mt-3 inline-flex px-1 text-sm font-semibold text-[#222863]"
                    onClick={closeMobile}
                  >
                    {t.nav.viewAllServices} →
                  </LocaleLink>
                </div>
              ) : null}
            </div>

            {[...navLinks, { href: '/frequently-asked-questions', label: t.nav.faq }].map((item) => (
              <LocaleLink
                key={item.href}
                href={item.href}
                aria-current={isCurrent(item.href) ? 'page' : undefined}
                className={mobileLinkClass(isCurrent(item.href))}
                onClick={closeMobile}
              >
                {item.label}
              </LocaleLink>
            ))}

          </nav>

          <div className="border-t border-[#E3E8F0] bg-white px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6">
            <div className="mx-auto max-w-2xl">
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={PHONE_HREF}
                  className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg bg-white text-sm font-semibold text-[#222863] ring-1 ring-[#DCE3F0]"
                >
                  <Phone className="h-4 w-4 text-[#3BA3E8]" aria-hidden="true" />
                  {t.nav.call}
                </a>
                <LocaleLink
                  href="/appointments"
                  className="inline-flex h-10 items-center justify-center rounded-lg bg-[#222863] text-sm font-semibold text-white hover:bg-[#1a1f52]"
                  onClick={closeMobile}
                >
                  {t.nav.bookAppointment}
                </LocaleLink>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
