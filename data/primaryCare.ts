import type { VisitTypeId } from '@/data/appointments'

export type PrimaryCareGroupId = 'everyday' | 'chronic' | 'mental' | 'weight'

/**
 * Primary Care services in the same four groups as the homepage panel.
 * The group id doubles as the anchor on /primary-care (e.g. /primary-care#chronic).
 */
export const primaryCareGroups: { id: PrimaryCareGroupId; serviceIds: string[] }[] = [
  { id: 'everyday', serviceIds: ['urgent', 'wellness-exams', 'primary', 'pediatric-geriatric'] },
  { id: 'chronic', serviceIds: ['chronic', 'diagnostics'] },
  { id: 'mental', serviceIds: ['mental-wellness', 'ketamine', 'omt'] },
  { id: 'weight', serviceIds: ['weight-loss', 'body-composition'] },
]

/** Maps a service to the appointment form's visit type, so booking links can pre-select it. */
export const visitTypeByService: Record<string, VisitTypeId> = {
  primary: 'primary',
  chronic: 'primary',
  diagnostics: 'labs',
  'pediatric-geriatric': 'primary',
  urgent: 'urgent',
  'wellness-exams': 'wellness',
  omt: 'omt',
  'weight-loss': 'weight',
  'body-composition': 'weight',
  'mental-wellness': 'mental',
  ketamine: 'mental',
}

export function bookingHref(serviceId?: string | null): string {
  const visit = serviceId ? visitTypeByService[serviceId] : undefined
  return visit ? `/appointments?visit=${visit}` : '/appointments'
}

export function groupOfService(serviceId: string) {
  return primaryCareGroups.find((group) => group.serviceIds.includes(serviceId))
}
