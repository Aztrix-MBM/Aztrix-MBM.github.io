import React from 'react';
import { personalData } from '../../data/personal';
import { navItems } from './Navbar';
import { IconArrowUpRight, IconGithub, IconLinkedin, IconTwitter } from './Icons';

interface FooterProps {
  onSelectTab: (tabId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (tabId: string) => {
    onSelectTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="neo-footer">
      <div className="container">
        <div className="neo-footer__top">
          <div className="neo-footer__brand">
            <div className="neo-footer__logo">AZTRIX</div>
            <p className="neo-footer__copy">
              {personalData.role} • Turning ideas into engineered reality.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
            <ul className="neo-footer__links" role="list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleLinkClick(item.id)}
                    className="neo-footer__link"
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href="https://github.com/Aztrix-MBM"
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
                href="https://www.linkedin.com/in/muthubala-murugan-814049383"
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

          <div>
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
