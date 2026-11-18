import { ArrowRight, Check } from 'lucide-react';
import Button from '../ui/Button';
import ScheduleMockup from './ScheduleMockup';
import { HERO_STATS } from '../../data/content';

const SELLING_POINTS = ['Free for up to 5 staff', 'No credit card required', 'Set up in 10 minutes'];

/** First screen: headline, short pitch, two calls to action and the product visual. */
export default function Hero({ onGetStarted }) {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      {/* Subtle dotted background pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,white,transparent)]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 pt-12 pb-20 sm:px-6 sm:pt-20 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="text-center lg:text-left">
          <h1
            id="hero-title"
            className="mt-6 text-4xl font-extrabold tracking-tight text-balance text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Staff scheduling that <span className="text-indigo-600">runs itself</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pretty text-slate-600 lg:mx-0">
            Shiftly helps cafés, clinics, gyms and shops build the weekly rota in minutes, lets staff swap
            shifts from their phones, and turns clock-ins into payroll-ready timesheets.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button size="lg" onClick={onGetStarted}>
              Start free trial
              <ArrowRight className="size-5" aria-hidden="true" />
            </Button>
            <Button size="lg" variant="secondary" href="#contact">
              Book a demo
            </Button>
          </div>

          <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-600 lg:justify-start">
            {SELLING_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-1.5">
                <Check className="size-4 text-emerald-600" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200 pt-8">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="text-xs text-slate-500 sm:text-sm">{stat.label}</dt>
                <dd className="order-first text-2xl font-bold text-slate-900 sm:text-3xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto w-full max-w-xl lg:max-w-none">
          <ScheduleMockup />
        </div>
      </div>
    </section>
  );
}
