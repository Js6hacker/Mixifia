import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AudioDemo from './components/AudioDemo';
import Changelog from './components/Changelog';
import Footer from './components/Footer';
import Starfield from './components/Starfield';
import PrivacyPolicy from './components/Policy';
import TermsAndConditions from './components/TermsAndConditions';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [downloadCount, setDownloadCount] = useState(14258);
  const [activeView, setActiveView] = useState('home'); // 'home' | 'privacy' | 'terms' | 'contact'

  // Hash-based routing for #privacy, #terms, and #contact
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#privacy') {
        setActiveView('privacy');
      } else if (hash === '#terms') {
        setActiveView('terms');
      } else if (hash === '#contact') {
        setActiveView('contact');
      } else if (hash === '' || hash === '#home' || hash.startsWith('#features') || hash.startsWith('#demo') || hash.startsWith('#changelog')) {
        setActiveView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToView = (view) => {
    setActiveView(view);
    if (view === 'privacy') {
      window.location.hash = 'privacy';
    } else if (view === 'terms') {
      window.location.hash = 'terms';
    } else if (view === 'contact') {
      window.location.hash = 'contact';
    } else {
      window.location.hash = '';
    }
  };

  const handleDownload = () => {
    setDownloadCount(prev => prev + 1);

    window.location.href = 'https://mixifia.aicentralstore.com/download/mixifia.apk';
  };

  return (
    <div className="app-container">
      <Starfield />
      {/* Decorative ambient background glows */}
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>
      <div className="ambient-glow-3"></div>

      <Header
        onDownload={handleDownload}
        activeView={activeView}
        onGoHome={() => navigateToView('home')}
        onOpenPrivacy={() => navigateToView('privacy')}
        onOpenTerms={() => navigateToView('terms')}
        onOpenContact={() => navigateToView('contact')}
      />

      <main>
        {activeView === 'home' && (
          <>
            <Hero onDownload={handleDownload} downloadCount={downloadCount} />
            <Features />
            <AudioDemo />
            <Changelog />
          </>
        )}

        {activeView === 'privacy' && (
          <PrivacyPolicy onClose={() => navigateToView('home')} />
        )}

        {activeView === 'terms' && (
          <TermsAndConditions onClose={() => navigateToView('home')} />
        )}

        {activeView === 'contact' && (
          <Contact onClose={() => navigateToView('home')} />
        )}
      </main>

      <Footer
        onOpenPrivacy={() => navigateToView('privacy')}
        onOpenTerms={() => navigateToView('terms')}
        onOpenContact={() => navigateToView('contact')}
      />
    </div>
  );
}

export default App;

