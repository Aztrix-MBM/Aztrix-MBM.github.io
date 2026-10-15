import React from 'react';
import { personalData } from '../../data/personal';
import { SectionHeading } from '../ui/SectionHeading';
import { IconDownload } from '../ui/Icons';

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="section">
      <div className="container">
        <SectionHeading
          title="RESUME SUMMARY"
          star={true}
          note="Live summary &amp; direct download"
        />

        <div className="resume-wrapper">
          {/* Header with Download Action */}
          <div className="resume-header">
            <div className="resume-header__info">
              <h3 className="resume-header__name">{personalData.name}</h3>
              <p className="resume-header__role">
                {personalData.role} • {personalData.location}
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#444', marginTop: '4px' }}>
                Contact: {personalData.email}
              </p>
            </div>

            <div>
              <a
                href="/resume/Muthubala_Resume.pdf"
                download="Muthubala_Resume.pdf"
                className="neo-btn neo-btn--yellow"
                aria-label="Download Muthubala Resume as PDF"
              >
                <span>DOWNLOAD RESUME PDF</span>
                <IconDownload size={18} />
              </a>
            </div>
          </div>

          {/* Resume Body */}
          <div className="resume-body-grid">
            {/* Left Column: Education & Achievements */}
            <div className="resume-block">
              <h4 className="resume-block__title">
                <span style={{ width: 10, height: 10, backgroundColor: 'var(--color-purple)', border: '2px solid #000', display: 'inline-block' }} />
                Education &amp; Academics
              </h4>

              <div className="resume-item">
                <div className="resume-item__head">
                  <span className="resume-item__title">{personalData.education.degree}</span>
                  <span className="resume-item__period">{personalData.education.period}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700 }}>
                  {personalData.education.field} • {personalData.education.institution}
                </p>
                <p className="resume-item__desc">
                  Academic Performance: <strong>{personalData.education.cgpa}</strong>. Focus on Machine Learning, Distributed Algorithms, Computer Vision, and Microcontroller Systems.
                </p>
              </div>

              <h4 className="resume-block__title" style={{ marginTop: '1rem' }}>
                <span style={{ width: 10, height: 10, backgroundColor: 'var(--color-yellow)', border: '2px solid #000', display: 'inline-block' }} />
                Honors &amp; Hackathons
              </h4>

              <div className="resume-item">
                <div className="resume-item__head">
                  <span className="resume-item__title">2x Collegiate Hackathon Finalist</span>
                  <span className="resume-item__period">2024 — 2025</span>
                </div>
                <p className="resume-item__desc">
                  Ranked in top teams for rapid generative AI prototype development and IoT anomaly tracking hardware integrations under tight 24-hour sprint limits.
                </p>
              </div>

              <div className="resume-item">
                <div className="resume-item__head">
                  <span className="resume-item__title">Technical Symposium Contributor</span>
                  <span className="resume-item__period">2024</span>
                </div>
                <p className="resume-item__desc">
                  Demonstrated hands-free assistive vision controller (Eye Moment) and edge condition monitoring during regional university technical exhibition.
                </p>
              </div>
            </div>

            {/* Right Column: Project Experience & Skills */}
            <div className="resume-block">
              <h4 className="resume-block__title">
                <span style={{ width: 10, height: 10, backgroundColor: 'var(--color-green)', border: '2px solid #000', display: 'inline-block' }} />
                Engineering Builds
              </h4>

              <div className="resume-item">
                <div className="resume-item__head">
                  <span className="resume-item__title">EchoVerse AI Platform</span>
                  <span className="resume-item__period">2025</span>
                </div>
                <p className="resume-item__desc">
                  Engineered temporal scenario simulation engine using FastAPI, React, and Gemini 2.0 streaming completions with dynamic timeline branching graphs.
                </p>
              </div>

              <div className="resume-item">
                <div className="resume-item__head">
                  <span className="resume-item__title">AI Student Operating System</span>
                  <span className="resume-item__period">2025</span>
                </div>
                <p className="resume-item__desc">
                  Architected comprehensive academic hub in Next.js &amp; Supabase integrating automated flashcards generation and task management.
                </p>
              </div>

              <div className="resume-item">
                <div className="resume-item__head">
                  <span className="resume-item__title">Industrial Motor Health Monitor</span>
                  <span className="resume-item__period">2024</span>
                </div>
                <p className="resume-item__desc">
                  Integrated Arduino, thermal sensors, and vibration accelerometers over MQTT to predict electrical motor bearing anomalies in real-time.
                </p>
              </div>

              <div className="resume-item">
                <div className="resume-item__head">
                  <span className="resume-item__title">Eye Moment Assistive Controller</span>
                  <span className="resume-item__period">2024</span>
                </div>
                <p className="resume-item__desc">
                  Developed hands-free gaze-driven cursor control using OpenCV and 3D face mesh landmark heuristics at 60 FPS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
