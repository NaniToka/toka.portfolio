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
    <section id="skills" className="py-12 sm:py-20 relative scroll-mt-20 sm:scroll-mt-24">
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
              <TiltCard maxTilt={3} className="glass-card rounded-xl p-6 flex flex-col justify-between h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div>
                  <div className="flex items-center gap-3 pb-3 mb-4 border-b border-[rgba(0,229,255,0.15)]">
                    <div className="p-2 rounded-lg bg-[rgba(59,10,107,0.7)] border border-[rgba(0,229,255,0.25)] text-[#00E5FF] shadow-sm shadow-[rgba(0,229,255,0.15)]">
                      {iconMap[cat.iconName] || <Code className="w-5 h-5 text-[#00E5FF]" />}
                    </div>
                    <h3 className="font-mono text-sm font-semibold text-white uppercase tracking-wide">
                      {cat.category}
                    </h3>
                  </div>

                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={reduced ? {} : staggerContainer(0.03)}
                  >
                    {cat.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        variants={reduced
                          ? {}
                          : { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }
                        }
                        whileHover={reduced ? {} : {
                          scale: 1.05,
                          borderColor: 'rgba(0,229,255,0.6)',
                          backgroundColor: 'rgba(0,229,255,0.12)',
                          boxShadow: '0 0 12px rgba(0,229,255,0.2)',
                          transition: { duration: 0.15 },
                        }}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-[rgba(59,10,107,0.5)] text-[rgba(255,255,255,0.85)] border border-[rgba(0,229,255,0.15)] cursor-default transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#00E5FF] opacity-60" aria-hidden="true" />
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
