import React from "react";
//import useCounter from "./useCounter";
function Inc(props){
    
    return(
        <>
<h2>{props.count}</h2>
<button onClick={props.inc}>add</button>
        </>
    );
}
export default Inc;