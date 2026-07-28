import { useState } from 'react';
import { Truck, Train, Anchor, Plane } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const freightTabs = [
  { id: 'road', label: 'Road Freight', icon: Truck },
  { id: 'rail', label: 'Rail Freight', icon: Train },
  { id: 'ocean', label: 'Ocean Freight', icon: Anchor },
  { id: 'air', label: 'Air Freight', icon: Plane },
];

export default function Header() {
  const [activeTab, setActiveTab] = useState('road');
  const location = useLocation();

  // If on warehouse page, render Phase 3 top bar
  const isWarehousePage = location.pathname === '/warehouse';

  if (isWarehousePage) {
    return (
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between min-h-[50px] gap-[12px] mb-[20px] w-full">
        {/* Left: Title & Breadcrumb (pl-[44px] lg:pl-0 to accommodate mobile hamburger button) */}
        <div className="flex flex-col justify-center pl-[44px] lg:pl-0">
          <h1 className="text-[24px] font-bold text-[#333333] leading-[110%] tracking-tight">
            Warehouse
          </h1>
          <div className="flex items-center gap-[4px] text-[11px] mt-[4px]">
            <span className="font-semibold text-[#2A1298]">Dashboard</span>
            <span className="text-[#757575]">/</span>
            <span className="text-[#757575]">Warehouse</span>
          </div>
        </div>

        {/* Right: Segmented Pill Tab Bar */}
        <div className="flex items-center bg-[#FEFEFE] rounded-[12px] p-[4px] shadow-xs overflow-x-auto max-w-full custom-scrollbar">
          {freightTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-[8px] px-[12px] py-[6px] rounded-[8px] text-[12px] font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#333333] text-[#FEFEFE] shadow-xs'
                    : 'text-[#757575] hover:text-[#333333] hover:bg-[#F0F0F0]'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-[#FEFEFE]' : 'text-[#757575]'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </header>
    );
  }

  // Fallback default header for other pages
  return (
    <header className="flex items-center justify-between min-h-[50px] mb-[20px] w-full">
      <div className="flex flex-col pl-[44px] lg:pl-0">
        <h1 className="text-[24px] font-bold text-[#333333]">
          {location.pathname.replace('/', '').toUpperCase() || 'DASHBOARD'}
        </h1>
      </div>
    </header>
  );
}
