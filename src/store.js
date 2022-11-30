import { configureStore } from "@reduxjs/toolkit";
import userDetail from "./redux/userDetail";

const store=configureStore({
    reducer:{
        users:userDetail
    }
});
export default store;