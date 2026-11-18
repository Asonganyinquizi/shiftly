import { Star } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { TESTIMONIALS } from '../../data/content';

/** Social proof: short quotes from (sample) customers. */
export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="testimonials-title"
          eyebrow="Customer stories"
          title="Loved by busy managers"
        />

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <li key={testimonial.name}>
              <Reveal delay={index * 100} className="h-full">
                <TestimonialCard {...testimonial} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function TestimonialCard({ avatar, quote, name, role }) {


  return (
    <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7">
      <div className="flex gap-0.5 text-amber-400" role="img" aria-label="Rated 5 out of 5">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className="size-4 fill-current" aria-hidden="true" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 leading-relaxed text-slate-700">“{quote}”</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
          <img src={avatar} alt="" className='rounded-[100%]' />
        </span>
        <span>
          <span className="block font-semibold text-slate-900">{name}</span>
          <span className="block text-sm text-slate-500">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
