import { Mail, Phone, MapPin, Clock, Check } from 'lucide-react';
import Button from '../ui/Button';
import FormField from '../ui/FormField';
import SuccessMessage from '../ui/SuccessMessage';
import { useForm } from '../../hooks/useForm';
import { validateDemo } from '../../utils/validation';
import { BRAND, TEAM_SIZES } from '../../data/content';

const INITIAL_VALUES = { name: '', email: '', company: '', teamSize: '', message: '' };

const TEAM_SIZE_OPTIONS = TEAM_SIZES.map((size) => ({ value: size, label: `${size} employees` }));

const CONTACT_DETAILS = [
  { icon: Mail, label: 'Email', value: BRAND.email, href: `mailto:${BRAND.email}` },
  { icon: Phone, label: 'Phone', value: BRAND.phone, href: BRAND.phoneHref },
  { icon: MapPin, label: 'Office', value: BRAND.address },
  { icon: Clock, label: 'Support hours', value: BRAND.hours },
];

const DEMO_BENEFITS = [
  'A 20-minute walkthrough tailored to your business',
  'Help importing your current schedule',
  'Answers on pricing for your team size',
];

/** Contact details plus a "Book a demo" form with validation. */
export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-8">
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold tracking-wider text-indigo-600 uppercase">Contact</p>
          <h2 id="contact-title" className="mt-3 text-3xl font-bold tracking-tight text-balance text-slate-900 sm:text-4xl">
            See Shiftly in action
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Book a free demo and one of our scheduling experts will show you how Shiftly fits your team.
          </p>

          <ul className="mt-8 space-y-3">
            {DEMO_BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-slate-700">
                <Check className="mt-0.5 size-5 shrink-0 text-emerald-600" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>

          <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {CONTACT_DETAILS.map((detail) => (
              <ContactDetail key={detail.label} {...detail} />
            ))}
          </dl>
        </div>

        <div className="lg:col-span-3">
          <DemoForm />
        </div>
      </div>
    </section>
  );
}

function ContactDetail({ icon: Icon, label, value, href }) {
  return (
    <div className="flex items-start gap-4">
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-600">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div>
        <dt className="text-sm text-slate-500">{label}</dt>
        <dd className="font-semibold text-slate-900">
          {href ? (
            <a href={href} className="rounded transition-colors hover:text-indigo-600">
              {value}
            </a>
          ) : (
            value
          )}
        </dd>
      </div>
    </div>
  );
}

function DemoForm() {
  const { values, errors, status, handleChange, handleSubmit, reset } = useForm(
    INITIAL_VALUES,
    validateDemo,
  );

  // Props every field needs, so each <FormField> below stays short.
  const fieldProps = (name) => ({
    name,
    value: values[name],
    error: errors[name],
    onChange: handleChange,
  });

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-10">
      {status === 'success' ? (
        <SuccessMessage
          title="Demo request received!"
          action={
            <Button variant="secondary" onClick={reset}>
              Send another request
            </Button>
          }
        >
          Thanks, {values.name.trim().split(' ')[0]}. We’ll email <strong>{values.email}</strong> within one
          business day to schedule your demo.
        </SuccessMessage>
      ) : (
        <form onSubmit={handleSubmit()} noValidate>
          <h3 className="text-xl font-bold text-slate-900">Request a demo</h3>
          <p className="mt-1 text-sm text-slate-500">All fields are required unless marked optional.</p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <FormField label="Full name" autoComplete="name" placeholder="Jane Doe" {...fieldProps('name')} />
            <FormField
              label="Work email"
              type="email"
              autoComplete="email"
              placeholder="jane@company.com"
              {...fieldProps('email')}
            />
            <FormField
              label="Company"
              autoComplete="organization"
              placeholder="Casa Verde Café"
              {...fieldProps('company')}
            />
            <FormField label="Team size" as="select" options={TEAM_SIZE_OPTIONS} {...fieldProps('teamSize')} />
            <FormField
              label="What would you like to see?"
              as="textarea"
              optional
              placeholder="e.g. how shift swaps work for multiple locations"
              className="sm:col-span-2"
              {...fieldProps('message')}
            />
          </div>

          <Button type="submit" size="lg" className="mt-6 w-full" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Book my demo'}
          </Button>
          <p className="mt-3 text-center text-xs text-slate-500">
            We’ll never share your details. No spam, ever.
          </p>
        </form>
      )}
    </div>
  );
}
