'use client'

import AllFiles from "@/components/allFiles/AllFiles";
import Header from "@/components/common/Header";
import Space from "@/components/space/Space";
import Storage from "@/components/storage/Storage";
import { useBreadCrumbStore } from "@/stores/BreadCrumbStore";
import { useEffect } from "react";
const Page = () => {
    const {resetBreadcrumb} = useBreadCrumbStore();
    useEffect(() => {
        resetBreadcrumb();
    },[resetBreadcrumb])
    return (
        <section className="w-full h-full ">
            {/* Header */}
            <div className="left-[20%] fixed top-0 w-[80%] pt-3 h-[64px] bg-white z-40">
                <Header></Header>
            </div>
            <div className="pt-[64px] pl-8">
            {/* Folder Storage */}
                <div className="w-full py-3 ">
                    <Storage></Storage>
                    <div className="w-full flex items-center justify-center mt-5">
                        <div className="w-[90%] bg-black h-[2px]"></div>
                    </div>
                </div>
                {/* All Files and Space */}
                <div className="w-full flex pt-5 gap-1 min-h-[400px]">
                    {/* All FIles */}
                    <div className="w-[70%] h-full">
                    <AllFiles></AllFiles>
                    </div>
                    <div className="w-[5%] flex justify-center">
                        <div className="w-[2px] bg-black">
                        </div>
                    </div>
                    {/* Space */}
                    <div className="w-[20%] px-3 h-full">
                        <Space></Space>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Page