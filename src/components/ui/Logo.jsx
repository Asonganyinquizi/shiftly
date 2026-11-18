import LogoMark from './LogoMark';
import { BRAND } from '../../data/content';

/** Product logo: icon + name. Links back to the top of the page. */
export default function Logo({ light = false }) {
  return (
    <a
      href="#top"
      className="inline-flex items-center gap-2.5 rounded-lg"
      aria-label={`${BRAND.name} – back to top`}
    >
      <LogoMark className="size-9 shadow-sm shadow-indigo-600/30 rounded-[0.6rem]" />
      <span className={`text-xl font-extrabold tracking-[-0.03em] ${light ? 'text-white' : 'text-slate-900'}`}>
        {BRAND.name}
      </span>
    </a>
  );
}
