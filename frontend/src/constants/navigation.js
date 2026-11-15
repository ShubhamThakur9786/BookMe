
import {
  LayoutDashboard,
  CalendarDays,
  BriefcaseBusiness,
  Users,
  UserRound,
  CreditCard,
  ChartNoAxesCombined,
  Clock3,
  Globe,
  Megaphone,
  Bell,
  Settings,
} from "lucide-react";

export const ownerNavigation = [
  {
    label: "Dashboard",
    path: "/owner/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Appointments",
    path: "/owner/appointments",
    icon: CalendarDays,
  },
  {
    label: "Services",
    path: "/owner/services",
    icon: BriefcaseBusiness,
  },
  {
    label: "Staff",
    path: "/owner/staff",
    icon: Users,
  },
  {
    label: "Customers",
    path: "/owner/customers",
    icon: UserRound,
  },
  {
    label: "Payments",
    path: "/owner/payments",
    icon: CreditCard,
  },
  {
    label: "Analytics",
    path: "/owner/analytics",
    icon: ChartNoAxesCombined,
  },
  {
    label: "Availability",
    path: "/owner/availability",
    icon: Clock3,
  },
  {
    label: "Booking Page",
    path: "/owner/booking-page",
    icon: Globe,
  },
  {
    label: "Marketing",
    path: "/owner/marketing",
    icon: Megaphone,
  },
  {
    label: "Notifications",
    path: "/owner/notifications",
    icon: Bell,
  },
  {
    label: "Settings",
    path: "/owner/settings",
    icon: Settings,
  },
];
