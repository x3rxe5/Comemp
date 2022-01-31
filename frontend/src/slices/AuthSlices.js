import { createSlice } from "@reduxjs/toolkit";

const AuthSlices = createSlice({
    name: "auth",
    initialState: {
     loggedInValue: false
    },
    reducers: {
        isAuth:state => {
            state.loggedInValue = true;
        },
        loggedOutFromReducer:state => {
          state.loggedInValue = false;
        }
    }
});


export const { isAuth,loggedOutFromReducer } = AuthSlices.actions;
export default AuthSlices.reducer;

