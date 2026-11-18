import { useEffect, useRef, useState } from 'react';

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Tells you when an element scrolls into view (once).
 * Used by <Reveal> to fade content in as the user scrolls.
 *
 * If the user prefers reduced motion, the element is treated as
 * visible straight away, so nothing animates.
 */
export function useInView() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(prefersReducedMotion);

  useEffect(() => {
    const element = ref.current;
    if (!element || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // only animate the first time
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isInView]);

  return [ref, isInView];
}
