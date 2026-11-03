import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BriefcaseBusiness, Cloud, GraduationCap, MapPin, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { PERSONAL_INFO, SPECIALIZATIONS } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';
import { VIEWPORT_ONCE } from '../lib/animation';

const icons: Record<string, React.ReactNode> = {
  Zap: <Zap size={21} strokeWidth={1.5} />,
  Cloud: <Cloud size={21} strokeWidth={1.5} />,
  ShieldCheck: <ShieldCheck size={21} strokeWidth={1.5} />,
  Sparkles: <Sparkles size={21} strokeWidth={1.5} />,
};

export const About: React.FC = () => (
  <section id="about" className="section">
    <div className="shell">
      <SectionHeading label="02 / Profile" title="A builder’s mindset, grounded in responsibility." subtitle="Computer science foundations, production-oriented engineering, and a focus on AI that solves tangible problems." />
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <motion.div className="lg:col-span-7" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT_ONCE} transition={{ duration: 0.6 }}>
          <blockquote className="max-w-3xl font-serif text-[clamp(2.25rem,4vw,3.8rem)] font-medium leading-[1.06] tracking-[-0.035em]">
            “{PERSONAL_INFO.valueProp}”
          </blockquote>
          <div className="mt-9 space-y-5 text-[0.98rem] leading-8 text-[var(--muted)]">
            {PERSONAL_INFO.bio.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-[var(--line)] pt-6">
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">Professional profile <ArrowUpRight size={14} /></a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-link">Start a conversation <ArrowUpRight size={14} /></a>
          </div>
        </motion.div>

        <motion.aside className="panel h-fit p-6 sm:p-8 lg:col-span-5" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT_ONCE} transition={{ duration: 0.6, delay: 0.1 }} aria-label="Education and availability">
          <div className="flex items-center justify-between gap-4 border-b border-[var(--line)] pb-5">
            <span className="eyebrow">At a glance</span><span className="status-dot" aria-label="Available for opportunities" />
          </div>
          <dl className="divide-y divide-[var(--line)]">
            <div className="py-5">
              <dt className="flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.13em] text-[var(--muted)]"><GraduationCap size={15} className="text-[var(--accent)]" /> Education</dt>
              <dd className="mt-2 font-serif text-2xl font-medium leading-tight">{PERSONAL_INFO.education}</dd>
              <dd className="mt-2 text-xs leading-6 text-[var(--muted)]">{PERSONAL_INFO.institution}</dd>
              <dd className="mt-2 text-xs font-bold text-[var(--ink-soft)]">CGPA · {PERSONAL_INFO.cgpa}</dd>
            </div>
            <div className="py-5">
              <dt className="flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.13em] text-[var(--muted)]"><BriefcaseBusiness size={15} className="text-[var(--accent)]" /> Target roles</dt>
              <dd className="mt-2 text-sm font-semibold leading-7">Software Engineering · Backend · Cloud · GenAI · DevOps</dd>
            </div>
            <div className="py-5">
              <dt className="flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.13em] text-[var(--muted)]"><MapPin size={15} className="text-[var(--accent)]" /> Location & availability</dt>
              <dd className="mt-2 text-sm font-semibold leading-7">{PERSONAL_INFO.footerLine}</dd>
            </div>
          </dl>
          <p className="border-t border-[var(--line)] pt-5 text-xs leading-6 text-[var(--muted)]">{PERSONAL_INFO.title}</p>
        </motion.aside>
      </div>

      <div className="mt-20 grid border-y border-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
        {SPECIALIZATIONS.map((specialization, index) => (
          <motion.article
            key={specialization.title}
            className="relative border-b border-[var(--line)] p-6 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="flex items-center justify-between text-[var(--accent)]">{icons[specialization.iconName]}<span className="font-serif text-lg italic">0{index + 1}</span></div>
            <h3 className="mt-8 font-serif text-[1.65rem] font-medium leading-[1.05]">{specialization.title}</h3>
            <p className="mt-3 text-xs leading-6 text-[var(--muted)]">{specialization.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
