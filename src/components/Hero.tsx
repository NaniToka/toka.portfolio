import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, FileText, Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroScene } from './HeroScene';
import { TiltCard } from './TiltCard';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { EASE_OUT, SPRING_SNAPPY, fadeUp, staggerContainer, } from '../lib/animation';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const reduced = useReducedMotion();

  // Page-load stagger for left column children
  const containerVariants = reduced
    ? {}
    : staggerContainer(0.1, 0.15);

  const itemVariants = reduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
    : fadeUp();

  return (
    <section
      id="hero"
      className="hero-glow min-h-screen min-h-[100dvh] pt-20 sm:pt-24 pb-12 sm:pb-16 flex flex-col justify-center relative overflow-hidden"
    >
      {/* 3D background scene — absolute, behind all content */}
      <HeroScene />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* ── Left column ── */}
          <motion.div
            className="lg:col-span-7 space-y-5 sm:space-y-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Status pills */}
            <motion.div
              className="flex flex-wrap items-center gap-2"
              variants={itemVariants}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(59,10,107,0.6)] border border-[rgba(0,229,255,0.2)] text-[#00E5FF] font-mono text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping shrink-0" aria-hidden="true" />
                <span>Available for SWE / Cloud / GenAI Roles</span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(59,10,107,0.4)] border border-[rgba(0,229,255,0.12)] text-[rgba(255,255,255,0.7)] font-mono text-xs">
                Google Student Ambassador
              </span>
            </motion.div>

            {/* Photo + name */}
            <motion.div
              className="flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-8"
              variants={itemVariants}
            >
              <div className="relative shrink-0">
                <motion.div
                  whileHover={reduced ? {} : { scale: 1.04 }}
                  transition={SPRING_SNAPPY}
                  className="rounded-full"
                >
                  <picture>
                    <source srcSet="/toka-profile.webp" type="image/webp" />
                    <img
                      src="/toka-profile.jpg"
                      alt="Toka Nani, Cloud & GenAI Engineer"
                      width={288}
                      height={288}
                      loading="eager"
                      className="w-28 h-28 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full object-cover border-2 border-[rgba(0,229,255,0.4)] ring-4 sm:ring-8 ring-[rgba(0,229,255,0.1)] shadow-xl"
                      style={{ boxShadow: '0 0 32px rgba(0,229,255,0.15)' }}
                    />
                  </picture>
                </motion.div>
                <span
                  className="absolute bottom-1.5 right-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#00E5FF] border-4 border-[#050505]"
                  title="Online"
                  aria-hidden="true"
                />
              </div>

              <div className="space-y-2 text-center sm:text-left min-w-0">
                {/* Heading line reveal */}
                <div className="overflow-hidden">
                  <motion.h1
                    className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
                    initial={reduced ? { opacity: 0 } : { y: '105%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.2 }}
                  >
                    {PERSONAL_INFO.name}
                  </motion.h1>
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-2 text-[#00E5FF] font-mono text-xs sm:text-sm lg:text-base font-semibold min-w-0">
                  <Terminal className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
                  <span className="break-words leading-snug">{PERSONAL_INFO.title}</span>
                </div>
              </div>
            </motion.div>

            {/* Pitch */}
            <motion.div className="space-y-2 sm:space-y-3" variants={itemVariants}>
              <p className="text-sm sm:text-base lg:text-lg font-medium text-[rgba(255,255,255,0.85)] leading-relaxed">
                {PERSONAL_INFO.pitch}
              </p>
              <p className="text-xs sm:text-sm font-mono text-[rgba(0,229,255,0.7)] break-words">
                {PERSONAL_INFO.footerLine}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="pt-1 flex flex-wrap items-center gap-2 sm:gap-3"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                whileHover={reduced ? {} : { scale: 1.03, boxShadow: '0 0 20px rgba(0,229,255,0.4)' }}
                whileTap={{ scale: 0.97 }}
                transition={SPRING_SNAPPY}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-md bg-[#00E5FF] text-[#050505] font-mono text-xs font-semibold min-h-[44px] focus-visible:outline-[#00E5FF]"
              >
                Explore Case Studies
              </motion.a>

              <motion.button
                onClick={onOpenResume}
                whileHover={reduced ? {} : { borderColor: 'rgba(0,229,255,0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-md bg-[rgba(59,10,107,0.4)] text-white border border-[rgba(0,229,255,0.2)] font-mono text-xs font-medium min-h-[44px] transition-colors focus-visible:outline-[#00E5FF]"
              >
                <FileText className="w-4 h-4 text-[#00E5FF]" aria-hidden="true" /> View Resume
              </motion.button>

              <motion.a
                href={PERSONAL_INFO.resumePath}
                download="Toka_Nani_Resume.pdf"
                whileHover={reduced ? {} : { borderColor: 'rgba(0,229,255,0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-md bg-[rgba(59,10,107,0.4)] text-white border border-[rgba(0,229,255,0.2)] font-mono text-xs font-medium min-h-[44px] transition-colors focus-visible:outline-[#00E5FF]"
              >
                <Download className="w-4 h-4 text-[#00E5FF]" aria-hidden="true" /> Download PDF
              </motion.a>

              {/* Social icons */}
              <div className="flex items-center gap-2">
                {[
                  { href: PERSONAL_INFO.github,         label: 'GitHub Profile',   icon: <Github className="w-4 h-4" /> },
                  { href: PERSONAL_INFO.linkedin,        label: 'LinkedIn Profile', icon: <Linkedin className="w-4 h-4" /> },
                  { href: `mailto:${PERSONAL_INFO.email}`, label: 'Email Toka Nani', icon: <Mail className="w-4 h-4" /> },
                ].map(({ href, label, icon }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    whileHover={reduced ? {} : { scale: 1.1, color: '#00E5FF' }}
                    whileTap={{ scale: 0.9 }}
                    transition={SPRING_SNAPPY}
                    className="p-3 rounded-md bg-[rgba(59,10,107,0.4)] text-[rgba(255,255,255,0.55)] hover:text-white border border-[rgba(0,229,255,0.15)] min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors focus-visible:outline-[#00E5FF]"
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right column: Metric cards with 3D depth ── */}
          <motion.div
            className="lg:col-span-5 space-y-3 sm:space-y-4"
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.12, 0.5)}
          >
            {[
              {
                label: 'FLAGSHIP HIGHLIGHT',   badge: 'BENCHMARKED',    badgeClass: 'text-emerald-400',
                title: 'TokenFlow AI',
                body: <>FastAPI & React middleware utilizing Gemini <code className="text-[#00E5FF] font-mono break-all">text-embedding-004</code> and recency-decay scoring to prune prompt tokens by ~74%.</>,
              },
              {
                label: 'GOOGLE SOLUTION CHALLENGE', badge: 'CLOUD RUN', badgeClass: 'text-[#00E5FF]',
                title: 'BiasGuard AI',
                body: 'Forensic ML bias auditing platform on Cloud Run & Vertex AI streaming decision logs for UN SDG fairness evaluation.',
              },
              {
                label: 'IMPACT METRIC',             badge: 'VERIFIED',  badgeClass: 'text-emerald-400',
                title: '13+ Hackathons',
                body: 'PromptWars Virtual, Google Solution Challenge 2026, Meta PyTorch Hackathon, and Anvil @ Ascent 2026 finalist.',
              },
            ].map(({ label, badge, badgeClass, title, body }) => (
              <motion.div
                key={title}
                variants={reduced
                  ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
                  : fadeUp()
                }
              >
                <TiltCard maxTilt={3} className="rounded-xl">
                  <div className="glass-card rounded-xl p-4 sm:p-5 border-l-4 border-l-[#00E5FF] cursor-default h-full">
                    <div className="flex items-center justify-between text-xs font-mono text-[#00E5FF] mb-1">
                      <span>{label}</span>
                      <span className={`font-semibold ${badgeClass}`}>{badge}</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">{title}</div>
                    <p className="text-xs text-[rgba(255,255,255,0.65)] leading-relaxed">{body}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        whileHover={{ opacity: 1 }}
      >
        <a href="#about" aria-label="Scroll to About section" className="flex flex-col items-center gap-1">
          <span className="font-mono text-[10px] text-[rgba(255,255,255,0.4)] uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={reduced ? {} : { y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4 text-[#00E5FF]" aria-hidden="true" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};
