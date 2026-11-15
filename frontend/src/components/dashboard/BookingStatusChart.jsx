
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

export default function BookingStatusChart({ data }) {
  const totalBookings = data.reduce(
    (total, item) => total + item.value,
    0
  );

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm h-full">

      {/* Heading */}
      <div className="mb-4">
        <p className="text-sm text-slate-500">
          Booking breakdown
        </p>

        <h3 className="text-2xl font-bold text-slate-800 mt-1">
          {totalBookings}
        </h3>

        <p className="text-xs text-slate-400">
          Total bookings in selected period
        </p>
      </div>

      {/* Donut */}
      <div className="relative h-[190px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={58}
              outerRadius={82}
              paddingAngle={4}
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-2xl font-bold text-slate-800">
            {totalBookings}
          </span>

          <span className="text-xs text-slate-400">
            Bookings
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-3 mt-5">
        {data.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />

              <span className="text-sm text-slate-600">
                {item.name}
              </span>
            </div>

            <span className="text-sm font-semibold text-slate-800">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
