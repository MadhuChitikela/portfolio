import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SectionHeaderProps {
  label: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeader({ label, title, subtitle, centered = true, light = false }: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll('.sh-animate')
    gsap.fromTo(
      els,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          once: true,
        },
      }
    )
  }, [])

  return (
    <div ref={ref} className={centered ? 'text-center' : 'text-left'}>
      <p className={`sh-animate label-text ${light ? 'text-white/70' : 'text-accent-amber'} mb-3`}>
        {label}
      </p>
      <h2 className={`sh-animate text-[clamp(2rem,4vw,3rem)] font-normal tracking-tight leading-tight ${light ? 'text-white' : 'text-text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`sh-animate mt-2 text-base ${light ? 'text-white/70' : 'text-text-secondary'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
