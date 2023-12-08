import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Login from "./components/LoginPage/LoginPage.js";
import Register from "./components/RegesterPage/RegesterPage.js";
import Dashboard from "./components/DashBoard/Dashboard.js";
import SideNavbar from "./components/SideNavbar/SideNavbar.js";
import ProjectsList from "./components/project/ProjectList.js";
import CreateProject from "./Pages/CreateProject/CreateProject.js";
import ViewProject from "./components/project/ViewProject/ViewProject.js";
import { useSelector } from "react-redux";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <BrowserRouter>
      {/* <div style={{ width: "180px", position: "sticky" }}>
        <SideNavbar />
      </div> */}
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/projects" exact element={<ProjectsList />} />
          <Route path="/create-project" exact element={<CreateProject />} />
          <Route path="/app/project/view/:id" exact element={<ViewProject />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
