import React from 'react';

interface SectionHeadingProps {
  tag?: string;
  title: string;
  star?: boolean;
  note?: string;
  tagDotColor?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  star = true,
  note,
  tagDotColor = 'var(--color-purple)'
}) => {
  return (
    <div className="section-header">
      {tag && (
        <div className="section-header__tag">
          <span
            className="section-header__tag-dot"
            style={{ backgroundColor: tagDotColor }}
            aria-hidden="true"
          />
          <span>{tag}</span>
        </div>
      )}
      <div className="section-header__title-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <h2 className="section-header__title">
          <span>{title}</span>
          {star && <span className="section-header__star" aria-hidden="true">★</span>}
        </h2>
        {note && (
          <div className="section-header__handwritten">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
            <span>{note}</span>
          </div>
        )}
      </div>
    </div>
  );
};
