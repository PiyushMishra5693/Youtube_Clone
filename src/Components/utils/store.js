import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appSlice";


const store= configureStore({

    reducer:{
        app:appslice,
    }
    
})


export default store;