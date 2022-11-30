import React, { useState } from "react";
const useCounter=()=>{
    let[count,setCount]=useState(0);
    const inc=()=>{
        setCount(count + 1)
    }
    return [count,inc];
}
export default useCounter