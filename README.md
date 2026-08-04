# 🚀 Toka Nani — Engineering Portfolio

A modern, production-grade developer portfolio built with **React 18, TypeScript, Vite, Tailwind CSS, Framer Motion**, and **Lucide Icons**. Styled with a dark Linear/Stripe/Vercel aesthetic (`#4F46E5` single indigo accent) designed for technical recruiters and engineering managers.

---

## 🔗 Live Deployment & Links

- **🌐 Production Site:** [toka-portfolio-2.onrender.com](https://toka-portfolio-2.onrender.com)
- **⚡ TokenFlow AI Live:** [tokenflow-ai.onrender.com](https://tokenflow-ai.onrender.com) | [Swagger API Docs](https://tokenflow-ai.onrender.com/docs)
- **📄 Official Resume:** [Download PDF](https://toka-portfolio-2.onrender.com/nani.pdf)
- **🐙 GitHub Profile:** [github.com/NaniToka](https://github.com/NaniToka)
- **💼 LinkedIn:** [linkedin.com/in/toka-nani-33a124359](https://linkedin.com/in/toka-nani-33a124359)
- **📧 Contact:** [tokananiy@gmail.com](mailto:tokananiy@gmail.com)

---

## 🛠️ Tech Stack & Architecture

- **Core Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS (Vanilla CSS design system, dark mode default `#07080D`, `#4F46E5` indigo accent)
- **Animations:** Framer Motion (page transitions, crossfade tab panels, modal overlays with `useReducedMotion` support)
- **Icons:** Lucide React
- **Build Output:** Static SPA bundle compiled into `dist/`

---

## 📁 Repository Directory Structure

```text
/
├── public/
│   ├── nani.pdf             # Verified PDF resume file
│   ├── toka-profile.webp    # Compressed WebP hero portrait (17KB)
│   └── toka-profile.jpg     # Fallback JPEG portrait (30KB)
├── src/
│   ├── components/          # Modular React UI components
│   │   ├── Navbar.tsx       # Glassmorphism header with active section tracking
│   │   ├── Hero.tsx         # Headline, enlarged hero avatar, stat cards & CTAs
│   │   ├── About.tsx        # Bio, specializations grid, internship panel & live GitHub graph
│   │   ├── Projects.tsx     # Interactive 3-tab project case study cards (Problem / Solution / Stack)
│   │   ├── Skills.tsx       # Categorized technical skill matrix
│   │   ├── Certs.tsx        # Verified certification cards with live validation links
│   │   ├── Experience.tsx   # Structured experience, hackathons & roles timeline
│   │   ├── ResumeModal.tsx  # Accessible inline PDF preview modal with mobile fallback
│   │   ├── Contact.tsx      # Direct contact form & channels
│   │   └── Footer.tsx       # Copyright & quick navigation links
│   ├── data/
│   │   └── portfolioData.ts # Strongly-typed centralized portfolio data
│   ├── hooks/
│   │   └── useReducedMotion.ts # Accessibility hook for reduced motion preferences
│   ├── types/
│   │   └── portfolio.ts     # TypeScript interfaces (Project, Certification, SkillCategory, etc.)
│   ├── utils/
│   │   └── helpers.ts       # Secure link helpers & date formatting utilities
│   ├── App.tsx              # Main application wrapper with modal state
│   ├── main.tsx             # React entry point
│   └── index.css            # Global CSS, Tailwind directives & scrollbar styles
├── .gitignore               # Comprehensive git ignore rules
├── index.html               # Main HTML entry point with meta tags & Google Fonts
├── package.json             # NPM dependencies and build scripts
├── tailwind.config.js       # Custom Tailwind theme configuration
├── tsconfig.json            # TypeScript compiler configuration
└── vite.config.ts           # Vite build configuration
```

---

## 🔒 Security & Best Practices

- **Zero API Secrets in Source:** No hardcoded tokens, secret keys, or `.env` files are tracked in version control.
- **Tabnabbing Prevention:** All external links (`target="_blank"`) enforce `rel="noopener noreferrer"`.
- **Render Deployment Security Headers:** When deploying to Render static site hosting, attach the following HTTP response headers via a `render.yaml` or header rule:
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

## 💻 Local Setup & Development Instructions

### Prerequisites
- Node.js 18+ and `npm`

### Installation & Execution
```bash
# 1. Clone the repository
git clone https://github.com/NaniToka/toka.portfolio.git
cd toka.portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Build for production (compiles TypeScript & bundles via Vite into /dist)
npm run build

# 5. Preview production build locally
npm run preview
```

---

## 🚀 Deployment (Render Static Site)

- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
