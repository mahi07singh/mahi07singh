import { AxiosRequestConfig } from "axios";

export function getAPIConfig() : AxiosRequestConfig {
    let config: AxiosRequestConfig = {};
    config.headers = {
        Authorization: localStorage.getItem('authToken'),
        "x-device-id": localStorage.getItem('deviceId'),
        "Content-Type": "application/json",
    }
    return config;
}