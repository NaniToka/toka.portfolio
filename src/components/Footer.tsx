import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-slate-800/80 bg-[#040508] text-xs font-mono text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © 2026 {PERSONAL_INFO.name}. Built with React, TypeScript, Vite & Tailwind CSS.
        </div>
        <div className="flex items-center gap-4">
          <a href="#hero" className="hover:text-indigo-400 transition-colors">Back to Top ↑</a>
          <span>•</span>
          <span>Google Student Ambassador</span>
        </div>
      </div>
    </footer>
  );
};
