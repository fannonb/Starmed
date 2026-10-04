/**
 * Contact form inquiry types, in display order.
 * Labels live in messages (pages.contactPage.inquiries); the server only accepts these ids.
 */
export const inquiryIds = [
  'appointment',
  'membership',
  'insurance',
  'services',
  'employers',
  'feedback',
  'other',
] as const

export type InquiryId = (typeof inquiryIds)[number]

/** Field length limits, shared by the form and the server check. */
export const contactLimits = {
  name: 100,
  email: 254,
  phone: 30,
  message: 2000,
} as const

export type ContactField = 'name' | 'email' | 'phone' | 'inquiry' | 'message'

export type ContactFormState = {
  status: 'idle' | 'success' | 'invalid' | 'rate-limited' | 'unavailable'
  /** Field → error code; the client turns codes into localized text. */
  errors?: Partial<Record<ContactField, 'required' | 'invalid' | 'too-long'>>
}
