import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
const initialState={
   count:0
};



 const usersReducer=createSlice({
    name:'users',
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.count +=1
        },
        reset:(state)=>{
            state.count=0
        },
        match:(state)=>{
            if(state.count=== 5){
                state.count +=5
            }
        },
        decrement:(state)=>{
            state.count -=1
        }

    },
   
});
export default usersReducer.reducer;
export const {increment,reset,match,decrement}=usersReducer.actions;