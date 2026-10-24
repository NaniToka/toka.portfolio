import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Layout, Container, Code, Cpu } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { SectionHeading } from './SectionHeading';
import { staggerContainer, fadeUp, VIEWPORT_ONCE } from '../lib/animation';
import { useReducedMotion } from '../hooks/useReducedMotion';

const iconMap: Record<string, React.ReactNode> = {
  Cloud:     <Cloud     className="w-5 h-5 text-[#00E5FF]" />,
  Server:    <Server    className="w-5 h-5 text-[#00E5FF]" />,
  Layout:    <Layout    className="w-5 h-5 text-[#00E5FF]" />,
  Container: <Container className="w-5 h-5 text-[#00E5FF]" />,
  Code:      <Code      className="w-5 h-5 text-[#00E5FF]" />,
  Cpu:       <Cpu       className="w-5 h-5 text-[#00E5FF]" />,
};

export const Skills: React.FC = () => {
  const reduced = useReducedMotion();

  return (
    <section id="skills" className="py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <SectionHeading
            label="04. Engineering Capabilities"
            title="Technical Stack"
            subtitle="Categorized skills across cloud infrastructure, AI models, backend frameworks, and computer science fundamentals."
          />
        </div>

        {/* Staggered grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer(0.07)}
        >
          {SKILL_CATEGORIES.map((cat) => (
            <motion.div
              key={cat.category}
              variants={reduced
                ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
                : fadeUp()
              }
            >
              {/* TiltCard wraps each skill card */}
              <TiltCard className="glass-card rounded-xl p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 pb-3 mb-4 border-b border-[rgba(0,229,255,0.15)]">
                    {iconMap[cat.iconName] || <Code className="w-5 h-5 text-[#00E5FF]" />}
                    <h3 className="font-mono text-sm font-semibold text-white uppercase tracking-wide">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={reduced ? {} : {
                          borderColor: 'rgba(0,229,255,0.5)',
                          backgroundColor: 'rgba(0,229,255,0.08)',
                          transition: { duration: 0.15 },
                        }}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-[rgba(59,10,107,0.5)] text-[rgba(255,255,255,0.8)] border border-[rgba(0,229,255,0.15)] cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
