import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, ShieldCheck, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="font-mono text-xs text-indigo-400 font-semibold uppercase tracking-wider block mb-1">
            01. Background & Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 glass-card rounded-xl p-6 sm:p-8 space-y-5"
          >
            <div className="flex items-center gap-3 text-indigo-400 font-mono text-sm font-semibold pb-4 border-b border-slate-800">
              <Sparkles className="w-5 h-5" />
              <span>Google Student Ambassador • Gemini Program (2026)</span>
            </div>

            {PERSONAL_INFO.bio.map((paragraph, idx) => (
              <p key={idx} className="text-slate-300 text-base leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-800/80">
              <div className="flex items-start gap-3">
                <Code2 className="w-5 h-5 text-indigo-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-mono font-semibold text-slate-200 uppercase">AI-Native Tooling</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Antigravity, Codex, Kiro, Windsurf for rapid end-to-end delivery</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-mono font-semibold text-slate-200 uppercase">Production Standard</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Verified certificates, Swagger OpenAPI docs, containerized Cloud Run deployments</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 glass-card rounded-xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-mono text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-4">
                Internship Profile
              </h3>
              
              <dl className="space-y-4 text-xs font-mono">
                <div>
                  <dt className="text-slate-500 uppercase">Target Roles</dt>
                  <dd className="text-slate-200 font-semibold mt-0.5 text-sm">SWE / Backend / DevOps</dd>
                </div>
                <div>
                  <dt className="text-slate-500 uppercase">Location & Visa</dt>
                  <dd className="text-slate-200 font-semibold mt-0.5 text-sm flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-indigo-400" /> India-based (No visa needed)
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500 uppercase">Degree & Track</dt>
                  <dd className="text-slate-200 font-semibold mt-0.5 text-sm">B.Tech CSE (3rd Year, 2024–2028)</dd>
                </div>
              </dl>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-center">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-semibold transition-colors"
              >
                Contact Toka Nani
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
