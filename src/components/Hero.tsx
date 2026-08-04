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
      className="hero-glow min-h-screen pt-28 pb-16 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Info & Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status & Credential Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/40 text-indigo-400 font-mono text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                <span>Available for SWE / DevOps Internships</span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs">
                Google Student Ambassador
              </span>
            </div>

            {/* Name & Headline with Enlarged Profile Avatar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              <div className="relative shrink-0">
                <picture>
                  <source srcSet="/toka-profile.webp" type="image/webp" />
                  <img
                    src="/toka-profile.jpg"
                    alt="Toka Nani, Software Engineer"
                    width={288}
                    height={288}
                    loading="eager"
                    className="w-36 h-36 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full object-cover border-2 border-indigo-500/40 ring-8 ring-indigo-500/10 shadow-2xl shadow-indigo-950/60 transition-transform duration-300 hover:scale-[1.02]"
                  />
                </picture>
                <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-indigo-500 border-4 border-[#0a0a0f]" title="Online / Active" />
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-none">
                  {PERSONAL_INFO.name}
                </h1>
                <div className="flex items-center gap-2 text-indigo-400 font-mono text-base sm:text-lg font-semibold">
                  <Terminal className="w-5 h-5 text-indigo-500" />
                  <span>{PERSONAL_INFO.title}</span>
                </div>
              </div>
            </div>

            {/* Value Proposition & Education */}
            <div className="space-y-3">
              <p className="text-lg sm:text-xl font-medium text-slate-200 leading-snug">
                "{PERSONAL_INFO.valueProp}"
              </p>
              <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
                {PERSONAL_INFO.institution} • {PERSONAL_INFO.education}
              </p>
            </div>

            {/* Action Buttons & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-semibold transition-all shadow-md shadow-indigo-900/30 min-h-[44px]"
              >
                Explore Case Studies
              </a>
              
              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-mono text-xs font-medium transition-all min-h-[44px]"
              >
                <FileText className="w-4 h-4 text-indigo-400" /> View Resume
              </button>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Toka_Nani_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-mono text-xs font-medium transition-all min-h-[44px]"
              >
                <Download className="w-4 h-4 text-indigo-400" /> Download PDF
              </a>

              <div className="flex items-center gap-2 ml-auto sm:ml-0 pt-2 sm:pt-0">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-md bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-100 border border-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-md bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-100 border border-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="Email Toka Nani"
                  className="p-3 rounded-md bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-100 border border-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Metric Highlight Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="glass-card rounded-xl p-5 border-l-4 border-l-indigo-500">
              <div className="flex items-center justify-between text-xs font-mono text-indigo-400 mb-1">
                <span>FLAGSHIP HIGHLIGHT</span>
                <span className="text-emerald-400 font-semibold">BENCHMARKED</span>
              </div>
              <div className="text-2xl font-bold text-slate-100 mb-1">TokenFlow AI</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                FastAPI & React middleware utilizing Gemini <code className="text-indigo-300 font-mono">text-embedding-004</code> and recency-decay scoring to prune prompt tokens by ~74%.
              </p>
            </div>

            <div className="glass-card rounded-xl p-5 border-l-4 border-l-indigo-500">
              <div className="flex items-center justify-between text-xs font-mono text-indigo-400 mb-1">
                <span>GOOGLE SOLUTION CHALLENGE</span>
                <span className="text-indigo-300 font-semibold">CLOUD RUN</span>
              </div>
              <div className="text-2xl font-bold text-slate-100 mb-1">BiasGuard AI</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Forensic ML bias auditing platform on Cloud Run & Vertex AI streaming decision logs for UN SDG fairness evaluation.
              </p>
            </div>

            <div className="glass-card rounded-xl p-5 border-l-4 border-l-indigo-500">
              <div className="flex items-center justify-between text-xs font-mono text-indigo-400 mb-1">
                <span>IMPACT METRIC</span>
                <span className="text-emerald-400 font-semibold">VERIFIED</span>
              </div>
              <div className="text-2xl font-bold text-slate-100 mb-1">13+ Hackathons</div>
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
          <ArrowDown className="w-4 h-4 text-indigo-400 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
