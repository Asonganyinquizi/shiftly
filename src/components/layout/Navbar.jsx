import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { NAV_LINKS } from '../../data/content';
import { useActiveSection } from '../../hooks/useActiveSection';

// Defined outside the component so the array isn't re-created every render
// (useActiveSection uses it as an effect dependency).
const SECTION_IDS = NAV_LINKS.map((link) => link.id);

/**
 * Sticky top navigation.
 * - Desktop: inline links + "Get started" button.
 * - Mobile: a menu button that toggles a dropdown panel.
 * - The link for the section currently on screen is highlighted.
 */
export default function Navbar({ onGetStarted }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(() => window.scrollY > 8);
  const activeId = useActiveSection(SECTION_IDS);

  // Add a border/shadow once the page is scrolled, so the bar stands out.
  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  function handleGetStarted() {
    closeMenu();
    onGetStarted();
  }

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-white/85 backdrop-blur-md transition-shadow duration-300 ${
        hasScrolled || isMenuOpen ? 'border-slate-200 shadow-sm' : 'border-transparent'
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <NavLink link={link} isActive={activeId === link.id} />
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <Button href="#contact" variant="ghost">
            Book a demo
          </Button>
          <Button onClick={onGetStarted}>Get started</Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="grid size-11 cursor-pointer place-items-center rounded-xl text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
        >
          {isMenuOpen ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {isMenuOpen && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white px-4 pt-2 pb-6 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <NavLink link={link} isActive={activeId === link.id} onClick={closeMenu} mobile />
              </li>
            ))}
          </ul>
          <div className="mt-4 grid gap-3">
            <Button href="#contact" variant="secondary" onClick={closeMenu}>
              Book a demo
            </Button>
            <Button onClick={handleGetStarted}>Get started</Button>
          </div>
        </div>
      )}
    </header>
  );
}

/** A single navigation link, styled for desktop or mobile. */
function NavLink({ link, isActive, onClick, mobile = false }) {
  const sizeClasses = mobile ? 'flex min-h-12 items-center px-4 text-base' : 'px-3 py-2 text-sm';
  const stateClasses = isActive
    ? 'bg-indigo-50 text-indigo-700'
    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900';

  return (
    <a
      href={`#${link.id}`}
      onClick={onClick}
      aria-current={isActive ? 'true' : undefined}
      className={`block rounded-lg font-medium transition-colors ${sizeClasses} ${stateClasses}`}
    >
      {link.label}
    </a>
  );
}
