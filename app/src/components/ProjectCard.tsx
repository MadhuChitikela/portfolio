import TechTag from './TechTag'
import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '../types'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ 
        duration: 0.7, 
        ease: [0.16, 1, 0.3, 1], 
        delay: index * 0.12 
      }}
      className="glass-card relative flex flex-col h-full"
    >
      {/* Badge */}
      <span className="absolute top-4 right-4 bg-[rgba(212,149,58,0.1)] text-accent-amber label-text px-3 py-1 rounded-full">
        {project.badge}
      </span>

      {/* Content */}
      <h3 className="text-[1.25rem] font-medium leading-tight text-text-primary mt-6 pr-24">
        {project.title}
      </h3>
      <p className="text-sm text-text-secondary mt-3 leading-relaxed line-clamp-3">
        {project.description}
      </p>

      {/* Metrics */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.metrics.map((metric) => (
          <span
            key={metric}
            className="bg-[rgba(0,0,0,0.03)] rounded-lg px-3 py-1.5 caption-text"
          >
            <span className="font-medium text-text-primary">{metric}</span>
          </span>
        ))}
      </div>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mt-5">
        {project.tags.map((tag) => (
          <TechTag key={tag} label={tag} />
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 mt-auto pt-5">
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 caption-text font-medium text-accent-teal hover:underline transition-colors"
          >
            Live Demo
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 caption-text text-text-secondary hover:text-text-primary transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  )
}
