import { Brain, Wrench, Database, Plug } from 'lucide-react'
import type { SkillCategory as SkillCategoryType } from '../types'
import { motion } from 'framer-motion'

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
  const Icon = iconMap[category.icon] || Brain
  const bgColor = colorMap[category.iconColor] || 'bg-accent-amber'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-45px" }}
      transition={{ 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1], 
        delay: index * 0.1 
      }}
      className="border border-border-subtle rounded-2xl p-6"
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
    </motion.div>
  )
}
