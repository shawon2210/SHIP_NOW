import { MoreHorizontal, CheckSquare, PlusSquare, Truck, FilePlus } from 'lucide-react';

export interface ActivityEntry {
  id: number;
  name: string;
  actionText: string;
  time: string;
  iconBg: string;
  icon: typeof CheckSquare;
}

const defaultActivities: ActivityEntry[] = [
  {
    id: 1,
    name: 'Leo Fernandez',
    actionText: 'confirmed receipt of 40 units of Winter Jacket Series in Section B3 (Apparel)',
    time: '01:45 PM',
    iconBg: '#333333',
    icon: CheckSquare,
  },
  {
    id: 2,
    name: 'Ava Martinez',
    actionText: 'added 25 units of Smart Router Kit to Section A1 (Electronics)',
    time: '09:15 AM',
    iconBg: '#856DF3',
    icon: PlusSquare,
  },
  {
    id: 3,
    name: 'Oscar Liem',
    actionText: 'dispatched 18 units of Stainless Steel Cookware Set from Section C5 (Home & Kitchen)',
    time: '05:30 PM',
    iconBg: '#333333',
    icon: Truck,
  },
  {
    id: 4,
    name: 'Dina Choi',
    actionText: 'created a shipment entry for Brake Pad Sets in Section D2 (Automotive Parts)',
    time: '04:10 PM',
    iconBg: '#856DF3',
    icon: FilePlus,
  },
];

export default function ActivityLogCard({ activities = defaultActivities }: { activities?: ActivityEntry[] }) {
  return (
    <div className="bg-[#FEFEFE] rounded-[12px] p-[16px] flex flex-col gap-[20px] border border-[#F0F0F0]/50 shadow-2xs min-h-[407px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-[16px] font-semibold text-[#333333] leading-[120%]">
          Warehouse Activity Log
        </h2>
        <button
          className="w-[40px] h-[40px] flex items-center justify-center bg-[#F0F0F0] hover:bg-[#E0E0E0] rounded-[8px] transition-colors cursor-pointer"
          aria-label="More activity log options"
        >
          <MoreHorizontal size={16} className="text-[#333333]" />
        </button>
      </div>

      {/* Flat List of 4 entries */}
      <div className="flex flex-col flex-1 justify-between">
        {activities.map((act, idx) => {
          const IconComponent = act.icon;
          return (
            <div
              key={act.id}
              className={`flex items-start gap-[12px] py-[12px] ${
                idx < activities.length - 1 ? 'border-b border-[#E0E0E0]' : ''
              }`}
            >
              {/* Circular 34x34 Icon */}
              <div
                className="w-[34px] h-[34px] rounded-full flex items-center justify-center shrink-0 text-[#FEFEFE] shadow-2xs"
                style={{ backgroundColor: act.iconBg }}
              >
                <IconComponent size={16} />
              </div>

              {/* Text Block & Time */}
              <div className="flex flex-col flex-1 min-w-0">
                <p className="text-[12px] font-regular text-[#333333] leading-snug">
                  <strong className="font-bold text-[#856DF3] mr-[4px]">
                    {act.name}
                  </strong>
                  {act.actionText}
                </p>
                <span className="text-[11px] font-regular text-[#757575] mt-[4px]">
                  {act.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
