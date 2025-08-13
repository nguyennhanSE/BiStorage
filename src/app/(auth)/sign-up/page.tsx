'use client'

import { useEffect, useState } from "react";
import "./adjust.css"
const Page = () => {
    //wait for the background image
    const [bgLoading,setBgLoading] = useState(false);
    useEffect(() => {
      const img = typeof window !== "undefined" ? new window.Image() : null;
      if (img){
        img.src = "/auth/background.jpg";
        img.onload = () => setBgLoading(true);
      }
    },[]);
  return(
    <section className={`w-full min-h-screen flex items-center justify-center background `} 
    style={bgLoading ? {backgroundImage: `url('/auth/background.jpg')`} : { background: "linear-gradient(120deg, #7DAFAF, #2C3E50)"}}
    >
      {bgLoading ? (
      <div className="shadow-xl flex w-[90%] max-w-5xl overflow-hidden min-h-[500px]">
        {/* Left */}
        <div className="flex-[4] p-8 flex items-center justify-center text-3xl font-semibold text-white">
          BiStorage
        </div>
        {/* Right */}
        <div className="bg-white flex-[6] py-10 flex items-center justify-center rounded-xl">
          <div className="h-full w-[80%] flex flex-col gap-4">
            <h2 className="font-bold text-[#173f3b] text-4xl">Sign Up</h2>
            <form className="w-full h-full flex flex-col gap-2">
              <div className="text-gray-900">Name*</div>
              <input type="text" placeholder="Enter your name" className="w-full h-[40px] bg-gray-200 rounded-lg px-5 placeholder:text-sm placeholder:text-gray-400" />
              
              <div className="text-gray-900">Surname*</div>
              <input type="text" placeholder="Enter your surname" className="w-full h-[40px] bg-gray-200 rounded-lg px-5 placeholder:text-sm placeholder:text-gray-400" />
              
              <div className="text-gray-900">Email*</div>
              <input type="text" placeholder="Enter your email" className="w-full h-[40px] bg-gray-200 rounded-lg px-5 placeholder:text-sm placeholder:text-gray-400" />
              
            </form>
            <div className="w-full flex flex-col gap-2">
              <button className="bg-[#173f3b] cursor-pointer w-full h-[40px] rounded-xl flex items-center justify-center text-white font-medium">Next</button>
              <div className="w-full flex justify-center gap-1">
                <div className="text-gray-900 text-sm">Already have an account?</div>
                <a href="/sign-in" className="text-sm text-[#4592fe] hover:underline">Sign in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      ) : null} 
    </section>
  );
};
export default Page