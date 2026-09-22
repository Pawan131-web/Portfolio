import React, { useState, useEffect } from 'react';
import './App.css';
import TopNav from './components/TopNav';
import OptionsModal from './components/OptionsModal';
import CvModal from './components/CvModal';
import HeroSection from './sections/HeroSection';
import ProfilSection from './sections/ProfilSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import { SoundEngine } from './components/SoundEngine';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero-section');
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState('default');
  const [isMuted, setIsMuted] = useState(SoundEngine.isMuted());

  // ScrollSpy using IntersectionObserver
  useEffect(() => {
    const sections = ['hero-section', 'profil-section', 'projects-section', 'contact-section'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-viewport-frame">
      <div className="inner-frame-border">
        {/* Top Header Bar */}
        <TopNav 
          onOpenOptions={() => setIsOptionsOpen(true)}
          onOpenCv={() => setIsCvOpen(true)}
          isMuted={isMuted}
          setIsMuted={setIsMuted}
        />

        {/* Main Content Sections */}
        <main className="main-content-flow">
          {/* Act 1: Game Start Menu Hero */}
          <HeroSection 
            onOpenOptions={() => setIsOptionsOpen(true)} 
            onOpenCv={() => setIsCvOpen(true)}
          />

          {/* Act 2: Profil & Dossier Deck */}
          <ProfilSection 
            onOpenCv={() => setIsCvOpen(true)}
          />

          {/* Act 3: Recap Projects Showcase */}
          <ProjectsSection />

          {/* Act 4: Contact & Thank You Finale */}
          <ContactSection />
        </main>

        {/* Global Options Modal */}
        <OptionsModal 
          isOpen={isOptionsOpen}
          onClose={() => setIsOptionsOpen(false)}
          onOpenCv={() => { setIsOptionsOpen(false); setIsCvOpen(true); }}
          activeTheme={activeTheme}
          setTheme={setActiveTheme}
          isMuted={isMuted}
          setIsMuted={setIsMuted}
        />

        {/* Interactive CV / Resume Viewer & Download Modal */}
        <CvModal 
          isOpen={isCvOpen}
          onClose={() => setIsCvOpen(false)}
        />
      </div>
    </div>
  );
}
