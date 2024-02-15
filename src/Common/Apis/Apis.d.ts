import {AxiosRequestConfig} from "axios";

export interface CustomRequest extends AxiosRequestConfig {
    isAuthRequired?: boolean;
}