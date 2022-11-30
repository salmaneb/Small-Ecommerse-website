import React from "react";
import { NavLink, Outlet } from "react-router-dom";
function Title(){
    
   
    return(
       <>
        <h2>Title : 'reactjs'</h2>
        <NavLink to='new'>new</NavLink>
        <Outlet />
       </>
        
    )
}
export default Title;