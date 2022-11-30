import React, { useContext } from "react";
import { myContext } from "../App";
function BookList(){
  let {users}=useContext(myContext);
  return(
    <>
<ul>{
  users.map(user=><li>{user.name}</li>)
}</ul>
    </>
  )
}
export default BookList;