import { createSlice } from "@reduxjs/toolkit";


const appSlice= createSlice({

    name:"store",
    initialState:{
        isMenuOpen:true,
        IsDarkMode:true
    },
    reducers:{
        toggleMenu:(state)=>{

            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        },
        DarkMenu:(state)=>{
            state.IsDarkMode=!state.IsDarkMode;
        }
    }

})

export const {toggleMenu,closeMenu,DarkMenu} = appSlice.actions;

export default appSlice.reducer;