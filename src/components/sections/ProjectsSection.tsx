import React, { useState } from 'react';
import { projectsData, Project } from '../../data/projects';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectModal } from '../ui/ProjectModal';
import { IconArrowUpRight, IconGithub } from '../ui/Icons';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('ALL');

  const categories = ['ALL', 'AI / GenAI', 'Web App', 'IoT / Hardware', 'Computer Vision'];

  const filteredProjects = filter === 'ALL'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Heading */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
          <SectionHeading
            title="FEATURED PROJECTS"
            star={true}
            note="Some of the things I've built..."
          />

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`neo-badge ${filter === cat ? 'neo-badge--yellow' : ''}`}
                style={{
                  cursor: 'pointer',
                  borderWidth: 2,
                  padding: '6px 14px',
                  fontSize: '0.75rem',
                  transition: 'all 150ms ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              {/* Screenshot Preview */}
              <div className="project-card__screen">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="project-card__img"
                  loading="lazy"
                />

                <button
                  type="button"
                  className="project-card__top-cta"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Open details for ${project.title}`}
                  title="View Case Study"
                >
                  <IconArrowUpRight size={18} />
                </button>
              </div>

              {/* Card Body */}
              <div className="project-card__body">
                <span
                  className="neo-badge project-card__tag"
                  style={{
                    backgroundColor: project.categoryTag.includes('AI')
                      ? 'var(--color-purple)'
                      : project.categoryTag.includes('WEB')
                      ? 'var(--color-yellow)'
                      : project.categoryTag.includes('IOT')
                      ? 'var(--color-green)'
                      : 'var(--color-pink)',
                    color: project.categoryTag.includes('WEB') || project.categoryTag.includes('IOT')
                      ? 'var(--color-black)'
                      : 'var(--color-white)'
                  }}
                >
                  {project.categoryTag}
                </span>

                <h3 className="project-card__title">{project.title}</h3>

                <p className="project-card__oneliner">{project.oneLiner}</p>

                {/* Tech Stack Chips */}
                <div className="project-card__stack" aria-label="Technologies used">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span key={tech} className="project-card__stack-tag">
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="project-card__stack-tag" style={{ color: 'var(--color-muted)' }}>
                      +{project.stack.length - 4} more
                    </span>
                  )}
                </div>

                {/* Card Actions Footer */}
                <div className="project-card__actions">
                  <button
                    type="button"
                    className="project-card__btn-view"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>VIEW PROJECT</span>
                    <IconArrowUpRight size={16} />
                  </button>

                  <div className="project-card__links-group">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link-icon"
                      aria-label={`${project.title} GitHub repository`}
                      title="GitHub Repository"
                    >
                      <IconGithub size={16} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link-icon"
                      aria-label={`${project.title} live demo`}
                      title="Live Demo"
                    >
                      <IconArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Playful Neo-Brutalist Doodles on Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '2.5rem',
            paddingTop: '1rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
          aria-hidden="true"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 800 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 14c4-6 10-8 16-4" />
              <polyline points="14 19 20 18 19 12" />
            </svg>
            <span>LEARN BUILD IMPROVE</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 800 }}>
            <span>★ NEXT BIG IDEA ...</span>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
