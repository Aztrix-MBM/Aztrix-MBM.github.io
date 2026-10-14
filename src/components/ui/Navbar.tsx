import React, { useState, useEffect, useRef } from 'react';
import { IconArrowUpRight, IconMenu, IconClose } from './Icons';

export interface NavItem {
  label: string;
  id: string;
}

export const navItems: NavItem[] = [
  { label: 'HOME', id: 'home' },
  { label: 'ABOUT', id: 'about' },
  { label: 'SKILLS', id: 'skills' },
  { label: 'PROJECTS', id: 'projects' },
  { label: 'CERTS', id: 'certifications' },
  { label: 'RESUME', id: 'resume' },
  { label: 'CONTACT', id: 'contact' }
];

interface NavbarProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onSelectTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        toggleBtnRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const handleItemClick = (tabId: string) => {
    onSelectTab(tabId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="neo-navbar">
        <nav className="neo-navbar__inner" aria-label="Main Navigation">
          <button
            type="button"
            className="neo-navbar__logo"
            onClick={() => handleItemClick('home')}
            aria-label="Muthu Balamurugan Home"
            style={{ background: 'none', border: 'none', borderRight: 'var(--border-width) solid var(--color-black)', cursor: 'pointer' }}
          >
            M.
          </button>

          {/* Desktop Nav Links */}
          <ul className="neo-navbar__links" role="list">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleItemClick(item.id)}
                    className={`neo-navbar__link ${isActive ? 'neo-navbar__link--active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                    style={{ background: 'none', cursor: 'pointer' }}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right Action Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              type="button"
              onClick={() => handleItemClick('contact')}
              className="neo-navbar__cta"
            >
              <span>LET'S TALK</span>
              <IconArrowUpRight size={16} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              ref={toggleBtnRef}
              type="button"
              className="neo-navbar__toggle"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-drawer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <IconClose size={22} /> : <IconMenu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`neo-drawer-backdrop ${isMobileMenuOpen ? 'is-open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        ref={drawerRef}
        className={`neo-drawer ${isMobileMenuOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div>
          <div className="neo-drawer__header">
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1.4rem' }}>
              MUTHU.B
            </span>
            <button
              type="button"
              className="neo-btn"
              style={{ minWidth: 40, minHeight: 40, padding: 8 }}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <IconClose size={20} />
            </button>
          </div>

          <ul className="neo-drawer__links" role="list">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleItemClick(item.id)}
                    className={`neo-drawer__link ${isActive ? 'neo-drawer__link--active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                    style={{ width: '100%', textAlign: 'left', cursor: 'pointer' }}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div style={{ marginTop: '24px' }}>
          <button
            type="button"
            onClick={() => handleItemClick('contact')}
            className="neo-btn neo-btn--yellow"
            style={{ width: '100%', cursor: 'pointer' }}
          >
            <span>GET IN TOUCH</span>
            <IconArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </>
  );
};
