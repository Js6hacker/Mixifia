import React from 'react';

export default function Footer() {
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
            <li><a href="#support">Get Support</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">
          © {new Date().getFullYear()} Mixifia. All rights reserved. Made for high fidelity.
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
