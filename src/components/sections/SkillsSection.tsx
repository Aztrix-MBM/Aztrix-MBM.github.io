import React from 'react';
import { skillsCategories } from '../../data/skills';
import { SectionHeading } from '../ui/SectionHeading';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          tag="TECHNICAL TOOLSET"
          title="SKILLS &amp; CAPABILITIES"
          star={true}
          note="Grouped by domain expertise"
          tagDotColor="var(--color-purple)"
        />

        <div className="skills-grid">
          {skillsCategories.map((category) => (
            <div key={category.title} className="skill-category-card">
              <div className="skill-category-card__header">
                <div>
                  <h3 className="skill-category-card__title">{category.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)', marginTop: '2px' }}>
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="skill-chips-group">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`skill-chip ${skill.highlight ? 'skill-chip--highlight' : ''}`}
                  >
                    <span>{skill.name}</span>
                    <span className="skill-chip__level">• {skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
