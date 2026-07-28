import React, { useState } from 'react';
import { 
  Search, Plus, ChevronLeft, ChevronRight, ChevronDown,
  Filter, Truck, Plane, Ship, Train, List, LayoutGrid,
  Facebook, Twitter, Instagram, Youtube, Linkedin, MapPin, CheckCircle, Navigation, AlertTriangle, Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const mockShipmentsList = [
  { id: '#SH9283746', status: 'In Transit', icon: Plane, type: 'Air Freight', company: 'TechGear Inc.', category: 'Electronics', origin: 'Los Angeles, CA', originTime: 'Mar 20, 2035 – 10:00 AM', dest: 'Chicago, IL', destTime: 'Mar 23, 2035 – 03:00 PM', progress: 60, carrier: 'FedEx', weight: '24 kg' },
  { id: '#SH9182635', status: 'Out for Delivery', icon: Truck, type: 'Road Freight', company: 'StyleHub Co.', category: 'Apparel', origin: 'New York, NY', originTime: 'Mar 19, 2035 – 11:30 AM', dest: 'Atlanta, GA', destTime: 'Mar 22, 2035 – 01:00 PM', progress: 75, carrier: 'DHL', weight: '18 kg' },
  { id: '#SH9037821', status: 'Delivered', icon: Ship, type: 'Sea Freight', company: 'FreshNest', category: 'Home & Kitchen', origin: 'Dallas, TX', originTime: 'Mar 18, 2035 – 09:00 AM', dest: 'Miami, FL', destTime: 'Mar 21, 2035 – 06:00 PM', progress: 100, carrier: 'UPS', weight: '450 kg' },
  { id: '#SH9374652', status: 'Processing', icon: Train, type: 'Rail Freight', company: 'FitPlus Gear', category: 'Sports & Outdoors', origin: 'Seattle, WA', originTime: 'Mar 21, 2035 – 08:45 AM', dest: 'Denver, CO', destTime: 'Mar 25, 2035 – 04:30 PM', progress: 40, carrier: 'USPS', weight: '32 kg' },
  { id: '#SH8821349', status: 'Out for Delivery', icon: Truck, type: 'Road Freight', company: 'EcoLights', category: 'Electronics', origin: 'Austin, TX', originTime: 'Mar 19, 2035 – 12:00 PM', dest: 'Phoenix, AZ', destTime: 'Mar 21, 2035 – 05:00 PM', progress: 90, carrier: 'FedEx', weight: '15 kg' },
  { id: '#SH9457830', status: 'Delivered', icon: Plane, type: 'Air Freight', company: 'AutoParts Pro', category: 'Automotive', origin: 'Detroit, MI', originTime: 'Mar 20, 2035 – 07:15 AM', dest: 'San Diego, CA', destTime: 'Mar 26, 2035 – 02:00 PM', progress: 100, carrier: 'Aramex', weight: '120 kg' },
  { id: '#SH8967432', status: 'In Transit', icon: Truck, type: 'Road Freight', company: 'GreenHaven', category: 'Home & Garden', origin: 'Portland, OR', originTime: 'Mar 18, 2035 – 02:45 PM', dest: 'Salt Lake City, UT', destTime: 'Mar 22, 2035 – 11:00 AM', progress: 65, carrier: 'USPS', weight: '55 kg' },
  { id: '#SH8893247', status: 'Out for Delivery', icon: Truck, type: 'Road Freight', company: 'ModaWear', category: 'Apparel', origin: 'Boston, MA', originTime: 'Mar 20, 2035 – 01:00 PM', dest: 'Charlotte, NC', destTime: 'Mar 23, 2035 – 08:00 AM', progress: 80, carrier: 'DHL', weight: '28 kg' },
  { id: '#SH9018723', status: 'Processing', icon: Train, type: 'Rail Freight', company: 'SunCore Panels', category: 'Electronics', origin: 'San Diego, CA', originTime: 'Mar 21, 2035 – 09:30 AM', dest: 'Reno, NV', destTime: 'Mar 24, 2035 – 01:30 PM', progress: 30, carrier: 'UPS', weight: '210 kg' },
  { id: '#SH9113471', status: 'In Transit', icon: Truck, type: 'Road Freight', company: 'QuickParts', category: 'Automotive', origin: 'Tampa, FL', originTime: 'Mar 20, 2035 – 04:00 PM', dest: 'Houston, TX', destTime: 'Mar 23, 2035 – 12:00 PM', progress: 90, carrier: 'Aramex', weight: '64 kg' },
  { id: '#SH8881190', status: 'Out for Delivery', icon: Truck, type: 'Road Freight', company: 'VitaFresh', category: 'Food & Beverage', origin: 'Nashville, TN', originTime: 'Mar 21, 2035 – 06:00 AM', dest: 'Jacksonville, FL', destTime: 'Mar 22, 2035 – 10:00 AM', progress: 85, carrier: 'Local Courier', weight: '95 kg' },
  { id: '#SH8776103', status: 'In Transit', icon: Plane, type: 'Air Freight', company: 'StyleDepot', category: 'Fashion', origin: 'Minneapolis, MN', originTime: 'Mar 19, 2035 – 10:15 AM', dest: 'Kansas City, MO', destTime: 'Mar 22, 2035 – 03:30 PM', progress: 60, carrier: 'FedEx', weight: '36 kg' },
];

export default function Shipments() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [view, setView] = useState<'grid' | 'table'>('grid');

  const filteredShipments = mockShipmentsList.filter(s => {
    const matchesSearch = s.id.toLowerCase().includes(search.toLowerCase()) || 
      s.company.toLowerCase().includes(search.toLowerCase()) ||
      s.carrier.toLowerCase().includes(search.toLowerCase());
    
    if (activeTab === 'All') return matchesSearch;
    return matchesSearch && s.status === activeTab;
  });

  const tabs = ['All', 'Delivered', 'In Transit', 'Processing', 'Out for Delivery'];

  return (
    <div className="flex flex-col gap-[20px] w-full min-w-0 pb-[40px]">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-[#333333] leading-[1.1]">Shipments</h1>
          <p className="text-[12px] text-[#757575] mt-1">
            <span className="text-[#856DF3] cursor-pointer hover:underline">Dashboard</span> / Shipments
          </p>
        </div>
        
        <Link 
          to="/shipments/new" 
          className="flex items-center justify-center gap-1.5 bg-[#333333] hover:bg-[#222222] text-white px-4 py-2.5 rounded-[8px] text-[14px] font-semibold transition-colors cursor-pointer shadow-2xs whitespace-nowrap"
        >
          <Plus size={18} />
          <span>New Shipment</span>
        </Link>
      </div>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
        {[
          { label: 'Active Shipments', value: '1,284', change: '+8.7%', icon: Truck, color: '#856DF3' },
          { label: 'Delivered', value: '785', change: '+12.4%', icon: CheckCircle, color: '#007837' },
          { label: 'In Transit', value: '594', change: '+5.2%', icon: Navigation, color: '#856DF3' },
          { label: 'Pending / Processing', value: '405', change: '-1.8%', icon: Clock, color: '#B76E00' },
        ].map((stat, i) => (
          <div key={i} className="bg-[#FEFEFE] rounded-[12px] p-[16px] border border-[#F0F0F0]/50 shadow-2xs flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[12px] font-semibold text-[#757575]">{stat.label}</span>
              <span className="text-[24px] font-bold text-[#333333] leading-tight mt-1">{stat.value}</span>
            </div>
            <div className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center text-white shrink-0" style={{ backgroundColor: stat.color }}>
              <stat.icon size={22} />
            </div>
          </div>
        ))}
      </div>

      {/* Filter Toolbar & Search */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
        
        {/* Left Status Filter Tabs */}
        <div className="bg-[#FEFEFE] rounded-[10px] p-1 border border-[#F0F0F0] flex gap-1 overflow-x-auto w-full xl:w-auto shadow-2xs">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-[8px] text-[12px] font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === tab 
                  ? 'bg-[#333333] text-white shadow-2xs' 
                  : 'text-[#757575] hover:text-[#333333] hover:bg-[#F5F5F5]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right Search & Controls */}
        <div className="flex items-center gap-2.5 w-full xl:w-auto justify-between xl:justify-end">
          <div className="flex items-center bg-[#FEFEFE] px-3 py-1.5 rounded-[8px] border border-[#F0F0F0] w-full sm:w-[220px] shadow-2xs">
            <Search size={16} className="text-[#757575]" />
            <input 
              type="text" 
              placeholder="Search Shipment"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ml-2 bg-transparent outline-none text-[12px] text-[#333333] w-full placeholder-[#757575]"
            />
          </div>

          <button className="flex items-center gap-1.5 bg-[#FEFEFE] border border-[#F0F0F0] px-3.5 py-1.5 rounded-[8px] text-[12px] font-semibold text-[#333333] hover:bg-[#F5F5F5] transition-colors cursor-pointer shadow-2xs shrink-0">
            <Filter size={14} className="text-[#757575]" />
            <span>Filter</span>
            <ChevronDown size={14} className="text-[#757575]" />
          </button>

          <div className="flex items-center gap-1.5 text-[11px] text-[#757575] shrink-0">
            <span>Sort by:</span>
            <button className="flex items-center gap-1 bg-[#FEFEFE] border border-[#F0F0F0] px-3 py-1.5 rounded-[8px] text-[12px] font-semibold text-[#333333] hover:bg-[#F5F5F5] transition-colors cursor-pointer shadow-2xs">
              <span>Newest</span>
              <ChevronDown size={14} className="text-[#333333]" />
            </button>
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-1 bg-[#F5F5F5] p-1 rounded-[8px] border border-[#F0F0F0] shrink-0">
            <button 
              onClick={() => setView('grid')}
              className={`p-1.5 rounded-[6px] transition-colors cursor-pointer ${
                view === 'grid' ? 'bg-[#FEFEFE] text-[#856DF3] shadow-2xs' : 'text-[#757575] hover:text-[#333333]'
              }`}
              title="Grid View"
            >
              <LayoutGrid size={16} />
            </button>
            <button 
              onClick={() => setView('table')}
              className={`p-1.5 rounded-[6px] transition-colors cursor-pointer ${
                view === 'table' ? 'bg-[#FEFEFE] text-[#856DF3] shadow-2xs' : 'text-[#757575] hover:text-[#333333]'
              }`}
              title="Table View"
            >
              <List size={16} />
            </button>
          </div>
        </div>

      </div>

      {/* Main Content Area */}
      {view === 'grid' ? (
        /* Grid View Layout (Exact match of picture 1) */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
          {filteredShipments.map((s) => {
            const Icon = s.icon;
            return (
              <div 
                key={s.id} 
                className="bg-[#FEFEFE] p-[16px] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between gap-3.5 group"
              >
                {/* Header Row: ID + Status + Vehicle Icon */}
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <span className="text-[14px] font-bold text-[#333333] group-hover:text-[#856DF3] transition-colors">
                      {s.id}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-[12px] text-[10px] font-semibold w-max ${
                      s.status === 'In Transit' ? 'bg-[#E3DDFF] text-[#2A1298]' :
                      s.status === 'Delivered' ? 'bg-[#D9F9E7] text-[#007837]' :
                      s.status === 'Processing' ? 'bg-[#FFF3D6] text-[#B76E00]' :
                      'bg-[#F0F0F0] text-[#333333]'
                    }`}>
                      {s.status}
                    </span>
                  </div>

                  {/* Mode Icon in Square Box */}
                  <div className="w-[36px] h-[36px] bg-[#F5F5F5] text-[#333333] rounded-[8px] flex items-center justify-center shrink-0 border border-[#F0F0F0]">
                    <Icon size={18} />
                  </div>
                </div>

                {/* Company Row */}
                <div className="flex items-center gap-2.5 pt-1">
                  <div className="w-[32px] h-[32px] rounded-[8px] bg-[#333333] text-white flex items-center justify-center font-bold text-[12px] shrink-0">
                    {s.company.charAt(0)}
                  </div>
                  <div className="flex flex-col truncate">
                    <span className="text-[13px] font-semibold text-[#333333] truncate">{s.company}</span>
                    <span className="text-[10px] text-[#757575]">{s.category}</span>
                  </div>
                </div>

                {/* Route Box (Origin -> Destination) */}
                <div className="bg-[#F5F5F5] rounded-[8px] p-3 flex flex-col gap-2">
                  {/* Origin */}
                  <div className="flex justify-between items-start text-[11px]">
                    <div className="flex items-center gap-1.5 text-[#757575]">
                      <span className="w-2 h-2 rounded-full bg-[#856DF3]" />
                      <span>Origin</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="font-semibold text-[#333333]">{s.origin}</span>
                      <span className="text-[9px] text-[#757575]">{s.originTime}</span>
                    </div>
                  </div>

                  {/* Destination */}
                  <div className="flex justify-between items-start text-[11px] pt-1 border-t border-[#F0F0F0]/80">
                    <div className="flex items-center gap-1.5 text-[#757575]">
                      <span className="w-2 h-2 rounded-full bg-[#856DF3]" />
                      <span>Destination</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="font-semibold text-[#333333]">{s.dest}</span>
                      <span className="text-[9px] text-[#757575]">{s.destTime}</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar & Carrier Footer */}
                <div className="flex flex-col gap-1.5 pt-1">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-[#757575]">Progres <strong className="text-[#333333]">{s.progress}%</strong></span>
                    <span className="text-[#757575]">Carriers <strong className="text-[#333333]">{s.carrier}</strong></span>
                  </div>
                  <div className="w-full h-[6px] bg-[#F0F0F0] rounded-full overflow-hidden">
                    <div className="h-full bg-[#856DF3] rounded-full" style={{ width: `${s.progress}%` }} />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      ) : (
        /* Table View Layout (Exact match of picture 2) */
        <div className="bg-[#FEFEFE] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs overflow-hidden">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left whitespace-nowrap">
              <thead className="bg-[#F5F5F5] text-[11px] uppercase font-semibold text-[#757575] border-b border-[#F0F0F0]">
                <tr>
                  <th className="px-6 py-3.5">Shipping ID</th>
                  <th className="px-6 py-3.5">Company</th>
                  <th className="px-6 py-3.5">Type</th>
                  <th className="px-6 py-3.5">Carriers</th>
                  <th className="px-6 py-3.5">Weight</th>
                  <th className="px-6 py-3.5">Route</th>
                  <th className="px-6 py-3.5">Issue & Due Date</th>
                  <th className="px-6 py-3.5">Progress</th>
                  <th className="px-6 py-3.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0F0F0] text-[12px]">
                {filteredShipments.map((s) => {
                  const Icon = s.icon;
                  return (
                    <tr key={s.id} className="hover:bg-[#F5F5F5]/60 transition-colors">
                      <td className="px-6 py-4 font-bold text-[#856DF3]">{s.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-[#333333] text-white flex items-center justify-center text-[10px] font-bold">
                            {s.company.charAt(0)}
                          </div>
                          <span className="font-semibold text-[#333333]">{s.company}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[#757575]">{s.type}</td>
                      <td className="px-6 py-4 font-medium text-[#333333]">{s.carrier}</td>
                      <td className="px-6 py-4 font-medium text-[#333333]">{s.weight}</td>
                      <td className="px-6 py-4 text-[#757575]">
                        {s.origin.split(',')[0]} &rarr; {s.dest.split(',')[0]}
                      </td>
                      <td className="px-6 py-4 text-[#757575] text-[11px]">
                        {s.originTime.split('–')[0]} (Iss) / {s.destTime.split('–')[0]} (Due)
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 w-28">
                          <div className="w-full h-1.5 bg-[#F0F0F0] rounded-full overflow-hidden">
                            <div className="h-full bg-[#856DF3] rounded-full" style={{ width: `${s.progress}%` }} />
                          </div>
                          <span className="text-[11px] font-bold text-[#333333]">{s.progress}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-block px-2.5 py-0.5 rounded-[12px] text-[10px] font-semibold ${
                          s.status === 'In Transit' ? 'bg-[#E3DDFF] text-[#2A1298]' :
                          s.status === 'Delivered' ? 'bg-[#D9F9E7] text-[#007837]' :
                          s.status === 'Processing' ? 'bg-[#FFF3D6] text-[#B76E00]' :
                          'bg-[#F0F0F0] text-[#333333]'
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
        </div>
      )}

      {/* Footer Pagination & Results Counter */}
      <div className="flex flex-col sm:flex-row justify-between items-center pt-3 border-t border-[#F0F0F0] text-[12px] text-[#757575] gap-4">
        <div className="flex items-center gap-2">
          <span>Show</span>
          <select className="bg-[#FEFEFE] border border-[#F0F0F0] rounded-[6px] px-2 py-1 text-[12px] text-[#333333] outline-none shadow-2xs font-semibold cursor-pointer">
            <option>12</option>
            <option>24</option>
            <option>48</option>
          </select>
          <span>of 520 results</span>
        </div>

        <div className="flex items-center gap-1.5">
          <button className="w-7 h-7 bg-[#F5F5F5] rounded-[6px] flex items-center justify-center hover:bg-[#F0F0F0] transition-colors text-[#757575]">
            <ChevronLeft size={14} />
          </button>
          <button className="w-7 h-7 bg-[#856DF3] rounded-[6px] text-[12px] font-bold text-white flex items-center justify-center shadow-2xs">1</button>
          <button className="w-7 h-7 bg-[#FEFEFE] border border-[#F0F0F0] rounded-[6px] text-[12px] font-semibold text-[#333333] flex items-center justify-center hover:bg-[#F5F5F5]">2</button>
          <button className="w-7 h-7 bg-[#FEFEFE] border border-[#F0F0F0] rounded-[6px] text-[12px] font-semibold text-[#333333] flex items-center justify-center hover:bg-[#F5F5F5]">3</button>
          <span className="px-1 text-[#757575]">...</span>
          <button className="w-7 h-7 bg-[#FEFEFE] border border-[#F0F0F0] rounded-[6px] text-[12px] font-semibold text-[#333333] flex items-center justify-center hover:bg-[#F5F5F5]">16</button>
          <button className="w-7 h-7 bg-[#FEFEFE] border border-[#F0F0F0] rounded-[6px] text-[12px] font-semibold text-[#333333] flex items-center justify-center hover:bg-[#F5F5F5]">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Page Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-[#F0F0F0] text-[12px] text-[#757575] gap-3">
        <div className="flex flex-wrap items-center gap-4">
          <span>Copyright &copy; 2025 Peterdraw</span>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Term and conditions</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <Facebook size={16} className="cursor-pointer hover:text-[#333333] transition-colors" />
          <Twitter size={16} className="cursor-pointer hover:text-[#333333] transition-colors" />
          <Instagram size={16} className="cursor-pointer hover:text-[#333333] transition-colors" />
          <Youtube size={16} className="cursor-pointer hover:text-[#333333] transition-colors" />
          <Linkedin size={16} className="cursor-pointer hover:text-[#333333] transition-colors" />
        </div>
      </div>

    </div>
  );
}
