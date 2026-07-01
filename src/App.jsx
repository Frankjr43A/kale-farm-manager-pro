import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layouts/Layout";

import Dashboard from "./pages/Dashboard";
import Farms from "./pages/Farms";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />

        <Route path="dashboard" element={<Dashboard />} />

        <Route path="farms" element={<Farms />} />

        {/* Temporary redirect for pages not built yet */}
        <Route path="finance" element={<Navigate to="/dashboard" replace />} />
        <Route path="reports" element={<Navigate to="/dashboard" replace />} />
        <Route path="settings" element={<Navigate to="/dashboard" replace />} />

        {/* Catch all unknown routes */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
}

export default App;