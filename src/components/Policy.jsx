import React, { useEffect } from 'react';

export default function PrivacyPolicy({ onClose }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'information-collection', title: '2. Information We Collect' },
    { id: 'media-processing', title: '3. Media & Audio Processing Safety' },
    { id: 'how-we-use-data', title: '4. How We Use Information' },
    { id: 'sharing-disclosure', title: '5. Information Sharing & Disclosure' },
    { id: 'data-security', title: '6. Data Security & Storage' },
    { id: 'user-rights', title: '7. Your Rights & Choices' },
    { id: 'children-privacy', title: "8. Children's Privacy" },
    { id: 'changes-policy', title: '9. Changes to This Policy' },
    { id: 'contact-us', title: '10. Contact Us' },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="legal-page-container">
      <div className="legal-header">
        <button className="legal-back-btn" onClick={onClose}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Mixifia Studio
        </button>
        <div className="legal-badge">Privacy & Security</div>
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-subtitle">
          Effective Date: August 1, 2026 &bull; Last Updated: August 1, 2026
        </p>
      </div>

      <div className="legal-content-grid">
        {/* Table of contents sidebar */}
        <aside className="legal-sidebar">
          <div className="legal-toc-card">
            <h4>Contents</h4>
            <ul>
              {sections.map((sec) => (
                <li key={sec.id}>
                  <button onClick={() => scrollToSection(sec.id)} className="toc-link">
                    {sec.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Document Text */}
        <main className="legal-body">
          <section id="introduction" className="legal-section">
            <h2>1. Introduction</h2>
            <p>
              Welcome to <strong>Mixifia</strong> ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a transparent, secure experience when using our website, web application, and Android application (collectively, the "Service").
            </p>
            <p>
              This Privacy Policy explains how Mixifia collects, uses, processes, and protects your information when you access our AI-powered audio, video, and image remix studio. By accessing or using Mixifia, you consent to the practices described in this Privacy Policy.
            </p>
          </section>

          <section id="information-collection" className="legal-section">
            <h2>2. Information We Collect</h2>
            <p>We collect minimal information necessary to deliver high-fidelity beat-syncing, audio processing, and AI rendering services:</p>

            <div className="legal-card-grid">
              <div className="legal-info-box">
                <span className="box-tag">On-Device Processing Data</span>
                <h3>Media Files & Assets</h3>
                <p>
                  Audio tracks, video clips, and photos imported into Mixifia for beat synchronization and cinematic remixing are processed locally on your device whenever possible. We do not permanently store or upload your raw source media to external servers without your explicit permission.
                </p>
              </div>

              <div className="legal-info-box">
                <span className="box-tag">Technical Diagnostics</span>
                <h3>Device & App Metrics</h3>
                <p>
                  We automatically collect anonymized technical information including device model, operating system version, app build ID, GPU capability parameters, crash telemetry, and performance benchmarks to optimize DSP and rendering speeds.
                </p>
              </div>

              <div className="legal-info-box">
                <span className="box-tag">User Interactions</span>
                <h3>Usage Statistics</h3>
                <p>
                  Anonymized usage statistics such as feature interaction frequency, export bitrates, genre presets used, and download events are collected to improve core AI algorithms and user experience.
                </p>
              </div>
            </div>
          </section>

          <section id="media-processing" className="legal-section">
            <h2>3. Media & Audio Processing Safety</h2>
            <div className="highlight-callout">
              <strong>Your Privacy First Guarantee:</strong> Mixifia does NOT use your private images, personal video clips, or custom audio uploads to train public AI models.
            </div>
            <p>
              Our core audio beat detection, tempo matching, scene selection, and frame interpolation engines operate using localized algorithms. When cloud-assisted processing is required for specialized AI filters:
            </p>
            <ul>
              <li>Media items are transmitted over encrypted TLS 1.3 channels.</li>
              <li>Transient buffers are erased immediately after rendering completes.</li>
              <li>Original media files are never indexed, resold, or shared with unauthorized third parties.</li>
            </ul>
          </section>

          <section id="how-we-use-data" className="legal-section">
            <h2>4. How We Use Information</h2>
            <p>The information collected is used exclusively for the following legitimate purposes:</p>
            <ul>
              <li><strong>Core Functionality:</strong> Processing audio waveforms, BPM calculation, scene timing, and output video rendering.</li>
              <li><strong>Performance Optimization:</strong> Tuning hardware acceleration (OpenGL/Vulkan) across different Android hardware profiles.</li>
              <li><strong>Customer Support:</strong> Troubleshooting error reports or download issues submitted by users.</li>
              <li><strong>Security & Anti-Abuse:</strong> Preventing malicious downloads, unauthorized API access, and security breaches.</li>
            </ul>
          </section>

          <section id="sharing-disclosure" className="legal-section">
            <h2>5. Information Sharing & Disclosure</h2>
            <p>We respect your privacy and do <strong>NOT</strong> sell, rent, or trade your personal data to third parties. We may share information only under the following limited circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> Trusted infrastructure providers (such as hosting, content delivery networks, and error monitoring services) operating under strict data protection agreements.</li>
              <li><strong>Legal Requirements:</strong> If required to do so by applicable law, regulation, legal process, or governmental request.</li>
              <li><strong>Safety & Protection:</strong> To enforce our Terms & Conditions and protect the safety, rights, or property of Mixifia users.</li>
            </ul>
          </section>

          <section id="data-security" className="legal-section">
            <h2>6. Data Security & Storage</h2>
            <p>
              Mixifia implements industry-standard administrative, physical, and technical security measures to safeguard data against unauthorized access, loss, or alteration. All web communications utilize HTTPS/SSL encryption.
            </p>
            <p>
              Local application data, preferences, and project drafts reside safely within your device's isolated app storage sandbox.
            </p>
          </section>

          <section id="user-rights" className="legal-section">
            <h2>7. Your Rights & Choices</h2>
            <p>Depending on your jurisdiction (such as GDPR, CCPA/CPRA), you possess the following rights regarding your data:</p>
            <ul>
              <li><strong>Access & Portability:</strong> Request copies of telemetry or account data associated with your usage.</li>
              <li><strong>Deletion:</strong> Clear local app cache, export history, or request full data removal.</li>
              <li><strong>Permission Controls:</strong> Grant or revoke device storage, camera, or microphone permissions at any time via system settings.</li>
            </ul>
          </section>

          <section id="children-privacy" className="legal-section">
            <h2>8. Children's Privacy</h2>
            <p>
              Mixifia is not directed at children under the age of 13 (or 16 in certain regions). We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us so we can take immediate action to remove the data.
            </p>
          </section>

          <section id="changes-policy" className="legal-section">
            <h2>9. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy periodically to reflect enhancements to Mixifia or legal updates. Any revisions will be posted on this page with an updated "Effective Date". We encourage you to review this policy regularly.
            </p>
          </section>

          <section id="contact-us" className="legal-section">
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact our privacy team:
            </p>
            <div className="contact-box">
              <p><strong>Mixifia Legal & Privacy Team</strong></p>
              <p>Email: <a href="mailto:nozvis17@gmail.com">nozvis17@gmail.com</a></p>
              <p>Support Portal: <a href="https://mixifia.aicentralstore.com" target="_blank" rel="noreferrer">mixifia.aicentralstore.com</a></p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
