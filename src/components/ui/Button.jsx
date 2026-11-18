/**
 * One button component for the whole site, so every button looks and
 * behaves consistently.
 *
 * - Pass `href` to render a link (e.g. "#contact" to scroll to a section).
 * - Otherwise it renders a <button>.
 */
const BASE =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 cursor-pointer ' +
  'disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.98]';

const VARIANTS = {
  primary: 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/25 hover:bg-indigo-700 hover:shadow-md',
  secondary: 'bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300',
  ghost: 'text-slate-700 hover:bg-slate-100 hover:text-slate-900',
  light: 'bg-white text-indigo-700 hover:bg-indigo-50',
};

const SIZES = {
  md: 'min-h-11 px-5 text-sm',
  lg: 'min-h-12 px-6 text-base',
};

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const classes = `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
