'use client'

import "./adjust.css"
import { RxCross2 } from "react-icons/rx";
import { LuPencilLine } from "react-icons/lu";
import { HiOutlineEye } from "react-icons/hi";
import { useEffect, useState } from "react";
import { MdPersonAddAlt1 } from "react-icons/md";
import { FaUsersViewfinder } from "react-icons/fa6";
import { FileFormat } from "@/models/Interface";
import { GoPeople } from "react-icons/go";
import { HiOutlineLink } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";

// Temp
import UserInfo from "../../../public/data/UserInfo.json";
import Image from "next/image";
const Users = UserInfo.data;

export function PermissionModal ({file,setIsOpen} : {file : FileFormat,setIsOpen : (val : boolean) => void}) {
    const [selectedTab,setSelectedTab] = useState('links');
    const [havePeople,setHavePeople] = useState(false);
    useEffect(() => {
        if(Users){
            setHavePeople(true);
        }
    },[])
    return(
        <div className="modal-overlay ">
            <div className="modal-content flex flex-col gap-3 !rounded-b-4xl">
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
                    <div className="w-full min-h-[50px] border-2 rounded-lg px-5 flex items-center gap-2">
                        <div className="flex gap-2 w-full">
                            <div className="flex items-center justify-center h-[35px] w-[45px] bg-[#f9f7f4] rounded-full"><MdPersonAddAlt1 size={16}></MdPersonAddAlt1></div>
                            <input type="text" className="w-full border-none focus:outline-none focus:ring-0" placeholder="Add an email or name" />
                        </div>
                        <div className="flex items-center">
                            <button className="rounded-md bg-[#121C2D] px-4 py-2 text-center">
                                <span className="text-white">Invite</span>
                            </button>
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
                    (<div className="w-full mt-5 flex flex-col gap-5">
                        {/* General Access */}
                        <div className="flex flex-col ">
                            <div className="w-full h-[2px] bg-gray-200">
                            </div>
                            <div className="flex flex-col pt-2 gap-5">
                                <span className="text-gray-500 text-base font-semibold pt-1">General access</span>
                                <div className="w-full flex gap-4">
                                    <div className="rounded-sm  border-gray-300 border-2 flex items-center justify-center p-3">
                                        <GoPeople size={16}></GoPeople>
                                    </div>
                                    <div className="flex justify-between w-full flex-col">
                                        <span className="text-sm text-black font-normal">
                                            Only Those Invited
                                        </span>
                                        <span className="text-[12px] text-gray-400">4 People</span>
                                    </div>
                                </div>
                                <div className="w-full flex gap-4">
                                    <div className="rounded-sm  border-gray-300 border-2 flex items-center justify-center p-3">
                                        <HiOutlineLink size={16}></HiOutlineLink>
                                    </div>
                                    <div className="flex justify-between w-full flex-col">
                                        <span className="text-sm text-black font-normal">
                                            Link Access
                                        </span>
                                        <span className="text-[12px] text-gray-400">Only users have shared the link</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* People With Access */}
                        <div className="flex flex-col max-h-[400px]">
                            <div className="w-full h-[2px] bg-gray-200">
                            </div>
                            <div className="flex flex-col pt-2 gap-5">
                                <span className="text-gray-500 text-base font-semibold pt-3">People with access</span>
                                <div className="relative w-full">
                                    <div className="w-full flex flex-col gap-5 max-h-[100px] overflow-y-auto pr-2 ">
                                        {Users.map((x, index) => (
                                            <div
                                                key={index}
                                                className="w-full flex justify-between items-center"
                                            >
                                                <div className="flex gap-2">
                                                    <div className="relative w-[40px] h-[40px]">
                                                        <Image
                                                            src={x.avatar}
                                                            alt="avt"
                                                            fill
                                                            className="rounded-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col justify-between h-full">
                                                        <span className="text-sm text-gray-700">{x.name}</span>
                                                        <span className="text-sm text-gray-300">{x.email}</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <span className="text-sm text-gray-700">can edit</span>
                                                    <MdKeyboardArrowDown size={15} className="text-gray-700" />
                                                    <RxCross2 size={15} className="text-gray-400" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Hiệu ứng fade ở dưới */}
                                    <div className="pointer-events-none absolute bottom-[-0.5rem] left-0 w-full h-5 bg-gradient-to-t from-white to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>
                )}
            </div>
        </div>
    )
}