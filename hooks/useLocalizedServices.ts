import { services, type Service } from '@/data/services'
import type { Locale } from '@/lib/i18n'
import { catalogEn, catalogEs } from '@/messages/catalog'
import { useLocale } from '@/components/layout/LocaleProvider'

type CatalogKey = keyof typeof catalogEn

export function localizeServices(locale: Locale): Service[] {
  const catalog = locale === 'es' ? catalogEs : catalogEn
  return services.map((service) => {
    const copy = catalog[service.id as CatalogKey]
    if (!copy) return service
    return {
      ...service,
      title: copy.title,
      desc: copy.desc,
      detail: copy.detail,
    }
  })
}

export function useLocalizedServices(): Service[] {
  const { locale } = useLocale()
  return localizeServices(locale)
}

export function useLocalizedService(id: string): Service | undefined {
  return useLocalizedServices().find((service) => service.id === id)
}
