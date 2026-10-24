import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, FileCode, Linkedin } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { SectionHeading } from './SectionHeading';
import { EASE_OUT, VIEWPORT_ONCE } from '../lib/animation';

type TabType = 'problem' | 'solution' | 'tech';

interface ProjectCardProps {
  project: Project;
  idx: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, idx }) => {
  const [activeTab, setActiveTab] = useState<TabType>('problem');

  const tabs: { id: TabType; label: string }[] = [
    { id: 'problem', label: 'Problem' },
    { id: 'solution', label: 'Solution' },
    { id: 'tech', label: 'Tech Stack' },
  ];

  const handleKeyDown = (e: React.KeyboardEvent, currentId: TabType) => {
    const currentIndex = tabs.findIndex(t => t.id === currentId);
    if (e.key === 'ArrowRight') {
      const nextIndex = (currentIndex + 1) % tabs.length;
      setActiveTab(tabs[nextIndex].id);
    } else if (e.key === 'ArrowLeft') {
      const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      setActiveTab(tabs[prevIndex].id);
    }
  };

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 0.5, ease: EASE_OUT, delay: idx * 0.08 }}
      className="glass-card card-hover rounded-xl p-6 sm:p-8 relative overflow-hidden group"
    >
      {/* Top Accent Indicator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00E5FF] via-[#33EEFF] to-transparent" />

      <div className="flex flex-col lg:flex-row gap-6 lg:items-start justify-between">
        
        {/* Main Content & Tabs Column */}
        <div className="space-y-4 flex-1">
          
          {/* Title, Subtitle & Badges */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold uppercase tracking-wide bg-[rgba(59,10,107,0.8)] text-[#00E5FF] border border-[rgba(0,229,255,0.2)]">
                {project.subtitle}
              </span>
              {project.metrics && (
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/40">
                  {project.metrics}
                </span>
              )}
            </div>
            <h3 className="text-2xl font-bold text-slate-100 group-hover:text-[#00E5FF] transition-colors">
              {project.title}
            </h3>
          </div>

          {/* Interactive Tab List */}
          <div 
            role="tablist" 
            aria-label={`${project.title} case study details`}
            className="flex items-center gap-1.5 border-b border-[rgba(0,229,255,0.15)] pb-1"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  id={`tab-${project.id}-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${project.id}-${tab.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveTab(tab.id)}
                  onKeyDown={(e) => handleKeyDown(e, tab.id)}
                  className={`px-3.5 py-1.5 text-xs font-mono font-semibold rounded-t-md border-b-2 transition-all cursor-pointer min-h-[38px] ${
                    isActive
                      ? 'text-[#00E5FF] border-[#00E5FF] bg-[rgba(0,229,255,0.08)]'
                      : 'text-slate-400 border-transparent hover:text-slate-200 hover:bg-[rgba(59,10,107,0.3)]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Animated Tab Panel Content */}
          <div className="min-h-[100px] pt-1">
            <AnimatePresence mode="wait">
              {activeTab === 'problem' && (
                <motion.div
                  key="problem"
                  id={`panel-${project.id}-problem`}
                  role="tabpanel"
                  aria-labelledby={`tab-${project.id}-problem`}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 rounded-lg bg-red-950/20 border border-red-900/30 text-xs"
                >
                  <div className="font-mono font-semibold text-red-400 uppercase mb-1">Problem Statement</div>
                  <p className="text-red-200/90 leading-relaxed text-xs sm:text-sm">{project.problem}</p>
                </motion.div>
              )}

              {activeTab === 'solution' && (
                <motion.div
                  key="solution"
                  id={`panel-${project.id}-solution`}
                  role="tabpanel"
                  aria-labelledby={`tab-${project.id}-solution`}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 rounded-lg bg-[rgba(0,229,255,0.05)] border border-[rgba(0,229,255,0.15)] text-xs"
                >
                  <div className="font-mono font-semibold text-[#00E5FF] uppercase mb-1">Architectural Solution</div>
                  <p className="text-[rgba(255,255,255,0.85)] leading-relaxed text-xs sm:text-sm">{project.solution}</p>
                </motion.div>
              )}

              {activeTab === 'tech' && (
                <motion.div
                  key="tech"
                  id={`panel-${project.id}-tech`}
                  role="tabpanel"
                  aria-labelledby={`tab-${project.id}-tech`}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 rounded-lg bg-[rgba(59,10,107,0.4)] border border-[rgba(0,229,255,0.15)] text-xs space-y-3"
                >
                  <div className="font-mono font-semibold text-slate-300 uppercase">Technologies & Architectural Choice</div>
                  {project.stackRationale && (
                    <p className="text-slate-300 text-xs leading-relaxed italic border-l-2 border-[#00E5FF] pl-3 py-0.5">
                      {project.stackRationale}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#050505] text-[#00E5FF] border border-[rgba(0,229,255,0.2)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Actions & Links Column */}
        <div className="flex flex-wrap lg:flex-col gap-2 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-[rgba(0,229,255,0.15)]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-hover inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#00E5FF] hover:bg-[#33EEFF] text-[#050505] font-mono text-xs font-semibold min-h-[44px] flex-1 lg:flex-none"
            >
              <ExternalLink className="w-4 h-4" /> Live Application
            </a>
          )}

          {project.docsUrl && (
            <a
              href={project.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hover inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-mono text-xs font-medium min-h-[44px] flex-1 lg:flex-none"
            >
              <FileCode className="w-4 h-4 text-[#00E5FF]" /> Swagger Docs
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hover inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-mono text-xs font-medium min-h-[44px] flex-1 lg:flex-none"
          >
            <Github className="w-4 h-4" /> GitHub Source
          </a>

          {project.linkedinUrl && (
            <a
              href={project.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hover inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#0a66c2]/10 hover:bg-[#0a66c2]/20 text-[#70b5f9] border border-[#0a66c2]/30 font-mono text-xs font-medium min-h-[44px] flex-1 lg:flex-none transition-all"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn Post
            </a>
          )}
        </div>

      </div>
    </motion.article>
  );
};

export const Projects: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const otherProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <SectionHeading
            label="03. Production Case Studies"
            title="Flagship Case Studies"
            subtitle="Production systems built with AI-native workflows, cloud-native containerized architectures, and verified benchmarks."
          />
        </div>

        {/* Flagship Projects Stack */}
        <div className="space-y-8">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>

        {/* Collapsed More Projects Section (Task 5) */}
        {otherProjects.length > 0 && (
          <div className="mt-12 pt-8 border-t border-[rgba(0,229,255,0.15)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-100">Additional Engineering Projects</h3>
                <p className="text-xs text-slate-400 font-mono">Specialized analytics pipelines, governance portals, and hackathon prototypes</p>
              </div>
              <button
                onClick={() => setShowMore(!showMore)}
                className="btn-hover self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[#00E5FF] font-mono text-xs font-semibold min-h-[44px]"
              >
                {showMore ? 'Hide Additional Projects' : `Show All Projects (${otherProjects.length})`}
              </button>
            </div>

            {showMore && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2"
              >
                {otherProjects.map((proj) => (
                  <div key={proj.id} className="glass-card rounded-lg p-4 border border-[rgba(0,229,255,0.15)] flex flex-col justify-between space-y-3">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-mono font-bold text-slate-100 text-sm">{proj.title}</h4>
                        <span className="font-mono text-[10px] text-[#00E5FF] bg-[rgba(59,10,107,0.6)] px-2 py-0.5 rounded border border-[rgba(0,229,255,0.2)]">
                          {proj.subtitle}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{proj.description}</p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[rgba(0,229,255,0.15)] text-xs font-mono">
                      <div className="flex flex-wrap gap-1">
                        {proj.stack.slice(0, 3).map((t) => (
                          <span key={t} className="text-[10px] text-slate-400 bg-[#050505] px-1.5 py-0.5 rounded border border-[rgba(0,229,255,0.15)]">
                            {t}
                          </span>
                        ))}
                      </div>
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#00E5FF] hover:text-[#33EEFF] font-semibold"
                      >
                        <Github className="w-3.5 h-3.5" /> Source
                      </a>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
