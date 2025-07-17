'use client'
import { RxCross2 } from "react-icons/rx"
import { IoArrowBackOutline } from "react-icons/io5";
import "./adjust.css"


import { FaFolder } from "react-icons/fa";
// tạm thời
import ParentAndChild from '../../../public/data/ParentAndChild.json'
import { FolderOpen } from "lucide-react";
import { useFileHook } from "@/hooks/FileHook";
import { useFilePermissionStore } from "@/stores/FilePermissionStore";
import { useEffect, useState} from "react";

export function AdjustPermissionModal (){
    // tạm thời
    const {fetchFilePermissonById} = useFileHook();
    const {parents,setParents} = useFilePermissionStore();
    const handleExpandFile = (index: number) => {
        const isOpen = openFolder.includes(index);
        if (parents[index].child.length > 0) {
            // Nếu đã có child rồi, chỉ toggle trạng thái mở
            if (isOpen) {
                setOpenFolder(prev => prev.filter((i) => i !== index)); // Đóng folder
            } else {
                setOpenFolder(prev => [...prev, index]); // Mở folder
            }
            return;
        }
        // Nếu chưa có child => fetch và mở
        const temp2 = fetchFilePermissonById(index);
        if (temp2) {
            const temp3 = {
                ...temp2,
                child: []
            };
            const updatedParents = parents.map((item, i) => {
                if (i === index) {
                    return {
                        ...item,
                        child: [...item.child, temp3]
                    };
                }
                return item;
            });
            setParents(updatedParents);
            setOpenFolder(prev => [...prev, index]); // Mở folder sau khi fetch
        }
    };
    useEffect(() => {
        const temp = ParentAndChild.parent.map((x) => ({
          ...x,
          child: []
        }));
        setParents(temp);
    },[]);
    // Lưu những folder đang mở
    const isOpen = (index : number) => {
        return openFolder.includes(index);
    }
    const [openFolder, setOpenFolder] = useState<number[]>([]);

    return(
        <div className="modal-overlay">
            <div className="modal-content flex flex-col gap-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 group cursor-pointer ">
                        <IoArrowBackOutline size={20} className="text-gray-600 group-hover:text-gray-800 transition-transform duration-200 group-hover:-translate-x-1"></IoArrowBackOutline>
                        <span className="text-lg text-gray-600 group-hover:underline group-hover:text-gray-800">Back</span>
                    </div>
                    <RxCross2 size={20} className="cursor-pointer"></RxCross2>
                </div>
                <span className="text-gray-600 text-xl font-semibold">Access of NguyenNhan</span>
                <div className="w-full min-h-[400px] rounded-xl border-2 border-[#ebd5b3] p-3">
                    <div className="w-full h-full space-y-5 overflow-y-auto">
                    {parents.map((x, index) =>
                    !x.is_folder ? (
                        <div key={x._id} className="w-full border flex justify-between px-4 py-3 rounded-lg border-[#dcc097] ">
                            <div className="flex gap-2 items-center">
                                <FaFolder size={20} className="fill-[#dcc097]" />
                                <span className="text-gray-500 text-md">{x.name}</span>
                            </div>
                        </div>
                    ) : (
                        <div onClick={() => handleExpandFile(index)} key={x._id} className={`"w-full border flex justify-between px-4 py-3 rounded-lg  flex-col cursor-pointer ${isOpen(index) ? 'border-[#7DAFAF]' : 'border-gray-200'}`}>
                            <div className="flex gap-2 items-center">
                                <FolderOpen size={20} className={`${isOpen(index) ? 'text-gray-500 fill-[#7DAFAF]' :'text-[#7DAFAF]'} `} />
                                <span className="text-gray-500 text-md">{x.name}</span>
                            </div>

                            {/* Animated Content */}
                            {x.child && isOpen(index) && (
                                <div className="transition-all duration-300 overflow-hidden bg-white">
                                <div className="space-y-5 px-2">
                                    {x.child.map((y) => (
                                    <div
                                        key={y._id}
                                        className="w-full flex justify-between px-4 py-3 "
                                    >
                                        <div className="flex gap-2 items-center">
                                            {y.is_folder ? (<FolderOpen size={20} className="text-[#7DAFAF]"/>) : (<FaFolder size={20} className="fill-[#dcc097]" />)}
                                            <span className="text-gray-500 text-md">{y.name}</span>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                                </div>
                            )}
                        </div>
                    )
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}