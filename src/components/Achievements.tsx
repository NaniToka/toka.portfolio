import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';
import { staggerContainer, fadeUp, VIEWPORT_ONCE } from '../lib/animation';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const Achievements: React.FC = () => {
  const reduced = useReducedMotion();
  return (
    <section id="achievements" className="py-12 sm:py-20 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <SectionHeading
            label="06. Competitive Milestones"
            title="Achievements & Hackathons"
            subtitle="Real hackathon participation, competitive challenges, and Google for Developers technical bootcamps."
          />
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer(0.08)}
        >
          {ACHIEVEMENTS.map((ach, idx) => (
            <motion.div
              key={ach.id}
              variants={reduced
                ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
                : fadeUp()
              }
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card rounded-xl p-6 hover:border-[rgba(0,229,255,0.4)] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#00E5FF] font-semibold uppercase">
                    {ach.event}
                  </span>
                  <Trophy className="w-5 h-5 text-[#00E5FF] shrink-0" />
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
        </motion.div>

      </div>
    </section>
  );
};
