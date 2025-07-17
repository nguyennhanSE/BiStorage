'use client'

import { LuPanelTop } from "react-icons/lu";
import { LuLayoutGrid } from 'react-icons/lu';
import FilesData from "../../../public/data/Files.json";
import { ChevronsUpDown} from "lucide-react";
import { DropDownMenuAllFiles } from "./DropDownMenu";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaFolder } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import BiBoxLoader from "../loader/BiBoxLoader";

const AllFiles = () => {
    const [tableTab, setTableTab] = useState(true);
    //set tạm thời để demo
    const [loading,setLoading] = useState<boolean>();
    const handleTabChange = (isTable : boolean) => {
        setTableTab(isTable);
        if (!isTable){
        setLoading(true);}
    }
    useEffect(() => {
    if (loading) {
        const timer = setTimeout(() => {setLoading(false);}, 1000);
        return () => clearTimeout(timer);
    } else {
    setLoading(false);}
    }, [loading]);

    return (
        <section className="w-full h-full flex flex-col overflow-x-hidden">
            {/* Header */}
            <div className="w-full flex justify-between h-[50px] items-center">
                <h3 className="text-lg font-semibold">All Files</h3>
                <div className="h-full flex gap-1">
                    <div className="flex justify-center items-center">
                        <button onClick={()=>handleTabChange(true)} className={`p-2 rounded-lg cursor-pointer ${tableTab ? 'bg-black ' : 'bg-gray-100'} `}>
                            <LuPanelTop size={15} className={`${tableTab? 'text-white' : 'text-black'}`}></LuPanelTop>
                        </button>
                    </div>
                    <div className="flex justify-center items-center">
                        <button onClick={()=>handleTabChange(false)} className={`p-2 rounded-lg cursor-pointer ${!tableTab ? 'bg-black ' : 'bg-gray-100'} `}>
                            <LuLayoutGrid size={15} className={`${!tableTab? 'text-white' : 'text-black'}`}></LuLayoutGrid>
                        </button>
                    </div>
                </div>
            </div>
            {/* Content */}
            {tableTab ? 
            (<table className="w-full h-full">
                <thead>
                <tr className="text-sm text-gray-500 h-[40px]">
                    <th className="p-1 bg-white">
                        <div className=" flex justify-center items-center h-full w-full bg-gray-50 rounded-lg">
                            <input type="checkbox" />
                        </div>
                    </th>
                    <th className="p-1 bg-white">
                        <div className="flex justify-between bg-gray-50 h-full w-full items-center rounded-lg px-2">
                            <span>name</span>
                            <ChevronsUpDown size={14} />
                        </div>
                    </th>
                    <th className="p-1 bg-white">
                        <div className="flex justify-between bg-gray-50 h-full w-full items-center rounded-lg px-2">
                            <span>tag</span>
                            <ChevronsUpDown size={14} />
                        </div>
                    </th>
                    <th className="p-1 bg-white">
                        <div className="flex justify-between bg-gray-50 h-full w-full items-center rounded-lg px-2">
                            <span>size</span>
                            <ChevronsUpDown size={14} />
                        </div>
                    </th>
                    <th className="p-1 bg-white">
                        <div className="flex justify-between bg-gray-50 h-full w-full items-center rounded-lg px-2">
                            <span>last modified</span>
                            <ChevronsUpDown size={14} />
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                    {FilesData.data.map((x,index) => (
                        <tr key={index} className="text-sm font-semibold text-black border-b h-[50px] hover:bg-[#f7f4eb] group ">
                            <td>
                                <div className="flex w-full h-full items-center justify-center">
                                    <input type="checkbox" className="hidden group-hover:block" />
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center px-2">
                                    <span>{x.name}.</span>
                                    <span className="text-gray-300">{x.storage_detail.mime_type}</span>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center px-2">
                                    <div className="p-1 border rounded-lg">
                                        <span>{x.tag_ids[0].name}</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center px-2">
                                    <span>{x.total_size}</span>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center justify-between px-2">
                                    <span className="ml-1">{x.created_at}</span>
                                    <DropDownMenuAllFiles file={x} ></DropDownMenuAllFiles>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>)
            :
            (
            <>
            {!loading && <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {FilesData.data.map((x,index)=>(
                    <div key={index} className="relative w-full h-[200px] rounded-2xl border-1 border-gray-200 bg-[#7DAFAF] flex flex-col justify-between">
                        <Image src='/dashboard/background.svg' alt="background" height={195} width={260} className="absolute w-full h-full object-cover rounded-2xl"></Image>
                        {/* Header */}
                        <div className="flex w-full items-center justify-between p-2 relative">
                            <div className="flex w-[50%] items-center space-x-2">
                                <FaFolder size={20} className="text-gray-700"></FaFolder>
                                <span className="font-semibold text-md truncate max-w-[80%] ">
                                    {x.name}
                                </span>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                                <div className="text-[#366666] text-1xl">Owned:</div>
                                <RxAvatar size={20} className="text-teal-700"></RxAvatar>
                            </div>
                        </div>
                        {/* Center */}
                        <div className="flex h-[50%] w-full items-center justify-between p-2 relative">
                            <div className="flex flex-col gap-1 items-center">
                                <span className="text-gray-300 text-md">Shared with:</span>
                                <div className="flex">
                                    {Array.from({ length: 4 }, (_, x) => (
                                        <RxAvatar size={24} className="rounded-full -ml-3" key={x}></RxAvatar>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <Image src={`/dashboard/${x.storage_detail.mime_type}.png`} alt="icon" height={130} width={130}></Image>
                            </div>
                        </div>
                        {/* Footer */}
                        <div className="flex w-full items-center justify-between p-2 relative">
                            <div className="flex gap-2">
                                <span className="opacity-70 text-sm">Created at:</span>
                                <span className="opacity-70 text-sm">{x.created_at}</span>   
                            </div>
                            <DropDownMenuAllFiles file={x} ></DropDownMenuAllFiles>
                        </div>
                    </div>
                ))}
            </div>}
            {loading && <div className="w-full h-[200px] flex items-center justify-center">
                <BiBoxLoader></BiBoxLoader>
            </div>}
            </>
            )}
        </section>
    )
}

export default AllFiles