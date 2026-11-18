/**
 * Form validation rules, written as Yup schemas.
 *
 * Formik runs these schemas (via its `validationSchema` prop) and turns
 * any failures into an `errors` object keyed by field name.
 */
import * as Yup from 'yup';

// Good enough for a front-end check: something@something.something
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Rules shared by both forms.
const name = Yup.string()
  .trim()
  .required('Please enter your name.')
  .min(2, 'Name must be at least 2 characters.');

const email = Yup.string()
  .trim()
  .required('Please enter your email address.')
  .matches(EMAIL_PATTERN, 'Please enter a valid email, e.g. name@company.com.');

/** Rules for the "Get started" sign-up form in the modal. */
export const signupSchema = Yup.object({
  name,
  email,
  company: Yup.string().trim().required('Please enter your business name.'),
  plan: Yup.string().required('Please choose a plan.'),
});

/** Rules for the "Book a demo" form in the contact section. */
export const demoSchema = Yup.object({
  name,
  email,
  company: Yup.string().trim().required('Please enter your company name.'),
  teamSize: Yup.string().required('Please select your team size.'),
  message: Yup.string().trim(), // optional
});
