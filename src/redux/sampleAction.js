import axios from "axios"

export const sampleAction=()=>async(dispatch)=>{
    let {data}=await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({type:'suc',payload:data})
}