'use client'


import React from "react";
import "./adjust.css";
export default function Layout({children}:{children : React.ReactNode}) {
  const [showSpaceMenu, setShowSpaceMenu] = React.useState(false);
  return (
    <section className="w-full h-full min-h-screen">
      <div className="fixed top-0 left-0 h-screen w-[18%] bg-[#f9f8f5] z-50">
        <div className="absolute right-0 top-[5%] h-[90%] w-[2px] bg-black"></div>
        <Sidebar></Sidebar>
      </div>
      <div className="ml-[18%] w-[82%]">
        {children}
      </div>
      <ChoiceMenu showSpaceMenu={showSpaceMenu} setShowSpaceMenu={setShowSpaceMenu} />
      {showSpaceMenu && <SpaceMenu setShowSpaceMenu={setShowSpaceMenu} />}
    </section>
  );
}

import { BsMemory } from "react-icons/bs";
import { RiWechatChannelsLine } from "react-icons/ri";
import PricingSwitcher from "@/components/space/PricingSwitcher";
import LineBar, { FilePercentage } from "@/components/space/LineBar";
import CircleBar from "@/components/space/CircleBar";
const ChoiceMenu = ({showSpaceMenu,setShowSpaceMenu} : {showSpaceMenu : boolean,setShowSpaceMenu : (show : boolean) => void}) => {
  const [showChat,setShowChat] = React.useState(false);
  return (
    <>
      <section className="fixed bottom-5 right-5 z-[101] flex flex-col gap-5">
          <div
          onClick={() => {
            setShowChat(false);
            setShowSpaceMenu(!showSpaceMenu);
          }}  
          className="p-2 rounded-full flex items-center justify-center bg-white shadow-inner shadow-gray-400 hover:shadow-xl hover:-translate-y-1 active:scale-95 transition cursor-pointer">
              <BsMemory size={20} />
          </div>
          <div onClick={() => setShowChat(!showChat)} className="p-2 rounded-full flex items-center justify-center bg-white shadow-inner shadow-gray-400 hover:shadow-xl hover:-translate-y-1 active:scale-95 transition cursor-pointer">
              <RiWechatChannelsLine size={20}  />
          </div>
      </section>
      <ChatPanel open={showChat} onClose={() => setShowChat(false)} />
    </>
  )
}

import { IoDocumentText } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa6";
import { RiFolderVideoFill } from "react-icons/ri";
import { MdOutlineAudioFile } from "react-icons/md";
import { FaFileZipper } from "react-icons/fa6";
import ChatPanel from "@/components/MiniChatBox/ChatPanel";
import Sidebar from "@/components/SideBar/Sidebar";

const SpaceMenu = ({setShowSpaceMenu} : {setShowSpaceMenu : (show : boolean) => void}) => {
  const [activePrice,setActivePrice] = React.useState(false);
  // temp data

  const total = 100;
  const percentage: FilePercentage = {
    document: 30,
    image: 20,
    video: 10,
    audio: 5,
    zip : 8
  };
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowSpaceMenu(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setShowSpaceMenu]);
  return(
    <div onClick={() => setShowSpaceMenu(false)} className="modal-overlay-menu">
      <div className="modal-content-menu flex gap-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col w-[60%] gap-3">
          {/* Upgrade */}
          <div className="w-full border p-5 flex flex-col gap-3 rounded-md bg-[#272525]">
            <PricingSwitcher setActivePrice={setActivePrice}></PricingSwitcher>
            <span className="text-lg font-semibold text-white">Get more space for your files</span>
            <span className="text-[12px] text-white">Upgrade your account to get more storage</span>
            <div className="w-full h-[40px] flex items-center justify-center">
            <div
              className="
                w-[40%] h-full 
                bg-white 
                text-black 
                flex items-center justify-center 
                rounded-md cursor-pointer
                transition-all duration-200 ease-out
                shadow-sm

                hover:bg-gradient-to-r hover:from-pink-400 hover:to-yellow-300 
                hover:text-white 
                hover:shadow-lg 
                hover:scale-105

                active:scale-95 active:shadow-md
              "
            >
              Upgrade to {activePrice ? 'Enterprise' : 'Starter'}
            </div>

            </div>
          </div>
        </div>
        <div className="flex flex-col w-[40%] gap-3">
          {/* Line Bar */}
          <div className="w-full px-5 py-5 flex flex-col gap-2 rounded-md shadow-md border-2">
            <span className="text-lg font-semibold pb-6">All Files</span>
            <LineBar total={total} percentage={percentage} />
          </div>
          {/* Circle Bar */}
          <div className="w-full px-5 py-5 flex flex-col  gap-2 rounded-md border-2">
            <span className="text-lg font-semibold pb-6">Storage used</span>
            <div className="w-full flex items-center justify-center">
              <CircleBar used={23.5} total={100} />
            </div>
            <div className="w-full grid grid-cols-3 gap-y-2 pt-3">
              {/* Document */}
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-md flex items-center justify-center shadow-sm">
                  <IoDocumentText size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-slate-900 font-semibold">Documents</span>
                  <span className="text-sm font-semibold text-slate-500">{percentage.document}%</span>
                </div>
              </div>
              {/* Image */}
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-md flex items-center justify-center shadow-sm">
                  <FaRegImage size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-slate-900 font-semibold">Images</span>
                  <span className="text-sm font-semibold text-slate-500">{percentage.image}%</span>
                </div>
              </div>
              {/* Video */}
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-md flex items-center justify-center shadow-sm">
                  <RiFolderVideoFill size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-slate-900 font-semibold">Videos</span>
                  <span className="text-sm font-semibold text-slate-500">{percentage.video}%</span>
                </div>
              </div>
              {/* Audio */}
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-md flex items-center justify-center shadow-sm">
                  <MdOutlineAudioFile size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-slate-900 font-semibold">Audio</span>
                  <span className="text-sm font-semibold text-slate-500">{percentage.audio}%</span>
                </div>
              </div>
              {/* Zip */}
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-md flex items-center justify-center shadow-sm">
                  <FaFileZipper size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-slate-900 font-semibold">Zip</span>
                  <span className="text-sm font-semibold text-slate-500">{percentage.zip}%</span>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}