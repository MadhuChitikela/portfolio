export interface Project {
  id: number
  title: string
  description: string
  metrics: string[]
  tags: string[]
  badge: string
  liveDemo?: string
  github?: string
}

export interface SkillCategory {
  id: number
  title: string
  icon: string
  iconColor: string
  skills: string[]
}

export interface Certification {
  id: number
  name: string
  issuer: string
  year: string
}

export interface ContactInfo {
  type: string
  value: string
  icon: string
}
