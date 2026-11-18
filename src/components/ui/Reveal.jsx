import { useInView } from '../../hooks/useInView';

/**
 * Fades and slides its children up when they scroll into view.
 * `delay` (in ms) lets items in a grid appear one after another.
 */
export default function Reveal({ children, delay = 0, className = '' }) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}
