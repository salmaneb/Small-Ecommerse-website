import React, { useState } from "react";
import { createContext } from "react";

const usecontext=createContext();

const AppProvider=({children})=>{
    let[data,setData]=useState({
        name:'',
        email:''
    });
    return <usecontext.Provider value={{data}}>{children}</usecontext.Provider>
}
export {usecontext,AppProvider} ;