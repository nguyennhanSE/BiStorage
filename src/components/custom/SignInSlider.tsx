'use client'

import { useCallback, useEffect, useRef, useState } from "react";
import "./adjust.css"
import Image from "next/image";
import {
  SiDiscord,
  SiMailchimp,
  SiGrammarly,
  SiIntercom,
  SiSquare,
  SiDropbox,
  SiSlack,
} from 'react-icons/si'

interface Slide {
    id: number;
    image?: string;         
    logo?: string;         
    title?: string;       
    quote: string;            
};

const slides: Slide[] = [
    {
    id: 0,
    logo: '/samples/7.svg',
    title: 'BiStorage.',
    quote:
        "BiStorage has completely transformed our workflow. It's reliable, efficient, and ensures our releases are always top-notch. The integration with our CI/CD pipeline was seamless, and the support team is always ready to help.",
    },
    {
    id: 1,
    image: '/samples/1.jpg',
    logo: '/samples/4.svg',
    title: 'SESSION.',
    quote:
        "I've been using this stock market app for a few weeks. It provides a ton of useful information about different stocks and markets. I particularly like the real-time updates and alerts, which help me stay on top of any changes or opportunities in my portfolio.",
    },
    {
    id: 2,
    image: '/samples/2.jpg',
    logo: '/samples/5.svg',
    title: 'Matomo.',
    quote:
        "Alerts are instant and the watchlists are clean. Love the breakdowns and the way news is summarized for each ticker.",
    },
    {
    id: 3,
    image: '/samples/3.jpg',
    logo: '/samples/6.svg',
    title: 'Bufferfly.',
    quote:
        "The UI feels premium. Charts load fast and the app remembers my filters between sessions.",
    },
];

