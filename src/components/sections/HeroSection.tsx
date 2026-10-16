import React from 'react';
import { personalData } from '../../data/personal';
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
import { DynamicRoleTicker } from '../ui/DynamicRoleTicker';

interface HeroSectionProps {
  onNavigate?: (tabId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
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

  const handleWorkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section tab-content-enter" style={{ paddingTop: 'clamp(2rem, 4vw, 3.5rem)', paddingBottom: '3rem' }}>
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Intro copy & Actions */}
          <div className="hero-left">
            <div className="hero-badge-tag">
              <span className="hero-badge-tag__dot" aria-hidden="true" />
              <DynamicRoleTicker roles={personalData.dynamicRoles} interval={2800} />
            </div>

            <h1 className="hero-headline">
              <span className="hero-headline__last">
                {personalData.firstName}
                <span className="hero-headline__highlight" aria-hidden="true" />
              </span>
            </h1>

            <p className="hero-pitch">
              {personalData.pitch}
            </p>

            <div className="hero-actions">
              <button
                type="button"
                onClick={handleWorkClick}
                className="neo-btn neo-btn--yellow"
              >
                <span>VIEW MY WORK</span>
                <IconArrowUpRight size={18} />
              </button>

              <a
                href="/resume/Muthubala_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
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
                  alt="Portrait of Muthubalamurugan"
                  width="360"
                  height="450"
                  className="hero-photo-img"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Neo-Brutalist Stat Cards */}
        <div className="hero-stats-row">
          {personalData.stats.map((stat) => (
            <div
              key={stat.label}
              className="hero-stat-card"
              style={{ cursor: onNavigate ? 'pointer' : 'default' }}
              onClick={() => {
                if (onNavigate) {
                  if (stat.label.includes('PROJECTS')) onNavigate('projects');
                  else if (stat.label.includes('TECH')) onNavigate('skills');
                  else if (stat.label.includes('HACKATHON') || stat.label.includes('CGPA')) onNavigate('about');
                }
              }}
              title={onNavigate ? `View ${stat.label} details` : undefined}
            >
              <div className="hero-stat-card__icon" aria-hidden="true">
                {getStatIcon(stat.icon)}
              </div>
              <div className="hero-stat-card__val">{stat.value}</div>
              <div className="hero-stat-card__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
