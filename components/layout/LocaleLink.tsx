'use client'

import Link from 'next/link'
import { forwardRef, type ComponentProps } from 'react'
import { withLocale } from '@/lib/i18n'
import { useLocale } from '@/components/layout/LocaleProvider'

type LocaleLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string
}

/**
 * Next Link that prefixes the active locale (/en, /es).
 * Pass absolute paths like /contact — locale is added automatically.
 * External URLs (http) and tel:/mailto: pass through unchanged.
 */
const LocaleLink = forwardRef<HTMLAnchorElement, LocaleLinkProps>(
  function LocaleLink({ href, ...props }, ref) {
    const { locale } = useLocale()
    const isExternal =
      href.startsWith('http') ||
      href.startsWith('tel:') ||
      href.startsWith('mailto:') ||
      href.startsWith('#')

    const resolved = isExternal ? href : withLocale(href, locale)
    return <Link ref={ref} href={resolved} {...props} />
  },
)

export default LocaleLink
