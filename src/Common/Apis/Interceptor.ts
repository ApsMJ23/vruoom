import axios, {
    AxiosError,
    AxiosInstance,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from 'axios';
import { NavigateFunction } from 'react-router-dom';

/**
 * @Description
 * This file intended to intercept incoming request and response.
 * Main utility will to authorize the user else redirect to login page.
 * or we want the error to display api failure and sentry logs can be put here.
 */
const onRequest = (
    config: InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>,
    navigate: NavigateFunction,
): InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>> => {
    return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    // captureMessagesViaErrorLogger(error.message);
    return Promise.reject(error);
};

const onResponse = (response: AxiosResponse, navigate: NavigateFunction): AxiosResponse => {
    return response;
};

const onResponseError = (error: AxiosError, navigate: NavigateFunction): Promise<AxiosError> => {
    if (error.response?.status === 401) {
        // source.cancel();
        if (location.pathname.includes('investor/')) navigate('/investor/login');
        else navigate('/login');
    }
    return Promise.reject(error);
};

export function applyInterceptor(
    axiosInstance: AxiosInstance,
    navigate: NavigateFunction,
): AxiosInstance {
    axiosInstance.interceptors.request.use((req) => onRequest(req, navigate), onRequestError);
    axiosInstance.interceptors.response.use(
        (res) => onResponse(res, navigate),
        (err) => onResponseError(err, navigate),
    );
    const token = localStorage.getItem('token');
    token && (axiosInstance.defaults.headers['Authorization'] = `Token ${token}`);
    return axiosInstance;
}