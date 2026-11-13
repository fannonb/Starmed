import localFont from 'next/font/local'
import { Google_Sans } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

/**
 * Shared <html>/<body> shell, fonts, and site-wide metadata.
 * Used by the root layout (app/[locale]/layout.tsx) and app/global-not-found.tsx.
 */

const googleSans = Google_Sans({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-google-sans',
  display: 'swap',
})

const mackinac = localFont({
  src: [
    {
      path: '../public/fonts/mackinac/P22Mackinac-Medium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/mackinac/P22Mackinac-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/mackinac/P22Mackinac-Medium.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/mackinac/P22Mackinac-Medium.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-mackinac',
  display: 'swap',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
})

export const siteMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://starmedtx.com'),
  title: 'StarMed Clinic | Human-Centered Healthcare & Concierge Medicine San Antonio',
  description:
    'Compassionate whole-person primary care, mental wellness, neurofeedback, and concierge medicine in San Antonio, Texas. Healthcare that actually has time for you.',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
        type: 'image/png',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
        type: 'image/png',
      },
      { url: '/icon-64.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.png',
  },
}

export const siteViewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#222863',
}

export function SiteShell({ lang, children }: { lang: string; children: React.ReactNode }) {
  return (
    <html
      lang={lang}
      className={`${googleSans.variable} ${mackinac.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased font-sans bg-[#FAF7F2] text-[#251719]">{children}</body>
    </html>
  )
}
