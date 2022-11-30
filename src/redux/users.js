import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState={
    loading:false,
    users:[],
    errors:''

};
export const getU=createAsyncThunk('users',async()=>{
    const response=await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
});
const users=createSlice({
    name:'any',
    initialState,
    reducers:{

    },
    extraReducers:{
        [getU.pending]:(state,action)=>{
            state.loading=true;
            
        },
        [getU.fulfilled]:(state,action)=>{
            state.loading=false;
            state.users=action.payload
        }
    }
})
export default users.reducer;