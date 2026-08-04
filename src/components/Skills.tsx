import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Layout, Container, Code, Cpu } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Cloud: <Cloud className="w-5 h-5 text-indigo-400" />,
  Server: <Server className="w-5 h-5 text-indigo-400" />,
  Layout: <Layout className="w-5 h-5 text-indigo-400" />,
  Container: <Container className="w-5 h-5 text-indigo-400" />,
  Code: <Code className="w-5 h-5 text-indigo-400" />,
  Cpu: <Cpu className="w-5 h-5 text-indigo-400" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="font-mono text-xs text-indigo-400 font-semibold uppercase tracking-wider block mb-1">
            04. Engineering Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Technical Stack
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-2xl">
            Categorized skills across cloud infrastructure, AI models, backend frameworks, and computer science fundamentals.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card rounded-xl p-6 hover:border-indigo-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 pb-3 mb-4 border-b border-slate-800">
                  {iconMap[cat.iconName] || <Code className="w-5 h-5 text-indigo-400" />}
                  <h3 className="font-mono text-sm font-semibold text-slate-100 uppercase tracking-wide">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/90 text-slate-200 border border-slate-800 hover:border-indigo-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
