import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isLoggedIn:false,
    userName:'',
    userEmail:''
}

const userSlice = createSlice({
    name:'userSlice',
    initialState:initialState,
    reducers:{
        userLoggedIn(state,action){
            state.isLoggedIn=action.payload
        },
        userInfo(state,action){
            state.userEmail=action.payload.email;
            state.userName=action.payload.name;
        }
    }
})
export const userActions = userSlice.actions;
export default userSlice;