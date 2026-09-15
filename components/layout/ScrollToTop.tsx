'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from '@/components/layout/LocaleProvider'

export default function ScrollToTop() {
  const t = useTranslations().common
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement
      const scrollBottom = window.scrollY + window.innerHeight
      const pageHeight = doc.scrollHeight
      // Show once the user reaches the lower portion of the page
      const nearBottom = scrollBottom >= pageHeight - Math.min(420, window.innerHeight * 0.55)
      const tallEnough = pageHeight > window.innerHeight * 1.35
      setVisible(tallEnough && nearBottom)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={`pointer-events-none fixed bottom-6 right-5 z-50 sm:bottom-8 sm:right-8 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none`}
      aria-hidden={!visible}
    >
      <button
        type="button"
        onClick={scrollUp}
        tabIndex={visible ? 0 : -1}
        aria-label={t.scrollToTop}
        className={`group pointer-events-auto relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full text-white shadow-[0_18px_40px_-18px_rgba(34,40,99,0.85)] ring-1 ring-white/25 transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-16px_rgba(59,163,232,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3BA3E8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F7FB] sm:h-14 sm:w-14 ${
          visible ? '' : 'pointer-events-none'
        }`}
        style={{
          background:
            'linear-gradient(145deg, #2a3178 0%, #222863 48%, #1a1f52 100%)',
        }}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(circle at 30% 25%, rgba(59,163,232,0.45), transparent 55%)',
          }}
        />
        <span
          aria-hidden="true"
          className="absolute inset-px rounded-full bg-gradient-to-b from-white/18 to-transparent opacity-80"
        />
        <svg
          className="relative h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-[1.35rem] sm:w-[1.35rem]"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10 15.5V5M10 5 5.5 9.5M10 5l4.5 4.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}
