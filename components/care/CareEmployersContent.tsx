'use client'

import PathwayHero from '@/components/care/PathwayHero'
import { useTranslations } from '@/components/layout/LocaleProvider'
import { DirectPrimaryCareBusinessesBody } from '@/components/services/DirectPrimaryCareBusinessesContent'

export default function CareEmployersContent() {
  const t = useTranslations()
  const copy = t.care.employers

  return (
    <>
      <PathwayHero
        breadcrumb={copy.breadcrumb}
        homeLabel={t.common.home}
        title={copy.title}
        titleAccent={copy.titleAccent}
        description={copy.description}
        image="/service-business-photo.webp"
        imageAlt="Employer Direct Primary Care consultation at StarMed"
        imagePosition="center 30%"
      />

      <DirectPrimaryCareBusinessesBody />
    </>
  )
}
