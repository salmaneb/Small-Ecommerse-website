import React from "react";
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ReorderIcon from '@mui/icons-material/Reorder';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Sidebar(){
    return(
        <div className="sidebar" style={{  borderRight: '0.5px solid lightcoral'}}>
            <div className="top">
<span className="logo">lam dev</span>

            </div>
            <hr style={{height:'0',border:'0.5px solid lightgray'}}/>

            <div className="center">
                <ul>
                <p className="title">Main</p>
                    <li><DashboardIcon className="icon"/>

                    <span>Dashboard</span></li>
                    <p className="title">List</p>
                    <li><PersonIcon className="icon"/>
                    <span>Users</span></li>
                    <li><Inventory2Icon className="icon"/>
                    <span>Products</span></li>
                    <li><ReorderIcon className="icon" />
                    <span>Orders</span></li>
                    <li><AirplanemodeActiveIcon className="icon"/>
                    <span>Delivery</span></li>
                    <li><NotificationsIcon className="icon"/>
                    <span>Notification</span></li>
                    <li><NotificationsIcon className="icon"/>
                    <p className="title">UseFul</p>
                    <span>stats</span></li>
                    <p className="title">Sevices</p>
                    <li><PersonIcon className="icon"/>
                    <span>System health</span></li>
                    <li><PersonIcon className="icon"/>
                    <span>Logs</span></li>
                    <li><PersonIcon className="icon"/>
                    <span>Settings</span></li>
                    <p className="title">User</p>
                    <li><PersonIcon className="icon"/>
                    <span>Profile</span></li>
                    <li><PersonIcon className="icon"/>
                    <span>Logouts</span></li>
                </ul>
            </div>
            <div className="bottom">
            <div className="color-option"></div>
            <div className="color-option"></div>
          
            </div>
        </div>
    )
}
export default Sidebar;