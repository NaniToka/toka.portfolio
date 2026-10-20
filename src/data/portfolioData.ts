import { Project, SkillCategory, Certification, Achievement, ExperienceItem, Setback } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Toka Nani",
  title: "AWS & Azure Certified Cloud AI Engineer · Google Student Ambassador (Gemini, 2026)",
  pitch: "I build LLM cost-optimization and ML fairness tooling on Google Cloud. TokenFlow AI reduces prompt tokens ~74% (see benchmark). BiasGuard AI audits decision logs against UN SDG fairness metrics on Cloud Run + Vertex AI.",
  footerLine: "B.Tech CSE '28 · Open to remote & relocation · Based in India (IST, UTC+5:30)",
  education: "B.Tech, Computer Science and Engineering (2024–2028 Expected)",
  cgpa: "7.3 / 10",
  institution: "DVR & Dr. HS MIC College of Technology, Vijayawada, India",
  valueProp: "I build LLM cost-optimization and ML fairness tooling on Google Cloud.",
  email: "tokananiy@gmail.com",
  phone: "+91 9912832776",
  github: "https://github.com/NaniToka",
  linkedin: "https://linkedin.com/in/toka-nani-33a124359",
  resumePath: "/nani.pdf",
  bio: [
    "Computer Science undergraduate and Google Gemini Student Ambassador building production-oriented Generative AI, cloud, and full-stack applications with Python, TypeScript, FastAPI, React, and Google Cloud.",
    "Data Analyst Intern at Bluestock Fintech. AWS Certified Solutions Architect – Associate & Microsoft Certified: Azure AI Cloud Developer Associate. Failed the Google Cloud GenAI Leader exam, rebuilt, and came back with two certs.",
    "Open to remote engineering roles & relocation worldwide."
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
    problem: "Conversational LLM applications repeatedly resend growing prompt histories across chat sessions, racking up high token costs and latency spikes.",
    solution: "Built a production-grade FastAPI and React 18 middleware pipeline combining Gemini text-embedding-004 vector representations with an exponential recency-decay formula. Condenses prompt history in-memory before invoking completion endpoints—achieving ~74% token overhead reduction.",
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
    problem: "Black-box automated decision systems in hiring, credit scoring, and admissions risk embedding unseen demographic bias after deployment without forensic audit trails.",
    solution: "Built a serverless forensic auditing platform on Google Cloud Run that streams decision logs through a statistical evaluator calculating demographic parity and equalized odds metrics. Paired calculations with Gemini 1.5 Flash structured prompts to generate human-readable compliance audit reports in under 30 seconds. Built solo for Google Solution Challenge 2026.",
    stackRationale: "Google Cloud Run & Cloud Storage for event-driven serverless audit log processing; Vertex AI & Gemini 1.5 Flash for automated disparity evaluation and natural-language compliance reporting.",
    stack: ["Vertex AI", "Gemini 1.5 Flash", "Flask", "Firestore", "Cloud Storage", "Cloud Run", "Docker"],
    metrics: "<30s audit cycle with automated UN SDG-5 & SDG-10 fairness reports",
    liveUrl: "https://biasguard-rzpoqg6s6a-uc.a.run.app",
    githubUrl: "https://github.com/NaniToka/unbiased-ai-decision",
    featured: true
  },
  {
    id: "civicpulse-ai",
    title: "CivicPulse AI",
    subtitle: "Multilingual Civic Decision Intelligence Layer",
    description: "An open-source multilingual civic decision intelligence layer that transforms citizen voices into traceable, evidence-backed civic investment priorities.",
    problem: "Public administration systems process millions of fragmented citizen complaints across diverse regional scripts without automated categorization or objective demand-prioritization models.",
    solution: "Built an open-source platform that turns multilingual citizen requests into evidence-backed infrastructure priorities using Gemini for language detection, translation, and intent/urgency extraction. Engineered a deterministic 4-part scoring engine (35% demand, 25% infra gap, 20% vulnerability, 20% investment overlap) with a state-machine anti-fake-closure workflow validated by 37 passing pytest tests.",
    stackRationale: "FastAPI and Python for backend logic and AI orchestration; Gemini AI for multilingual text analysis; React, Vite, and TypeScript for dashboard visualization.",
    stack: ["TypeScript", "React", "Vite", "FastAPI", "Python", "Google Gemini AI"],
    liveUrl: "https://civicpulse-ai-frontend.onrender.com/",
    githubUrl: "https://github.com/NaniToka/civicpulse-ai.git",
    linkedinUrl: "https://lnkd.in/dS5RsbUi",
    featured: true
  },
  {
    id: "mutual-fund-analytics",
    title: "Mutual Fund Analytics Platform",
    subtitle: "Bluestock Fintech Capstone Project",
    description: "End-to-end financial data engineering ETL pipeline and interactive Streamlit analytics dashboard calculating portfolio risk metrics and fund recommendations.",
    problem: "Financial analysts and retail investors lack unified relational tools to evaluate mutual fund NAV histories, calculate quantitative risk indicators, and perform multi-scheme comparisons.",
    solution: "Designed a 9-table SQLite star schema loaded through SQLAlchemy (86,000+ rows) producing 15 exploratory charts and 10 business SQL queries. Computed CAGR, Sharpe, Sortino, Alpha/Beta, Max Drawdown, and VaR/CVaR in an interactive 4-page Streamlit dashboard.",
    stackRationale: "Python & SQLAlchemy for ETL execution; SQLite star schema for structured queries; Streamlit & AMFI API for telemetry.",
    stack: ["Python", "SQL", "SQLite", "SQLAlchemy", "Pandas", "Streamlit", "AMFI API"],
    githubUrl: "https://github.com/NaniToka",
    featured: false
  },
  {
    id: "janvoice-ai",
    title: "JanVoice AI",
    subtitle: "National AI Governance Suite",
    description: "Governance platform enabling citizens and Members of Parliament to report, track, and analyze constituency issues in real time.",
    problem: "Parliamentary constituencies lack unified digital tools for direct citizen grievance reporting and constituency-level governance analytics.",
    solution: "Developed role-based portals for citizens, MPs, and administrators featuring AI-generated daily constituency briefings, automated report routing, and natural-language smart search across citizen submissions.",
    stackRationale: "React & Netlify for dashboard UI; Gemini AI for daily briefing summarization; SVG charts for real-time visualization.",
    stack: ["React", "Gemini AI", "JavaScript", "SVG Charts", "Netlify"],
    liveUrl: "https://spontaneous-raindrop-8a7198.netlify.app/dashboard",
    githubUrl: "https://github.com/NaniToka/Ai-agent",
    featured: false
  },
  {
    id: "stadiumsense-ai",
    title: "StadiumSense AI",
    subtitle: "FIFA World Cup 2026 GenAI Operations",
    description: "GenAI stadium operations platform providing real-time crowd telemetry and automated incident response briefings.",
    problem: "Large sports venues struggle to coordinate real-time crowd flow telemetry, safety incident dispatch, and multi-agency briefings under operational pressure.",
    solution: "Integrated Gemini 1.5 Flash with Firestore real-time data streams and FastAPI microservices to deliver predictive crowd telemetry and automated incident briefings.",
    stackRationale: "FastAPI & TypeScript for telemetry pipelines; Firestore for live incident state sync; Gemini 1.5 Flash for briefings.",
    stack: ["React", "TypeScript", "FastAPI", "Gemini 1.5 Flash", "Firestore", "Render"],
    githubUrl: "https://github.com/NaniToka",
    featured: false
  },
  {
    id: "carbon-tracker",
    title: "Carbon Footprint Tracker",
    subtitle: "Environmental Impact Monitoring Dashboard",
    description: "Full-stack environmental impact monitoring web application calculating lifestyle carbon emissions with real-time reduction analytics.",
    problem: "Individuals and organizations lack actionable real-time visibility into daily carbon emissions generated by transportation and energy usage.",
    solution: "Built a containerized full-stack web application providing real-time carbon emission calculations and interactive reduction analytics deployed on Google Cloud Run.",
    stackRationale: "React & Vite for charting UI; Tailwind CSS for layout; Docker & Google Cloud Run for containerized serverless hosting.",
    stack: ["React", "Vite", "Tailwind CSS", "Docker", "Google Cloud Run"],
    githubUrl: "https://github.com/NaniToka/carbon-footprint-tracker.git",
    featured: false
  },
  {
    id: "anvil-ascent-pipeline",
    title: "Ascent Autonomous Customer Success Pipeline",
    subtitle: "Anvil Hackathon @ Scaler Ascent 2026",
    description: "Autonomous multi-agent pipeline that triages customer support tickets, researches root causes using Gemini AI, and generates fix-it scripts — built for the Anvil Hackathon at Scaler School of Technology.",
    problem: "Customer success teams manually triage hundreds of support tickets without automated root-cause analysis or fix generation, causing slow resolution cycles.",
    solution: "Built a full-stack CrewAI + Gemini pipeline where autonomous agents classify ticket severity, research technical root causes via Serper web search, and produce executable remediation scripts. React dashboard with glassmorphism UI streams agent traces in real-time via Omium observability.",
    stackRationale: "CrewAI for multi-agent orchestration; Gemini AI for root-cause reasoning and script generation; FastAPI for the backend API; React + Vite for the real-time dashboard.",
    stack: ["CrewAI", "Gemini AI", "FastAPI", "React", "Vite", "Omium", "Python"],
    githubUrl: "https://github.com/NaniToka/anvil-hackathon.git",
    featured: false
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    iconName: "Code",
    skills: ["Python", "Java", "C/C++", "JavaScript", "TypeScript", "SQL"]
  },
  {
    category: "AI / GenAI",
    iconName: "Sparkles",
    skills: ["Generative AI", "Google Gemini API", "Vertex AI", "Prompt Engineering"]
  },
  {
    category: "Web / Backend",
    iconName: "Server",
    skills: ["React", "FastAPI", "Flask", "REST APIs", "Streamlit", "HTML", "CSS"]
  },
  {
    category: "Cloud / DevOps",
    iconName: "Cloud",
    skills: ["AWS", "Google Cloud", "Cloud Run", "Docker", "Render", "Vercel"]
  },
  {
    category: "Data & Databases",
    iconName: "Database",
    skills: ["SQL", "MySQL", "SQLite", "SQLAlchemy", "Firestore", "Firebase", "Pandas", "NumPy"]
  },
  {
    category: "Developer Tools & CS",
    iconName: "Cpu",
    skills: ["Git", "GitHub", "Vite", "Vitest", "pytest", "VS Code", "DSA", "OOP", "DBMS", "SDLC"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "azure-ai-developer",
    title: "Microsoft Certified: Azure AI Cloud Developer Associate",
    issuer: "Microsoft",
    status: "Certified — Active",
    description: "Passed all requirements for Azure AI Cloud Developer Associate. Validates skills in designing and implementing AI solutions on Azure using Azure OpenAI, Cognitive Services, and cloud-native AI pipelines.",
    date: "11/10/2026",
    credentialId: "8191A9785202DDCB",
    verifyUrl: "https://learn.microsoft.com/en-in/users/tokanani-0812/credentials/8191a9785202ddcb",
    linkedinUrl: "https://lnkd.in/p/d-AVqTBX",
    certificateUrl: "/azure-ai-developer-associate.pdf"
  },
  {
    id: "aws-saa",
    title: "AWS Certified Solutions Architect – Associate (SAA-C03)",
    issuer: "Amazon Web Services",
    status: "Certified — Active",
    description: "Validates expertise in designing secure, cost-optimized, high-performing, and resilient architectures on AWS. Covers EC2, S3, VPC, IAM, RDS, Lambda, and cloud architecture best practices.",
    date: "09/2026",
    credentialId: "24807f2f-d801-4f20-9c7e-ab40c2fa6b35",
    verifyUrl: "https://www.credly.com/badges/24807f2f-d801-4f20-9c7e-ab40c2fa6b35/linked_in_profile",
    linkedinUrl: "https://lnkd.in/p/d8u3kDXn"
  },
  {
    id: "amrita-agentic-leap-2026",
    title: "Amrita Agentic Leap 2026 — Agentic AI Bootcamp",
    issuer: "Amrita School of Computing, Amrita Vishwa Vidyapeetham",
    status: "Certificate of Participation",
    description: "Five-day Agentic AI Bootcamp organized by Amrita School of Computing, Amrita Vishwa Vidyapeetham, Amritapuri Campus, Kerala. Covered agentic AI architectures, multi-agent systems, and real-world AI deployment workflows.",
    date: "07–11/09/2026",
    credentialId: "359876",
    verifyUrl: "https://certificate.amritauniversity.in/verify/359876",
    certificateUrl: "/amrita-agentic-leap-2026.pdf"
  },
  {
    id: "genai-academy-apac-2026",
    title: "Google Cloud Gen AI Academy APAC 2026 – Cohort 3",
    issuer: "Google Cloud × Hack2skill",
    status: "Certificate of Completion (APAC Edition)",
    description: "Hands-on engineering academy focused on accelerating AI with Cloud Run — building, deploying, and orchestrating intelligent agents on Google Cloud.",
    date: "03/09/2026",
    credentialId: "2026H2S09GCGENAIAPACC3-P00601",
    verifyUrl: "https://certificate.hack2skill.com/verify/2026H2S09GCGENAIAPACC3-P00601",
    certificateUrl: "/google-cloud-genai-academy-apac.pdf"
  },
  {
    id: "iict-ai-readiness",
    title: "Foundation Course on AI Readiness",
    issuer: "MIB (Govt of India) × IICT × Google & YouTube",
    status: "Certificate of Completion",
    description: "Successfully completed Foundation Course on AI Readiness issued by Ministry of Information & Broadcasting and Indian Institute of Creative Technologies (IICT) in partnership with Google and YouTube.",
    date: "09/09/2026",
    credentialId: "IICT-19052613476",
    certificateUrl: "/iict-foundation-course-ai-readiness.pdf"
  },
  {
    id: "google-ai-essentials",
    title: "Google AI Essentials Specialization",
    issuer: "Google via Coursera (5-course specialization)",
    verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/HAXF8PBC6D2I",
    certificateUrl: "/google-ai-essentials-specialization.pdf",
    subCertifications: [
      {
        id: "google-ai-course-1",
        title: "Start Writing Prompts like a Pro",
        verifyUrl: "https://coursera.org/verify/H0Z5SKI3NEPD",
        certificateUrl: "/start-writing-prompts-like-a-pro.pdf"
      },
      {
        id: "google-ai-course-2",
        title: "Design Prompts for Everyday Work Tasks",
        verifyUrl: "https://coursera.org/verify/1XYIJ9Y1VZDU",
        certificateUrl: "/design-prompts-for-everyday-work-tasks.pdf"
      },
      {
        id: "google-ai-course-3",
        title: "Speed Up Data Analysis and Presentation Building",
        verifyUrl: "https://coursera.org/verify/UG6EYMVB72KJ",
        certificateUrl: "/speed-up-data-analysis-and-presentation-building.pdf"
      },
      {
        id: "google-ai-course-4",
        title: "Use AI as a Creative or Expert Partner",
        verifyUrl: "https://coursera.org/verify/L7RUBLDOMP1L",
        certificateUrl: "/use-ai-as-a-creative-or-expert-partner.pdf"
      }
    ]
  },
  {
    id: "promptwars-ch1",
    title: "PromptWars Virtual — Challenge 1",
    issuer: "Google for Developers × Hack2Skill",
    status: "Certificate of Appreciation",
    description: "Verified Generative AI solution submission for Challenge 1 during PromptWars Virtual",
    date: "04/08/2026",
    credentialId: "2026H2S04PWVCHL1-A00285",
    verifyUrl: "https://certificate.hack2skill.com/verify/2026H2S04PWVCHL1-A00285",
    certificateUrl: "/promptwars-ch1.pdf"
  },
  {
    id: "promptwars-ch3",
    title: "PromptWars Virtual — Challenge 3 (Top 400)",
    issuer: "Google for Developers × Hack2Skill",
    status: "Certificate of Achievement",
    description: "Verified Generative AI solution submission for Challenge 3 during PromptWars Virtual, ranking in the Top 400 Leaderboard.",
    date: "11/08/2026",
    credentialId: "2026H2S06PWVCHL3-AT00275",
    verifyUrl: "https://lnkd.in/d4bx-BCT"
  },
  {
    id: "build-with-ai-chennai",
    title: "Build with AI Bootcamp, Chennai",
    issuer: "Google for Developers × Hack2Skill",
    status: "Certificate of Participation",
    description: "Hands-on bootcamp covering AI agent architecture, workflow design, and generative AI integration into production-ready systems",
    date: "04/08/2026",
    credentialId: "2026H2S08BWAICHN-P00569",
    verifyUrl: "https://certificate.hack2skill.com/verify/2026H2S08BWAICHN-P00569",
    certificateUrl: "/build-with-ai-chennai.pdf"
  },
  {
    id: "gsc-2026",
    title: "Google Solution Challenge 2026",
    issuer: "Google Solution Challenge 2026 × Hack2Skill",
    credentialId: "2026H2S07SCBWAI-PS06834",
    verifyUrl: "https://certificate.hack2skill.com/verify/2026H2S07SCBWAI-PS06834",
    certificateUrl: "/solution-challenge-2026.pdf"
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
    id: "hackace-2026",
    title: "HackACE 2026 — International Level Hackathon",
    issuer: "KPR Institute of Engineering & Technology × Allcollegeevent.com",
    status: "Certificate of Participation",
    description: "Participated in Round 1 of HackACE 2026, an international level hackathon jointly organized by CSE (AI & ML) and Computer Science and Business Systems departments, KPR Institute of Engineering and Technology, Coimbatore, Tamil Nadu, in association with Allcollegeevent.com.",
    credentialId: "NXAIWDA0ZCC47",
    certificateUrl: "/hackace-2026.pdf"
  },
  {
    id: "anvil-ascent-2026",
    title: "Anvil Hackathon — Ascent Builders TechFest",
    issuer: "Scaler School of Technology",
    status: "Certificate of Participation",
    description: "Demonstrated innovation and technical excellence at Ascent, the annual Builders TechFest of Scaler School of Technology, held on 16–17 May 2026. Built an autonomous CrewAI + Gemini customer success pipeline.",
    date: "16–17/05/2026",
    certificateImgUrl: "/anvil-ascent-cert.png"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "anvil-ascent-2026",
    title: "Grand Finale Qualifier — Anvil Hackathon",
    event: "Scaler School of Technology (Anvil @ Ascent 2026)",
    description: "Demonstrated innovation and technical excellence at Ascent, the annual Builders TechFest of Scaler School of Technology (16–17 May 2026). Built an autonomous CrewAI + Gemini customer success pipeline that triages support tickets and generates fix-it scripts."
  },
  {
    id: "gsc-2026-hackathon",
    title: "Google Solution Challenge 2026 Submission",
    event: "Google Solution Challenge 2026",
    description: "Architected and submitted BiasGuard AI solo (demographic bias auditing on Cloud Run & Vertex AI)."
  },
  {
    id: "promptwars-hackathon",
    title: "PromptWars Virtual — Challenge 1 & 3 (Top 400)",
    event: "Google for Developers × Hack2Skill",
    description: "Earned Challenge 1 Certificate of Appreciation and Challenge 3 Certificate of Achievement, ranking in the Top 400 Leaderboard."
  },
  {
    id: "hackathons-13",
    title: "13+ Hackathons & Engineering Competitions",
    event: "Google Solution Challenge, PromptWars, Meta PyTorch Hackathon, Ascent 2026",
    description: "Participated in 13+ hackathons including Google Solution Challenge 2026, PromptWars (Challenges 1 & 3), Meta PyTorch Hackathon, and Anvil @ Ascent 2026."
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "gsa-2026",
    role: "Google Gemini Student Ambassador",
    organization: "Google, India",
    period: "May 2026 – Present",
    location: "Vijayawada, India",
    type: "ambassadorship",
    badgeLabel: "Leadership & Ambassadorship",
    description: "Selected through a multi-stage evaluation to represent Google Gemini in the Student Ambassador program on campus.",
    bullets: [
      "Selected through a multi-stage evaluation to represent Google Gemini in the Student Ambassador program.",
      "Represent Gemini on campus through workshops and developer sessions on AI application development."
    ]
  },
  {
    id: "bluestock-internship",
    role: "Data Analyst Intern",
    organization: "Bluestock Fintech",
    period: "Sep 2026 – Oct 2026",
    location: "Remote",
    type: "internship",
    badgeLabel: "Corporate Internship",
    proofUrl: "/bluestock-internship-offer.pdf",
    offerId: "BFDA157579",
    description: "Built an end-to-end mutual fund analytics pipeline in Python and SQL, generating synthetic datasets and integrating live AMFI NAV data.",
    bullets: [
      "Built an end-to-end mutual fund analytics pipeline in Python and SQL, generating synthetic datasets (50,000 transactions, 2,000 investors, 12,000+ NAV rows) and integrating live AMFI NAV data for 6 scheme codes.",
      "Cleaned and validated all datasets using forward-fill, deduplication, KYC flagging, and expense-ratio cap checks."
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
    description: "Architected and deployed production AI applications on Cloud Run and Render using FastAPI, Flask, React 18, and Gemini APIs.",
    bullets: [
      "Architected TokenFlow AI prompt optimization middleware cutting prompt token overhead by ~74%.",
      "Maintained containerized deployment pipelines on Google Cloud Run and Render with Swagger OpenAPI documentation."
    ]
  }
];

export const SETBACKS: Setback[] = [
  {
    id: "gcp-genai-fail",
    title: "Google Cloud Certified – Generative AI Leader",
    date: "August 2026",
    description: "Did not pass the Google Cloud Certified – Generative AI Leader exam in August 2026 (borderline score in 3 of 4 domain sections).\nLearned that preparation confidence must be measured against empirical practice scores and detailed section breakdowns.\nCurrently reviewing domain gaps, revisiting official GCP documentation, and preparing for a retake.",
    lessons: [
      "Reviewing score report domain by domain to target specific gaps",
      "Revisiting official GCP documentation and hands-on labs",
      "Scheduling exam retake with structured practice tests"
    ],
    proofUrl: "/gcp-exam-result.pdf"
  }
];

import type { Win } from '../types/portfolio';

export const WINS: Win[] = [
  {
    id: "aws-saa-pass",
    title: "AWS Certified Solutions Architect – Associate",
    date: "September 2026",
    context: "Failed the Google Cloud Generative AI Leader exam in August 2026. It cost money and shook my confidence more than the money. I didn't pretend otherwise — I documented it publicly on my portfolio.",
    description: "One month after that failure, passed the AWS Certified Solutions Architect – Associate (SAA-C03) on the first attempt. Credential ID: 24807f2f-d801-4f20-9c7e-ab40c2fa6b35. Valid through September 2029.\n\nWhat made the difference: building real projects alongside the studying. Concepts from EC2, VPC, IAM, and S3 that I had already deployed on cloud infra for TokenFlow AI and BiasGuard stuck differently when I encountered them on paper.",
    takeaways: [
      "A fail shows exactly what you don't know. A pass only tells you that you're fine.",
      "Building real projects next to studying makes concepts stick — not just for the exam, but permanently.",
      "Confidence doesn't return when you feel ready. It returns when you show up again."
    ],
    proofUrl: "https://www.credly.com/badges/24807f2f-d801-4f20-9c7e-ab40c2fa6b35/linked_in_profile",
    linkedinUrl: "https://lnkd.in/p/d8u3kDXn"
  },
  {
    id: "azure-ai-pass",
    title: "Microsoft Certified: Azure AI Cloud Developer Associate",
    date: "October 2026",
    context: "Two months after the GCP failure, still carrying that result. The AWS pass helped, but one certification doesn't erase the pattern of doubt that a public failure leaves.",
    description: "Passed the Microsoft Azure AI Cloud Developer Associate exam on 11 October 2026. Certification number: 7B8CAX-5BFF97. Credential ID: 8191A9785202DDCB. Valid through October 2027.\n\nThree cloud certifications attempted since August. Two passed. One retake scheduled. The GenAI Leader retake is next.",
    takeaways: [
      "Passing after failing feels different — you know what it cost.",
      "Two associate-level certifications across AWS and Azure in under two months.",
      "The GCP GenAI Leader retake is the next item on the list."
    ],
    proofUrl: "https://learn.microsoft.com/en-in/users/tokanani-0812/credentials/8191a9785202ddcb",
    linkedinUrl: "https://lnkd.in/p/d-AVqTBX"
  }
];
