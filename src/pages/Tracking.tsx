import { Search, Map, Navigation, Clock, CheckCircle2 } from 'lucide-react';

export default function Tracking() {
  return (
    <div className="flex flex-col gap-[20px] w-full min-w-0 pb-[40px]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-[14px] text-[#757575] leading-tight mb-1">
            Logistics / <span className="text-[#856DF3] font-semibold">Live Tracking</span>
          </h2>
          <h1 className="text-[24px] font-bold text-[#333333] leading-[1.1]">Live Tracking Map</h1>
        </div>
        
        <div className="flex items-center bg-[#FEFEFE] px-3 py-2 rounded-[8px] border border-[#F0F0F0] w-full sm:w-[300px] shadow-2xs">
          <Search size={18} className="text-[#757575]" />
          <input 
            type="text" 
            placeholder="Enter Tracking ID..."
            className="ml-2 bg-transparent outline-none text-[14px] text-[#333333] w-full placeholder-[#757575]"
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row gap-[20px] w-full min-w-0">
        
        {/* Tracking Details Sidebar */}
        <div className="w-full lg:w-[340px] shrink-0 bg-[#FEFEFE] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs flex flex-col justify-between overflow-hidden">
          
          <div className="p-[20px] border-b border-[#F0F0F0] flex items-center justify-between">
            <div>
              <span className="text-[12px] font-semibold text-[#757575]">Shipment ID</span>
              <h3 className="text-[18px] font-bold text-[#333333]">#TR-1029</h3>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[10px] text-[11px] font-bold bg-[#D9F9E7] text-[#007837]">
              <span className="w-2 h-2 rounded-full bg-[#007837] animate-pulse" />
              IN TRANSIT
            </span>
          </div>
          
          {/* Status Timeline */}
          <div className="p-[20px] flex-1">
            <h4 className="text-[11px] font-bold text-[#757575] uppercase tracking-wider mb-6">Status Timeline</h4>
            <div className="relative border-l-2 border-[#F0F0F0] ml-3 pl-6 flex flex-col gap-6">
              
              <div className="relative">
                <div className="absolute -left-[31px] top-0 w-3.5 h-3.5 rounded-full border-2 border-white bg-[#856DF3] ring-4 ring-[#E3DDFF]" />
                <p className="text-[14px] font-bold text-[#333333]">Out for Delivery</p>
                <p className="text-[12px] text-[#757575] mt-0.5">Driver is approaching destination.</p>
                <p className="text-[11px] text-[#856DF3] font-semibold mt-1">Today, 09:42 AM</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-0 w-3.5 h-3.5 rounded-full border-2 border-white bg-[#007837]" />
                <p className="text-[14px] font-bold text-[#333333]">Arrived at Local Hub</p>
                <p className="text-[12px] text-[#757575] mt-0.5">Processed at regional center.</p>
                <p className="text-[11px] text-[#757575] font-medium mt-1">Yesterday, 11:20 PM</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-0 w-3.5 h-3.5 rounded-full border-2 border-white bg-[#007837]" />
                <p className="text-[14px] font-bold text-[#333333]">In Transit</p>
                <p className="text-[12px] text-[#757575] mt-0.5">Departed origin facility.</p>
                <p className="text-[11px] text-[#757575] font-medium mt-1">Oct 23, 04:15 PM</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-0 w-3.5 h-3.5 rounded-full border-2 border-white bg-[#007837]" />
                <p className="text-[14px] font-bold text-[#333333]">Label Created</p>
                <p className="text-[12px] text-[#757575] mt-0.5">Shipment info received.</p>
                <p className="text-[11px] text-[#757575] font-medium mt-1">Oct 23, 10:00 AM</p>
              </div>

            </div>
          </div>
          
          {/* Estimated Delivery Banner */}
          <div className="p-[16px] bg-[#F5F5F5] border-t border-[#F0F0F0] flex items-center justify-between">
            <div>
              <p className="text-[11px] text-[#757575] uppercase font-bold tracking-wider">Est. Delivery</p>
              <p className="text-[16px] font-bold text-[#856DF3]">Today, 2:30 PM</p>
            </div>
            <div className="p-2.5 bg-[#FEFEFE] rounded-[8px] shadow-2xs text-[#856DF3]">
              <Clock size={20} />
            </div>
          </div>
        </div>
        
        {/* Interactive Map Visual */}
        <div className="flex-1 bg-[#FEFEFE] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs overflow-hidden relative min-h-[450px]">
          <div className="absolute inset-0 flex items-center justify-center bg-[#F5F5F5]">
            <Map className="w-24 h-24 text-[#757575]/20" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center mix-blend-multiply opacity-30" />
            
            {/* Live Driver Card */}
            <div className="absolute top-4 right-4 bg-[#FEFEFE] p-4 rounded-[12px] shadow-2xs border border-[#F0F0F0] min-w-[220px]">
              <div className="flex items-center gap-2 mb-2 font-bold text-[14px] text-[#333333]">
                <Navigation size={16} className="text-[#856DF3]" />
                Live Vehicle Info
              </div>
              <div className="text-[12px] space-y-1.5 text-[#757575]">
                <div className="flex justify-between">
                  <span>Speed:</span>
                  <span className="font-semibold text-[#333333]">45 mph</span>
                </div>
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span className="font-semibold text-[#333333]">I-80 East</span>
                </div>
                <div className="flex justify-between">
                  <span>Next Stop:</span>
                  <span className="font-semibold text-[#333333]">14 miles</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
