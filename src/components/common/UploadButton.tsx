'use client'

import { LuFolderUp } from "react-icons/lu";
import { MdUploadFile } from "react-icons/md";
import "./adjust.css"
import { RxCross2 } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";
import { shortenFilename, summarizeFileList } from "@/utils/functions";
export function UploadButton({setIsOpen} : {setIsOpen : (val : boolean) => void}) {
    // File
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [fileLabel, setFileLabel] = useState<string>("Upload your File");
    // Folder
    const folderInputRef = useRef<HTMLInputElement | null>(null);
    const [folderLabel, setFolderLabel] = useState<string>("Upload your Folder");
    const handlePickFile = (e : React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setFileLabel(file.name);
        }
    }
    const handlePickFolder = (e : React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files ? Array.from(e.target.files) : [];
        if (files.length > 0) {
            const allFilesName = files.map((x) => x.name);
            setFolderLabel(summarizeFileList(allFilesName));
        }
    }

    useEffect(() => {
        const el = folderInputRef.current;
        if (!el) return;
        el.setAttribute('webkitdirectory', ''); // Chrome/Edge
        el.setAttribute('directory', '');       // một số trình duyệt khác
        el.setAttribute('multiple', '');        // lấy toàn bộ file trong thư mục
    }, []);
    return (
        <div className="modal-overlay">
            <div className="modal-content flex flex-col gap-1">
                <div className="flex justify-end">
                    <RxCross2 onClick={() => setIsOpen(false)} size={17 } className="text-gray-700 cursor-pointer"></RxCross2>
                </div>
                <span className="text-black text-lg font-semibold ">Upload your files and folders</span>
                <span className="text-gray-400 text-sm font-semibold">Choose file or folder</span>
                {/* Input ẩn */}
                <input aria-label="File upload" type="file" className="hidden" ref={fileInputRef} onChange={(e) => handlePickFile(e)} />
                <input aria-label="Folder upload" type="file" className="hidden" ref={folderInputRef} onChange={(e) => handlePickFolder(e)} />
                <div className="flex gap-4 w-full px-2 pt-5 pb-5">
                    <div className="flex-1 gap-2 flex">
                        {/* Folder */}
                        <div className="h-full w-full rounded-md border-2 border-gray-300 shadow-sm flex items-center justify-center">
                            <span className="text-gray-700 text-sm font-sans text-center " title={folderLabel}>{folderLabel}</span>
                        </div>
                        <button title="Upload Folder" onClick={() => folderInputRef.current?.click()} className="px-3 py-2 bg-[#121C2D] flex items-center justify-center rounded-md cursor-pointer">
                            <LuFolderUp className="text-white" size={18} />
                        </button>
                    </div>
                    <div className="flex-1 gap-2 flex">
                        {/* File */}
                        <div className="h-full w-full rounded-md border-2 border-gray-300 shadow-sm flex items-center justify-center">
                            <span className="text-gray-700 text-sm font-sans text-center" title={fileLabel}>{shortenFilename(fileLabel,20)}</span>
                        </div>
                        <button title="Upload File" onClick={() => fileInputRef.current?.click()} className="px-3 py-2 bg-[#121C2D] flex items-center justify-center rounded-md cursor-pointer">
                            <MdUploadFile className="text-white" size={18} />
                        </button>
                    </div>

                </div>
                <div>
                    <button title="Upload Files" className="px-4 py-2 text-center  bg-gray-100 rounded-md cursor-pointer hover:outline-1 hover:outline-black">
                        <span className="text-sm font-medium">Upload</span>
                    </button>
                </div>
            </div>
        </div>
    )
}