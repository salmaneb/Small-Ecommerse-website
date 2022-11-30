import React from "react";
import useSelect from "./useSelect";
function Count(){
    let[count,inc]=useSelect();
    return(
        <>
<h2>{count}</h2>
<button onClick={inc}>increment</button>
        </>
    )
}
export default Count;