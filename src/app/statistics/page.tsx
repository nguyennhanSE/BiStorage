'use client'

import React from 'react';
import { filesInSidebar, generalInStatisticsSidebar } from "@/lib/constants"
// import { useBreadCrumbStore } from "@/stores/BreadCrumbStore";
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useLoadingStore } from '@/stores/LoadingStore';
const Page = () => {
  return (
    <section className="w-full h-full min-h-screen">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-screen w-[18%] bg-black z-50 border-r border-gray-800">
        <Sidebar />
      </div>

      {/* MAIN */}
      <div className="ml-[18%] w-[82%] min-h-screen bg-black">
        {/* Top bar */}
        <TopBar />

        <div className="px-6 py-8">
          {/* Title + actions */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-normal text-white">Statistics</h1>
            <div className="flex items-center gap-3">
              <GhostBtn label="Download" />
              <GhostBtn label="Share" />
              <SelectPill label="2025" />
            </div>
          </div>

          {/* Four stat cards */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard title="Accessibility" value="30 times / month" badge="+ 25% from last month" />
            <StatCard title="Upload Times" value="240 times / month" badge="- 4% from last month" />
            <StatCard title="Chatbot Interactions" value="36 conversations" badge="- 8% from last month" />
            <StatCard title="Website Bounces" value="12 times" badge="+ 16% from last month" />
          </div>

          {/* Main grid */}
          <div className="mt-6 grid grid-cols-1 xl:grid-cols-3 gap-4">
            {/* Profit Revenue big chart (xl:2 cols) */}
            <Card className="xl:col-span-2">
              <CardHeader title="Profit Revenue">
                <SwitchTabs tabs={['Weekly', 'Monthly']} active="Monthly" />
              </CardHeader>
              <SkeletonChart />
            </Card>

            {/* Insight blocks */}
            <Card>
              <CardHeader title="Insight" />
              <InsightSkeleton />
            </Card>

            {/* Total Profit */}
            <MiniMetric title="Total Profit" value="$274,772" />
            {/* Net Profit */}
            <MiniMetric title="Net Profit" value="182,212" />

            {/* Latest Transactions */}
            <Card className="xl:col-span-2">
              <CardHeader title="Latest Transactions" />
              <TxnListSkeleton />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;

const Sidebar = () => { 
  const [chosenPage, setChosenPage] = useState("");
  // const {resetBreadcrumb} = useBreadCrumbStore();
  const {setLoading} = useLoadingStore();
  const router = useRouter();
  const pathName = usePathname();
  const getPathName = (path : string) => {
    const segments = path.split('/');
    return segments[1] || 'dashboard';
  }
  useEffect(() => {
    setLoading(false);
    setChosenPage(getPathName(pathName));
  },[pathName,setLoading])
  const handleNavigatePage = (url : string) => {
    if (url === pathName){
      return;
    }
    setLoading(true);
    router.push(url);
  }
  return(
    <section className="w-full h-full flex gap-2 py-7 px-5 overflow-auto custom-scrollbar">
      <div className="flex flex-col gap-10 w-full">
        {/* Header */}
        <div className="w-full flex gap-2 px-2">
          <Image width={30} height={30} alt="avatar" src='/brandAvt.png' className="rounded-full" />
          <span className="text-lg font-bold text-white">BiStorage</span>
        </div>

        {/* Pages */}
        <div className="w-full flex flex-col gap-10">
          {/* General */}
          <div key='general' className="w-full flex flex-col gap-2">
            <span className="text-sm text-white px-2 font-semibold">General</span>
            {generalInStatisticsSidebar.map((x,index) => {
              const chosen = x.name.toLocaleLowerCase() === chosenPage;
              return (
                <div
                  onClick={()=>handleNavigatePage(x.path)}
                  className={`w-full flex gap-3 px-4 py-2 cursor-pointer ${
                    chosen ? 'bg-white rounded-lg text-black' : 'hover:border hover:rounded-lg hover:bg-black text-white'
                  }`}
                  key={index}
                >
                  {x.icon && <x.icon size={18} color={`${chosen ? '#000' : '#fff'}`} />}
                  <span className="text-sm font-semibold">{x.name}</span>
                </div>
              );
            })}
          </div>  

          {/* Files */}
          <div key='files' className="w-full flex flex-col gap-2">
            <span className="text-sm text-white px-2 font-semibold">Files</span>
            {filesInSidebar.map((x,index) => (
              <div className="w-full flex gap-3 px-4 py-2" key={index}>
                {x.icon && <x.icon size={18} color='#fff'/>}
                <span className="text-sm font-semibold text-white">{x.name}</span>
              </div>
            ))}
          </div>  
        </div>
      </div>
    </section>
  )
}

/* ==================== SMALL UI PIECES ==================== */
const TopBar = () => {
  return (
    <div className="sticky top-0 z-40 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/50 border-b border-gray-800">
      <div className="px-6 py-3 flex items-center justify-between">
        {/* Left: burger + search */}
        <div className="flex items-center gap-3 w-full max-w-xl">
          <div className="h-9 w-9 rounded-xl bg-neutral-900 border border-gray-800 flex items-center justify-center">
            <div className="h-3 w-4 rounded-sm bg-neutral-700" />
          </div>
          <div className="flex-1 h-10 rounded-xl bg-neutral-900 border border-gray-800 px-3 flex items-center gap-3">
            <div className="h-4 w-4 rounded-sm bg-neutral-700" />
            <input
              placeholder="Search"
              className="flex-1 bg-transparent text-sm text-gray-200 outline-none placeholder:text-gray-500"
            />
            <kbd className="text-[10px] px-2 py-1 rounded bg-neutral-800 text-gray-400 border border-gray-700">⌘ K</kbd>
          </div>
        </div>

        {/* Right: actions */}
        <div className="hidden md:flex items-center gap-3">
          <Circle size="9" />
          <Circle size="9" />
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full overflow-hidden">
              <Image src="/brandAvt.png" alt="me" width={32} height={32} className="h-full w-full object-cover" />
            </div>
            <div className="h-3 w-20 bg-neutral-700 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

const GhostBtn = ({ label }: { label: string }) => (
  <button className="h-9 px-3 rounded-xl border border-gray-800 bg-neutral-900 text-gray-200 text-sm hover:bg-neutral-800 transition">
    {label}
  </button>
);

const SelectPill = ({ label }: { label: string }) => (
  <button className="h-9 px-3 rounded-xl bg-neutral-900 border border-gray-800 text-gray-200 text-sm flex items-center gap-2">
    <span>{label}</span>
    <span className="h-3 w-3 bg-neutral-700 rounded" />
  </button>
);

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-2xl bg-neutral-950 border border-gray-800 p-4 ${className}`}>{children}</div>
);

const CardHeader = ({ title, children }: { title: string; children?: React.ReactNode }) => (
  <div className="flex items-center justify-between mb-3">
    <h3 className="text-gray-200">{title}</h3>
    {children}
  </div>
);

const SwitchTabs = ({ tabs, active }: { tabs: string[]; active: string }) => (
  <div className="flex items-center gap-2 rounded-xl bg-neutral-900 p-1 border border-gray-800">
    {tabs.map(t => (
      <button
        key={t}
        className={`px-3 py-1 text-sm rounded-lg ${t === active ? 'bg-neutral-800 text-white' : 'text-gray-400'}`}
      >
        {t}
      </button>
    ))}
  </div>
);

const StatCard = ({ title, value, badge }: { title: string; value: string; badge?: string }) => (
  <div className="rounded-2xl border border-gray-800">
    <div className="rounded-t-2xl bg-teal-500/80 h-16 flex items-center px-4">
      <div className="h-5 w-5 rounded-full bg-neutral-900/60 border border-gray-800" />
      <span className="ml-3 text-sm font-medium text-black">{title}</span>
    </div>
    <div className="bg-neutral-950 rounded-b-2xl p-4">
      <div className="text-2xl text-white">{value}</div>
      {badge && <div className="text-xs text-gray-400 mt-1">{badge}</div>}
    </div>
  </div>
);

const MiniMetric = ({ title, value }: { title: string; value: string }) => (
  <Card>
    <div className="text-gray-400 text-sm">{title}</div>
    <div className="mt-2 text-white text-2xl">{value}</div>
    <div className="mt-3 h-16 w-full rounded-xl bg-neutral-900 border border-gray-800" />
  </Card>
);

const SkeletonChart = () => (
  <div className="h-64 rounded-xl bg-neutral-900 border border-gray-800 p-4">
    {/* fake bars/line */}
    <div className="h-full w-full grid grid-cols-12 items-end gap-2">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="bg-neutral-700 rounded-md animate-pulse"
          style={{ height: `${20 + (i % 5) * 12}%` }} />
      ))}
    </div>
  </div>
);

const InsightSkeleton = () => (
  <div className="space-y-3">
    {['Amazon', 'Facebook', 'Instagram'].map((label) => (
      <div key={label}>
        <div className="text-sm text-gray-400 mb-2">{label}</div>
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={`h-8 rounded-md border border-gray-800 ${i === 2 ? 'bg-teal-500/60' : 'bg-neutral-900'}`} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

const TxnListSkeleton = () => (
  <div className="space-y-3">
    {Array.from({ length: 3 }).map((_, i) => (
      <div key={i} className="flex items-center justify-between rounded-xl border border-gray-800 bg-neutral-900 p-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-neutral-700" />
          <div>
            <div className="h-4 w-40 bg-neutral-700 rounded mb-1" />
            <div className="h-3 w-28 bg-neutral-800 rounded" />
          </div>
        </div>
        <div className="h-4 w-16 bg-neutral-700 rounded" />
      </div>
    ))}
  </div>
);

const Circle = ({ size = '8' }: { size?: string }) => (
  <div className={`h-${size} w-${size} rounded-full bg-neutral-900 border border-gray-800`} />
);
