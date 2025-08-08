'use client'

import {breadCrumbItem, useBreadCrumbStore } from "@/stores/BreadCrumbStore";
import { useRouter } from "next/navigation";
export function BreadCrumb () {
    const router = useRouter();
    const {breadCrumbList,popBreadcrumb} = useBreadCrumbStore();
    // Handle breadCrumb
    const handleNavigateBreadCrumb = (x : breadCrumbItem) => {
        popBreadcrumb(x);
        router.push(x.url);
    }
    return (
        <nav className="flex items-center flex-wrap pt-3 pb-5">
            <ul className="text-gray-800 text-lg flex items-center space-x-2 flex-wrap">
                {breadCrumbList.map((x,index) => (
                    <li key={index} className="flex items-center text-base">
                        <button onClick={() => handleNavigateBreadCrumb(x)} className="p-2 px-3 hover:bg-[#7DAFAF] rounded-full hover:cursor-pointer">{x.label}</button>
                        {index < breadCrumbList.length - 1 && (
                            <span className="mx-2 text-gray-800">&gt;</span>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
}