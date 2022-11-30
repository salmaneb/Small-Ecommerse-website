import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
const  initialState= {
    username: "",
    email: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  };
export const userSlice = createSlice({
  name: "user",
 
  reducers: {
    
  },
  extraReducers: {
    
  },
})
export default userSlice.reducer;