
import { useState } from "react";
import {
  weeklyRevenueData,
  monthlyRevenueData,
  weeklyBookingStatus,
  monthlyBookingStatus,
} from "../../data/dashBoardData.js";

import RevenueChart from "./RevenueChart";
import BookingStatusChart from "./BookingStatusChart";

export default function RevenueAnalytics() {
  const [period, setPeriod] = useState("weekly");

  const isWeekly = period === "weekly";

  const revenueData = isWeekly
    ? weeklyRevenueData
    : monthlyRevenueData;

  const bookingData = isWeekly
    ? weeklyBookingStatus
    : monthlyBookingStatus;

  return (
    <section className="space-y-6">

      {/* Section heading */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Revenue Analytics
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Track your business performance
          </p>
        </div>

        {/* Period filter */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
          <button
            onClick={() => setPeriod("weekly")}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
              isWeekly
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Weekly
          </button>

          <button
            onClick={() => setPeriod("monthly")}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
              !isWeekly
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Analytics charts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Revenue chart - takes 2 columns */}
        <div className="xl:col-span-2">
          <RevenueChart
            data={revenueData}
            period={period}
          />
        </div>

        {/* Booking status chart */}
        <div>
          <BookingStatusChart
            data={bookingData}
          />
        </div>

      </div>
    </section>
  );
}
