import { useLoginExpiredStore } from '@/stores/LoadingStore';
import axios from 'axios'
export const axiosInstance = () => {
    const createAxiosInstance = (url : string) => {
        const instance = axios.create({
            baseURL : url,
            timeout : 50000
        })
        
        return instance;
    }
    const service1Axios = createAxiosInstance(process.env.NEXT_PUBLIC_BASE_URL!);
    // Middleware for authentication
    service1Axios.interceptors.request.use((config) => {
        // Do something before request is sent
        const accessToken = localStorage.getItem('access_token');
        const {setLoginExpired} = useLoginExpiredStore();
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        else {
            setLoginExpired(true);
        }
        return config;
    }, (error) => {
        // Do something with request error
        return Promise.reject(error);
    });
    service1Axios.interceptors.response.use((response) => {
        // Do something with response data
        return response;
    }, (error) => {
        // Do something with response error
        return Promise.reject(error);
    });

    // Axios instance không cần Header
    const service2Axios = createAxiosInstance(process.env.NEXT_PUBLIC_BASE_URL!);
    return {
        service1Axios,
        service2Axios
    }
}