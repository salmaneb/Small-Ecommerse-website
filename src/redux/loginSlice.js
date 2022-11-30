import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialState={
    msg:'',
    user:'',
    token:'',
    laoding:false,
    errors:''
};
export const signup=createAsyncThunk('users',async(body)=>{
    let res=await fetch('https://jsonplaceholder.typicode.com/users',{
        method:'post',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(body)
    });
    return await res.json();
});
const loginSlice=createSlice({
    name:'users',
    initialState,
    reducers:{
        addToken:(state,action)=>{
            state.token=localStorage.getItem('token');
        }
    },
    extraReducers:{
        [signup.pending]:(state)=>{
            state.laoding=true;
        },
        [signup.fulfilled]:(state,{payload:{errors,msg,token}})=>{
            state.laoding=false;
            if(errors){
                state.errors=errors
            }else{
                state.msg=msg
                state.token=token
                localStorage.setItem('msg',msg);
                localStorage.setItem('token',token);
            }
        },
        [signup.rejected]:(state)=>{
            state.laoding=true;
        }
    }
    
});
export default loginSlice.reducer;
export const {addToken}=loginSlice.actions;