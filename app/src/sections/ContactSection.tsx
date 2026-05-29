import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Phone, MapPin, Download, Linkedin, Github } from 'lucide-react'

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
    if (!sectionRef.current || !cardsRef.current) return

    const headerEls = sectionRef.current.querySelectorAll('.contact-header-animate')
    gsap.from(headerEls, {
      opacity: 0,
      y: 25,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true,
      },
    })

    const cards = cardsRef.current.querySelectorAll('.contact-card')
    gsap.from(cards, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: cardsRef.current,
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
          {contactCards.map((card) => {
            const Icon = card.icon
            return (
              <a
                key={card.label}
                href={card.href}
                className="contact-card bg-white border border-border-subtle rounded-2xl p-6 min-w-[200px] text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <Icon className="w-6 h-6 text-accent-amber mx-auto" />
                <p className="caption-text text-text-muted mt-4">{card.label}</p>
                <p className="text-sm font-medium text-text-primary mt-1">{card.value}</p>
              </a>
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
            href="https://huggingface.co/chitikelamadhu"
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
