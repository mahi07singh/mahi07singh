import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiPath } from "../api-path";
import { getAPIConfig } from "../service/get-api-config";
import axios from "axios";
// import { StatusCodes } from "http-status-codes";

/**
 * @description This method makes an api call for account signup
 */
export const signup: any = createAsyncThunk(
    "auth/signup",
    async(values, thunkAPI) => {
        try{
            const url = `${process.env.REACT_APP_API_URL}${ApiPath.AuthSignup}`;
            const {data} = await axios.post(url, values, getAPIConfig());
            if(data) {
                return thunkAPI.fulfillWithValue(data); 
            }
        }catch(e: any) {
            return thunkAPI.rejectWithValue(e.response);
        }
    }
);

/**
 * @description This method makes an api call for account signin
 */
// export const signin: any = createAsyncThunk(
//     "auth/signin",
//     async(values, thunkAPI) => {
//         try{
//             const url = `${process.env.REACT_APP_API_URL}${ApiPath.AuthSignin}`;
//             const {data} = await axios.post(url, values, getAPIConfig());
//             if(data.status===StatusCodes.OK) {
//                 localStorage.setItem('authToken',data.authToken);
//                 return thunkAPI.fulfillWithValue(data);
//             }
//         } catch(e:any) {
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     }
// );

/**
 * @description This method sets jwt token set with user's cookie as current user
 */
export const authorizedToken:any = createAsyncThunk(
    "auth/authorizedToken",
    async(values, thunkApi) => {
        try{
            return thunkApi.fulfillWithValue(values);
        } catch(e: any) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);