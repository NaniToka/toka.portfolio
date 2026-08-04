import { Project, SkillCategory, Certification, Achievement, ExperienceItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Toka Nani",
  title: "AI Engineer / Software Engineer",
  education: "B.Tech CSE, 3rd year (2024–2028)",
  institution: "DVR & Dr. HS MIC College of Technology, Vijayawada, India",
  valueProp: "Building production AI systems, one prompt-driven deploy at a time.",
  email: "tokananiy@gmail.com",
  github: "https://github.com/NaniToka",
  linkedin: "https://linkedin.com/in/toka-nani-33a124359",
  resumePath: "nani.pdf",
  bio: [
    "Google Student Ambassador (GSA 2026) for the Gemini Program. Self-directed AI engineer building production systems end-to-end using AI-native tools (Antigravity, Codex, Kiro, Windsurf) to ship verified, containerized applications fast.",
    "Specializing in LLM context optimization middleware, cloud-native microservices on Google Cloud Run, and forensic ML bias auditing platforms.",
    "Actively seeking SWE / backend / DevOps internships (India-based, no visa sponsorship needed)."
  ]
};

export interface Specialization {
  title: string;
  description: string;
  iconName: string;
}

export const SPECIALIZATIONS: Specialization[] = [
  {
    title: "LLM Context Optimization",
    description: "Semantic vector ranking and real-time context condensation middleware cutting token costs and latency.",
    iconName: "Zap"
  },
  {
    title: "Cloud-Native Microservices",
    description: "Containerized serverless backends on Google Cloud Run with Docker and Firestore real-time synchronization.",
    iconName: "Cloud"
  },
  {
    title: "Forensic ML Bias Auditing",
    description: "Automated demographic parity metrics and Gemini 1.5 Flash explainability engines for compliance reporting.",
    iconName: "ShieldCheck"
  },
  {
    title: "AI-Native Engineering",
    description: "End-to-end rapid application delivery using AI-native workflows (Antigravity, Codex, Kiro, Windsurf).",
    iconName: "Sparkles"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "tokenflow-ai",
    title: "TokenFlow AI",
    subtitle: "Prompt Memory Optimizer Middleware",
    description: "Production-grade semantic vector ranking & real-time context condensation middleware that prunes redundant prompt tokens before LLM completion API calls.",
    problem: "Conversational LLM applications repeatedly resend growing prompt histories across chat sessions, racking up high token costs and latency spikes. This results in API rate-limit throttling, context window saturation, and degraded response accuracy due to noisy background prompt data.",
    solution: "Built a production-grade FastAPI and React 18 middleware pipeline combining Gemini text-embedding-004 vector representations with an exponential recency-decay formula. The algorithm dynamically calculates similarity and half-life decay to condense prompt history in-memory before invoking completion endpoints—achieving ~74% token overhead reduction with zero database storage cost.",
    stackRationale: "FastAPI for high-throughput asynchronous request handling; Gemini text-embedding-004 for semantic vector precision over keyword matching; React 18 for real-time frontend telemetry.",
    stack: ["FastAPI", "Gemini text-embedding-004", "Gemini 1.5 Flash", "React 18", "Swagger", "Render"],
    metrics: "~74% average reduction in prompt token overhead via exponential recency decay vector scoring",
    liveUrl: "https://tokenflow-ai.onrender.com",
    docsUrl: "https://tokenflow-ai.onrender.com/docs",
    githubUrl: "https://github.com/NaniToka/TokenFlow-AI",
    featured: true
  },
  {
    id: "biasguard-ai",
    title: "BiasGuard AI",
    subtitle: "Forensic ML Bias Auditing Platform",
    description: "Forensic auditing platform ingesting ML decision logs and detecting automated bias patterns using Vertex AI and Gemini explainability engines.",
    problem: "Black-box automated decision systems in hiring, credit scoring, and admissions risk embedding unseen demographic bias after deployment. Without forensic audit trails or explainability engines, engineering and compliance teams struggle to detect disparity or generate human-readable regulatory reports.",
    solution: "Built a serverless forensic auditing platform on Google Cloud Run that streams decision logs through a statistical evaluator calculating demographic parity and equalized odds metrics. Paired calculations with Gemini 1.5 Flash structured prompts to generate human-readable compliance audit reports and retraining recommendations in under 30 seconds. Built solo for Google Solution Challenge 2026.",
    stackRationale: "Google Cloud Run & Cloud Storage for event-driven serverless audit log processing; Vertex AI & Gemini 1.5 Flash for automated disparity evaluation and natural-language compliance reporting; Cloud Firestore for cross-region report sync.",
    stack: ["Vertex AI", "Gemini 1.5 Flash", "Flask", "Firestore", "Cloud Storage", "Cloud Run", "Docker"],
    metrics: "<30s audit cycle with automated UN SDG-5 & SDG-10 fairness reports",
    liveUrl: "https://biasguard-rzpoqg6s6a-uc.a.run.app",
    githubUrl: "https://github.com/NaniToka/unbiased-ai-decision",
    featured: true
  },
  {
    id: "janvoice-ai",
    title: "JanVoice AI",
    subtitle: "National AI Governance Suite",
    description: "Governance platform enabling citizens and Members of Parliament to report, track, and analyze constituency issues in real time.",
    problem: "Indian parliamentary constituencies lack unified digital tools for direct citizen grievance reporting and constituency-level governance analytics. Representatives and administrative offices are overwhelmed by unstructured constituent feedback without automated categorization or daily executive briefings.",
    solution: "Developed a national AI governance platform providing role-based portals for citizens, Members of Parliament (MPs), and administrators. Built MP executive dashboards featuring AI-generated daily constituency briefings, automated report routing, and natural-language smart search across citizen submissions.",
    stackRationale: "React & Netlify for fast, component-driven dashboard interfaces; Gemini AI for automated daily briefing summarization and natural-language search query parsing; SVG chart visualizers for real-time constituency data rendering.",
    stack: ["React", "Gemini AI", "JavaScript", "SVG Charts", "Netlify"],
    liveUrl: "https://spontaneous-raindrop-8a7198.netlify.app/dashboard",
    githubUrl: "https://github.com/NaniToka/Ai-agent",
    featured: true
  },
  {
    id: "stadiumsense-ai",
    title: "StadiumSense AI",
    subtitle: "FIFA World Cup 2026 GenAI Operations",
    description: "GenAI stadium operations platform providing real-time crowd telemetry and automated incident response briefings. Built for PromptWars.",
    problem: "Large sports venues and FIFA World Cup stadium operations struggle to coordinate real-time crowd flow telemetry, safety incident dispatch, and multi-agency briefings. Incident logs are often fragmented across disparate communication channels, delaying emergency response.",
    solution: "Integrated Gemini 1.5 Flash with Firestore real-time data streams and FastAPI microservices to deliver predictive crowd telemetry and automated operational incident briefings. Built for PromptWars hackathon to streamline stadium operations management.",
    stackRationale: "FastAPI & TypeScript for type-safe real-time telemetry pipelines; Firestore for live incident state synchronization; Gemini 1.5 Flash for automated operational briefing generation.",
    stack: ["React", "TypeScript", "FastAPI", "Gemini 1.5 Flash", "Firestore", "Render"],
    githubUrl: "https://github.com/NaniToka",
    featured: false
  },
  {
    id: "carbon-tracker",
    title: "Carbon Footprint Tracker",
    subtitle: "Environmental Impact Monitoring Dashboard",
    description: "Full-stack environmental impact monitoring web application calculating lifestyle carbon emissions with real-time reduction analytics. Built for PromptWars (Challenge 3).",
    problem: "Individuals and organizations lack actionable real-time visibility into daily carbon emissions generated by transportation, energy usage, and workplace habits. Existing tools rely on manual static estimation rather than interactive analytics.",
    solution: "Built a containerized full-stack web application providing real-time carbon emission calculations and interactive reduction analytics. Deployed on Google Cloud Run for PromptWars (Challenge 3) to provide instant visual feedback on lifestyle emissions.",
    stackRationale: "React & Vite for high-performance interactive charting UI; Tailwind CSS for responsive dark UI layout; Docker & Google Cloud Run for containerized serverless hosting.",
    stack: ["React", "Vite", "Tailwind CSS", "Docker", "Google Cloud Run"],
    githubUrl: "https://github.com/NaniToka/carbon-footprint-tracker.git",
    featured: false
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Cloud / AI Infrastructure",
    iconName: "Cloud",
    skills: ["Google Cloud (Cloud Run, GCS)", "Vertex AI", "Gemini API (Flash & Pro)", "AWS"]
  },
  {
    category: "Backend & Systems",
    iconName: "Server",
    skills: ["Python", "FastAPI", "Flask", "Cloud Firestore", "REST API Design"]
  },
  {
    category: "Frontend Web",
    iconName: "Layout",
    skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "Component Architecture"]
  },
  {
    category: "DevOps & Tooling",
    iconName: "Container",
    skills: ["Docker", "Cloud Run Deployment", "Git & GitHub", "CI Basics", "OpenAPI / Swagger"]
  },
  {
    category: "Programming Languages",
    iconName: "Code",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "C++"]
  },
  {
    category: "CS Fundamentals",
    iconName: "Cpu",
    skills: ["Data Structures & Algorithms (Daily LeetCode Practice)", "System Design", "OOP", "DBMS"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "promptwars-ch1",
    title: "PromptWars Virtual — Challenge 1",
    issuer: "Google for Developers × Hack2Skill",
    status: "Certificate of Appreciation",
    description: "Verified Generative AI solution submission for Challenge 1 during PromptWars Virtual",
    date: "04/08/2026",
    credentialId: "2026H2S04PWVCHL1-A00285",
    verifyUrl: "https://certificate.hack2skill.com/verify/2026H2S04PWVCHL1-A00285"
  },
  {
    id: "build-with-ai-chennai",
    title: "Build with AI Bootcamp, Chennai",
    issuer: "Google for Developers × Hack2Skill",
    status: "Certificate of Participation",
    description: "Hands-on bootcamp covering AI agent architecture, workflow design, and generative AI integration into production-ready systems",
    date: "04/08/2026",
    credentialId: "2026H2S08BWAICHN-P00569",
    verifyUrl: "https://certificate.hack2skill.com/verify/2026H2S08BWAICHN-P00569"
  },
  {
    id: "gsc-2026",
    title: "BiasGuard AI Prototype Certificate",
    issuer: "Google Solution Challenge 2026 × Hack2Skill",
    credentialId: "2026H2S07SCBWAI-PS06834",
    verifyUrl: "https://certificate.hack2skill.com/verify/2026H2S07SCBWAI-PS06834"
  },
  {
    id: "google-ai-essentials",
    title: "Google AI Essentials Specialization",
    issuer: "Google via Coursera (5-course specialization)",
    verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/HAXF8PBC6D2I"
  },
  {
    id: "google-gail",
    title: "Generative AI Leader — Certified",
    issuer: "Google Cloud",
    credentialId: "GAIL03-GETCERT/2026.06.29",
    status: "Verified Official"
  },
  {
    id: "jpmorgan-forage",
    title: "Software Engineering Job Simulation",
    issuer: "JPMorgan Chase & Co. × Forage",
    verifyUrl: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_6973b13fb1ee4126d09b7191_1781903103039_completion_certificate.pdf"
  },
  {
    id: "walmart-forage",
    title: "Advanced Software Engineering Simulation",
    issuer: "Walmart Global Tech × Forage",
    verifyUrl: "https://www.theforage.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_6973b13fb1ee4126d09b7191_1781985899780_completion_certificate.pdf"
  },
  {
    id: "tata-iq-forage",
    title: "GenAI Data Analytics Simulation",
    issuer: "Tata iQ × Forage",
    verifyUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_6973b13fb1ee4126d09b7191_1782260307680_completion_certificate.pdf"
  },
  {
    id: "aws-saa",
    title: "AWS Certified Solutions Architect – Associate (SAA-C03)",
    issuer: "Amazon Web Services",
    status: "Exam Scheduled September 2026"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "hackathons-13",
    title: "13+ Hackathons & Engineering Competitions",
    event: "Google Solution Challenge, PromptWars, Meta PyTorch Hackathon, Ascent 2026",
    description: "Participated in 13+ hackathons including Google Solution Challenge 2026, PromptWars (Challenges 1 & 3), Meta PyTorch Hackathon, and Anvil @ Ascent 2026 (Grand Finale)."
  },
  {
    id: "build-with-ai",
    title: "Build with AI Bootcamp Participant",
    event: "Google for Developers × Hack2skill (Chennai)",
    description: "Attended intensive hands-on technical workshop on building production AI applications using Gemini API and Vertex AI."
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "gsa-2026",
    role: "Google Student Ambassador — Gemini Program",
    organization: "Google",
    period: "May 2026 – Present",
    location: "Vijayawada, India",
    type: "ambassadorship",
    badgeLabel: "Leadership & Ambassadorship",
    description: "Selected at the national level to represent Google AI and Gemini developer initiatives on campus.",
    bullets: [
      "Selected at national level to represent Google AI and Gemini initiatives on campus as one of a limited cohort across India.",
      "Advised 100+ peers on Google AI, Cloud, and ML learning pathways; organized hands-on technical workshops.",
      "Leveraged direct Gemini API access to architect and deploy production-level AI-powered applications."
    ]
  },
  {
    id: "jpmorgan-forage-exp",
    role: "Software Engineering Job Simulation",
    organization: "JPMorgan Chase & Co. × Forage",
    period: "Completed 2026",
    location: "Virtual / Remote",
    type: "virtual",
    badgeLabel: "Virtual Engineering Program",
    verifyUrl: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_6973b13fb1ee4126d09b7191_1781903103039_completion_certificate.pdf",
    description: "Completed hands-on software engineering tasks modeled on JPMorgan Chase's real engineering workflows including [PLACEHOLDER: list specific technical exercises completed].",
    bullets: [
      "Executed hands-on software engineering tasks modeled after JPMorgan Chase's actual software delivery pipeline.",
      "Completed technical modules covering [PLACEHOLDER: list tools/frameworks used, e.g., Spring Boot, Kafka, financial data interfaces].",
      "Issued official Forage completion credential upon passing verification."
    ]
  },
  {
    id: "walmart-forage-exp",
    role: "Advanced Software Engineering Simulation",
    organization: "Walmart Global Tech × Forage",
    period: "Completed 2026",
    location: "Virtual / Remote",
    type: "virtual",
    badgeLabel: "Virtual Engineering Program",
    verifyUrl: "https://www.theforage.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_6973b13fb1ee4126d09b7191_1781985899780_completion_certificate.pdf",
    description: "Completed advanced engineering tasks modeled on Walmart Global Tech's enterprise systems including [PLACEHOLDER: list specific technical exercises completed].",
    bullets: [
      "Executed advanced software architecture and system design challenges modeled on Walmart Global Tech systems.",
      "Completed engineering tasks covering [PLACEHOLDER: list specific architecture/data structure exercises].",
      "Issued official Forage completion credential upon passing verification."
    ]
  },
  {
    id: "tata-iq-forage-exp",
    role: "GenAI Data Analytics Simulation",
    organization: "Tata iQ × Forage",
    period: "Completed 2026",
    location: "Virtual / Remote",
    type: "virtual",
    badgeLabel: "Virtual Engineering Program",
    verifyUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_6973b13fb1ee4126d09b7191_1782260307680_completion_certificate.pdf",
    description: "Completed applied GenAI and data analytics tasks modeled on Tata iQ's workflows including [PLACEHOLDER: list specific technical exercises completed].",
    bullets: [
      "Applied generative AI techniques and data analytics workflows modeled on Tata iQ client solutions.",
      "Completed practical analytics and prompt engineering tasks covering [PLACEHOLDER: list specific tools/models used].",
      "Issued official Forage completion credential upon passing verification."
    ]
  },
  {
    id: "hackathon-experience",
    role: "Hackathon Builder & Competitor (13+ Competitions)",
    organization: "Google Solution Challenge 2026 • PromptWars",
    period: "2025 – 2026",
    location: "Remote / On-site",
    type: "hackathon",
    badgeLabel: "Production Hackathon",
    verifyUrl: "https://certificate.hack2skill.com/verify/2026H2S07SCBWAI-PS06834",
    description: "Built and submitted production AI platforms under tight hackathon timelines for Google Solution Challenge 2026 (BiasGuard AI) and PromptWars Virtual (TokenFlow AI, StadiumSense AI, Carbon Footprint Tracker).",
    bullets: [
      "Built BiasGuard AI solo for Google Solution Challenge 2026 (demographic bias auditing on Cloud Run & Vertex AI).",
      "Earned PromptWars Virtual Challenge 1 Certificate of Appreciation and Build with AI Chennai Bootcamp Certificate.",
      "Participated in 13+ hackathons including Meta PyTorch Hackathon and Anvil @ Ascent 2026."
    ]
  },
  {
    id: "self-directed-dev",
    role: "Full-Stack & Cloud AI Engineer",
    organization: "Independent Engineering Focus",
    period: "Jan 2025 – Present",
    location: "Vijayawada, India",
    type: "role",
    badgeLabel: "Engineering Focus",
    description: "Architected and deployed 3 production AI applications on Cloud Run and Render using FastAPI, Flask, React 18, and Gemini APIs.",
    bullets: [
      "Architected TokenFlow AI prompt optimization middleware cutting prompt token overhead by ~74%.",
      "Maintained containerized deployment pipelines on Google Cloud Run and Render with Swagger OpenAPI documentation."
    ]
  }
];
