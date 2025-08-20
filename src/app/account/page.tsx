'use client'; 

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiEdit2 } from "react-icons/fi";
const sidebarNavItems = [
    "My Profile", "Package Used", "Notifications"
];

const Page = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("My Profile");
    const myProfileRef = React.useRef<HTMLDivElement | null>(null);
    const packageUsedRef = React.useRef<HTMLDivElement | null>(null);
    const sectionRefs: Record<string, React.RefObject<HTMLDivElement | null>> = {
        "My Profile": myProfileRef,
        "Package Used": packageUsedRef,
    };
    const handleJump = (item: string) => {
        setActiveTab(item);
        const target = sectionRefs[item]?.current;
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section className='w-full min-h-screen bg-gray-50 py-8 px-10'>
            {/* Header */}
            <header onClick={() => router.back()} className='flex gap-3 items-center mb-6 group cursor-pointer'>
                <FaArrowLeftLong size={18} className='text-gray-600  group-hover:transition-all duration-300 group-hover:translate-x-[-10px]' />
                <span className='text-2xl font-semibold text-gray-800'>Account Settings</span>
            </header>
            {/* Content */}
            <div className='bg-white rounded-xl shadow-sm flex min-h-[700px]'>
                {/* Sidebar */}
                <aside className='w-[250px] p-4 border-r border-gray-200'>
                    <nav className='flex flex-col h-full'>
                        <ul className='flex flex-col gap-1'>
                            {sidebarNavItems.map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => handleJump(item)}
                                        className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                            activeTab === item
                                                ? 'bg-teal-50 text-teal-600'
                                                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                        }`}
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        {/* Nút xóa tài khoản */}
                        <div className='mt-auto pt-4 border-t border-gray-200'>
                            <button className='w-full text-left px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-50 transition-colors duration-200'>
                                Delete Account
                            </button>
                        </div>
                    </nav>
                </aside>

                {/* Phần nội dung chính */}
                <main className='flex-1 overflow-y-auto'>
                    <div ref={myProfileRef} className="scroll-mt-0">
                        <MyProfileContent></MyProfileContent>
                    </div>
                    <div className='h-[1px] bg-gray-300' ></div>
                    <div ref={packageUsedRef} className="scroll-mt-0">
                        <PackageUsedContent></PackageUsedContent>
                    </div>
                </main>
            </div>
        </section>
    );
};

const MyProfileContent = () => {
    return (
        <div className='flex flex-col gap-8 p-8'>
            <h1 className='text-2xl font-bold text-gray-800'>My Profile</h1>
            <div className='border border-gray-200 rounded-xl p-6'>
                <header className='flex justify-between items-center mb-6'>
                    <div></div>
                    <button className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors'>
                        <FiEdit2 size={14} />
                        Edit
                    </button>
                </header>
                <div className='flex items-center gap-5'>
                    <Image
                    width={80}
                    height={80}
                        src="/data/temp-1.jpg"
                        alt="Profile Picture"
                        className='w-20 h-20 rounded-full object-cover'
                    />
                    <div>
                        <h2 className='text-xl font-semibold text-gray-900'>Nguyen Nhan</h2>
                        {/* <p className='text-gray-500'>Team Manager</p> */}
                        <p className='text-gray-500'>Leeds, United Kingdom</p>
                    </div>
                </div>
            </div>

            {/* Khối 2: Thông tin cá nhân */}
            <div className='border border-gray-200 rounded-xl p-6'>
                <header className='flex justify-between items-center mb-6'>
                    <h3 className='text-lg font-semibold text-gray-800'>Personal Information</h3>
                    <button className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors'>
                        <FiEdit2 size={14} />
                        Edit
                    </button>
                </header>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6'>
                    {/* First Name */}
                    <div>
                        <p className='text-sm text-gray-500 mb-1'>First Name</p>
                        <p className='text-base font-medium text-gray-800'>Nhan</p>
                    </div>
                    {/* Last Name */}
                    <div>
                        <p className='text-sm text-gray-500 mb-1'>Last Name</p>
                        <p className='text-base font-medium text-gray-800'>Nguyen</p>
                    </div>
                    {/* Email */}
                    <div>
                        <p className='text-sm text-gray-500 mb-1'>Email address</p>
                        <p className='text-base font-medium text-gray-800'>nguyennhan5665@gmail.com</p>
                    </div>
                    {/* Phone */}
                    <div>
                        <p className='text-sm text-gray-500 mb-1'>Phone</p>
                        <p className='text-base font-medium text-gray-800'>+09 48 37 1235</p>
                    </div>
                    {/* Bio */}
                    <div className='md:col-span-2'>
                        <p className='text-sm text-gray-500 mb-1'>Bio</p>
                        <p className='text-base font-medium text-gray-800'>Team&apos;s Frontend Developer</p>
                    </div>
                </div>
            </div>

            {/* Khối 3: Địa chỉ */}
            <div className='border border-gray-200 rounded-xl p-6'>
                <header className='flex justify-between items-center mb-6'>
                    <h3 className='text-lg font-semibold text-gray-800'>Address</h3>
                    <button className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors'>
                        <FiEdit2 size={14} />
                        Edit
                    </button>
                </header>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6'>
                    {/* Country */}
                    <div>
                        <p className='text-sm text-gray-500 mb-1'>Country</p>
                        <p className='text-base font-medium text-gray-800'>United Kingdom</p>
                    </div>
                    {/* City/State */}
                    <div>
                        <p className='text-sm text-gray-500 mb-1'>City/State</p>
                        <p className='text-base font-medium text-gray-800'>Leeds, East London</p>
                    </div>
                    {/* Postal Code */}
                    <div>
                        <p className='text-sm text-gray-500 mb-1'>Postal Code</p>
                        <p className='text-base font-medium text-gray-800'>ERT 2354</p>
                    </div>
                    {/* TAX ID */}
                    <div>
                        <p className='text-sm text-gray-500 mb-1'>TAX ID</p>
                        <p className='text-base font-medium text-gray-800'>AS45645756</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


const starterPackage = ['Up to 10,000 units/mo', '24/7 support','Dashboard access'];
const enterprisePackage = ['Unlimited units', 'Account manager', 'Predictive optimization'];
import { IoCheckmark } from "react-icons/io5";
const PackageUsedContent = () => {
    return(
        <div className='flex flex-col gap-8 p-8'>
            <h1 className='text-2xl font-bold text-gray-800'>Package Used</h1>
            {/* Header */}
            <div className='border border-gray-200 rounded-xl p-6'>
                <header className='flex justify-between items-center mb-6'>
                    <h3 className='text-lg font-semibold text-gray-800'>Package Details</h3>
                    {/* <button className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors'>
                        <FiEdit2 size={14} />
                        Edit
                    </button> */}
                </header>
                <div className='flex gap-15'>
                    <div className='w-[350px] h-[250px] flex flex-col border border-gray-800'>
                        <div className='w-full h-[7px] bg-teal-400'>
                        </div>
                        <div className='p-6 flex flex-col gap-4 bg-white'>
                            <span className='text-lg font-semibold text-gray-800'>BiStorage Starter</span>
                            <ul className='flex flex-col gap-2'>
                                {starterPackage.map((item, index) => (
                                    <li key={index} className='flex items-center gap-2'>
                                        <IoCheckmark className='text-gray-500' />
                                        <span className='text-base text-gray-600'>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className='w-full flex items-center justify-center'>
                                <button title='Choose package' className='py-2 px-3 rounded-md bg-gray-300 flex items-center justify-center'>
                                    <span className='text-base text-gray-100'>Current plan</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-[350px] h-[250px] flex flex-col border border-gray-800'>
                        <div className='w-full h-[7px] bg-teal-400'>
                        </div>
                        <div className='p-6 flex flex-col gap-4 bg-white'>
                            <span className='text-lg font-semibold text-gray-800'>BiStorage Enterprise</span>
                            <ul className='flex flex-col gap-2'>
                                {enterprisePackage.map((item, index) => (
                                    <li key={index} className='flex items-center gap-2'>
                                        <IoCheckmark className='text-teal-600' />
                                        <span className='text-base text-gray-600'>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className='w-full flex items-center justify-center'>
                                <button title='Choose package' className='py-2 px-3 rounded-md bg-black flex items-center justify-center transition-colors duration-200 hover:bg-black/70'>
                                    <span className='text-base text-white'>See details for package</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;