import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
const initialState={
    users:[],
    count:0
};
export const getUser=createAsyncThunk('user',async()=>{
    let response=await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
});
const counterSlice=createSlice({
    name:'users',
    initialState,
    reducers:{
        increment: state=>{
            state.count +=1;
        }
    },
    extraReducers:{
        [getUser.fulfilled]:(state,action)=>{
            state.users=action.payload;
        }
    }
});
export default counterSlice.reducer;
export const {increment}=counterSlice.actions;