import { useState } from 'react';
import { Check } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import { PLANS } from '../../data/content';

/**
 * Pricing plans with a Monthly / Yearly switch.
 * Each plan's button opens the sign-up modal with that plan pre-selected.
 */
export default function Pricing({ onSelectPlan }) {
  const [billing, setBilling] = useState('monthly'); // 'monthly' | 'yearly'

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="pricing-title"
          eyebrow="Pricing"
          title="Simple pricing that grows with you"
          description="Start free, upgrade when your team grows. Every paid plan includes a 14-day free trial."
        />

        <BillingToggle billing={billing} onChange={setBilling} />

        <ul className="mx-auto mt-12 grid max-w-md gap-8 lg:max-w-none lg:grid-cols-3">
          {PLANS.map((plan, index) => (
            <li key={plan.id}>
              <Reveal delay={index * 100} className="h-full">
                <PlanCard plan={plan} billing={billing} onSelect={() => onSelectPlan(plan.id)} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Two-option segmented control. Uses aria-pressed so screen readers know which is on. */
function BillingToggle({ billing, onChange }) {
  const options = [
    { value: 'monthly', label: 'Monthly' },
    { value: 'yearly', label: 'Yearly' },
  ];

  return (
    <div className="mt-10 flex justify-center">
      <div role="group" aria-label="Billing period" className="inline-flex rounded-xl bg-slate-100 p-1">
        {options.map((option) => {
          const isSelected = billing === option.value;
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onChange(option.value)}
              className={`flex min-h-10 cursor-pointer items-center gap-2 rounded-lg px-4 text-sm font-semibold transition-colors ${
                isSelected ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {option.label}
              {option.value === 'yearly' && (
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-700'
                  }`}
                >
                  Save 17%
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Small line of text under the price, e.g. "Billed $288 yearly". */
function getBillingNote(price, billing) {
  if (price === 0) return 'Free forever';
  if (billing === 'yearly') return `Billed $${price * 12} yearly`;
  return 'Billed monthly';
}

function PlanCard({ plan, billing, onSelect }) {
  const price = plan.price[billing];

  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl bg-white p-8 transition-shadow duration-300 ${
        plan.highlighted
          ? 'shadow-xl ring-2 shadow-indigo-900/10 ring-indigo-600'
          : 'ring-1 ring-slate-200 hover:shadow-lg'
      }`}
    >
      {plan.highlighted && (
        <p className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-bold text-white">
          Most popular
        </p>
      )}

      <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
      <p className="mt-1 text-sm text-slate-600">{plan.description}</p>

      <p className="mt-6 flex items-baseline gap-1">
        <span className="text-5xl font-extrabold tracking-tight text-slate-900">${price}</span>
        <span className="text-sm font-medium text-slate-500">/ month</span>
      </p>
      <p className="mt-1 text-sm text-slate-500">{getBillingNote(price, billing)}</p>

      <ul className="mt-8 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
            <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>

      <Button
        onClick={onSelect}
        variant={plan.highlighted ? 'primary' : 'secondary'}
        className="mt-8 w-full"
        aria-label={`${plan.cta} – ${plan.name} plan`}
      >
        {plan.cta}
      </Button>
    </article>
  );
}
