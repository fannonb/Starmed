import 'server-only'

import { headers } from 'next/headers'

/**
 * Shared protection for public website forms (contact, appointment requests).
 * Server-only: imported by Server Actions, never by client components.
 */

/** Submissions faster than this are almost always bots. */
const MIN_FILL_MS = 3000
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 }

/**
 * Best-effort, per-instance limiter. On serverless hosts each instance keeps its own
 * counts, so also enable the host's rate limiting (or move this to Redis/KV).
 */
const recentSubmissions = new Map<string, number[]>()

/** Honeypot field filled, or form sent too fast: treat as a bot. */
export function isLikelyBot(formData: FormData) {
  if (clean(formData.get('company'))) return true
  const startedAt = Number(formData.get('startedAt'))
  return !Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS
}

/** Counts a send for this visitor and form; true once they hit the limit. */
export async function isRateLimited(form: string) {
  const requestHeaders = await headers()
  const ip =
    requestHeaders.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    requestHeaders.get('x-real-ip') ||
    'unknown'
  const key = `${form}:${ip}`
  const now = Date.now()
  const hits = (recentSubmissions.get(key) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs)
  if (hits.length >= RATE_LIMIT.max) {
    recentSubmissions.set(key, hits)
    return true
  }
  hits.push(now)
  recentSubmissions.set(key, hits)
  // Keep the map from growing without bound.
  if (recentSubmissions.size > 5000) recentSubmissions.clear()
  return false
}

/** Strip control characters; single-line fields also lose line breaks (blocks header injection). */
export function clean(value: FormDataEntryValue | null, multiline = false) {
  if (typeof value !== 'string') return ''
  const pattern = multiline ? /[\u0000-\u0009\u000B-\u001F\u007F]/g : /[\u0000-\u001F\u007F]/g
  return value.replace(pattern, multiline ? '' : ' ').trim()
}

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
export const PHONE_PATTERN = /^[0-9+().\-\s]{7,}$/

/**
 * Sends a plain-text email to the clinic inbox via Resend.
 * Plain text only, so nothing a visitor types can render as HTML in the clinic's inbox.
 * Returns false when email isn't configured or the provider fails.
 */
export async function sendClinicEmail({
  subject,
  text,
  replyTo,
}: {
  subject: string
  text: string
  replyTo: string
}) {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM_EMAIL
  const to = process.env.CONTACT_TO_EMAIL ?? 'info@starmed.clinic'
  if (!apiKey || !from) return false

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from, to: [to], reply_to: replyTo, subject, text }),
      signal: AbortSignal.timeout(8000),
    })
    // Never log form contents: they may contain personal health information.
    if (!response.ok) {
      console.error(`Website form: email provider returned ${response.status}`)
      return false
    }
    return true
  } catch {
    console.error('Website form: email provider request failed')
    return false
  }
}
