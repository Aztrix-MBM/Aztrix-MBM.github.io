import React from 'react';
import { certificationsData } from '../../data/certifications';
import { SectionHeading } from '../ui/SectionHeading';
import { IconArrowUpRight } from '../ui/Icons';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="section" style={{ backgroundColor: 'var(--color-canvas-alt)' }}>
      <div className="container">
        <SectionHeading
          tag="ACADEMIC &amp; INDUSTRY HONORS"
          title="CERTIFICATIONS"
          star={true}
          note="Verified learning credentials"
          tagDotColor="var(--color-green)"
        />

        <div className="certs-grid">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div className="cert-card__top">
                <div className="cert-card__meta">
                  <span className="cert-card__issuer">{cert.issuer}</span>
                  <span className="cert-card__year">{cert.year}</span>
                </div>

                <h3 className="cert-card__title">{cert.title}</h3>

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
                  aria-label={`Verify ${cert.title} credential`}
                >
                  <span>VERIFY CREDENTIAL</span>
                  <IconArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
