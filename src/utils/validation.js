/**
 * Simple form validation helpers.
 *
 * Each `validate...` function takes the form values and returns an object
 * of error messages keyed by field name. An empty object means "valid".
 */

// Good enough for a front-end check: something@something.something
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value) {
  return EMAIL_PATTERN.test(value.trim());
}

function validateName(value) {
  if (!value.trim()) return 'Please enter your name.';
  if (value.trim().length < 2) return 'Name must be at least 2 characters.';
  return '';
}

function validateEmail(value) {
  if (!value.trim()) return 'Please enter your email address.';
  if (!isValidEmail(value)) return 'Please enter a valid email, e.g. name@company.com.';
  return '';
}

function validateRequired(value, message) {
  return value.trim() ? '' : message;
}

/** Removes fields with no error so the result is easy to check. */
function onlyErrors(errors) {
  return Object.fromEntries(Object.entries(errors).filter(([, message]) => message));
}

/** Rules for the "Get started" sign-up form in the modal. */
export function validateSignup(values) {
  return onlyErrors({
    name: validateName(values.name),
    email: validateEmail(values.email),
    company: validateRequired(values.company, 'Please enter your business name.'),
    plan: validateRequired(values.plan, 'Please choose a plan.'),
  });
}

/** Rules for the "Book a demo" form in the contact section. */
export function validateDemo(values) {
  return onlyErrors({
    name: validateName(values.name),
    email: validateEmail(values.email),
    company: validateRequired(values.company, 'Please enter your company name.'),
    teamSize: validateRequired(values.teamSize, 'Please select your team size.'),
  });
}
