'use server'

import {
  contactLimits,
  inquiryIds,
  type ContactField,
  type ContactFormState,
  type InquiryId,
} from '@/data/contact'
import {
  clean,
  EMAIL_PATTERN,
  isLikelyBot,
  isRateLimited,
  PHONE_PATTERN,
  sendClinicEmail,
} from '@/lib/server/form-guard'

export async function sendContactMessage(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Bots get a fake success so they have no signal to adapt to.
  if (isLikelyBot(formData)) return { status: 'success' }

  const fields = {
    name: clean(formData.get('name')),
    email: clean(formData.get('email')).toLowerCase(),
    phone: clean(formData.get('phone')),
    inquiry: clean(formData.get('inquiry')),
    message: clean(formData.get('message'), true),
  }

  const errors: ContactFormState['errors'] = {}
  const require = (field: ContactField) => {
    if (!fields[field]) errors[field] = 'required'
  }
  const limit = (field: keyof typeof contactLimits) => {
    if (fields[field].length > contactLimits[field]) errors[field] = 'too-long'
  }

  require('name')
  limit('name')
  require('email')
  if (fields.email && !EMAIL_PATTERN.test(fields.email)) errors.email = 'invalid'
  limit('email')
  require('phone')
  if (fields.phone && !PHONE_PATTERN.test(fields.phone)) errors.phone = 'invalid'
  limit('phone')
  require('inquiry')
  if (fields.inquiry && !inquiryIds.includes(fields.inquiry as InquiryId)) {
    errors.inquiry = 'invalid'
  }
  require('message')
  limit('message')

  if (Object.keys(errors).length > 0) return { status: 'invalid', errors }

  // Only count messages that would actually be sent, so fixing typos never locks anyone out.
  if (await isRateLimited('contact')) return { status: 'rate-limited' }

  const sent = await sendClinicEmail({
    subject: `Website message (${fields.inquiry}) from ${fields.name}`,
    replyTo: fields.email,
    text: [
      `Inquiry: ${fields.inquiry}`,
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      `Phone: ${fields.phone}`,
      '',
      fields.message,
    ].join('\n'),
  })

  return { status: sent ? 'success' : 'unavailable' }
}
