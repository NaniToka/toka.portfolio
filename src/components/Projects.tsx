import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, FileCode } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="font-mono text-xs text-indigo-400 font-semibold uppercase tracking-wider block mb-1">
            03. Production Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-2xl">
            Real production systems built with AI-native workflows, containerized architectures, and verified benchmarks.
          </p>
        </div>

        {/* Projects Stack */}
        <div className="space-y-8">
          {PROJECTS.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-xl p-6 sm:p-8 relative overflow-hidden group hover:border-indigo-500/40 transition-all"
            >
              {/* Highlight bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 opacity-80" />

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                
                {/* Main Content Area */}
                <div className="space-y-4 flex-1">
                  
                  {/* Title & Subtitle */}
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

                  {/* Problem & Solution framing */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    <div className="p-3.5 rounded-lg bg-red-950/20 border border-red-900/30 text-xs">
                      <div className="font-mono font-semibold text-red-400 uppercase mb-1">Problem</div>
                      <p className="text-red-200/90 leading-relaxed">{project.problem}</p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-indigo-950/20 border border-indigo-900/30 text-xs">
                      <div className="font-mono font-semibold text-indigo-400 uppercase mb-1">Solution</div>
                      <p className="text-indigo-200/90 leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Actions & Links Column */}
                <div className="flex flex-wrap lg:flex-col gap-2.5 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-800">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-semibold transition-colors min-h-[40px]"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Application
                    </a>
                  )}

                  {project.docsUrl && (
                    <a
                      href={project.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-mono text-xs font-medium transition-colors min-h-[40px]"
                    >
                      <FileCode className="w-4 h-4 text-indigo-400" /> Swagger Docs
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-mono text-xs font-medium transition-colors min-h-[40px]"
                  >
                    <Github className="w-4 h-4" /> GitHub Source
                  </a>
                </div>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
