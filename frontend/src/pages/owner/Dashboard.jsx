
import { motion } from "framer-motion";
import {
  CalendarDays,
  ChevronDown,
  Plus,
  Download,
} from "lucide-react";

import KPICard from "../../components/dashboard/KPICard";
import { dashboardStats } from "../../data/dashBoardData.js";
import RevenueAnalytics from
  "../../components/dashboard/RevenueAnalytics";

function Dashboard() {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="space-y-8">

      {/* Dashboard Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center"
      >
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-violet-600">
            Business Overview
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Good morning, Alex
            <span className="ml-2">👋</span>
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Here's what's happening with your business today.
          </p>

          <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
            <CalendarDays size={15} />
            {formattedDate}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition hover:border-violet-300 hover:text-violet-700">
            <CalendarDays size={17} />
            Last 30 days
            <ChevronDown size={15} />
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition hover:border-violet-300 hover:text-violet-700">
            <Download size={17} />
            Export
          </button>

          <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:shadow-violet-500/30">
            <Plus size={18} />
            New Appointment
          </button>
        </div>
      </motion.div>

      {/* KPI Section */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Performance Overview
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Your business performance at a glance.
            </p>
          </div>

          <span className="hidden rounded-lg bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-600 sm:inline-block">
            Updated just now
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {dashboardStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
            >
              <KPICard stat={stat} index={index} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Step 7 - Revenue Analytics */}
      <RevenueAnalytics />
    </div>
  );
}

export default Dashboard;
