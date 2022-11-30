import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState={
    movies:{}
};



let moviSlice=createSlice({
    name:'movies',
    initialState,
    reducers:{
        adMovies:(state,{payload})=>{
            state.movies=payload;
        }
    }
});
export default moviSlice.reducer;
export const {adMovies}=moviSlice.actions
