import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, FileCode, Linkedin } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';

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
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="glass-card card-hover rounded-xl p-6 sm:p-8 relative overflow-hidden group"
    >
      {/* Top Accent Indicator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-indigo-400 to-transparent" />

      <div className="flex flex-col lg:flex-row gap-6 lg:items-start justify-between">
        
        {/* Main Content & Tabs Column */}
        <div className="space-y-4 flex-1">
          
          {/* Title, Subtitle & Badges */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold uppercase tracking-wide bg-indigo-950/80 text-indigo-400 border border-indigo-800/40">
                {project.subtitle}
              </span>
              {project.metrics && (
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/40">
                  {project.metrics}
                </span>
              )}
            </div>
            <h3 className="text-2xl font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
              {project.title}
            </h3>
          </div>

          {/* Interactive Tab List */}
          <div 
            role="tablist" 
            aria-label={`${project.title} case study details`}
            className="flex items-center gap-1.5 border-b border-slate-800/80 pb-1"
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
                      ? 'text-indigo-400 border-indigo-500 bg-indigo-950/30'
                      : 'text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-900/50'
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
                  className="p-4 rounded-lg bg-indigo-950/20 border border-indigo-900/30 text-xs"
                >
                  <div className="font-mono font-semibold text-indigo-400 uppercase mb-1">Architectural Solution</div>
                  <p className="text-indigo-200/90 leading-relaxed text-xs sm:text-sm">{project.solution}</p>
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
                  className="p-4 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs space-y-3"
                >
                  <div className="font-mono font-semibold text-slate-300 uppercase">Technologies & Architectural Choice</div>
                  {project.stackRationale && (
                    <p className="text-slate-300 text-xs leading-relaxed italic border-l-2 border-indigo-500 pl-3 py-0.5">
                      {project.stackRationale}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950 text-indigo-300 border border-slate-800"
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
        <div className="flex flex-wrap lg:flex-col gap-2.5 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-800">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-hover inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-semibold min-h-[44px]"
            >
              <ExternalLink className="w-4 h-4" /> Live Application
            </a>
          )}

          {project.docsUrl && (
            <a
              href={project.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hover inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-mono text-xs font-medium min-h-[44px]"
            >
              <FileCode className="w-4 h-4 text-indigo-400" /> Swagger Docs
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hover inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-mono text-xs font-medium min-h-[44px]"
          >
            <Github className="w-4 h-4" /> GitHub Source
          </a>

          {project.linkedinUrl && (
            <a
              href={project.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hover inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#0a66c2]/10 hover:bg-[#0a66c2]/20 text-[#70b5f9] border border-[#0a66c2]/30 font-mono text-xs font-medium min-h-[44px] transition-all"
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
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="font-mono text-xs text-indigo-400 font-semibold uppercase tracking-wider block mb-1">
            03. Production Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Flagship Case Studies
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-2xl">
            Production systems built with AI-native workflows, cloud-native containerized architectures, and verified benchmarks.
          </p>
        </div>

        {/* Flagship Projects Stack */}
        <div className="space-y-8">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>

        {/* Collapsed More Projects Section (Task 5) */}
        {otherProjects.length > 0 && (
          <div className="mt-12 pt-8 border-t border-slate-800/80">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-100">Additional Engineering Projects</h3>
                <p className="text-xs text-slate-400 font-mono">Specialized analytics pipelines, governance portals, and hackathon prototypes</p>
              </div>
              <button
                onClick={() => setShowMore(!showMore)}
                className="btn-hover inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-800 text-indigo-400 font-mono text-xs font-semibold"
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
                  <div key={proj.id} className="glass-card rounded-lg p-4 border border-slate-800/80 flex flex-col justify-between space-y-3">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-mono font-bold text-slate-100 text-sm">{proj.title}</h4>
                        <span className="font-mono text-[10px] text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/40">
                          {proj.subtitle}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{proj.description}</p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-xs font-mono">
                      <div className="flex flex-wrap gap-1">
                        {proj.stack.slice(0, 3).map((t) => (
                          <span key={t} className="text-[10px] text-slate-400 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">
                            {t}
                          </span>
                        ))}
                      </div>
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-semibold"
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
