import {createSlice} from '@reduxjs/toolkit'
let initialstate={
    num:12
};
let cakeSlice=createSlice({
    name:'any',
    initialstate,
    reducers:{
        buyCake:(state,action)=>{
state.num--;
        }
    }
})
export default cakeSlice.reducer;
export const {buyCake}=cakeSlice.actions;