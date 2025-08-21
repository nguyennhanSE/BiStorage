// import './adjust.css'
// import { FaRegCalendarAlt } from "react-icons/fa";
// import { FaLaptop } from "react-icons/fa";
// import { RiTimeZoneLine } from "react-icons/ri";
// import { BiSolidTimer } from "react-icons/bi";
// import LineChartComponent from "@/components/statistics/charts/lineChart";
// import PieChartComponent from "@/components/statistics/charts/pieChart";
// import BarChartComponent from "@/components/statistics/charts/barChart";

// const Page = () => {
//     return(
//         <section className="w-full h-full min-h-screen bg-gray-50">
//             {/* Content */}
//             <div className="min-h-screen py-7 pl-8 pr-2">
//                 {/* Header */}
//                 <div className="w-full pb-5 flex flex-col gap-8" >
//                     <div className="w-full flex justify-between items-center">
//                         <span className="text-bold family text-2xl text-white">Statistics</span>
//                         <div className="flex gap-1 ">
//                             <span className="text-sm">Showing data for: </span>
//                             <FaRegCalendarAlt size={15} className="text-[#7DAFAF]"></FaRegCalendarAlt>
//                             <span className="text-sm font-bold">09 July,2025</span>
//                         </div>
//                     </div>
//                     <div className="w-full flex gap-16">
//                         <div className="flex gap-4 items-center">
//                             <FaLaptop size={30} className="text-[#7DAFAF]"></FaLaptop>
//                             <div className="flex flex-col">
//                                 <span className="text-3xl font-semibold">{15}</span>
//                                 <span className="text-sm font-normal ">Access times today</span>
//                             </div>
//                         </div>
//                         <div className="flex gap-4 items-center">
//                             <RiTimeZoneLine size={30} className="text-[#7DAFAF]"></RiTimeZoneLine>
//                             <div className="flex flex-col">
//                                 <span className="text-3xl font-semibold">{12}</span>
//                                 <span className="text-sm font-normal ">Times sharing a file/folder</span>
//                             </div>
//                         </div>
//                         <div className="flex gap-4 items-center">
//                             <BiSolidTimer size={30} className="text-[#7DAFAF]"></BiSolidTimer>
//                             <div className="flex flex-col">
//                                 <span className="text-3xl font-semibold">{30}</span>
//                                 <span className="text-sm font-normal ">Times adjusting permissions of a file/folder</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Charts */}
//                 <div className="w-full h-full pt-5 border-t-2 ">
//                     <div className="w-full h-full flex flex-col">
//                         {/* 2 Charts */}
//                         <div className="flex w-full h-[300px] border-b">
//                             <div className="flex-[7] h-full flex flex-col border-r-2 pr-2">
//                                 <span className="family text-lg font-semibold">App Access</span>
//                                 <LineChartComponent></LineChartComponent>
//                             </div>
//                             <div className="flex-[3] h-full pl-2">
//                                 <span className="family text-lg font-semibold">Total Files Uploaded</span>
//                                 <PieChartComponent></PieChartComponent>
//                             </div>
//                         </div>
//                         {/* 2 Charts */}
//                         <div className="flex w-full h-[350px]">
//                             <div className="flex-[7] h-full flex flex-col border-r-2 pr-2 pt-5">
//                                 <span className="family text-lg font-semibold">File Types Uploaded</span>
//                                 <BarChartComponent></BarChartComponent>
//                             </div>
//                             <div className="flex-[3] h-full pl-2 ">

//                             </div>

//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     )
// }

// export default Page