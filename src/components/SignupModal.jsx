import Modal from './ui/Modal';
import Button from './ui/Button';
import FormField from './ui/FormField';
import SuccessMessage from './ui/SuccessMessage';
import { useForm } from '../hooks/useForm';
import { validateSignup } from '../utils/validation';
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
  const { values, errors, status, handleChange, handleSubmit } = useForm(
    { name: '', email: '', company: '', plan: initialPlan },
    validateSignup,
  );

  if (status === 'success') {
    const planName = PLANS.find((plan) => plan.id === values.plan)?.name;
    const firstName = values.name.trim().split(' ')[0];
    return (
      <SuccessMessage title={`Welcome to Shiftly, ${firstName}!`} action={<Button onClick={onClose}>Done</Button>}>
        Your <strong>{planName}</strong> workspace for {values.company} is ready. We’ve sent a confirmation link to{' '}
        <strong>{values.email}</strong>.
      </SuccessMessage>
    );
  }

  const fieldProps = (name) => ({
    name,
    value: values[name],
    error: errors[name],
    onChange: handleChange,
  });

  return (
    <form onSubmit={handleSubmit()} noValidate>
      <p className="text-slate-600">Set up your team’s schedule in minutes. No credit card required.</p>

      <div className="mt-6 space-y-5">
        <FormField label="Full name" autoComplete="name" placeholder="Jane Doe" {...fieldProps('name')} />
        <FormField
          label="Work email"
          type="email"
          autoComplete="email"
          placeholder="jane@company.com"
          {...fieldProps('email')}
        />
        <FormField
          label="Business name"
          autoComplete="organization"
          placeholder="Casa Verde Café"
          {...fieldProps('company')}
        />
        <FormField label="Plan" as="select" options={PLAN_OPTIONS} {...fieldProps('plan')} />
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Creating account…' : 'Create account'}
      </Button>
    </form>
  );
}
