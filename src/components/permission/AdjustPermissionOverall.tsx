'use client'

import { RxCross2 } from "react-icons/rx"
import { IoArrowBackOutline } from "react-icons/io5";
import "./adjust.css"
import { AdjustPermissionModal } from "./AdjustPermissionModal";
import ParentAndChild from '../../../public/data/ParentAndChild.json'
import { PermissionFileType, useFilePermissionStore } from "@/stores/FilePermissionStore";
import { useEffect } from "react";

export function AdjustPermissionOverall (){
    const { setParents } = useFilePermissionStore();
    useEffect(() => {
        const parentsWithChild: PermissionFileType[] = ParentAndChild.parent.map((file) => ({
            ...file,
            child: [] 
        }));
        setParents(parentsWithChild);
    }, []);
    return (
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
                    <AdjustPermissionModal></AdjustPermissionModal>
                </div>
            </div>
        </div>
    )
}