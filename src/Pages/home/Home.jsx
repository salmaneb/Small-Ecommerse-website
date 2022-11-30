import React from "react";
import './Home.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Wigets from "../../components/wigets/Wigets";
import Feature from "../../components/feature/Feature";
import Chart from "../../components/chart/Chart";

function Home(){
    return(
        <div className="home">
        <Sidebar />
        <div className="homeContainer">
        <Navbar />
        <div className="wigets">
            <Wigets type='user' />
            <Wigets type='order'/>
            <Wigets  type='earning'/>
            <Wigets type='balance'/>

        </div>
        <div className="charts">
            <Feature />
            <Chart />
            <div className="listContainer">
                <div className="listTitle">Last transaction</div>
            </div>
        </div>
         </div>
        </div>
    )
}
export default Home;