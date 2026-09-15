import localFont from 'next/font/local'
import { Google_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { cookies } from 'next/headers'
import { defaultLocale, isLocale, LOCALE_COOKIE } from '@/lib/i18n'
import './globals.css'

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

export const metadata: Metadata = {
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

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#222863',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const raw = cookieStore.get(LOCALE_COOKIE)?.value
  const lang = raw && isLocale(raw) ? raw : defaultLocale

  return (
    <html lang={lang} className={`${googleSans.variable} ${mackinac.variable}`}>
      <body className="antialiased font-sans bg-[#FAF7F2] text-[#251719]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
