import React, { useState, useEffect } from 'react';

export default function Header({ onDownload }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="logo-icon">M</div>
          Mixifia
        </div>
        <ul className="nav-menu">
          <li><span className="nav-link" onClick={() => scrollToSection('features')}>Features</span></li>
          <li><span className="nav-link" onClick={() => scrollToSection('demo')}>Live Demo</span></li>
          <li><span className="nav-link" onClick={() => scrollToSection('changelog')}>Changelog</span></li>
        </ul>
        <button className="nav-btn" onClick={onDownload}>Download</button>
      </div>
    </header>
  );
}
