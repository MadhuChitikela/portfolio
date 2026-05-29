import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Brain, Wrench, Database, Plug } from 'lucide-react'
import type { SkillCategory as SkillCategoryType } from '../types'

gsap.registerPlugin(ScrollTrigger)

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  brain: Brain,
  wrench: Wrench,
  database: Database,
  plug: Plug,
}

const colorMap: Record<string, string> = {
  amber: 'bg-accent-amber',
  violet: 'bg-accent-violet',
  teal: 'bg-accent-teal',
  warm: 'bg-accent-warm',
}

interface SkillCategoryProps {
  category: SkillCategoryType
  index: number
}

export default function SkillCategoryCard({ category, index }: SkillCategoryProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const Icon = iconMap[category.icon] || Brain
  const bgColor = colorMap[category.iconColor] || 'bg-accent-amber'

  useEffect(() => {
    if (!cardRef.current) return
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        delay: index * 0.1,
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
      className="border border-border-subtle rounded-2xl p-6 opacity-0"
    >
      {/* Icon */}
      <div className={`w-8 h-8 ${bgColor} rounded-full flex items-center justify-center`}>
        <Icon className="w-4 h-4 text-white" />
      </div>

      <h3 className="text-[1.1rem] font-medium text-text-primary mt-4">
        {category.title}
      </h3>

      <ul className="mt-3 space-y-0">
        {category.skills.map((skill) => (
          <li key={skill} className="text-sm text-text-secondary leading-[2]">
            <span className="text-text-muted mr-2">—</span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}
