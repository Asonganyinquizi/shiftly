import { CalendarCheck } from 'lucide-react';
import { BRAND } from '../../data/content';

/** Product logo: icon + name. Links back to the top of the page. */
export default function Logo({ light = false }) {
  return (
    <a
      href="#top"
      className="inline-flex items-center gap-2 rounded-lg"
      aria-label={`${BRAND.name} – back to top`}
    >
      <span className="grid size-9 place-items-center rounded-xl bg-indigo-600 text-white shadow-sm">
        <CalendarCheck className="size-5" aria-hidden="true" />
      </span>
      <span className={`text-xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}>
        {BRAND.name}
      </span>
    </a>
  );
}
