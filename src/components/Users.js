import React, { useContext } from "react";
import { myContext } from "../App";
import { Table } from 'react-bootstrap';
function Users(){
    let {users}=useContext(myContext);
    return(
        <>
            <ul>{
                users.map(user=>{
                    return(
                        <div key={user.id}>
                            <Table striped hover bordered>
                                <tr>
                                    <td>id</td>
                                    <td>name</td>
                                    <td>age</td>
                                </tr>
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                </tr>
                            </Table>
                        </div>
                    )
                })
            }</ul>
        </>
    );
}
export default Users;