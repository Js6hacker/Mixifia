import React, { useState, useEffect } from 'react';

export default function Contact({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'General Inquiry',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/nozvis17@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          category: formData.category,
          _subject: `[Mixifia Contact] ${formData.subject || formData.category}`,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          category: 'General Inquiry',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to deliver message via form server.');
      }
    } catch (err) {
      console.error('Contact Form Submission Error:', err);
      // Fallback method if AJAX fails (e.g. adblocker)
      setStatus('error');
      setErrorMessage('Direct transmission failed. You can send your email directly to nozvis17@gmail.com using the link below.');
    }
  };

  const constructMailto = () => {
    const mailtoSubject = encodeURIComponent(`[Mixifia] ${formData.subject || formData.category}`);
    const mailtoBody = encodeURIComponent(`Hi Mixifia Team,\n\nName: ${formData.name}\nEmail: ${formData.email}\nCategory: ${formData.category}\n\nMessage:\n${formData.message}`);
    return `mailto:nozvis17@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <div className="legal-page-container contact-page-container">
      <div className="legal-header">
        <button className="legal-back-btn" onClick={onClose}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Mixifia Studio
        </button>
        <div className="legal-badge">24/7 Support & Inquiries</div>
        <h1 className="legal-title">Get in Touch</h1>
        <p className="legal-subtitle">
          Have questions, feedback, or need technical assistance? We're here to help.
        </p>
      </div>

      <div className="contact-content-grid">
        {/* Contact Form Card */}
        <div className="contact-form-card">
          {status === 'success' ? (
            <div className="contact-success-state">
              <div className="success-icon-badge">
                <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3>Message Sent Successfully!</h3>
              <p>
                Thank you for reaching out. Your message has been routed to <strong>nozvis17@gmail.com</strong>.
                Our team will review your inquiry and get back to you shortly.
              </p>
              <button className="contact-reset-btn" onClick={() => setStatus('idle')}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name <span className="required-star">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address <span className="required-star">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="category">Inquiry Category</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Bug Report">Bug Report</option>
                    <option value="Feature Request">Feature Request</option>
                    <option value="Partnership & Business">Partnership & Business</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Brief summary of your message"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message <span className="required-star">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  placeholder="How can we help you today? Please provide as much detail as possible..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="contact-error-banner">
                  <p>{errorMessage}</p>
                  <a href={constructMailto()} className="mailto-fallback-link">
                    Open in Default Email Client ✉️
                  </a>
                </div>
              )}

              <div className="form-actions">
                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="btn-spinner"></span>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Info Sidebar */}
        <aside className="contact-sidebar">
          <div className="contact-info-card">
            <h3>Direct Contact</h3>
            <p className="info-card-desc">
              Messages submitted via the contact form are dispatched directly to our support inbox.
            </p>

            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div className="info-details">
                <span className="info-label">Support Email</span>
                <a href="mailto:nozvis17@gmail.com" className="info-value email-link">
                  nozvis17@gmail.com
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">⚡</div>
              <div className="info-details">
                <span className="info-label">Response Time</span>
                <span className="info-value">Within 24 Hours</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🌐</div>
              <div className="info-details">
                <span className="info-label">Official Support Portal</span>
                <a
                  href="https://mixifia.aicentralstore.com"
                  target="_blank"
                  rel="noreferrer"
                  className="info-value link-external"
                >
                  mixifia.aicentralstore.com ↗
                </a>
              </div>
            </div>
          </div>

          <div className="contact-faq-teaser">
            <h4>Quick Assistance</h4>
            <p>
              Looking for app installation or audio processing help? Check out our official privacy and terms documentation.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
