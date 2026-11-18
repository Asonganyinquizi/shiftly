import { Repeat, TrendingDown } from 'lucide-react';

/**
 * The hero illustration: a mini weekly schedule drawn with plain
 * HTML + Tailwind (no image files), so it stays sharp at every size.
 */

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

// Colour for each role, used for the shift "chips".
const ROLE_STYLES = {
  Barista: 'bg-indigo-100 text-indigo-800',
  Kitchen: 'bg-amber-100 text-amber-800',
  Cashier: 'bg-emerald-100 text-emerald-800',
  Manager: 'bg-sky-100 text-sky-800',
};

// Each employee's shifts for Mon–Fri. `null` means a day off.
const SCHEDULE = [
  { name: 'Amara', initials: 'AM', role: 'Barista', shifts: ['7–3', '7–3', null, '11–7', '7–3'] },
  { name: 'Jonas', initials: 'JO', role: 'Kitchen', shifts: ['10–6', null, '10–6', '10–6', '2–10'] },
  { name: 'Lena', initials: 'LE', role: 'Cashier', shifts: [null, '9–5', '9–5', '9–5', '9–5'] },
  { name: 'Ravi', initials: 'RA', role: 'Manager', shifts: ['8–4', '8–4', '8–4', null, '12–8'] },
];

export default function ScheduleMockup() {
  return (
    <div
      role="img"
      aria-label="Preview of the Shiftly weekly schedule showing four employees and their shifts from Monday to Friday."
      className="relative"
    >
      {/* Soft glow behind the card */}
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-linear-to-tr from-indigo-200/60 via-violet-100/40 to-emerald-100/60 blur-2xl" />

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
        {/* Fake app toolbar */}
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 sm:px-5">
          <div>
            <p className="text-sm font-bold text-slate-900">Week of 14 April</p>
            <p className="text-xs text-slate-500">Casa Verde Café · 4 staff</p>
          </div>
          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
            Published
          </span>
        </div>

        {/* Schedule grid: one name column + one column per day */}
        <div className="grid grid-cols-[5.5rem_repeat(5,minmax(0,1fr))] gap-1.5 p-3 text-xs sm:grid-cols-[7rem_repeat(5,minmax(0,1fr))] sm:gap-2 sm:p-4">
          <span />
          {DAYS.map((day) => (
            <span key={day} className="pb-1 text-center font-semibold text-slate-500">
              {day}
            </span>
          ))}

          {SCHEDULE.map((person) => (
            <EmployeeRow key={person.name} person={person} />
          ))}
        </div>

        {/* Summary bar (also leaves room for the floating card below) */}
        <div className="flex justify-end gap-4 border-t border-slate-100 bg-slate-50 px-4 py-3 text-xs sm:px-5">
          {/* Hidden on phones, where the floating card would cover it */}
          <span className="hidden text-slate-500 sm:inline">
            <strong className="text-slate-900">142 h</strong> scheduled
          </span>
          <span className="text-slate-500">
            <strong className="text-emerald-700">0</strong> open shifts
          </span>
        </div>
      </div>

      {/* Floating notification cards */}
      <div className="absolute -bottom-7 -left-2 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-3 shadow-lg sm:-left-8">
        <span className="grid size-9 place-items-center rounded-lg bg-indigo-100 text-indigo-600">
          <Repeat className="size-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs font-bold text-slate-900">Shift swap approved</p>
          <p className="text-xs text-slate-500">Lena ↔ Amara · Thu</p>
        </div>
      </div>

      <div className="absolute -top-5 -right-2 hidden items-center gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-3 shadow-lg sm:flex lg:-right-6">
        <span className="grid size-9 place-items-center rounded-lg bg-emerald-100 text-emerald-600">
          <TrendingDown className="size-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs font-bold text-slate-900">Overtime down 18%</p>
          <p className="text-xs text-slate-500">vs. last month</p>
        </div>
      </div>
    </div>
  );
}

function EmployeeRow({ person }) {
  return (
    <>
      <div className="flex items-center gap-2 py-1">
        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-slate-800 text-[10px] font-bold text-white">
          {person.initials}
        </span>
        <div className="min-w-0">
          <p className="truncate font-semibold text-slate-800">{person.name}</p>
          <p className="hidden truncate text-[11px] text-slate-500 sm:block">{person.role}</p>
        </div>
      </div>

      {person.shifts.map((shift, dayIndex) =>
        shift ? (
          <span
            key={dayIndex}
            className={`grid place-items-center rounded-lg py-2 font-semibold whitespace-nowrap ${ROLE_STYLES[person.role]}`}
          >
            {shift}
          </span>
        ) : (
          <span key={dayIndex} className="rounded-lg border border-dashed border-slate-200" />
        ),
      )}
    </>
  );
}
