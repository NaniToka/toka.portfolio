import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { GitHubActivity } from './components/GitHubActivity';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certs } from './components/Certs';
import { Achievements } from './components/Achievements';
import { Wins } from './components/Wins';
import { Setbacks } from './components/Setbacks';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ScrollProgress } from './components/ScrollProgress';
import { Cursor } from './components/Cursor';
import { ThemeProvider } from './context/ThemeContext';

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <ThemeProvider>
      {/* Scroll progress bar — fixed at very top */}
      <ScrollProgress />
      {/* Custom cursor — desktop only, auto-hides on touch */}
      <Cursor />

      <div className="min-h-screen relative font-sans">
        {/* Skip to Main Content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#00E5FF] text-[#050505] font-mono text-xs font-semibold rounded-md shadow-lg"
        >
          Skip to main content
        </a>

        <Navbar onOpenResume={handleOpenResume} />

        <main id="main-content" className="relative z-10">
          <Hero onOpenResume={handleOpenResume} />
          <About />
          <GitHubActivity />
          <Experience />
          <Projects />
          <Skills />
          <Certs />
          <Achievements />
          <Wins />
          <Setbacks />
          <Contact onOpenResume={handleOpenResume} />
        </main>

        <Footer />
        <ResumeModal isOpen={isResumeModalOpen} onClose={handleCloseResume} />
      </div>
    </ThemeProvider>
  );
};

export default App;
