'use client'

import CareChooser from '@/components/care/CareChooser'
import PathwayHero from '@/components/care/PathwayHero'
import { useTranslations } from '@/components/layout/LocaleProvider'
import ServiceWaysToPay from '@/components/services/ServiceWaysToPay'

/** Services for individuals and families, most common needs first. */
const serviceIds = [
  'urgent',
  'wellness-exams',
  'primary',
  'chronic',
  'pediatric-geriatric',
  'diagnostics',
  'mental-wellness',
  'weight-loss',
  'omt',
] as const

export default function CareIndividualsContent() {
  const t = useTranslations()
  const copy = t.care.individuals

  return (
    <>
      <PathwayHero
        breadcrumb={copy.breadcrumb}
        homeLabel={t.common.home}
        title={copy.title}
        titleAccent={copy.titleAccent}
        description={copy.description}
        image="/service-pediatric.jpg"
        imageAlt="A StarMed clinician with a child during a family care visit"
        imagePosition="center 22%"
      />

      <CareChooser serviceIds={serviceIds} />

      <ServiceWaysToPay />
    </>
  )
}
