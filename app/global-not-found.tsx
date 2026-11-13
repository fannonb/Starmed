import type { Metadata } from 'next'
import { SiteShell, siteViewport } from '@/app/site-shell'

export const metadata: Metadata = {
  title: 'Page not found | StarMed Clinic',
  robots: { index: false },
}
export const viewport = siteViewport

/** 404 for URLs outside /en and /es (exported as 404.html; Apache serves it via .htaccess). */
export default function GlobalNotFound() {
  return (
    <SiteShell lang="en">
      <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#3BA3E8]">404</p>
        <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-[#222863]">
          Page not found
        </h1>
        <p className="mt-2 text-lg text-[#3D4452]">Página no encontrada</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="/en/"
            className="inline-flex h-11 items-center rounded-lg bg-[#222863] px-6 text-sm font-semibold text-white hover:bg-[#1a1f52]"
          >
            Go to homepage
          </a>
          <a
            href="/es/"
            className="inline-flex h-11 items-center rounded-lg border border-[#D5DEEA] bg-white px-6 text-sm font-semibold text-[#222863] hover:border-[#222863]"
          >
            Ir a la página principal
          </a>
        </div>
      </main>
    </SiteShell>
  )
}
