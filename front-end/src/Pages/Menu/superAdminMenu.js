import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';


const menu = [
  {
    name: "Users",
    key: "users",
    link: "/users",
    icon: <AccountCircleOutlinedIcon/>,
    subMenu: []
  },
  // {
  //   name: "Dashboard",
  //   key: "/dashboard",
  //   link: "/dashboard",
  //   subMenu: [],
  //   icon: <DashboardCustomizeOutlinedIcon/>
  // },
  {
    name: "Projects",
    key: "projects",
    link: "/projects",
    subMenu: [],
    icon: <ViewListOutlinedIcon/>
  },
]

export default menu;