import type { Certification } from '../types'
import { motion } from 'framer-motion'

interface CertCardProps {
  cert: Certification
  index: number
}

export default function CertCard({ cert, index }: CertCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.7, 
        ease: [0.16, 1, 0.3, 1], 
        delay: index * 0.15 
      }}
      className="bg-white border border-border-subtle rounded-2xl p-8 min-w-[280px] max-w-[400px] flex-1 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
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
    </motion.div>
  )
}
