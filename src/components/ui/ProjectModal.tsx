import React, { useEffect } from 'react';
import { Project } from '../../data/projects';
import { IconArrowUpRight, IconGithub, IconClose, IconCheck } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // ESC key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && project) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      className={`neo-modal-backdrop ${project ? 'is-open' : ''}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="neo-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="neo-modal__header">
          <div>
            <span
              className="neo-badge"
              style={{ backgroundColor: project.accentColor }}
            >
              {project.categoryTag}
            </span>
            <h3
              id="modal-project-title"
              style={{ fontSize: 'var(--text-xl)', fontWeight: 900, marginTop: '8px' }}
            >
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            className="neo-modal__close"
            onClick={onClose}
            aria-label="Close project modal"
          >
            <IconClose size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="neo-modal__body">
          {/* Image Screenshot */}
          <div className="neo-modal__img-wrap">
            <img
              src={project.image}
              alt={`Interface screenshot of ${project.title}`}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              loading="lazy"
            />
          </div>

          {/* Quick Meta Row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              padding: '14px',
              backgroundColor: 'var(--color-white)',
              border: 'var(--border-width-sm) solid var(--color-black)',
              borderRadius: 'var(--radius-sm)',
              boxShadow: 'var(--shadow-xs)'
            }}
          >
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-muted)', display: 'block' }}>
                MY ROLE
              </span>
              <strong style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem' }}>
                {project.role}
              </strong>
            </div>
            <div style={{ marginLeft: 'auto' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-muted)', display: 'block' }}>
                PRIMARY TECH
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
                {project.stack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '2px 6px',
                      backgroundColor: 'var(--color-canvas)',
                      border: '1px solid var(--color-black)',
                      borderRadius: '4px'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Problem Statement */}
          <div className="neo-modal__section">
            <h4 className="neo-modal__section-title">
              <span style={{ width: 8, height: 8, backgroundColor: 'var(--color-pink)', border: '2px solid #000', display: 'inline-block' }} />
              Problem Solved
            </h4>
            <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.6, color: '#1f2937' }}>
              {project.problemSolved}
            </p>
          </div>

          {/* Key Engineering Features */}
          <div className="neo-modal__section">
            <h4 className="neo-modal__section-title">
              <span style={{ width: 8, height: 8, backgroundColor: 'var(--color-green)', border: '2px solid #000', display: 'inline-block' }} />
              Key Features &amp; Architecture
            </h4>
            <ul className="neo-modal__features-list">
              {project.features.map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: 'var(--text-sm)', lineHeight: 1.5 }}>
                  <span style={{ color: 'var(--color-black)', marginTop: '2px' }}>
                    <IconCheck size={16} />
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Deep Dive */}
          <div className="neo-modal__section">
            <h4 className="neo-modal__section-title">
              <span style={{ width: 8, height: 8, backgroundColor: 'var(--color-purple)', border: '2px solid #000', display: 'inline-block' }} />
              Architecture &amp; System Design
            </h4>
            <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.6, color: '#374151' }}>
              {project.details.architecture}
            </p>
          </div>

          {/* Actions */}
          <div className="neo-modal__actions">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn neo-btn--yellow"
            >
              <span>EXPLORE LIVE DEMO</span>
              <IconArrowUpRight size={18} />
            </a>

            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn neo-btn--white"
            >
              <IconGithub size={18} />
              <span>SOURCE REPO</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
