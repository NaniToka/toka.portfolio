import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certs } from './components/Certs';
import { Achievements } from './components/Achievements';
import { Setbacks } from './components/Setbacks';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
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
      <div className="min-h-screen relative font-sans">
        {/* Skip to Main Content Link for Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-indigo-600 text-white font-mono text-xs font-semibold rounded-md shadow-lg"
        >
          Skip to main content
        </a>

        <Navbar onOpenResume={handleOpenResume} />

        <main id="main-content" className="relative z-10">
          <Hero onOpenResume={handleOpenResume} />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certs />
          <Achievements />
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
