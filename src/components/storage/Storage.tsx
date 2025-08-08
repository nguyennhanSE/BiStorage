'use client'

import { FaFolderClosed } from "react-icons/fa6";
import foldersData from '../../../public/data/Folders.json';
import { useRouter } from "next/navigation";
import { useLoadingStore } from "@/stores/LoadingStore";

const Storage = () => {
    const router = useRouter();
    const {setLoading} = useLoadingStore();
    return (
        <section className="w-full h-full flex flex-col gap-3">
            <h2 className="text-lg font-semibold">
                Storage
            </h2>
            <div className="w-full flex gap-4 ">  
                {foldersData.data.map((x) => (
                    <div onDoubleClick={() => {router.push(`/folders/${x._id}?name=${encodeURIComponent(x.name)}`); setLoading(true)}} key={x._id} className="bg-[#DFF4E5] rounded-lg min-h-[120px] min-w-[250px] p-3 flex flex-col justify-between cursor-pointer">
                        <FaFolderClosed size={30}></FaFolderClosed>
                        <div className="w-full flex flex-col gap-1">
                            <div className="font-semibold text-black text-sm">{x.name}</div>
                            <div className="w-full flex justify-between py-1">
                                <span className="text-gray-400 text-sm">{x.total_size} Gb</span>
                                <div className="px-2 text-center bg-[#ecfff1] text-sm rounded-lg text-gray-600">{x.created_at}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Storage