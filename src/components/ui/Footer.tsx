import React from 'react';
import { personalData } from '../../data/personal';
import { IconArrowUpRight, IconGithub, IconLinkedin, IconTwitter } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="neo-footer">
      <div className="container">
        <div className="neo-footer__top">
          <div className="neo-footer__brand">
            <div className="neo-footer__logo">M.</div>
            <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', color: '#fff' }}>
              {personalData.name}
            </p>
            <p className="neo-footer__copy">
              {personalData.role} • Turning ideas into engineered reality.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
            <ul className="neo-footer__links" role="list">
              <li><a href="#home" className="neo-footer__link">Home</a></li>
              <li><a href="#about" className="neo-footer__link">About</a></li>
              <li><a href="#skills" className="neo-footer__link">Skills</a></li>
              <li><a href="#projects" className="neo-footer__link">Projects</a></li>
              <li><a href="#certifications" className="neo-footer__link">Certs</a></li>
              <li><a href="#resume" className="neo-footer__link">Resume</a></li>
              <li><a href="#contact" className="neo-footer__link">Contact</a></li>
            </ul>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href="https://github.com/muthubalamurugan"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn"
                style={{ padding: '6px 12px', fontSize: '0.75rem', minHeight: 36 }}
                aria-label="GitHub profile"
              >
                <IconGithub size={16} />
                <span>GITHUB</span>
              </a>

              <a
                href="https://linkedin.com/in/muthubalamurugan"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn"
                style={{ padding: '6px 12px', fontSize: '0.75rem', minHeight: 36 }}
                aria-label="LinkedIn profile"
              >
                <IconLinkedin size={16} />
                <span>LINKEDIN</span>
              </a>

              <a
                href="https://x.com/muthubalamurugan"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn"
                style={{ padding: '6px 12px', fontSize: '0.75rem', minHeight: 36 }}
                aria-label="Twitter profile"
              >
                <IconTwitter size={16} />
                <span>X / TWITTER</span>
              </a>
            </div>
          </div>
        </div>

        <div className="neo-footer__bottom">
          <div>
            <span>© {new Date().getFullYear()} {personalData.name}. All rights reserved.</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ color: 'var(--color-green)' }}>
              ● Systems Operational
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="neo-btn neo-btn--yellow"
              style={{ minHeight: 36, padding: '4px 12px', fontSize: '0.75rem' }}
              aria-label="Scroll back to top of page"
            >
              <span>BACK TO TOP</span>
              <IconArrowUpRight size={14} style={{ transform: 'rotate(-45deg)' }} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
