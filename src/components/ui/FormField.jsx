import { useId } from 'react';
import { useField, useFormikContext } from 'formik';
import { ChevronDown } from 'lucide-react';

/**
 * A labelled form control with an inline error message, connected to Formik.
 * Must be rendered inside a <Formik> form.
 *
 * Renders an <input> by default, or a <select> / <textarea> via `as`.
 * Accessibility:
 *  - the <label> is linked to the control with htmlFor/id
 *  - an error sets aria-invalid and is announced via aria-describedby
 */
export default function FormField({
  label,
  name,
  as = 'input',
  options = [],
  optional = false,
  className = '',
  ...controlProps
}) {
  // useField gives us this field's value/onChange/onBlur and its error from Formik.
  const [field, meta] = useField(name);
  const { submitCount } = useFormikContext();

  // Only show errors once the user has tried to submit. After that they update
  // live as the user types. (Showing them on blur would push the submit button
  // down mid-click, so the click could miss it.)
  const error = submitCount > 0 ? meta.error : undefined;

  // useId gives each field a unique id, even if two forms share field names.
  const id = useId();
  const errorId = `${id}-error`;

  const controlClasses =
    'block w-full rounded-xl border bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 ' +
    'transition-colors focus:outline-none focus:ring-4 ' +
    (error
      ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
      : 'border-slate-300 hover:border-slate-400 focus:border-indigo-500 focus:ring-indigo-100');

  const sharedProps = {
    ...field, // name, value, onChange, onBlur
    id,
    className: controlClasses,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? errorId : undefined,
    ...controlProps,
  };

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-slate-800">
        {label}
        {optional && <span className="font-normal text-slate-500"> (optional)</span>}
      </label>

      {as === 'select' && (
        <div className="relative">
          <select {...sharedProps} className={`${controlClasses} cursor-pointer appearance-none pr-10`}>
            <option value="" disabled>
              Select…
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute top-1/2 right-3 size-5 -translate-y-1/2 text-slate-500"
            aria-hidden="true"
          />
        </div>
      )}

      {as === 'textarea' && <textarea rows={4} {...sharedProps} />}

      {as === 'input' && <input {...sharedProps} />}

      {error && (
        <p id={errorId} className="mt-1.5 text-sm font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
