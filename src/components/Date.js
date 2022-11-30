// import React, { useEffect, useState } from "react";
// import { Button, Table } from 'react-bootstrap';
// import axios from "axios";
// function App(){
// let[users,setUsers]=useState([]);


//   useEffect(()=>{
// axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => setUsers(res.data)).catch(
//   errors=>console.log(errors)
// );
//   },[])
//   // let one=users.filter((item)=>{
//   //   return item.id === id
//   // })
//   let n;
//   return(
//     <>
//  <Table striped hover>
//   <tr>
//     <th>Id</th>
//     <th>UserName</th>
//     <th>Name</th>
//     <th>Email</th>
//   </tr>
//   {users.map(user =>{
//     return(
//       <tr>
//         <td>{user.id}</td>
//         <td>{user.name}</td>
//         <td>{user.username}</td>
//         <td>{user.email}</td>
//         <button onClick={()=>{
            
//             n = users.filter((ele)=>{
//             return ele.id !== user.id
//           })
//   console.log(n);
//   setUsers(n);
//         }}>delete</button>
//       </tr>
//     )
//   })}
  
//  </Table>



//     </>
//   )
// }
// export default App;