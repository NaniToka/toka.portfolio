import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, FileText, Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section
      id="hero"
      /* min-h-[100dvh] accounts for mobile browser chrome; fallback for older browsers */
      className="hero-glow min-h-screen min-h-[100dvh] pt-20 sm:pt-24 pb-12 sm:pb-16 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-400 font-mono text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping shrink-0" />
                <span>Available for SWE / Cloud / GenAI Roles</span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs">
                Google Student Ambassador
              </span>
            </div>

            {/* Photo + Name — stacked on xs, side-by-side from sm */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-8">
              <div className="relative shrink-0">
                <picture>
                  <source srcSet="/toka-profile.webp" type="image/webp" />
                  <img
                    src="/toka-profile.jpg"
                    alt="Toka Nani, Cloud & GenAI Engineer"
                    width={288}
                    height={288}
                    loading="eager"
                    className="w-28 h-28 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full object-cover border-2 border-blue-500/40 ring-4 sm:ring-8 ring-blue-500/10 shadow-xl shadow-blue-950/60"
                  />
                </picture>
                <div className="absolute bottom-1.5 right-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500 border-4 border-[#0F1115]" title="Online / Active" />
              </div>

              <div className="space-y-2 text-center sm:text-left min-w-0">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-blue-400 font-mono text-xs sm:text-sm lg:text-base font-semibold min-w-0">
                  <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 shrink-0" />
                  {/* Long title: allow wrapping, never overflow */}
                  <span className="break-words leading-snug">{PERSONAL_INFO.title}</span>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="space-y-2 sm:space-y-3">
              <p className="text-sm sm:text-base lg:text-lg font-medium text-slate-200 leading-relaxed">
                {PERSONAL_INFO.pitch}
              </p>
              <p className="text-xs sm:text-sm font-mono text-blue-300/90 break-words">
                {PERSONAL_INFO.footerLine}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-2 sm:gap-3">
              <a
                href="#projects"
                className="btn-primary-hover inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold shadow-md shadow-blue-900/30 min-h-[44px]"
              >
                Explore Case Studies
              </a>

              <button
                onClick={onOpenResume}
                className="btn-hover inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-mono text-xs font-medium min-h-[44px]"
              >
                <FileText className="w-4 h-4 text-blue-400" /> View Resume
              </button>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Toka_Nani_Resume.pdf"
                className="btn-hover inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-mono text-xs font-medium min-h-[44px]"
              >
                <Download className="w-4 h-4 text-blue-400" /> Download PDF
              </a>

              {/* Social icons */}
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="btn-hover p-3 rounded-md bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-100 border border-slate-800 min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="btn-hover p-3 rounded-md bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-100 border border-slate-800 min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="Email Toka Nani"
                  className="btn-hover p-3 rounded-md bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-100 border border-slate-800 min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Metric Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-3 sm:space-y-4"
          >
            <div className="glass-card card-hover rounded-xl p-4 sm:p-5 border-l-4 border-l-blue-500">
              <div className="flex items-center justify-between text-xs font-mono text-blue-400 mb-1">
                <span>FLAGSHIP HIGHLIGHT</span>
                <span className="text-emerald-400 font-semibold">BENCHMARKED</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-slate-100 mb-1">TokenFlow AI</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                FastAPI & React middleware utilizing Gemini <code className="text-blue-300 font-mono break-all">text-embedding-004</code> and recency-decay scoring to prune prompt tokens by ~74%.
              </p>
            </div>

            <div className="glass-card card-hover rounded-xl p-4 sm:p-5 border-l-4 border-l-blue-500">
              <div className="flex items-center justify-between text-xs font-mono text-blue-400 mb-1">
                <span>GOOGLE SOLUTION CHALLENGE</span>
                <span className="text-blue-300 font-semibold">CLOUD RUN</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-slate-100 mb-1">BiasGuard AI</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Forensic ML bias auditing platform on Cloud Run & Vertex AI streaming decision logs for UN SDG fairness evaluation.
              </p>
            </div>

            <div className="glass-card card-hover rounded-xl p-4 sm:p-5 border-l-4 border-l-blue-500">
              <div className="flex items-center justify-between text-xs font-mono text-blue-400 mb-1">
                <span>IMPACT METRIC</span>
                <span className="text-emerald-400 font-semibold">VERIFIED</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-slate-100 mb-1">13+ Hackathons</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                PromptWars Virtual, Google Solution Challenge 2026, Meta PyTorch Hackathon, and Anvil @ Ascent 2026 finalist.
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
        <a href="#about" aria-label="Scroll to About section" className="flex flex-col items-center">
          <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-1">Scroll</span>
          <ArrowDown className="w-4 h-4 text-blue-400 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
