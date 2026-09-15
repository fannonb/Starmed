'use client'

import ServicePageHero from '@/components/services/ServicePageHero'
import { useLocalizedService } from '@/hooks/useLocalizedServices'

type Props = {
  serviceId: string
  image: string
  imageAlt: string
  imagePosition?: string
}

/** Service detail hero localized from the bilingual catalog. */
export default function LocalizedServiceHero({
  serviceId,
  image,
  imageAlt,
  imagePosition,
}: Props) {
  const service = useLocalizedService(serviceId)
  const title = service?.title ?? ''
  const description = service?.detail ?? service?.desc ?? ''

  return (
    <ServicePageHero
      breadcrumb={title}
      title={title}
      description={description}
      image={image}
      imageAlt={imageAlt}
      imagePosition={imagePosition}
    />
  )
}
