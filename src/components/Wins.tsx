import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Linkedin, Trophy } from 'lucide-react';
import { WINS } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';
import { VIEWPORT_ONCE } from '../lib/animation';

export const Wins: React.FC = () => (
  <section id="wins" className="section">
    <div className="shell">
      <SectionHeading label="08 / The long view" title="Resilience, documented." subtitle="Not a highlight reel without context—the setbacks, the return, and what each comeback made possible." />
      <div className="grid gap-8 lg:grid-cols-2">
        {WINS.map((win, index) => (
          <motion.article key={win.id} className="panel flex flex-col p-6 sm:p-9" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT_ONCE} transition={{ duration: 0.55, delay: index * 0.08 }}>
            <div className="flex items-center justify-between text-[var(--accent)]"><Trophy size={23} strokeWidth={1.5} /><span className="eyebrow">{win.date}</span></div>
            <h3 className="mt-8 font-serif text-[clamp(2.1rem,3.5vw,3rem)] font-medium leading-[1.02]">{win.title}</h3>
            <blockquote className="mt-7 border-l-2 border-[var(--accent)] pl-5 font-serif text-xl italic leading-[1.4] text-[var(--ink-soft)]">{win.context}</blockquote>
            <p className="mt-6 whitespace-pre-line text-sm leading-7 text-[var(--muted)]">{win.description}</p>
            <div className="mt-7 bg-[var(--paper-subtle)] p-5">
              <h4 className="eyebrow">What it proved</h4>
              <ul className="mt-4 space-y-3">
                {win.takeaways.map(point => <li key={point} className="flex items-start gap-3 text-xs leading-6 text-[var(--ink-soft)]"><Check size={14} className="mt-1 shrink-0 text-[var(--accent)]" />{point}</li>)}
              </ul>
            </div>
            <div className="mt-auto flex flex-wrap gap-x-5 gap-y-3 pt-7">
              {win.proofUrl && <a href={win.proofUrl} target="_blank" rel="noopener noreferrer" className="text-link">Verify credential <ArrowUpRight size={14} /></a>}
              {win.linkedinUrl && <a href={win.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-link"><Linkedin size={14} /> Read the story</a>}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
