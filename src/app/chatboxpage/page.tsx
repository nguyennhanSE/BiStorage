'use client'

import Image from "next/image";
import Link from "next/link";

import "./homepage.css"
import { TypeAnimation } from "react-type-animation";
import { RiWechatChannelsLine } from "react-icons/ri";
export default function Page() {
    return (
        <div className="relative flex items-center gap-[100px] min-h-screen">
            {/* Image */}
            <div className="absolute flex gap-2 justify-center items-center top-5 left-5 z-20">
                <RiWechatChannelsLine size={24}></RiWechatChannelsLine>
                <span className="text-md font-bold text-black">BiChatBox</span>
            </div>
            <Image
                src="/chatboxpage/1.jpg"
                alt="Description of image"
                fill
                objectFit="object-cover -z-10"
            />
        
            {/* Left */}
            <div className="relative flex flex-1 flex-col items-center justify-center gap-4">
                <h1 className="text-[128px] font-semibold bg-gradient-to-r from-[#217bfe] to-[#e55571] bg-clip-text text-transparent">
                    BiBox AI
                </h1>
                <h2 className="text-2xl font-semibold text-center">
                    Supercharge your creativity and productivity
                </h2>
                <h3 className="font-normal max-w-[70%] text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ullam, vel
                    exercitationem sit neque earum tempore ipsam cumque iusto quasi numquam, officiis
                    eligendi molestiae possimus ratione magnam vero repellendus sed?
                </h3>
                <Link
                    href="/bichatbox"
                    className="px-6 py-3 bg-[#217bfe] text-white rounded-2xl text-sm mt-5 hover:bg-white hover:text-[#217bfe] border border-transparent hover:border-[#217bfe] transition"
                >
                    Get Started
                </Link>
            </div>

            {/* Right */}
            <div className="relative flex flex-1 flex-col items-center justify-center gap-4">
                <div className="relative w-[80%] max-w-3xl aspect-[16/9] rounded-3xl overflow-visible
                                bg-white/5 backdrop-blur-md ring-1 ring-white/20 shadow-2xl">
                    <Image
                    src="/chatboxpage/2.png"
                    alt="chatbox"
                    fill
                    className="object-cover"
                    sizes="(min-width:1024px) 40vw, 90vw"
                    priority
                    />
                    <div
                    className="pointer-events-none absolute inset-0 z-10"
                    style={{
                        backgroundImage: 'url(/chatboxpage/3.png)',
                        backgroundRepeat: 'repeat',
                        backgroundSize: 'auto 70%',
                        animation: 'slideBg 5s ease-in-out infinite alternate',
                        opacity: 0.5,
                        mixBlendMode: 'overlay',
                        WebkitMaskImage:
                        'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)'
                    }}
                    />

                    <div className="pointer-events-none absolute inset-0 z-10
                                    bg-gradient-to-b from-black/10 via-transparent to-black/20" />
                    <div className="absolute bottom-[-30px] right-[-50px] z-40 flex items-center gap-[10px] p-[20px] bg-[#2c2937]/90
                    border border-white/15 rounded-xl 
                    text-white text-sm leading-6 max-w-[70%]">
                        <TypeAnimation
                        sequence={[
                            "Human: What can you offer me?",
                            "Bot: I can assist you with a variety of tasks, including answering questions, providing information, and helping with problem-solving.",
                            "Human2: Can you give me an example?",
                            "Bot: Sure! For instance, I can help you draft emails, create to-do lists, or even brainstorm ideas for your projects."
                        ]}
                        wrapper="span"
                        repeat={Infinity}
                        cursor={true}
                        omitDeletionAnimation={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
