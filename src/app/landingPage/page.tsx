'use client'

import Image from 'next/image'
import './adjust.css'
import Link from 'next/link'
import { CircleCheck, CircleCheckBig, Play } from 'lucide-react'
import { useRef, useState } from 'react'

//Third section
import { TbBoom } from "react-icons/tb"; 
import { BsArrowUpRight } from "react-icons/bs";
import { MdCastForEducation } from "react-icons/md";
import { FaWrench } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { BsMailbox } from "react-icons/bs";
import { GoDatabase } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { FaRegCopyright } from "react-icons/fa";

const Page = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying,setIsPlaying] = useState(false);
    const handlePlay = () => {
        setIsPlaying(true);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };
return(
    <section className="w-full min-h-screen">
        {/* First section */}
        <div className="w-full flex">
            <div className='background w-full flex flex-col'>
                {/* Header */}
                <div className='flex w-full px-10 justify-between items-end h-[80px]'>
                    {/* Icon */}
                    <div className='flex gap-2 items-center'>
                        <Image width={80} height={80} src='/brandAvt-removebg.png' alt='icon'></Image>
                        <h1 className='text-3xl font-semibold text-[#3a2f2b]'>BiBox</h1>
                    </div>
                    {/* Nav */}
                    <nav className='flex items-center space-x-14 h-full'>
                        <Link href="#" className='hover:underline'>Services</Link>
                        <Link href="#" className='hover:underline'>Home</Link>
                        <Link href="#" className='hover:underline'>About us</Link>
                        <Link href="#" className='hover:underline'>Cases</Link>
                    </nav>
                    {/* Right Side */}
                    <div className='flex h-full items-center  text-sm font-semibold'>
                        <Link href="#" className='border-b border-[#3a2f2b] pb-[2px] hover:opacity-80'>CONTACT US</Link>
                    </div>
                </div>

                {/* Content */}
                <div className='w-full flex flex-col justify-between gap-0 pt-14'>
                    {/* Middle */}
                    <div className='px-10 min-h-[450px] flex justify-between'>
                        <div className='w-[40%] h-full flex-col flex text-center gap-2  '>
                            <span className='text-6xl text-[#3a2f2b] the-perfect-home'>The</span>
                            <span className='text-7xl text-[#3a2f2b] the-perfect-home'>Perfect</span>
                            <span className='text-5xl text-[#3a2f2b] the-perfect-home'>Platform</span>
                            <span className='text-lg text-[#3a2f2b]'>/ We take responsibility for your files and folders /</span>
                            <div>
                                <button className='w-[120px] h-[40px] text-center text-md text-white rounded-full bg-[#3a2f2b]'>START</button>
                            </div>
                        </div>
                        <div className="w-[40%] h-full mr-5">
                            <div className='relative w-full h-[70%] bg-white rounded-bl-[150px] rounded-br-4xl rounded-tl-4xl rounded-tr-4xl p-5'>
                                <div className='flex justify-between h-[60%] w-full'>
                                    <span className='text-3xl font-normal text-[#3a2f2b] w-[50%] mt-3 ml-4'>Unique design & extensions</span>
                                    <div className='z-50 border border-[#3a2f2b] rounded-xl flex justify-center items-center w-[50%]'>
                                        {!isPlaying && 
                                        <button onClick={handlePlay} className='absolute z-10 w-[35px] h-[35px] bg-[#8C6D5D] flex justify-center items-center rounded-full cursor-pointer'>
                                            <Play size={20} className='text-white'></Play>
                                        </button>}
                                        <video ref={videoRef} src='/landingPage/background.mp4' className={`w-full h-full object-cover rounded-xl ${isPlaying ? 'opacity-100' : 'opacity-0'} `} controls={false} onEnded={() => setIsPlaying(false)}></video>
                                    </div>
                                </div>
                                <Image src='/landingPage/background7.png' alt='icon' height={500} width={600} className='absolute bottom-[-100px] left-[-50px]'></Image>
                            </div>
                        </div>
                    </div>
                    {/* Bottom */}
                    <div className='w-full h-[200px] flex justify-between'>
                        <div className='w-[35%] h-full bg-[#8C6D5D] rounded-tr-4xl pl-8 pr-3 pt-6 flex justify-between'>
                            <div className='flex flex-col pb-4 justify-between h-full w-[40%] text-right'>   
                                <span className='text-white text-2xl'>We combine the most modern technologies!</span>
                                <span className='text-gray-100 text-sm opacity-50'>Working with verified suppliers</span>
                            </div>
                            <div className='w-[55%] h-full flex justify-center'>
                                <Image src='/landingPage/background6.png' alt='icon' width={110} height={170}></Image>
                            </div>
                        </div>
                        <div className='w-[25%] h-full flex justify-center items-center flex-col gap-1'>
                            <span className='text-5xl the-perfect-home text-white italic'>1000+</span>
                            <span className='text-sm the-perfect-home text-white'>Customers</span>
                        </div>
                        <div className='w-[35%] h-full py-2 flex flex-col justify-between combined-text'>
                            <div className='flex flex-col text-white text-2xl'>
                                <span>WE EXTEND OUTSTANDING</span>
                                <span>FEATURES & AMENTITIES</span>
                                <span>FOR OUR COMMUNITY</span>
                            </div>
                            <a className='text-white text-md border-b' href='#' >LEARN MORE</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

        {/* Second section */}
        <div className='w-full h-[600px] px-20 py-20 flex'>
            {/* Left */}
            <div className='h-full bg-gray-100 rounded-xl flex items-center justify-center w-[40%]'>
                <div className='w-[80%] h-[80%] rounded-lg bg-white'>
                    
                </div>
            </div>
            {/* Right */}
            <div className='h-full w-[60%] px-10 py-3 flex flex-col justify-between'>
                <span className='text-4xl text-black font-bold'>Key Benefits of Our System for Your Comforts</span>
                <span className='text-md text-gray-500 opacity-50'>Our systems enhance your experience while extending, creating more and more features</span>
                <div className='flex gap-2'>
                    <CircleCheckBig size={24} className='text-white fill-[#0A3C42]' />
                    <div className='flex flex-col gap-2' data-aos="fade-right">   
                        <span className='text-black text-lg font-bold'>Boosting Quality with Tech</span> 
                        <span className='text-gray-500 text-md'>With advanced technology we help you achieve top product quality. Discover how we can enhance your standards</span>           
                    </div>
                </div>
                <div className='flex gap-2'>
                    <CircleCheckBig size={24} className='text-white fill-[#0A3C42]' />
                    <div className='flex flex-col gap-2' data-aos="fade-right">   
                        <span className='text-black text-lg font-bold'>Optimization Production Process</span> 
                        <span className='text-gray-500 text-md'>Boost factory efficiency and productivity with our innovative solutions. See how the latest technology can maximize your output</span>           
                    </div>
                </div>
                <div className='flex gap-2'>
                    <CircleCheckBig size={24} className='text-white fill-[#0A3C42]' />
                    <div className='flex flex-col gap-2' data-aos="fade-right">   
                        <span className='text-black text-lg font-bold'>AI-Driven Production</span> 
                        <span className='text-gray-500 text-md'>Leverage the power of AI to transform your manufacturing processes, achieving faster and more effective results.</span>           
                    </div>
                </div>
            </div>
        </div>

        {/* Third Section */}
        <div className='w-full h-[800px] bg-[#0A3C42] px-10 pb-10 pt-10 flex flex-col'>
            <div className='flex-[3] flex items-center justify-center'>
              <div className='h-full w-[50%] flex flex-col gap-1 text-center'>
                <span className='text-white text-4xl font-semibold combined-text'>Efficient and Integrated</span>
                <span className='text-white text-4xl font-semibold combined-text'>Manufacturing Services</span>
                <span className='text-white opacity-50 text-md mt-2 '>Simply operations with our efficient, quality-focused services</span>
              </div>
            </div>
            <div className='flex-[7] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className="bg-[#0e4b51] rounded-xl px-5 py-7 flex flex-col justify-between transition-transform duration-700 ease-out hover:-rotate-3 hover:scale-[1.02] hover:origin-left" data-aos = "zoom-out">
                    <div className='flex w-full justify-between'>
                        <TbBoom size={30} className='text-white'></TbBoom>
                        <BsArrowUpRight size={20} className='text-white'></BsArrowUpRight>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-white text-2xl font-semibold'>Production and Assembly</span>
                        <span className='text-white opacity-50 text-sm'>Details on production processes, assembly, capacity, and product types.</span>
                    </div>
                </div>
                <div className="bg-[#0e4b51] rounded-xl px-5 py-7 flex flex-col justify-between transition-transform duration-700 ease-out hover:-rotate-3 hover:scale-[1.02] hover:origin-left" data-aos = "zoom-out">
                    <div className='flex w-full justify-between'>
                        <MdCastForEducation size={30} className='text-white'></MdCastForEducation>
                        <BsArrowUpRight size={20} className='text-white'></BsArrowUpRight>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-white text-2xl font-semibold'>Custom Manufacturing</span>
                        <span className='text-white opacity-50 text-sm'>Custom product creation with design and customization options.</span>
                    </div>
                </div>
                <div className="bg-[#0e4b51] rounded-xl px-5 py-7 flex flex-col justify-between transition-transform duration-700 ease-out hover:-rotate-3 hover:scale-[1.02] hover:origin-left" data-aos = "zoom-out">
                    <div className='flex w-full justify-between'>
                        <FaWrench size={30} className='text-white'></FaWrench>
                        <BsArrowUpRight size={20} className='text-white'></BsArrowUpRight>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-white text-2xl font-semibold'>Quality Control</span>
                        <span className='text-white opacity-50 text-sm'>Procedures and systems in place to ensure high product quality.</span>
                    </div>
                </div>
                <div className="bg-[#0e4b51] rounded-xl px-5 py-7 flex flex-col justify-between transition-transform duration-700 ease-out hover:-rotate-3 hover:scale-[1.02] hover:origin-left" data-aos = "zoom-out">
                    <div className='flex w-full justify-between'>
                        <FaShieldAlt size={30} className='text-white'></FaShieldAlt>
                        <BsArrowUpRight size={20} className='text-white'></BsArrowUpRight>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-white text-2xl font-semibold'>Technology and Innovation</span>
                        <span className='text-white opacity-50 text-sm'>Details on the latest manufacturing technologies and ongoing innovations.</span>
                    </div>
                </div>
                <div className="bg-[#0e4b51] rounded-xl px-5 py-7 flex flex-col justify-between transition-transform duration-700 ease-out hover:-rotate-3 hover:scale-[1.02] hover:origin-left" data-aos = "zoom-out">
                    <div className='flex w-full justify-between'>
                        <BsMailbox size={30} className='text-white'></BsMailbox>
                        <BsArrowUpRight size={20} className='text-white'></BsArrowUpRight>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-white text-2xl font-semibold'>Packaging and Logistics</span>
                        <span className='text-white opacity-50 text-sm'>Packaging and logistics for shopping to customers and distributors.</span>
                    </div>
                </div>
                <div className="bg-[#0e4b51] rounded-xl px-5 py-7 flex flex-col justify-between transition-transform duration-700 ease-out hover:-rotate-3 hover:scale-[1.02] hover:origin-left" data-aos = "zoom-out">
                    <div className='flex w-full justify-between'>
                        <GoDatabase  size={30} className='text-white'></GoDatabase>
                        <BsArrowUpRight size={20} className='text-white'></BsArrowUpRight>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-white text-2xl font-semibold'>Consulting Market Research</span>
                        <span className='text-white opacity-50 text-sm'>Services to help companies understand market research and provide strategic advice. </span>
                    </div>
                </div>
            </div>
        </div>
        {/* Fourth Section */}
        <div className='w-full h-[900px] bg-black flex flex-col pt-16'>
            <div className='w-full h-[15%] flex items-center justify-center'>
                <div className='w-[60%] h-full text-center flex flex-col'>
                    <span className='font-sans font-semibold text-white text-4xl leading-tight'>Tailored Plans for Your</span>
                    <span className='font-sans font-semibold text-white text-3xl leading-tight'>Manufacturing Scale</span>
                    <span className='text-white opacity-50 font-normal text-sm mt-3'>Flexible pricing for any business size</span>
                </div>
            </div>
            <div className='w-full h-[65%] py-10 flex justify-center'>
                <div className='w-[55%] h-full flex justify-between'>
                    <div className='w-[48%] h-full bg-[#262a2e] rounded-3xl py-5 px-8 flex flex-col justify-between' data-aos = "fade-up">
                        <div className='flex flex-col gap-2'>
                            <span className='text-white text-2xl font-normal'>Starter</span>
                            <span className='text-white opacity-50 text-sm'>This package offers the basic features you need to get started.</span>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-end'>
                                <span className='text-white text-bold text-4xl'>$39</span>
                                <span className='text-white opacity-50 text-normal text-sm'>/month</span>
                            </div>
                            <button className='w-full h-[40px] rounded-full border border-white text-center text-white '>Get Started</button>
                        </div>
                        <div className='flex flex-col gap-2 w-full justify-center items-center'>
                            <div className='w-[80%] h-[20px] flex justify-between items-center'>
                                <div className='w-[35%] h-[1px] bg-gray-500 opacity-50'></div>
                                <span className='text-white opacity-50 text-md font-thin'>Features</span>
                                <div className='w-[35%] h-[1px] bg-gray-500 opacity-50'></div>
                            </div>
                            <div className='flex gap-1 w-full items-center'>
                                <CircleCheckBig size={20} className=' fill-white text-black' />
                                <span className='text-sm text-white'>Production up to 10.000 units per month</span>
                            </div>    
                            <div className='flex gap-1 w-full items-center'>
                                <CircleCheckBig size={20} className=' fill-white text-black' />
                                <span className='text-sm text-white'>24/7 technical support</span>
                            </div>    
                            <div className='flex gap-1 w-full items-center'>
                                <CircleCheckBig size={20} className=' fill-white text-black' />
                                <span className='text-sm text-white'>Access the production dashboard</span>
                            </div>    
                            <div className='flex gap-1 w-full items-center'>
                                <CircleCheckBig size={20} className=' fill-white text-black' />
                                <span className='text-sm text-white'>Initial setup guide</span>
                            </div>    
                        </div>
                    </div>
                    <div className='w-[48%] h-full bg-[#262a2e] rounded-3xl py-5 px-8 flex flex-col justify-between' data-aos = "fade-up">
                        <div className='flex flex-col gap-2'>
                            <span className='text-white text-2xl font-normal'>Enterprise</span>
                            <span className='text-white opacity-50 text-sm'>This package provides full access to all premium features.</span>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-end'>
                                <span className='text-white text-bold text-4xl'>$99</span>
                                <span className='text-white opacity-50 text-normal text-sm'>/month</span>
                            </div>
                            <button className='w-full h-[40px] rounded-full border border-white text-center text-white '>Get Started</button>
                        </div>
                        <div className='flex flex-col gap-2 w-full justify-center items-center'>
                            <div className='w-[80%] h-[20px] flex justify-between items-center'>
                                <div className='w-[35%] h-[1px] bg-gray-500 opacity-50'></div>
                                <span className='text-white opacity-50 text-md font-thin'>Features</span>
                                <div className='w-[35%] h-[1px] bg-gray-500 opacity-50'></div>
                            </div>
                            <div className='flex gap-1 w-full items-center'>
                                <CircleCheckBig size={20} className=' fill-white text-black' />
                                <span className='text-sm text-white'>unlimited production units</span>
                            </div>    
                            <div className='flex gap-1 w-full items-center'>
                                <CircleCheckBig size={20} className=' fill-white text-black' />
                                <span className='text-sm text-white'>Dedicated account manager</span>
                            </div>    
                            <div className='flex gap-1 w-full items-center'>
                                <CircleCheckBig size={20} className=' fill-white text-black' />
                                <span className='text-sm text-white'>Tailored manufacturing solutions</span>
                            </div>    
                            <div className='flex gap-1 w-full items-center'>
                                <CircleCheckBig size={20} className=' fill-white text-black' />
                                <span className='text-sm text-white'>Predictive production optimization</span>
                            </div>    
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-full h-[30%] flex justify-center pb-10'>
                <div className='w-[55%] h-full bg-[#0A3C42] rounded-3xl py-5 flex items-center justify-center' data-aos = "fade-up">
                    <div className='h-full w-[45%] flex flex-col justify-between text-center items-center'>
                        <span className='text-white text-2xl font-normal'>Professional</span>
                        <span className='text-sm text-white opacity-50'>Design for greater flexibility, this solution offers advanced tools for custom tailoring to your needs.</span>
                        <button className='w-[150px] h-[40px] rounded-full text-center bg-[#E4F5CD]'>Get Started</button>
                    </div>
                </div>

            </div>
        </div>

        {/* Fifth section */}
        <div className='w-full h-[500px] bg-white px-14 py-20 flex justify-between'>
            <div className='w-[45%] h-full flex items-center'>
                <div className='w-full h-[70%] flex flex-col justify-between'>
                    <span className='text-black text-4xl font-semibold'>Empowering Top Tech Stacks with Seamless Integrations</span>
                    <span className='text-sm text-gray-400 opacity-80'>Experience seamless connections with our innovative solutions, designed to effortlessly integrate with your existing systems, enhance productivity and drive your business towards greater success.</span>
                    <button className='h-[50px] w-[150px] bg-[#E4F5CD] text-[#0A3C42] text-center rounded-full font-semibold'>Work With Us</button>
                </div> 
            </div>
            <div className='w-[45%] h-full flex justify-center'>
                <Image src='/landingPage/background8.svg' alt='icon' width={600} height={400} className='p-5 rounded-2xl bg-[#E4F5CD]'></Image>
            </div>
        </div>
        {/* Sixth section */}
        <div className='w-full h-[400px] bg-[#0A3C42] px-20 py-14 flex flex-col justify-between'>
            <div className='w-full flex justify-between'>
                <div className='w-[57%] h-full flex flex-col gap-5'>
                    <div className='flex flex-col gap-1'>
                        <span className='text-white text-5xl font-serif'>It&apos;s time to support zero pollution,</span>
                        <span className='text-gray-600 opacity-50 text-5xl font-serif'>with renewable resources</span>
                    </div>
                    <div className='w-full h-full flex justify-between pr-16'>
                        <div className='flex gap-1 items-center'>
                            <CircleCheck size={16} className='text-black fill-white'/>
                            <span className='text-white opacity-60 text-sm'>Experienced for more than 10 years</span>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <CircleCheck size={16} className='text-black fill-white'/>
                            <span className='text-white opacity-60 text-sm'>Support for the latest technology</span>
                        </div>
                    </div>
                </div>
                <div className='w-[37%] h-full'>
                    <span className='text-white text-md font-normal opacity-60'>By increasing the effectiveness and efficiency of electricity use, the use of renewable resources is very profitable for all industrial services.</span>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <div className='flex w-full justify-between items-center border-b'>
                    <div className='flex gap-2 items-center '>
                        <Image width={100} height={100} src='/brandAvt-removebg.png' alt='icon'></Image>
                        <span className='text-white text-3xl font-serif'>BiBox</span>
                    </div>
                    <div className='flex gap-4'>
                        <button className='w-[30px] h-[30px] flex items-center justify-center rounded-full bg-gray-500'>
                            <FaLinkedinIn size={16} className='text-white'></FaLinkedinIn>
                        </button>
                        <button className='w-[30px] h-[30px] flex items-center justify-center rounded-full bg-gray-500'>
                            <FaFacebookF size={16} className='text-white'></FaFacebookF>
                        </button>
                        <button className='w-[30px] h-[30px] flex items-center justify-center rounded-full bg-gray-500'>
                            <LuGithub size={16} className='text-white'></LuGithub>
                        </button>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-1 items-center'>
                        <FaRegCopyright size={14} className='text-white'></FaRegCopyright>
                        <span className='text-white opacity-60 font-normal'>2025 Bibox Inc. All rights reserved</span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='text-white opacity-60 font-normal'>Terms of Service</span>
                        <span className='text-white opacity-60 font-normal'>Privacy Policy</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default Page