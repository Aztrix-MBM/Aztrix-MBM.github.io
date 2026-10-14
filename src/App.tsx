import React, { useState, useEffect } from 'react';
import { Navbar } from './components/ui/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { ResumeSection } from './components/sections/ResumeSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/ui/Footer';

export const App: React.FC = () => {
  // Sync initial tab with URL hash if present
  const getInitialTab = (): string => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const validTabs = ['home', 'about', 'skills', 'projects', 'certifications', 'resume', 'contact'];
    return validTabs.includes(hash) ? hash : 'home';
  };

  const [activeTab, setActiveTab] = useState<string>(getInitialTab);

  // Listen to browser forward/back button navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validTabs = ['home', 'about', 'skills', 'projects', 'certifications', 'resume', 'contact'];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      } else if (!hash) {
        setActiveTab('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    window.location.hash = `#${tabId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="portfolio-app">
      {/* Sticky Neo-Brutalist Navigation */}
      <Navbar activeTab={activeTab} onSelectTab={handleTabChange} />

      {/* Main Content Area - Displays strictly the selected tab */}
      <main id="main-content" tabIndex={-1}>
        {activeTab === 'home' && (
          <HeroSection onNavigate={handleTabChange} />
        )}

        {activeTab === 'about' && (
          <div className="tab-content-enter">
            <AboutSection />
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="tab-content-enter">
            <SkillsSection />
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="tab-content-enter">
            <ProjectsSection />
          </div>
        )}

        {activeTab === 'certifications' && (
          <div className="tab-content-enter">
            <CertificationsSection />
          </div>
        )}

        {activeTab === 'resume' && (
          <div className="tab-content-enter">
            <ResumeSection />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="tab-content-enter">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Persistent Footer */}
      <Footer onSelectTab={handleTabChange} />
    </div>
  );
};

export default App;
