import {CustomRequest} from "./Apis";
import axios from "axios";


const API_BASE_PATH = 'http://localhost:8000';
const API_BASE_AUTH_PATH = `${API_BASE_PATH}/auth/`;

export const postLogin = (data: any): any => {
    const payload: CustomRequest = {
        method: 'POST',
        url: `${API_BASE_AUTH_PATH}login/`,
        isAuthRequired: false,
        data,
    };
    return axios(payload);
};

export const fetchProfile = ()=>{
    const payload: CustomRequest = {
        method: 'GET',
        url: `${API_BASE_AUTH_PATH}profile/`,
        isAuthRequired: true,
    };
    return axios(payload);
}