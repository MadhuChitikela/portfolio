import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Mail, Linkedin, CheckCircle2, Award, Sparkles, Briefcase, HelpCircle } from 'lucide-react'

type RoleType = 'genai' | 'nlp' | 'mle'

interface RoleData {
  title: string
  elevatorPitch: string
  keyProjects: { title: string; reasoning: string }[]
  topSkills: string[]
}

const roleDataMap: Record<RoleType, RoleData> = {
  genai: {
    title: 'Generative AI & Agentic Systems Engineer',
    elevatorPitch: 'Oracle-certified GenAI professional specializing in multi-agent orchestration, self-healing architectures, and cost-effective API fallback systems. Proven capability in building production-grade autonomous agents from scratch.',
    keyProjects: [
      { title: 'AI Code Debugger Agent', reasoning: 'Engineered a LangChain ReAct agent utilizing a 7-model failover chain (LLaMA 3.3, Gemma 2, Mixtral, Gemini Pro) ensuring 100% service availability during rate limits.' },
      { title: 'Adaptive Learning Coach', reasoning: 'Integrated a memory-enabled LangChain chatbot acting as a personalized IRT-based tutor.' }
    ],
    topSkills: ['LangChain & AI Agents', 'Multi-Model Fallbacks', 'Groq & Gemini APIs', 'Prompt Engineering', 'Vector DBs & Embeddings']
  },
  nlp: {
    title: 'NLP & Large Language Models (LLM) Engineer',
    elevatorPitch: 'Deep hands-on experience in sequence classification, encoder/decoder fine-tuning, and explainable AI (XAI). Proven record in training and deploying compact, high-accuracy model pipelines.',
    keyProjects: [
      { title: 'Fake News Detector', reasoning: 'Fine-tuned a 438MB BERT classifier on 45,000+ articles achieving a stellar 99.98% Accuracy & F1-score with SHAP explanation attribution.' },
      { title: 'AI Code Debugger Agent', reasoning: 'Implemented customized prompt templates and real-time execution-trace analysis to debug Python scripts.' }
    ],
    topSkills: ['BERT & Transformers', 'Fine-tuning & Evaluation', 'SHAP Explainability', 'NLP Pipeline Engineering', 'Tokenization & Embeddings']
  },
  mle: {
    title: 'Core Machine Learning & MLOps Engineer',
    elevatorPitch: 'Engineering-first practitioner with strong foundations in psychometric IRT calibration, ensemble methods, async REST API design, containerization, and sub-100ms model inference.',
    keyProjects: [
      { title: 'Heart Disease Risk Predictor', reasoning: 'Trained RandomForest model (90.2% accuracy) and built async FastAPI backend containerized in Docker for sub-100ms request latency.' },
      { title: 'Customer Churn Prediction', reasoning: 'Architected multi-tenant classification pipelines across 3 verticals achieving up to 96% accuracy with Next.js dashboards.' }
    ],
    topSkills: ['Scikit-learn / ML Pipelines', 'FastAPI & Async Uvicorn', 'Docker & docker-compose', 'SQLite & MySQL Datastores', 'IRT Psychometric Calibration']
  }
}

const faqs = [
  {
    q: 'No formal corporate experience? How do we know he can ship production code?',
    a: 'Madhu is a pre-final year B.Tech AI/ML student graduating in June 2027, actively seeking internships and co-op opportunities. He bypasses typical junior-level gaps by shipping de-novo, fully functional end-to-end production systems. He independently manages model fine-tuning, constructs resilient failover architectures (100% uptime systems), containerizes code in Docker, and develops full-stack UIs. Every project is fully verified, open-source, and ready for deployment.'
  },
  {
    q: 'What is the credibility of the Oracle Certified badges?',
    a: 'Madhu successfully passed the rigorous Oracle certification pathways in 2025. He is officially credentialed as an OCI Certified Generative AI Professional and Certified AI Foundations Associate, proving deep theoretical and hands-on cloud AI engineering acumen.'
  },
  {
    q: 'Can we actually test his systems right now?',
    a: 'Absolutely! Click the "GitHub" links on the project cards below to view the fully open-source code repositories, clean configurations, and detailed architecture logs. Three of his major systems are live-deployed on HuggingFace Spaces.'
  }
]

