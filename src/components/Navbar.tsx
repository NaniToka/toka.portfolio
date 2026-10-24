import React, { useState, useEffect, useRef, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Download, Sun, Moon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { EASE_OUT, SPRING_SNAPPY } from '../lib/animation';

interface NavbarProps {
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { label: 'Overview',     href: '#hero' },
  { label: 'About',        href: '#about' },
  { label: 'GitHub',       href: '#github' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Certs',        href: '#certifications' },
  { label: 'Wins',         href: '#wins' },
  { label: 'Failures',     href: '#setbacks' },
  { label: 'Contact',      href: '#contact' },
] as const;

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

/**
 * Sticky glassmorphism navbar with:
 * - Scroll-spy: active link gets a sliding amethyst→cyan underline pill
 * - Scroll-dependent height shrink
 * - Mobile: full-screen overlay with staggered link reveals + focus trap
 * - Theme toggle with smooth icon swap
 */
export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled,       setIsScrolled]       = useState(false);
  const [isMobileOpen,     setIsMobileOpen]      = useState(false);
  const [activeSection,    setActiveSection]     = useState<string>('hero');
  const { theme, toggleTheme }                   = useTheme();
  const reduced                                  = useReducedMotion();
  const menuRef                                  = useRef<HTMLDivElement>(null);
  const firstFocusableRef                        = useRef<HTMLAnchorElement>(null);
  const pillId                                   = useId();

  // ── Scroll detection ────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Scroll-spy via IntersectionObserver ─────────────────────
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ── Body scroll lock ─────────────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  // ── Keyboard handling (Escape + focus trap) ──────────────────
  useEffect(() => {
    if (!isMobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setIsMobileOpen(false); }
      // Simple focus trap: Tab cycles within the menu
      if (e.key === 'Tab' && menuRef.current) {
        const focusables = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusables[0];
        const last  = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    // Move focus inside menu on open
    setTimeout(() => firstFocusableRef.current?.focus(), 60);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMobileOpen]);

  const closeMenu = () => setIsMobileOpen(false);

  // Mobile menu animation variants
  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: {
      opacity: 1, x: 0,
      transition: { duration: 0.32, ease: EASE_OUT },
    },
    exit: {
      opacity: 0, x: '100%',
      transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 24 },
    visible: (i: number) => ({
      opacity: 1, x: 0,
      transition: { duration: 0.3, ease: EASE_OUT, delay: i * 0.045 },
    }),
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'glass-nav py-2.5' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">

          {/* ── Brand ── */}
          <a
            href="#hero"
            className="font-mono font-semibold text-base sm:text-lg flex items-center gap-1 group shrink-0"
            aria-label="Toka Nani — scroll to top"
          >
            <span className="text-[#00E5FF] font-bold">~/</span>
            <span className="text-white">toka-nani</span>
            {/* Blinking cursor */}
            <span className="inline-block w-[7px] h-4 bg-[#00E5FF] animate-pulse ml-0.5" aria-hidden="true" />
          </a>

          {/* ── Desktop nav ── */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 relative">
            {NAV_LINKS.map(({ label, href }) => {
              const id      = href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={id}
                  href={href}
                  aria-current={isActive ? 'page' : undefined}
                  className="relative font-mono text-xs px-3 py-1.5 rounded-md transition-colors whitespace-nowrap z-10"
                  style={{
                    color: isActive
                      ? '#00E5FF'
                      : 'rgba(255,255,255,0.55)',
                  }}
                >
                  {/* Sliding active pill */}
                  {isActive && !reduced && (
                    <motion.span
                      layoutId={pillId}
                      className="absolute inset-0 rounded-md"
                      style={{ background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.25)' }}
                      transition={SPRING_SNAPPY}
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </a>
              );
            })}
          </nav>

          {/* ── Desktop actions ── */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9, rotate: reduced ? 0 : 20 }}
              transition={SPRING_SNAPPY}
              className="p-2 rounded-md border border-[rgba(0,229,255,0.2)] bg-[rgba(59,10,107,0.4)] hover:bg-[rgba(59,10,107,0.7)] transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: reduced ? 0 : -30, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: reduced ? 0 : 30, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {theme === 'dark'
                    ? <Sun className="w-4 h-4 text-amber-400" />
                    : <Moon className="w-4 h-4 text-[#00E5FF]" />
                  }
                </motion.span>
              </AnimatePresence>
            </motion.button>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-md text-white bg-[rgba(59,10,107,0.5)] hover:bg-[rgba(59,10,107,0.8)] border border-[rgba(0,229,255,0.2)] hover:border-[rgba(0,229,255,0.5)] transition-all min-h-[38px] focus-visible:outline-[#00E5FF]"
            >
              <FileText className="w-3.5 h-3.5 text-[#00E5FF]" />
              View Resume
            </button>

            <motion.a
              href={PERSONAL_INFO.resumePath}
              download="Toka_Nani_Resume.pdf"
              whileHover={{ scale: 1.03, boxShadow: '0 0 16px rgba(0,229,255,0.4)' }}
              whileTap={{ scale: 0.97 }}
              transition={SPRING_SNAPPY}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold rounded-md text-[#050505] bg-[#00E5FF] hover:bg-[#33EEFF] min-h-[38px] focus-visible:outline-[#00E5FF]"
            >
              <Download className="w-3.5 h-3.5" />
              Download PDF
            </motion.a>
          </div>

          {/* ── Mobile actions ── */}
          <div className="lg:hidden flex items-center gap-2 shrink-0">
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-md border border-[rgba(0,229,255,0.2)] bg-[rgba(59,10,107,0.4)] min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {theme === 'dark'
                    ? <Sun className="w-5 h-5 text-amber-400" />
                    : <Moon className="w-5 h-5 text-[#00E5FF]" />
                  }
                </motion.span>
              </AnimatePresence>
            </motion.button>

            <motion.button
              onClick={() => setIsMobileOpen((p) => !p)}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-md border border-[rgba(0,229,255,0.2)] bg-[rgba(59,10,107,0.4)] min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={isMobileOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isMobileOpen ? 'close' : 'open'}
                  initial={{ rotate: reduced ? 0 : -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: reduced ? 0 : 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {isMobileOpen ? <X className="w-5 h-5 text-[#00E5FF]" /> : <Menu className="w-5 h-5 text-white" />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </header>

      {/* ── Mobile full-screen menu ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[45] bg-[#050505]/80 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              id="mobile-menu"
              ref={menuRef}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              className="fixed top-0 right-0 bottom-0 z-[46] w-[min(320px,100vw)] bg-[#0A0010] border-l border-[rgba(0,229,255,0.15)] flex flex-col px-6 py-8 lg:hidden"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close button */}
              <motion.button
                onClick={closeMenu}
                whileTap={{ scale: 0.9 }}
                className="self-end p-2 rounded-md border border-[rgba(0,229,255,0.2)] min-h-[44px] min-w-[44px] flex items-center justify-center mb-8"
                aria-label="Close navigation"
              >
                <X className="w-5 h-5 text-[#00E5FF]" />
              </motion.button>

              {/* Staggered links */}
              <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
                {NAV_LINKS.map(({ label, href }, i) => {
                  const id = href.slice(1);
                  const isActive = activeSection === id;
                  return (
                    <motion.a
                      key={id}
                      ref={i === 0 ? firstFocusableRef : undefined}
                      href={href}
                      onClick={closeMenu}
                      aria-current={isActive ? 'page' : undefined}
                      custom={i}
                      variants={reduced ? {} : linkVariants}
                      className={`font-mono text-base py-3 px-4 rounded-lg transition-colors min-h-[48px] flex items-center ${
                        isActive
                          ? 'text-[#00E5FF] bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.2)]'
                          : 'text-[rgba(255,255,255,0.7)] hover:text-[#00E5FF] hover:bg-[rgba(0,229,255,0.05)]'
                      }`}
                    >
                      {label}
                    </motion.a>
                  );
                })}
              </nav>

              {/* CTAs */}
              <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-[rgba(0,229,255,0.1)]">
                <button
                  onClick={() => { closeMenu(); onOpenResume(); }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-mono font-medium rounded-lg text-white bg-[rgba(59,10,107,0.5)] border border-[rgba(0,229,255,0.2)] min-h-[48px]"
                >
                  <FileText className="w-4 h-4 text-[#00E5FF]" /> View Resume
                </button>
                <a
                  href={PERSONAL_INFO.resumePath}
                  download="Toka_Nani_Resume.pdf"
                  onClick={closeMenu}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-mono font-semibold rounded-lg text-[#050505] bg-[#00E5FF] min-h-[48px]"
                >
                  <Download className="w-4 h-4" /> Download PDF
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
