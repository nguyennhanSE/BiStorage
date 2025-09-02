'use client';

import { filesInSidebar, generalInSidebar } from "@/lib/constants"
import { useBreadCrumbStore } from "@/stores/BreadCrumbStore";
import Image from "next/image"
import { usePathname, useRouter} from "next/navigation";

import { useEffect, useState } from "react";
import { UploadButton } from "../common/UploadButton";
// import { useTransitionHook } from "@/hooks/TransitionHook";
import { useLoadingStore } from "@/stores/LoadingStore";

const Sidebar = () => { 
    // const nav = useTransitionHook();
    const [chosenPage, setChosenPage] = useState("");
    const {setLoading} = useLoadingStore();
    const {resetBreadcrumb} = useBreadCrumbStore();
    const router = useRouter();
    const pathName = usePathname();
    const getPathName = (path : string) => {
        const segments = path.split('/');
        return segments[1] || 'dashboard';
    }
    useEffect(() => {
        setLoading(false);
        setChosenPage(getPathName(pathName));
    },[pathName,setLoading]);
    const handleNavigatePage = (url : string) => {
        if (url === pathName){
            resetBreadcrumb();
            return;
        }
        // if (url === '/statistics'){
        //     nav(url);
        // }
        setLoading(true);
        router.push(url);
    
    }
    // UploadButton setOpen
    const [isOpen,setIsOpen] = useState(false);

    return(
        <section className="w-full h-full flex gap-2 py-7 px-5 overflow-auto custom-scrollbar">
            <div className="flex flex-col gap-10 w-full">
                {/* Header */}
                <div className="w-full flex gap-2 px-2">
                    <Image width={30} height={30} alt="avatar" src='/brandAvt.png' className="rounded-full"></Image>
                    <span className="text-lg font-bold text-black">BiStorage</span>
                </div>
                {/* Pages */}
                <div className="w-full flex flex-col gap-10">
                    {/* General */}
                    <div key='general' className="w-full flex flex-col gap-2">
                        <span className="text-sm text-gray-500 px-2 font-semibold">General</span>
                        {generalInSidebar.map((x,index) => {
                        const chosen = x.name.toLocaleLowerCase() === chosenPage;
                        return (
                            <div onClick={()=>handleNavigatePage(x.path)} className={`w-full flex gap-3 px-4 py-2 cursor-pointer ${chosen ? 'bg-black rounded-lg text-white' : ' hover:border hover:rounded-lg hover:bg-[#f0ede6] text-black'}`} key={index}>
                                {x.icon && <x.icon size={18} color={`${chosen ? '#fff' : '#000'}`} />}
                                <span className={`text-sm font-semibold`}>{x.name}</span>
                            </div>
                        );
                        })}
                    </div>  
                    {/* Files */}
                    <div key='files' className="w-full flex flex-col gap-2">
                        <span className="text-sm text-gray-500 px-2 font-semibold">Files</span>
                        {filesInSidebar.map((x,index) => (
                            <div onClick={() => handleNavigatePage(x.path)} className={`w-full flex gap-3 px-4 py-2 cursor-pointer hover:border hover:rounded-lg hover:bg-[#f0ede6] text-black `} key={index}>
                                {x.icon && <x.icon size={18} />}
                                <span className="text-sm font-semibold">{x.name}</span>
                            </div>
                        ))}
                    </div>  
                    {/* Tags */}
                </div>
                {/* Upload */}
                <div className="relative w-full flex flex-col min-h-[150px] bg-[#DFF4E5] rounded-lg px-3 py-2 gap-3">
                    <div className="flex gap-2">
                        <div className="text-black text-semibold ">Cloud Platform</div>
                        <Image src="/Sidebar/blink.svg" alt="blink icon" width={35} height={35} className="bg-[#DFF4E5]" />
                    </div>
                    <div className="text-sm text-gray-600">The only file storage platform that you need</div>
                    <button onClick={() => setIsOpen(true)} className="group w-[50%] ml-auto h-[30px] rounded-lg border border-black flex items-center justify-center cursor-pointer hover:bg-black">
                        <span className="text-sm text-black group-hover:text-white">Upload</span>
                    </button>
                    <Image width={50} height={50} src="/Sidebar/leaf.svg" alt="overlay"  style={{ width: "80%", height: "80%", position: "absolute", zIndex: 1, top:"80px",right:"120px" }}/>
                </div>
                {/* Memory */}
            </div>
            {isOpen && <UploadButton setIsOpen={setIsOpen}/>}
        </section>
    )
}

export default Sidebar