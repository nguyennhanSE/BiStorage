import React from 'react';

import "./adjust.css"

export interface FilePercentage {
  document: number | null;
  image: number | null;
  video: number | null;
  audio: number | null;
  zip: number | null;
}
const LineBar = ({
  total,
  percentage,
}: {
  total: number;
  percentage: FilePercentage;
}) => {
  const getWidth = (value: number | null) => {
    if (value === null) return '0%';
    return `${(value / total) * 100}%`;
  };

  return (
    <>
    <div className="w-full h-[40px] rounded-md overflow-hidden bg-gray-200 flex">
      <div className="color-1 h-full shrink-0 line-segment" style={{ width: getWidth(percentage.document) }} />
      <div className="color-2 h-full shrink-0 line-segment" style={{ width: getWidth(percentage.image) }} />
      <div className="color-3 h-full shrink-0 line-segment" style={{ width: getWidth(percentage.video) }} />
      <div className="color-4 h-full shrink-0 line-segment" style={{ width: getWidth(percentage.audio) }} />
      <div className="color-5 h-full shrink-0 line-segment" style={{ width: getWidth(percentage.zip) }} />
    </div>
    <div className="flex items-center gap-5 w-full">
        {(percentage.document ?? 0) > 0 && (
        <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-sm color-1"></div>
            <span className="text-[12px]">Document</span>
        </div>
        )}

        {(percentage.image ?? 0) > 0 && (
        <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-sm color-2"></div>
            <span className="text-[12px]">Image</span>
        </div>
        )}

        {(percentage.video ?? 0) > 0 && (
        <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-sm color-3"></div>
            <span className="text-[12px]">Video</span>
        </div>
        )}

        {(percentage.audio ?? 0) > 0 && (
        <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-sm color-4"></div>
            <span className="text-[12px]">Audio</span>
        </div>
        )}

        {(percentage.zip ?? 0) > 0 && (
        <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-sm color-5"></div>
            <span className="text-[12px]">Zip</span>
        </div>
        )}
    </div>
    </>
  );
};


export default LineBar;