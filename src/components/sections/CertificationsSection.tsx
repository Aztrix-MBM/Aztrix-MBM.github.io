import React, { useState } from 'react';
import { certificationsData, CertificateCategory } from '../../data/certifications';
import { SectionHeading } from '../ui/SectionHeading';
import { IconArrowUpRight } from '../ui/Icons';

type FilterType = 'ALL' | CertificateCategory;

interface CategoryTab {
  id: FilterType;
  label: string;
  icon: string;
}

export const CertificationsSection: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('ALL');

  const categories: CategoryTab[] = [
    { id: 'ALL', label: 'ALL', icon: '✦' },
    { id: 'course', label: 'COURSE CERTIFICATES', icon: '🎓' },
    { id: 'event', label: 'EVENT CERTIFICATES', icon: '🎪' },
    { id: 'competition', label: 'COMPETITION CERTIFICATES', icon: '🏆' },
  ];

  const counts: Record<FilterType, number> = {
    ALL: certificationsData.length,
    course: certificationsData.filter((c) => c.category === 'course').length,
    event: certificationsData.filter((c) => c.category === 'event').length,
    competition: certificationsData.filter((c) => c.category === 'competition').length,
  };

  const filteredCerts = filter === 'ALL'
    ? certificationsData
    : certificationsData.filter((c) => c.category === filter);

  const getActiveTabTitle = () => {
    switch (filter) {
      case 'course': return 'Course Certificates';
      case 'event': return 'Event & Workshop Certificates';
      case 'competition': return 'Competition & Hackathon Certificates';
      default: return 'Certificates';
    }
  };

  return (
    <section id="certifications" className="section" style={{ backgroundColor: 'var(--color-canvas-alt)' }}>
      <div className="container">
        {/* Header with Title and Filter Tabs */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <SectionHeading
            title="CERTIFICATIONS"
            star={true}
            note="Verified learning credentials & achievements"
          />

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
            {categories.map((cat) => {
              const isActive = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setFilter(cat.id)}
                  className={`neo-badge ${isActive ? 'neo-badge--yellow' : ''}`}
                  style={{
                    cursor: 'pointer',
                    borderWidth: 2,
                    padding: '6px 14px',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 150ms ease'
                  }}
                  aria-pressed={isActive}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                  <span
                    style={{
                      marginLeft: '2px',
                      backgroundColor: isActive ? 'var(--color-black)' : 'rgba(0, 0, 0, 0.08)',
                      color: isActive ? 'var(--color-white)' : 'var(--color-black)',
                      padding: '1px 6px',
                      borderRadius: '999px',
                      fontSize: '0.65rem',
                      fontWeight: 700
                    }}
                  >
                    {counts[cat.id]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="certs-grid">
          {filteredCerts.length > 0 ? (
            filteredCerts.map((cert) => (
              <div key={cert.id} className="cert-card">
                <div className="cert-card__top">
                  <div className="cert-card__meta">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <span className={`cert-card__category-badge cert-card__category-badge--${cert.category}`}>
                        {cert.category === 'course' ? '🎓 COURSE' : cert.category === 'event' ? '🎪 EVENT' : '🏆 COMPETITION'}
                      </span>
                      <span className="cert-card__issuer">{cert.issuer}</span>
                    </div>
                    <span className="cert-card__year">{cert.year}</span>
                  </div>

                  <h3 className="cert-card__title" style={{ marginTop: '0.4rem' }}>{cert.title}</h3>

                  <div className="cert-card__skills">
                    {cert.skillsCovered.map((skill) => (
                      <span key={skill} className="cert-card__skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-card__verify-link"
                    aria-label={`View ${cert.title} certificate`}
                  >
                    <span>VIEW CERTIFICATE</span>
                    <IconArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div
              style={{
                gridColumn: '1 / -1',
                backgroundColor: 'var(--color-white)',
                border: 'var(--border-width) solid var(--color-black)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-md)',
                padding: '3rem 2rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <div className="neo-badge neo-badge--yellow" style={{ fontSize: '0.85rem' }}>
                ✦ READY TO ADD
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>No {getActiveTabTitle()} Added Yet</h3>
              <p style={{ maxWidth: '520px', color: 'var(--color-muted)', fontSize: '0.95rem', margin: '0 auto', lineHeight: 1.5 }}>
                Share your certificate details (Title, Organization/College, Year, Verification link) to showcase them under this category!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

