import { MoreHorizontal } from 'lucide-react';

interface CapacityUsageCardProps {
  pct?: number;
  loadedShelves?: number;
  emptyShelves?: number;
}

export default function CapacityUsageCard({
  pct = 62.5,
  loadedShelves = 40,
  emptyShelves = 24,
}: CapacityUsageCardProps) {
  // SVG Donut Calculations
  // Radius r = 70, stroke-width = 16
  const r = 70;
  const circumference = 2 * Math.PI * r; // ~439.82
  const dashFilled = (pct / 100) * circumference; // ~274.89
  const dashEmpty = circumference - dashFilled;

  return (
    <div className="bg-[#333333] text-[#FEFEFE] rounded-[12px] p-[16px] flex flex-col gap-[16px] shadow-sm justify-between min-h-[298px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-[16px] font-semibold text-[#FEFEFE] leading-[120%]">
          Capacity Usage
        </h2>
        <button
          className="w-[40px] h-[40px] flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-[8px] transition-colors cursor-pointer"
          aria-label="More capacity usage options"
        >
          <MoreHorizontal size={16} className="text-[#FEFEFE]" />
        </button>
      </div>

      {/* Donut Chart Container (180x180 circle) */}
      <div className="relative w-[180px] h-[180px] mx-auto flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 180 180">
          {/* Track Circle (#FEFEFE) */}
          <circle
            cx="90"
            cy="90"
            r={r}
            stroke="#FEFEFE"
            strokeWidth="16"
            fill="none"
          />
          {/* Filled Circle (#856DF3) 62.5% */}
          <circle
            cx="90"
            cy="90"
            r={r}
            stroke="#856DF3"
            strokeWidth="16"
            fill="none"
            strokeDasharray={`${dashFilled} ${dashEmpty}`}
            strokeLinecap="round"
            className="transition-all duration-500 ease-out"
          />
        </svg>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
          <span className="text-[12px] font-regular text-[#F0F0F0]/80">
            Total Usage
          </span>
          <span className="text-[28px] font-bold text-[#FEFEFE] leading-none tracking-tight mt-[2px]">
            {pct}%
          </span>
        </div>
      </div>

      {/* Two-column stat row (shelf breakdown) */}
      <div className="grid grid-cols-2 gap-[12px] pt-[4px] border-t border-white/10 text-center">
        {/* Left Column: Loaded */}
        <div className="flex flex-col items-end pr-[12px] border-r border-white/10">
          <span className="text-[11px] font-regular text-[#F0F0F0]/70">Loaded</span>
          <span className="text-[14px] font-bold text-[#FEFEFE]">{loadedShelves} shelves</span>
        </div>

        {/* Right Column: Empty */}
        <div className="flex flex-col items-start pl-[12px]">
          <span className="text-[11px] font-regular text-[#F0F0F0]/70">Empty</span>
          <span className="text-[14px] font-bold text-[#FEFEFE]">{emptyShelves} shelves</span>
        </div>
      </div>
    </div>
  );
}
