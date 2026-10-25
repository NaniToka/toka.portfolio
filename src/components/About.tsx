import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Cloud, ShieldCheck, MapPin, ExternalLink, Github } from 'lucide-react';
import { PERSONAL_INFO, SPECIALIZATIONS } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

const specIconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-5 h-5 text-[#00E5FF]" />,
  Cloud: <Cloud className="w-5 h-5 text-[#00E5FF]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#00E5FF]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#00E5FF]" />,
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-20 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div>
          <span className="font-mono text-xs text-[#00E5FF] font-semibold uppercase tracking-wider block mb-1">
            01. Background & Specializations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            About & Engineering Focus
          </h2>
        </div>

        {/* Top Grid: Bio Card + Structured Data Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 glass-card card-hover rounded-xl p-6 sm:p-8 space-y-6"
          >
            {/* Header Avatar & Credential */}
            <div className="flex items-center gap-4 pb-4 border-b border-[rgba(0,229,255,0.15)]">
              <picture className="shrink-0">
                <source srcSet="/toka-profile.webp" type="image/webp" />
                <img
                  src="/toka-profile.jpg"
                  alt="Toka Nani, Software Engineer"
                  width={64}
                  height={64}
                  loading="lazy"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-[rgba(0,229,255,0.3)] ring-2 ring-[rgba(0,229,255,0.1)]"
                />
              </picture>
              <div>
                <div className="flex items-center gap-2 text-[#00E5FF] font-mono text-sm font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span>Google Student Ambassador</span>
                </div>
                <div className="text-xs font-mono text-slate-400 mt-0.5">Gemini Program (2026 Cohort) • DVR & Dr. HS MIC College of Technology</div>
              </div>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p className="font-bold text-slate-100 text-base sm:text-lg leading-snug">
                Google Student Ambassador (GSA 2026) for the Gemini Program and self-directed AI engineer shipping production-grade, containerized applications fast.
              </p>
              <p>
                Leveraging an AI-native engineering methodology with tools like Antigravity, Codex, Kiro, and Windsurf, I build end-to-end applications with high architectural rigor—focusing on shipping verified, deployed software rather than manual boilerplate coding.
              </p>
              <p>
                My work centers on semantic vector ranking for LLM prompt memory compression (TokenFlow AI), serverless cloud microservices on Google Cloud Run, and automated ML fairness auditing engines (BiasGuard AI).
              </p>
              <p className="text-xs sm:text-sm text-slate-400 font-mono pt-1">
                Currently pursuing B.Tech Computer Science (3rd year) and actively seeking SWE, Backend, or DevOps internship roles across India.
              </p>
            </div>
          </motion.div>

          {/* Structured Internship Data Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 glass-card card-hover rounded-xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-[#00E5FF]" />

            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[rgba(0,229,255,0.15)]">
                <h3 className="font-mono text-xs font-semibold text-[#00E5FF] uppercase tracking-wider">
                  Internship Data Panel
                </h3>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="p-3 rounded-lg bg-[rgba(59,10,107,0.5)] border border-[rgba(0,229,255,0.15)]">
                  <span className="text-slate-500 uppercase text-[10px] block mb-0.5">Target Roles</span>
                  <span className="text-slate-100 font-bold text-sm">SWE / Backend / DevOps</span>
                </div>

                <div className="p-3 rounded-lg bg-[rgba(59,10,107,0.5)] border border-[rgba(0,229,255,0.15)]">
                  <span className="text-slate-500 uppercase text-[10px] block mb-0.5">Location & Availability</span>
                  <span className="text-slate-100 font-bold text-xs flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" /> Based in India · Remote & Relocation
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[rgba(59,10,107,0.5)] border border-[rgba(0,229,255,0.15)]">
                  <span className="text-slate-500 uppercase text-[10px] block mb-0.5">Degree & Track</span>
                  <span className="text-slate-100 font-bold text-xs">B.Tech CSE (2024–2028 Expected)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[rgba(0,229,255,0.15)]">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="btn-primary-hover inline-flex items-center justify-center w-full py-2.5 px-4 rounded-md bg-[#00E5FF] hover:bg-[#33EEFF] text-[#050505] font-mono text-xs font-semibold min-h-[44px]"
              >
                Contact Toka Nani
              </a>
            </div>
          </motion.div>

        </div>

        {/* Specializations Mini-Grid */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs font-semibold text-[#00E5FF] uppercase tracking-wider">
            Core Technical Specializations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SPECIALIZATIONS.map((spec, idx) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <TiltCard maxTilt={3} className="h-full rounded-xl">
                  <div className="glass-card card-hover rounded-xl p-5 flex flex-col justify-between h-full">
                    <div className="space-y-2">
                      <div className="p-2 rounded-lg bg-[rgba(59,10,107,0.6)] border border-[rgba(0,229,255,0.2)] w-fit">
                        {specIconMap[spec.iconName] || <Zap className="w-5 h-5 text-[#00E5FF]" />}
                      </div>
                      <h4 className="text-sm font-bold text-slate-100">
                        {spec.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {spec.description}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pinned Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 pt-4"
        >
          <div className="flex items-center justify-between flex-wrap gap-2 pb-2">
            <div className="flex items-center gap-2">
              <Github className="w-5 h-5 text-[#00E5FF]" />
              <h3 className="font-mono text-xs font-semibold text-[#00E5FF] uppercase tracking-wider">
                Pinned Open-Source Repositories
              </h3>
            </div>
            <a
              href="https://github.com/NaniToka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#00E5FF] hover:text-[#33EEFF] transition-colors"
            >
              github.com/NaniToka <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TiltCard maxTilt={2.5} className="h-full rounded-xl">
              <div className="glass-card card-hover rounded-xl p-5 flex flex-col justify-between space-y-3 h-full">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-mono font-bold text-slate-100 text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00E5FF]" /> TokenFlow-AI
                    </h4>
                    <span className="font-mono text-[10px] text-slate-400 border border-[rgba(0,229,255,0.15)] px-2 py-0.5 rounded">Python / FastAPI</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Prompt memory optimizer middleware reducing token overhead by ~74% via vector decay scoring.
                  </p>
                </div>
                <a
                  href="https://github.com/NaniToka/TokenFlow-AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#00E5FF] hover:text-[#33EEFF] pt-2 border-t border-[rgba(0,229,255,0.15)] focus-visible:outline-[#00E5FF]"
                >
                  <Github className="w-3.5 h-3.5" /> View Repository
                </a>
              </div>
            </TiltCard>

            <TiltCard maxTilt={2.5} className="h-full rounded-xl">
              <div className="glass-card card-hover rounded-xl p-5 flex flex-col justify-between space-y-3 h-full">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-mono font-bold text-slate-100 text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00E5FF]" /> BiasGuard-AI
                    </h4>
                    <span className="font-mono text-[10px] text-slate-400 border border-[rgba(0,229,255,0.15)] px-2 py-0.5 rounded">Python / Cloud Run</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Forensic ML bias auditing platform streaming decision logs on Cloud Run & Vertex AI for UN SDG fairness metrics.
                  </p>
                </div>
                <a
                  href="https://github.com/NaniToka/unbiased-ai-decision"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#00E5FF] hover:text-[#33EEFF] pt-2 border-t border-[rgba(0,229,255,0.15)] focus-visible:outline-[#00E5FF]"
                >
                  <Github className="w-3.5 h-3.5" /> View Repository
                </a>
              </div>
            </TiltCard>

            <TiltCard maxTilt={2.5} className="h-full rounded-xl">
              <div className="glass-card card-hover rounded-xl p-5 flex flex-col justify-between space-y-3 h-full">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-mono font-bold text-slate-100 text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" /> CivicPulse-AI
                    </h4>
                    <span className="font-mono text-[10px] text-slate-400 border border-[rgba(0,229,255,0.15)] px-2 py-0.5 rounded">TypeScript / React</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Multilingual civic decision intelligence layer converting citizen feedback into evidence-backed priority metrics.
                  </p>
                </div>
                <a
                  href="https://github.com/NaniToka/civicpulse-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#00E5FF] hover:text-[#33EEFF] pt-2 border-t border-[rgba(0,229,255,0.15)] focus-visible:outline-[#00E5FF]"
                >
                  <Github className="w-3.5 h-3.5" /> View Repository
                </a>
              </div>
            </TiltCard>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
