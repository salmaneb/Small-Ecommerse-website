import React, { useContext } from "react";
//import { myContext } from "../App";
import { contextA } from "../App";
function Person(){
let {users}=useContext(contextA);
    return(
        <>
{users.map(user=>{
    return(
        <div>
            <p>{user.name}</p>
        </div>
    )
})}
        </>
    )
}
export default Person;