export function SignInSlider({loaded,setLoaded} : {loaded: boolean,setLoaded : (loaded: boolean) => void}) {
    const [index,setIndex] = useState<number>(0);
    const currentSlide = slides[index];
    // For Animation
    // const [nextIndex, setNextIndex] = useState<number | null>(null);
    // const direction = useMemo(() => {
    //     if (nextIndex === null) return 0;
    //     const forward = (nextIndex - index + slides.length) % slides.length;
    //     const backward = (index - nextIndex + slides.length) % slides.length;
    //     return forward <= backward ? 1 : -1;
    // }, [index, nextIndex]);
    // 
    const [paused,setPaused] = useState<boolean>(false);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
    const handleSwitchSlide = (index : number) => {
        setIndex(index);
        console.log('index', index);
        console.log('currentSlide', currentSlide.id);
    }
    const slideRef = useRef<HTMLDivElement>(null);
    const moveSlide = useCallback(() => {}, []);

    const transitionTo = useCallback((i: number) => {
        if (i === index || isTransitioning) return;
        setIsTransitioning(true);
        setIndex(i);
        setTimeout(() => setIsTransitioning(false), 300);
    }, [isTransitioning,index]);

    // Loading Image
    useEffect(() => {
        const images = slides.map(s => s.image).filter(Boolean) as string[];
        if (images.length === 0) {
            setLoaded(true);
            return;
        }
        let loadedCount = 0;
        images.forEach(src => {
            const img = new window.Image();
            img.src = src;
            img.onload = img.onerror = () => {
                loadedCount++;
                if (loadedCount === images.length) {
                setLoaded(true);
                }
            };
        });
    }, [setLoaded]);

    
    useEffect(() => {
        if (!loaded || paused || isTransitioning) return;
        const timer = setInterval(() => {
            const nextIndex = (index + 1) % slides.length;
            transitionTo(nextIndex);
        }, 2000); 
        return () => clearInterval(timer);
    }, [loaded,index, paused, isTransitioning, transitionTo]);



    return (
    <section className="relative h-screen overflow-hidden" ref={slideRef} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onMouseMove={moveSlide}>
        {currentSlide.image && <div className="absolute inset-0">
            <Image
            src={currentSlide.image}
            alt={currentSlide.title ?? 'slide'}
            fill
            sizes="100vw"
            className="object-cover will-change-transform transition-opacity duration-300"
            style={{
              transform: 'translateX(var(--dx, 0px))',
              filter: 'grayscale(20%)',
            }}
            />
        </div>}
        {currentSlide.id === 0 && (
            <>
            <div className="absolute inset-0 bg-[#073D44]"></div>
            <div className="absolute inset-0 bg-custom" />
            </>
        )}
        {/* Content */}
        {currentSlide.id !== 0 && (
            <div className="relative z-10 h-full w-full flex flex-col justify-end items-center pb-36 px-6">
            {/* brand */}
            <div className="mb-6 flex items-center gap-3">
                {currentSlide.logo && (
                    <div className="relative h-8 w-8 invert brightness-0">
                        <Image src={currentSlide.logo} alt="brand" fill className="object-contain" />
                    </div>
                )}
                {currentSlide.title && (
                    <h3 className="text-white tracking-widest font-semibold text-xl sm:text-2xl">
                    {currentSlide.title}
                    </h3>
                )}
            </div>
            {/* quote */}
            <p className="max-w-3xl text-center text-white/90 leading-relaxed px-4">
                “{currentSlide.quote}”
            </p>
        </div>)}
        <div className="relative h-full flex flex-col pt-30 px-14">
            <div className="absolute right-5 top-10 flex items-center gap-3">
                {currentSlide.logo && (
                    <div className="relative h-8 w-8 invert brightness-0">
                        <Image src={currentSlide.logo} alt="brand" fill className="object-contain" />
                    </div>
                )}
                {currentSlide.title && (
                    <h3 className="text-white tracking-widest font-semibold text-xl sm:text-2xl">
                    {currentSlide.title}
                    </h3>
                )}
            </div>
            <h2 className="text-white text-5xl leading-tight font-sans max-w-xl">Revolutionize storage with smarter automation</h2>
            <div className="mt-8 max-w-xl text-white/90">
                <div className="text-5xl leading-none">“</div>
                <p className="-mt-2 text-lg font-sans">
                BiStorage has completely transformed our workflow. It&apos;s reliable, efficient, and ensures our releases are always top‑notch.
                </p>
                <div className="mt-6 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-white/30" />
                <div className="text-sm text-white/80">
                    <div className="font-medium text-white">Michael Carter</div>
                    <div className="">Software Engineer at DevCore</div>
                </div>
                </div>
            </div>
            <div className="mt-14">
                <div className="text-xs uppercase tracking-widest text-white/60 mb-4">Join 1k teams</div>
                <div className="grid grid-cols-4 gap-6 text-white/70 text-sm">
                    <div className="flex items-center gap-2"><SiDiscord className="text-lg" /><span className="hidden xl:inline">Discord</span></div>
                    <div className="flex items-center gap-2"><SiMailchimp className="text-lg" /><span className="hidden xl:inline">Mailchimp</span></div>
                    <div className="flex items-center gap-2"><SiGrammarly className="text-lg" /><span className="hidden xl:inline">Grammarly</span></div>
                    <div className="flex items-center gap-2"><SiIntercom className="text-lg" /><span className="hidden xl:inline">Intercom</span></div>
                    <div className="flex items-center gap-2"><SiSquare className="text-lg" /><span className="hidden xl:inline">Square</span></div>
                    <div className="flex items-center gap-2"><SiDropbox className="text-lg" /><span className="hidden xl:inline">Dropbox</span></div>
                    <div className="flex items-center gap-2"><SiSlack className="text-lg" /><span className="hidden xl:inline">Slack</span></div>
                </div>
            </div>
        </div>
        {/* Dots */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full flex items-center gap-3 justify-center z-20">
            {slides.map((slide) => (
            <div key={slide.id} onClick={() => handleSwitchSlide(slide.id)} className={`h-1.5 w-24 rounded-full bg-white/45 overflow-hidden ${currentSlide.id === slide.id ? 'bg-white/75' : 'cursor-pointer'}`}>
            </div>
            ))}
        </div>
    </section>
    );
}