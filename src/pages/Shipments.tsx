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
  const [view, setView] = useState<'table' | 'grid'>('table');

  const filteredShipments = shipments.filter(s => 
    s.id.toLowerCase().includes(search.toLowerCase()) || 
    s.sender.toLowerCase().includes(search.toLowerCase()) ||
    s.recipient.toLowerCase().includes(search.toLowerCase())
  );

  const tabs = ['All', 'Pending', 'In Transit', 'Delivered', 'Cancelled'];

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
    <div className="p-4 lg:p-[20px] w-full max-w-[1217px] mx-auto flex flex-col gap-[20px] bg-[#F0F0F0] min-h-screen font-['Nunito_Sans',sans-serif]">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-1 text-[11px] text-[#757575] mb-1">
            <span className="text-[#2A1298]">Shipment</span>
            <span>/</span>
            <span>Overview</span>
          </div>
          <h1 className="text-[24px] font-bold text-[#333333] leading-[1.1]">Shipments</h1>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full md:w-auto mt-3 md:mt-0">
          <div className="hidden md:flex items-center bg-[#FEFEFE] px-2.5 py-2 rounded-[8px] w-full md:w-[290px] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
            <Search size={20} className="text-[#333333]" />
            <input type="text" placeholder="Search anything..." className="ml-2.5 bg-transparent outline-none text-[14px] text-[#757575] w-full" />
          </div>
          <Link to="/shipments/new" className="flex items-center justify-center gap-1 bg-[#333333] text-white px-4 py-2.5 rounded-[8px] h-[40px] whitespace-nowrap">
            <Plus size={18} />
            <span className="text-[14px] font-semibold">New Shipment</span>
          </Link>
        </div>
      </div>

      <div className="bg-[#FEFEFE] rounded-[12px] p-[16px] flex flex-col gap-[16px]">
        {/* Toolbar */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
          <div className="bg-[#FEFEFE] rounded-[12px] flex p-1 border border-[#F0F0F0] overflow-x-auto w-full xl:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-[8px] text-[12px] font-semibold whitespace-nowrap transition-colors ${
                  activeTab === tab 
                    ? 'bg-[#333333] text-white' 
                    : 'text-[#757575] hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2.5 w-full xl:w-auto overflow-x-auto">
            <div className="flex items-center bg-[#FEFEFE] border border-[#F0F0F0] px-2.5 py-1.5 rounded-[8px] w-[223px] shrink-0">
              <Search size={16} className="text-[#333333]" />
              <input 
                type="text" 
                placeholder="Search..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="ml-2 bg-transparent outline-none text-[12px] text-[#757575] w-full" 
              />
            </div>
            <button className="flex items-center gap-2 bg-[#FEFEFE] border border-[#F0F0F0] px-3 py-1.5 rounded-[8px] shrink-0">
              <Filter size={16} className="text-[#333333]" />
              <span className="text-[12px] font-semibold text-[#333333]">Filters</span>
            </button>
            <div className="flex items-center gap-2 px-1 shrink-0 text-[#757575]">
              <span className="text-[11px]">Sort by:</span>
              <button className="flex items-center gap-1 bg-[#FEFEFE] border border-[#F0F0F0] px-3 py-1.5 rounded-[8px]">
                <span className="text-[12px] font-semibold text-[#333333]">Status</span>
                <ChevronDown size={14} className="text-[#333333]" />
              </button>
            </div>
            
            <div className="flex items-center gap-1 bg-[#F0F0F0] p-1 rounded-[8px] shrink-0">
              <button 
                onClick={() => setView('table')}
                className={`p-1.5 rounded-[6px] transition-colors ${view === 'table' ? 'bg-[#FEFEFE] shadow-sm' : 'text-[#757575] hover:bg-gray-200'}`}
              >
                <List size={14} className={view === 'table' ? 'text-[#333333]' : 'text-[#757575]'} />
              </button>
              <button 
                onClick={() => setView('grid')}
                className={`p-1.5 rounded-[6px] transition-colors ${view === 'grid' ? 'bg-[#FEFEFE] shadow-sm' : 'text-[#757575] hover:bg-gray-200'}`}
              >
                <LayoutGrid size={14} className={view === 'grid' ? 'text-[#333333]' : 'text-[#757575]'} />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        {view === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
            {filteredShipments.map((s) => {
              const Icon = getIcon(s.type);
              const progress = getProgress(s.status);
              return (
                <div key={s.id} className="bg-[#FEFEFE] p-[16px] rounded-[12px] flex flex-col gap-[16px] border border-[#E0E0E0] shadow-sm">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[14px] font-bold text-[#333333] leading-tight">{s.id}</span>
                      <div className={`px-2 py-0.5 rounded-[18px] text-[10px] font-semibold flex items-center justify-center w-max ${
                        s.status === 'In Transit' ? 'bg-[#E3DDFF] text-[#333333]' : 
                        s.status === 'Completed' ? 'bg-[#D9F9E7] text-[#007837]' :
                        s.status === 'Pending' ? 'bg-[#FEF1A7] text-[#333333]' :
                        'bg-[#E0E0E0] text-[#333333]'
                      }`}>
                        {s.status}
                      </div>
                    </div>
                    <div className="w-[40px] h-[40px] bg-[#F5F5F5] rounded-[12px] flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-[#333333]" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-[16px] pt-[16px] border-t border-[#F0F0F0]">
                    <div className="flex items-center gap-[12px]">
                      <div className="w-[36px] h-[36px] rounded-[8px] bg-gradient-to-br from-[#856DF3] to-[#2A1298] flex items-center justify-center text-white font-bold text-[14px]">
                        {s.sender.charAt(0)}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[12px] font-semibold text-[#333333] truncate max-w-[150px]">{s.sender}</span>
                        <span className="text-[10px] text-[#757575]">{s.type}</span>
                      </div>
                    </div>

                    <div className="bg-[#F5F5F5] rounded-[8px] p-[12px] flex w-full">
                      <div className="flex flex-col items-center px-[4px] w-[24px]">
                        <div className="w-[16px] h-[16px] rounded-full bg-[#856DF3] border-[3px] border-[#E3DDFF] shrink-0 z-10"></div>
                        <div className="w-[1px] h-[32px] bg-[#E3DDFF] shrink-0"></div>
                        <div className="w-[18px] h-[18px] rounded-full bg-[#E3DDFF] flex items-center justify-center shrink-0 z-10">
                          <MapPin size={10} className="text-[#856DF3]" />
                        </div>
                      </div>
                      <div className="flex flex-col justify-between flex-1 pb-0.5 pt-0.5 ml-2">
                        <div className="flex justify-between items-start">
                          <span className="text-[10px] text-[#757575]">Origin</span>
                          <div className="flex flex-col items-end">
                            <span className="text-[12px] font-semibold text-[#333333]">{s.senderLocation}</span>
                            <span className="text-[10px] text-[#757575]">{s.date}</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-start mt-[16px]">
                          <span className="text-[10px] text-[#757575]">Destination</span>
                          <div className="flex flex-col items-end">
                            <span className="text-[12px] font-semibold text-[#333333]">{s.recipientLocation}</span>
                            <span className="text-[10px] text-[#757575]">{s.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-[8px]">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] text-[#757575]">Progress</span>
                          <span className="text-[12px] font-bold text-[#333333]">{progress}%</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] text-[#757575]">Carriers</span>
                          <span className="text-[12px] font-semibold text-[#333333]">FedEx</span>
                        </div>
                      </div>
                      <div className="w-full h-[8px] bg-[#F0F0F0] rounded-[10px] overflow-hidden">
                        <div className="h-full bg-[#856DF3] rounded-[8px]" style={{ width: `${progress}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="overflow-x-auto w-full border border-[#E0E0E0] rounded-[8px]">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr className="border-b border-[#E0E0E0]">
                  <th className="py-3 px-4 w-10">
                    <div className="w-3 h-3 rounded-[3px] border border-[#E0E0E0] bg-[#F0F0F0]"></div>
                  </th>
                  <th className="py-3 px-3">
                    <div className="flex items-center gap-1 text-[10px] font-normal text-[#757575]">
                      Shipping ID <ChevronDown size={14} className="text-[#333333]" />
                    </div>
                  </th>
                  <th className="py-3 px-3">
                    <div className="flex items-center gap-1 text-[10px] font-normal text-[#757575]">
                      Company <ChevronDown size={14} className="text-[#333333]" />
                    </div>
                  </th>
                  <th className="py-3 px-3">
                    <div className="flex items-center gap-1 text-[10px] font-normal text-[#757575]">
                      Carriers <ChevronDown size={14} className="text-[#333333]" />
                    </div>
                  </th>
                  <th className="py-3 px-3">
                    <div className="flex items-center gap-1 text-[10px] font-normal text-[#757575]">
                      Category <ChevronDown size={14} className="text-[#333333]" />
                    </div>
                  </th>
                  <th className="py-3 px-3">
                    <div className="flex items-center gap-1 text-[10px] font-normal text-[#757575]">
                      Weight <ChevronDown size={14} className="text-[#333333]" />
                    </div>
                  </th>
                  <th className="py-3 px-3">
                    <div className="flex items-center gap-1 text-[10px] font-normal text-[#757575]">
                      Route <ChevronDown size={14} className="text-[#333333]" />
                    </div>
                  </th>
                  <th className="py-3 px-3">
                    <div className="flex items-center gap-1 text-[10px] font-normal text-[#757575]">
                      Issue Date <ChevronDown size={14} className="text-[#333333]" />
                    </div>
                  </th>
                  <th className="py-3 px-3">
                    <div className="flex items-center gap-1 text-[10px] font-normal text-[#757575]">
                      Progress <ChevronDown size={14} className="text-[#333333]" />
                    </div>
                  </th>
                  <th className="py-3 px-3">
                    <div className="flex items-center gap-1 text-[10px] font-normal text-[#757575]">
                      Status <ChevronDown size={14} className="text-[#333333]" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E0E0E0]">
                {filteredShipments.map((s) => {
                  const Icon = getIcon(s.type);
                  const progress = getProgress(s.status);
                  return (
                    <tr key={s.id} className="hover:bg-gray-50/50 transition-colors group">
                      <td className="py-3 px-4">
                        <div className="w-3 h-3 rounded-[3px] border border-[#E0E0E0] bg-[#F0F0F0]"></div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex flex-col gap-1">
                          <span className="text-[11px] font-semibold text-[#2A1298]">{s.id}</span>
                          <div className="flex items-center gap-1">
                            <Icon size={12} className="text-[#757575]" />
                            <span className="text-[9px] text-[#757575]">{s.type}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-2">
                          <div className="w-[26px] h-[26px] rounded-[6px] bg-gradient-to-br from-[#856DF3] to-[#2A1298] flex items-center justify-center text-white font-bold text-[10px] shrink-0">
                            {s.sender.charAt(0)}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[11px] font-semibold text-[#333333] truncate max-w-[100px]">{s.sender}</span>
                            <span className="text-[10px] text-[#757575]">Electronics</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <span className="text-[11px] font-normal text-[#333333]">FedEx</span>
                      </td>
                      <td className="py-3 px-3">
                        <span className="text-[11px] font-normal text-[#333333]">Gadgets</span>
                      </td>
                      <td className="py-3 px-3">
                        <span className="text-[11px] font-semibold text-[#333333]">24 kg</span>
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-1">
                            <span className="text-[11px] font-semibold text-[#333333] truncate max-w-[80px]">{s.senderLocation.split(',')[0]}</span>
                            <span className="text-[10px] text-[#757575]">Orig.</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-[11px] font-semibold text-[#2A1298] truncate max-w-[80px]">{s.recipientLocation.split(',')[0]}</span>
                            <span className="text-[10px] text-[#757575]">Dest.</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-1">
                            <span className="text-[11px] font-semibold text-[#333333] truncate max-w-[80px]">{s.date}</span>
                            <span className="text-[10px] text-[#757575]">Iss.</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-[11px] font-semibold text-[#2A1298]">Mar 25, 2035</span>
                            <span className="text-[10px] text-[#757575]">Due</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex flex-col gap-1.5 w-[70px]">
                          <div className="h-[6px] bg-[#F0F0F0] rounded-[10px] overflow-hidden w-full">
                            <div className="h-full bg-[#856DF3] rounded-[8px]" style={{ width: `${progress}%` }}></div>
                          </div>
                          <span className="text-[11px] font-semibold text-[#333333]">{progress}%</span>
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className={`px-2 py-1 rounded-[9px] text-[11px] font-semibold inline-flex items-center gap-1.5 w-max ${
                          s.status === 'In Transit' ? 'bg-[#E3DDFF] text-[#333333]' : 
                          s.status === 'Completed' ? 'bg-[#D9F9E7] text-[#007837]' :
                          s.status === 'Pending' ? 'bg-[#FEF1A7] text-[#333333]' :
                          'bg-[#F5F5F5] text-[#333333]'
                        }`}>
                          {s.status === 'Completed' && <div className="w-2 h-2 rounded-full bg-[#007837]"></div>}
                          {s.status === 'In Transit' && <div className="w-2 h-2 rounded-full bg-[#856DF3]"></div>}
                          {s.status === 'Pending' && <div className="w-2 h-2 rounded-full bg-[#EAB308]"></div>}
                          {s.status === 'Cancelled' && <div className="w-2 h-2 rounded-full bg-[#757575]"></div>}
                          {s.status}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Footer Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-2 gap-4">
          <span className="text-[14px] text-[#757575]">Showing 1 to {filteredShipments.length} of 2,340 entries</span>
          <div className="flex items-center gap-2">
            <button className="w-[28px] h-[28px] bg-[#F5F5F5] rounded-[8px] flex items-center justify-center hover:bg-gray-200 transition-colors">
              <ChevronLeft size={16} className="text-[#E0E0E0]" />
            </button>
            <button className="w-[28px] h-[28px] bg-[#856DF3] rounded-[8px] text-[12px] font-semibold text-white flex items-center justify-center">1</button>
            <button className="w-[28px] h-[28px] bg-[#FEFEFE] rounded-[8px] text-[12px] font-semibold text-[#333333] flex items-center justify-center hover:bg-gray-50">2</button>
            <button className="w-[28px] h-[28px] bg-[#FEFEFE] rounded-[8px] text-[12px] font-semibold text-[#333333] flex items-center justify-center hover:bg-gray-50">3</button>
            <button className="w-[28px] h-[28px] bg-[#FEFEFE] rounded-[8px] text-[12px] font-semibold text-[#333333] flex items-center justify-center">...</button>
            <button className="w-[28px] h-[28px] bg-[#FEFEFE] rounded-[8px] text-[12px] font-semibold text-[#333333] flex items-center justify-center hover:bg-gray-50">9</button>
            <button className="w-[28px] h-[28px] bg-[#FEFEFE] rounded-[8px] flex items-center justify-center hover:bg-gray-50 transition-colors">
              <ChevronRight size={16} className="text-[#333333]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


