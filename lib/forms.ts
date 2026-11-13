/**
 * Posts a website form to its PHP handler in public/api (served by cPanel/Apache).
 * The handler replies with the form's state as JSON: { status, errors? }.
 */
export async function postForm<State extends { status: string }>(
  endpoint: string,
  formData: FormData,
): Promise<State> {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    })
    const data = (await response.json()) as State
    if (data && typeof data.status === 'string') return data
  } catch {
    // Network error, or the PHP handler isn't available (e.g. `next dev`).
  }
  return { status: 'unavailable' } as State
}
