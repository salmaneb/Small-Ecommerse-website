import React, { useEffect } from "react";
function useCount(){
    let[count,setCount]=useEffect(0);
    const add=()=>{
        setCount(count+1)
    }
    return[count,add]
}
export default useCount;