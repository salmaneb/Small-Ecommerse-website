import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';
const initialState={
    loading:false,
    users:[],
    erors:''
};
export const todoDisplay=createAsyncThunk('users',async()=>{
    let response=await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;

})
const TodoList=createSlice({
    name:'anything',
    initialState,
    extraReducers:{
        [todoDisplay.pending]:(state)=>{
            state.loading=true
        },
        [todoDisplay.fulfilled]:(state,action)=>{
            state.loading=true;
            state.users=action.payload;
        }
    }
});
export default TodoList.reducer;