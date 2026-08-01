import React, { useEffect } from 'react';

export default function TermsAndConditions({ onClose }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'eligibility', title: '2. Eligibility & Account Terms' },
    { id: 'license-grant', title: '3. License & App Usage' },
    { id: 'intellectual-property', title: '4. Intellectual Property & User Content' },
    { id: 'ai-disclaimer', title: '5. AI Processing & Content Disclaimers' },
    { id: 'prohibited-use', title: '6. Prohibited Activities' },
    { id: 'limitation-liability', title: '7. Limitation of Liability' },
    { id: 'disclaimer-warranties', title: '8. Disclaimer of Warranties' },
    { id: 'governing-law', title: '9. Governing Law & Dispute Resolution' },
    { id: 'modifications', title: '10. Modifications & Termination' },
    { id: 'contact', title: '11. Contact Information' },
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
        <div className="legal-badge">Terms of Service</div>
        <h1 className="legal-title">Terms & Conditions</h1>
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
          <section id="acceptance" className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By installing, downloading, accessing, or using the <strong>Mixifia</strong> software, web studio, or Android APK application (collectively, the "Service"), you agree to be bound by these Terms & Conditions ("Terms").
            </p>
            <p>
              If you do not agree to all terms and conditions set forth herein, you must refrain from downloading or using the Service immediately.
            </p>
          </section>

          <section id="eligibility" className="legal-section">
            <h2>2. Eligibility & Account Terms</h2>
            <p>
              You must be at least 13 years of age (or the legal age of majority in your jurisdiction) to use Mixifia. If you are using the Service on behalf of an entity, business, or organization, you represent and warrant that you have authority to bind that entity to these Terms.
            </p>
          </section>

          <section id="license-grant" className="legal-section">
            <h2>3. License & App Usage</h2>
            <p>
              Subject to your compliance with these Terms, Mixifia grants you a revocable, non-exclusive, non-transferable, limited license to install and use the Mixifia application solely for personal, non-commercial, or creator production purposes.
            </p>
            <div className="legal-card-grid">
              <div className="legal-info-box">
                <span className="box-tag">Permitted Uses</span>
                <h3>Creator Workflows</h3>
                <p>You may create beat-synced videos, DJ audio mixes, visualizers, and music montages for publishing on social platforms like TikTok, Instagram, YouTube, and Twitch.</p>
              </div>
              <div className="legal-info-box">
                <span className="box-tag">License Restrictions</span>
                <h3>Reverse Engineering</h3>
                <p>You may not decompile, reverse engineer, disassemble, modify, create derivative works from, or bypass security features of the Mixifia APK or core DSP algorithms.</p>
              </div>
            </div>
          </section>

          <section id="intellectual-property" className="legal-section">
            <h2>4. Intellectual Property & User Content</h2>
            <p>
              <strong>Your Original Content:</strong> You retain full ownership and intellectual property rights in the original songs, video clips, and photographs you import into Mixifia.
            </p>
            <p>
              <strong>Copyright Responsibility:</strong> You are strictly responsible for ensuring that you possess the necessary rights, licenses, or permission to use any copyrighted music, vocal tracks, or video assets uploaded or remixed using Mixifia.
            </p>
            <p>
              <strong>Mixifia IP:</strong> The Mixifia brand, logo, UI/UX designs, DSP engines, AI workflow logic, and software code are protected by intellectual property laws and remain the exclusive property of Mixifia Studio.
            </p>
          </section>

          <section id="ai-disclaimer" className="legal-section">
            <h2>5. AI Processing & Content Disclaimers</h2>
            <div className="highlight-callout">
              <strong>Notice regarding AI-Generated Output:</strong> Mixifia leverages algorithmic beat detection, motion tracking, and generative visual enhancements.
            </div>
            <p>
              Output renderings depend on input media quality. We make no guarantees that generated audio mixes or video scenes will achieve specific performance, virality, or copyright-cleared status on third-party streaming platforms.
            </p>
          </section>

          <section id="prohibited-use" className="legal-section">
            <h2>6. Prohibited Activities</h2>
            <p>When using Mixifia, you agree not to engaged in any of the following prohibited activities:</p>
            <ul>
              <li>Uploading content that infringes upon third-party copyrights, trademarks, or publicity rights.</li>
              <li>Generating defamatory, hateful, sexually explicit, or illegal content.</li>
              <li>Distributing malicious code, viruses, or attempting unauthorized API access.</li>
              <li>Using automated bots or scrapers to extract audio waveforms or AI presets without authorization.</li>
            </ul>
          </section>

          <section id="limitation-liability" className="legal-section">
            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Mixifia and its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data loss, or goodwill, arising out of or related to your use of the Service.
            </p>
          </section>

          <section id="disclaimer-warranties" className="legal-section">
            <h2>8. Disclaimer of Warranties</h2>
            <p>
              The Service is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
          </section>

          <section id="governing-law" className="legal-section">
            <h2>9. Governing Law & Dispute Resolution</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any dispute arising out of or relating to these Terms or the Service shall be resolved through good-faith negotiations or binding arbitration.
            </p>
          </section>

          <section id="modifications" className="legal-section">
            <h2>10. Modifications & Termination</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. Material updates will be communicated by revising the "Last Updated" date. Continued use of Mixifia after updates constitutes your agreement to the modified Terms.
            </p>
            <p>
              We may suspend or terminate your access to the Service without prior notice if you breach any provision of these Terms.
            </p>
          </section>

          <section id="contact" className="legal-section">
            <h2>11. Contact Information</h2>
            <p>
              If you have questions regarding these Terms & Conditions, please contact us:
            </p>
            <div className="contact-box">
              <p><strong>Mixifia Legal Department</strong></p>
              <p>Email: <a href="mailto:terms@mixifia.com">terms@mixifia.com</a></p>
              <p>Website: <a href="https://mixifia.aicentralstore.com" target="_blank" rel="noreferrer">mixifia.aicentralstore.com</a></p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
