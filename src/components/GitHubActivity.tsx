import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Grid2X2, Play } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { SectionHeading } from './SectionHeading';
import { VIEWPORT_ONCE } from '../lib/animation';

const username = 'NaniToka';

export const GitHubActivity: React.FC = () => {
  const { theme } = useTheme();
  const [view, setView] = useState<'snake' | 'grid'>('grid');
  const [loaded, setLoaded] = useState(false);
  const snakeUrl = theme === 'light' ? '/github-snake.svg' : '/github-snake-dark.svg';
  const gridUrl = `https://ghchart.rshah.org/2f7b5b/${username}`;

  const changeView = (next: 'snake' | 'grid') => { setLoaded(false); setView(next); };

  return (
    <section id="github" className="section section--forest">
      <div className="shell">
        <SectionHeading label="07 / Open source" title="Building in public, one commit at a time." subtitle="Live GitHub contribution activity and the open-source record behind the projects, experiments, and continuous learning." />
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT_ONCE} transition={{ duration: 0.6 }} className="border border-white/15 bg-[#0b1d17] p-4 sm:p-7">
          <div className="flex flex-col justify-between gap-5 border-b border-white/15 pb-5 sm:flex-row sm:items-center">
            <div>
              <p className="flex items-center gap-2 text-sm font-bold text-[var(--on-forest)]"><Github size={17} /> github.com/{username}</p>
              <p className="mt-1 text-xs text-[var(--on-forest-muted)]">473 contributions · 2026</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => changeView('grid')} aria-pressed={view === 'grid'} className={`flex min-h-11 items-center gap-2 border px-4 text-[0.67rem] font-bold transition-colors ${view === 'grid' ? 'border-[#d8b18b] bg-[#d8b18b] text-[#102e26]' : 'border-white/20 text-[var(--on-forest-muted)] hover:text-white'}`}><Grid2X2 size={14} /> Contribution grid</button>
              <button onClick={() => changeView('snake')} aria-pressed={view === 'snake'} className={`flex min-h-11 items-center gap-2 border px-4 text-[0.67rem] font-bold transition-colors ${view === 'snake' ? 'border-[#d8b18b] bg-[#d8b18b] text-[#102e26]' : 'border-white/20 text-[var(--on-forest-muted)] hover:text-white'}`}><Play size={14} /> Snake</button>
            </div>
          </div>
          <div className="relative mt-6 flex min-h-[180px] items-center justify-center overflow-hidden bg-[#0b1d17]">
            {!loaded && <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#0b1d17] text-xs text-[var(--on-forest-muted)]">Loading contribution activity…</div>}
            <img
              key={view + theme}
              src={view === 'grid' ? gridUrl : snakeUrl}
              alt={view === 'grid' ? `GitHub contribution grid for ${username}` : `Animated GitHub contribution snake for ${username}`}
              className="mx-auto w-full max-w-4xl"
              loading="lazy"
              onLoad={() => setLoaded(true)}
              onError={() => { if (view === 'snake') changeView('grid'); else setLoaded(true); }}
            />
          </div>
          <div className="mt-6 flex flex-col justify-between gap-4 border-t border-white/15 pt-5 sm:flex-row sm:items-center">
            <p className="text-[0.65rem] text-[var(--on-forest-muted)]">{view === 'grid' ? 'Live contribution heatmap' : 'Generated from the public contribution graph'}</p>
            <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" className="text-link !text-[var(--on-forest)]">Explore the full GitHub profile <ArrowUpRight size={14} /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
