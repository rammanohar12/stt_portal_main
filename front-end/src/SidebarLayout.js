import { Outlet } from "react-router-dom";
import SideNavbar from "./components/SideNavbar/SideNavbar";

const SidebarLayout = () => (
  <div className="main-continer">
    <div>
      <SideNavbar />
    </div>
    <div style={{width:"100%"}}>
      <Outlet />
    </div>
  </div>
);

export default SidebarLayout;