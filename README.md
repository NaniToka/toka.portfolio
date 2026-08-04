# 🚀 Toka Nani — Senior Engineer-Grade Portfolio

A modern, production-grade developer portfolio built with **React 18, TypeScript, Vite, Tailwind CSS, Framer Motion**, and **Lucide Icons**. Styled with a minimalist, high-taste Linear / Stripe / Vercel dark aesthetics default (`#07080D` dark background, `#4F46E5` single indigo accent) designed for technical recruiters, engineering managers, and senior software engineers.

---

## 🔗 Live Deployment & Production Links

| Resource | Link / URL | Status |
| :--- | :--- | :--- |
| **🌐 Production Portfolio** | [toka-portfolio-2.onrender.com](https://toka-portfolio-2.onrender.com) | Live (Render CDN) |
| **📄 Official PDF Resume** | [Download Resume (`nani.pdf`)](https://toka-portfolio-2.onrender.com/nani.pdf) | Verified PDF v1.4 |
| **🐙 GitHub Profile** | [github.com/NaniToka](https://github.com/NaniToka) | Active |
| **💼 LinkedIn Profile** | [linkedin.com/in/toka-nani-33a124359](https://linkedin.com/in/toka-nani-33a124359) | Active |
| **📧 Direct Email** | [tokananiy@gmail.com](mailto:tokananiy@gmail.com) | Contact Active |
| **⚡ TokenFlow AI Live** | [tokenflow-ai.onrender.com](https://tokenflow-ai.onrender.com) | Live App |
| **📑 TokenFlow AI Swagger** | [tokenflow-ai.onrender.com/docs](https://tokenflow-ai.onrender.com/docs) | OpenAPI Docs |
| **🛡️ BiasGuard AI Live** | [biasguard-rzpoqg6s6a-uc.a.run.app](https://biasguard-rzpoqg6s6a-uc.a.run.app) | Live Cloud Run |
| **🏛️ JanVoice AI Live** | [spontaneous-raindrop-8a7198.netlify.app](https://spontaneous-raindrop-8a7198.netlify.app/dashboard) | Live Netlify |

---

## 👨‍💻 Candidate Overview

- **Name:** Toka Nani
- **Current Role:** Google Student Ambassador (Gemini Program, 2026 Cohort)
- **Education:** B.Tech in Computer Science & Engineering (3rd Year, 2024–2028)
- **Institution:** DVR & Dr. HS MIC College of Technology, Vijayawada, India
- **Target Internship Roles:** SWE / Backend / DevOps (India-based, No Visa Sponsorship Needed)
- **Core Value Prop:** *"Building production AI systems, one prompt-driven deploy at a time."*

---

## 📌 Architectural & UI Highlights

### 1. Interactive 3-Tab Project Case Studies
Restructured project cards into an interactive tabbed interface (**Problem**, **Solution**, **Tech Stack**):
- **Problem**: 2–3 sentence detailed framing of real-world pain points, user impact, and urgency.
- **Solution**: 2–3 sentence explanation of algorithmic design, serverless pipelines, and trade-offs.
- **Tech Stack & Rationale**: Interactive pill list accompanied by an architectural rationale callout explaining tool choices (e.g. *FastAPI for async throughput, Gemini text-embedding-004 for semantic precision*).
- **Framer Motion Crossfade**: Animated tab switches (`AnimatePresence`) with smooth vertical slide & opacity transitions.
- **ARIA Keyboard Accessibility**: Full `role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`, and ArrowRight / ArrowLeft keyboard cycling.

### 2. Redesigned Experience & Virtual Engineering Timeline
Structured vertical timeline distinguishing:
- **Leadership & Ambassadorship**: Google Student Ambassador — Gemini Program.
- **Virtual Engineering Simulations**:
  - *JPMorgan Chase & Co. × Forage* — Software Engineering Job Simulation.
  - *Walmart Global Tech × Forage* — Advanced Software Engineering Simulation.
  - *Tata iQ × Forage* — GenAI Data Analytics Simulation.
- **Production Hackathons**: Google Solution Challenge 2026 & PromptWars Virtual.
- **Independent Engineering Focus**: Self-directed full-stack & cloud AI development.

### 3. Elevated About Section & Specializations
- **Punchy Headline & Bio**: Concise, zero-filler writeups highlighting AI-native engineering (Antigravity, Codex, Kiro, Windsurf).
- **Specializations Grid**: 4-card breakdown covering *LLM Context Optimization*, *Cloud-Native Microservices*, *Forensic ML Bias Auditing*, and *AI-Native Engineering*.
- **Structured Internship Data Panel**: Key recruiter information panel (`Target Roles`, `Location & Visa`, `Degree & Track`).

### 4. Live GitHub Daily Activity Feed
- **Tokenless Embed**: Embedded live public contribution graph (`https://ghchart.rshah.org/4F46E5/NaniToka`) with `#4F46E5` indigo accent styling.
- **Mobile Ergonomics**: Wrapped in a horizontal scroll container (`overflow-x-auto`) to guarantee zero layout breakage on mobile viewports (375px+).

### 5. High-Resolution Hero Visual Anchor
- **288px Hero Portrait**: Enlarged hero profile picture (`w-36 h-36` on mobile, `sm:w-56 sm:h-56` on tablet, `lg:w-72 lg:h-72` [288px] on desktop) framed with a subtle indigo border (`border-2 border-indigo-500/40`), ring glow (`ring-8 ring-indigo-500/10`), active status dot, and WebP + JPEG responsive fallbacks.

### 6. Accessible PDF Resume Viewer & Direct Download
- Integrated inline preview modal with fallback screen for mobile browsers and a direct `<a href="nani.pdf" download>` download button.

---

## 🚀 Featured Flagship Projects Showcase

### 1. TokenFlow AI — Prompt Memory Optimizer Middleware
- **Subtitle:** Prompt Memory Optimizer Middleware
- **Problem:** Conversational LLM applications repeatedly resend growing prompt histories across chat sessions, racking up high token costs and latency spikes. This results in API rate-limit throttling, context window saturation, and degraded response accuracy due to noisy background prompt data.
- **Solution:** Built a production-grade FastAPI and React 18 middleware pipeline combining Gemini `text-embedding-004` vector representations with an exponential recency-decay formula. The algorithm dynamically calculates similarity and half-life decay to condense prompt history in-memory before invoking completion endpoints—achieving ~74% token overhead reduction with zero database storage cost.
- **Metrics:** ~74% average reduction in prompt token overhead via exponential recency decay vector scoring.
- **Stack:** FastAPI, Gemini text-embedding-004, Gemini 1.5 Flash, React 18, Swagger, Render.

### 2. BiasGuard AI — Forensic ML Bias Auditing Platform
- **Subtitle:** Forensic ML Bias Auditing Platform
- **Problem:** Black-box automated decision systems in hiring, credit scoring, and admissions risk embedding unseen demographic bias after deployment. Without forensic audit trails or explainability engines, engineering and compliance teams struggle to detect disparity or generate human-readable regulatory reports.
- **Solution:** Built a serverless forensic auditing platform on Google Cloud Run that streams decision logs through a statistical evaluator calculating demographic parity and equalized odds metrics. Paired calculations with Gemini 1.5 Flash structured prompts to generate human-readable compliance audit reports and retraining recommendations in under 30 seconds. Built solo for Google Solution Challenge 2026.
- **Metrics:** <30s audit cycle with automated UN SDG-5 & SDG-10 fairness reports.
- **Stack:** Vertex AI, Gemini 1.5 Flash, Flask, Firestore, Cloud Storage, Cloud Run, Docker.

### 3. JanVoice AI — National AI Governance Suite
- **Subtitle:** National AI Governance Suite
- **Problem:** Indian parliamentary constituencies lack unified digital tools for direct citizen grievance reporting and constituency-level governance analytics. Representatives and administrative offices are overwhelmed by unstructured constituent feedback without automated categorization or daily executive briefings.
- **Solution:** Developed a national AI governance platform providing role-based portals for citizens, Members of Parliament (MPs), and administrators. Built MP executive dashboards featuring AI-generated daily constituency briefings, automated report routing, and natural-language smart search across citizen submissions.
- **Stack:** React, Gemini AI, JavaScript, SVG Charts, Netlify.

### 4. StadiumSense AI — FIFA World Cup 2026 GenAI Operations
- **Subtitle:** FIFA World Cup 2026 GenAI Operations
- **Problem:** Large sports venues and FIFA World Cup stadium operations struggle to coordinate real-time crowd flow telemetry, safety incident dispatch, and multi-agency briefings.
- **Solution:** Integrated Gemini 1.5 Flash with Firestore real-time data streams and FastAPI microservices to deliver predictive crowd telemetry and automated operational incident briefings. Built for PromptWars hackathon.
- **Stack:** React, TypeScript, FastAPI, Gemini 1.5 Flash, Firestore, Render.

### 5. Carbon Footprint Tracker — Environmental Impact Monitoring
- **Subtitle:** Environmental Impact Monitoring Dashboard
- **Problem:** Individuals and organizations lack actionable real-time visibility into daily carbon emissions generated by transportation, energy usage, and workplace habits.
- **Solution:** Built a containerized full-stack web application providing real-time carbon emission calculations and interactive reduction analytics. Deployed on Google Cloud Run for PromptWars (Challenge 3).
- **Stack:** React, Vite, Tailwind CSS, Docker, Google Cloud Run.

---

## 🏆 Verified Certifications Inventory

| Certification Title | Issuer | Credential / Verification Link |
| :--- | :--- | :--- |
| **PromptWars Virtual — Challenge 1** | Google for Developers × Hack2Skill | [Verify `2026H2S04PWVCHL1-A00285`](https://certificate.hack2skill.com/verify/2026H2S04PWVCHL1-A00285) |
| **Build with AI Bootcamp, Chennai** | Google for Developers × Hack2Skill | [Verify `2026H2S08BWAICHN-P00569`](https://certificate.hack2skill.com/verify/2026H2S08BWAICHN-P00569) |
| **BiasGuard AI Prototype Certificate** | Google Solution Challenge 2026 × Hack2Skill | [Verify `2026H2S07SCBWAI-PS06834`](https://certificate.hack2skill.com/verify/2026H2S07SCBWAI-PS06834) |
| **Google AI Essentials Specialization** | Google via Coursera | [Verify Specialization](https://www.coursera.org/account/accomplishments/specialization/HAXF8PBC6D2I) |
| **Generative AI Leader — Certified** | Google Cloud | ID: `GAIL03-GETCERT/2026.06.29` |
| **Software Engineering Job Simulation** | JPMorgan Chase & Co. × Forage | [Verify Completion Certificate](https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_6973b13fb1ee4126d09b7191_1781903103039_completion_certificate.pdf) |
| **Advanced Software Engineering Simulation** | Walmart Global Tech × Forage | [Verify Completion Certificate](https://www.theforage.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_6973b13fb1ee4126d09b7191_1781985899780_completion_certificate.pdf) |
| **GenAI Data Analytics Simulation** | Tata iQ × Forage | [Verify Completion Certificate](https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_6973b13fb1ee4126d09b7191_1782260307680_completion_certificate.pdf) |
| **AWS Solutions Architect Associate (SAA-C03)** | Amazon Web Services | Scheduled September 2026 |

---

## 🛠️ Complete Tech Stack & Tools

- **Frontend Framework:** React 18 + TypeScript + Vite
- **Styling & Design Tokens:** Tailwind CSS + Custom Design System tokens (Glassmorphism, dark mode `#07080D`, `#4F46E5` single indigo accent)
- **Motion & Animations:** Framer Motion (crossfade tab panels, modal overlays, timeline scroll reveals)
- **Icons & Typography:** Lucide React, Inter font family, JetBrains Mono
- **Backend & Cloud Infrastructure:** Python, FastAPI, Flask, Docker, Google Cloud Run, Vertex AI, Gemini API, Cloud Firestore, Cloud Storage, Render
- **AI-Native Engineering Tools:** Google Antigravity, OpenAI Codex, Kiro, Windsurf

---

## 📂 Repository Directory Tree

```text
/Users/tokanani/port/
├── public/
│   ├── nani.pdf             # Official PDF resume file (verified v1.4 format)
│   ├── toka-profile.webp    # Compressed WebP hero portrait (17KB)
│   └── toka-profile.jpg     # Fallback JPEG portrait (30KB)
├── src/
│   ├── components/          # Modular UI components
│   │   ├── Navbar.tsx       # Glassmorphism navigation bar with active section tracking
│   │   ├── Hero.tsx         # Headline, enlarged hero avatar, stat cards & CTAs
│   │   ├── About.tsx        # Bio, specializations grid, internship panel & live GitHub graph
│   │   ├── Projects.tsx     # Interactive 3-tab project case study cards (Problem / Solution / Stack)
│   │   ├── Skills.tsx       # Categorized technical skill matrix (Cloud, Backend, Frontend, CS)
│   │   ├── Certs.tsx        # Verified certification cards with live validation links
│   │   ├── Experience.tsx   # Redesigned vertical timeline for ambassadorship, virtual simulations & hackathons
│   │   ├── ResumeModal.tsx  # Accessible inline PDF preview modal with mobile fallback
│   │   ├── Contact.tsx      # Direct contact form & channels
│   │   └── Footer.tsx       # Copyright & quick navigation links
│   ├── data/
│   │   └── portfolioData.ts # Centralized strongly-typed data (Projects, Experience, Certs, Skills)
│   ├── hooks/
│   │   └── useReducedMotion.ts # Accessibility hook for user reduced motion settings
│   ├── types/
│   │   └── portfolio.ts     # TypeScript interfaces (Project, Certification, ExperienceItem, etc.)
│   ├── utils/
│   │   └── helpers.ts       # Secure link helpers & date formatting utilities
│   ├── App.tsx              # Main application root wrapper
│   ├── main.tsx             # React DOM entry point
│   └── index.css            # Global CSS, Tailwind directives & custom scrollbars
├── .gitignore               # Comprehensive git ignore rules
├── index.html               # Main HTML entry point with meta tags & Google Fonts
├── package.json             # NPM package scripts & dependencies
├── tailwind.config.js       # Custom Tailwind theme configuration
├── tsconfig.json            # TypeScript compiler configuration
└── vite.config.ts           # Vite build configuration
```

---

## 🔒 Security & Best Practices

- **Zero Secret Exposure:** 0 hardcoded credentials, API keys, or `.env` files tracked in version control.
- **Tabnabbing Protection:** 100% of external links (`target="_blank"`) enforce `rel="noopener noreferrer"`.
- **Render Production HTTP Security Headers:**
  ```yaml
  headers:
    - path: /*
      name: X-Content-Type-Options
      value: nosniff
    - path: /*
      name: X-Frame-Options
      value: DENY
    - path: /*
      name: Referrer-Policy
      value: strict-origin-when-cross-origin
  ```

---

## 💻 Local Setup & Development Guide

### Prerequisites
- Node.js 18+ and `npm`

### Installation & Execution Commands
```bash
# 1. Clone the repository
git clone https://github.com/NaniToka/toka.portfolio.git
cd toka.portfolio

# 2. Install dependencies
npm install

# 3. Launch local development server
npm run dev

# 4. Compile TypeScript & bundle production assets into /dist
npm run build

# 5. Preview production build locally
npm run preview
```

---

## 🚀 Production Deployment Configuration

- **Hosting Platform:** Render (Static Site CDN)
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
