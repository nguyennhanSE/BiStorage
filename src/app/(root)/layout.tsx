import Sidebar from "@/components/SideBar/Sidebar";
import React from "react";

export default function Layout({children}:{children : React.ReactNode}) {
  return (
    <section className="w-full h-full min-h-screen">
      <div className="fixed top-0 left-0 h-screen w-[18%] bg-[#f9f8f5] z-50">
        <div className="absolute right-0 top-[5%] h-[90%] w-[2px] bg-black"></div>
        <Sidebar></Sidebar>
      </div>
      <div className="ml-[18%] w-[82%]">
        {children}
      </div>
    </section>
  );
}
