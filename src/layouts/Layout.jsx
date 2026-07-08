/*
==========================================================

Farm Manager Pro

Layout

Version : 2.2.0

Developer : Francis Junior

==========================================================
*/

import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

function Layout() {
  return (
    <div className="app-layout">
      <Header />

      <main className="page-content">
        <Outlet />
      </main>

      <BottomNav />
    </div>
  );
}

export default Layout;
