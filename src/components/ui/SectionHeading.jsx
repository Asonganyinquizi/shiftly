/**
 * Consistent heading block used at the top of each section:
 * small label ("eyebrow"), main title, and an optional description.
 */
export default function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl font-bold tracking-tight text-balance text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-pretty text-slate-600">{description}</p>
      )}
    </div>
  );
}
