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
import SidebarLayout from "./SidebarLayout.js";
import UserList from "./components/UserList/UserList.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <BrowserRouter>
      {/* <div style={{ width: "180px", position: "sticky" }}>
        <SideNavbar />
      </div> */}
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route element={<SidebarLayout />}>
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/projects" exact element={<ProjectsList />} />
            <Route path="/create-project" exact element={<CreateProject />} />
            <Route
              path="/app/project/view/:id"
              exact
              element={<ViewProject />}
            />
            <Route path="/users" exact element={<UserList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
