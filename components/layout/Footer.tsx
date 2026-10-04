'use client'

import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'

export default function Footer() {
  const t = useTranslations()
  const year = new Date().getFullYear()

  const links = [
    { href: '/services', label: t.nav.services },
    { href: '/membership', label: t.nav.membership },
    { href: '/care/employers', label: t.nav.categoryEmployers },
    { href: '/about', label: t.nav.about },
    { href: '/frequently-asked-questions', label: t.nav.faq },
    { href: '/contact', label: t.nav.contact },
  ]

  return (
    <footer>
      <div
        style={{
          background: 'linear-gradient(105deg, #1a1f4a 0%, #222863 55%, #27306e 100%)',
        }}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-6 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold">
              {links.map((link) => (
                <li key={link.href}>
                  <LocaleLink href={link.href} className="text-white/80 transition-colors hover:text-white">
                    {link.label}
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-xs text-white/55">
            © {year} StarMed. {t.footer.rightsReserved}
          </p>
        </div>
      </div>
    </footer>
  )
}
