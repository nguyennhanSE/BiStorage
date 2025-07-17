'use client'

import { useLoadingStore } from "@/stores/LoadingStore";
import BiBoxLoader from "../loader/BiBoxLoader";

export function GlobalLoader() {
    const {loading} = useLoadingStore();
    if (!loading) return null;
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
            <BiBoxLoader />
        </div>
    );
}