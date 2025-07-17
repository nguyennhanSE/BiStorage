import axios from 'axios'
export const axiosInstance = () => {
    const createAxiosInstance = (url : string) => {
        const instance = axios.create({
            baseURL : url,
            timeout : 50000
        })
        
        return instance;
    }
    const service1Axios = createAxiosInstance(process.env.BASE_URL!)
    return {
        service1Axios
    }
}