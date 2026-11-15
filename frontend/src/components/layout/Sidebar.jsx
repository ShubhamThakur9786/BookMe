
import { NavLink } from "react-router-dom";
import { CalendarDays, Sparkles, ChevronRight } from "lucide-react";
import { ownerNavigation } from "../../constants/navigation";

function Sidebar() {
  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-white/10 bg-[#111126] px-4 py-6 text-white">

      {/* Brand */}
      <div className="mb-9 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/20">
          <CalendarDays size={22} />
        </div>

        <div>
          <h1 className="text-xl font-bold tracking-wide">BookMe</h1>
          <p className="text-xs text-slate-400">Business Portal</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
        Workspace
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto">
        {ownerNavigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-violet-600/30 to-indigo-600/20 text-violet-200 shadow-inner shadow-violet-500/10"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon size={19} />

                  <span className="flex-1">{item.label}</span>

                  {isActive && (
                    <ChevronRight size={16} className="text-violet-300" />
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Upgrade Card */}
      <div className="mt-5 rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/15 to-indigo-500/10 p-4">
        <div className="mb-2 flex items-center gap-2 text-violet-300">
          <Sparkles size={17} />
          <span className="text-sm font-semibold">BookMe Pro</span>
        </div>

        <p className="mb-3 text-xs leading-relaxed text-slate-400">
          Unlock advanced analytics and grow your business.
        </p>

        <button className="flex w-full items-center justify-center rounded-lg bg-violet-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-violet-500">
          Explore plans
        </button>
      </div>

      {/* User Profile */}
      <div className="mt-5 flex items-center gap-3 border-t border-white/10 px-2 pt-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-violet-600 font-semibold">
          AS
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">Alex Smith</p>
          <p className="text-xs text-slate-500">Business Owner</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
