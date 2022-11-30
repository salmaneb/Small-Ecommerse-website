import { createSlice } from '@reduxjs/toolkit';
const initialState={
    count:1
}
const userDetail=createSlice({
    name:'users',
    initialState,
    reducers:{
        inc:(state)=>{
            state.count +=1
        }
    }
});
export default userDetail.reducer;
export const {inc}=userDetail.actions;