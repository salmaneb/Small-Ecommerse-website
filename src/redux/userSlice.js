import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {
 nomOfCkaes:20
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        buyCake:(state)=>{
            state.nomOfCkaes--
        }
    },
    extraReducers: {},
  })
  export default userSlice.reducer;
  export const {buyCake}=userSlice.actions
