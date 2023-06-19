import { createSlice } from "@reduxjs/toolkit";
import { authorizedToken, signup } from "../../data-access/api/auth-api";
import getDecodedToken from "../../helpers/auth/decode-token";
import { ResponseType } from "../../interfaces/user/response";

const authLifeCycles = {
    [authorizedToken.fulfilled as any] : (state:any, action:any) => {
        state.loading = false;
        state.status = ResponseType.Success;
        state.user = getDecodedToken(action.payload);
    },
    [signup.pending as any] : (state:any) => {
        state.loading = true;
    },
    [signup.fulfilled as any] : (state:any, action:any) => {
        state.loading = false;
        state.message = action.payload.message;
        state.statusCode = action.payload.status;
        state.status = ResponseType.Success;
    },
    [signup.rejected as any] : (state:any, action:any) => {
        state.loading = false;
        state.statusCode = action.payload.status;
        state.errors = action.payload.data;
        state.status = ResponseType.Failed;
    }
}

const authReducer: any = {
    name:"auth",
    initialState: {
        status: ResponseType.Pending,
        statusCode: null,
        user:null,
        errors:null,
        message:null,
    },
    extraReducers: authLifeCycles
}

const authSlice = createSlice(authReducer);
export default authSlice.reducer;