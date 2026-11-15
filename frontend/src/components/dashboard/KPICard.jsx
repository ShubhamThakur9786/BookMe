
import {
  CalendarDays,
  Wallet,
  Users,
  IndianRupee,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
} from "lucide-react";

const iconMap = {
  CalendarDays,
  Wallet,
  Users,
  IndianRupee,
};

function KPICard({ stat, index }) {
  const Icon = iconMap[stat.icon];

  const isPositive = stat.trend === "up";

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/60"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-violet-100/70 blur-2xl transition group-hover:bg-violet-200/80" />

      <div className="relative">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">
              {stat.title}
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
              {stat.value}
            </h2>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-indigo-100 text-violet-700">
            {Icon && <Icon size={21} />}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-semibold ${
              isPositive
                ? "bg-emerald-50 text-emerald-600"
                : "bg-rose-50 text-rose-600"
            }`}
          >
            {isPositive ? (
              <TrendingUp size={13} />
            ) : (
              <TrendingDown size={13} />
            )}

            {stat.change}
          </span>

          <span className="text-xs text-slate-400">
            {stat.comparison}
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-xs text-slate-400">
            {stat.description}
          </p>

          <ArrowUpRight
            size={16}
            className="text-slate-300 transition group-hover:text-violet-600"
          />
        </div>
      </div>
    </div>
  );
}

export default KPICard;
