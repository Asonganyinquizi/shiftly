import { Repeat, TrendingDown } from 'lucide-react';
import { images } from '../../data/assets';

/**
 * The hero illustration: a mini weekly schedule.
 */


export default function ScheduleMockup() {
  return (
    <div className="relative"
    >
      {/* Soft glow behind the card */}
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-linear-to-tr from-indigo-200/60 via-violet-100/40 to-emerald-100/60 blur-2xl" />

        <img src={images.schedule} alt=""  className=' w-full h-full shadow-sm shadow-slate-900/10'/>
  

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
