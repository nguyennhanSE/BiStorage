'use client'

import { useState } from "react";
import "./adjust.css";
import { FaArrowCircleUp } from "react-icons/fa";
export function BiChatBoxHomePage({setEnterChat} : {setEnterChat: (value: boolean) => void}) {
  const [focus,setFocus] = useState(false);
  const [gone, setGone] = useState(false);
  return (
    <>
    <div className='flex flex-col w-full h-full'>
      <div className="flex-grow overflow-y-auto p-4"> 
          <div className={`w-full flex flex-col gap-3 pt-10 pl-10 ${focus && !gone ? 'slide-up' : ''} ${gone ? 'hidden' : ''}`}
          onAnimationEnd={() => {setGone(true);setEnterChat(true)}}
          >
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7DAFAF] via-[#c084fc] to-[#facc15] pb-2">
              Hello NguyenNhan
              </h1>
              <span className="text-4xl font-semibold text-gray-400">How can I help you today?</span>
          </div>
      </div>
      <div className="px-10 py-4 flex justify-center items-center">
          <div className="relative w-full">
              <input type="text" placeholder="Ask something" onFocus={() => setFocus(true)} className="w-full text-sm flex-grow p-2 border rounded-2xl outline-none bg-gray-200"/>
              <FaArrowCircleUp size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer hover:text-[#7DAFAF]"></FaArrowCircleUp>
          </div>
      </div>
    </div>
    </>
  );
}