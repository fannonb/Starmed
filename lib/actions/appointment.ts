'use server'

import {
  appointmentLimits,
  clinicHours,
  clinicTimeZone,
  locationIds,
  maxDaysAhead,
  patientStatusIds,
  visitTypeIds,
  type AppointmentField,
  type AppointmentFormState,
} from '@/data/appointments'
import {
  clean,
  EMAIL_PATTERN,
  isLikelyBot,
  isRateLimited,
  PHONE_PATTERN,
  sendClinicEmail,
} from '@/lib/server/form-guard'

/** Plain English labels for the front-desk email. */
const staffLabels: Record<string, string> = {
  urgent: 'Sick or hurt (urgent)',
  wellness: 'Checkup or physical',
  primary: 'Primary care / ongoing condition',
  labs: 'Lab work or tests',
  mental: 'Mental health',
  weight: 'Weight loss',
  omt: 'Back pain / OMT',
  other: 'Something else',
  new: 'New patient',
  returning: 'Returning patient',
  either: 'Either location',
  'suite-202': 'Suite 202 — 24165 W Interstate 10 Frontage Rd',
  'suite-1206': 'Suite 1206 — 22211 I-10',
}

/** Today's date (YYYY-MM-DD) and minutes past midnight at the clinic. */
function clinicNow() {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: clinicTimeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date())
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '00'
  return {
    date: `${get('year')}-${get('month')}-${get('day')}`,
    minutes: (Number(get('hour')) % 24) * 60 + Number(get('minute')),
  }
}

function parseDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null
  const [y, m, d] = value.split('-').map(Number)
  const date = new Date(Date.UTC(y, m - 1, d))
  const real = date.getUTCFullYear() === y && date.getUTCMonth() === m - 1 && date.getUTCDate() === d
  return real ? date : null
}

function slotMinutes(value: string) {
  if (!/^\d{2}:\d{2}$/.test(value)) return null
  const [h, m] = value.split(':').map(Number)
  const minutes = h * 60 + m
  const { startHour, endHour, stepMinutes } = clinicHours
  const inHours = minutes >= startHour * 60 && minutes < endHour * 60
  return inHours && (minutes - startHour * 60) % stepMinutes === 0 ? minutes : null
}

const oneOf = (list: readonly string[], value: string) => list.includes(value)

export async function requestAppointment(
  _prev: AppointmentFormState,
  formData: FormData,
): Promise<AppointmentFormState> {
  // Bots get a fake success so they have no signal to adapt to.
  if (isLikelyBot(formData)) return { status: 'success' }

  const fields = {
    visitType: clean(formData.get('visitType')),
    patientStatus: clean(formData.get('patientStatus')),
    location: clean(formData.get('location')),
    date: clean(formData.get('date')),
    time: clean(formData.get('time')),
    name: clean(formData.get('name')),
    email: clean(formData.get('email')).toLowerCase(),
    phone: clean(formData.get('phone')),
    notes: clean(formData.get('notes'), true),
  }

  const errors: AppointmentFormState['errors'] = {}
  const require = (field: AppointmentField) => {
    if (!fields[field]) errors[field] = 'required'
  }
  const choice = (field: AppointmentField, list: readonly string[]) => {
    require(field)
    if (fields[field] && !oneOf(list, fields[field])) errors[field] = 'invalid'
  }
  const limit = (field: keyof typeof appointmentLimits) => {
    if (fields[field].length > appointmentLimits[field]) errors[field] = 'too-long'
  }

  choice('visitType', visitTypeIds)
  choice('patientStatus', patientStatusIds)
  choice('location', locationIds)

  require('name')
  limit('name')
  require('email')
  if (fields.email && !EMAIL_PATTERN.test(fields.email)) errors.email = 'invalid'
  limit('email')
  require('phone')
  if (fields.phone && !PHONE_PATTERN.test(fields.phone)) errors.phone = 'invalid'
  limit('phone')
  limit('notes')

  // Date and time are checked against the clinic's own clock and opening days.
  const now = clinicNow()
  require('date')
  const date = fields.date ? parseDate(fields.date) : null
  if (fields.date && !date) errors.date = 'invalid'
  if (date) {
    const today = parseDate(now.date)!
    const daysAhead = Math.round((date.getTime() - today.getTime()) / 86_400_000)
    const weekday = date.getUTCDay()
    if (daysAhead < 0) errors.date = 'past'
    else if (weekday === 0 || weekday === 6) errors.date = 'closed'
    else if (daysAhead > maxDaysAhead) errors.date = 'too-far'
  }

  require('time')
  const minutes = fields.time ? slotMinutes(fields.time) : null
  if (fields.time && minutes === null) errors.time = 'invalid'
  if (minutes !== null && !errors.date && fields.date === now.date && minutes <= now.minutes) {
    errors.time = 'past'
  }

  if (Object.keys(errors).length > 0) return { status: 'invalid', errors }

  // Only count requests that would actually be sent, so fixing mistakes never locks anyone out.
  if (await isRateLimited('appointment')) return { status: 'rate-limited' }

  const sent = await sendClinicEmail({
    subject: `Appointment request: ${fields.date} ${fields.time} — ${fields.name}`,
    replyTo: fields.email,
    text: [
      'New appointment request from the website. Please confirm with the patient.',
      '',
      `Visit: ${staffLabels[fields.visitType]}`,
      `Patient: ${staffLabels[fields.patientStatus]}`,
      `Location: ${staffLabels[fields.location]}`,
      `Preferred date: ${fields.date}`,
      `Preferred time: ${fields.time}`,
      '',
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      `Phone: ${fields.phone}`,
      '',
      `Notes: ${fields.notes || '—'}`,
    ].join('\n'),
  })

  return { status: sent ? 'success' : 'unavailable' }
}
