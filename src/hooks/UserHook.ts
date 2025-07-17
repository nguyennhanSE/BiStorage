'use client'

import { axiosInstance } from '@/lib/axios'

export function useUserHook (){

    const findUser = async (name : string, offset : number, limit : number) => {
        try{
            const {service1Axios} = axiosInstance();
            const res = await service1Axios.get('/users/search',{
                params : {
                    email : name,
                    offset : offset,
                    limit : limit
                }
            });
            return res.data.data.data;
        }
        catch(error){
            throw error
        }
    };

    return {
        findUser    

    }
}