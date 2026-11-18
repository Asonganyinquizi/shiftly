import { useEffect, useRef } from 'react';
import { CircleCheck } from 'lucide-react';

/**
 * Shown after a form is submitted successfully.
 * role="status" makes screen readers announce it; focus moves to the
 * heading so keyboard users land on the new content.
 */
export default function SuccessMessage({ title, children, action }) {
  const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <div role="status" className="flex flex-col items-center py-6 text-center">
      <span className="grid size-16 place-items-center rounded-full bg-emerald-100 text-emerald-600">
        <CircleCheck className="size-9" aria-hidden="true" />
      </span>
      <h3
        ref={headingRef}
        tabIndex={-1}
        className="mt-5 text-xl font-bold text-slate-900 focus:outline-none"
      >
        {title}
      </h3>
      <p className="mt-2 max-w-sm leading-relaxed text-slate-600">{children}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
