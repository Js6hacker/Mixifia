import React from 'react';

export default function Hero({ onDownload, downloadCount }) {
  const formattedCount = downloadCount ? downloadCount.toLocaleString() : '14,258';

  return (
    <section className="hero">
      <div className="hero-tag">
        <span className="pulse-dot">✦</span>
        <span>Mixifia — AI Music, Video & Image Remix Studio</span>
      </div>
      <h1 className="hero-title">Create AI Music, Video &<br />Image Remixes</h1>
      <p className="hero-subtitle">
        Welcome to the next generation AI-powered creative studio designed for music lovers, content creators, video editors, DJs, and social media creators. Mixifia transforms your songs, videos, and photos into professional-quality remixes automatically using advanced AI-driven editing, synchronization, and cinematic storytelling techniques. No editing skills required.
      </p>
      
      <div className="hero-cta">
        <div className="download-btn-container">
          <button className="download-btn" onClick={onDownload}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Mixifia APK
          </button>
          <span className="download-info">Requires Android 8+ // Version 2.5.0</span>
        </div>
        
        <div className="download-badge">
          <span>{formattedCount}</span> creators have installed Mixifia
        </div>
      </div>

      <div className="hero-preview mobile-preview-wrapper">
        <div className="phone-device">
          <div className="phone-speaker"></div>
          <div className="phone-screen-container">
            <img 
              src="/screen4.jpg" 
              alt="Mixifia Android App Dashboard Preview" 
              className="phone-screen-img"
            />
          </div>
          <div className="phone-home-indicator"></div>
        </div>
      </div>
    </section>
  );
}
