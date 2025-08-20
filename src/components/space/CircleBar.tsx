import React from 'react';

import "./adjust.css"
type Props = {
    used : number;
    total : number;
    size?: number;
    stroke? : number;
    startAngleDeg?: number;
    sweepDeg?: number;
}
const CircleBar = ({used, total, size = 180, stroke = 14, startAngleDeg = 180, sweepDeg = 360}: Props) => {
    const r = (size - stroke) / 2; // ban kinh
    const pct = Math.max(0,Math.min(used / total, 1)); // phan tram su dung
    const C = 2 * Math.PI * r; // chu vi
    const arcLen = (sweepDeg / 360) * C; // độ dài cung thực tế muốn vẽ ( màu xám )
    const progressLen = pct * arcLen;
    return (
        <div className='relative flex items-center justify-center'
        style={{width: size, height: size}}>
            <svg 
                viewBox={`0 0 ${size} ${size}`}
                width={size}
                height={size}
                className='block'
            >
                <defs>
                    {/* gradient tím (có thể đổi tùy ý) */}
                    <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                </defs>
                {/* TRACK (nền xám) */}
                <circle
                    className="arc-track"
                    cx={size / 2}
                    cy={size / 2}
                    r={r}
                    strokeWidth={stroke}
                    stroke="#ececf0"
                    strokeDasharray={`${arcLen} ${C}`}
                    transform={`rotate(${startAngleDeg - 90} ${size / 2} ${size / 2})`}
                />

                {/* PROGRESS (màu tím) */}
                <circle
                    className="arc-progress"
                    cx={size / 2}
                    cy={size / 2}
                    r={r}
                    strokeWidth={stroke}
                    stroke="url(#gaugeGradient)"
                    strokeDasharray={`${progressLen} ${C}`}
                    transform={`rotate(${startAngleDeg - 90} ${size / 2} ${size / 2})`}
                />
            </svg>
            {/* Nội dung giữa */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* icon */}
                <div className="flex items-center justify-center h-9 w-9 rounded-full border border-gray-200 text-gray-500">
                    {/* icon hộp lưu trữ */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6"/>
                        <path d="M3 10h18" stroke="currentColor" strokeWidth="1.6"/>
                    </svg>
                </div>

                <div className="mt-2 text-xl font-semibold text-slate-900">
                    {used.toFixed(1)} GB
                </div>
                <div className="text-sm text-slate-500">
                    of {total} GB
                </div>
            </div>
            
        </div>
    );
};

export default CircleBar;