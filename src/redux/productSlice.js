import { createSlice } from '@reduxjs/toolkit'
const initialState={
    products:[
        {id:1,name:'short',image:'category-3.jpg',price:20,discount:2,disPrice:20 -2/100*2,quantity:1,desc:'full size short'},
        {id:2,name:'ball',image:'category-1.jpg',price:20,discount:2,disPrice:20 -2/100*2,quantity:1,desc:'full size short'},
        {id:3,name:'tabs',image:'category-3.jpg',price:20,discount:2,disPrice:20 -2/100*2,quantity:1,desc:'full size short'},
        {id:4,name:'short',image:'category-3.jpg',price:20,discount:2,disPrice:20 -2/100*2,quantity:1,desc:'full size short'}
    ],product:{}
};
const productSlice=createSlice({
    name:'Ecom',
    initialState,
    reducers:{
        productDetail:(state,action)=>{
        if('PRODUCT'){
            return{...state,product:state.products.find(product=>product.id ===parseInt(action.payload))}
        }
        }
    }

})
export default productSlice.reducer;