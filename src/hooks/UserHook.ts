'use client'

import { axiosInstance } from '@/lib/axios'
import UserInfo from '../../public/data/UserInfo.json'
const Users = UserInfo.data;

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

    const findUserTemp = () => {
        return Users;
    }

    return {
        findUser,
        findUserTemp
    }
}