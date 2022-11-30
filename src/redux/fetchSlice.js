import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    loading:true,
    users:[],
    errors:''
};
export const fetchingUser=createAsyncThunk('user',async()=>{
    let response=await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
});
const fetchSlice=createSlice({
    name:'anyThing',
    initialState,
    extraReducers:{
        [fetchingUser.pending]:(state)=>{
            state.loading=true;
        },
        [fetchingUser.fulfilled]:(state,action)=>{
            state.loading=false;
            state.users=action.payload;
        },
        [fetchingUser.rejected]:(state,action)=>{
            state.loading=false;
            state.errors=action.payload
        }
    }
});
export default fetchSlice.reducer;
