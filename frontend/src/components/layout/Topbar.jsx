
import {
  Search,
  Bell,
  ChevronDown,
  Menu,
} from "lucide-react";

function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200/70 bg-white/70 px-6 backdrop-blur-xl">

      {/* Left side */}
      <div className="flex items-center gap-4">
        <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden">
          <Menu size={21} />
        </button>

        <button className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 transition hover:border-violet-300">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-100 text-sm font-bold text-violet-700">
            S
          </div>

          <div className="text-left">
            <p className="text-xs text-slate-400">Current Business</p>
            <p className="text-sm font-semibold text-slate-800">
              Style Studio
            </p>
          </div>

          <ChevronDown size={16} className="text-slate-400" />
        </button>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 md:flex">
          <Search size={17} className="text-slate-400" />

          <input
            type="text"
            placeholder="Search anything..."
            className="w-40 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>

        <button className="relative rounded-xl p-2.5 text-slate-500 transition hover:bg-violet-50 hover:text-violet-600">
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
        </button>

        <div className="flex items-center gap-3 border-l border-slate-200 pl-4">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold text-slate-800">Alex Smith</p>
            <p className="text-xs text-slate-400">Owner Account</p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 font-semibold text-white">
            AS
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
