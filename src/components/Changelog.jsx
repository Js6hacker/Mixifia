import React from 'react';

const CHANGELOG_DATA = [
  {
    version: "2.5.0",
    date: "2026-09-13",
    title: "Mixifia Aether — Next-Gen AI Mixing & Video Remix Studio",
    tag: "Latest Release",
    description: "A refined Mixifia experience with a new UI, smoother workflows, improved stability, and important bug fixes. More intelligent music creation is on the way, with AI Mix Finder coming in the next update.",
    features: [
      "🎧 Smarter Music Mixing — Improved song selection, structure detection, BPM/key matching, and smoother transitions.",
      "🌊 Seamless Transitions — Better cut points and energy flow so transitions feel more natural.",
      "🎵 Smart Background Flow — Optionally add a BGM that stays subtle during the mix and rises during transitions.",
      "🎬 AI Video Remix — Remix your music to match your video with improved audio/video processing.",
      "🎙️ Voice Watermark — Add a custom spoken watermark that plays at the end of your finished mix.",
      "⚡ Faster & More Reliable — Improved rendering stability and export handling.",
      "✨ Refined Experience — Cleaner interface and smoother studio workflow."
    ],
    fixes: [
      "Fixed database issues",
      "Fixed backend problems"
    ]
  },
  {
    version: "2.4.4",
    date: "2026-07-26",
    title: "Mixifia — AI Music Mixing Studio",
    tag: "Major Update",
    description: "This update introduces a redesigned AI Studio focused entirely on music creation. Enjoy a faster Song Edit engine, new AI-powered editing presets, smoother processing, improved stability, and a more polished user experience across supported Android devices.",
    features: [
      "Redesigned AI Studio with a cleaner and faster workflow",
      "New Smart Song Edit Maker",
      "New AI Mashup Studio for creating professional mashups",
      "New Transition Lab with multiple transition styles",
      "New Song Highlight Maker for creating short viral clips",
      "Professional Song Edit presets including Slowed + Reverb, Nightcore, Deep Bass Boost, and AI Phonk Drift",
      "Improved audio processing and mastering quality",
      "Faster rendering engine with reduced processing time",
      "Enhanced UI with smoother animations and premium design",
      "Improved preview generation and export performance"
    ],
    fixes: [
      "Fixed crashes that occurred during Song Edit generation",
      "Improved rendering stability on low-memory devices",
      "Fixed export failures for certain audio formats",
      "Resolved preview playback issues after editing",
      "Improved FFmpeg processing reliability",
      "Fixed audio synchronization and transition timing",
      "Reduced memory usage during rendering",
      "General bug fixes and performance improvements"
    ]
  },
  {
    version: "2.4.0",
    date: "2026-06-02",
    title: "AI Studio Layout & Video Mixing Upgrade",
    tag: "Feature Release",
    description: "This major release upgrades the AI Studio, allowing you to combine photo and video inputs into a single rendering timeline. We've introduced a brand new beatsync visual model that analyzes video frames to align dramatic transitions with audio beats.",
    features: [
      "Hybrid AI Photo & Video Mix editor",
      "Brand-new AI Studio dashboard with intuitive selector buttons",
      "4 new viral cinematic templates optimized for social sharing",
      "Hardware-accelerated rendering using Vulkan API on compatible Android devices"
    ],
    fixes: [
      "Fixed background audio scan crashes on devices with Android 13+",
      "Resolved a frame-drop glitch during heavy rendering transitions on Mali GPUs"
    ]
  },
  {
    version: "2.2.0",
    date: "2026-04-05",
    title: "Smart Audio Analysis Engine",
    tag: "Feature Release",
    description: "Introduced a new local frequency analyser. When uploading custom tracks, the engine automatically extracts the tempo (BPM) and transient signals to align photo slideshow shifts with sub-bass drops.",
    features: [
      "Custom URL audio track importing",
      "Dynamic BPM alignment sensitivity slider",
      "Improved memory usage when processing long media (>5 minutes)"
    ],
    fixes: [
      "Fixed notification bar download glitches on some Samsung models",
      "Optimized storage scanner speed for faster media selection"
    ]
  },
  {
    version: "1.0.0",
    date: "2026-02-10",
    title: "Mixifia X Initial Beta Launch",
    tag: "Beta Release",
    description: "Welcome to Mixifia X! A next-generation AI video editing companion on Android. Turn simple photo folders and audio tracks into stunning cinematic mixes with a single tap.",
    features: [
      "AI Cinematic Photo Mix generator",
      "Real-time audio beatsync scanning",
      "Save high-definition mixes directly to your phone's gallery"
    ],
    fixes: []
  }
];

