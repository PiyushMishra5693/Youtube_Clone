import { createSlice } from "@reduxjs/toolkit";




const resultSlice= createSlice({
    name:"result",
    initialState:[],
    reducers:{
        SearchResult(state,action){
                state.push(action.payload);
        }
    }
})


export const {SearchResult} = resultSlice.actions;

export default resultSlice.reducer;