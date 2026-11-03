import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { SETBACKS } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';
import { VIEWPORT_ONCE } from '../lib/animation';

export const Setbacks: React.FC = () => (
  <section id="setbacks" className="section section--tinted">
    <div className="shell">
      <SectionHeading label="09 / Lessons" title="Progress includes the difficult chapters." subtitle="A transparent record of what did not go to plan, what it revealed, and the disciplined next steps that followed." />
      {SETBACKS.map((setback, index) => (
        <motion.article key={setback.id} className="grid gap-8 border-t border-[var(--line-strong)] pt-9 lg:grid-cols-12" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT_ONCE} transition={{ duration: 0.55, delay: index * 0.08 }}>
          <div className="lg:col-span-4">
            <span className="eyebrow">{setback.date}</span>
            <h3 className="mt-4 font-serif text-[clamp(2.2rem,3.8vw,3.5rem)] font-medium leading-[1.02]">{setback.title}</h3>
            {setback.proofUrl && <a href={setback.proofUrl} target="_blank" rel="noopener noreferrer" className="text-link mt-6">View result document <ArrowUpRight size={14} /></a>}
          </div>
          <div className="lg:col-span-8 lg:pl-10">
            <p className="whitespace-pre-line font-serif text-[clamp(1.35rem,2.2vw,1.8rem)] leading-[1.4] text-[var(--ink-soft)]">{setback.description}</p>
            <div className="mt-8 border-t border-[var(--line)] pt-6">
              <h4 className="eyebrow">The way forward</h4>
              <ul className="mt-5 grid gap-4 md:grid-cols-3">
                {setback.lessons.map(lesson => <li key={lesson} className="flex items-start gap-3 text-xs leading-6 text-[var(--muted)]"><Check size={15} className="mt-1 shrink-0 text-[var(--accent)]" />{lesson}</li>)}
              </ul>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);
