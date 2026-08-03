# 🚀 Toka Nani - Personal Engineering Portfolio

Welcome to the official developer portfolio repository of **Toka Nani**, B.Tech Computer Science student, Google Student Ambassador (Gemini Program), and Full-Stack / Cloud AI Engineer.

---

## 🔗 Quick Links & Live Demos

- **🌐 Live Portfolio:** [toka-portfolio-2.onrender.com](https://toka-portfolio-2.onrender.com)
- **⚡ TokenFlow AI Live:** [tokenflow-ai.onrender.com](https://tokenflow-ai.onrender.com) | [Swagger API Docs](https://tokenflow-ai.onrender.com/docs)
- **📄 Download Resume:** [`nani.pdf`](nani.pdf) (Available via direct download button on the site)
- **🐙 GitHub Profile:** [github.com/NaniToka](https://github.com/NaniToka)
- **💼 LinkedIn:** [linkedin.com/in/toka-nani-33a124359](https://linkedin.com/in/toka-nani-33a124359)
- **📧 Email:** [tokananiy@gmail.com](mailto:tokananiy@gmail.com)

---

## 📌 Project Overview

This portfolio website is a custom-designed, high-performance web platform built with a modern developer terminal & matrix aesthetic. It showcases production-deployed applications, AI memory optimization middleware, governance platforms, cloud architecture skills, hackathon achievements, verified certificates, and technical experience.

### Key Features
- **📄 Interactive Resume Download:** Single-click direct PDF download (`nani.pdf`) for recruiters and hiring managers.
- **⚡ Terminal Typewriter Effect:** Live typing sequence simulating a developer environment.
- **🌌 Interactive Particle & Matrix Background:** Dynamic HTML5 Canvas rendering particle networks and matrix background animations.
- **🛠️ Technical Stack Breakdown:** Categorized breakdown of Frontend, Cloud, Systems, Languages, and CS Fundamentals.
- **🚀 Featured AI Projects Showcase:** Direct links and technical deep-dives into flagship projects (*TokenFlow AI*, *JanVoice AI*, *BiasGuard AI*).
- **🏆 Certifications & Verification Links:** Verified certificates from Google Solution Challenge 2026, Google Cloud, AWS, JPMorgan Chase, Walmart, and Tata iQ.

---

## 🚀 Featured Flagship Projects

### 1. TokenFlow AI — Prompt Memory Optimizer Middleware
- **Live App:** [https://tokenflow-ai.onrender.com](https://tokenflow-ai.onrender.com)
- **Interactive Swagger Docs:** [https://tokenflow-ai.onrender.com/docs](https://tokenflow-ai.onrender.com/docs)
- **GitHub Repository:** [https://github.com/NaniToka/TokenFlow-AI](https://github.com/NaniToka/TokenFlow-AI)
- **Description:** Production-grade semantic vector ranking & real-time LLM context compression middleware built with FastAPI, Gemini `text-embedding-004`, and React 18. Reduces prompt token overhead by 50%–75%+ (~74% avg) with zero-storage memory condensation via `gemini-1.5-flash` and exponential recency decay vector scoring.

### 2. JanVoice AI — National AI Governance Suite
- **Live Suite:** [https://spontaneous-raindrop-8a7198.netlify.app/dashboard](https://spontaneous-raindrop-8a7198.netlify.app/dashboard)
- **GitHub Repository:** [https://github.com/NaniToka/Ai-agent](https://github.com/NaniToka/Ai-agent)
- **Description:** Presentation-ready national AI governance platform for Indian parliamentary constituencies, enabling MP executive dashboards, citizen reporting, daily briefings, and natural language search.

### 3. BiasGuard AI — Forensic ML Bias Auditing Platform
- **Live Cloud Run:** [https://biasguard-rzpoqg6s6a-uc.a.run.app](https://biasguard-rzpoqg6s6a-uc.a.run.app)
- **GitHub Repository:** [https://github.com/NaniToka/unbiased-ai-decision](https://github.com/NaniToka/unbiased-ai-decision)
- **Description:** Forensic ML bias auditing platform ingesting decision logs and detecting automated bias using Vertex AI and Gemini 1.5 Flash. Built for Google Solution Challenge 2026.

---

## 🏆 Certifications & Verification Links

- **Google Solution Challenge 2026 × Hack2Skill:** [BiasGuard AI Prototype Certificate](https://certificate.hack2skill.com/verify/2026H2S07SCBWAI-PS06834) (ID: `2026H2S07SCBWAI-PS06834`, Dated: 22/07/2026)
- **Google:** [AI Essentials Specialization](https://www.coursera.org/account/accomplishments/specialization/HAXF8PBC6D2I)
- **Google Cloud:** Generative AI Leader — Certified (`GAIL03-GETCERT/2026.06.29`)
- **JPMorgan Chase × Forage:** [Software Engineering Certificate](https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_6973b13fb1ee4126d09b7191_1781903103039_completion_certificate.pdf)
- **Walmart Global Tech × Forage:** [Advanced Software Engineering Certificate](https://www.theforage.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_6973b13fb1ee4126d09b7191_1781985899780_completion_certificate.pdf)
- **Tata iQ × Forage:** [GenAI Data Analytics Certificate](https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_6973b13fb1ee4126d09b7191_1782260307680_completion_certificate.pdf)

---

## 🛠️ Tech Stack & Technologies Used

- **Frontend Core:** HTML5, CSS3 (Vanilla Custom CSS with Design Tokens & Glassmorphism), Modern JavaScript (ES6+)
- **Icons & Typography:** Tabler Icons, JetBrains Mono, Inter Font Family
- **Visuals & Graphics:** Custom SVG visualizers, HTML5 Canvas 2D API
- **Deployment & Hosting:** Render (Production CDN deployment)
- **Document Management:** PDF resume integration (`nani.pdf`)

---

## 📂 Repository File Structure

```text
/Users/tokanani/port/
├── index.html        # Main single-page application (HTML structure, CSS design tokens, JS animations)
├── nani.pdf          # Official PDF Resume (linked directly to the "Download Resume" button)
└── README.md         # Full project documentation & architectural overview
```

---

## 📄 Resume PDF Integration

The portfolio includes a **Download Resume** button configured with the HTML5 `download` attribute to serve Toka Nani's resume (`nani.pdf`):

```html
<a href="nani.pdf" download="Toka_Nani_Resume.pdf" target="_blank" rel="noopener" class="btn btn-primary">
    <i class="ti ti-download"></i> Download Resume
</a>
```

---

## 💻 Local Setup & Development

To view or test the portfolio website locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NaniToka/toka.portfolio.git
   cd toka.portfolio
   ```

2. **Run locally using any static web server:**
   - Using Python:
     ```bash
     python3 -m http.server 8000
     ```
   - Using Node `serve`:
     ```bash
     npx serve .
     ```
   - Or simply open `index.html` directly in your web browser.

3. Open `http://localhost:8000` in your web browser.

---

## 📝 License & Contact

Developed with ❤️ by **Toka Nani**. Feel free to reach out for software engineering internship opportunities, collaborations, or cloud/AI projects!
