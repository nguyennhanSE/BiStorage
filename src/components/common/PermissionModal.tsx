'use client'

import "./adjust.css"
import { RxCross2 } from "react-icons/rx";
import { LuPencilLine } from "react-icons/lu";
import { HiOutlineEye } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
import { MdPersonAddAlt1 } from "react-icons/md";
import { FaUsersViewfinder } from "react-icons/fa6";
import { FileFormat } from "@/models/Interface";
import { GoPeople } from "react-icons/go";
import { HiOutlineLink } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GrFormViewHide } from "react-icons/gr";
import { AiFillEdit } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

// Temp
import UserInfo from "../../../public/data/UserInfo.json";
import Image from "next/image";
import { useUserHook } from "@/hooks/UserHook";
import { useUserPermissionStore } from "@/stores/UserPermissionStore";

const Users = UserInfo.data;

export function PermissionModal ({file,setIsOpen,setUserPermision} : {file : FileFormat,setIsOpen : (val : boolean) => void,setUserPermision : (val : boolean) => void}) {
    const [selectedTab,setSelectedTab] = useState('links');
    const [havePeople,setHavePeople] = useState(false);
    const [selectedAdjust,setSelectedAdjust] = useState<string>("");
    useEffect(() => {
        if(Users){
            setHavePeople(true);
        }
    },[])

    // Find User
    const {findUserTemp} = useUserHook();
    const [users,setUsers] = useState<UserTemp[] | null>(null);
    const handleFindUser = (value: string) => {
        if (value === ""){
            setUsers(null);
            return;
        }
        setUsers(findUserTemp);
        setInputRef(value);
    }

    // Khi người dùng chọn người để thêm thì append vào input
    const [selectedUsers, setSelectedUsers] = useState<UserTemp[]>([]);
    const handleRemoveUser = (user: UserTemp) => {
        setSelectedUsers(selectedUsers.filter(u => u.name !== user.name));
    }
    const [inputRef,setInputRef] = useState<string | null>(null);
    const inputRefElement = useRef<HTMLInputElement | null>(null);
    // Animation
    const [hover, setHover] = useState(false);
    const [hoverAfter,setHoverAfter] = useState(true);
    const [isExiting, setIsExiting] = useState(false);

    const {setUser} = useUserPermissionStore();

    // Animation
    const [triggerModal,setTriggerModal] = useState(false);
    return(
        <div className="modal-overlay" >
            <div className={`modal-content flex flex-col gap-3 !rounded-b-4xl ${triggerModal ? 'slide-left' : ''}`}>
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
                    <div className="relative">
                        <div className="w-full h-[50px] border-2 rounded-lg px-5 flex items-center gap-2 focus-within:border-[#b3aca3]">
                            <div className="flex gap-2 w-full h-full items-center">
                                <div className="flex items-center justify-center h-[35px] w-[45px] bg-[#f9f7f4] rounded-full"><MdPersonAddAlt1 size={16}></MdPersonAddAlt1></div>
                                <div className="w-full h-full relative flex items-center gap-2 flex-wrap">
                                    {/* Avatars trước */}
                                    {selectedUsers && selectedUsers.length > 0 && (
                                        selectedUsers.map((user, index) => (
                                        <div className="relative w-[30px] h-[30px] mt-2" key={index}>
                                            <Image src={user.avatar} alt="avatar" fill className="rounded-full object-cover" />
                                            <div className="absolute -top-2 -right-2 p-1  rounded-full bg-gray-400 flex items-center justify-center cursor-pointer z-20">
                                                <RxCross2 size={12} className="text-white" onClick={() => handleRemoveUser(user)}  />
                                            </div>
                                        </div>
                                        ))
                                    )}

                                    {/* Input sau */}
                                    <input
                                        type="text"
                                        ref={inputRefElement}
                                        id="email"
                                        className="peer flex-1 min-w-[120px] border-none bg-transparent focus:outline-none focus:ring-0 placeholder-transparent h-full"
                                        placeholder="Add an email or name"
                                        onChange={(e) => handleFindUser(e.target.value)}
                                    />

                                    {/* Label */}
                                    <label
                                    htmlFor="email"
                                    className={`absolute left-0 bg-white px-1 transition-all z-10
                                        ${selectedUsers && selectedUsers.length > 0
                                        ? '-top-3 text-sm text-[#b3aca3]'
                                        : 'peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#b3aca3]'
                                        }`}
                                    >
                                    Add an email or name
                                    </label>
                                </div>

                            </div>
                            <div className="flex items-center">
                                <button className="rounded-md bg-[#121C2D] px-4 py-2 text-center">
                                    <span className="text-white">Invite</span>
                                </button>
                            </div>
                        </div>
                        <FindUserModal inputRefElement={inputRefElement}  inputRef={inputRef} setInputRef={setInputRef} selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers} users={users ? users : []}></FindUserModal>
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
                                <div className="w-full flex gap-2 items-center pt-1">
                                    <span className="text-gray-500 text-base font-semibold ">General access</span>
                                    <div className="rounded-sm border border-gray-400 p-2 flex items-center justify-center cursor-pointer group" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
                                        onClick={() => {
                                            if (hoverAfter) {
                                                setIsExiting(true);
                                            } else {
                                                setHoverAfter(true);
                                            }
                                        }}
                                        >
                                        {!hoverAfter ? (<IoIosArrowDown
                                            size={12}
                                            className={`text-gray-400 ${hover ? "animate-arrow-down" : ""}`}
                                        />) : (
                                            <IoIosArrowUp
                                                size={12}
                                                className={`text-gray-400 ${hover ? "animate-arrow-up" : ""}`}
                                            />
                                        )}
                                    </div>
                                </div>
                                {hoverAfter && <div className={`w-full h-full flex flex-col gap-5 ${isExiting ? 'slide-exit' : 'slide-enter'}`}
                                onAnimationEnd={() => {
                                    if (isExiting) {
                                        setHoverAfter(false);
                                        setIsExiting(false);
                                    }
                                }}
                                >       
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
                                </div>}
                            </div>
                        </div>
                        {/* People With Access */}
                        <div className="flex flex-col max-h-[400px]">
                            <div className="w-full h-[2px] bg-gray-200">
                            </div>
                            <div className="flex flex-col pt-2 gap-5">
                                <span className="text-gray-500 text-base font-semibold pt-3">People with access</span>
                                <div className="relative w-full">
                                    <div className={`w-full flex flex-col gap-5 overflow-y-auto pr-2 ${hoverAfter ? 'max-h-[100px]' : 'min-h-[200px] max-h-[300px]'}`}>
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
                                                    {!file.is_folder ? (<PermissionAdjustModal
                                                        name={x.name}
                                                        value={x.permission}
                                                        onChange={(val) => {
                                                            // Handle permission change logic here
                                                        }}
                                                        selectedAdjust={selectedAdjust}
                                                        setSelectedAdjust={setSelectedAdjust}
                                                    ></PermissionAdjustModal>)
                                                    /* Nếu là Folder thì có nút hiện chi tiết */
                                                    :(
                                                        <>
                                                        <button className="text-sm text-[#b3aca3] hover:underline cursor-pointer" 
                                                        onClick={() => {
                                                            setUser(x);
                                                            setTriggerModal(true);
                                                            setTimeout(() => {
                                                                setUserPermision(true);
                                                                setIsOpen(false);
                                                            }, 300);
                                                        }}
                                                        >
                                                            Show Details
                                                        </button>
                                                        </>
                                                    )
                                                    }
                                                        
                                                    <RxCross2 size={15} className="text-gray-400 cursor-pointer" />
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

export function PermissionAdjustModal({
    name,
    value,
    onChange,
    selectedAdjust,
    setSelectedAdjust
}: {
    name: string;
    value: string;
    onChange: (val: string) => void;
    selectedAdjust: string | undefined;
    setSelectedAdjust: (name: string) => void;
}) {
    const [open, setOpen] = useState(false);

    const options = [
        { label: "View", value: "view", icon: <GrFormViewHide size={16} /> },
        { label: "Edit", value: "edit", icon: <AiFillEdit size={16} /> },
        { label: "Comment", value: "comment", icon: <FaCommentDots size={16} /> }
    ];

    const selected = options.find(opt => opt.value === value);
    const handleOpen = () => {
        setSelectedAdjust(name);
        if (name  === selectedAdjust) {
            if (open) {
                setOpen(false);
            } else {
                setOpen(true);
            }
        }
        else {
            setOpen(true);
        }
    };
    return (
        <div key={name} className="relative min-w-[140px] text-sm">
            {/* Button */}
            <div
                className="flex items-center justify-between border border-gray-300 rounded-md bg-white px-2 py-1 cursor-pointer shadow-sm hover:border-blue-400"
                onClick={handleOpen}
            >
                <div className="flex items-center gap-3 text-gray-700">
                    {selected?.icon}
                    <span>{selected?.label}</span>
                </div>
                <MdKeyboardArrowDown size={16} className="text-gray-500" />
            </div>

            {/* Dropdown */}
            {open && selectedAdjust === name && (
                <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-[9999]">
                    {options.map(opt => (
                        <div
                            key={opt.value}
                            className="flex items-center gap-3 px-2 py-1 cursor-pointer hover:bg-gray-100"
                            onClick={() => {
                                onChange(opt.value);
                                setOpen(false);
                            }}
                        >
                            {opt.icon}
                            <span>{opt.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export interface UserTemp {
    name: string;
    email: string;
    avatar: string;
    permission: string;
}

export function FindUserModal ({users, selectedUsers, setSelectedUsers,inputRef,setInputRef,inputRefElement} : {users : UserTemp[] | null, selectedUsers: UserTemp[], setSelectedUsers: (user: UserTemp[]) => void, inputRef : string | null , setInputRef: (value: string | null) => void, inputRefElement: React.RefObject<HTMLInputElement | null>}) {
    if (!users || users.length === 0) {
        return null; // Return null if no users to display
    }
    
    if (inputRef === null || inputRef === "") {
        return null;
    }

    const handleAddUser = (user: UserTemp) => {
    if (!selectedUsers.some(u => u.email === user.email)) {
        const presentUsers = [...selectedUsers];
        presentUsers.unshift(user);
        setSelectedUsers(presentUsers);
        setInputRef("");
        inputRefElement.current!.value = ""; // Clear the input field after adding a user
    }
    };

    return (
        <div className="absolute mt-1 left-0 w-full max-h-[150px] overflow-y-auto bg-white border rounded-md shadow-lg z-[9999] p-2 flex flex-col">
            <span className="text-sm text-gray-400 font-mono">Suggested people</span>
            <div className="w-full flex flex-col gap-1">
                {users && Array.isArray(users) && users.map((user: UserTemp, index: number) => (
                    <div key={index} className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleAddUser(user)}>
                        <div className="relative w-[30px] h-[30px]">
                            <Image src={user.avatar} alt="avatar" fill className="rounded-full object-cover" />
                        </div>
                        <span className="text-sm text-gray-700">{user.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
