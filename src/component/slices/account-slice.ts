import { createSlice } from "@reduxjs/toolkit";
import { ResponseType } from "../../interfaces/user/response"

const accountLifeCycles = {

}
 const accountReducer:any = {
    name:"account",
    initialState: {
        status: ResponseType.Pending,
        statusCode: null,
        loading:false,
        errors:null,
        message:null
    },
    extraReducers: accountLifeCycles
 }

 const accountSlice = createSlice(accountReducer);
 export default accountSlice.reducer;