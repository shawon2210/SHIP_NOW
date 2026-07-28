import { Plus, ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react';

export default function Calendar() {
  return (
    <div className="flex flex-col gap-[20px] w-full min-w-0 pb-[40px]">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-[14px] text-[#757575] leading-tight mb-1">
            Planning / <span className="text-[#856DF3] font-semibold">Schedule</span>
          </h2>
          <h1 className="text-[24px] font-bold text-[#333333] leading-[1.1]">Logistics Calendar</h1>
        </div>
        <button className="flex items-center justify-center gap-2 bg-[#333333] text-white px-4 py-2.5 rounded-[8px] h-[40px] hover:bg-[#222222] transition-colors cursor-pointer text-[14px] font-semibold shadow-2xs w-full md:w-auto">
          <Plus size={18} />
          New Event
        </button>
      </div>

      {/* Main Grid Container */}
      <div className="flex flex-col lg:flex-row gap-[20px] w-full min-w-0">
        
        {/* Calendar Sidebar */}
        <div className="w-full lg:w-[280px] shrink-0 bg-[#FEFEFE] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs p-[20px] flex flex-col gap-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[16px] font-semibold text-[#333333]">October 2024</h3>
              <div className="flex items-center gap-1">
                <button className="p-1.5 text-[#757575] hover:bg-[#F0F0F0] rounded-[6px] transition-colors cursor-pointer">
                  <ChevronLeft size={16} />
                </button>
                <button className="p-1.5 text-[#757575] hover:bg-[#F0F0F0] rounded-[6px] transition-colors cursor-pointer">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
            {/* Mini Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 text-center text-[12px] mb-2">
              {['S','M','T','W','T','F','S'].map((d, i) => (
                <div key={i} className="font-semibold text-[#757575] py-1">{d}</div>
              ))}
              {Array.from({ length: 31 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`py-1.5 rounded-[6px] cursor-pointer text-[12px] font-medium transition-colors ${
                    i === 24 
                      ? 'bg-[#856DF3] text-white font-bold shadow-2xs' 
                      : 'text-[#333333] hover:bg-[#F5F5F5]'
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
          
          <div className="h-[1px] bg-[#F0F0F0] w-full" />

          {/* Event Filters */}
          <div>
            <h4 className="text-[11px] font-bold text-[#757575] uppercase tracking-wider mb-3">Filters</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'Dispatches', color: '#856DF3' },
                { label: 'Deliveries', color: '#007837' },
                { label: 'Maintenance', color: '#B76E00' },
              ].map((filter, i) => (
                <label key={i} className="flex items-center gap-2.5 cursor-pointer text-[13px] font-medium text-[#333333]">
                  <input 
                    type="checkbox" 
                    defaultChecked 
                    className="w-4 h-4 rounded-[4px] border-[#F0F0F0] accent-[#856DF3] cursor-pointer" 
                  />
                  <span>{filter.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Calendar Main Content */}
        <div className="flex-1 bg-[#FEFEFE] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs p-[20px] flex flex-col gap-6 min-w-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#F0F0F0] pb-4">
            <h3 className="text-[16px] font-semibold text-[#333333]">Upcoming Events & Schedules</h3>
            <div className="flex bg-[#F0F0F0] p-1 rounded-[8px] gap-1 w-full sm:w-auto">
              {['Day', 'Week', 'Month'].map((view) => (
                <button 
                  key={view} 
                  className={`px-3 py-1 rounded-[6px] text-[12px] font-semibold transition-colors flex-1 sm:flex-none cursor-pointer ${
                    view === 'Week' 
                      ? 'bg-[#FEFEFE] text-[#333333] shadow-2xs' 
                      : 'text-[#757575] hover:text-[#333333]'
                  }`}
                >
                  {view}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            {/* Event Item 1 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border border-[#F0F0F0] rounded-[10px] bg-[#FEFEFE] hover:border-[#856DF3]/40 transition-colors shadow-2xs">
              <div className="sm:w-28 shrink-0">
                <p className="text-[14px] font-bold text-[#856DF3]">09:00 AM</p>
                <p className="text-[11px] text-[#757575]">Oct 25, 2024</p>
              </div>
              <div className="w-1 h-10 bg-[#856DF3] rounded-full hidden sm:block shrink-0" />
              <div className="flex-1">
                <h4 className="text-[14px] font-bold text-[#333333]">Fleet #44 Maintenance Check</h4>
                <div className="flex flex-wrap items-center gap-4 mt-1.5 text-[12px] text-[#757575]">
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-[#856DF3]" /> 2 Hours
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-[#856DF3]" /> Hub Garage #2
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-[10px] text-[11px] font-bold bg-[#E3DDFF] text-[#2A1298]">
                Scheduled
              </span>
            </div>
            
            {/* Event Item 2 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border border-[#F0F0F0] rounded-[10px] bg-[#FEFEFE] hover:border-[#856DF3]/40 transition-colors shadow-2xs">
              <div className="sm:w-28 shrink-0">
                <p className="text-[14px] font-bold text-[#B76E00]">01:30 PM</p>
                <p className="text-[11px] text-[#757575]">Oct 25, 2024</p>
              </div>
              <div className="w-1 h-10 bg-[#FFF3D6] rounded-full hidden sm:block shrink-0" />
              <div className="flex-1">
                <h4 className="text-[14px] font-bold text-[#333333]">Urgent Dispatch: Order #9912</h4>
                <div className="flex flex-wrap items-center gap-4 mt-1.5 text-[12px] text-[#757575]">
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-[#B76E00]" /> 4.5 Hours
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-[#B76E00]" /> Interstate Route 66
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-[10px] text-[11px] font-bold bg-[#FFF3D6] text-[#B76E00]">
                High Priority
              </span>
            </div>

            {/* Event Item 3 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border border-[#F0F0F0] rounded-[10px] bg-[#FEFEFE] hover:border-[#856DF3]/40 transition-colors shadow-2xs">
              <div className="sm:w-28 shrink-0">
                <p className="text-[14px] font-bold text-[#007837]">04:00 PM</p>
                <p className="text-[11px] text-[#757575]">Oct 25, 2024</p>
              </div>
              <div className="w-1 h-10 bg-[#D9F9E7] rounded-full hidden sm:block shrink-0" />
              <div className="flex-1">
                <h4 className="text-[14px] font-bold text-[#333333]">Regional Hub Storage Delivery</h4>
                <div className="flex flex-wrap items-center gap-4 mt-1.5 text-[12px] text-[#757575]">
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-[#007837]" /> 1.5 Hours
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-[#007837]" /> Warehouse Dock B
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-[10px] text-[11px] font-bold bg-[#D9F9E7] text-[#007837]">
                On Schedule
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
