import { useState } from 'react';
import { Package } from 'lucide-react';

export interface PackageEntry {
  id: string;
  status: 'Sent' | 'Received' | 'Expected';
  badgeBg: string;
  badgeText: string;
  timestamp: string;
}

const defaultPackages: PackageEntry[] = [
  {
    id: 'PKG-HK77420',
    status: 'Sent',
    badgeBg: '#E3DDFF',
    badgeText: '#2A1298',
    timestamp: 'March 20, 2035 – 05:30 PM',
  },
  {
    id: 'PKG-A50812',
    status: 'Received',
    badgeBg: '#D9F9E7',
    badgeText: '#007837',
    timestamp: 'March 21, 2035 – 01:45 PM',
  },
  {
    id: 'PKG-E10293',
    status: 'Expected',
    badgeBg: '#F0F0F0',
    badgeText: '#333333',
    timestamp: 'March 22, 2035 – 09:00 AM',
  },
];

export default function PackageStatusCard({ packages = defaultPackages }: { packages?: PackageEntry[] }) {
  const [filter, setFilter] = useState<'All' | 'Expected' | 'Received' | 'Sent'>('All');

  const filterTabs: Array<'All' | 'Expected' | 'Received' | 'Sent'> = [
    'All',
    'Expected',
    'Received',
    'Sent',
  ];

  const filteredPackages =
    filter === 'All' ? packages : packages.filter((p) => p.status === filter);

  return (
    <div className="bg-[#FEFEFE] rounded-[12px] p-[16px] flex flex-col gap-[16px] border border-[#F0F0F0]/50 shadow-2xs min-h-[296px] justify-between">
      {/* Header */}
      <h2 className="text-[16px] font-semibold text-[#333333] leading-[120%]">
        Package Status
      </h2>

      {/* Segmented filter pill row */}
      <div className="flex items-center bg-[#F0F0F0] rounded-[8px] p-[3px] overflow-x-auto custom-scrollbar">
        {filterTabs.map((tab) => {
          const isActive = filter === tab;
          return (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`flex-1 py-[4px] px-[8px] rounded-[6px] text-[11px] font-semibold transition-all cursor-pointer whitespace-nowrap text-center ${
                isActive
                  ? 'bg-[#333333] text-[#FEFEFE] shadow-xs'
                  : 'text-[#757575] hover:text-[#333333]'
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* List of package entries */}
      <div className="flex flex-col gap-[12px] flex-1 justify-center">
        {filteredPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="flex items-center justify-between gap-[12px] p-[8px] hover:bg-[#F9F9F9] rounded-[8px] transition-colors"
          >
            {/* Left: Purple Icon Chip + Info Stack */}
            <div className="flex items-center gap-[10px] min-w-0">
              <div className="w-[38px] h-[38px] rounded-[8px] bg-[#E3DDFF] flex items-center justify-center shrink-0">
                <Package size={18} className="text-[#2A1298]" />
              </div>
              <div className="flex flex-col leading-tight min-w-0">
                <span className="text-[12px] font-bold text-[#333333] truncate">
                  {pkg.id}
                </span>
                <span className="text-[11px] font-regular text-[#757575] truncate mt-[2px]">
                  {pkg.timestamp}
                </span>
              </div>
            </div>

            {/* Right: Status badge pill */}
            <div
              className="px-[10px] py-[4px] rounded-[6px] text-[11px] font-semibold shrink-0"
              style={{ backgroundColor: pkg.badgeBg, color: pkg.badgeText }}
            >
              {pkg.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
