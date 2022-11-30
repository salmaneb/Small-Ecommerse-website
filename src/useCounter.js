import React, { useState } from "react";
function useCounter(){
    let[count,setCount]=useState(0);
    function inc(){
        setCount(count+1);
    }
    return[count,inc];
}
export default useCounter;