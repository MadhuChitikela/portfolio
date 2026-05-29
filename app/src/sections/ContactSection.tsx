import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Phone, MapPin, Download, Linkedin, Github } from 'lucide-react'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Chitikelamadhu79@gmail.com',
    href: 'mailto:Chitikelamadhu79@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9392919814',
    href: 'tel:+919392919814',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Visakhapatnam, India',
    href: '#',
  },
]

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const headerEls = sectionRef.current.querySelectorAll('.contact-header-animate')
    gsap.from(headerEls, {
      opacity: 0,
      y: 25,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        once: true,
      },
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="w-full"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        paddingTop: 'var(--section-gap)',
        paddingBottom: 'var(--section-gap)',
      }}
    >
      <div className="section-container">
        <div className="text-center max-w-[600px] mx-auto">
          <p className="contact-header-animate label-text text-accent-amber">
            GET IN TOUCH
          </p>
          <h2 className="contact-header-animate text-[clamp(2rem,4vw,3rem)] font-normal tracking-tight leading-tight text-text-primary mt-3">
            Let's build something together
          </h2>
          <p className="contact-header-animate text-base text-text-secondary mt-3">
            Open to AI/ML engineering roles, internships, and collaborative projects
          </p>
        </div>

        {/* Contact cards */}
        <div
          ref={cardsRef}
          className="flex flex-col sm:flex-row justify-center gap-6 mt-10"
        >
          {contactCards.map((card, index) => {
            const Icon = card.icon
            const isLocation = card.label === 'Location'
            const CardComponent = isLocation ? motion.div : motion.a
            const cardProps = isLocation 
              ? {} 
              : { href: card.href, target: '_blank', rel: 'noopener noreferrer' }

            return (
              <CardComponent
                key={card.label}
                {...cardProps}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for easeOutExpo
                  delay: index * 0.12 
                }}
                className={`contact-card bg-white border rounded-2xl p-6 min-w-[220px] text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col items-center justify-center ${
                  isLocation 
                    ? 'border-accent-amber/60 shadow-[0_8px_30px_rgba(212,149,58,0.06)]' 
                    : 'border-border-subtle hover:border-text-muted cursor-pointer'
                }`}
              >
                {isLocation && (
                  <span className="absolute top-3 right-3 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-teal"></span>
                  </span>
                )}
                
                <Icon className="w-6 h-6 text-accent-amber mx-auto" />
                
                <p className={`caption-text mt-4 font-semibold tracking-wider ${isLocation ? 'text-accent-amber' : 'text-text-muted'}`}>
                  {card.label}
                </p>
                
                <p className="text-sm font-bold text-text-primary mt-1">
                  {card.value}
                </p>
              </CardComponent>
            )
          })}
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4 mt-8">
          <a
            href="https://www.linkedin.com/in/madhu-chitikela/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-text-secondary hover:text-accent-amber transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/MadhuChitikela"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-text-secondary hover:text-accent-amber transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://huggingface.co/madhuchitikela"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-text-secondary hover:text-accent-amber transition-colors"
            aria-label="HuggingFace"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
          </a>
        </div>

        {/* Big CTA */}
        <div className="flex justify-center mt-8">
          <a
            href="/Madhu_Chitikela_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-9 py-3.5 bg-accent-amber text-white text-base font-medium rounded-full hover:scale-[1.04] hover:shadow-amber-lg transition-all duration-250"
          >
            <Download className="w-[18px] h-[18px]" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
