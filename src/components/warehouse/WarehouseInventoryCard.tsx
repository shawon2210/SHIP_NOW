import { CSSProperties } from 'react';
import { MoreHorizontal } from 'lucide-react';

export interface InventoryCategory {
  category: string;
  pct: number;
  count: string;
  color: string;
  fillStyle: 'solid' | 'striped';
}

const defaultCategories: InventoryCategory[] = [
  { category: 'Electronics', pct: 25, count: '2,500', color: '#856DF3', fillStyle: 'solid' },
  { category: 'Apparel', pct: 20, count: '2,000', color: '#856DF3', fillStyle: 'striped' },
  { category: 'Home & Kitchen', pct: 18, count: '1,800', color: '#333333', fillStyle: 'solid' },
  { category: 'Beauty & Health', pct: 15, count: '1,500', color: '#333333', fillStyle: 'striped' },
  { category: 'Automotive Parts', pct: 12, count: '1,200', color: '#757575', fillStyle: 'solid' },
  { category: 'Sports Equipment', pct: 10, count: '1,000', color: '#757575', fillStyle: 'striped' },
];

interface WarehouseInventoryCardProps {
  totalPackages?: string;
  categories?: InventoryCategory[];
}

export default function WarehouseInventoryCard({
  totalPackages = '10,000',
  categories = defaultCategories,
}: WarehouseInventoryCardProps) {
  // Max percentage is 25%, map 25% to 100px bar height
  const maxPct = 25;
  const maxBarHeight = 100; // in px

  return (
    <div className="flex-1 min-w-0 bg-[#FEFEFE] rounded-[12px] p-[16px] flex flex-col gap-[16px] border border-[#F0F0F0]/50 shadow-2xs justify-between">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h2 className="text-[16px] font-semibold text-[#333333] leading-[120%]">
          Warehouse Inventory
        </h2>
        <button
          className="w-[40px] h-[40px] flex items-center justify-center bg-[#F0F0F0] hover:bg-[#E0E0E0] rounded-[8px] transition-colors cursor-pointer"
          aria-label="More inventory options"
        >
          <MoreHorizontal size={16} className="text-[#333333]" />
        </button>
      </div>

      {/* Big Number Row */}
      <div className="flex items-baseline gap-[6px]">
        <span className="text-[32px] font-bold text-[#333333] leading-none tracking-tight">
          {totalPackages}
        </span>
        <span className="text-[12px] font-regular text-[#757575]">
          packages
        </span>
      </div>

      {/* Bar Chart Row (6 bars, equal width ~74px each, gap 12px, dashed vertical separators #E0E0E0) */}
      <div className="grid grid-cols-6 gap-[8px] sm:gap-[12px] w-full pt-[8px] items-end overflow-x-auto custom-scrollbar">
        {categories.map((cat, idx) => {
          const barHeightPx = Math.max(20, Math.round((cat.pct / maxPct) * maxBarHeight));

          // Striped class mapping
          let fillClass = '';
          let fillStyleObj: CSSProperties = { backgroundColor: cat.color };

          if (cat.fillStyle === 'striped') {
            if (cat.color === '#856DF3') fillClass = 'bar-striped-purple';
            else if (cat.color === '#333333') fillClass = 'bar-striped-black';
            else fillClass = 'bar-striped-grey';
            fillStyleObj = {}; // handled by CSS class
          }

          return (
            <div
              key={idx}
              className={`flex flex-col items-center gap-[8px] flex-1 min-w-[60px] relative ${
                idx < categories.length - 1 ? 'border-r border-dashed border-[#E0E0E0] pr-[4px] sm:pr-[8px]' : ''
              }`}
            >
              {/* Category Label (Top) */}
              <span className="text-[11px] font-regular text-[#757575] text-center leading-tight min-h-[26px] flex items-end justify-center">
                {cat.category}
              </span>

              {/* Bar Container with subtle fade background */}
              <div 
                className="w-full max-w-[74px] h-[104px] flex items-end justify-center p-[2px] rounded-[6px]"
                style={{
                  background: 'linear-gradient(180deg, rgba(240,240,240,0.1) 0%, rgba(14,14,14,0.06) 100%)'
                }}
              >
                {/* The Bar */}
                <div
                  className={`w-full rounded-[4px] transition-all duration-300 ${fillClass}`}
                  style={{
                    height: `${barHeightPx}px`,
                    ...fillStyleObj,
                  }}
                />
              </div>

              {/* Percentage & Count below bar */}
              <div className="text-[11px] text-center whitespace-nowrap">
                <span className="font-bold text-[#333333]">{cat.pct}%</span>
                <span className="text-[#757575] mx-[2px]">·</span>
                <span className="font-regular text-[#757575]">{cat.count}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
