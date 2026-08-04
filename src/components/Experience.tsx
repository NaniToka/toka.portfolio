import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2, ExternalLink, Sparkles, Award, Trophy, Code2 } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';
import { ExperienceItem } from '../types/portfolio';

const getTypeIcon = (type: ExperienceItem['type']) => {
  switch (type) {
    case 'ambassadorship':
      return <Sparkles className="w-4 h-4 text-indigo-400" />;
    case 'virtual':
      return <Award className="w-4 h-4 text-indigo-400" />;
    case 'hackathon':
      return <Trophy className="w-4 h-4 text-amber-400" />;
    default:
      return <Code2 className="w-4 h-4 text-indigo-400" />;
  }
};

const getBadgeStyle = (type: ExperienceItem['type']) => {
  switch (type) {
    case 'ambassadorship':
      return 'bg-indigo-950/80 text-indigo-300 border-indigo-800/50';
    case 'virtual':
      return 'bg-blue-950/80 text-blue-300 border-blue-800/50';
    case 'hackathon':
      return 'bg-amber-950/80 text-amber-300 border-amber-800/50';
    default:
      return 'bg-slate-900 text-slate-300 border-slate-800';
  }
};

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      {/* Background Soft Glow Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[160px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-mono text-xs text-indigo-400 font-semibold uppercase tracking-wider block mb-1">
            02. Engineering Path & Simulations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Experience & Virtual Engineering Simulations
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-2xl">
            Chronological narrative covering ambassadorship, corporate job simulations, hackathon platforms, and engineering focus.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative space-y-10 before:absolute before:inset-0 before:left-3.5 sm:before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-gradient-to-b before:from-indigo-500/60 before:via-indigo-500/20 before:to-slate-800">
          {EXPERIENCE_ITEMS.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Center Dot */}
                <div className="absolute left-3.5 sm:left-1/2 -translate-x-1/2 top-2 w-8 h-8 rounded-full bg-[#07080D] border-2 border-indigo-500 flex items-center justify-center z-10 shadow-lg shadow-indigo-950/60">
                  {getTypeIcon(item.type)}
                </div>

                {/* Card Container */}
                <div className="w-full sm:w-[calc(50%-2.25rem)] pl-10 sm:pl-0">
                  <div className="glass-card rounded-xl p-6 hover:border-indigo-500/40 transition-all space-y-4 relative overflow-hidden group">
                    
                    {/* Top Badge & Duration */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold border uppercase tracking-wider ${getBadgeStyle(item.type)}`}>
                        {item.badgeLabel || item.organization}
                      </span>
                      <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {/* Title & Organization */}
                    <div>
                      <h3 className="text-lg font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                        {item.role}
                      </h3>
                      <div className="flex items-center justify-between gap-2 text-xs font-mono text-indigo-400 font-semibold mt-0.5">
                        <span>{item.organization}</span>
                        <span className="text-slate-500 font-normal flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" /> {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Summary Description */}
                    {item.description && (
                      <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/40 p-3 rounded-lg border border-slate-800/80">
                        {item.description}
                      </p>
                    )}

                    {/* Bullets */}
                    <ul className="space-y-2 text-xs text-slate-300">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Verification Link Button for Virtual Simulations & Hackathons */}
                    {item.verifyUrl && (
                      <div className="pt-3 border-t border-slate-800/80">
                        <a
                          href={item.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                          Verify Credential / Certificate <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
