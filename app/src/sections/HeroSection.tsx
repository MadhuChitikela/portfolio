import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDown, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import StatBlock from '../components/StatBlock'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const sphereWrapperRef = useRef<HTMLDivElement>(null)
  const entranceRef = useRef<HTMLDivElement>(null)
  const mobileEntranceRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return

    const elements = contentRef.current.querySelectorAll('.hero-animate')
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(
      elements[0],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      0.2
    )
      .fromTo(
        elements[1],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.35
      )
      .fromTo(
        elements[2],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.55
      )
      .fromTo(
        elements[3],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.7
      )
      .fromTo(
        elements[4],
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5 },
        0.95
      )
      .fromTo(
        elements[5],
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        1.1
      )

    return () => {
      tl.kill()
    }
  }, [])

  // Sphere/portrait entrance animation (Desktop)
  useEffect(() => {
    if (!entranceRef.current) return
    gsap.from(entranceRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 2,
      ease: 'elastic.out(1, 0.5)',
      delay: 0.3,
    })
  }, [])

  // Mobile Sphere/portrait entrance animation
  useEffect(() => {
    if (!mobileEntranceRef.current) return
    gsap.from(mobileEntranceRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 2,
      ease: 'elastic.out(1, 0.5)',
      delay: 0.3,
    })
  }, [])

  // Scroll fade and subtle parallax for portrait (Desktop only)
  useEffect(() => {
    if (!sphereWrapperRef.current || !sectionRef.current) return
    const trigger = gsap.to(sphereWrapperRef.current, {
      opacity: 0,
      y: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=300',
        scrub: true,
      },
    })

    return () => {
      trigger.scrollTrigger?.kill()
      trigger.kill()
    }
  }, [])

  const scrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Subtle radial gradient behind sphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 65% 50%, rgba(212, 149, 58, 0.06) 0%, transparent 70%)',
        }}
      />

      <div className="section-container w-full pt-16">
        <div className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-64px)]">
          {/* Left column — Content */}
          <div
            ref={contentRef}
            className="w-full lg:w-[45%] flex flex-col justify-center py-12 lg:py-0 z-10"
          >
            <p className="hero-animate label-text text-accent-amber mb-6 opacity-0 tracking-widest font-semibold">
              AI/ML ENGINEER | GENERATIVE AI & NLP SPECIALIST
            </p>

            <h1 className="hero-animate text-[clamp(2.5rem,5vw,4.2rem)] font-normal tracking-tight leading-[1.05] text-text-primary opacity-0">
              Building production-grade
              <br />
              <span className="text-accent-violet">Artificial Intelligence (AI)</span> systems.
            </h1>

            <p className="hero-animate mt-5 text-[1.125rem] text-text-secondary max-w-[550px] opacity-0 leading-relaxed">
              GIET Engineering College B.Tech (CGPA: 8.96, Expected June 2027) · Oracle Certified Generative AI Professional · Seeking AI/ML Engineering Internships & Co-ops. Developer of 5 production-grade deployed AI systems featuring high-availability failover architectures.
            </p>

            {/* Stats */}
            <div className="hero-animate flex flex-wrap gap-8 mt-10 opacity-0">
              <StatBlock number="5" label="Live Deployed AI Systems" />
              <StatBlock number="45k+" label="Production Samples Trained" />
              <StatBlock number="Oracle" label="GenAI Professional Certified" />
            </div>

            {/* CTAs */}
            <div className="hero-animate flex flex-wrap gap-3 mt-10 opacity-0">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-amber text-white text-[0.9375rem] font-medium rounded-full hover:scale-[1.03] hover:shadow-amber transition-all duration-250"
              >
                Explore Live Projects
                <ArrowDown className="w-4 h-4" />
              </button>
              
              <a
                href="https://github.com/MadhuChitikela"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border-[1.5px] border-border-subtle text-text-primary text-[0.9375rem] font-medium rounded-full hover:border-text-muted transition-colors duration-200"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/madhu-chitikela/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border-[1.5px] border-border-subtle text-text-primary text-[0.9375rem] font-medium rounded-full hover:border-text-muted transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                LinkedIn
              </a>

              <a
                href="https://huggingface.co/madhuchitikela"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border-[1.5px] border-border-subtle text-text-primary text-[0.9375rem] font-medium rounded-full hover:border-text-muted transition-colors duration-200"
              >
                <span className="text-base">🤗</span>
                HuggingFace
              </a>
            </div>

            {/* Social proof */}
            <div className="hero-animate flex items-center gap-2 mt-6 opacity-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-teal" />
              </span>
              <span className="caption-text text-text-muted">
                All 5 core systems are live-hosted and fully functional
              </span>
            </div>
          </div>

          {/* Right column — Premium Interactive Portrait (Desktop) */}
          <div className="hidden lg:flex w-full lg:w-[55%] h-[calc(100vh-64px)] relative items-center justify-center">
            <div
              ref={sphereWrapperRef}
              className="w-full h-full flex items-center justify-center"
            >
              <div
                ref={entranceRef}
                className="relative w-[380px] h-[450px] flex items-center justify-center"
              >
                {/* Glowing decorative background blobs */}
                <div 
                  className="absolute -inset-4 rounded-[3rem] blur-3xl opacity-20 animate-pulse pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent-amber) 0%, var(--accent-violet) 100%)',
                    animationDuration: '6s'
                  }}
                />
                
                {/* Abstract modern design circles behind the image */}
                <div className="absolute w-[110%] h-[110%] border border-dashed border-border-subtle rounded-full pointer-events-none animate-[spin_60s_linear_infinite]" />
                <div className="absolute w-[90%] h-[90%] border border-border-subtle rounded-full pointer-events-none animate-[spin_40s_linear_infinite_reverse]" />
                
                {/* Floating portrait card using Framer Motion */}
                <motion.div
                  className="relative w-full h-full rounded-[2.5rem] p-3 glass border border-border-glass shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden cursor-pointer"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 1, 0, -1, 0]
                  }}
                  transition={{
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  whileHover={{ 
                    scale: 1.025,
                    rotateY: 8,
                    rotateX: -4,
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    perspective: 1000
                  }}
                >
                  {/* Portrait Image */}
                  <div className="w-full h-full rounded-[2rem] overflow-hidden relative group bg-[#FAF9F5]">
                    <img
                      src="/profile.png"
                      alt="Madhu Chitikela"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-accent-amber/10 to-accent-violet/10 text-text-primary text-center p-6';
                          fallback.innerHTML = `
                            <div class="w-20 h-20 rounded-full bg-accent-amber/20 flex items-center justify-center mb-4">
                              <span class="text-3xl font-bold text-accent-amber">MC</span>
                            </div>
                            <h3 class="text-lg font-medium">Madhu Chitikela</h3>
                            <p class="text-xs text-text-secondary mt-1">AI/ML Engineer</p>
                          `;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                    
                    {/* Glass overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>

                {/* Sleek Interactive Floating Badge 1 - AI Engineer */}
                <motion.div
                  className="absolute -left-6 top-[25%] px-4 py-2.5 rounded-2xl glass border border-border-glass shadow-[0_8px_32px_rgba(0,0,0,0.06)] flex items-center gap-2 pointer-events-none"
                  animate={{ 
                    y: [0, 8, 0],
                    x: [0, -4, 0]
                  }}
                  transition={{
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: 0.5
                  }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-teal animate-pulse" />
                  <span className="caption-text text-text-primary font-medium text-[0.75rem]">🤖 AI/ML Engineer</span>
                </motion.div>

                {/* Sleek Interactive Floating Badge 2 - Live Spaces */}
                <motion.div
                  className="absolute -right-8 bottom-[20%] px-4 py-2.5 rounded-2xl glass border border-border-glass shadow-[0_8px_32px_rgba(0,0,0,0.06)] flex items-center gap-2 pointer-events-none"
                  animate={{ 
                    y: [0, -10, 0],
                    x: [0, 5, 0]
                  }}
                  transition={{
                    duration: 5.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: 1
                  }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-amber animate-pulse" />
                  <span className="caption-text text-text-primary font-medium text-[0.75rem]">🚀 5+ Deployed Systems</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right column — Premium Interactive Portrait (Mobile/Tablet - No scroll disappearance) */}
          <div className="flex lg:hidden w-full h-[50vh] sm:h-[55vh] relative items-center justify-center mt-6 lg:mt-0">
            <div className="w-full h-full flex items-center justify-center">
              <div
                ref={mobileEntranceRef}
                className="relative w-[260px] h-[310px] sm:w-[320px] sm:h-[380px] flex items-center justify-center"
              >
                {/* Glowing decorative background blobs */}
                <div 
                  className="absolute -inset-4 rounded-[3rem] blur-3xl opacity-20 animate-pulse pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent-amber) 0%, var(--accent-violet) 100%)',
                    animationDuration: '6s'
                  }}
                />
                
                {/* Abstract modern design circles behind the image */}
                <div className="absolute w-[110%] h-[110%] border border-dashed border-border-subtle rounded-full pointer-events-none animate-[spin_60s_linear_infinite]" />
                <div className="absolute w-[90%] h-[90%] border border-border-subtle rounded-full pointer-events-none animate-[spin_40s_linear_infinite_reverse]" />
                
                {/* Floating portrait card using Framer Motion */}
                <motion.div
                  className="relative w-full h-full rounded-[2.5rem] p-3 glass border border-border-glass shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden"
                  animate={{ 
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  style={{
                    perspective: 1000
                  }}
                >
                  {/* Portrait Image */}
                  <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-[#FAF9F5]">
                    <img
                      src="/profile.png"
                      alt="Madhu Chitikela"
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-accent-amber/10 to-accent-violet/10 text-text-primary text-center p-6';
                          fallback.innerHTML = `
                            <div class="w-16 h-16 rounded-full bg-accent-amber/20 flex items-center justify-center mb-3">
                              <span class="text-2xl font-bold text-accent-amber">MC</span>
                            </div>
                            <h3 class="text-base font-medium">Madhu Chitikela</h3>
                            <p class="text-xs text-text-secondary mt-1">AI/ML Engineer</p>
                          `;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                </motion.div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
