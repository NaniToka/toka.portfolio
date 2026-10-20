import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, FileText, Download, Sun, Moon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Lock body scroll when menu open */
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  /* Close on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'GitHub', href: '#github' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certs', href: '#certifications' },
    { label: 'Wins', href: '#wins' },
    { label: 'Failures', href: '#setbacks' },
    { label: 'Contact', href: '#contact' },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-2.5' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">

          {/* Brand Logo */}
          <a
            href="#hero"
            className="font-mono font-semibold text-base sm:text-lg flex items-center gap-1 group shrink-0"
            aria-label="Toka Nani Home"
          >
            <span className="text-blue-500 font-bold group-hover:text-blue-400 transition-colors">~/</span>
            <span className="text-slate-900 dark:text-slate-100">toka-nani</span>
            <span className="inline-block w-2 h-4 bg-blue-500 animate-pulse ml-0.5" />
          </a>

          {/* Desktop Nav Links — hidden below lg (10 links overflow at md) */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-4 xl:gap-6 overflow-x-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-slate-100 transition-colors relative py-1 whitespace-nowrap hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons — hidden below lg */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-600" />}
            </button>

            <button
              onClick={onOpenResume}
              className="btn-hover inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-md text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900/80 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 min-h-[38px]"
            >
              <FileText className="w-3.5 h-3.5 text-blue-500" />
              View Resume
            </button>

            <a
              href={PERSONAL_INFO.resumePath}
              download="Toka_Nani_Resume.pdf"
              className="btn-primary-hover inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-500 shadow-sm shadow-blue-900/40 min-h-[38px]"
            >
              <Download className="w-3.5 h-3.5" />
              Download PDF
            </a>
          </div>

          {/* Mobile/Tablet actions (< lg) */}
          <div className="lg:hidden flex items-center gap-2 shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-700 dark:text-slate-300 rounded-md border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/80 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-blue-600" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 dark:text-slate-300 rounded-md border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/80 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            ref={menuRef}
            className="lg:hidden bg-slate-50 dark:bg-[#0F1115] border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-5"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="font-mono text-sm text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 py-3 border-b border-slate-100 dark:border-slate-800/60 last:border-b-0 transition-colors min-h-[44px] flex items-center"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
              <button
                onClick={() => { closeMenu(); onOpenResume(); }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-mono font-medium rounded-md text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 min-h-[48px]"
              >
                <FileText className="w-4 h-4 text-blue-500" />
                View Resume
              </button>
              <a
                href={PERSONAL_INFO.resumePath}
                download="Toka_Nani_Resume.pdf"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-mono font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-500 min-h-[48px]"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Full-screen overlay to close menu on outside tap */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};
