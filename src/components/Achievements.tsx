import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="font-mono text-xs text-indigo-400 font-semibold uppercase tracking-wider block mb-1">
            06. Competitive Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Achievements & Hackathons
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-2xl">
            Real hackathon participation, competitive challenges, and Google for Developers technical bootcamps.
          </p>
        </div>

        {/* Achievements Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card rounded-xl p-6 hover:border-indigo-500/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-indigo-400 font-semibold uppercase">
                    {ach.event}
                  </span>
                  <Trophy className="w-5 h-5 text-indigo-400 shrink-0" />
                </div>

                <h3 className="text-lg font-bold text-slate-100">
                  {ach.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
