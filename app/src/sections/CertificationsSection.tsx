import SectionHeader from '../components/SectionHeader'
import CertCard from '../components/CertCard'
import type { Certification } from '../types'

const certifications: Certification[] = [
  {
    id: 1,
    name: 'Oracle Cloud Infrastructure 2025 — Certified Generative AI Professional',
    issuer: 'Oracle',
    year: '2025',
  },
  {
    id: 2,
    name: 'Oracle Cloud Infrastructure 2025 — Certified AI Foundations Associate',
    issuer: 'Oracle',
    year: '2025',
  },
]

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="w-full"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        paddingTop: 'var(--section-gap)',
        paddingBottom: 'var(--section-gap)',
      }}
    >
      <div className="section-container">
        <SectionHeader label="CREDENTIALS" title="Certifications" />

        <div className="flex flex-col sm:flex-row justify-center gap-8 mt-10">
          {certifications.map((cert, index) => (
            <CertCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
