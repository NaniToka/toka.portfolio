import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Failures', href: '#setbacks' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="font-mono font-semibold text-lg flex items-center gap-1 group" aria-label="Toka Nani Home">
          <span className="text-indigo-500 font-bold group-hover:text-indigo-400 transition-colors">~/</span>
          <span className="text-slate-900 dark:text-slate-100">toka-nani</span>
          <span className="inline-block w-2 h-4 bg-indigo-500 animate-pulse ml-0.5" />
        </a>

        {/* Desktop Nav Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-slate-100 transition-colors relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-500 after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          <button
            onClick={onOpenResume}
            className="btn-hover inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-md text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900/80 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 min-h-[38px]"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-500" />
            View Resume
          </button>
          
          <a
            href={PERSONAL_INFO.resumePath}
            download="Toka_Nani_Resume.pdf"
            className="btn-primary-hover inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm shadow-indigo-900/40 min-h-[38px]"
          >
            <Download className="w-3.5 h-3.5" />
            Download PDF
          </a>
        </div>

        {/* Mobile Actions: Theme Toggle + Mobile Menu Button */}
        <div className="sm:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white rounded-md border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/80 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white rounded-md border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/80 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-50 dark:bg-[#07080D] border-b border-slate-200 dark:border-slate-800 px-4 py-5 space-y-3 animate-fadeIn">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-mono text-sm text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-medium rounded-md text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 min-h-[44px]"
            >
              <FileText className="w-4 h-4 text-indigo-500" />
              View Resume
            </button>
            <a
              href={PERSONAL_INFO.resumePath}
              download="Toka_Nani_Resume.pdf"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-500 min-h-[44px]"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
