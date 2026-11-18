import { ArrowRight, Mail, Phone } from 'lucide-react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { BRAND, NAV_LINKS } from '../../data/content';

// Worked out once when the file loads, used for the copyright line.
const CURRENT_YEAR = new Date().getFullYear();

/** Closing call-to-action banner and site footer. */
export default function Footer({ onGetStarted }) {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Final call to action */}
        <div className="flex flex-col items-center justify-between gap-6 border-b border-slate-800 py-14 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to stop fighting the rota?</h2>
            <p className="mt-2 text-slate-400">Join 2,000+ teams who schedule with Shiftly.</p>
          </div>
          <Button size="lg" variant="light" onClick={onGetStarted} className="shrink-0">
            Get started free
            <ArrowRight className="size-5" aria-hidden="true" />
          </Button>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo light />
            <p className="mt-4 max-w-sm leading-relaxed">{BRAND.tagline} Built for cafés, clinics, gyms, shops and every team that works in shifts.</p>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold text-white">Explore</h3>
            <ul className="mt-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="inline-block rounded py-1.5 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold text-white">Get in touch</h3>
            <ul className="mt-4 space-y-1">
              <li>
                <a href={`mailto:${BRAND.email}`} className="inline-flex items-center gap-2 rounded py-1.5 transition-colors hover:text-white">
                  <Mail className="size-4" aria-hidden="true" />
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a
                  href={BRAND.phoneHref}
                  className="inline-flex items-center gap-2 rounded py-1.5 transition-colors hover:text-white"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {BRAND.phone}
                </a>
              </li>
              <li className="py-1.5">{BRAND.address}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-slate-800 py-6 text-sm sm:flex-row sm:justify-between">
          <p>© {CURRENT_YEAR} {BRAND.name}. All rights reserved.</p>
          <p>A demo landing page — sample content only.</p>
        </div>
      </div>
    </footer>
  );
}
