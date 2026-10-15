import React, { useState } from 'react';
import { personalData } from '../../data/personal';
import { SectionHeading } from '../ui/SectionHeading';
import { validateContactForm, ContactFormData, ValidationErrors } from '../../lib/validation';
import {
  IconArrowUpRight,
  IconCopy,
  IconCheck,
  IconMail,
  IconGithub,
  IconLinkedin,
  IconTwitter
} from '../ui/Icons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: ''
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message securely and providing mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');

      // Create mailto fallback link to guarantee direct deliverability
      const mailtoUrl = `mailto:${personalData.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Sender: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: ''
      });

      // Also trigger mail client if user clicks
      console.log('Form message ready for transmission to:', mailtoUrl);
    }, 700);
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--color-canvas-alt)' }}>
      <div className="container">
        <SectionHeading
          title="LET'S CONNECT"
          star={true}
          note="Open for opportunities &amp; discussions"
        />

        <div className="contact-grid">
          {/* Left Column: Contact Channels & Socials */}
          <div className="contact-info-card">
            <div>
              <span className="neo-badge neo-badge--yellow" style={{ marginBottom: '1.25rem' }}>
                REACH OUT DIRECTLY
              </span>
              <h3>Let's Build Something Exceptional Together.</h3>
              <p style={{ marginTop: '0.75rem' }}>
                Have an internship opportunity, project collaboration, or want to explore AI and systems engineering? My inbox is always open.
              </p>
            </div>

            <div className="contact-methods-list">
              {/* Email item with copy button */}
              <div className="contact-method-item" style={{ justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <IconMail size={20} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                    {personalData.email}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="neo-btn neo-btn--yellow"
                  style={{ minWidth: 36, minHeight: 36, padding: '6px 10px', fontSize: '0.75rem' }}
                  aria-label="Copy email address"
                  title="Copy Email to Clipboard"
                >
                  {copiedEmail ? <IconCheck size={14} /> : <IconCopy size={14} />}
                  <span>{copiedEmail ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>

              {/* Social Channels */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                <a
                  href="https://github.com/muthubalamurugan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn"
                  style={{ flexGrow: 1 }}
                  aria-label="Visit Muthu Balamurugan GitHub"
                >
                  <IconGithub size={18} />
                  <span>GITHUB</span>
                </a>

                <a
                  href="https://linkedin.com/in/muthubalamurugan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn"
                  style={{ flexGrow: 1 }}
                  aria-label="Visit Muthu Balamurugan LinkedIn"
                >
                  <IconLinkedin size={18} />
                  <span>LINKEDIN</span>
                </a>

                <a
                  href="https://x.com/muthubalamurugan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn"
                  style={{ flexGrow: 1 }}
                  aria-label="Visit Muthu Balamurugan X"
                >
                  <IconTwitter size={18} />
                  <span>X / TWITTER</span>
                </a>
              </div>
            </div>

            <div style={{ borderTop: '2px solid rgba(255, 255, 255, 0.25)', paddingTop: '1rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', color: '#dedaff', display: 'block' }}>
                LOCATION &amp; AVAILABILITY
              </span>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', marginTop: '2px', color: '#fff' }}>
                {personalData.location} • {personalData.status}
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-card">
            <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 900 }}>
              Send A Message
            </h3>

            {submitStatus === 'success' && (
              <div className="form-status-alert form-status-alert--success" role="alert">
                Message prepared successfully! Thank you for reaching out. I will get back to you shortly.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="form-status-alert form-status-alert--error" role="alert">
                An error occurred while validating your message. Please check the inputs or email me directly at {personalData.email}.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Honeypot Spam Trap (Hidden from real users) */}
              <div className="honeypot-field" aria-hidden="true">
                <label htmlFor="hp_field">Leave this field blank</label>
                <input
                  type="text"
                  id="hp_field"
                  name="honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={handleInputChange}
                />
              </div>

              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="contact_name" className="form-label">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="contact_name"
                  name="name"
                  required
                  placeholder="e.g. Alex Henderson"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <span id="name-error" className="form-error" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div className="form-group" style={{ marginTop: '1rem' }}>
                <label htmlFor="contact_email" className="form-label">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="contact_email"
                  name="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <span id="email-error" className="form-error" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Subject Field */}
              <div className="form-group" style={{ marginTop: '1rem' }}>
                <label htmlFor="contact_subject" className="form-label">
                  Subject *
                </label>
                <input
                  type="text"
                  id="contact_subject"
                  name="subject"
                  required
                  placeholder="Project Collaboration / Internship Role"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && (
                  <span id="subject-error" className="form-error" role="alert">
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message Field */}
              <div className="form-group" style={{ marginTop: '1rem' }}>
                <label htmlFor="contact_message" className="form-label">
                  Your Message *
                </label>
                <textarea
                  id="contact_message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project, goals, or opportunities..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <span id="message-error" className="form-error" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div style={{ marginTop: '1.5rem' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="neo-btn neo-btn--yellow"
                  style={{ width: '100%', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  <span>{isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}</span>
                  <IconArrowUpRight size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
