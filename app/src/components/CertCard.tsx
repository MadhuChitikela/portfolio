import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Certification } from '../types'

gsap.registerPlugin(ScrollTrigger)

interface CertCardProps {
  cert: Certification
  index: number
}

export default function CertCard({ cert, index }: CertCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current) return
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        delay: index * 0.15,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          once: true,
        },
      }
    )
  }, [index])

  return (
    <div
      ref={cardRef}
      className="bg-white border border-border-subtle rounded-2xl p-8 min-w-[280px] max-w-[400px] flex-1 opacity-0 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
    >
      {/* Oracle logo mark */}
      <div className="w-12 h-12 rounded-full border-2 border-[#C74634] flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-[#C74634]" />
      </div>

      <h3 className="text-[1.1rem] font-medium text-text-primary mt-5 leading-snug">
        {cert.name}
      </h3>
      <p className="caption-text text-text-muted mt-2">{cert.issuer}</p>
      <p className="caption-text text-accent-amber mt-1">{cert.year}</p>
    </div>
  )
}
