import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
const initialState={
    laoding:false,
    users:[],
    errors:''
};
export const myData=createAsyncThunk('users',async()=>{
    let response= await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
});
const myUsers=createSlice({
    name:'anything',
    initialState,
    reducers:{
        increment:(state)=>{
            state.users.find((a)=>a.name ==='john');
        }
    },
    extraReducers:{
        [myData.pending]:(state)=>{
            state.laoding=true
        },
        [myData.fulfilled]:(state,action)=>{
            state.laoding=false;
            state.users=action.payload
        },
        [myData.rejected]:(state,action)=>{
            state.errors=action.payload
        }
    }
});
export default myUsers.reducer;
export const {increment}=myUsers.actions;