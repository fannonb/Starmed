export type MedspaGroupId = 'injectables' | 'laser' | 'body' | 'renewal' | 'wellness'
export type MedspaTreatmentId =
  | 'botox'
  | 'fillers'
  | 'co2'
  | 'bbl'
  | 'lutronic'
  | 'bodySculpt'
  | 'bodyTone'
  | 'rf'
  | 'hifu'
  | 'rfMicroneedling'
  | 'prp'
  | 'facials'
  | 'hair'
  | 'iv'
  | 'hormones'
  | 'weight'

/**
 * MedSpa & Wellness treatments in the same groups as the homepage panel.
 * The group id doubles as the anchor on /medspa (e.g. /medspa#laser).
 * Copy lives in messages (pages.medspaPage.treatments). Availability is confirmed at consultation.
 */
export const medspaGroups: { id: MedspaGroupId; treatmentIds: MedspaTreatmentId[] }[] = [
  { id: 'injectables', treatmentIds: ['botox', 'fillers'] },
  { id: 'laser', treatmentIds: ['co2', 'bbl', 'lutronic'] },
  { id: 'renewal', treatmentIds: ['rfMicroneedling', 'prp', 'facials', 'hair'] },
  { id: 'wellness', treatmentIds: ['iv', 'hormones', 'weight'] },
  // Last: it has no photo yet, so on /medspa it shares the final row with the consultation card
  { id: 'body', treatmentIds: ['bodySculpt', 'bodyTone', 'rf', 'hifu'] },
]

/** Treatments owned by Primary Care link to their medical page instead of booking a MedSpa consultation. */
export const medspaTreatmentHrefs: Partial<Record<MedspaTreatmentId, string>> = {
  weight: '/services/weight-loss-management',
}

/** Radiance membership benefits shown on /medspa, in display order. Copy lives in pages.medspaPage.radianceBenefits. */
export const radianceBenefitIds = ['savings', 'planning', 'physician', 'technology', 'continuity', 'priority'] as const
export type RadianceBenefitId = (typeof radianceBenefitIds)[number]
