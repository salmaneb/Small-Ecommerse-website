import { createAsyncThunk, createSlice,current } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState={
    users:[]
};
export const fethUsers=createAsyncThunk('users', async()=>{
    let response=await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
});
const usersSlice=createSlice({
    name:'users',
    initialState,
    reducers:{
        deleteUser:(state,action)=>{
            const users = current(state); 
            console.log(action.payload)
            state.users = users.users.filter(user=> {
                return user.id !== action.payload});
        },
        updateUsers:(state,action)=>{
            let users=current(state);
            state.users=users.users.map(item=>{
                if(item.id ===1){
                    return {...users, name: 'Alfred'};
                }
                return users;
            })
        },
        
    },
    extraReducers:{
        [fethUsers.fulfilled]:(state,action)=>{
            state.users=action.payload  

        }
    }
});
export default usersSlice.reducer;
export const {deleteUser,updateUsers}=usersSlice.actions