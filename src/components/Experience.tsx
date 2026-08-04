import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="font-mono text-xs text-indigo-400 font-semibold uppercase tracking-wider block mb-1">
            02. Leadership & Engineering Path
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Experience & Roles
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-slate-800">
          {EXPERIENCE_ITEMS.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Center Dot */}
                <div className="absolute left-3.5 sm:left-1/2 -translate-x-1/2 top-1.5 w-7 h-7 rounded-full bg-[#07080D] border-2 border-indigo-500 flex items-center justify-center z-10 shadow-md shadow-indigo-950">
                  <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
                </div>

                {/* Card Container */}
                <div className="w-full sm:w-[calc(50%-2rem)] pl-10 sm:pl-0">
                  <div className="glass-card rounded-xl p-6 hover:border-indigo-500/40 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-xs font-semibold text-indigo-400 uppercase">
                        {item.organization}
                      </span>
                      <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-slate-100 mb-1">
                      {item.role}
                    </h3>

                    <div className="flex items-center gap-1 text-xs text-slate-400 font-mono mb-4">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.location}</span>
                    </div>

                    <ul className="space-y-2 text-xs text-slate-300">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
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
