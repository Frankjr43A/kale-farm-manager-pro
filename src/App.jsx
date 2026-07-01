import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layouts/Layout";

import Dashboard from "./pages/Dashboard";
import Farms from "./pages/Farms";
import Fields from "./pages/Fields";
import Crops from "./pages/Crops";
import Finance from "./pages/Finance";
import Income from "./pages/Income";
import Reports from "./pages/Reports";
import Harvests from "./pages/Harvests";
import Activities from "./pages/Activities";
import Weather from "./pages/Weather";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import PdfReports from "./pages/PdfReports";
import Menu from "./pages/Menu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="farms" element={<Farms />} />
        <Route path="fields" element={<Fields />} />
        <Route path="crops" element={<Crops />} />
        <Route path="finance" element={<Finance />} />
        <Route path="income" element={<Income />} />
        <Route path="harvests" element={<Harvests />} />
        <Route path="activities" element={<Activities />} />
        <Route path="weather" element={<Weather />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="reports" element={<Reports />} />
        <Route path="pdf-reports" element={<PdfReports />} />
        <Route path="settings" element={<Settings />} />
        <Route path="menu" element={<Menu />} />

        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />
      </Route>
    </Routes>
  );
}

export default App;