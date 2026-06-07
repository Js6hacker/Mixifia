import React from 'react';

const CORE_PILLARS = [
  {
    title: "AI Music Mixing",
    tagline: "Create seamless mixes automatically",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
    details: "Mixifia analyzes BPM, energy levels, musical structure, genre drops, and highlight sections. The AI selects the best parts of each track and creates smart crossfades and beat synchronization automatically.",
    bulletPoints: ["Intelligent Song Selection", "Smart crossfades & transitions", "Beat-synced transitions", "BPM & Energy-aware alignment"]
  },
  {
    title: "AI Video Mixing",
    tagline: "Synchronize footage to your music",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
    details: "Turn multiple video clips into a professional music video. The AI detects motion, action moments, faces, camera movement, and scene quality to select the strongest moments synced to your beat.",
    bulletPoints: ["Automatic scene selection", "Beat-synced cuts & pacing", "Cinematic transition filters", "Social-optimized story flow"]
  },
  {
    title: "AI Image-to-Video Creator",
    tagline: "Bring your photos to life",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    details: "Transform photos into cinematic music videos. Mixifia applies intelligent camera movement, beat-reactive animations, parallax, and storytelling techniques to bring visual memories to life.",
    bulletPoints: ["Intelligent image analysis", "Parallax & cinematic motion", "Beat-reactive photo animations", "Automatic visual storytelling"]
  }
];

const WORKFLOW_STEPS = [
  "Song analysis", "Video analysis", "Image analysis", 
  "Scene selection", "Beat sync", "Transition generation", 
  "Motion design", "Storytelling", "Color enhancement", "Export optimization"
];

const PLATFORMS = ["TikTok", "Instagram Reels", "YouTube Shorts", "Music Visualizers", "Photo Montages", "DJ Mixes", "Festival Edits", "Promotional Content"];

export default function Features() {
  return (
    <section id="features" className="features-section">
      <h2 className="section-title">Creative Remix Studio</h2>
      <p className="section-subtitle">
        Automatically remix music, videos, and images with advanced beat-synchronization and AI storytelling. No editing skills required.
      </p>

      {/* Core Pillars Grid */}
      <div className="features-grid">
        {CORE_PILLARS.map((pillar, idx) => (
          <div className="feature-card" key={idx} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div className="feature-icon-container" style={{ margin: 0 }}>
                {pillar.icon}
              </div>
              <div>
                <h3 className="feature-title" style={{ margin: 0 }}>{pillar.title}</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--cyan-primary)', fontWeight: '600' }}>{pillar.tagline}</span>
              </div>
            </div>
            <p className="feature-desc" style={{ marginBottom: '1.5rem', flexGrow: 1 }}>{pillar.details}</p>
            <ul style={{ listStyle: 'none', paddingLeft: 0, borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
              {pillar.bulletPoints.map((bullet, bIdx) => (
                <li key={bIdx} style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--cyan-primary)' }}>✦</span> {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Intelligent AI Workflow Banner */}
      <div style={{
        marginTop: '4rem',
        background: 'rgba(124, 58, 237, 0.05)',
        border: '1px solid rgba(124, 58, 237, 0.2)',
        borderRadius: '16px',
        padding: '2.5rem',
        backdropFilter: 'blur(8px)'
      }}>
        <h3 className="feature-title" style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'white' }}>
          Intelligent AI Workflow
        </h3>
        <p className="feature-desc" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Mixifia automatically handles the heavy lifting on-device to build your cinematic masterpiece.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
          {WORKFLOW_STEPS.map((step, idx) => (
            <div key={idx} style={{
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid var(--border-color)',
              fontSize: '0.85rem',
              color: 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ color: '#22d3ee', fontWeight: 'bold' }}>✓</span> {step}
            </div>
          ))}
        </div>
      </div>

      {/* Platforms and Target Audience */}
      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>
          Designed for Modern Creators
        </h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          {PLATFORMS.map((plat, idx) => (
            <span key={idx} style={{
              background: 'rgba(6, 182, 212, 0.04)',
              border: '1px solid rgba(6, 182, 212, 0.15)',
              padding: '0.4rem 1.25rem',
              borderRadius: '100px',
              fontSize: '0.85rem',
              color: 'var(--text-muted)'
            }}>
              {plat}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
