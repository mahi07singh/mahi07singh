import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiPath } from "../api-path";
import { getAPIConfig } from "../service/get-api-config";
import axios from "axios";

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