import { useId } from 'react';

/**
 * The Shiftly brand mark: an "S" drawn as a route through the week,
 * ending in a green "clock-in" dot. Same artwork as brand/logo-mark.svg.
 */
export default function LogoMark({ className = '' }) {
  // Unique gradient id, so two logos on one page (navbar + footer) don't clash.
  const gradientId = useId();

  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#4338CA" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={`url(#${gradientId})`} />
      <path
        d="M44 18H27a7 7 0 0 0 0 14h10a7 7 0 0 1 0 14H30"
        fill="none"
        stroke="#fff"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="19.5" cy="46" r="4.5" fill="#34D399" />
    </svg>
  );
}
