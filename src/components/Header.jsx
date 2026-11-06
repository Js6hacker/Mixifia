import React, { useState, useEffect } from 'react';

export default function Header({ onDownload, activeView = 'home', onGoHome, onOpenPrivacy, onOpenTerms, onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    if (activeView !== 'home' && onGoHome) {
      onGoHome();
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    if (activeView !== 'home' && onGoHome) {
      onGoHome();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo" onClick={handleLogoClick}>
          <div className="logo-icon">M</div>
          Mixifia AI
        </div>
        <ul className="nav-menu">
          <li><span className="nav-link" onClick={() => handleNavClick('features')}>Features</span></li>
          <li><span className="nav-link" onClick={() => handleNavClick('demo')}>Live Demo</span></li>
          <li><span className="nav-link" onClick={() => handleNavClick('changelog')}>Changelog</span></li>
          <li>
            <span className={`nav-link ${activeView === 'privacy' ? 'active' : ''}`} onClick={onOpenPrivacy}>
              Privacy
            </span>
          </li>
          <li>
            <span className={`nav-link ${activeView === 'terms' ? 'active' : ''}`} onClick={onOpenTerms}>
              Terms
            </span>
          </li>
          <li>
            <span className={`nav-link ${activeView === 'contact' ? 'active' : ''}`} onClick={onOpenContact}>
              Contact
            </span>
          </li>
        </ul>
        <button className="nav-btn" onClick={onDownload}>Download</button>
      </div>
    </header>
  );
}

