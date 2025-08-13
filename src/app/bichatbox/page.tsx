'use client'

import { RiWechatChannelsLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { TbTableDashed } from "react-icons/tb";
import { TbTableExport } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import { CiStar } from "react-icons/ci";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CiImageOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { useEffect, useState } from "react";
import { useLoadingStore } from "@/stores/LoadingStore";
import { BiChatBoxHomePage } from "@/components/chatbox/HomePage";
import ChatBox from "@/components/chatbox/ChatBox";

const Page = () => {
    const router = useRouter();
    const [showSidebar,setShowSideBar] = useState(false);
    const {setLoading} = useLoadingStore();
    useEffect(()=> {
        setLoading(false);
    },[setLoading])

    // Enter Chatbox
    const [enterChat,setEnterChat] = useState(false);
    const [mounted, setMounted] = useState(false);
    // New chatbox
    const [newChat, setNewChat] = useState(false);

    useEffect(() => {
        if (!mounted) {
            return;
        }
        if (enterChat){
            try {
                localStorage.setItem('enterChat', enterChat ? 'true' : 'false');
            } catch {}
        }
    }, [enterChat,mounted]);
    // Check if user has entered chatbox before
    useEffect(() => {
        setMounted(true);
        const storedValue = localStorage.getItem('enterChat');
        if (storedValue === 'true') {
            setEnterChat(true);
        }
    }, []);
    if (!mounted) return null;

    return (
        <div className="flex h-screen w-full">
            {/* Content */}
            <section className="flex-grow flex flex-col p-2"
            style={{
            background: 'radial-gradient(circle at center, #7DAFAF 0%, #ffffff 70%)',
            }}
            >
                {/* Thanh trên cùng */}
                <div className="w-full h-[5%] flex justify-between items-center">
                    <div className="flex gap-2 justify-center items-center">
                        <RiWechatChannelsLine size={24}></RiWechatChannelsLine>
                        <span className="text-md font-bold text-black">BiChatBox</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <button onClick={() => {setLoading(true);router.push('/dashboard')}} className="px-5 text-gray-500 text-sm text-center py-1 border bg-transparent rounded-full cursor-pointer border-gray-400 hover:bg-[#7DAFAF] hover:text-white hover:border-white flex items-center justify-center transition">
                            Back
                        </button>
                        <TbTableDashed onClick={()=>setShowSideBar(true)} size={18} className={`${showSidebar ? 'opacity-0' : 'opacity-100'} text-gray-800 hover:text-[#7DAFAF] cursor-pointer`}></TbTableDashed>
                    </div>

                </div>
                {/* Nội dung */}
                <div className="w-full h-[93%] py-5 px-20">
                    <div className="w-full h-full bg-white/70 border rounded-2xl border-gray-200 backdrop-blur-sm ">
                        {!enterChat ? <BiChatBoxHomePage setEnterChat={setEnterChat} /> : <ChatBox newChat={newChat} />}
                    </div>
                </div>
                {/* Thanh dưới cùng */}
                <div className=" w-full h-[2%] flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                        <FaXTwitter size={15} className="text-gray-500"></FaXTwitter>
                        <FaGithub size={15} className="text-gray-500"></FaGithub>
                        <FaDiscord size={15} className="text-gray-500"></FaDiscord>
                    </div>
                    <div className="flex gap-3 text-sm text-gray-500">
                        <span>Privacy</span>
                        <span>/</span>
                        <span>Terms</span>
                        <span>/</span>
                        <span>Help center</span>
                    </div>
                </div>
            </section>
            {/* Sidebar */}
            <div className={`transition-all duration-500 ease-in-out ${showSidebar ? 'w-[250px]' : 'w-0'} bg-[#E0EBEB] overflow-hidden`}>
                <div className="p-4 flex flex-col gap-5 h-full">
                    <div className="flex justify-between items-center">
                        <TbTableExport onClick={() => setShowSideBar(false)} size={18} className="text-gray-800 cursor-pointer hover:text-[#7DAFAF]"></TbTableExport>
                        <RxAvatar size={25} className="text-gray-800"></RxAvatar>
                    </div>
                    <button onClick={() => setNewChat(!newChat)} className="w-full py-2 rounded-full flex items-center justify-center bg-[#7DAFAF] cursor-pointer hover:bg-[#4A7777] transition">
                        <div className="flex gap-2 items-center ">
                            <FaPlus size={15} className="text-white"/>
                            <span className="text-white text-sm">New Chat</span>
                            <HiSparkles size={15} className="text-white"></HiSparkles>
                        </div>
                    </button>
                    <div className="flex items-center gap-1">
                        <CiStar size={20} className="text-gray-500"></CiStar>
                        <span className="text-gray-500 text-md font-normal">Saved</span>
                    </div>
                    <div className="px-2 flex flex-col gap-6 pb-8 border-b-2 border-gray-300">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <div className="w-8 h-8 bg-blue-200 flex items-center justify-center rounded-full">
                                    <span className="text-sm text-blue-400 font-bold">C</span>
                                </div>
                                <span className="text-sm font-semibold">ChatrAI</span>
                            </div>
                            <HiOutlineDotsHorizontal size={15} className="text-gray-500"></HiOutlineDotsHorizontal>
                        </div>
                        <div className="flex justify-between items-center ">
                            <div className="flex gap-2 items-center">
                                <div className="w-8 h-8 bg-[#efddcb] flex items-center justify-center rounded-full ">
                                    <CiImageOn size={18} className="text-[#E29B6C]"></CiImageOn>
                                </div>
                                <span className="text-sm font-semibold">Image of yours</span>
                            </div>
                            <HiOutlineDotsHorizontal size={15} className="text-gray-500"></HiOutlineDotsHorizontal>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <div className="w-8 h-8 bg-[#dcdcee] flex items-center justify-center rounded-full px-3">
                                    <span className="text-sm text-[#9B5DE5] font-bold">D</span>
                                </div>
                                <span className="text-sm font-semibold">Data Analyst</span>
                            </div>
                            <HiOutlineDotsHorizontal size={15} className="text-gray-500"></HiOutlineDotsHorizontal>
                        </div>
                    </div>
                    {/* Today */}
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500 text-md font-normal">Today</span>
                            <IoIosArrowDown size={15} className="text-gray-500"></IoIosArrowDown>
                        </div>
                        <span className="text-sm text-gray-800 font-semibold">How can I improve my time m...</span>
                        <span className="text-sm text-gray-800 font-semibold">What&apos;s the best way to learn a n...</span>
                        <span className="text-sm text-gray-800 font-semibold">How do I start investing in stock... </span>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default Page;
  