import { redirect } from 'next/navigation'

/** Short alias for /frequently-asked-questions */
export default async function FaqAliasPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  redirect(`/${locale}/frequently-asked-questions`)
}
