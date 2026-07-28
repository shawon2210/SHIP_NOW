import { Search, Filter, UserPlus, Star, Phone, MoreVertical, Navigation } from 'lucide-react';

const mockDrivers = [
  { id: 'DRV-102', name: 'John Smith', status: 'On Duty', rating: '4.8', route: 'Chicago to Detroit', phone: '+1 (555) 019-2834' },
  { id: 'DRV-105', name: 'Sarah Jenkins', status: 'Off Duty', rating: '4.9', route: 'N/A', phone: '+1 (555) 012-9931' },
  { id: 'DRV-112', name: 'Mike Davis', status: 'On Duty', rating: '4.7', route: 'Dallas to Austin', phone: '+1 (555) 018-2234' },
  { id: 'DRV-120', name: 'Alex Ray', status: 'On Break', rating: '5.0', route: 'Local SF Route', phone: '+1 (555) 017-8822' },
  { id: 'DRV-124', name: 'Tom Wilson', status: 'On Duty', rating: '4.5', route: 'Seattle to Portland', phone: '+1 (555) 015-4421' },
  { id: 'DRV-130', name: 'Emily Chen', status: 'Off Duty', rating: '4.9', route: 'N/A', phone: '+1 (555) 014-9988' },
];

export default function Drivers() {
  return (
    <div className="flex flex-col gap-[20px] w-full min-w-0 pb-[40px]">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-[14px] text-[#757575] leading-tight mb-1">
            Operations / <span className="text-[#856DF3] font-semibold">Drivers</span>
          </h2>
          <h1 className="text-[24px] font-bold text-[#333333] leading-[1.1]">Driver Directory</h1>
        </div>
        <button className="flex items-center justify-center gap-2 bg-[#333333] text-white px-4 py-2.5 rounded-[8px] h-[40px] hover:bg-[#222222] transition-colors cursor-pointer text-[14px] font-semibold shadow-2xs w-full md:w-auto">
          <UserPlus size={18} />
          Add Driver
        </button>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex items-center bg-[#FEFEFE] px-3 py-2 rounded-[8px] border border-[#F0F0F0] w-full sm:w-[320px] shadow-2xs">
          <Search size={18} className="text-[#757575]" />
          <input 
            type="text" 
            placeholder="Search drivers by name or ID..."
            className="ml-2 bg-transparent outline-none text-[14px] text-[#333333] w-full placeholder-[#757575]"
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select className="bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] px-3 py-2 text-[14px] text-[#333333] outline-none shadow-2xs font-medium w-full sm:w-auto cursor-pointer">
            <option>All Statuses</option>
            <option>On Duty</option>
            <option>Off Duty</option>
            <option>On Break</option>
          </select>
          <button className="p-2.5 border border-[#F0F0F0] bg-[#FEFEFE] rounded-[8px] hover:bg-[#F5F5F5] transition-colors cursor-pointer shadow-2xs shrink-0">
            <Filter size={18} className="text-[#333333]" />
          </button>
        </div>
      </div>

      {/* Drivers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
        {mockDrivers.map(driver => (
          <div key={driver.id} className="bg-[#FEFEFE] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs p-[20px] flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E3DDFF] text-[#2A1298] flex items-center justify-center font-bold text-[14px]">
                    {driver.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#333333] text-[15px]">{driver.name}</h3>
                    <p className="text-[11px] text-[#757575] font-semibold">{driver.id}</p>
                  </div>
                </div>
                <button className="text-[#757575] hover:text-[#333333] p-1 rounded-[6px] transition-colors">
                  <MoreVertical size={16} />
                </button>
              </div>
              
              <div className="mb-4 flex items-center justify-between">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-[10px] text-[11px] font-bold ${
                  driver.status === 'On Duty' ? 'bg-[#D9F9E7] text-[#007837]' :
                  driver.status === 'On Break' ? 'bg-[#FFF3D6] text-[#B76E00]' :
                  'bg-[#F0F0F0] text-[#757575]'
                }`}>
                  {driver.status}
                </span>
                <div className="flex items-center gap-1 text-[13px] font-bold text-[#333333]">
                  <Star size={14} className="text-[#B76E00] fill-[#B76E00]" />
                  {driver.rating}
                </div>
              </div>

              <div className="space-y-2.5 text-[13px] mb-4">
                <div className="flex items-start gap-2.5">
                  <Navigation size={16} className="text-[#856DF3] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-bold text-[#757575] uppercase tracking-wider">Current Route</p>
                    <p className="font-medium text-[#333333]">{driver.route}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone size={16} className="text-[#856DF3] shrink-0" />
                  <p className="font-medium text-[#333333]">{driver.phone}</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-[#F0F0F0] flex gap-2">
              <button className="flex-1 py-1.5 text-[12px] font-semibold text-[#856DF3] bg-[#E3DDFF]/40 hover:bg-[#E3DDFF]/80 rounded-[8px] transition-colors border border-[#856DF3]/20 cursor-pointer">
                Message
              </button>
              <button className="flex-1 py-1.5 text-[12px] font-semibold text-[#333333] hover:bg-[#F5F5F5] rounded-[8px] transition-colors border border-[#F0F0F0] cursor-pointer">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
