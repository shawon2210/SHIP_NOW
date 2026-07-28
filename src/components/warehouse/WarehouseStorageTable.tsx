import { useState } from 'react';
import { Filter, ArrowUpDown } from 'lucide-react';

export interface StorageRowData {
  floor: number;
  section: string;
  category: string;
  usedPct: number;
  availableSpace: string;
}

const defaultRows: StorageRowData[] = [
  { floor: 1, section: 'A1 – A10', category: 'Electronics', usedPct: 80, availableSpace: '20/100' },
  { floor: 2, section: 'B1 – B10', category: 'Apparel', usedPct: 60, availableSpace: '40/100' },
  { floor: 1, section: 'C1 – C10', category: 'Home & Kitchen', usedPct: 90, availableSpace: '10/100' },
  { floor: 3, section: 'D1 – D10', category: 'Automotive Parts', usedPct: 50, availableSpace: '50/100' },
  { floor: 2, section: 'E1 – E10', category: 'Beauty & Health', usedPct: 70, availableSpace: '30/100' },
];

export default function WarehouseStorageTable({ rows = defaultRows }: { rows?: StorageRowData[] }) {
  const [activeFilter, setActiveFilter] = useState('Section');

  const filterChips = ['Section', 'Package Status', 'Fleets', 'Drivers'];

  return (
    <div className="bg-[#FEFEFE] rounded-[12px] p-[16px] flex flex-col gap-[16px] border border-[#F0F0F0]/50 shadow-2xs w-full min-h-[314px]">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[12px]">
        <h2 className="text-[16px] font-semibold text-[#333333] leading-[120%]">
          Warehouse Storage
        </h2>

        {/* Right-side controls */}
        <div className="flex items-center gap-[8px] flex-wrap">
          {/* Filter Chip */}
          <button className="flex items-center gap-[6px] px-[10px] py-[6px] bg-[#F0F0F0] hover:bg-[#E0E0E0] rounded-[8px] text-[12px] font-semibold text-[#333333] transition-colors cursor-pointer">
            <Filter size={14} className="text-[#333333]" />
            <span>Filter</span>
          </button>

          <span className="text-[12px] font-regular text-[#757575]">Sort by:</span>

          {/* Picker Chips */}
          <div className="flex items-center gap-[4px] flex-wrap">
            {filterChips.map((chip) => {
              const isActive = activeFilter === chip;
              return (
                <button
                  key={chip}
                  onClick={() => setActiveFilter(chip)}
                  className={`px-[10px] py-[5px] rounded-[6px] text-[11px] font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#333333] text-[#FEFEFE]'
                      : 'bg-[#F0F0F0] text-[#757575] hover:bg-[#E0E0E0] hover:text-[#333333]'
                  }`}
                >
                  {chip}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Storage Table */}
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-[#E0E0E0]">
              {['Floor', 'Section', 'Category', 'Storage Used', 'Available Space'].map((header) => (
                <th
                  key={header}
                  className="py-[8px] px-[12px] text-[9px] font-regular text-[#757575] uppercase tracking-wider select-none"
                >
                  <div className="flex items-center gap-[4px]">
                    <span>{header}</span>
                    <ArrowUpDown size={12} className="text-[#757575] opacity-70" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className={`h-[40px] border-b border-[#E0E0E0] last:border-b-0 hover:bg-[#F9F9F9] transition-colors text-[12px]`}
              >
                {/* Floor */}
                <td className="px-[12px] font-semibold text-[#333333]">
                  Floor {row.floor}
                </td>

                {/* Section */}
                <td className="px-[12px] font-regular text-[#333333]">
                  {row.section}
                </td>

                {/* Category */}
                <td className="px-[12px] font-regular text-[#333333]">
                  {row.category}
                </td>

                {/* Storage Used & Percentage */}
                <td className="px-[12px]">
                  <div className="flex items-center gap-[10px] max-w-[180px]">
                    <div className="flex-1 h-[6px] bg-[#F0F0F0] rounded-[3px] overflow-hidden">
                      <div
                        className="h-full bg-[#856DF3] rounded-[3px] transition-all duration-300"
                        style={{ width: `${row.usedPct}%` }}
                      />
                    </div>
                    <span className="text-[12px] font-bold text-[#333333] shrink-0 w-[32px]">
                      {row.usedPct}%
                    </span>
                  </div>
                </td>

                {/* Available Space */}
                <td className="px-[12px]">
                  <span className="text-[12px]">
                    <strong className="font-bold text-[#333333]">
                      {row.availableSpace.split('/')[0]}
                    </strong>
                    <span className="font-regular text-[#757575]">
                      /{row.availableSpace.split('/')[1]}
                    </span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
