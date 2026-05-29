import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import type { Project } from '../types'

const projects: Project[] = [
  {
    id: 1,
    title: 'AI Code Debugger Agent',
    description:
      'Architected and deployed an autonomous LangChain ReAct agent featuring a 7-model fallback chain (Groq/Gemini) that resolves Python errors via runtime trace analysis. Engineered automated retry-limits and backoff strategies to establish high-availability failover without service downtime.',
    metrics: ['Automated Retries', '7-Model Fallback', 'High Availability'],
    tags: ['Python', 'LangChain', 'Groq', 'Gemini', 'Gradio'],
    badge: 'Live on HuggingFace',
    github: 'https://github.com/MadhuChitikela/ai-code-debugger-agent',
  },
  {
    id: 2,
    title: 'Fake News Detector',
    description:
      'Fine-tuned a BERT sequence classifier on a consolidated LIAR + Kaggle dataset of 45,000+ articles, achieving a 96% test Accuracy/F1-score using stratified 5-fold cross-validation to prevent data leakage or validation bias. Engineered a SHAP explainability pipeline to verify model feature attributions.',
    metrics: ['Stratified 5-Fold CV', '96% Test F1', 'SHAP Attribution'],
    tags: ['Python', 'BERT', 'HuggingFace', 'SHAP', 'Streamlit'],
    badge: 'Live on HuggingFace',
    github: 'https://github.com/MadhuChitikela/fake-news-detector',
  },
  {
    id: 3,
    title: 'Adaptive Learning Coach',
    description:
      'Built a personalized learning system employing a 3-Parameter psychometric Item Response Theory (IRT) model estimated via Marginal Maximum Likelihood. Leveraged LangChain memory to dynamically calibrate questions based on latent student ability.',
    metrics: ['3-Parameter IRT', 'MML Parameter Est.', 'LangChain Memory'],
    tags: ['Python', 'LangChain', 'IRT', 'Streamlit', 'Plotly'],
    badge: 'Live on HuggingFace',
    github: 'https://github.com/MadhuChitikela/adaptive-learning-coach',
  },
  {
    id: 4,
    title: 'Heart Disease Risk Predictor',
    description:
      'Trained a RandomForestClassifier model (90.2% accuracy) with hyperparameter grid search. Built an asynchronous FastAPI REST backend containerized with Docker, delivering optimized sub-100ms model inference latency.',
    metrics: ['90.2% Test Accuracy', 'FastAPI Backend', '<100ms Latency'],
    tags: ['Python', 'Scikit-learn', 'FastAPI', 'Docker', 'Vercel'],
    badge: 'Deployed',
    github: 'https://github.com/MadhuChitikela/heart-disease-risk-predictor',
  },
  {
    id: 5,
    title: 'Customer Churn Prediction',
    description:
      'Developed a multi-tenant churn predictor across Telecom, Banking, and E-commerce verticals using a model ensemble achieving up to 96% accuracy. Configured Next.js dashboard for real-time model monitoring.',
    metrics: ['96% Churn Accuracy', '3 Business Verticals', 'Next.js Monitoring'],
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
