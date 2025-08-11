'use client'

import { IoArrowBackOutline } from "react-icons/io5";
import "./adjust-modal.css"
import { AdjustPermissionModal } from "./AdjustPermissionModal";
import ParentAndChild from '../../../public/data/ParentAndChild.json'
import { PermissionFileType, useFilePermissionStore } from "@/stores/FilePermissionStore";
import { useEffect} from "react";
import { useUserPermissionStore } from "@/stores/UserPermissionStore";

export function AdjustPermissionOverall ({setIsOpen, setIsOpen2} : {setIsOpen : (val : boolean) => void , setIsOpen2 : (val : boolean) => void}){
    const { setParents } = useFilePermissionStore();
    const {user} = useUserPermissionStore();
    useEffect(() => {
        const parentsWithChild: PermissionFileType[] = ParentAndChild.parent.map((file) => ({
            ...file,
            child: [] 
        }));
        setParents(parentsWithChild);
    }, []);
    return (
        <div className="modal-overlay">
            <div className={`modal-content flex flex-col gap-3`}>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 group cursor-pointer "
                    onClick={() => {
                        setIsOpen(false);
                        setIsOpen2(true);
                    }}
                    >
                        <IoArrowBackOutline size={20} className="text-gray-600 group-hover:text-gray-800 transition-transform duration-200 group-hover:-translate-x-1"></IoArrowBackOutline>
                        <span className="text-lg text-gray-600 group-hover:underline group-hover:text-gray-800">Back</span>
                    </div>
                </div>
                <span className="text-gray-600 text-xl font-semibold">Access of {user?.name}</span>
                <div className="w-full min-h-[400px] rounded-xl border-2 border-[#ebd5b3] p-3">
                    <AdjustPermissionModal></AdjustPermissionModal>
                </div>
            </div>
        </div>
    )
}