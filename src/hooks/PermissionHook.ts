'use client'

import { axiosInstance } from '@/lib/axios'

export function usePermissionHook (){

    const fetchFilePermissions = async(id : string) => {
        try{
            const {service1Axios} = axiosInstance();
            const res = await service1Axios.get(`/files/${id}/permissions`);
            return res.data.data.permissions;
        }
        catch(error) {
            throw error;
        }
    };

    const deleteFilePermission = async(fileId : string, userId : string) => {
        try{
            const {service1Axios} = axiosInstance();
            await service1Axios.delete(`/files/${fileId}/permissions/user/${userId}/delete`);
        }
        catch(error){
            throw error;
        }
    };

    const addFilePermission = async(fileId : string,userId : string,permissionType : number) => {
        try{
            const {service1Axios} = axiosInstance();
            await service1Axios.post(`/files/${fileId}/permissions/add`,{
                permissions : [
                    {
                        "permission_type" : permissionType,
                        "user_id" : userId
                    }
                ]
            });
        }
        catch(error){
            throw error;
        }
    }

    const updateFilePermission = async(fileId : string, userId : string, permissionType : number) => {
        try{
            const {service1Axios} = axiosInstance();
            await service1Axios.patch(`/files/${fileId}/permissions/user/${userId}/update`,{
                fileId : fileId,
                permission_type : permissionType,
                userId : userId
            });
        }
        catch(error){
            throw error;
        }
    }
    

    return {
        fetchFilePermissions,
        deleteFilePermission,
        addFilePermission,
        updateFilePermission
    }
}