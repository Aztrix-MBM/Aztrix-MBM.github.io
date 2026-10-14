import React from 'react';
import { personalData } from '../../data/personal';
import { toolsRibbon } from '../../data/skills';
import {
  IconArrowUpRight,
  IconDownload,
  IconGithub,
  IconLinkedin,
  IconTwitter,
  IconMail,
  IconFolder,
  IconCode,
  IconTrophy,
  IconUsers
} from '../ui/Icons';

export const HeroSection: React.FC = () => {
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'folder':
        return <IconFolder size={22} />;
      case 'code':
        return <IconCode size={22} />;
      case 'trophy':
        return <IconTrophy size={22} />;
      case 'users':
        return <IconUsers size={22} />;
      default:
        return <IconFolder size={22} />;
    }
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <IconGithub size={20} />;
      case 'linkedin':
        return <IconLinkedin size={20} />;
      case 'twitter':
        return <IconTwitter size={20} />;
      case 'mail':
        return <IconMail size={20} />;
      default:
        return <IconMail size={20} />;
    }
  };

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      const navOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      window.history.pushState(null, '', '#projects');
    }
  };

  return (
    <section id="home" className="section" style={{ paddingTop: 'clamp(2rem, 4vw, 3.5rem)', paddingBottom: '2rem' }}>
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Intro copy & Actions */}
          <div className="hero-left">
            <div className="hero-badge-tag">
              <span className="hero-badge-tag__dot" aria-hidden="true" />
              <span>{personalData.badge}</span>
            </div>

            <h1 className="hero-headline">
              <span className="hero-headline__first">{personalData.firstName}</span>
              <span className="hero-headline__last">
                {personalData.lastName}
                <span className="hero-headline__highlight" aria-hidden="true" />
              </span>
            </h1>

            <p className="hero-pitch">
              {personalData.pitch}
            </p>

            <div className="hero-actions">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="neo-btn neo-btn--yellow"
              >
                <span>VIEW MY WORK</span>
                <IconArrowUpRight size={18} />
              </a>

              <a
                href="/resume/Muthubala_Resume.pdf"
                download="Muthubala_Resume.pdf"
                className="neo-btn"
                aria-label="Download Muthubala Resume PDF"
              >
                <span>DOWNLOAD RESUME</span>
                <IconDownload size={18} />
              </a>
            </div>

            {/* Social Links Row */}
            <div className="hero-socials" aria-label="Social Profiles">
              {personalData.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-btn"
                  aria-label={`Open ${social.name} profile (${social.handle})`}
                  title={social.name}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Center, Profile & Brutalist Accents */}
          <div className="hero-visual-wrapper">
            <div className="hero-photo-container">
              {/* Handwritten Note: Build Learn Create Repeat */}
              <div className="hero-handwritten-note">
                <span>Build</span>
                <span>Learn</span>
                <span>Create</span>
                <span>Repeat</span>
                <svg width="40" height="28" viewBox="0 0 50 35" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 5 C 25 15, 30 25, 45 28" />
                  <polyline points="38 28 45 28 43 21" />
                </svg>
              </div>

              {/* Tilted Neo-Brutalist Banner: IDEAS INTO REALITY. */}
              <div className="hero-tilted-banner">
                <div className="hero-tilted-banner__text">
                  <div>IDEAS</div>
                  <div>INTO</div>
                  <div>REALITY.</div>
                </div>
              </div>

              {/* Sticker Backdrop */}
              <div className="hero-photo-backdrop" aria-hidden="true" />

              {/* Photo Frame */}
              <div className="hero-photo-frame">
                <img
                  src="/images/profile.jpg"
                  alt="Portrait of Muthu Balamurugan"
                  width="360"
                  height="450"
                  className="hero-photo-img"
                  fetchPriority="high"
                />
              </div>

              {/* Wireframe Mesh & Disciplines */}
              <div className="hero-wireframe-badge" aria-hidden="true">
                {/* 3D Wireframe Orb SVG */}
                <svg width="80" height="50" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <ellipse cx="50" cy="30" rx="46" ry="26" />
                  <ellipse cx="50" cy="30" rx="30" ry="26" strokeDasharray="3 3" />
                  <ellipse cx="50" cy="30" rx="14" ry="26" />
                  <line x1="4" y1="30" x2="96" y2="30" />
                  <line x1="12" y1="18" x2="88" y2="18" strokeDasharray="2 2" />
                  <line x1="12" y1="42" x2="88" y2="42" strokeDasharray="2 2" />
                </svg>
                <div className="hero-disciplines-list">
                  {personalData.disciplines.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Neo-Brutalist Stat Cards */}
        <div className="hero-stats-row">
          {personalData.stats.map((stat) => (
            <div key={stat.label} className="hero-stat-card">
              <div className="hero-stat-card__icon" aria-hidden="true">
                {getStatIcon(stat.icon)}
              </div>
              <div className="hero-stat-card__val">{stat.value}</div>
              <div className="hero-stat-card__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Ribbon / Lavender Marquee Band */}
      <div className="tools-ribbon-wrapper">
        <div className="container">
          <div className="tools-ribbon-container">
            <div className="tools-ribbon__header">
              <span>TOOLS I USE</span>
              <svg width="32" height="16" viewBox="0 0 32 16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="2" y1="8" x2="28" y2="8" />
                <polyline points="20 2 28 8 20 14" />
              </svg>
            </div>

            <div className="tools-ribbon__list" role="region" aria-label="Tools and Technologies">
              {toolsRibbon.map((tool) => (
                <div key={tool.name} className="tool-badge-card" title={`${tool.name} - ${tool.category}`}>
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 2,
                      backgroundColor: tool.color,
                      display: 'inline-block',
                      border: '1.5px solid #000'
                    }}
                    aria-hidden="true"
                  />
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>

            <div className="tools-ribbon__footer-note">
              <svg width="24" height="24" viewBox="0 0 30 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M25 4 C 15 2, 8 12, 4 16" />
                <polyline points="10 16 4 16 6 10" />
              </svg>
              <span>SAME TOOLS, DIFFERENT POSSIBILITIES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
