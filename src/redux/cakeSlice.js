import { createSlice } from '@reduxjs/toolkit';
const initialState={
    cakes:12
};

const cakeSlice=createSlice({
    name:'any',
    initialState,
    reducers:{
        buyCake:(state)=>{
            state.cakes +=1;
        }
    }
});
export default cakeSlice.reducer;
export const {buyCake}=cakeSlice.actions;