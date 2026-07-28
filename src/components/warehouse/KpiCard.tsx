import { TrendingUp } from 'lucide-react';

export interface KpiItem {
  label: string;
  value: string;
  unit?: string;
  statusWord?: string;
  change: string;
}

const defaultKpis: KpiItem[] = [
  {
    label: 'Total SKU',
    value: '285',
    change: '+2.58%',
  },
  {
    label: 'Quantity on Hand',
    value: '12,450',
    unit: 'units',
    change: '+4.37%',
  },
  {
    label: 'Capacity Usage',
    value: '62.5%',
    statusWord: 'Full',
    change: '+1.54%',
  },
];

interface KpiCardProps {
  items?: KpiItem[];
}

export default function KpiCard({ items = defaultKpis }: KpiCardProps) {
  return (
    <div className="w-full lg:w-[200px] flex flex-col sm:flex-row lg:flex-col gap-[20px] shrink-0">
      {items.map((kpi, idx) => (
        <div
          key={idx}
          className="flex-1 bg-[#FEFEFE] rounded-[12px] p-[14px] flex flex-col gap-[12px] shadow-2xs border border-[#F0F0F0]/50 justify-between"
        >
          {/* Label */}
          <span className="text-[12px] font-regular text-[#757575] leading-none">
            {kpi.label}
          </span>

          {/* Number & Badge Row */}
          <div className="flex items-baseline justify-between gap-[8px]">
            <div className="flex items-baseline gap-[4px] flex-wrap">
              <span className="text-[22px] font-bold text-[#333333] leading-none tracking-tight">
                {kpi.value}
              </span>
              {kpi.unit && (
                <span className="text-[12px] font-regular text-[#757575]">
                  {kpi.unit}
                </span>
              )}
              {kpi.statusWord && (
                <span className="text-[12px] font-semibold text-[#333333]">
                  {kpi.statusWord}
                </span>
              )}
            </div>

            {/* Green Badge */}
            <div className="inline-flex items-center gap-[2px] px-[6px] py-[2px] rounded-[6px] bg-[#D9F9E7] text-[#007837] text-[11px] font-semibold shrink-0">
              <TrendingUp size={11} className="stroke-[2.5]" />
              <span>{kpi.change}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
