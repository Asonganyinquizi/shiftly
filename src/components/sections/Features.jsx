import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { FEATURES } from '../../data/content';

/** Grid of feature cards, generated from the FEATURES list. */
export default function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="features-title"
          eyebrow="Features"
          title="Everything you need to run your team"
          description="Replace spreadsheets, paper timesheets and endless group chats with one simple app your whole team will actually use."
        />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <li key={feature.title}>
              <Reveal delay={(index % 3) * 100} className="h-full">
                <FeatureCard {...feature} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <article className="group h-full rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-900/5">
      <span className="grid size-12 place-items-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white">
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 leading-relaxed text-slate-600">{description}</p>
    </article>
  );
}
