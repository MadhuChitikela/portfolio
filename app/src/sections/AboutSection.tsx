import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!leftRef.current || !rightRef.current || !sectionRef.current) return

    gsap.from(leftRef.current, {
      opacity: 0,
      x: -30,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true,
      },
    })

    gsap.from(rightRef.current, {
      opacity: 0,
      x: 30,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true,
      },
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full"
      style={{
        backgroundColor: 'var(--bg-primary)',
        paddingTop: 'var(--section-gap)',
        paddingBottom: 'var(--section-gap)',
      }}
    >
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left column */}
          <div ref={leftRef} className="w-full lg:w-1/2">
            <p className="label-text text-accent-amber">ABOUT</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-normal tracking-tight leading-tight text-text-primary mt-3">
              Engineering-first mindset
            </h2>
            <p className="text-[1.125rem] text-text-secondary leading-[1.7] mt-6">
              I'm a pre-final year B.Tech AI/ML student at GIET Engineering College (CGPA: 8.96, graduating June 2027)
              who believes in learning by building. Every project in this portfolio was designed,
              trained, deployed, and documented independently — no templates, no shortcuts.
            </p>
            <p className="text-[1.125rem] text-text-secondary leading-[1.7] mt-4">
              From fine-tuning BERT on 45,000+ news articles to architecting a 7-model fallback
              system for an autonomous debugging agent, I focus on production-grade systems that
              solve real problems.
            </p>

            {/* Education */}
            <div className="mt-8 space-y-3">
              <div className="caption-text text-text-secondary font-medium">
                B.Tech AI & ML — GIET Engineering College — CGPA: 8.96 (Expected June 2027)
              </div>
              <div className="caption-text text-text-secondary">
                Intermediate (MPC) — Narayana Junior College — 93%
              </div>
            </div>
          </div>

          {/* Right column — Code snippet */}
          <div ref={rightRef} className="w-full lg:w-1/2">
            <div className="bg-[#F8F6F3] rounded-2xl p-6 font-mono text-[0.8125rem] leading-[1.6] overflow-x-auto">
              <pre className="text-text-primary">
                <code>
                  <span className="text-accent-amber">{'#'}</span>{' '}
                  <span className="text-text-muted">
                    Production-grade AI system — Madhu Chitikela
                  </span>
                  {'\n'}
                  <span className="text-accent-amber">from</span>{' '}
                  <span className="text-text-primary">langchain</span>{' '}
                  <span className="text-accent-amber">import</span>{' '}
                  <span className="text-accent-violet">ReActAgent</span>
                  {'\n'}
                  <span className="text-accent-amber">from</span>{' '}
                  <span className="text-text-primary">transformers</span>{' '}
                  <span className="text-accent-amber">import</span>{' '}
                  <span className="text-accent-violet">BertForSequenceClassification</span>
                  {'\n\n'}
                  <span className="text-accent-amber">class</span>{' '}
                  <span className="text-accent-violet">AIDebuggerAgent</span>:
                  {'\n'}
                  {'    '}
                  <span className="text-accent-teal">"""</span>
                  <span className="text-text-muted">
                    Autonomous debugging with 7-model fallback
                  </span>
                  <span className="text-accent-teal">"""</span>
                  {'\n\n'}
                  {'    '}
                  <span className="text-accent-amber">def</span>{' '}
                  <span className="text-accent-violet">__init__</span>(
                  <span className="text-text-primary">self</span>):
                  {'\n'}
                  {'        '}
                  <span className="text-text-primary">self</span>.
                  <span>fallback_chain</span> = [
                  {'\n'}
                  {'            '}
                  <span className="text-accent-violet">GroqLLaMA</span>(),{' '}
                  <span className="text-accent-violet">GroqGemma</span>(),
                  {'\n'}
                  {'            '}
                  <span className="text-accent-violet">GroqMixtral</span>(),{' '}
                  <span className="text-accent-violet">GeminiPro</span>()
                  {'\n'}
                  {'        '}
                  ]
                  {'\n'}
                  {'        '}
                  <span className="text-text-primary">self</span>.
                  <span>max_retries</span> ={' '}
                  <span className="text-accent-teal">3</span>
                  {'\n'}
                  {'        '}
                  <span className="text-text-primary">self</span>.
                  <span>fallback_active</span> ={' '}
                  <span className="text-accent-teal">True</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
