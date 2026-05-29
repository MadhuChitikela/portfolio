import SectionHeader from '../components/SectionHeader'
import SkillCategoryCard from '../components/SkillCategory'
import type { SkillCategory } from '../types'

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: 'Core Agentic AI & NLP',
    icon: 'brain',
    iconColor: 'amber',
    skills: [
      'Python & TypeScript (Core)',
      'LangChain & AI Agents (ReAct)',
      'BERT & Transformers Fine-tuning',
      'Groq Cloud & Gemini APIs',
      'Multi-Model Fallback Systems',
      'LLMs & Prompt Engineering',
    ],
  },
  {
    id: 2,
    title: 'Core MLOps & Production',
    icon: 'wrench',
    iconColor: 'violet',
    skills: [
      'FastAPI REST APIs',
      'Docker & docker-compose',
      'HuggingFace Spaces & Git LFS',
      'Streamlit & Gradio UI',
      'Asynchronous Processing',
      'Sub-100ms Inference Deployments',
    ],
  },
  {
    id: 3,
    title: 'Support Frameworks & Tools',
    icon: 'plug',
    iconColor: 'warm',
    skills: [
      'TensorFlow & PyTorch (Familiar)',
      'Scikit-learn (Machine Learning)',
      'Pandas, NumPy, Matplotlib',
      'Next.js, React, TailwindCSS',
      'OpenCV & YOLO (Vision)',
    ],
  },
  {
    id: 4,
    title: 'Cloud, Data & Science',
    icon: 'database',
    iconColor: 'teal',
    skills: [
      'SQLite & MySQL Databases',
      'Oracle Cloud Infrastructure (OCI)',
      'SHAP Model Explainability',
      'Item Response Theory (IRT) Alg.',
      'Git & Version Control',
      'AWS Cloud (Learning)',
    ],
  },
]

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full"
      style={{
        backgroundColor: 'var(--bg-primary)',
        paddingTop: 'var(--section-gap)',
        paddingBottom: 'var(--section-gap)',
      }}
    >
      <div className="section-container">
        <SectionHeader
          label="EXPERTISE"
          title="Technical Skills"
          subtitle="From model training to production deployment"
          centered={false}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
