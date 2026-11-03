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
import { ThemeProvider } from './context/ThemeContext';
import { ErrorBoundary } from './components/ErrorBoundary';

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <ScrollProgress />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      <main id="main-content">
        <ErrorBoundary name="Hero"><Hero onOpenResume={() => setIsResumeModalOpen(true)} /></ErrorBoundary>
        <ErrorBoundary name="Projects"><Projects /></ErrorBoundary>
        <ErrorBoundary name="About"><About /></ErrorBoundary>
        <ErrorBoundary name="Experience"><Experience /></ErrorBoundary>
        <ErrorBoundary name="Skills"><Skills /></ErrorBoundary>
        <ErrorBoundary name="Certifications"><Certs /></ErrorBoundary>
        <ErrorBoundary name="Achievements"><Achievements /></ErrorBoundary>
        <ErrorBoundary name="GitHubActivity"><GitHubActivity /></ErrorBoundary>
        <ErrorBoundary name="Wins"><Wins /></ErrorBoundary>
        <ErrorBoundary name="Setbacks"><Setbacks /></ErrorBoundary>
        <ErrorBoundary name="Contact"><Contact onOpenResume={() => setIsResumeModalOpen(true)} /></ErrorBoundary>
      </main>

      <Footer />
      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </ThemeProvider>
  );
};

export default App;
