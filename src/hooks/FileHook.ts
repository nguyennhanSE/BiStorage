'use client'

import { useFileStore } from '@/stores/FileStore'
import { AddFilePayload, FetchFilesParams, defaultFetchFilesParams } from '@/models/Interface'
import { axiosInstance } from '@/lib/axios'
import axios from 'axios'
import { toast } from 'sonner'

//tạm thời
import ParentAndChild from "../../public/data/ParentAndChild.json";

//temporate for FileInfo
import FileInfo from "../../public/data/FileInfo.json";
import { PermissionFileType } from '@/stores/FilePermissionStore'


export function useFileHook() {
    const{setLoading} = useFileStore();

    const fetchFiles = async(params : FetchFilesParams) => {
        setLoading(true);
        try {
            const {service1Axios} = axiosInstance();
            const response = await service1Axios.get('/files/filter/with-permissions',{
                params: {
                    ...params,
                    ...defaultFetchFilesParams
                } 
            });
            return response.data.data.data;
        }
        catch{
            toast.error('Failed to fetch files.')
        }
        finally{
            setLoading(false);
        }
    };

    const addFile = async(payload : AddFilePayload , selectedFile: File) => {
        setLoading(true);
        try{
            const {service1Axios} = axiosInstance();
            const response = await service1Axios.post('/files/add',payload);
            const putObjectUrl = response.data.data.put_object_url;
            // const uploadLoadValue = response.data.data.upload_lock_value;
            try{
                const res = await axios.put(putObjectUrl,selectedFile,{
                    headers:{
                        "Content-Type": selectedFile.type
                    },
                    onUploadProgress: (progressEvent) => {
                        const percentCompleted = Math.round(
                          (progressEvent.loaded * 100) / (progressEvent.total || 1) 
                        );
                        toast.loading(`Uploading ${selectedFile.name}: ${percentCompleted}%`);
                    },
                });
                if (res.status === 200){
                    toast.success(`${selectedFile.name} uploaded successfully!`);
                    // try{
                    //     await service1Axios.patch(`/files/${response.data.data.id}/uploaded`,{
                    //         "upload_lock_value" : uploadLoadValue
                    //     })
                    // }
                    // catch{
                    //     toast.error('There is errors why uploading file. Please try again.');
                    //     return;
                    // }
                }
                else{
                    toast.error('There is errors why uploading file. Please try again.');
                    return;
                }
            }
            catch{
                toast.error('There is errors why uploading file. Please try again.');
                return;
            }
        }
        catch{
            toast.error('There is errors why uplaoding file. Please try again.');
            return;
        }
        finally{
            setLoading(false);
        }
    };

    const recoverFile = async(id : string, destination_folder_id : string) => {
        try{
            setLoading(true);
            const {service1Axios} = axiosInstance();
            await service1Axios.patch(`/files/${id}/recover`, {
                params : {
                    "destination_folder_id": destination_folder_id,
                    "id": id
                }
            });
        }
        catch{
            toast.error("There is errors why restoring file. Please try again.");
            return;
        }
        finally{
            setLoading(false);
        }
    };

    const softDeleteFile = async(id : string) => {
        try{
            setLoading(true);
            const {service1Axios} = axiosInstance();
            await service1Axios.patch(`/files/${id}/soft-delete`);
        }
        catch{
            toast.error("There is errors why deleting file. Please try again.");
            return;
        }
        finally{
            setLoading(false);
        }
    };

    const permanentDeleteFile = async(id : string) => {
        try{
            setLoading(true);
            const {service1Axios} = axiosInstance();
            await service1Axios.patch(`/files/${id}/hard-delete`);
        }
        catch{
            toast.error("There is errors why deleting file. Please try again.");
            return;
        }
        finally{
            setLoading(false);
        }
    };

    const fetchFileById = async(id : string) => {
        try{
            // const {service1Axios} = axiosInstance();
            // const res = await service1Axios.get(`/files/${id}/metadata`);
            // return res.data.data;
            return FileInfo.data;
        }
        catch(error){
            throw error;
        }
    };

    // Tạm thời
    const fetchFilePermissonById = (id: string): PermissionFileType[] => {
        return ParentAndChild.child
          .filter((x) => x.parent_folder_id === id).map((file) => ({ ...file, child: [] })); 
    };

    const getPreviewUrl = async(id : string) => {
        try{
            const {service1Axios} = axiosInstance();
            const res = await service1Axios.get(`/files/${id}/download-url`,{
                params : {
                    preview : true
                }
            });
            return res.data.data.url;
        }
        catch (error) {
            throw error;
        }
    };

    const handleDownloadFile = async(id : string) => {
        try{
            const {service1Axios} = axiosInstance();
            const res = await service1Axios.get(`/files/${id}/download-url`,{
                params : {
                    preview : false
                }
            });
            return [res.data.data.url,res.data.data.file_name];
        }
        catch (error) {
            throw error;
        }
    };

    const fetchSubFile = async(id : string, is_folder : boolean, sort_by : string, is_asc: boolean, offset : number, limit : number) => {
        try{
            const {service1Axios} = axiosInstance();
            const res = await service1Axios.get(`/files/${id}/sub-file`,{
                params :{
                    is_folder : is_folder,
                    sort_by : sort_by,
                    is_asc : is_asc,
                    offset : offset,
                    limit : limit
                }
            });
            return res.data.data;
        }
        catch (error){
            throw error;
        }
    };
    
    return {
        fetchFiles,
        addFile,
        recoverFile,
        softDeleteFile,
        permanentDeleteFile,
        fetchFileById,
        getPreviewUrl,
        handleDownloadFile,
        fetchSubFile,
        fetchFilePermissonById
    }
}
