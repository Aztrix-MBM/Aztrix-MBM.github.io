import React, { useState } from 'react';
import { personalData } from '../../data/personal';
import { certificationsData } from '../../data/certifications';
import { SectionHeading } from '../ui/SectionHeading';
import { IconDownload, IconArrowUpRight } from '../ui/Icons';

export const ResumeSection: React.FC = () => {
  const [activeSheet, setActiveSheet] = useState<'all' | '1' | '2'>('all');

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="section">
      <div className="container">
        <SectionHeading
          title="RESUME SUMMARY"
          star={true}
          note="Authentic 2-page engineering dossier"
        />

        {/* Resume Control Toolbar */}
        <div className="resume-toolbar">
          <div className="resume-toolbar__tabs" role="tablist" aria-label="Resume Page View">
            <button
              type="button"
              role="tab"
              aria-selected={activeSheet === 'all'}
              onClick={() => setActiveSheet('all')}
              className={`resume-tab-btn ${activeSheet === 'all' ? 'resume-tab-btn--active' : ''}`}
            >
              <span>BOTH PAGES (01 &amp; 02)</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeSheet === '1'}
              onClick={() => setActiveSheet('1')}
              className={`resume-tab-btn ${activeSheet === '1' ? 'resume-tab-btn--active' : ''}`}
            >
              <span>PAGE 01 • TECHNICAL PROFILE</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeSheet === '2'}
              onClick={() => setActiveSheet('2')}
              className={`resume-tab-btn ${activeSheet === '2' ? 'resume-tab-btn--active' : ''}`}
            >
              <span>PAGE 02 • CREDENTIALS &amp; BUILDS</span>
            </button>
          </div>

          <div className="resume-toolbar__actions">
            <button
              type="button"
              onClick={handlePrint}
              className="neo-btn"
              title="Print or save as PDF using your browser dialog"
              aria-label="Print or Save as PDF"
            >
              <span>PRINT / SAVE PDF</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
            </button>

            <a
              href="/resume/Muthubala_Resume.pdf"
              download="Muthubala_Resume.pdf"
              className="neo-btn neo-btn--yellow"
              aria-label="Download Muthubala 2-Page Resume PDF"
            >
              <span>DOWNLOAD 2-PAGE PDF</span>
              <IconDownload size={18} />
            </a>
          </div>
        </div>

        {/* =========================================================================
            RESUME SHEET 1: TECHNICAL PROFILE & SYSTEMS ARCHITECTURE
            ========================================================================= */}
        {(activeSheet === 'all' || activeSheet === '1') && (
          <article className="resume-sheet" id="resume-sheet-1" aria-label="Resume Page 1: Technical Profile">
            {/* Top Sheet Header Strip */}
            <div className="resume-sheet__top-banner">
              <span className="resume-sheet__meta-mono">
                ENGINEERING DOSSIER // RAMCO INSTITUTE OF TECHNOLOGY // BATCH 2025 — 2029
              </span>
              <span className="neo-badge neo-badge--yellow" style={{ fontSize: '0.75rem', fontWeight: 900 }}>
                SHEET 01 / 02
              </span>
            </div>

            {/* Candidate Identity Header */}
            <header className="resume-sheet__header">
              <div className="resume-sheet__identity">
                <h3 className="resume-sheet__name">{personalData.name}</h3>
                <p className="resume-sheet__role">
                  ARTIFICIAL INTELLIGENCE &amp; DATA SCIENCE ENGINEER
                </p>
              </div>

              {/* Contact & Social Pill Row */}
              <div className="resume-sheet__contact-strip">
                <span className="resume-sheet__pill">
                  <strong>LOCATION:</strong> Tamil Nadu, India
                </span>
                <span className="resume-sheet__pill">
                  <strong>EMAIL:</strong> {personalData.email}
                </span>
                <a
                  href="https://github.com/Aztrix-MBM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-sheet__pill resume-sheet__pill--link"
                >
                  <strong>GITHUB:</strong> AZTRIX
                </a>
                <a
                  href="https://www.linkedin.com/in/muthubala-murugan-814049383"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-sheet__pill resume-sheet__pill--link"
                >
                  <strong>LINKEDIN:</strong> linkedin.com/in/muthubala-murugan-814049383
                </a>
              </div>
            </header>

            {/* Section 1: Executive Profile Summary */}
            <section className="resume-section-block">
              <h4 className="resume-section-title">
                <span className="resume-section-num">01</span>
                <span>EXECUTIVE PROFILE SUMMARY</span>
              </h4>
              <p className="resume-prose">
                Artificial Intelligence &amp; Data Science student at <strong>Ramco Institute of Technology</strong> with demonstrated expertise in engineering high-impact, full-stack systems. Experienced in developing low-latency generative AI pipelines, real-time computer vision interfaces, and industrial IoT condition monitoring solutions. Dedicated to shipping resilient software architectures with crisp user experience and measurable performance metrics.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
                <span className="neo-badge">Generative AI &amp; Agent Pipelines</span>
                <span className="neo-badge">Full-Stack Reactive Architectures</span>
                <span className="neo-badge">Embedded IoT &amp; Telemetry</span>
                <span className="neo-badge">Computer Vision Systems</span>
              </div>
            </section>

            {/* Section 2: Education & Academic Credentials */}
            <section className="resume-section-block">
              <h4 className="resume-section-title">
                <span className="resume-section-num">02</span>
                <span>EDUCATION &amp; ACADEMICS</span>
              </h4>
              <div className="resume-edu-card">
                <div className="resume-edu-card__header">
                  <div>
                    <h5 className="resume-edu-card__degree">{personalData.education.degree}</h5>
                    <p className="resume-edu-card__field">{personalData.education.field}</p>
                    <p className="resume-edu-card__inst">
                      <strong>{personalData.education.institution}</strong> • Tamil Nadu
                    </p>
                  </div>
                  <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
                    <span className="resume-edu-card__period">{personalData.education.period}</span>
                    <span className="neo-badge neo-badge--yellow" style={{ fontSize: '0.85rem' }}>
                      CUMULATIVE CGPA: {personalData.education.cgpa}
                    </span>
                  </div>
                </div>
                <div style={{ marginTop: '12px', borderTop: '2px solid #000', paddingTop: '10px' }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                    Core Coursework &amp; Competencies:
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {["Machine Learning", "Neural Networks", "Computer Vision", "Data Structures & Algorithms", "Database Management", "Distributed Systems"].map((c) => (
                      <span key={c} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', backgroundColor: '#fff', border: '1.5px solid #000', padding: '2px 8px', borderRadius: 4 }}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Technical Skills Matrix */}
            <section className="resume-section-block">
              <h4 className="resume-section-title">
                <span className="resume-section-num">03</span>
                <span>CORE TECHNICAL SKILLS MATRIX</span>
              </h4>
              <div className="resume-skills-grid">
                <div className="resume-skill-box">
                  <span className="resume-skill-box__title">PROGRAMMING LANGUAGES</span>
                  <p className="resume-skill-box__text">
                    <strong>Python</strong> (Advanced), <strong>TypeScript / JavaScript (ES6+)</strong> (Advanced), <strong>C++</strong> (Intermediate), <strong>Java</strong> (Intermediate), <strong>SQL</strong> (Proficient)
                  </p>
                </div>

                <div className="resume-skill-box">
                  <span className="resume-skill-box__title">AI / ML &amp; COMPUTER VISION</span>
                  <p className="resume-skill-box__text">
                    <strong>PyTorch</strong>, <strong>OpenCV</strong>, <strong>Scikit-Learn</strong>, <strong>Google Gemini API</strong>, <strong>MediaPipe</strong>, <strong>LangChain</strong>, <strong>NumPy &amp; Pandas</strong>
                  </p>
                </div>

                <div className="resume-skill-box">
                  <span className="resume-skill-box__title">WEB &amp; BACKEND SYSTEMS</span>
                  <p className="resume-skill-box__text">
                    <strong>React.js</strong>, <strong>Next.js (App Router)</strong>, <strong>FastAPI</strong>, <strong>Node.js</strong>, <strong>Express</strong>, <strong>Supabase</strong>, <strong>PostgreSQL</strong>, <strong>RESTful APIs</strong>
                  </p>
                </div>

                <div className="resume-skill-box">
                  <span className="resume-skill-box__title">IOT, HARDWARE &amp; TOOLS</span>
                  <p className="resume-skill-box__text">
                    <strong>Arduino Microcontrollers</strong>, <strong>ESP32</strong>, <strong>MQTT Protocol</strong>, <strong>Sensor Telemetry</strong>, <strong>Git &amp; GitHub Actions</strong>, <strong>Docker</strong>, <strong>Linux</strong>
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Key Engineering Builds (Part 1) */}
            <section className="resume-section-block">
              <h4 className="resume-section-title">
                <span className="resume-section-num">04</span>
                <span>HIGH-IMPACT ENGINEERING BUILDS (PART 1)</span>
              </h4>

              <div className="resume-project-card">
                <div className="resume-project-card__head">
                  <div>
                    <h5 className="resume-project-card__title">EchoVerse AI — Temporal Multiverse Simulation Platform</h5>
                    <p className="resume-project-card__stack">
                      React • FastAPI • Python • Google Gemini 2.0 API • Server-Sent Events (SSE)
                    </p>
                  </div>
                  <span className="neo-badge neo-badge--yellow">2025</span>
                </div>
                <ul className="resume-bullet-list">
                  <li>
                    Architected a generative branching simulation engine capable of exploring counterfactual timelines with sub-200ms streaming latency.
                  </li>
                  <li>
                    Engineered state-tree serialization in Python/FastAPI allowing instant rollback, scenario branching, and automated prompt synthesis.
                  </li>
                  <li>
                    Designed interactive Neo-Brutalist telemetry graphs for visualizing multiple reality outcomes simultaneously.
                  </li>
                </ul>
              </div>

              <div className="resume-project-card" style={{ marginTop: '12px' }}>
                <div className="resume-project-card__head">
                  <div>
                    <h5 className="resume-project-card__title">AI Student OS — Academic Intelligence &amp; Productivity Workspace</h5>
                    <p className="resume-project-card__stack">
                      Next.js 14 • TypeScript • Supabase • PostgreSQL • TailwindCSS
                    </p>
                  </div>
                  <span className="neo-badge neo-badge--pink">2025</span>
                </div>
                <ul className="resume-bullet-list">
                  <li>
                    Architected an all-in-one student workspace featuring automated syllabus ingestion, AI flashcard synthesis, and assignment management.
                  </li>
                  <li>
                    Integrated real-time query velocity analytics and course performance tracking using PostgreSQL Row-Level Security (RLS).
                  </li>
                  <li>
                    Built responsive, accessible frontend interface ensuring seamless access across desktop and mobile devices.
                  </li>
                </ul>
              </div>
            </section>

            {/* Sheet 1 Footer */}
            <footer className="resume-sheet__footer">
              <span>RAMCO INSTITUTE OF TECHNOLOGY • B.TECH ARTIFICIAL INTELLIGENCE &amp; DATA SCIENCE</span>
              <span className="resume-sheet__page-tag">PAGE 01 OF 02</span>
            </footer>
          </article>
        )}

        {/* =========================================================================
            RESUME SHEET 2: HARDWARE, CREDENTIALS & EXPERIENCE
            ========================================================================= */}
        {(activeSheet === 'all' || activeSheet === '2') && (
          <article className="resume-sheet" id="resume-sheet-2" aria-label="Resume Page 2: Credentials and Experience">
            {/* Top Sheet Header Strip */}
            <div className="resume-sheet__top-banner">
              <span className="resume-sheet__meta-mono">
                AUTHENTICATED INDUSTRY DOSSIER // MUTHUBALAMURUGAN
              </span>
              <span className="neo-badge neo-badge--purple" style={{ fontSize: '0.75rem', fontWeight: 900 }}>
                SHEET 02 / 02
              </span>
            </div>

            {/* Candidate Mini Header */}
            <header className="resume-sheet__header">
              <div className="resume-sheet__identity">
                <h3 className="resume-sheet__name" style={{ fontSize: '1.4rem' }}>{personalData.name}</h3>
                <p className="resume-sheet__role">
                  HARDWARE SYSTEMS, VERIFIED CREDENTIALS &amp; COMPETITIVE HONORS
                </p>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span className="neo-badge" style={{ backgroundColor: '#000', color: '#fff', fontSize: '0.75rem' }}>
                  VERIFIED DOSSIER // LAST UPDATED: 2026
                </span>
              </div>
            </header>

            {/* Section 5: Engineering Projects (Part 2 - Hardware & Vision) */}
            <section className="resume-section-block">
              <h4 className="resume-section-title">
                <span className="resume-section-num">05</span>
                <span>HIGH-IMPACT ENGINEERING BUILDS (PART 2 - HARDWARE &amp; VISION)</span>
              </h4>

              <div className="resume-project-card">
                <div className="resume-project-card__head">
                  <div>
                    <h5 className="resume-project-card__title">Industrial Motor Health Monitor — Edge IoT Telemetry</h5>
                    <p className="resume-project-card__stack">
                      Arduino • Embedded C++ • Python • MQTT Protocol • Accelerometer • Thermistor
                    </p>
                  </div>
                  <span className="neo-badge neo-badge--green">2024</span>
                </div>
                <ul className="resume-bullet-list">
                  <li>
                    Engineered non-invasive condition-monitoring system sampling 3-axis vibration FFT spectrum and temperature metrics.
                  </li>
                  <li>
                    Streamed sensor telemetry over lightweight MQTT broker to central dashboard, triggering automated alert thresholds for bearing wear.
                  </li>
                  <li>
                    Prevented mechanical degradation and motor downtime through predictive threshold rules and hardware fail-safes.
                  </li>
                </ul>
              </div>

              <div className="resume-project-card" style={{ marginTop: '12px' }}>
                <div className="resume-project-card__head">
                  <div>
                    <h5 className="resume-project-card__title">Eye Moment — Hands-Free Assistive Gaze Vision Controller</h5>
                    <p className="resume-project-card__stack">
                      Python • OpenCV • MediaPipe • PyAutoGUI • NumPy
                    </p>
                  </div>
                  <span className="neo-badge neo-badge--yellow">2024</span>
                </div>
                <ul className="resume-bullet-list">
                  <li>
                    Developed accessibility controller tracking 468 3D facial landmarks for responsive, hands-free mouse cursor steering at 60 FPS.
                  </li>
                  <li>
                    Engineered ergonomic blink-detection gestures for click actuation, calibrated to minimize eye strain and eliminate false clicks.
                  </li>
                  <li>
                    Designed specifically to empower individuals with motor impairments to operate computers with precision.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 6: Verified Industry Certifications */}
            <section className="resume-section-block">
              <h4 className="resume-section-title">
                <span className="resume-section-num">06</span>
                <span>VERIFIED INDUSTRY CERTIFICATIONS</span>
              </h4>
              <p style={{ fontSize: '0.8rem', color: '#555', marginBottom: '10px', fontFamily: 'var(--font-mono)' }}>
                Directly authenticated via Google Drive credential repositories:
              </p>

              <div className="resume-certs-list">
                {certificationsData.map((cert, index) => (
                  <div key={cert.id} className="resume-cert-row">
                    <div className="resume-cert-row__info">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <span className="resume-cert-row__num">0{index + 1}</span>
                        <strong className="resume-cert-row__title">{cert.title}</strong>
                        <span className="neo-badge" style={{ backgroundColor: cert.badgeColor, padding: '2px 8px', fontSize: '0.7rem' }}>
                          {cert.issuer}
                        </span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#666' }}>
                          ({cert.year})
                        </span>
                      </div>
                      <p className="resume-cert-row__skills">
                        Competencies: {cert.skillsCovered.join(' • ')}
                      </p>
                    </div>

                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neo-btn"
                      style={{ padding: '4px 10px', fontSize: '0.72rem', minHeight: 32, whiteSpace: 'nowrap' }}
                      aria-label={`Verify ${cert.title} on Google Drive`}
                    >
                      <span>VIEW CREDENTIAL</span>
                      <IconArrowUpRight size={13} />
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Practical Job Simulations & Industry Training */}
            <section className="resume-section-block">
              <h4 className="resume-section-title">
                <span className="resume-section-num">07</span>
                <span>VIRTUAL INDUSTRY JOB SIMULATIONS</span>
              </h4>

              <div className="resume-sim-grid">
                <div className="resume-sim-card">
                  <div className="resume-sim-card__header">
                    <strong>Cyber Job Simulation</strong>
                    <span className="neo-badge">Forage • 2024</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#333', marginTop: '6px' }}>
                    Executed hands-on enterprise security scenarios including security log analysis, threat intelligence evaluation, vulnerability assessment, and incident response planning.
                  </p>
                </div>

                <div className="resume-sim-card">
                  <div className="resume-sim-card__header">
                    <strong>Controllers Job Simulation</strong>
                    <span className="neo-badge">Forage • 2024</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#333', marginTop: '6px' }}>
                    Practiced corporate governance, financial control assessments, process automation evaluations, and internal compliance auditing simulations.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Hackathons & Honors */}
            <section className="resume-section-block">
              <h4 className="resume-section-title">
                <span className="resume-section-num">08</span>
                <span>HACKATHONS, COMPETITIVE HONORS &amp; LEADERSHIP</span>
              </h4>

              <div className="resume-honors-list">
                <div className="resume-honor-item">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: 10, height: 10, backgroundColor: 'var(--color-yellow)', border: '2px solid #000', display: 'inline-block' }} />
                    <strong style={{ fontSize: '0.88rem' }}>2x Collegiate Hackathon Finalist</strong>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#666' }}>(2024 — 2025)</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#333', marginTop: '4px', paddingLeft: '18px' }}>
                    Ranked among top finalist teams in collegiate hackathons for architecting production-grade generative AI and edge IoT prototypes within strict 24-hour rapid sprint limits.
                  </p>
                </div>

                <div className="resume-honor-item" style={{ marginTop: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: 10, height: 10, backgroundColor: 'var(--color-green)', border: '2px solid #000', display: 'inline-block' }} />
                    <strong style={{ fontSize: '0.88rem' }}>Technical Symposium Contributor &amp; Exhibitor</strong>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#666' }}>(2024)</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#333', marginTop: '4px', paddingLeft: '18px' }}>
                    Presented live interactive demonstrations of edge computer vision hardware and assistive condition telemetry during regional university technical exhibition.
                  </p>
                </div>
              </div>
            </section>

            {/* Sheet 2 Footer */}
            <footer className="resume-sheet__footer">
              <span>MUTHUBALAMURUGAN • RAMCO INSTITUTE OF TECHNOLOGY • END OF DOSSIER</span>
              <span className="resume-sheet__page-tag">PAGE 02 OF 02</span>
            </footer>
          </article>
        )}
      </div>
    </section>
  );
};