export default function RecruiterConsole() {
  const [selectedRole, setSelectedRole] = useState<RoleType>('genai')
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  
  const currentData = roleDataMap[selectedRole]

  return (
    <section id="recruiter-hub" className="w-full relative" style={{ backgroundColor: 'var(--bg-secondary)', paddingTop: 'var(--section-gap)', paddingBottom: 'var(--section-gap)' }}>
      {/* Visual background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-accent-violet/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent-amber/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-amber/10 border border-accent-amber/20 rounded-full text-accent-amber text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Recruiter Assessment Hub
          </div>
          <h2 className="text-[clamp(2.1rem,4vw,3.2rem)] font-normal tracking-tight leading-tight text-text-primary">
            Screen This Snapshot in 60 Seconds
          </h2>
          <p className="text-base text-text-secondary mt-3">
            Interactive vetting console built to map Madhu's precise projects, skills, and metrics to your specific team openings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left panel: Role Customizer */}
          <div className="lg:col-span-7 bg-white/60 border border-border-glass rounded-[2rem] p-6 sm:p-8 glass shadow-sm">
            <div className="flex flex-col gap-4">
              <span className="caption-text text-text-muted font-medium uppercase tracking-wider">Select The Role You Are Hiring For:</span>
              
              {/* Role Selectors */}
              <div className="grid grid-cols-3 gap-2 p-1.5 bg-[#F6F5F2] rounded-2xl">
                {(Object.keys(roleDataMap) as RoleType[]).map((role) => (
                  <button
                    key={role}
                    onClick={() => setSelectedRole(role)}
                    className={`py-3 px-2 text-center rounded-xl text-xs sm:text-[0.8125rem] font-medium transition-all duration-200 ${
                      selectedRole === role
                        ? 'bg-white text-text-primary shadow-sm scale-[1.02]'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {role === 'genai' && '🤖 GenAI / Agentic'}
                    {role === 'nlp' && '📄 NLP / LLM'}
                    {role === 'mle' && '⚙️ Core MLE'}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Assessment Result */}
            <div className="mt-8">
              <div className="inline-flex items-center gap-1.5 text-accent-violet font-semibold text-xs uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5" />
                Vetting Assessment
              </div>
              <h3 className="text-[1.25rem] font-medium text-text-primary mt-2">
                {currentData.title}
              </h3>
              
              {/* Pitch */}
              <div className="mt-4 p-4 rounded-xl bg-accent-violet/5 border border-accent-violet/10">
                <p className="text-[0.9375rem] text-text-secondary leading-relaxed italic">
                  "{currentData.elevatorPitch}"
                </p>
              </div>

              {/* Top highlighted skills */}
              <div className="mt-6">
                <span className="text-[0.8125rem] font-medium text-text-muted uppercase tracking-wider">Role-Fit Core Competencies:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {currentData.topSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium text-accent-teal bg-accent-teal/5 border border-accent-teal/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Projects highlighted */}
              <div className="mt-6">
                <span className="text-[0.8125rem] font-medium text-text-muted uppercase tracking-wider">Crucial Project Fits:</span>
                <div className="mt-2.5 space-y-3">
                  {currentData.keyProjects.map((proj, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl border border-border-subtle hover:bg-[#FAF9F6] transition-colors duration-250">
                      <CheckCircle2 className="w-4 h-4 text-accent-amber mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-xs font-semibold text-text-primary">{proj.title}</h4>
                        <p className="text-xs text-text-secondary mt-1 leading-relaxed">{proj.reasoning}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right panel: Screening FAQs & Direct Vetting Actions */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Direct Vetting Actions */}
            <div className="bg-white/60 border border-border-glass rounded-[2rem] p-6 sm:p-8 glass shadow-sm">
              <div className="flex items-center gap-1.5 text-accent-amber font-semibold text-xs uppercase tracking-wider mb-4">
                <Award className="w-3.5 h-3.5" />
                Vetting Credentials
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-5">
                Download & Screen Directly
              </h3>

              <div className="flex flex-col gap-3">
                <a
                  href="/Madhu_Chitikela_Resume.pdf"
                  download
                  className="w-full flex items-center justify-center gap-2.5 py-4 bg-text-primary text-white text-[0.9375rem] font-medium rounded-2xl hover:bg-text-secondary transition-all hover:scale-[1.01] shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  Get Recruiter-Ready PDF Resume
                </a>

                <a
                  href="mailto:Chitikelamadhu79@gmail.com"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 border-[1.5px] border-border-subtle hover:border-text-primary text-text-primary text-[0.9375rem] font-medium rounded-2xl transition-colors bg-white/40"
                >
                  <Mail className="w-4 h-4 text-accent-amber" />
                  Initiate Pre-Screen (Email)
                </a>

                <a
                  href="https://linkedin.com/in/madhuchitikela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 border-[1.5px] border-border-subtle hover:border-[#0A66C2] text-text-primary text-[0.9375rem] font-medium rounded-2xl transition-colors bg-white/40"
                >
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  Direct LinkedIn Message
                </a>
              </div>

              {/* Status details */}
              <div className="mt-5 pt-5 border-t border-border-subtle space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-text-muted">Current Availability:</span>
                  <span className="font-semibold text-accent-teal">Available for Internships & Co-ops (Graduating June 2027)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Target Roles:</span>
                  <span className="font-semibold text-text-primary">AI/ML / GenAI / NLP Engineer Intern (Actively Interviewing)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Current Location:</span>
                  <span className="font-semibold text-text-primary">Visakhapatnam, India (Open to Relocation)</span>
                </div>
              </div>
            </div>

            {/* Quick Screen FAQs */}
            <div className="bg-white/60 border border-border-glass rounded-[2rem] p-6 sm:p-8 glass shadow-sm">
              <div className="flex items-center gap-1.5 text-text-primary font-semibold text-xs uppercase tracking-wider mb-4">
                <HelpCircle className="w-3.5 h-3.5 text-accent-violet" />
                Vetting Screen FAQs
              </div>

              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-border-subtle rounded-xl overflow-hidden bg-white/30"
                  >
                    <button
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-3.5 text-left text-xs font-semibold text-text-primary bg-white/10 hover:bg-[#FAF9F6] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <motion.span
                        animate={{ rotate: activeFaq === idx ? 180 : 0 }}
                        className="text-text-muted text-base leading-none"
                      >
                        ↓
                      </motion.span>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {activeFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="p-3.5 text-xs text-text-secondary leading-relaxed bg-[#FBFBFA]/60 border-t border-border-subtle">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
