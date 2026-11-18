import { ChevronDown } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { FAQS } from '../../data/content';

/**
 * Frequently asked questions.
 * Uses native <details>/<summary>, which is keyboard-accessible and
 * opens/closes without any JavaScript.
 */
export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="faq-title" eyebrow="FAQ" title="Questions? We’ve got answers" />

        <div className="mt-12 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group px-6">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-5 font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <ChevronDown
                  className="size-5 shrink-0 text-slate-500 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-5 leading-relaxed text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
