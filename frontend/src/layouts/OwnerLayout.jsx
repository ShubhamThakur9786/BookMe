
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

function OwnerLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#F5F6FC]">

      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <Topbar />

        <motion.main
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex-1 overflow-y-auto p-6 md:p-8"
        >
          <Outlet />
        </motion.main>
      </div>

    </div>
  );
}

export default OwnerLayout;
