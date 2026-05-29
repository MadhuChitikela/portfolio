# AI/ML Engineering Portfolio — Madhu Chitikela

Welcome to my professional engineering portfolio repository. I am a pre-final year B.Tech AI/ML student specializing in Generative AI, Large Language Models (LLMs), and Natural Language Processing (NLP). This repository hosts the complete source code for my portfolio website, designed from the ground up with a **production-first, recruiter-ready mindset**.

🚀 **Live Portfolio Repository:** [github.com/MadhuChitikela/portfolio](https://github.com/MadhuChitikela/portfolio)  
🤗 **HuggingFace Profile:** [huggingface.co/madhuchitikela](https://huggingface.co/madhuchitikela)  
💼 **LinkedIn:** [linkedin.com/in/madhuchitikela](https://linkedin.com/in/madhuchitikela)  

---

## 🌟 Key Highlights & Vetting Snapshot

- **5 Deployed AI Systems**: Deployed 5 production-grade de-novo AI applications live-hosted on HuggingFace Spaces.
- **Oracle Certified**: OCI Certified Generative AI Professional & OCI Certified AI Foundations Associate (2025).
- **Scale & Performance Focus**: Trained BERT classifiers on 45,000+ samples, built 7-model failover chains, and containerized backends delivering sub-100ms request latencies.
- **Recruiter Vetting Hub**: Includes an interactive in-app vetting console allowing recruiters to dynamically filter skills and project relevance by target roles (**GenAI**, **NLP**, or **MLE**) and read standard screening FAQs.
- **Print & PDF Fail-Safes**: Outfitted with professional `@media print` directives in the global stylesheet, ensuring any "Print to PDF" or OCR screen operation renders all hidden components at full opacity and linearizes column layout for perfect machine reading.

---

## 🛠️ Featured AI/ML Production Systems

### 1. AI Code Debugger Agent 🤖
* **Core Contribution**: Architected and deployed an autonomous LangChain ReAct agent designed to debug broken Python scripts end-to-end without human intervention.
* **Resilience Metric**: Built a **7-model auto-fallback failover chain** (Groq-based LLaMA 3.3, Gemma 2, Mixtral, and Gemini Pro) achieving **100% service uptime** during active API rate limits.
* **Tech Stack**: Python, LangChain, Groq API, Gemini API, Gradio UI, SQLite session logging.
* **Source Repository**: [github.com/MadhuChitikela/ai-code-debugger-agent](https://github.com/MadhuChitikela/ai-code-debugger-agent)

### 2. Fake News Detector 📄
* **Core Contribution**: Fine-tuned a compact **BERT transformer model** achieving stellar classification metrics on 45,000+ articles.
* **Explainability Metric**: Integrated a dual-layer verification pipeline using **SHAP Explainable AI (XAI)** to highlight suspicious sentences with risks (HIGH/MEDIUM/LOW) for absolute transparency.
* **Tech Stack**: Python, BERT, HuggingFace Transformers, SHAP, Streamlit analytics dashboard.
* **Source Repository**: [github.com/MadhuChitikela/fake-news-detector](https://github.com/MadhuChitikela/fake-news-detector)

### 3. Adaptive Learning Coach 🎓
* **Core Contribution**: Engineered a personalized learning engine using a **3-Parameter Item Response Theory (IRT)** psychometric model (the same algorithm behind GRE/GMAT testing) to dynamically calibrate quiz difficulty.
* **AI Feature**: Integrated a memory-enabled LangChain chatbot acting as a personalized ML tutor.
* **Tech Stack**: Python, LangChain, IRT, Streamlit, Plotly dashboards, SQLite.
* **Source Repository**: [github.com/MadhuChitikela/adaptive-learning-coach](https://github.com/MadhuChitikela/adaptive-learning-coach)

### 4. Heart Disease Risk Predictor ⚙️
* **Core Contribution**: Trained a robust RandomForestClassifier model (90.2% accuracy) and built an asynchronous, containerized REST API backend.
* **Latency Metric**: Optimized asynchronous processing delivering **sub-100ms inference times**.
* **Tech Stack**: Python, Scikit-learn, FastAPI, Docker, docker-compose, Vanilla JS glassmorphism UI.
* **Source Repository**: [github.com/MadhuChitikela/heart-disease-risk-predictor](https://github.com/MadhuChitikela/heart-disease-risk-predictor)

### 5. Customer Churn Prediction System 📊
* **Core Contribution**: Developed a multi-tenant churn predictor across Telecom, Banking, and E-commerce verticals using a model ensemble achieving up to 96% accuracy.
* **Tech Stack**: Python, Next.js, React, TypeScript, TailwindCSS, Scikit-learn, Vercel Serverless.
* **Source Repository**: [github.com/MadhuChitikela/customer-churn-prediction-ml](https://github.com/MadhuChitikela/customer-churn-prediction-ml)

---

## 💻 Tech Stack & Competencies

```
AI/ML Engineering:    PyTorch, TensorFlow, Scikit-learn, NLP Pipelines, Transformers (BERT), SHAP XAI
Agentic Workflows:    LangChain, ReAct Agent Pattern, Groq & Gemini APIs, Prompt Engineering
Backend & MLOps:      FastAPI (Async), Docker, docker-compose, SQLite, MySQL, Git LFS, HuggingFace Spaces
Frontend & Design:    React, Next.js, TypeScript, TailwindCSS, GSAP, Three.js, Framer Motion
```

---

## 🏃 Local Setup & Development

This website is built using **React 19**, **TypeScript**, **Tailwind CSS v3**, and **Vite** for optimized assets compilation.

### Prerequisites
- Node.js (version 20 or higher recommended)
- npm or yarn

### 1. Installation
Navigate into the `app` directory and install the required dependencies:
```bash
cd app
npm install
```

### 2. Run Local Development Server
Start the Vite local development server with hot-module reloading (HMR) active:
```bash
npm run dev
```
The server will boot up and be accessible locally at [http://localhost:3000/](http://localhost:3000/).

### 3. Production Compilation
Compile the React code and minify stylesheet chunks for highly optimized production distribution:
```bash
npm run build
```
Vite will compile the static assets directly to the `app/dist/` directory.

---

## 📄 License & Contact

Developed by **Madhu Chitikela** (AI/ML Engineer, Expected Graduation: **June 2027**).  
- **Email:** [Chitikelamadhu79@gmail.com](mailto:Chitikelamadhu79@gmail.com)  
- **Location:** Visakhapatnam, India (Open to Relocation)  
- **Active Status:** Open to Internship & Co-op opportunities!
