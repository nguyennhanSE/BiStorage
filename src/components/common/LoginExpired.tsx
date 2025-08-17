'use client'

import Image from "next/image";
import "./adjust.css";
import { useLoginExpiredStore } from "@/stores/LoadingStore";
import { useRouter } from "next/navigation";
export function LoginExpired() {
    const { loginExpired } = useLoginExpiredStore();
    const router = useRouter();
    if (!loginExpired) {
        return null; 
    }
    return (
        <div className="modal-overlay-2">
            <div className="modal-content-2 justify-center items-center">
                <div className="w-full h-full flex flex-col gap-0 items-center justify-center"> 
                    <div className="w-[50%] h-[250px] relative">
                        <Image src="/auth/login-expired.jpg" alt="Session Expired" layout="fill" objectFit="contain" />
                    </div>
                    <div className="w-full h-full flex flex-col gap-3 items-center justify-center pb-7">
                        <div className="w-[60%] text-center">
                            <span className="text-3xl font-semibold text-gray-600">Your session has expired </span>
                        </div>
                        <div className="w-[50%] text-center">
                            <span className="text-gray-500 text-base">Please log in again to continue. Don&apos;t worry, we kept all of your filters and breakdowns in place.</span>
                        </div>
                    </div>
                    <button onClick={() => router.push('/sign-in')} className="px-10 py-2 text-center text-white bg-[#0E5F6B] hover:bg-[#073D44] rounded-xl transition-colors duration-200">
                        Log In
                    </button>
                </div>
            </div>
        </div>
    );
}
