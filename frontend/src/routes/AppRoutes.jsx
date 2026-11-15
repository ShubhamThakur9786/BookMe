
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import OwnerLayout from "../layouts/OwnerLayout";
import Dashboard from "../pages/owner/Dashboard";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/owner/dashboard" replace />} />

        <Route path="/owner" element={<OwnerLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        <Route path="*" element={<Navigate to="/owner/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
