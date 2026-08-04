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
    <div className="min-h-screen bg-bg-base text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 relative">
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
