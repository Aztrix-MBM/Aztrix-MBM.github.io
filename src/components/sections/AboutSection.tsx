import React from 'react';
import { personalData } from '../../data/personal';
import { SectionHeading } from '../ui/SectionHeading';
import { IconCheck } from '../ui/Icons';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--color-canvas-alt)' }}>
      <div className="container">
        <SectionHeading
          title="ABOUT ME"
          star={true}
          note="Engineer, builder & problem solver"
        />

        <div className="about-grid">
          {/* Left Column: Short Story & What I Build */}
          <div className="about-story-card neo-card">
            <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 900 }}>
              Engineering Ideas Into High-Performance Software
            </h3>

            {personalData.story.map((paragraph, index) => (
              <p key={index} style={{ fontSize: 'var(--text-base)', lineHeight: 1.7, color: '#262626' }}>
                {paragraph}
              </p>
            ))}

            <div style={{ marginTop: '1rem', borderTop: 'var(--border-width-sm) solid var(--color-black)', paddingTop: '1.25rem' }}>
              <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                What I Focus On Building:
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                <div style={{ padding: '12px', backgroundColor: 'var(--color-canvas)', border: '2px solid var(--color-black)', borderRadius: 'var(--radius-sm)' }}>
                  <strong style={{ display: 'block', fontSize: '0.85rem', marginBottom: '4px' }}>
                    01. Web Applications
                  </strong>
                  <span style={{ fontSize: '0.8rem', color: '#555' }}>
                    Snappy, accessible frontend architectures and reactive full-stack web platforms.
                  </span>
                </div>

                <div style={{ padding: '12px', backgroundColor: 'var(--color-canvas)', border: '2px solid var(--color-black)', borderRadius: 'var(--radius-sm)' }}>
                  <strong style={{ display: 'block', fontSize: '0.85rem', marginBottom: '4px' }}>
                    02. AI &amp; Generative Systems
                  </strong>
                  <span style={{ fontSize: '0.8rem', color: '#555' }}>
                    Multi-agent pipelines, temporal simulation, and contextual LLM applications.
                  </span>
                </div>

                <div style={{ padding: '12px', backgroundColor: 'var(--color-canvas)', border: '2px solid var(--color-black)', borderRadius: 'var(--radius-sm)' }}>
                  <strong style={{ display: 'block', fontSize: '0.85rem', marginBottom: '4px' }}>
                    03. IoT &amp; Embedded Logic
                  </strong>
                  <span style={{ fontSize: '0.8rem', color: '#555' }}>
                    Microcontroller firmware, real-time sensor streams, and edge telemetry.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Credentials Highlight */}
          <div className="about-education-card">
            <span className="neo-badge about-education-badge">
              ACADEMIC FOUNDATION
            </span>

            <div>
              <h3 className="about-education__title">{personalData.education.degree}</h3>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', marginTop: '4px' }}>
                {personalData.education.field}
              </p>
              <p className="about-education__inst" style={{ marginTop: '4px' }}>
                {personalData.education.institution}
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#333', marginTop: '2px' }}>
                Timeline: {personalData.education.period}
              </p>
            </div>

            <div className="about-education__cgpa">
              <span>CUMULATIVE CGPA:</span>
              <strong style={{ fontSize: '1.1rem', color: 'var(--color-yellow)' }}>
                {personalData.education.cgpa}
              </strong>
            </div>

            <div style={{ borderTop: '2px solid #000', paddingTop: '1rem', marginTop: '0.5rem' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Academic Highlights:
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {personalData.education.highlights.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', lineHeight: 1.4 }}>
                    <span style={{ marginTop: '2px' }}>
                      <IconCheck size={16} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
