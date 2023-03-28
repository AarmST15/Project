import React from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HistoryIcon from '@mui/icons-material/History';
import TableChartIcon from '@mui/icons-material/TableChart';
import Tooltip from '@mui/material/Tooltip';
import Apphead from './Apphead';
import './Sidenavbar.css'


function Sidenavbar() {
    const { collapseSidebar} = useProSidebar();
    
  return (
    <div id="app" style={({ height: "100%" }, { display: "flex" , flexDirection: "row"})}>
        <Sidebar 
            backgroundColor="rgb(136, 204, 224, 0.5)"  
            style={{height: "100vh" , 
                    position: "fixed" , 
                    top: "0", 
                    left: "0",
                    marginBlock:"64px" ,
                    backdropFilter:"blur(6px)",
                    zIndex:'1'                    
                    }}>
            <Menu>
                
                <MenuItem
                    icon={<MenuOutlinedIcon className='side-color'/>}
                    onClick={() => {
                    collapseSidebar();
                    }}
                    style={{ textAlign: "center" }}
                >
                    {" "}
                    <h2>Admin</h2>
                </MenuItem>
                
                <Tooltip title="Home" placement="left" href='/mnghome'>
                    <MenuItem icon={<HomeOutlinedIcon className='side-color'/>}>Home</MenuItem>
                </Tooltip>
                <Tooltip title="Order List" placement="left" href='/order'>
                    <MenuItem icon={<ReceiptOutlinedIcon className='side-color'/>}>Order List</MenuItem>
                </Tooltip>
                <Tooltip title="Clients" placement="left" href='/clients'>
                    <MenuItem icon={<PeopleOutlinedIcon className='side-color'/>}>Clients</MenuItem>
                </Tooltip>
                <Tooltip title="History" placement="left" href='/orderhis'>
                    <MenuItem icon={<HistoryIcon className='side-color'/>}>History</MenuItem>
                </Tooltip>
                
                <Tooltip title="Menu Manage" placement="left" href='/setting'>
                    <MenuItem icon={<TableChartIcon className='side-color'/>}>Menu Manage</MenuItem>
                </Tooltip>
                
            </Menu>
      </Sidebar>
        
        <Apphead/>
        
        
    </div>
  )
}

export default Sidenavbar