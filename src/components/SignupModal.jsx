import { useState } from 'react';
import { Formik, Form } from 'formik';
import Modal from './ui/Modal';
import Button from './ui/Button';
import FormField from './ui/FormField';
import FocusFirstError from './ui/FocusFirstError';
import SuccessMessage from './ui/SuccessMessage';
import { signupSchema } from '../utils/validation';
import { fakeRequest } from '../utils/fakeRequest';
import { PLANS } from '../data/content';

const PLAN_OPTIONS = PLANS.map((plan) => ({ value: plan.id, label: plan.name }));

/**
 * "Get started" sign-up dialog, opened from the navbar, hero and pricing cards.
 * No backend: on a valid submit we just show a success message.
 */
export default function SignupModal({ isOpen, onClose, initialPlan }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create your free account">
      {/* The form is only mounted while open, so it starts fresh each time. */}
      {isOpen && <SignupForm initialPlan={initialPlan} onClose={onClose} />}
    </Modal>
  );
}

function SignupForm({ initialPlan, onClose }) {
  // Holds the submitted values once the request "succeeds" (null until then).
  const [submitted, setSubmitted] = useState(null);

  async function handleSubmit(values) {
    await fakeRequest(); // Formik shows isSubmitting = true while this waits
    setSubmitted(values);
  }

  if (submitted) {
    const planName = PLANS.find((plan) => plan.id === submitted.plan)?.name;
    const firstName = submitted.name.trim().split(' ')[0];
    return (
      <SuccessMessage title={`Welcome to Shiftly, ${firstName}!`} action={<Button onClick={onClose}>Done</Button>}>
        Your <strong>{planName}</strong> workspace for {submitted.company.trim()} is ready. We’ve sent a confirmation
        link to <strong>{submitted.email.trim()}</strong>.
      </SuccessMessage>
    );
  }

  return (
    <Formik
      initialValues={{ name: '', email: '', company: '', plan: initialPlan }}
      validationSchema={signupSchema}
      validateOnBlur={false}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form noValidate>
          <FocusFirstError />
          <p className="text-slate-600">Set up your team’s schedule in minutes. No credit card required.</p>

          <div className="mt-6 space-y-5">
            <FormField name="name" label="Full name" autoComplete="name" placeholder="Jane Doe" />
            <FormField
              name="email"
              label="Work email"
              type="email"
              autoComplete="email"
              placeholder="jane@company.com"
            />
            <FormField
              name="company"
              label="Business name"
              autoComplete="organization"
              placeholder="Casa Verde Café"
            />
            <FormField name="plan" label="Plan" as="select" options={PLAN_OPTIONS} />
          </div>

          <Button type="submit" size="lg" className="mt-6 w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Creating account…' : 'Create account'}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
