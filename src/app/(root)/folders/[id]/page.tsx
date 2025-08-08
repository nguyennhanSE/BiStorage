'use client'

import { BreadCrumb} from "@/components/common/BreadCrumb"
import Header from "@/components/common/Header"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { FaFolderClosed } from "react-icons/fa6";
// tạm thời
import ParentAndChild from "../../../../../public/data/ParentAndChild.json";
import Image from "next/image";
import { FaFolder } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { DropDownMenuAllFiles } from "@/components/allFiles/DropDownMenu";
import { useEffect } from "react";
import { breadCrumbItem, useBreadCrumbStore } from "@/stores/BreadCrumbStore";
import { useLoadingStore } from "@/stores/LoadingStore";

const Page = () => {
    const router = useRouter();
    // Lấy item từ url để thêm vào breadCrumb
    const params = useParams();
    const searchParams = useSearchParams();
    const id = params.id;
    const name = searchParams.get('name');
    const {addBreadCrumbList} = useBreadCrumbStore();
    useEffect(() => {
        if(!name) return;
        const item : breadCrumbItem = {
            label : name,
            url : `/folders/${id}?name=${encodeURIComponent(name)}`
        }
        addBreadCrumbList(item)
    },[])

    // Loading State
    const {setLoading} = useLoadingStore();
    useEffect(()=> {
        setLoading(false);
    },[setLoading])

    
    return(
        <section className="w-full h-full">
            {/* Header */}
            <div className="left-[20%] fixed top-0 w-[80%] pt-3 h-[64px] bg-white z-40">
                <Header></Header>
            </div>
            {/* Content */}
            <div className="pt-[64px] pl-8 min-h-screen">
                <BreadCrumb></BreadCrumb>
                {/* Folders */}
                <div className="w-full h-full flex flex-col gap-3 pb-5 ">
                    <h2 className="text-lg font-semibold">
                        Folders
                    </h2>
                    <div className="w-full flex gap-4 flex-wrap">
                        {ParentAndChild.child.map((x) => (
                            x.is_folder && (
                                <div key={x._id}>
                                    <div onDoubleClick={() => router.push(`/folders/${x._id}?name=${encodeURIComponent(x.name)}`)} key={x._id} className="bg-[#DFF4E5] rounded-lg min-h-[120px] min-w-[250px] p-3 flex flex-col justify-between cursor-pointer">
                                        <FaFolderClosed size={30}></FaFolderClosed>
                                        <div className="w-full flex flex-col gap-1">
                                            <div className="font-semibold text-black text-sm">{x.name}</div>
                                            <div className="w-full flex justify-between py-1">
                                                <span className="text-gray-400 text-sm">{x.total_size} Gb</span>
                                                <div className="px-2 text-center bg-[#ecfff1] text-sm rounded-lg text-gray-600">{x.created_at}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
                {/* Line */}
                <div className="flex justify-center w-full h-[2px]">
                    <div className="w-[90%] h-full bg-black">
                    </div>
                </div>
                {/* Files */}
                <div className="w-full h-full flex flex-col gap-3 pt-5">
                    <h2 className="text-lg font-semibold">
                        Files
                    </h2>
                    <div className="w-full flex gap-4 flex-wrap">
                        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ParentAndChild.child.map((x,index)=>(
                            <div key={index} className="relative w-[280px] h-[200px] rounded-2xl border-1 border-gray-200 bg-[#7DAFAF] cursor-pointer flex flex-col justify-between">
                                <Image src='/dashboard/background.svg' alt="background" height={195} width={200} className="absolute w-full h-full object-cover rounded-2xl"></Image>
                                {/* Header */}
                                <div className="flex w-full items-center justify-between p-2 relative">
                                    <div className="flex w-[50%] items-center space-x-2">
                                        <FaFolder size={20} className="text-gray-700"></FaFolder>
                                        <span className="font-semibold text-md truncate max-w-[80%] ">
                                            {x.name}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="text-[#366666] text-1xl">Owned:</div>
                                        <RxAvatar size={20} className="text-teal-700"></RxAvatar>
                                    </div>
                                </div>
                                {/* Center */}
                                <div className="flex h-[50%] w-full items-center justify-between p-2 relative">
                                    <div className="flex flex-col gap-1 items-center">
                                        <span className="text-gray-300 text-md">Shared with:</span>
                                        <div className="flex">
                                            {Array.from({ length: 4 }, (_, x) => (
                                                <RxAvatar size={24} className="rounded-full -ml-3" key={x}></RxAvatar>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <Image src={`/dashboard/${x.storage_detail.mime_type}.png`} alt="icon" height={130} width={130}></Image>
                                    </div>
                                </div>
                                {/* Footer */}
                                <div className="flex w-full items-center justify-between p-2 relative">
                                    <div className="flex gap-2">
                                        <span className="opacity-70 text-sm">Created at:</span>
                                        <span className="opacity-70 text-sm">{x.created_at}</span>   
                                    </div>
                                    <DropDownMenuAllFiles file={x} ></DropDownMenuAllFiles>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Page