'use client'

import "./adjust.css"
import { RxCross2 } from "react-icons/rx";
import { LuPencilLine } from "react-icons/lu";
import { HiOutlineEye } from "react-icons/hi";
import { useState } from "react";
import { MdPersonAddAlt1 } from "react-icons/md";
import { FaUsersViewfinder } from "react-icons/fa6";
import { FileFormat } from "@/models/Interface";

export function PermissionModal ({file,setIsOpen} : {file : FileFormat,setIsOpen : (val : boolean) => void}) {
    const [selectedTab,setSelectedTab] = useState('links');
    const [havePeople] = useState(false);
    return(
        <div className="modal-overlay">
            <div className="modal-content flex flex-col gap-3">
                <div className="flex justify-end">
                    <RxCross2 onClick={() => setIsOpen(false)} size={20} className="cursor-pointer"></RxCross2>
                </div>
                <div className="flex gap-2">
                    <span className="font-semibold text-xl">Access to</span>
                    <span className="font-bold text-xl">{file.name}</span>
                </div>
                <div className="relative w-full h-[40px] border-b px-2 mt-8">
                    <div className="flex gap-8">
                        <div onClick={() => setSelectedTab("people")} className={`cursor-pointer text-lg font-normal opacity-60 ${
                            selectedTab === "people" ? "opacity-100" : "hover:opacity-80"}`}>People
                        </div>
                        <div onClick={() => setSelectedTab("links")} className={`cursor-pointer text-lg font-normal opacity-60 ${
                            selectedTab === "links" ? "opacity-100" : "hover:opacity-80"}`}>Links
                        </div>
                    </div>
                    {/* Underline animation */}
                    <div className="absolute bottom-0 left-2 h-[2px] w-[50px] bg-black transition-all duration-300"
                        style={{
                            transform: selectedTab === "people" ? "translateX(0px)" : "translateX(80px)",
                        }}
                    />
                    </div>

                {/* Content */}
                {selectedTab === 'links' ? 
                (<div className="w-full min-h-[250px] border p-2 flex flex-col gap-1">
                    <div className="w-full h-[80px] bg-[#f9f7f4] px-5 py-4 flex justify-between items-center">
                        <div className="flex gap-3 items-center">
                            <LuPencilLine size={20} className="opacity-70"></LuPencilLine>
                            <div className="flex flex-col gap-1">
                                <span className="text-sm text-black opacity-50">Link for editing</span>
                                <span className="text-sm text-black opacity-50">Create this link in settings</span>
                            </div>
                        </div>
                        <div className="text-black font-serif text-sm border-black border-b-2">Settings</div>
                    </div>
                    <div className="w-full h-[80px] bg-[#f9f7f4] px-5 py-4 flex justify-between items-center">
                        <div className="flex gap-3 items-center">
                            <HiOutlineEye size={20} className="opacity-70"></HiOutlineEye>
                            <div className="flex flex-col gap-1">
                                <span className="text-sm text-black opacity-50">Link for editing</span>
                                <span className="text-sm text-black opacity-50">Create this link in settings</span>
                            </div>
                        </div>
                        <div className="text-black font-serif text-sm border-black border-b-2">Settings</div>
                    </div>
                </div>) :
                (<div className="flex flex-col">
                    <div className="w-full min-h-[70px] border-2 rounded-lg px-5 flex items-center">
                        <div className="flex gap-2 w-full">
                            <div className="flex items-center justify-center h-[35px] w-[45px] bg-[#f9f7f4] rounded-full"><MdPersonAddAlt1 size={16}></MdPersonAddAlt1></div>
                            <input type="text" className="w-full border-none focus:outline-none focus:ring-0" placeholder="Add an email or name" />
                        </div>
                    </div>
                    {!havePeople ?
                    (<div className="w-full h-[250px] border rounded-lg mt-5 flex items-center justify-center ">
                        <div className="flex items-center">
                            <div className="w-full h-full flex flex-col gap-3 text-center items-center">
                                <FaUsersViewfinder size={30}></FaUsersViewfinder>
                                <span className="text-black font-semibold text-lg ">Keep track of people and permissions</span>
                                <span className="text-black font-normal text-md">When specific people are invited to this folder, they&apos;ll be listed here.</span>
                            </div>
                        </div>
                    </div>)
                    :
                    (<div className="w-full min-h-[250px] border rounded-lg mt-5">

                    </div>)}
                </div>
                )}
            </div>
        </div>
    )
}