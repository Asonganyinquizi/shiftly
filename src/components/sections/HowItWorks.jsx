import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { STEPS } from '../../data/content';

/** About / How it works: what Shiftly is, then three numbered steps. */
export default function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="how-title"
          eyebrow="How it works"
          title="From spreadsheet chaos to a published rota in three steps"
          description="Shiftly is an online scheduling tool for shift-based businesses. Managers plan the week on a simple calendar, and staff see their shifts, swap and clock in from the mobile app."
        />

        <div className="relative mt-16">
          {/* Dashed line connecting the steps on larger screens */}
          <div
            aria-hidden="true"
            className="absolute top-8 right-[16%] left-[16%] hidden border-t-2 border-dashed border-indigo-200 md:block"
          />

          <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
            {STEPS.map((step, index) => (
              <li key={step.title}>
                <Reveal delay={index * 150}>
                  <Step {...step} number={index + 1} />
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Step({ icon: Icon, title, description, number }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        <span className="grid size-16 place-items-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/30">
          <Icon className="size-7" aria-hidden="true" />
        </span>
        <span className="absolute -top-2 -right-2 grid size-7 place-items-center rounded-full border-2 border-white bg-emerald-600 text-xs font-bold text-white">
          {number}
        </span>
      </div>
      <h3 className="mt-6 text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-2 max-w-xs leading-relaxed text-slate-600">{description}</p>
    </div>
  );
}
