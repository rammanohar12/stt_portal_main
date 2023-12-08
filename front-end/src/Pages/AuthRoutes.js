import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/LoginPage/LoginPage.js";
import Register from "../components/RegesterPage/RegesterPage.js";
import Dashboard from "../components/DashBoard/Dashboard.js";

const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AuthRoutes;
