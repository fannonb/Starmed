export type MembershipPackageId = 'essential' | 'premier' | 'radiance'

/**
 * The StarMED Membership Collection shown on the homepage.
 * Names, labels, and benefits live in messages (pages.access.packages).
 * `price` is USD per month — leave `null` to show "Request details" until fees are approved.
 * `featured` gives the card the highlighted border.
 */
export const membershipPackages: {
  id: MembershipPackageId
  category: 'medical' | 'both' | 'medspa'
  price: number | null
  featured?: boolean
}[] = [
  { id: 'essential', category: 'medical', price: null },
  { id: 'premier', category: 'both', price: null, featured: true },
  { id: 'radiance', category: 'medspa', price: null },
]

export const membershipPackageIds = membershipPackages.map((p) => p.id)

export type MembershipBenefitId =
  | 'preventivePlan'
  | 'extendedVisits'
  | 'schedulingPrivileges'
  | 'chronicFollowUp'
  | 'wellnessRates'
  | 'physicianCommunication'
  | 'sameDayPriority'
  | 'annualReview'
  | 'referrals'
  | 'medspaBenefits'
  | 'aestheticConsultation'
  | 'skinReviews'
  | 'injectableRates'
  | 'aestheticScheduling'
  | 'ivAddOns'

/**
 * Full benefit comparison on /membership, from the StarMED Membership Collection.
 * Each benefit lists the packages that include it; `optional` marks an add-on rather than an inclusion.
 * Labels live in messages (pages.membershipPage.benefits).
 */
export const membershipBenefits: {
  group: 'medical' | 'medspa'
  rows: { id: MembershipBenefitId; packages: MembershipPackageId[]; optional?: boolean }[]
}[] = [
  {
    group: 'medical',
    rows: [
      { id: 'preventivePlan', packages: ['essential', 'premier'] },
      { id: 'extendedVisits', packages: ['essential', 'premier'] },
      { id: 'schedulingPrivileges', packages: ['essential', 'premier'] },
      { id: 'chronicFollowUp', packages: ['essential', 'premier'] },
      { id: 'wellnessRates', packages: ['essential', 'premier'] },
      { id: 'physicianCommunication', packages: ['premier'] },
      { id: 'sameDayPriority', packages: ['premier'] },
      { id: 'annualReview', packages: ['premier'] },
      { id: 'referrals', packages: ['premier'] },
    ],
  },
  {
    group: 'medspa',
    rows: [
      { id: 'medspaBenefits', packages: ['premier'] },
      { id: 'aestheticConsultation', packages: ['radiance'] },
      { id: 'skinReviews', packages: ['radiance'] },
      { id: 'injectableRates', packages: ['radiance'] },
      { id: 'aestheticScheduling', packages: ['radiance'] },
      { id: 'ivAddOns', packages: ['radiance'], optional: true },
    ],
  },
]
