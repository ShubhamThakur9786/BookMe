
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function RevenueChart({ data, period }) {
  const totalRevenue = data.reduce(
    (total, item) => total + item.revenue,
    0
  );

  const formatCurrency = (value) =>
    `₹${Number(value).toLocaleString("en-IN")}`;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm h-full">

      {/* Chart heading */}
      <div className="mb-6">
        <p className="text-sm text-slate-500">
          {period === "weekly"
            ? "Revenue this week"
            : "Revenue overview"}
        </p>

        <h3 className="text-2xl font-bold text-slate-800 mt-1">
          {formatCurrency(totalRevenue)}
        </h3>

        <p className="text-xs text-slate-400 mt-1">
          Total across displayed periods
        </p>
      </div>

      {/* Line chart */}
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: 5, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E2E8F0"
            />

            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94A3B8", fontSize: 12 }}
              dy={10}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94A3B8", fontSize: 12 }}
              tickFormatter={(value) =>
                `₹${value / 1000}k`
              }
              width={55}
            />

            <Tooltip
              formatter={(value) => [
                formatCurrency(value),
                "Revenue",
              ]}
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
              }}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#6366F1"
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 6,
                fill: "#6366F1",
                stroke: "#FFFFFF",
                strokeWidth: 3,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
