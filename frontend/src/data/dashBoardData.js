
export const dashboardStats = [
  {
    id: 1,
    title: "Total Bookings",
    value: "1,248",
    change: "+12.8%",
    comparison: "vs last month",
    trend: "up",
    icon: "CalendarDays",
    description: "All bookings received",
  },
  {
    id: 2,
    title: "Total Revenue",
    value: "₹84,500",
    change: "+18.2%",
    comparison: "vs last month",
    trend: "up",
    icon: "Wallet",
    description: "Revenue generated",
  },
  {
    id: 3,
    title: "Total Customers",
    value: "856",
    change: "+8.4%",
    comparison: "vs last month",
    trend: "up",
    icon: "Users",
    description: "Registered customers",
  },
  {
    id: 4,
    title: "Avg. Booking Value",
    value: "₹1,250",
    change: "+4.6%",
    comparison: "vs last month",
    trend: "up",
    icon: "IndianRupee",
    description: "Average per booking",
  },
];


// ==========================================
// REVENUE ANALYTICS - DUMMY DATA
// ==========================================

// Weekly revenue (last 7 days)
export const weeklyRevenueData = [
  { label: "Mon", revenue: 8500 },
  { label: "Tue", revenue: 11200 },
  { label: "Wed", revenue: 9200 },
  { label: "Thu", revenue: 14500 },
  { label: "Fri", revenue: 12800 },
  { label: "Sat", revenue: 17600 },
  { label: "Sun", revenue: 20700 },
];

// Monthly revenue (last 6 months)
export const monthlyRevenueData = [
  { label: "Jun", revenue: 42000 },
  { label: "Jul", revenue: 51000 },
  { label: "Aug", revenue: 47500 },
  { label: "Sep", revenue: 63000 },
  { label: "Oct", revenue: 72000 },
  { label: "Nov", revenue: 84500 },
];

// Weekly booking status
export const weeklyBookingStatus = [
  { name: "Completed", value: 42, color: "#16A34A" },
  { name: "Upcoming", value: 18, color: "#6366F1" },
  { name: "Cancelled", value: 8, color: "#EF4444" },
  { name: "Pending", value: 5, color: "#F59E0B" },
];

// Monthly booking status
export const monthlyBookingStatus = [
  { name: "Completed", value: 142, color: "#16A34A" },
  { name: "Upcoming", value: 48, color: "#6366F1" },
  { name: "Cancelled", value: 18, color: "#EF4444" },
  { name: "Pending", value: 12, color: "#F59E0B" },
];
