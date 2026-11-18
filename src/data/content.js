/**
 * All of the page's text content lives here.
 *
 * Keeping content separate from the components means:
 *  - components stay short and focus only on layout/behaviour
 *  - copy can be edited in one place without touching JSX
 */
import {
  CalendarDays,
  Repeat,
  Clock,
  FileSpreadsheet,
  MessageSquare,
  BellRing,
  Users,
  LayoutGrid,
  Send,
} from 'lucide-react';
import { images } from './assets';


export const BRAND = {
  name: 'Shiftly',
  tagline: 'Staff scheduling that runs itself.',
  email: 'hello@shiftly.app',
  phone: '+1 (555) 014-2290',
  phoneHref: 'tel:+15550142290',
  address: '120 Market Street, San Francisco, CA',
  hours: 'Mon–Fri, 9am–6pm',
};

/** Links shown in the navbar. `id` must match a section's id attribute. */
export const NAV_LINKS = [
  { id: 'features', label: 'Features' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export const HERO_STATS = [
  { value: '2,000+', label: 'teams scheduled' },
  { value: '6 hrs', label: 'saved per manager / week' },
  { value: '4.9/5', label: 'average rating' },
];

export const FEATURES = [
  {
    icon: CalendarDays,
    title: 'Drag-and-drop scheduling',
    description:
      'Build next week’s rota in minutes. Copy last week, drag shifts around, and see coverage gaps at a glance.',
  },
  {
    icon: Repeat,
    title: 'Self-service shift swaps',
    description:
      'Staff trade shifts from their phones. You approve with one tap, and the schedule updates for everyone.',
  },
  {
    icon: Clock,
    title: 'Built-in time clock',
    description:
      'Employees clock in and out from the app. Late arrivals and overtime are flagged automatically.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Payroll-ready timesheets',
    description:
      'Export approved hours to CSV or your payroll tool. No more copying numbers from paper sheets.',
  },
  {
    icon: MessageSquare,
    title: 'Team messaging',
    description:
      'Send announcements to the whole team or one location, without mixing work into personal group chats.',
  },
  {
    icon: BellRing,
    title: 'Smart reminders',
    description:
      'Automatic shift reminders cut no-shows. Managers get alerted the moment a shift is left uncovered.',
  },
];

export const STEPS = [
  {
    icon: Users,
    title: 'Add your team',
    description:
      'Import staff from a spreadsheet or invite them by email. Set roles, availability, and hourly rates.',
  },
  {
    icon: LayoutGrid,
    title: 'Build the week',
    description:
      'Drag shifts onto the calendar or reuse a template. Shiftly warns you about clashes and overtime.',
  },
  {
    icon: Send,
    title: 'Publish & relax',
    description:
      'Hit publish and everyone is notified. Swaps, clock-ins, and timesheets take care of themselves.',
  },
];

/**
 * Pricing plans. Prices are per month; `yearly` is the monthly price when
 * billed annually (roughly two months free).
 */
export const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'For small teams getting organised.',
    price: { monthly: 0, yearly: 0 },
    features: [
      'Up to 5 employees',
      'Weekly scheduling',
      'Mobile app for staff',
      'Shift reminders',
    ],
    cta: 'Start for free',
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'For growing businesses with one location.',
    price: { monthly: 29, yearly: 24 },
    features: [
      'Up to 30 employees',
      'Everything in Starter',
      'Shift swaps & time clock',
      'Payroll exports',
      'Team messaging',
    ],
    cta: 'Start 14-day trial',
    highlighted: true,
  },
  {
    id: 'business',
    name: 'Business',
    description: 'For multi-location teams.',
    price: { monthly: 79, yearly: 66 },
    features: [
      'Unlimited employees',
      'Everything in Pro',
      'Multiple locations',
      'Labour cost reports',
      'Priority support',
    ],
    cta: 'Start 14-day trial',
    highlighted: false,
  },
];

export const TESTIMONIALS = [
  {
    avater:images.user1,
    quote:
      'I used to spend my Sunday evenings on the rota. Now it takes 15 minutes and my staff stopped texting me about swaps.',
    name: 'Maria Lopez',
    role: 'Owner, Casa Verde Café',
  },
  {
    avater:images.user3,
    quote:
      'No-shows dropped by half in the first month thanks to the reminders. The payroll export alone pays for itself.',
    name: 'Daniel Okafor',
    role: 'Operations Manager, FreshFit Gyms',
  },
  {
    avater:images.user2,
    quote:
      'We run three clinics and finally have one view of who is working where. Setup took an afternoon.',
    name: 'Priya Shah',
    role: 'Practice Lead, Northside Dental',
  },
];

export const FAQS = [
  {
    question: 'Do my employees need to pay for the app?',
    answer:
      'No. Staff download the Shiftly app for free on iOS or Android, or use it in any web browser. Only the business account is billed.',
  },
  {
    question: 'Can I try Shiftly before paying?',
    answer:
      'Yes. The Starter plan is free forever for up to 5 employees, and paid plans include a 14-day free trial with no credit card required.',
  },
  {
    question: 'Can I import my existing schedule?',
    answer:
      'You can import employees and shifts from Excel or Google Sheets. Our team will also help you migrate for free during onboarding.',
  },
  {
    question: 'Can I cancel at any time?',
    answer:
      'Absolutely. Plans are month-to-month unless you choose yearly billing, and you can export all of your data whenever you like.',
  },
];

/** Options for the "team size" dropdown in the demo form. */
export const TEAM_SIZES = ['1-10', '11-30', '31-100', '100+'];
