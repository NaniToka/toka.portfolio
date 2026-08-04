import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certs } from './components/Certs';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#07080D] bg-grid-pattern text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 relative overflow-hidden">
      
      {/* Ambient Site-Wide Radial Glow Orbs (#4F46E5 Indigo) */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute top-[28%] right-0 w-[550px] h-[550px] bg-indigo-600/08 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute top-[55%] left-0 w-[550px] h-[550px] bg-indigo-600/08 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-indigo-600/08 rounded-full blur-[160px] pointer-events-none z-0" />

      <Navbar onOpenResume={handleOpenResume} />
      <main className="relative z-10">
        <Hero onOpenResume={handleOpenResume} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certs />
        <Achievements />
        <Contact onOpenResume={handleOpenResume} />
      </main>
      <Footer />
      <ResumeModal isOpen={isResumeModalOpen} onClose={handleCloseResume} />
    </div>
  );
};

export default App;
