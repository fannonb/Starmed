'use client'

import { CalendarDays, MessageSquare, Phone } from 'lucide-react'
import LocaleLink from '@/components/layout/LocaleLink'
import { useTranslations } from '@/components/layout/LocaleProvider'
import { clinic } from '@/data/clinic'

/** Bottom action bar on phones and tablets — the only Book / Call / Text shortcut below desktop, so it's always shown. */
export default function MobileActionBar() {
  const t = useTranslations().pages.mobileBar

  const secondaryClass =
    'inline-flex h-10 flex-1 items-center justify-center gap-1.5 rounded-lg text-sm font-semibold text-[#222863] ring-1 ring-[#DCE3F0] active:bg-[#F4F7FB]'

  return (
    <>
      <div aria-hidden="true" className="h-16 bg-[#222863] lg:hidden" />
      <nav
        aria-label={t.label}
        className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E3E8F0] bg-white/95 px-4 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-12px_32px_-20px_rgba(34,40,99,0.45)] backdrop-blur lg:hidden"
      >
        <div className="mx-auto flex max-w-md items-center gap-2">
          <LocaleLink
            href="/appointments"
            className="inline-flex h-10 flex-[1.4] items-center justify-center gap-1.5 rounded-lg bg-[#222863] text-sm font-semibold text-white active:bg-[#1a1f52]"
          >
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {t.book}
          </LocaleLink>
          <a href={clinic.phoneHref} className={secondaryClass}>
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {t.call}
          </a>
          <a href={clinic.smsHref} className={secondaryClass}>
            <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
            {t.text}
          </a>
        </div>
      </nav>
    </>
  )
}
