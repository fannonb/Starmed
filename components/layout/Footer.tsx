'use client'

import { useTranslations } from '@/components/layout/LocaleProvider'

export default function Footer() {
  const t = useTranslations()
  const year = new Date().getFullYear()

  return (
    <footer>
      <div
        style={{
          background: 'linear-gradient(105deg, #1a1f4a 0%, #222863 55%, #27306e 100%)',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs text-white/55">
            © {year} StarMed. {t.footer.rightsReserved}
          </p>
        </div>
      </div>
    </footer>
  )
}
