'use client'

import { useFileHook } from "@/hooks/FileHook";
import { FetchFilesParams, FileFormat } from "@/models/Interface";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

const Page = () => {
    const router = useRouter();
    const [deletedFiles,setDeletedFiles] = useState<FileFormat[]>([]);
    const {fetchFiles} = useFileHook();
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        const fetch = async() => {
            const params : FetchFilesParams = {
                is_deleted : true,
                sort_by : "updated_at",
                is_asc : true,
                offset : 0,
                limit : 10,
            }
            const res = await fetchFiles(params);
            setDeletedFiles(res);
            setLoading(false);
        }
        fetch();
    });

    return(
        <div className="bg-gray-50">
            <div className="flex justify-between h-screen">
                <div className='w-[7%] h-screen flex flex-col'>
                    <div className='flex-[1] flex items-center justify-center flex-col text-2xl font-semibold'>
                        <div className='mr-6'>Bi</div>
                        <div className='ml-6 text-[#7DAFAF]'>Box</div>
                    </div>
                    <div className='flex-[9] bg-[#5d9393] rounded-t-full'></div>
                </div>

                <div className="w-full h-full flex">
                    <div className="w-[50px]"></div>
                    <div className="flex-[3]">
                        <Image src='/bin/bin-img.png' alt="image" width={200} height={100} className="rounded-b-full" ></Image>
                    </div>
                    {/* Content */}
                    <div className="flex-[6] p-3 flex-col flex gap-3">
                        <div className="w-full h-[50px] flex justify-end pr-10">
                            <button className="h-full p-5 items-center justify-center flex bg-[#2b6161] text-white rounded-l-3xl" onClick={()=>router.push('/')}>Back to Home</button>
                        </div>
                        <div className="w-full h-[150px] flex items-center justify-between">
                            <Image src={'/bin/frame2.jpg'} alt="frame" height={50} width={50}></Image>
                            <div className="h-full w-[40%] flex flex-col items-center justify-center">
                                <div className="text-4xl flex">
                                    <div className="text-[#5d9393]">Yo</div>
                                    <div>ur</div>
                                </div>
                                <div className='text-3xl flex'>
                                    <div className='text-[#5d9393]'>Recy</div>
                                    <div>cle Bin</div>
                                </div>
                            </div>
                            <Image src='/bin/frame1.jpg' alt="frame" width={50} height={50}></Image>
                        </div>
                        {/* Conditional Rendering */}

                        {loading ? 
                        (
                            <div>Loading...</div>
                        ) 
                        : 
                        (
                            deletedFiles.length > 0 ? 
                            (
                                <>
                                <div className="h-[20px] w-[100%] flex justify-between px-5 font-semibold">
                                    <div className="flex gap-2">
                                        <div>Name</div>
                                        <ArrowDown></ArrowDown>
                                    </div>
                                    <div className="mr-5">Deleted at</div>
                                </div>
                                <div className="w-full h-full px-8 flex flex-col gap-1">
                                    <div className="w-full h-[1px] bg-gray-200"></div>
                                    {deletedFiles?.map((file) => (
                                        <div key={file._id}>
                                            
                                        </div>
                                    ))}
                                </div>

                                </>
                            )
                            :
                            (
                                <div className="w-full h-full px-[100px] flex flex-col gap-2 items-center">
                                    <Image src='/bin-image/bin-avt.png' height={370} width={330} alt='' className='bg-none mr-4'></Image>
                                    <div className='notify text-[#239c9c]'>Oops...seems like there is nothing in your bin</div>
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div className="w-[5%] bg-[#5d9393] h-screen rounded-b-full"></div>
            </div>
        </div>
    )
}

export default Page;