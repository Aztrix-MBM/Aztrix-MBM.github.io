import React, { useState, useEffect, useRef } from 'react';
import { IconArrowUpRight, IconMenu, IconClose } from './Icons';

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: 'HOME', href: '#home', id: 'home' },
  { label: 'ABOUT', href: '#about', id: 'about' },
  { label: 'SKILLS', href: '#skills', id: 'skills' },
  { label: 'PROJECTS', href: '#projects', id: 'projects' },
  { label: 'CERTS', href: '#certifications', id: 'certifications' },
  { label: 'RESUME', href: '#resume', id: 'resume' },
  { label: 'CONTACT', href: '#contact', id: 'contact' }
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  // Active section spy on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <>
      <header className="neo-navbar">
        <nav className="neo-navbar__inner" aria-label="Main Navigation">
          <a
            href="#home"
            className="neo-navbar__logo"
            onClick={(e) => handleNavClick(e, '#home')}
            aria-label="Muthu Balamurugan Home"
          >
            M.
          </a>

          {/* Desktop Nav Links */}
          <ul className="neo-navbar__links" role="list">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`neo-navbar__link ${isActive ? 'neo-navbar__link--active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Action Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="neo-navbar__cta"
            >
              <span>LET'S TALK</span>
              <IconArrowUpRight size={16} />
            </a>

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
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`neo-drawer__link ${isActive ? 'neo-drawer__link--active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div style={{ marginTop: '24px' }}>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="neo-btn neo-btn--yellow"
            style={{ width: '100%' }}
          >
            <span>GET IN TOUCH</span>
            <IconArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </>
  );
};
