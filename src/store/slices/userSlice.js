import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isLoggedIn:false,
    userInfo: {},
}

const userSlice = createSlice({
    name:'userSlice',
    initialState:initialState,
    reducers:{
        userLoggedIn(state,action){
            state.isLoggedIn=action.payload
        },
        userInfo(state,action){
            state.userInfo = action.payload;
        }
    }
})
export const userActions = userSlice.actions;
export default userSlice;