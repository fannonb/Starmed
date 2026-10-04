export type MembershipCadence = 'monthly' | 'quarterly' | 'annual'

/**
 * Concierge membership pricing shown on the homepage plan card.
 * `price` is USD per billing period — leave `null` to show "Call for current pricing".
 * `popular` marks the cadence that is pre-selected and badged "Most popular".
 */
export const membershipPlans: {
  id: MembershipCadence
  price: number | null
  popular?: boolean
}[] = [
  { id: 'monthly', price: null },
  { id: 'quarterly', price: null, popular: true },
  { id: 'annual', price: null },
]
