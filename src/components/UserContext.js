import React, { useContext } from "react";
import context from "react-bootstrap/esm/AccordionContext";
import { Table } from 'react-bootstrap'
function UserContext(){
    let users=useContext(context);
    
    return(
        <>
<Table>
    <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
    </thead>
    <tbody>
        {users.map(user =>{
            return(
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                </tr>
            )
        })}
    </tbody>
</Table>
        </>
    )
}
export default UserContext;