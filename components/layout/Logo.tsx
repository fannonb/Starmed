import Image from 'next/image'

type LogoProps = {
  className?: string
  preload?: boolean
}

export default function Logo({ className, preload = false }: LogoProps) {
  return (
    <Image
      src="/starmed-logo.png"
      alt="StarMed — Reliable Health Care"
      width={1024}
      height={398}
      preload={preload}
      className={className}
      sizes="200px"
      style={{ width: 'auto' }}
    />
  )
}
