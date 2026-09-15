'use client'

import { useTranslations } from '@/components/layout/LocaleProvider'

export default function HealthMatters() {
  const t = useTranslations().pages.healthMatters
  const stats = [
    { value: '10+', label: t.years },
    { value: '100+', label: t.patients },
    { value: '95%', label: t.satisfaction },
  ]

  return (
    <section
      className="py-5 sm:py-6"
      id="philosophy"
      style={{
        background: 'linear-gradient(180deg, #2a3470 0%, #222863 55%, #1a1f4a 100%)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 divide-y divide-white/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-baseline justify-center gap-2.5 py-3 text-center sm:justify-start sm:px-6 sm:py-0 sm:text-left first:sm:pl-0 last:sm:pr-0"
            >
              <span className="font-serif text-2xl font-medium leading-none tracking-tight text-[#3BA3E8] sm:text-[1.75rem]">
                {stat.value}
              </span>
              <span className="max-w-[10.5rem] text-left text-xs leading-snug text-white sm:text-[13px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