const ROADMAP_ITEMS = [
  { title: "CapCut-Style AI Editing Engine", tag: "Major Core Upgrade" },
  { title: "Trending & Viral Templates", tag: "Social Boost" },
  { title: "AI Stem Separation & Vocals", tag: "Audio Engine" },
  { title: "Multi-Track Cloud Sync", tag: "Cloud Integration" },
  { title: "Viral Reel & Short Optimization", tag: "Pacing Sync" },
  { title: "AI Visual Effects Engine", tag: "Filters & VHS" },
  { title: "Smart Highlight Detection", tag: "Action Scanning" },
  { title: "Enhanced Cinematic Storytelling", tag: "Logic Upgrade" }
];

export default function Changelog() {
  return (
    <section id="changelog" className="changelog-section">
      <h2 className="section-title">Update History & Roadmap</h2>
      <p className="section-subtitle">
        Mixifia is evolving. Read about our latest releases, what features we are currently baking, and our beta lifecycle.
      </p>

      {/* 1. Release Changelogs */}
      <div className="timeline">
        {CHANGELOG_DATA.map((release, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="version-badge">
                  <span className="version-num">v{release.version}</span>
                  {release.tag && (
                    <span className={`tag ${release.tag.toLowerCase().includes('latest') ? 'latest' : release.tag.toLowerCase().includes('feature') ? 'feature' : 'major'}`}>
                      {release.tag}
                    </span>
                  )}
                </div>
                <span className="release-date">Released {release.date}</span>
              </div>
              <h3 className="release-title">{release.title}</h3>
              <p className="release-desc">{release.description}</p>
              
              {release.features && release.features.length > 0 && (
                <ul className="release-bullets">
                  {release.features.map((feature, fIdx) => {
                    const parts = feature.split(' — ');
                    const hasEmoji = /^[\p{Emoji}\p{Extended_Pictographic}]/u.test(feature.trim());
                    if (parts.length === 2) {
                      return (
                        <li key={fIdx} className={hasEmoji ? 'has-emoji' : ''}>
                          <span className="feature-title">{parts[0]}</span>
                          <span className="feature-sep"> — </span>
                          <span className="feature-desc">{parts[1]}</span>
                        </li>
                      );
                    }
                    return <li key={fIdx}>{feature}</li>;
                  })}
                </ul>
              )}

              {release.fixes && release.fixes.length > 0 && (
                <div className="fixes-section">
                  <h4 className="fixes-title">Bug Fixes & Refinements</h4>
                  <ul className="release-fixes">
                    {release.fixes.map((fix, fxIdx) => (
                      <li key={fxIdx}>{fix}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 2. Roadmap / Upcoming Features */}
      <div style={{ marginTop: '5rem', borderTop: '1px solid var(--border-color)', paddingTop: '4rem' }}>
        <h3 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Roadmap & Coming Soon</h3>
        <p className="section-subtitle" style={{ marginBottom: '3rem' }}>
          We are preparing next-generation AI integrations. Here is what is landing in Mixifia soon:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {ROADMAP_ITEMS.map((item, idx) => (
            <div key={idx} style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'border-color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.25)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <h4 style={{ fontSize: '1rem', fontWeight: '600', color: 'white', marginBottom: '1rem' }}>{item.title}</h4>
              <span style={{
                alignSelf: 'flex-start',
                background: 'rgba(6, 182, 212, 0.08)',
                border: '1px solid rgba(6, 182, 212, 0.25)',
                color: 'var(--cyan-primary)',
                fontSize: '0.75rem',
                fontWeight: '700',
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Beta Notice Banner */}
      <div style={{
        marginTop: '5rem',
        background: 'rgba(234, 179, 8, 0.04)',
        border: '1px solid rgba(234, 179, 8, 0.25)',
        borderRadius: '12px',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#eab308', fontWeight: 'bold', fontSize: '1.05rem' }}>
          <span>⚠️</span> BETA VERSION NOTICE
        </div>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
          Mixifia is currently in Beta. We are continuously improving AI mixing quality, transitions, music synchronization, video storytelling, and overall rendering performance. Your feedback is crucial to helping shape the future of Mixifia.
        </p>
      </div>
    </section>
  );
}
