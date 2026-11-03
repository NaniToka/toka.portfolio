import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => (
  <footer className="border-t border-white/10 bg-[var(--forest-deep)] py-10 text-[var(--on-forest-muted)]">
    <div className="shell">
      <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-8 md:flex-row md:items-end">
        <div>
          <a href="#hero" className="font-serif text-4xl font-medium text-[var(--on-forest)]">Toka Nani</a>
          <p className="mt-2 text-xs">Cloud & Generative AI Engineer · India / Worldwide</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-link !text-[var(--on-forest)]">GitHub <ArrowUpRight size={13} /></a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-link !text-[var(--on-forest)]">LinkedIn <ArrowUpRight size={13} /></a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-link !text-[var(--on-forest)]">Email <ArrowUpRight size={13} /></a>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-3 pt-6 text-[0.65rem] sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Toka Nani. Designed with intention. Built with React & TypeScript.</p>
        <a href="#hero" className="inline-flex items-center gap-2 font-bold text-[var(--on-forest)]">Back to top <ArrowUp size={13} /></a>
      </div>
    </div>
  </footer>
);
