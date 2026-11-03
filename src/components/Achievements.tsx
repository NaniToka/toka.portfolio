import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';
import { VIEWPORT_ONCE } from '../lib/animation';

export const Achievements: React.FC = () => (
  <section id="achievements" className="section">
    <div className="shell">
      <SectionHeading label="06 / Milestones" title="Tested in competitive rooms." subtitle="Hackathons and engineering challenges that turned ideas into working systems under real constraints." />
      <div className="grid gap-x-12 md:grid-cols-2">
        {ACHIEVEMENTS.map((achievement, index) => (
          <motion.article key={achievement.id} className="border-t border-[var(--line-strong)] py-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT_ONCE} transition={{ duration: 0.5, delay: index * 0.07 }}>
            <div className="flex items-center justify-between text-[var(--accent)]"><Trophy size={21} strokeWidth={1.5} /><span className="font-serif text-xl italic">/{String(index + 1).padStart(2, '0')}</span></div>
            <p className="eyebrow mt-8 leading-6">{achievement.event}</p>
            <h3 className="mt-3 font-serif text-[2rem] font-medium leading-[1.06]">{achievement.title}</h3>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{achievement.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
