import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState={
    users:[],
    count:0
};
export const getUser=createAsyncThunk('user',async()=>{
    let response=await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
});
const cartSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        increment:(state)=>{
            state.count++;
        }
    },
    extraReducers:{
        [getUser.fulfilled]:(state,action)=>{
            state.users=action.payload;
        }
    }
});
export default cartSlice.reducer;
export const {increment}=cartSlice.actions;