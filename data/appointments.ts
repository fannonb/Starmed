/**
 * Appointment request options. Labels live in messages (pages.appointments);
 * the server only accepts these ids.
 */
export const visitTypeIds = [
  'urgent',
  'wellness',
  'primary',
  'labs',
  'mental',
  'weight',
  'omt',
  'other',
] as const

export const patientStatusIds = ['new', 'returning'] as const

export type VisitTypeId = (typeof visitTypeIds)[number]

/** Clinic opening hours for requests (Mon–Fri). The last slot starts 30 minutes before closing. */
export const clinicHours = { startHour: 8, endHour: 17, stepMinutes: 30 } as const
export const clinicTimeZone = 'America/Chicago'
/** How far ahead people can request a visit. */
export const maxDaysAhead = 90

export const appointmentLimits = {
  name: 100,
  email: 254,
  phone: 30,
  notes: 500,
} as const

export type AppointmentField =
  | 'visitType'
  | 'patientStatus'
  | 'date'
  | 'time'
  | 'name'
  | 'email'
  | 'phone'
  | 'notes'

export type AppointmentErrorCode =
  | 'required'
  | 'invalid'
  | 'too-long'
  | 'past'
  | 'closed'
  | 'too-far'

export type AppointmentFormState = {
  status: 'idle' | 'success' | 'invalid' | 'rate-limited' | 'unavailable'
  /** Field → error code; the client turns codes into localized text. */
  errors?: Partial<Record<AppointmentField, AppointmentErrorCode>>
}
