import { useEffect, useState } from 'react';

/**
 * Returns the id of the section currently in view, so the navbar can
 * highlight the matching link while the user scrolls.
 *
 * @param {string[]} sectionIds  ids of the sections to watch
 */
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      // A section counts as "active" when it crosses a thin band
      // just below the top of the screen.
      { rootMargin: '-30% 0px -65% 0px' },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
