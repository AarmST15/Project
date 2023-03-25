import React from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Tooltip from '@mui/material/Tooltip';
import Apphead from './Apphead';
import MNGcard from './MNGcard';

function Sidenavbar() {
    const { collapseSidebar } = useProSidebar();
  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
        <Sidebar style={{ height: "100vh" ,background: '#146C94'}}>
            <Menu>
                
                <MenuItem
                    icon={<MenuOutlinedIcon />}
                    onClick={() => {
                    collapseSidebar();
                    }}
                    style={{ textAlign: "center" }}
                >
                    {" "}
                    <h2>Admin</h2>
                </MenuItem>
                
                <Tooltip title="Home" placement="left">
                    <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
                </Tooltip>
                <Tooltip title="Home" placement="left">
                    <MenuItem icon={<PeopleOutlinedIcon />}>Clients</MenuItem>
                </Tooltip>
                <Tooltip title="Home" placement="left">
                    <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
                </Tooltip>
                <Tooltip title="Home" placement="left">
                    <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
                </Tooltip>
                <Tooltip title="Home" placement="left">
                    <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
                </Tooltip>
                <Tooltip title="Home" placement="left">
                    <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
                </Tooltip>
            </Menu>
      </Sidebar>
        
        <Apphead/>
        
        
    </div>
  )
}

export default Sidenavbar