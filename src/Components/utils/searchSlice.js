import { createSlice } from "@reduxjs/toolkit";



const SearchSlice= createSlice({
    name:"Slice",
    initialState:[],
    reducers:{
        cacheResults:(state,action)=>{
            state.push(action.payload);
        }
    }
})


export const {cacheResults}= SearchSlice.actions;
export default SearchSlice.reducer;
