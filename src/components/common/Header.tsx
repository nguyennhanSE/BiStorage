'use client'

import "./adjust.css"
import Image from "next/image";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { FiExternalLink, FiChevronRight } from "react-icons/fi";
// import { RxAvatar } from "react-icons/rx";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="w-full flex h-[50px] justify-between">
            <div className="w-[80%] flex h-full p-2 items-center gap-2 bg-gray-50 rounded-md border">
                <CiSearch size={18}></CiSearch>
                <input type="text" className="border-none focus:outline-none focus:ring-0 w-full" placeholder="Search by folder or file name"/>
            </div>
            <div className="h-full gap-1 flex items-center pr-7">
                <div onClick={() => setIsOpen(!isOpen)} className={`relative p-2 rounded-xl flex items-center justify-center transition-all duration-100 hover:bg-gray-200 ${isOpen ? 'bg-gray-200' : ''}`}>
                    <Image src='/data/temp-1.jpg' alt='User Avatar' width={36} height={36} className="rounded-lg cursor-pointer" />
                    <DropDownMenuHeader isOpen={isOpen} />
                </div>
                {/* <div className="h-full flex items-center">Jenny Wilson</div> */}
            </div>
        </div>
    )
}

const DropDownMenuHeader = ({isOpen} : {isOpen: boolean}) => {
  return (
    <div aria-label="User menu"
    onClick={(e) => e.stopPropagation()}
        className={`dropdown absolute top-full right-0 mt-2 min-w-[280px] rounded-lg bg-white 
                  shadow-xl ring-1 ring-black/5 z-50 overflow-hidden
                  ${isOpen ? 'dropdown--open' : 'dropdown--closed'}`}
    >
      {/* Header */}
      <div className="border-b p-3 space-y-2">
        <div className="h-[50px] w-full flex items-center">
            <div className="flex items-center gap-3 h-full">
                <Image
                    src="/data/temp-1.jpg"
                    alt="User Avatar"
                    width={36}
                    height={36}
                    className="rounded-full"
                />
                <div className="leading-tight flex justify-between flex-col h-full py-1">
                    <div className="text-base font-normal">Nhân Nguyễn</div>
                    <div className="text-[12px] text-gray-500">nguyennhan5665@gmail.com</div>
                </div>
            </div>
        </div>
        <div className="text-[12px] text-gray-500">
          Your account has <span className="font-medium">2 GB</span> storage
        </div>

        <button
          className="text-sm font-medium underline underline-offset-2 hover:opacity-80 cursor-pointer"
          type="button"
        >
          Upgrade
        </button>
      </div>

      {/* Menu list */}
      <div className="border-b p-1">
        <button
          className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100"
          type="button"
        >
          Settings
        </button>

        <button
          className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100"
          type="button"
        >
          Manage account
        </button>

        <button
          className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-100"
          type="button"
        >
          <span className="truncate">Install desktop app</span>
          <FiExternalLink className="shrink-0" />
        </button>

        <button
          className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-100"
          type="button"
        >
          <span className="truncate">Theme</span>
          <FiChevronRight className="shrink-0" />
        </button>

        <button
          className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100"
          type="button"
        >
          Log out
        </button>
      </div>

      {/* Footer */}
      <div className="p-3 flex items-center gap-2">
        <TbWorld size={18} />
        <span className="text-sm text-gray-600">English (United States)</span>
      </div>
    </div>
  );
};


export default Header