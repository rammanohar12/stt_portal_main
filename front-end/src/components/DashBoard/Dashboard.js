import React from "react";
import SideNavbar from "../SideNavbar/SideNavbar";
import { Grid } from "@mui/material";

const Dashboard = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideNavbar />
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="login-main-container"
      >
        
      </Grid>
    </div>
  );
};

export default Dashboard;
