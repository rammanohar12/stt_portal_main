import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../components/DashBoard/Dashboard";
import SideNavbar from "../components/SideNavbar/SideNavbar";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <SideNavbar />
        </div>
        <div>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
