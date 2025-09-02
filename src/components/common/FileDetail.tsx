'use client'

import { useFileHook } from "@/hooks/FileHook";
import { formatDateFromTimestamp, formatSize } from "@/lib/constants";
import { FileFormat } from "@/models/Interface";
import { useEffect,useState } from "react"
export const FileDetail = ({fileId , setIsOpen} : {fileId :string, setIsOpen: (val : boolean) => void}) => {
    const [fileData , setFileData] = useState<FileFormat | null>(null);
    const {fetchFileById} = useFileHook();
    useEffect(() => {
        const fetchData = async () => {
          const res = await fetchFileById(fileId);
          setFileData(res);
        };
        fetchData();
      },[fileId]);

    return(
        <div className={`fixed top-0 right-0 h-full bg-white shadow-lg w-96 p-6 z-99 overflow-y-auto text-sm font-sans`}>
            <button className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-gray-700" onClick={() => setIsOpen(false)} >x</button>
            {fileData ? 
            (
                <div className="flex flex-col w-full h-full min-h-screen">
                    <div className="flex-[1] flex gap-1 border-b border-gray-300 font-bold text-[18px]">
                        <div></div>
                        <div className="text-xl">{fileData.name}</div>
                    </div>
                    <div className="flex-[9] flex flex-col">
                        <div className="border-b border-gray-300 flex flex-col gap-3 pt-5">
                            <div className="w-full h-[150px] border">{fileData.id}</div>
                            <div className="flex flex-col">
                                <div>Người có quyền truy cập</div>
                                <div>avatar</div>
                            </div>
                            <button className="w-[70%] py-2 rounded-2xl border mb-5 hover:bg-gray-200">
                                Quản lý quyền truy cập
                            </button>
                        </div>
                        <div className="pt-5 flex flex-col gap-3">
                            <div className="flex flex-col">
                                <div className="font-bold">Properties</div>
                                <div className="flex">
                                    <div className="flex-[4] text-gray-400">Name</div>
                                    <div className="flex-[6]">{fileData.name}</div>
                                </div>
                                <div className="flex">
                                    <div className="flex-[4] text-gray-400">Saved in</div>
                                    <div className="flex-[6]">
                                        {fileData.parent_folder_id !== "" ? fileData.parent_folder_id : <span className="text-gray-300">(No parent folder)</span>}
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-[4] text-gray-400">Size</div>
                                    <div className="flex-[6]">{formatSize(fileData.total_size)}</div>
                                </div>
                                <div className="flex">
                                    <div className="flex-[4] text-gray-400">Modified</div>
                                    <div className="flex-[6]">{formatDateFromTimestamp(fileData.updated_at)}</div>
                                </div>
                                <div className="flex">
                                    <div className="flex-[4] text-gray-400">Type</div>
                                    <div className="flex-[6]">{fileData.storage_detail.mime_type}</div>
                                </div>
                                <div className="flex">
                                    <div className="flex-[4] text-gray-400">Uploaded by</div>
                                    <div className="flex-[6]">{fileData.owner_id !== "" 
                                        ? fileData.owner_id
                                        : 'Unknown'}</div>
                                </div>
                                <div className="flex">
                                    <div className="flex-[4] text-gray-400">Date uploaded</div>
                                    <div className="flex-[6]">{formatDateFromTimestamp(fileData.created_at)}</div>
                                </div>
                                <div className="flex">
                                    <div className="flex-[4] text-gray-400">Description</div>
                                    <div className="flex-[6]">{fileData.description}</div>
                                </div>                                
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="font-bold">Tags</div>
                                <input
                                className="w-full rounded-xl border-black border p-2"
                                placeholder="Add a tag"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ) 
            :
            (
                <p>No File Information</p>
            )}

        </div>
    )
}