import { useState } from 'react';

/** Fake network delay so the user sees a "sending" state (no backend needed). */
const FAKE_SUBMIT_DELAY_MS = 900;

/**
 * Reusable form state for the sign-up and demo forms.
 *
 * - Tracks field values and validation errors.
 * - Validates every field when the form is submitted.
 * - Once a field has shown an error, it re-validates as the user types,
 *   so the message disappears as soon as the input becomes valid.
 *
 * Note: we deliberately don't validate on blur. An error appearing on blur
 * pushes the submit button down while it is being clicked, so the click
 * can miss the button entirely.
 *
 * @param {object} initialValues  starting value for each field
 * @param {(values: object) => object} validate  returns { fieldName: message }
 */
export function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  function handleChange(event) {
    const { name, value } = event.target;
    const nextValues = { ...values, [name]: value };
    setValues(nextValues);

    // If this field is currently showing an error, re-check it as the user types.
    if (errors[name]) {
      setErrors({ ...errors, [name]: validate(nextValues)[name] });
    }
  }

  /** Returns an onSubmit handler that only calls `onValid` if all fields pass. */
  function handleSubmit(onValid) {
    return (event) => {
      event.preventDefault();

      const allErrors = validate(values);
      setErrors(allErrors);

      const firstInvalidField = Object.keys(allErrors)[0];
      if (firstInvalidField) {
        // Move focus to the first problem so keyboard/screen-reader users find it.
        event.currentTarget.elements.namedItem(firstInvalidField)?.focus();
        return;
      }

      setStatus('submitting');
      setTimeout(() => {
        setStatus('success');
        onValid?.(values);
      }, FAKE_SUBMIT_DELAY_MS);
    };
  }

  function reset() {
    setValues(initialValues);
    setErrors({});
    setStatus('idle');
  }

  return { values, errors, status, handleChange, handleSubmit, reset };
}
