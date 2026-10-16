import React, { useState } from 'react';
import { personalData } from '../../data/personal';
import { SectionHeading } from '../ui/SectionHeading';
import {
  IconDownload,
  IconMapPin,
  IconGlobe,
  IconMail,
  IconGithub,
  IconLinkedin
} from '../ui/Icons';

export const ResumeSection: React.FC = () => {
  const [activeSheet, setActiveSheet] = useState<'all' | '1' | '2'>('all');

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="section">
      <div className="container">
        <SectionHeading
          title="RESUME DOSSIER"
          star={true}
          note="Executive 2-page curriculum vitae"
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
              <span>PAGE 01 • PROFILE &amp; BUILDS</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeSheet === '2'}
              onClick={() => setActiveSheet('2')}
              className={`resume-tab-btn ${activeSheet === '2' ? 'resume-tab-btn--active' : ''}`}
            >
              <span>PAGE 02 • CREDENTIALS &amp; SKILLS</span>
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
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn neo-btn--yellow"
              aria-label="Download Muthubala 2-Page Resume PDF"
            >
              <span>DOWNLOAD 2-PAGE PDF</span>
              <IconDownload size={18} />
            </a>
          </div>
        </div>

        {/* =========================================================================
            RESUME SHEET 1: ABOUT, EDUCATION, PROJECTS, EXPERIENCE & SKILLS
            ========================================================================= */}
        {(activeSheet === 'all' || activeSheet === '1') && (
          <article className="ref-resume-sheet" id="resume-sheet-1" aria-label="Resume Page 1: Profile & Builds">
            {/* Header */}
            <header className="ref-resume-header">
              <h2 className="ref-resume-name">{personalData.name}</h2>
              <p className="ref-resume-subtitle">B.Tech Artificial Intelligence &amp; Data Science Student</p>
              <hr className="ref-resume-divider" />
            </header>

            {/* ABOUT ME (Full-Width) */}
            <section className="ref-resume-section">
              <h3 className="ref-resume-section-title">ABOUT ME</h3>
              <p className="ref-resume-prose">
                Motivated and detail oriented B.Tech Artificial Intelligence and Data Science student with a strong passion
                for software development, artificial intelligence, system architecture, and modern technologies.
                Continuously learning through certifications, technical projects, and hands-on experience. Dedicated to
                solving complex problems, optimizing systems, and building innovative software solutions while
                expanding technical expertise and professional skills.
              </p>
              <hr className="ref-resume-divider" />
            </section>

            {/* Two Columns Grid */}
            <div className="ref-resume-grid">
              {/* Left Column */}
              <div className="ref-resume-col-left">
                {/* CONTACT */}
                <div className="ref-resume-block">
                  <h3 className="ref-resume-col-title">CONTACT</h3>
                  <ul className="ref-resume-contact-list">
                    <li>
                      <IconMapPin size={16} />
                      <span>{personalData.location}</span>
                    </li>
                    <li>
                      <IconGlobe size={16} />
                      <a href="https://aztrix-mbm.github.io/" target="_blank" rel="noopener noreferrer">
                        https://aztrix-mbm.github.io/
                      </a>
                    </li>
                    <li>
                      <IconMail size={16} />
                      <a href={`mailto:${personalData.email}`}>{personalData.email}</a>
                    </li>
                    <li>
                      <IconGithub size={16} />
                      <a href="https://github.com/Aztrix-MBM" target="_blank" rel="noopener noreferrer">
                        github.com/Aztrix-MBM
                      </a>
                    </li>
                    <li>
                      <IconLinkedin size={16} />
                      <a href="https://www.linkedin.com/in/muthubala-murugan-814049383" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/muthubalamurugan
                      </a>
                    </li>
                  </ul>
                </div>

                {/* EDUCATION */}
                <div className="ref-resume-block">
                  <h3 className="ref-resume-col-title">EDUCATION</h3>
                  
                  <div className="ref-resume-edu-item">
                    <h4 className="ref-resume-inst-name">{personalData.education.institution.toUpperCase()} (RIT)</h4>
                    <p className="ref-resume-inst-degree">B.TECH - ARTIFICIAL INTELLIGENCE AND DATA SCIENCE</p>
                    <p className="ref-resume-period">{personalData.education.period}</p>
                    <ul className="ref-resume-bullet-list">
                      <li>Currently pursuing Second Year with {personalData.education.cgpa} CGPA.</li>
                      <li>
                        Pursuing specialization in Artificial Intelligence, Data Science, Machine Learning,
                        Programming, and Software Development.
                      </li>
                    </ul>
                  </div>

                  <div className="ref-resume-edu-item" style={{ marginTop: '1.25rem' }}>
                    <h4 className="ref-resume-inst-name">{personalData.secondaryEducation.school.toUpperCase()}</h4>
                    <p className="ref-resume-inst-degree">{personalData.secondaryEducation.degree.toUpperCase()}</p>
                    <p className="ref-resume-period">{personalData.secondaryEducation.period}</p>
                    <ul className="ref-resume-bullet-list">
                      <li>Completed Primary, Secondary, and Higher Secondary Education.</li>
                      <li>Graduated in {personalData.secondaryEducation.completionYear}.</li>
                    </ul>
                  </div>
                </div>

                {/* LANGUAGES */}
                <div className="ref-resume-block">
                  <h3 className="ref-resume-col-title">LANGUAGES</h3>
                  <ul className="ref-resume-bullet-list">
                    <li>Tamil</li>
                    <li>English</li>
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="ref-resume-col-right">
                {/* PROJECTS */}
                <div className="ref-resume-block">
                  <h3 className="ref-resume-col-title">PROJECTS</h3>
                  
                  <div className="ref-resume-project-item">
                    <h4 className="ref-resume-proj-title">
                      EchoVerse AI <span className="ref-resume-dev-badge">(In Development)</span>
                    </h4>
                    <ul className="ref-resume-bullet-list">
                      <li>
                        Developed a generative AI platform featuring dynamic timeline simulation across branching realities,
                        low-latency streaming narrative intelligence, and interactive divergence visualization.
                      </li>
                      <li className="ref-resume-tech-line">Tech: Python, FastAPI, React, Google Gemini API</li>
                    </ul>
                  </div>

                  <div className="ref-resume-project-item">
                    <h4 className="ref-resume-proj-title">
                      AI Student OS <span className="ref-resume-dev-badge">(In Development)</span>
                    </h4>
                    <ul className="ref-resume-bullet-list">
                      <li>
                        Built a complete student productivity ecosystem with course management, automated
                        syllabus-to-flashcard generation, and adaptive study scheduling.
                      </li>
                      <li className="ref-resume-tech-line">Tech: Next.js, TypeScript, PostgreSQL, Supabase</li>
                    </ul>
                  </div>

                  <div className="ref-resume-project-item">
                    <h4 className="ref-resume-proj-title">
                      Motor Health Monitor <span className="ref-resume-dev-badge">(In Development)</span>
                    </h4>
                    <ul className="ref-resume-bullet-list">
                      <li>
                        Designing an edge IoT condition monitoring system with 3-axis vibration spectral analysis,
                        contactless thermal sensing, and predictive anomaly alerting.
                      </li>
                      <li className="ref-resume-tech-line">Tech: Python, Arduino, Embedded C++, MQTT</li>
                    </ul>
                  </div>
                </div>

                {/* TECHNICAL EXPERIENCE */}
                <div className="ref-resume-block">
                  <h3 className="ref-resume-col-title">TECHNICAL EXPERIENCE</h3>
                  <div className="ref-resume-exp-head">
                    <span className="ref-resume-exp-title">Self Learning &amp; Personal Projects</span>
                    <span className="ref-resume-exp-period">2025 — Present</span>
                  </div>
                  <ul className="ref-resume-bullet-list">
                    <li>Developed multiple software and AI projects using Python, React, and modern full-stack architectures.</li>
                    <li>Completed 29+ professional certifications across AI, data science, cybersecurity, and software development.</li>
                    <li>Continuously enhancing expertise in machine learning, database systems, system architecture, and modern software engineering.</li>
                    <li>Exploring full-stack development, agentic AI pipelines, and backend technologies.</li>
                  </ul>
                </div>

                {/* SKILLS */}
                <div className="ref-resume-block">
                  <h3 className="ref-resume-col-title">SKILLS</h3>
                  <div className="ref-resume-skills-two-col">
                    <ul className="ref-resume-bullet-list">
                      <li>Artificial Intelligence Fundamentals</li>
                      <li>Data Science Fundamentals</li>
                      <li>Python Programming (Advanced)</li>
                      <li>Java Programming (Advanced)</li>
                      <li>MySQL Architecture (Advanced)</li>
                    </ul>
                    <ul className="ref-resume-bullet-list">
                      <li>Advanced Computing</li>
                      <li>System Architecture</li>
                      <li>Code Analysis</li>
                      <li>Problem Solving</li>
                      <li>System Optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* =========================================================================
            RESUME SHEET 2: PROFILE, INTERESTS, CERTIFICATIONS & ACHIEVEMENTS
            ========================================================================= */}
        {(activeSheet === 'all' || activeSheet === '2') && (
          <article className="ref-resume-sheet" id="resume-sheet-2" aria-label="Resume Page 2: Credentials & Skills" style={{ marginTop: activeSheet === 'all' ? '2.5rem' : 0 }}>
            {/* Header */}
            <header className="ref-resume-header">
              <h2 className="ref-resume-name">{personalData.name.toUpperCase()}</h2>
              <p className="ref-resume-subtitle">B.Tech Artificial Intelligence &amp; Data Science Student</p>
              <div className="ref-resume-contact-bar">
                <span>{personalData.email}</span>
                <span className="ref-resume-bar-sep">•</span>
                <span>https://aztrix-mbm.github.io/</span>
                <span className="ref-resume-bar-sep">•</span>
                <span>{personalData.location}</span>
              </div>
              <hr className="ref-resume-divider" />
            </header>

            {/* Two Columns Grid */}
            <div className="ref-resume-grid">
              {/* Left Column */}
              <div className="ref-resume-col-left">
                {/* PROFILE */}
                <div className="ref-resume-block">
                  <h3 className="ref-resume-col-title">PROFILE</h3>
                  <p className="ref-resume-prose">
                    B.Tech Artificial Intelligence and Data Science student passionate about AI, software development,
                    backend engineering, databases, and system architecture. Strong foundation in Python, Java, MySQL,
                    React, and modern development practices with hands-on experience through personal projects and 29+
                    professional certifications.
                  </p>
                </div>

                {/* INTERESTS */}
                <div className="ref-resume-block">
                  <h3 className="ref-resume-col-title">INTERESTS</h3>
                  <ul className="ref-resume-bullet-list">
                    <li>Artificial Intelligence</li>
                    <li>Software Development</li>
                    <li>Machine Learning</li>
                    <li>Data Science</li>
                    <li>System Architecture</li>
                    <li>Database Systems</li>
                    <li>Open Source</li>
                    <li>Modern Computing</li>
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="ref-resume-col-right">
                {/* CERTIFICATIONS */}
                <div className="ref-resume-block">
                  <h3 className="ref-resume-col-title">CERTIFICATIONS</h3>
                  <p style={{ fontWeight: 700, color: '#334155', marginBottom: '0.45rem', fontSize: '0.85rem' }}>
                    Professional Certifications
                  </p>
                  <ul className="ref-resume-bullet-list">
                    <li>HP LIFE — Data Science &amp; Analytics Certified</li>
                    <li>HP LIFE — Introduction to Cybersecurity Awareness</li>
                    <li>Infosys Springboard — Explore Machine Learning using Python</li>
                    <li>Forage — Cyber Job Simulation Experience</li>
                    <li>Forage — Controllers Job Simulation</li>
                    <li>Microsoft Applied Skills (GitHub Copilot, AI Chat, AI Research)</li>
                    <li>Google Developer Community Participation</li>
                    <li>Python, Java &amp; MySQL Technical Accreditations</li>
                  </ul>
                  <div className="ref-resume-highlight-box">
                    29+ Industry Certifications Completed
                  </div>
                </div>

                {/* PROFESSIONAL SKILLS */}
                <div className="ref-resume-block">
                  <h3 className="ref-resume-col-title">PROFESSIONAL SKILLS</h3>
                  <ul className="ref-resume-bullet-list">
                    <li>English Communication</li>
                    <li>Typewriting</li>
                    <li>Critical Thinking</li>
                    <li>Analytical Thinking</li>
                    <li>Team Collaboration</li>
                    <li>Time Management</li>
                    <li>Continuous Learning</li>
                  </ul>
                </div>

                {/* ACHIEVEMENTS */}
                <div className="ref-resume-block">
                  <h3 className="ref-resume-col-title">ACHIEVEMENTS</h3>
                  <ul className="ref-resume-bullet-list">
                    <li>29+ Professional Certifications Completed</li>
                    <li>Academic Performance: 7.8 CGPA at Ramco Institute of Technology</li>
                    <li>Founder of Aztrix &amp; Co — Independent Software &amp; AI Development Initiative</li>
                    <li>Active Technical Event &amp; Hackathon Participant</li>
                    <li>Google Developer Community Participant</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        )}
      </div>
    </section>
  );
};
