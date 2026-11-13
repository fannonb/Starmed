import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://starmedtx.com'

/** Public pages, without the locale prefix. Keep in sync with app/[locale]. */
const paths = [
  '',
  '/about',
  '/appointments',
  '/care/employers',
  '/care/individuals',
  '/care/mental-health',
  '/contact',
  '/faq',
  '/medspa',
  '/membership',
  '/primary-care',
  '/services',
  '/services/body-composition-analysis',
  '/services/chronic-condition-management',
  '/services/diagnostic-and-laboratory-services',
  '/services/direct-primary-care-for-businesses',
  '/services/ketamine-infusion-therapy',
  '/services/mental-wellness',
  '/services/osteopathic-manipulative-treatment',
  '/services/pediatric-and-geriatric-care',
  '/services/physical-and-wellness-exams',
  '/services/primary-and-preventive-care',
  '/services/urgent-care-and-minor-procedures',
  '/services/weight-loss-management',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${siteUrl}/en${path}/`,
    alternates: {
      languages: { en: `${siteUrl}/en${path}/`, es: `${siteUrl}/es${path}/` },
    },
  }))
}
