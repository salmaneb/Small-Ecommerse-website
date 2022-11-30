import { createSlice } from "@reduxjs/toolkit";
import products from './components/products.js'
const initialState={
    cartItems:products,
    amount:0,
    total:0,
    loading:false
};

const cartSlice=createSlice({
    name:'any',
    initialState,
    reducers:{
remove:(state)=>{
    state.cartItems=state.cartItems.filter((item)=>item.price !==item.price)
}
    }
});
export default cartSlice.reducer;
export const {remove}=cartSlice.actions