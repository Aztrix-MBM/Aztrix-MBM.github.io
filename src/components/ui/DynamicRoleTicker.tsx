import React, { useState, useEffect, useRef } from 'react';

interface DynamicRoleTickerProps {
  roles: string[];
  interval?: number;
}

export const DynamicRoleTicker: React.FC<DynamicRoleTickerProps> = ({
  roles,
  interval = 2800
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animState, setAnimState] = useState<'visible' | 'exit' | 'enter'>('visible');
  const animTimeoutRef = useRef<number | null>(null);
  const enterTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!roles || roles.length <= 1) return;

    const cycleInterval = setInterval(() => {
      // 1. Exit: Current role slides up and disappears
      setAnimState('exit');

      // 2. Switch role index and reposition below the container
      animTimeoutRef.current = window.setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        setAnimState('enter');

        // 3. Enter: Smoothly slide up into view from bottom
        enterTimeoutRef.current = window.setTimeout(() => {
          setAnimState('visible');
        }, 30);
      }, 280);
    }, interval);

    return () => {
      clearInterval(cycleInterval);
      if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
      if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
    };
  }, [roles, interval]);

  if (!roles || roles.length === 0) return null;

  return (
    <span className="hero-role-flipper" aria-live="polite">
      <span className={`hero-role-text hero-role-text--${animState}`}>
        {roles[currentIndex]}
      </span>
    </span>
  );
};
