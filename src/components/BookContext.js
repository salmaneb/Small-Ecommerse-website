import { createContext, useState } from "react";
export const myContext=createContext();
function BookContext(props){
    let[users,setUsers]=useState([
        {name:'salman',adress:'nanser'},
        {name:'ghani',adress:'jowar'},
        {name:'king',adress:'kohay'},
        {name:'ahmad',adress:'nanser'},
    ]);
    return(<myContext.Provider value={{users}}>
{props.children}
    </myContext.Provider>)
}
export default BookContext;