import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import sperAdminMenu from "../../Pages/Menu/superAdminMenu";
import { useNavigate } from "react-router-dom";
import { setNavItem } from "../../actions/navActions";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../actions/authActions";

export default function SideNavbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [selected, setSelectedButton] = React.useState("dashboard");

  const selectedNavItem = useSelector((state) => state.navbar.selectedNavItem);

  const onLogoutButtonClick = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  const handleNavButtonClick = async (item) => {
    setNavItem(item);
  };

  return (
    <Box
      sx={{
        display: "flex",
        position: "sticky",
        flexDirection: "column",
        width: "250px",
        backgroundColor: "white",
        height: "100vh",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        justifyContent: "space-between",
      }}
    >
      <List style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {sperAdminMenu.map((item, index) => (
          <ListItem
            key={item.key}
            sx={{ display: "block", padding: "0.8rem" }}
            onClick={() => {
              setSelectedButton(item.key);
              handleNavButtonClick(item.key);
              navigate(item.link);
            }}
          >
            <ListItemButton
              sx={{
                backgroundColor: selected === item.key ? "#4B49AC" : "white",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                color: selected === item.key ? "white" : "black",
                ":hover": {
                  backgroundColor: selected === item.key ? "#4B49AC" : "white",
                  borderRadius: "5px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  color: selected === item.key ? "white" : "black",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 1,
                  color: selected === item.key ? "white" : "black",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} sx={{ opacity: 1 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem key={"logout"} sx={{ display: "block", padding: "0.8rem" }}>
          <ListItemButton
            sx={{
              backgroundColor: "#4B49AC",
              borderRadius: "5px",
              color: "white",
              ":hover": {
                backgroundColor: "#4B49AC",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                color: "white",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 1,
                color: "white",
              }}
            >
              <LogoutOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              sx={{ opacity: 1, fontSize: "5px" }}
              onClick={onLogoutButtonClick}
            >
              Log Out
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
