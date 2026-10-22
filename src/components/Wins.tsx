import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ExternalLink, Linkedin, ArrowRight } from 'lucide-react';
import { WINS } from '../data/portfolioData';

export const Wins: React.FC = () => {
  return (
    <section id="wins" className="py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-[rgba(0,229,255,0.15)] flex-1" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center gap-3">
            <Trophy className="w-8 h-8 text-emerald-400" />
            Wins & Comebacks
          </h2>
          <div className="h-px bg-[rgba(0,229,255,0.15)] flex-1" />
        </div>

        <div className="grid grid-cols-1 gap-8">
          {WINS.map((win, idx) => (
            <motion.div
              key={win.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#050505] border border-[rgba(0,229,255,0.15)] rounded-xl p-6 md:p-8 hover:border-emerald-500/30 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle green glow top-left */}
              <div className="absolute top-0 left-0 w-48 h-48 bg-emerald-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

              <div className="relative">
                {/* Title row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-5">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/40 text-emerald-400 font-mono text-[11px] font-semibold mb-3">
                      <Trophy className="w-3 h-3" /> Win
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors mb-1">
                      {win.title}
                    </h3>
                    <div className="font-mono text-sm text-emerald-500">{win.date}</div>
                  </div>
                </div>

                {/* Context — what came before */}
                <div className="mb-5 pl-4 border-l-2 border-[rgba(0,229,255,0.25)]">
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">The context</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{win.context}</p>
                </div>

                {/* The win */}
                <p className="text-slate-300 leading-relaxed mb-6 whitespace-pre-line text-sm md:text-base">
                  {win.description}
                </p>

                {/* Takeaways */}
                <div className="bg-[#0d1f17] rounded-lg p-5 border border-emerald-900/40 mb-6">
                  <h4 className="text-sm font-semibold text-emerald-300 mb-4 uppercase tracking-wider font-mono">
                    What it proved:
                  </h4>
                  <ul className="space-y-3">
                    {win.takeaways.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <ArrowRight className="w-3.5 h-3.5 text-emerald-400 mt-1 shrink-0" />
                        <span className="text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Proof links */}
                <div className="flex flex-wrap gap-3">
                  {win.proofUrl && (
                    <a
                      href={win.proofUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-mono font-medium rounded-md text-slate-300 bg-[rgba(59,10,107,0.5)] border border-[rgba(0,229,255,0.15)] hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Verify Credential
                    </a>
                  )}
                  {win.linkedinUrl && (
                    <a
                      href={win.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-mono font-medium rounded-md text-[#4d9fda] bg-[#0A66C2]/10 border border-[#0A66C2]/30 hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/50 transition-all"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn Post
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
