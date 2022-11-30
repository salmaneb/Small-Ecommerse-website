import React from "react";
import Hoc from "./Hoc";
class Like extends React.Component{
    render(){
        const{count,inc}=this.props;
        return(
            <>
<h2>{count}</h2>
<button onClick={inc}>increment</button>
            </>
        )
    }
}
const Inhance=Hoc(Like);
export default Inhance;