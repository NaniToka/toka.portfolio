import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="font-mono font-semibold text-lg text-slate-100 flex items-center gap-1 group">
          <span className="text-indigo-400 font-bold group-hover:text-indigo-300 transition-colors">~/</span>
          <span>toka-nani</span>
          <span className="inline-block w-2 h-4 bg-indigo-500 animate-pulse ml-0.5" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs text-slate-400 hover:text-slate-100 transition-colors relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-500 after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-md text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all min-h-[38px]"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-400" />
            View Resume
          </button>
          
          <a
            href={PERSONAL_INFO.resumePath}
            download="Toka_Nani_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-sm shadow-indigo-900/40 min-h-[38px]"
          >
            <Download className="w-3.5 h-3.5" />
            Download PDF
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white rounded-md border border-slate-800 bg-slate-900/80 min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#07080D] border-b border-slate-800 px-4 py-5 space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-mono text-sm text-slate-300 hover:text-indigo-400 py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-medium rounded-md text-slate-200 bg-slate-900 border border-slate-800 min-h-[44px]"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
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
