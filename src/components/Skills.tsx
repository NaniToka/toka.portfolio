import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Code, Cpu, Database, Server, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';
import { VIEWPORT_ONCE } from '../lib/animation';

const icons: Record<string, React.ReactNode> = {
  Cloud: <Cloud size={22} strokeWidth={1.5} />,
  Code: <Code size={22} strokeWidth={1.5} />,
  Cpu: <Cpu size={22} strokeWidth={1.5} />,
  Database: <Database size={22} strokeWidth={1.5} />,
  Server: <Server size={22} strokeWidth={1.5} />,
  Sparkles: <Sparkles size={22} strokeWidth={1.5} />,
};

export const Skills: React.FC = () => (
  <section id="skills" className="section">
    <div className="shell">
      <SectionHeading label="04 / Capabilities" title="A full-stack, cloud-native toolkit." subtitle="Languages, frameworks, infrastructure, data systems, and computer science fundamentals used across the project archive." />
      <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((category, index) => (
          <motion.article
            key={category.category}
            className="border-t border-[var(--line-strong)] pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <div className="flex items-center justify-between text-[var(--accent)]">
              {icons[category.iconName] || <Code size={22} />}
              <span className="font-serif text-lg italic">0{index + 1}</span>
            </div>
            <h3 className="mt-7 font-serif text-3xl font-medium">{category.category}</h3>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
              {category.skills.map(skill => <span key={skill} className="text-xs font-semibold text-[var(--muted)]">{skill}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
