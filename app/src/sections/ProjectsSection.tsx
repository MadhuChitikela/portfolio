import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import type { Project } from '../types'

const projects: Project[] = [
  {
    id: 1,
    title: 'AI Code Debugger Agent',
    description:
      'Architected and deployed a self-healing LangChain ReAct agent reducing debugging cycles. Deployed 7-model failover (Groq/Gemini) achieving 100% service uptime during API rate-limits.',
    metrics: ['100% Service Uptime', '7-Model Fallback', 'Zero-Downtime Architecture'],
    tags: ['Python', 'LangChain', 'Groq', 'Gemini', 'Gradio'],
    badge: 'Live on HuggingFace',
    github: 'https://github.com/MadhuChitikela/ai-code-debugger-agent',
  },
  {
    id: 2,
    title: 'Fake News Detector',
    description:
      'Fine-tuned BERT classifier on 45,000+ news articles achieving 99.98% Accuracy and F1-score. Engineered SHAP-explainable UI for immediate risk transparency and feature attribution.',
    metrics: ['99.98% Accuracy', '45k+ Articles', 'SHAP Explainability'],
    tags: ['Python', 'BERT', 'HuggingFace', 'SHAP', 'Streamlit'],
    badge: 'Live on HuggingFace',
    github: 'https://github.com/MadhuChitikela/fake-news-detector',
  },
  {
    id: 3,
    title: 'Adaptive Learning Coach',
    description:
      'Built personalized learning tutor using 3-Parameter IRT psychometric modeling (used in GRE/GMAT) to dynamically calibrate quiz difficulty, optimizing student challenge state.',
    metrics: ['3-Parameter IRT', 'Adaptive Calibration', 'LangChain Memory'],
    tags: ['Python', 'LangChain', 'IRT', 'Streamlit', 'Plotly'],
    badge: 'Live on HuggingFace',
    github: 'https://github.com/MadhuChitikela/adaptive-learning-coach',
  },
  {
    id: 4,
    title: 'Heart Disease Risk Predictor',
    description:
      'Trained RandomForestClassifier model achieving 90.2% Accuracy. Built asynchronous FastAPI REST backend containerized with Docker for sub-100ms inference with a glassmorphism UI.',
    metrics: ['90.2% Accuracy', 'FastAPI Backend', '<100ms Latency'],
    tags: ['Python', 'Scikit-learn', 'FastAPI', 'Docker', 'Vercel'],
    badge: 'Deployed',
    github: 'https://github.com/MadhuChitikela/heart-disease-risk-predictor',
  },
  {
    id: 5,
    title: 'Customer Churn Prediction',
    description:
      'Developed multi-tenant churn predictor across Telecom, Banking, and E-commerce verticals. Engineered model ensemble achieving up to 96% accuracy with Next.js business analytics dashboard.',
    metrics: ['96% Churn Accuracy', '3 Business Verticals', 'Next.js Analytics'],
    tags: ['Python', 'Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    badge: 'Deployed',
    github: 'https://github.com/MadhuChitikela/customer-churn-prediction-ml',
  },
]

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        paddingTop: 'var(--section-gap)',
        paddingBottom: 'var(--section-gap)',
      }}
    >
      <div className="section-container">
        <SectionHeader
          label="PORTFOLIO"
          title="Featured AI Projects"
          subtitle="5 production-grade systems deployed and publicly accessible"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
