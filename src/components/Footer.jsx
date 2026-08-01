import React from 'react';

export default function Footer({ onOpenPrivacy, onOpenTerms, onOpenContact }) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h4>Mixifia Studio</h4>
          <p>
            An advanced audio software platform for next-gen producers, sound designers, DJs, and podcasters. Designed with visual clarity and real-time DSP performance.
          </p>
        </div>
        <div className="footer-links-col">
          <h5>Product</h5>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#demo">Live Demo</a></li>
            <li><a href="#changelog">Updates</a></li>
          </ul>
        </div>
        <div className="footer-links-col">
          <h5>Community</h5>
          <ul>
            <li><a href="#github">GitHub</a></li>
            <li><a href="#discord">Discord Community</a></li>
            <li><a href="#contact" onClick={(e) => { if (onOpenContact) { e.preventDefault(); onOpenContact(); } }}>Contact Support</a></li>
          </ul>
        </div>
        <div className="footer-links-col">
          <h5>Legal & Support</h5>
          <ul>
            <li><a href="#privacy" onClick={(e) => { if (onOpenPrivacy) { e.preventDefault(); onOpenPrivacy(); } }}>Privacy Policy</a></li>
            <li><a href="#terms" onClick={(e) => { if (onOpenTerms) { e.preventDefault(); onOpenTerms(); } }}>Terms & Conditions</a></li>
            <li><a href="#contact" onClick={(e) => { if (onOpenContact) { e.preventDefault(); onOpenContact(); } }}>Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">
          © {new Date().getFullYear()} Mixifia. All rights reserved. Made for high fidelity.
        </div>
        <div className="footer-legal-inline">
          <a href="#privacy" onClick={(e) => { if (onOpenPrivacy) { e.preventDefault(); onOpenPrivacy(); } }}>Privacy Policy</a>
          <span className="footer-dot">•</span>
          <a href="#terms" onClick={(e) => { if (onOpenTerms) { e.preventDefault(); onOpenTerms(); } }}>Terms & Conditions</a>
          <span className="footer-dot">•</span>
          <a href="#contact" onClick={(e) => { if (onOpenContact) { e.preventDefault(); onOpenContact(); } }}>Contact Us</a>
        </div>
        <div className="footer-socials">
          <a href="#twitter" className="social-link">𝕏</a>
          <a href="#github" className="social-link">GitHub</a>
          <a href="#youtube" className="social-link">YouTube</a>
        </div>
      </div>
    </footer>
  );
}

