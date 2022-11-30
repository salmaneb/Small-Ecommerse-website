import { createSlice } from "@reduxjs/toolkit";
const initialState={count:0};
const getCount=createSlice({
    name:'any',
    initialState,
    reducers:{
        increment:(state)=>{
            state.count++
        },
        decrement:(state)=>{
            state.count--
        }
    }
})
export default getCount.reducer;
export const {increment,decrement}=getCount.actions
//className='ms-5' style={{width:'50px'}}