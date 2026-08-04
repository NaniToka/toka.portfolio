import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, FileText, Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="hero" className="min-h-screen pt-28 pb-16 flex flex-col justify-center relative overflow-hidden">
      
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
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

            {/* Name & Headline with Profile Avatar */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <div className="relative shrink-0">
                <picture>
                  <source srcSet="/toka-profile.webp" type="image/webp" />
                  <img
                    src="/toka-profile.jpg"
                    alt="Toka Nani, Software Engineer"
                    width={110}
                    height={110}
                    loading="eager"
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-indigo-500/40 ring-4 ring-indigo-500/10 shadow-xl shadow-indigo-950/40 transition-transform duration-300 hover:scale-105"
                  />
                </picture>
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-indigo-500 border-2 border-[#07080D]" title="Online / Active" />
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-none mb-2">
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
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 font-mono text-xs font-medium transition-all min-h-[44px]"
              >
                <FileText className="w-4 h-4 text-indigo-400" /> View Resume
              </button>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Toka_Nani_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 font-mono text-xs font-medium transition-all min-h-[44px]"
              >
                <Download className="w-4 h-4" /> Download PDF
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2 ml-1">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-indigo-400 border border-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-indigo-400 border border-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-indigo-400 border border-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Real Metric Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="glass-card rounded-xl p-6 relative overflow-hidden transition-all">
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
              <div className="text-4xl font-extrabold font-mono text-slate-100 mb-1">
                ~74<span className="text-indigo-400">%</span>
              </div>
              <div className="text-sm font-semibold text-slate-200">LLM Prompt Token Reduction</div>
              <div className="text-xs font-mono text-slate-400 mt-1">TokenFlow AI • Semantic Vector Ranking</div>
            </div>

            <div className="glass-card rounded-xl p-6 relative overflow-hidden transition-all">
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
              <div className="text-4xl font-extrabold font-mono text-slate-100 mb-1">
                3<span className="text-indigo-400"></span>
              </div>
              <div className="text-sm font-semibold text-slate-200">Production Cloud Deployments</div>
              <div className="text-xs font-mono text-slate-400 mt-1">Google Cloud Run & Render CDN</div>
            </div>

            <div className="glass-card rounded-xl p-6 relative overflow-hidden transition-all">
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
              <div className="text-4xl font-extrabold font-mono text-slate-100 mb-1">
                13<span className="text-indigo-400">+</span>
              </div>
              <div className="text-sm font-semibold text-slate-200">Engineering Hackathons</div>
              <div className="text-xs font-mono text-slate-400 mt-1">Google Solution Challenge, PromptWars, PyTorch</div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a href="#about" className="text-slate-500 hover:text-indigo-400 transition-colors p-2" aria-label="Scroll to About section">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
