'use client'

import { toast } from "sonner"

const Page = () => {
    const handleClick = () => {
        toast.success("Hello World",{position: "top-right"});
    }
    return (
        <div className="w-full h-screen">
            <div className="w-[50%] h-screen">
                <button onClick={() => handleClick()} className="bg-blue-500 text-white p-4 rounded">test</button>
            </div> 
        </div>
    )
}
export default Page