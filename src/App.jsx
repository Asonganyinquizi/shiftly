import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import HowItWorks from './components/sections/HowItWorks';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import Faq from './components/sections/Faq';
import Contact from './components/sections/Contact';
import SignupModal from './components/SignupModal';

const DEFAULT_PLAN = 'pro';

/**
 * The landing page.
 *
 * App owns one piece of shared state: whether the sign-up modal is open
 * (and which plan it should pre-select). Any section can open it through
 * the `openSignup` function passed down as a prop.
 */
export default function App() {
  const [signup, setSignup] = useState({ isOpen: false, plan: DEFAULT_PLAN });

  const openSignup = (plan = DEFAULT_PLAN) => setSignup({ isOpen: true, plan });
  const closeSignup = () => setSignup((current) => ({ ...current, isOpen: false }));

  return (
    <div id="top">
      {/* Lets keyboard users jump past the navigation */}
      <a
        href="#main"
        className="sr-only rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
      >
        Skip to content
      </a>

      <Navbar onGetStarted={() => openSignup()} />

      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero onGetStarted={() => openSignup()} />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing onSelectPlan={openSignup} />
        <Faq />
        <Contact />
      </main>

      <Footer onGetStarted={() => openSignup()} />

      <SignupModal isOpen={signup.isOpen} initialPlan={signup.plan} onClose={closeSignup} />
    </div>
  );
}
