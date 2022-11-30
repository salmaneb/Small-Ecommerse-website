import React, { useEffect, useState } from "react";
import axios from 'axios';
function useFetch(){
    let[data,setData]=useState([]);
    useEffect(  ()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(response=> setData(response.data)).catch(
            err=>console.log(err)
        );
       
    });
    return[data];
    
}
export default useFetch;