import { Ellipsis } from "lucide-react"
import HalfCircleGauge from "./HalfCircleGauge"
import { dataInSpace } from "@/lib/constants"

const Space = () => {
    return(
        <section className="w-full h-full flex flex-col gap-2">
            <div className="w-full flex justify-between h-[50px] items-center">
                <h3 className="text-lg font-semibold">Space</h3>
                <div className="h-full flex justify-center items-center">
                    <button className="p-1 bg-gray-100 rounded-lg" aria-label="More options">
                        <Ellipsis size={15} />
                    </button>
                </div>
            </div>
            <div className="w-full h-full items-center flex justify-center">
                <HalfCircleGauge></HalfCircleGauge>
            </div>

            <div className="w-full h-full flex flex-col gap-2">
                {dataInSpace.map((x,index) => (
                    <div className="flex justify-between w-full h-[40px] " key={index}>
                        <div className="w-full h-full flex gap-1 items-center">
                            <button className="p-2 flex items-center justify-center bg-[#f4f3fc]">
                                {x.icon && <x.icon size={18} />}
                            </button>
                            <span className="text-sm font-semibold">{x.name}</span>
                        </div>
                        <span className="text-sm text-gray-300 w-full flex items-center justify-end">1.04 mb</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Space