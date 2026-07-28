import React, { useState } from 'react';
import { shipments } from '../data/mockData';
import { 
  Search, Plus, ChevronLeft, ChevronRight, ChevronDown,
  MapPin, Filter, Truck, Plane, Ship, Train, List, LayoutGrid
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Shipments() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [view, setView] = useState<'grid' | 'table'>('grid');

  const filteredShipments = shipments.filter(s => {
    const matchesSearch = s.id.toLowerCase().includes(search.toLowerCase()) || 
      s.sender.toLowerCase().includes(search.toLowerCase()) ||
      s.recipient.toLowerCase().includes(search.toLowerCase());
    
    if (activeTab === 'All') return matchesSearch;
    return matchesSearch && s.status === activeTab;
  });

  const tabs = ['All', 'Pending', 'In Transit', 'Completed', 'Cancelled'];

  const getIcon = (type: string) => {
    if (type.includes('Air')) return Plane;
    if (type.includes('Sea')) return Ship;
    if (type.includes('Rail')) return Train;
    return Truck;
  };

  const getProgress = (status: string) => {
    if (status === 'Completed') return 100;
    if (status === 'In Transit') return 60;
    if (status === 'Pending') return 10;
    return 0;
  };

  return (
    <div className="flex flex-col gap-[20px] w-full min-w-0 pb-[40px]">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-[14px] text-[#757575] leading-tight mb-1">
            Shipment / <span className="text-[#856DF3] font-semibold">Overview</span>
          </h2>
          <h1 className="text-[24px] font-bold text-[#333333] leading-[1.1]">Shipments</h1>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full md:w-auto">
          <div className="flex items-center bg-[#FEFEFE] px-3 py-2 rounded-[8px] border border-[#F0F0F0] w-full sm:w-[280px] shadow-2xs">
            <Search size={18} className="text-[#757575]" />
            <input 
              type="text" 
              placeholder="Search shipment or client..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ml-2 bg-transparent outline-none text-[14px] text-[#333333] w-full placeholder-[#757575]"
            />
          </div>
          <Link 
            to="/shipments/new" 
            className="flex items-center justify-center gap-1.5 bg-[#333333] text-white px-4 py-2.5 rounded-[8px] h-[40px] hover:bg-[#222222] transition-colors cursor-pointer text-[14px] font-semibold shadow-2xs whitespace-nowrap"
          >
            <Plus size={18} />
            <span>New Shipment</span>
          </Link>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bg-[#FEFEFE] rounded-[12px] p-[20px] border border-[#F0F0F0]/50 shadow-2xs flex flex-col gap-[20px]">
        {/* Filter & View Toolbar */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
          <div className="bg-[#F5F5F5] rounded-[10px] flex p-1 border border-[#F0F0F0] overflow-x-auto w-full xl:w-auto gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-1.5 rounded-[8px] text-[12px] font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  activeTab === tab 
                    ? 'bg-[#333333] text-white shadow-2xs' 
                    : 'text-[#757575] hover:text-[#333333]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full xl:w-auto justify-between xl:justify-end">
            <button className="flex items-center gap-2 bg-[#FEFEFE] border border-[#F0F0F0] px-3 py-1.5 rounded-[8px] text-[12px] font-semibold text-[#333333] hover:bg-[#F5F5F5] transition-colors cursor-pointer shadow-2xs">
              <Filter size={16} className="text-[#856DF3]" />
              <span>Filters</span>
            </button>

            <div className="flex items-center gap-2 text-[#757575]">
              <span className="text-[11px] font-medium">Sort by:</span>
              <button className="flex items-center gap-1 bg-[#FEFEFE] border border-[#F0F0F0] px-3 py-1.5 rounded-[8px] text-[12px] font-semibold text-[#333333] hover:bg-[#F5F5F5] transition-colors cursor-pointer shadow-2xs">
                <span>Status</span>
                <ChevronDown size={14} className="text-[#333333]" />
              </button>
            </div>
            
            {/* View Mode Toggle Switch */}
            <div className="flex items-center gap-1 bg-[#F5F5F5] p-1 rounded-[8px] border border-[#F0F0F0]">
              <button 
                onClick={() => setView('grid')}
                title="Grid View (Large Icons)"
                className={`p-1.5 rounded-[6px] transition-colors cursor-pointer ${
                  view === 'grid' 
                    ? 'bg-[#FEFEFE] text-[#856DF3] shadow-2xs font-bold' 
                    : 'text-[#757575] hover:text-[#333333]'
                }`}
              >
                <LayoutGrid size={18} />
              </button>
              <button 
                onClick={() => setView('table')}
                title="Table View"
                className={`p-1.5 rounded-[6px] transition-colors cursor-pointer ${
                  view === 'table' 
                    ? 'bg-[#FEFEFE] text-[#856DF3] shadow-2xs font-bold' 
                    : 'text-[#757575] hover:text-[#333333]'
                }`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Content View */}
        {view === 'grid' ? (
          /* Grid View (Large Icons by Default) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
            {filteredShipments.map((s) => {
              const Icon = getIcon(s.type);
              const progress = getProgress(s.status);
              return (
                <div 
                  key={s.id} 
                  className="bg-[#FEFEFE] p-[18px] rounded-[12px] border border-[#F0F0F0] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between gap-4 group"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                      <span className="text-[15px] font-bold text-[#333333] group-hover:text-[#856DF3] transition-colors">
                        {s.id}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-[10px] text-[10px] font-bold inline-flex items-center w-max ${
                        s.status === 'In Transit' ? 'bg-[#E3DDFF] text-[#2A1298]' : 
                        s.status === 'Completed' ? 'bg-[#D9F9E7] text-[#007837]' :
                        s.status === 'Pending' ? 'bg-[#FFF3D6] text-[#B76E00]' :
                        'bg-[#F0F0F0] text-[#757575]'
                      }`}>
                        {s.status}
                      </span>
                    </div>

                    {/* Prominent Large Icon */}
                    <div className="w-[48px] h-[48px] bg-[#856DF3] text-white rounded-[12px] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      <Icon size={26} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 pt-3 border-t border-[#F0F0F0]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#E3DDFF] text-[#2A1298] flex items-center justify-center font-bold text-[13px] shrink-0">
                        {s.sender.charAt(0)}
                      </div>
                      <div className="flex flex-col truncate">
                        <span className="text-[13px] font-semibold text-[#333333] truncate">{s.sender}</span>
                        <span className="text-[11px] text-[#757575] font-medium">{s.type}</span>
                      </div>
                    </div>

                    <div className="bg-[#F5F5F5] rounded-[8px] p-3 flex w-full">
                      <div className="flex flex-col items-center px-1 w-5">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#856DF3] border-2 border-white shrink-0 z-10" />
                        <div className="w-[2px] h-7 bg-[#856DF3]/30 shrink-0" />
                        <div className="w-3.5 h-3.5 rounded-full bg-[#856DF3] flex items-center justify-center shrink-0 z-10">
                          <MapPin size={8} className="text-white" />
                        </div>
                      </div>
                      <div className="flex flex-col justify-between flex-1 ml-2 text-[11px]">
                        <div className="flex justify-between items-start">
                          <span className="text-[#757575]">Origin:</span>
                          <span className="font-semibold text-[#333333] text-right">{s.senderLocation}</span>
                        </div>
                        <div className="flex justify-between items-start mt-2">
                          <span className="text-[#757575]">Dest:</span>
                          <span className="font-semibold text-[#333333] text-right">{s.recipientLocation}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-[#757575]">Progress</span>
                        <span className="font-bold text-[#333333]">{progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-[#F0F0F0] rounded-full overflow-hidden">
                        <div className="h-full bg-[#856DF3] rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Table View Option */
          <div className="overflow-x-auto w-full border border-[#F0F0F0] rounded-[10px]">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead className="bg-[#F5F5F5] text-[11px] uppercase font-bold text-[#757575]">
                <tr className="border-b border-[#F0F0F0]">
                  <th className="py-3 px-4">Shipping ID</th>
                  <th className="py-3 px-4">Sender</th>
                  <th className="py-3 px-4">Route</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Progress</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0F0F0] text-[13px]">
                {filteredShipments.map((s) => {
                  const Icon = getIcon(s.type);
                  const progress = getProgress(s.status);
                  return (
                    <tr key={s.id} className="hover:bg-[#F5F5F5]/60 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-[#856DF3]">
                        <div className="flex items-center gap-2">
                          <Icon size={18} className="text-[#856DF3]" />
                          <span>{s.id}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-[#333333]">{s.sender}</td>
                      <td className="py-3.5 px-4 text-[#757575] text-[12px]">
                        {s.senderLocation} &rarr; {s.recipientLocation}
                      </td>
                      <td className="py-3.5 px-4 text-[#757575]">{s.type}</td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2 w-28">
                          <div className="w-full h-1.5 bg-[#F0F0F0] rounded-full overflow-hidden">
                            <div className="h-full bg-[#856DF3] rounded-full" style={{ width: `${progress}%` }} />
                          </div>
                          <span className="text-[11px] font-bold text-[#333333]">{progress}%</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2.5 py-0.5 rounded-[10px] text-[11px] font-bold ${
                          s.status === 'In Transit' ? 'bg-[#E3DDFF] text-[#2A1298]' : 
                          s.status === 'Completed' ? 'bg-[#D9F9E7] text-[#007837]' :
                          s.status === 'Pending' ? 'bg-[#FFF3D6] text-[#B76E00]' :
                          'bg-[#F0F0F0] text-[#757575]'
                        }`}>
                          {s.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Footer Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-2 border-t border-[#F0F0F0] gap-4">
          <span className="text-[13px] text-[#757575]">
            Showing 1 to {filteredShipments.length} of {shipments.length} shipments
          </span>
          <div className="flex items-center gap-1.5">
            <button className="w-8 h-8 bg-[#F5F5F5] rounded-[6px] flex items-center justify-center hover:bg-[#F0F0F0] transition-colors cursor-pointer text-[#757575]">
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 bg-[#856DF3] rounded-[6px] text-[12px] font-bold text-white flex items-center justify-center shadow-2xs">1</button>
            <button className="w-8 h-8 bg-[#FEFEFE] border border-[#F0F0F0] rounded-[6px] text-[12px] font-semibold text-[#333333] flex items-center justify-center hover:bg-[#F5F5F5] cursor-pointer">2</button>
            <button className="w-8 h-8 bg-[#FEFEFE] border border-[#F0F0F0] rounded-[6px] text-[12px] font-semibold text-[#333333] flex items-center justify-center hover:bg-[#F5F5F5] cursor-pointer">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
