export type MedspaGroupId = 'injectables' | 'skin' | 'wellness' | 'hair'
export type MedspaTreatmentId = 'botox' | 'fillers' | 'skin' | 'laser' | 'iv' | 'hormones' | 'weight' | 'hair'

/**
 * MedSpa & Wellness treatments in the same four groups as the homepage panel.
 * The group id doubles as the anchor on /medspa (e.g. /medspa#skin).
 * Copy lives in messages (pages.medspaPage.treatments). Availability is confirmed at consultation.
 */
export const medspaGroups: { id: MedspaGroupId; treatmentIds: MedspaTreatmentId[] }[] = [
  { id: 'injectables', treatmentIds: ['botox', 'fillers'] },
  { id: 'skin', treatmentIds: ['skin', 'laser'] },
  { id: 'wellness', treatmentIds: ['iv', 'hormones', 'weight'] },
  { id: 'hair', treatmentIds: ['hair'] },
]

/** Treatments owned by Primary Care link to their medical page instead of booking a MedSpa consultation. */
export const medspaTreatmentHrefs: Partial<Record<MedspaTreatmentId, string>> = {
  weight: '/services/weight-loss-management',
}
