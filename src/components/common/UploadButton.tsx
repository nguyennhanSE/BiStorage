'use client'

import { LuFolderUp } from "react-icons/lu";
import { MdUploadFile } from "react-icons/md";
import "./adjust.css"
import { RxCross2 } from "react-icons/rx";
export function UploadButton({setIsOpen} : {setIsOpen : (val : boolean) => void}) {
    return (
        <div className="modal-overlay">
            <div className="modal-content flex flex-col gap-1">
                <div className="flex justify-end">
                    <RxCross2 onClick={() => setIsOpen(false)} size={17 } className="text-gray-700 cursor-pointer"></RxCross2>
                </div>
                <span className="text-black text-lg font-semibold ">Upload your files and folders</span>
                <span className="text-gray-400 text-sm font-semibold">Choose file or folder</span>
                <div className="flex gap-4 w-full px-2 pt-5 pb-5">
                    <div className="flex-1 gap-2 flex">
                        {/* Folder */}
                        <div className="h-full w-full rounded-md border-2 border-gray-300 shadow-sm flex items-center justify-center">
                            <span className="text-gray-500 text-sm font-sans text-center ">Upload your Folder</span>
                        </div>
                        <button className="px-3 py-2 bg-[#121C2D] flex items-center justify-center rounded-md">
                            <LuFolderUp className="text-white" size={18} />
                        </button>
                    </div>
                    <div className="flex-1 gap-2 flex">
                        {/* File */}
                        <div className="h-full w-full rounded-md border-2 border-gray-300 shadow-sm flex items-center justify-center">
                            <span className="text-gray-500 text-sm font-sans text-center ">Upload your Folder</span>
                        </div>
                        <button className="px-3 py-2 bg-[#121C2D] flex items-center justify-center rounded-md">
                            <MdUploadFile className="text-white" size={18} />
                        </button>
                    </div>

                </div>
                <div>
                    <button className="px-4 py-2 text-center  bg-gray-100 rounded-md cursor-pointer hover:outline-1 hover:outline-black">
                        <span className="text-sm font-medium">Upload</span>
                    </button>
                </div>
            </div>
        </div>
    )
}