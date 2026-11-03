import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface HeroProps {
  onOpenResume: () => void;
}

const stats = [
  { value: '~74%', label: 'Prompt token reduction', detail: 'TokenFlow AI benchmark' },
  { value: '02', label: 'Active cloud certifications', detail: 'AWS & Microsoft Azure' },
  { value: '13+', label: 'Hackathons & competitions', detail: 'Building through competition' },
  { value: String(PROJECTS.length).padStart(2, '0'), label: 'Selected engineering projects', detail: 'AI · Cloud · Data' },
];

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const reduced = useReducedMotion();
  const initial = reduced ? { opacity: 0 } : { opacity: 0, y: 28 };

  return (
    <section id="hero" className="hero">
      <div className="shell">
        <div className="hero-grid">
          <motion.div initial={initial} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.13em] text-[var(--ink-soft)]">
              <span className="status-dot" aria-hidden="true" />
              Open to SWE · Cloud · GenAI opportunities
            </div>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">Toka Nani / Portfolio 2026</p>
            <h1 className="hero-title">
              <span className="block">Intelligent systems.</span>
              <span className="block"><em>Real-world impact.</em></span>
            </h1>
            <p className="hero-copy lede">{PERSONAL_INFO.pitch}</p>
            <div className="hero-actions">
              <a href="#projects" className="button button--primary">Explore selected work <ArrowDown size={16} /></a>
              <button onClick={onOpenResume} className="button button--outline"><FileText size={16} /> View résumé</button>
            </div>
            <div className="hero-socials">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-link">GitHub <ArrowUpRight size={13} /></a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">LinkedIn <ArrowUpRight size={13} /></a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-link">Email <ArrowUpRight size={13} /></a>
            </div>
          </motion.div>

          <motion.figure
            className="portrait-wrap"
            initial={reduced ? { opacity: 0 } : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <picture>
              <source srcSet="/toka-profile.webp" type="image/webp" />
              <img src="/toka-profile.jpg" alt="Portrait of Toka Nani in a navy suit" width={512} height={640} loading="eager" className="portrait-image" />
            </picture>
            <figcaption className="portrait-caption">
              <span className="block text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[#d8b18b]">Leadership · 2026</span>
              <span className="mt-2 block font-serif text-[1.65rem] font-medium leading-[1.05]">Google Gemini Student Ambassador</span>
              <span className="mt-2 block text-[0.67rem] text-[var(--on-forest-muted)]">Representing Gemini through campus workshops and developer sessions.</span>
            </figcaption>
          </motion.figure>
        </div>

        <motion.div className="hero-proof" initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.35 }} aria-label="Career highlights">
          {stats.map(stat => (
            <div key={stat.label} className="hero-stat">
              <div className="hero-stat__value">{stat.value}</div>
              <div className="hero-stat__label">{stat.label}</div>
              <div className="hero-stat__detail">{stat.detail}</div>
            </div>
          ))}
        </motion.div>

        <div className="flex items-center justify-between gap-4 py-6 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
          <span>Vijayawada, India · IST (UTC+5:30)</span>
          <a href="#projects" className="hidden items-center gap-2 transition-colors hover:text-[var(--accent)] sm:flex">Scroll to discover <ArrowDown size={13} /></a>
          <span>Remote & relocation worldwide</span>
        </div>
      </div>
    </section>
  );
};
