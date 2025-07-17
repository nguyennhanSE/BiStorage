"use client";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const HalfCircleGauge = ({ value = 74.7, max = 120 }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="relative w-60 h-30 px-2">
      <CircularProgressbarWithChildren
        value={percentage}
        maxValue={100}
        styles={buildStyles({
          rotation: 0.75,
          strokeLinecap: "butt",
          trailColor: "#eee",
          pathColor: "#000",
        })}
        strokeWidth={12}
        circleRatio={0.5}
      >
        <div className="absolute top-[50px] text-center">
          <div className="text-sm font-semibold">{value.toFixed(1)} gb</div>
        </div>
      </CircularProgressbarWithChildren>

      {/* Gạch ngang và Text dưới */}
      <div className="absolute top-[78px] left-0 bottom-0 w-full flex justify-center items-center flex-col">
        <div className="absolute w-full h-[2px] bg-black mt-1" />
        <div className="absolute z-50 text-xs bg-black text-white px-2 py-[1px] rounded-full mt-1">
          of {max} gb
        </div>
      </div>
    </div>
  );
};

export default HalfCircleGauge;
