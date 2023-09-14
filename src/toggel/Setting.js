import React, { useState } from 'react'
import Navbar from './Navbar'
// import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from "react-pro-sidebar";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";

import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import './setting.css'
const Setting = () => {
  const { collapseSidebar, rtl } = useProSidebar();

  const [menuCollapse, setMenuCollapse] = useState(false)


  const menuIconClick = () => {

    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex", flexDirection: "row-reverse" })}>
      <Sidebar rtl={true} style={{ height: "50vh", position: "absolute" }} >
        <Menu style={{}}>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center", position: "relative", right: "93px", backgroundColor: "red" }}
          >
            {" "}
            <h2>Admin</h2>
          </MenuItem>
          Home
          Team
          Contacts
          Profil
          FAQ
          Calendar
        </Menu>
      </Sidebar>
    </div>
  )
}

export default Setting
