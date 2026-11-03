import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, FileText, Menu, Moon, Sun, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface NavbarProps {
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { label: 'Selected work', href: '#projects' },
  { label: 'Profile', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Credentials', href: '#certifications' },
] as const;

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();
  const reduced = useReducedMotion();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = ['hero', ...NAV_LINKS.map(link => link.href.slice(1)), 'contact'];
    const observer = new IntersectionObserver(entries => {
      const visible = entries.find(entry => entry.isIntersecting);
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-30% 0px -60% 0px' });
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    if (!isMobileOpen) return () => { document.body.style.overflow = ''; };
    const timer = window.setTimeout(() => firstLinkRef.current?.focus(), 80);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileOpen(false);
      if (event.key !== 'Tab' || !menuRef.current) return;
      const items = menuRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
      menuTriggerRef.current?.focus();
    };
  }, [isMobileOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b transition-all duration-300" style={{ background: isScrolled ? 'color-mix(in srgb, var(--paper) 94%, transparent)' : 'transparent', borderColor: isScrolled ? 'var(--line)' : 'transparent', backdropFilter: isScrolled ? 'blur(16px)' : 'none' }}>
        <div className="shell flex h-[76px] items-center justify-between gap-4">
          <a href="#hero" className="group flex min-w-0 items-center gap-3" aria-label="Toka Nani, back to top">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--line-strong)] font-serif text-lg transition-colors group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">TN</span>
            <span className="min-w-0">
              <span className="block font-serif text-[1.55rem] font-semibold leading-none tracking-[-0.02em]">Toka Nani</span>
              <span className="mt-1 hidden text-[0.58rem] font-bold uppercase tracking-[0.16em] text-[var(--muted)] sm:block">Cloud & Generative AI Engineer</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {NAV_LINKS.map(link => {
              const active = activeSection === link.href.slice(1);
              return (
                <a key={link.href} href={link.href} className={`relative py-2 text-[0.7rem] font-bold tracking-[0.02em] transition-colors ${active ? 'text-[var(--accent)]' : 'text-[var(--muted)] hover:text-[var(--ink)]'}`}>
                  {link.label}
                  <span className={`absolute inset-x-0 bottom-0 h-px origin-left bg-[var(--accent)] transition-transform ${active ? 'scale-x-100' : 'scale-x-0'}`} />
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button className="icon-button" onClick={toggleTheme} aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}>
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button className="text-link" onClick={onOpenResume}><FileText size={14} /> Résumé</button>
            <a href="#contact" className="button button--primary !min-h-[42px] !px-4">Let’s talk <ArrowUpRight size={15} /></a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button className="icon-button" onClick={toggleTheme} aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}>
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button ref={menuTriggerRef} className="icon-button" onClick={() => setIsMobileOpen(true)} aria-label="Open navigation" aria-expanded={isMobileOpen} aria-controls="mobile-navigation"><Menu size={20} /></button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div id="mobile-navigation" ref={menuRef} role="dialog" aria-modal="true" aria-label="Navigation menu" className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-[var(--paper)] px-6 pb-8 pt-5 lg:hidden" initial={reduced ? { opacity: 0 } : { opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduced ? 0 : -12 }} transition={{ duration: 0.25 }}>
            <div className="flex items-center justify-between">
              <span className="font-serif text-2xl font-semibold">Toka Nani</span>
              <button className="icon-button" onClick={() => setIsMobileOpen(false)} aria-label="Close navigation"><X size={20} /></button>
            </div>
            <nav className="mt-12 flex flex-col" aria-label="Mobile navigation">
              {[...NAV_LINKS, { label: 'Contact', href: '#contact' }].map((link, index) => (
                <a key={link.href} ref={index === 0 ? firstLinkRef : undefined} href={link.href} onClick={() => setIsMobileOpen(false)} className="flex items-center justify-between border-t border-[var(--line)] py-5 font-serif text-4xl font-medium last:border-b">
                  <span>{link.label}</span><span className="font-sans text-xs text-[var(--accent)]">0{index + 1}</span>
                </a>
              ))}
            </nav>
            <div className="mt-auto pt-10">
              <button className="button button--primary w-full" onClick={() => { setIsMobileOpen(false); onOpenResume(); }}><FileText size={16} /> View résumé</button>
              <a className="mt-5 block text-center text-sm text-[var(--muted)]" href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
