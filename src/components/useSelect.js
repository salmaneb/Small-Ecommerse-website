import React, { useState } from "react";
const useSelect=()=>{
    let[count,setCount]=useState(0);
    function inc(){
        setCount(count+1);
    }
    return[count,inc]
}
export default useSelect;