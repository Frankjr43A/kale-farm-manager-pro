import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="app">
      <Header />

      <Outlet />

      <BottomNav />
    </div>
  );
}

export default Layout;