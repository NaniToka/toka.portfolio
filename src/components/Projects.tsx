import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, FileCode, Github, Linkedin, Minus, Plus } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { SectionHeading } from './SectionHeading';
import { VIEWPORT_ONCE } from '../lib/animation';

type TabType = 'problem' | 'solution' | 'architecture';

const tabs: { id: TabType; label: string }[] = [
  { id: 'problem', label: 'The problem' },
  { id: 'solution', label: 'The solution' },
  { id: 'architecture', label: 'Architecture' },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [activeTab, setActiveTab] = useState<TabType>('solution');
  const content = activeTab === 'problem' ? project.problem : activeTab === 'solution' ? project.solution : project.stackRationale;

  const handleKeyDown = (event: React.KeyboardEvent, tabId: TabType) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    const current = tabs.findIndex(tab => tab.id === tabId);
    const next = event.key === 'ArrowRight' ? (current + 1) % tabs.length : (current - 1 + tabs.length) % tabs.length;
    setActiveTab(tabs[next].id);
    document.getElementById(`tab-${project.id}-${tabs[next].id}`)?.focus();
  };

  return (
    <motion.article
      className="border-t border-[var(--line)] py-10 last:border-b sm:py-14"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 0.55, delay: Math.min(index, 3) * 0.05 }}
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="flex items-center justify-between gap-4">
            <span className="font-serif text-2xl italic text-[var(--accent)]">/{String(index + 1).padStart(2, '0')}</span>
            <span className="text-right text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">{project.featured ? 'Featured case study' : 'Engineering project'}</span>
          </div>
          <p className="eyebrow mt-8 leading-relaxed">{project.subtitle}</p>
          <h3 className="mt-3 font-serif text-[clamp(2.4rem,4vw,3.8rem)] font-medium leading-[0.98] tracking-[-0.035em]">{project.title}</h3>
          <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{project.description}</p>
          {project.metrics && (
            <div className="mt-6 border-l-2 border-[var(--accent)] bg-[var(--paper-subtle)] px-4 py-3">
              <span className="block text-[0.58rem] font-bold uppercase tracking-[0.15em] text-[var(--accent)]">Measured outcome</span>
              <p className="mt-1 text-xs font-semibold leading-6 text-[var(--ink-soft)]">{project.metrics}</p>
            </div>
          )}
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-link">Live application <ArrowUpRight size={14} /></a>}
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-link"><Github size={14} /> Source</a>
            {project.docsUrl && <a href={project.docsUrl} target="_blank" rel="noopener noreferrer" className="text-link"><FileCode size={14} /> API docs</a>}
            {project.linkedinUrl && <a href={project.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-link"><Linkedin size={14} /> Story</a>}
          </div>
        </div>

        <div className="lg:col-span-8 lg:pl-8">
          <div className="flex overflow-x-auto border-b border-[var(--line)] scrollbar-hide" role="tablist" aria-label={`${project.title} case study`}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                id={`tab-${project.id}-${tab.id}`}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${project.id}`}
                tabIndex={activeTab === tab.id ? 0 : -1}
                onClick={() => setActiveTab(tab.id)}
                onKeyDown={event => handleKeyDown(event, tab.id)}
                className={`relative min-h-12 shrink-0 px-4 text-left text-[0.68rem] font-bold uppercase tracking-[0.09em] transition-colors first:pl-0 ${activeTab === tab.id ? 'text-[var(--accent)]' : 'text-[var(--muted)] hover:text-[var(--ink)]'}`}
              >
                {tab.label}
                {activeTab === tab.id && <motion.span layoutId={`project-tab-${project.id}`} className="absolute inset-x-3 bottom-0 h-[2px] bg-[var(--accent)] first:left-0" />}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              id={`panel-${project.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${project.id}-${activeTab}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="min-h-[170px] py-7"
            >
              <p className="max-w-3xl font-serif text-[clamp(1.35rem,2.1vw,1.8rem)] leading-[1.35] text-[var(--ink-soft)]">{content || project.description}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex flex-wrap gap-2 border-t border-[var(--line)] pt-5">
            {project.stack.map(technology => <span key={technology} className="tag">{technology}</span>)}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const featured = PROJECTS.filter(project => project.featured);
  const additional = PROJECTS.filter(project => !project.featured);

  return (
    <section id="projects" className="section section--tinted">
      <div className="shell">
        <SectionHeading label="01 / Selected work" title="Case studies in applied intelligence." subtitle="A closer look at the decisions behind each build—the problem, the engineering response, the architecture, and the measurable result." />
        <div>
          {featured.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </div>
        <div className="flex flex-col items-start justify-between gap-5 py-8 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-serif text-3xl font-medium">The wider project archive</h3>
            <p className="mt-1 text-sm text-[var(--muted)]">Analytics, governance, sustainability, and multi-agent systems.</p>
          </div>
          <button className="button button--outline" onClick={() => setShowAll(current => !current)} aria-expanded={showAll}>
            {showAll ? <Minus size={15} /> : <Plus size={15} />}{showAll ? 'Show featured only' : `View all ${PROJECTS.length} projects`}
          </button>
        </div>
        <AnimatePresence initial={false}>
          {showAll && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
              {additional.map((project, index) => <ProjectCard key={project.id} project={project} index={index + featured.length} />)}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
