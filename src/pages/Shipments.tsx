import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Search, Plus, ChevronLeft, ChevronRight, ChevronDown,
  Filter, Truck, Plane, Ship, Train, List, LayoutGrid,
  Facebook, Twitter, Instagram, Youtube, Linkedin, MapPin, CheckCircle, Navigation, AlertTriangle, Clock, X
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

/* ── Extract unique values for filter options ── */
const allTypes = [...new Set(mockShipmentsList.map(s => s.type))];
const allCarriers = [...new Set(mockShipmentsList.map(s => s.carrier))];
const allCategories = [...new Set(mockShipmentsList.map(s => s.category))];

/* ── Sort options ── */
type SortKey = 'newest' | 'oldest' | 'company_asc' | 'company_desc' | 'progress_high' | 'progress_low' | 'weight_high' | 'weight_low';
const sortOptions: { key: SortKey; label: string }[] = [
  { key: 'newest', label: 'Newest' },
  { key: 'oldest', label: 'Oldest' },
  { key: 'company_asc', label: 'Company A–Z' },
  { key: 'company_desc', label: 'Company Z–A' },
  { key: 'progress_high', label: 'Progress High' },
  { key: 'progress_low', label: 'Progress Low' },
  { key: 'weight_high', label: 'Weight High' },
  { key: 'weight_low', label: 'Weight Low' },
];

/* ── Helper: parse weight string to number ── */
const parseWeight = (w: string) => parseFloat(w.replace(/[^\d.]/g, '')) || 0;

/* ── Helper: parse date from originTime ── */
const parseDate = (dateStr: string) => {
  const cleaned = dateStr.replace('–', '').trim();
  return new Date(cleaned).getTime();
};

/* ── Dropdown hook for closing on outside click ── */
function useDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);
  return { open, setOpen, ref };
}

export default function Shipments() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [view, setView] = useState<'grid' | 'table'>('grid');

  /* ── Filter state ── */
  const [filterTypes, setFilterTypes] = useState<string[]>([]);
  const [filterCarriers, setFilterCarriers] = useState<string[]>([]);
  const [filterCategories, setFilterCategories] = useState<string[]>([]);
  const filterDropdown = useDropdown();
  const activeFilterCount = filterTypes.length + filterCarriers.length + filterCategories.length;

  /* ── Sort state ── */
  const [sortKey, setSortKey] = useState<SortKey>('newest');
  const sortDropdown = useDropdown();

  /* ── Toggle helpers ── */
  const toggleFilter = (arr: string[], setArr: React.Dispatch<React.SetStateAction<string[]>>, val: string) => {
    setArr(prev => prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]);
  };
  const clearAllFilters = () => { setFilterTypes([]); setFilterCarriers([]); setFilterCategories([]); };

  /* ── Filtered + Sorted data ── */
  const processedShipments = useMemo(() => {
    // 1. Filter by tab
    let data = mockShipmentsList.filter(s => {
      if (activeTab !== 'All' && s.status !== activeTab) return false;
      return true;
    });

    // 2. Filter by search
    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter(s =>
        s.id.toLowerCase().includes(q) ||
        s.company.toLowerCase().includes(q) ||
        s.carrier.toLowerCase().includes(q) ||
        s.origin.toLowerCase().includes(q) ||
        s.dest.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
      );
    }

    // 3. Filter by type / carrier / category
    if (filterTypes.length > 0) data = data.filter(s => filterTypes.includes(s.type));
    if (filterCarriers.length > 0) data = data.filter(s => filterCarriers.includes(s.carrier));
    if (filterCategories.length > 0) data = data.filter(s => filterCategories.includes(s.category));

    // 4. Sort
    const sorted = [...data];
    switch (sortKey) {
      case 'newest':
        sorted.sort((a, b) => parseDate(b.originTime) - parseDate(a.originTime));
        break;
      case 'oldest':
        sorted.sort((a, b) => parseDate(a.originTime) - parseDate(b.originTime));
        break;
      case 'company_asc':
        sorted.sort((a, b) => a.company.localeCompare(b.company));
        break;
      case 'company_desc':
        sorted.sort((a, b) => b.company.localeCompare(a.company));
        break;
      case 'progress_high':
        sorted.sort((a, b) => b.progress - a.progress);
        break;
      case 'progress_low':
        sorted.sort((a, b) => a.progress - b.progress);
        break;
      case 'weight_high':
        sorted.sort((a, b) => parseWeight(b.weight) - parseWeight(a.weight));
        break;
      case 'weight_low':
        sorted.sort((a, b) => parseWeight(a.weight) - parseWeight(b.weight));
        break;
    }
    return sorted;
  }, [search, activeTab, filterTypes, filterCarriers, filterCategories, sortKey]);

  const tabs = ['All', 'Delivered', 'In Transit', 'Processing', 'Out for Delivery'];

  return (
    <div className="flex flex-col gap-[12px] sm:gap-[16px] lg:gap-[20px] w-full min-w-0 pb-[20px] sm:pb-[30px] lg:pb-[40px]">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
        <div>
          <h1 className="text-[20px] sm:text-[24px] font-bold text-[#333333] leading-[1.1]">Shipments</h1>
          <p className="text-[11px] sm:text-[12px] text-[#757575] mt-1">
            <span className="text-[#856DF3] cursor-pointer hover:underline">Dashboard</span> / Shipments
          </p>
        </div>
        
        <Link 
          to="/shipments/new" 
          className="flex items-center justify-center gap-1.5 bg-[#333333] hover:bg-[#222222] text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-[8px] text-[13px] sm:text-[14px] font-semibold transition-colors cursor-pointer shadow-2xs whitespace-nowrap"
        >
          <Plus size={18} />
          <span>New Shipment</span>
        </Link>
      </div>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[10px] sm:gap-[16px] lg:gap-[20px]">
        {[
          { label: 'Active Shipments', value: '1,284', change: '+8.7%', icon: Truck, color: '#856DF3' },
          { label: 'Delivered', value: '785', change: '+12.4%', icon: CheckCircle, color: '#007837' },
          { label: 'In Transit', value: '594', change: '+5.2%', icon: Navigation, color: '#856DF3' },
          { label: 'Pending / Processing', value: '405', change: '-1.8%', icon: Clock, color: '#B76E00' },
        ].map((stat, i) => (
          <div key={i} className="bg-[#FEFEFE] rounded-[12px] p-3 sm:p-[16px] border border-[#F0F0F0]/50 shadow-2xs flex items-center justify-between min-w-0">
            <div className="flex flex-col min-w-0">
              <span className="text-[11px] sm:text-[12px] font-semibold text-[#757575] truncate">{stat.label}</span>
              <span className="text-[20px] sm:text-[24px] font-bold text-[#333333] leading-tight mt-1">{stat.value}</span>
            </div>
            <div className="w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] rounded-[10px] flex items-center justify-center text-white shrink-0" style={{ backgroundColor: stat.color }}>
              <stat.icon size={20} />
            </div>
          </div>
        ))}
      </div>

      {/* Filter Toolbar & Search */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-3 sm:gap-4">
        
        {/* Left Status Filter Tabs */}
        <div className="bg-[#FEFEFE] rounded-[10px] p-1 border border-[#F0F0F0] flex gap-1 overflow-x-auto w-full xl:w-auto shadow-2xs">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 sm:px-4 py-1.5 rounded-[8px] text-[11px] sm:text-[12px] font-semibold whitespace-nowrap transition-colors cursor-pointer ${
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
        <div className="flex items-center gap-2 sm:gap-2.5 w-full xl:w-auto justify-between xl:justify-end flex-wrap">
          <div className="flex items-center bg-[#FEFEFE] px-2.5 sm:px-3 py-1.5 rounded-[8px] border border-[#F0F0F0] w-full sm:w-[200px] lg:w-[220px] shadow-2xs">
            <Search size={16} className="text-[#757575]" />
            <input 
              type="text" 
              placeholder="Search Shipment"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ml-2 bg-transparent outline-none text-[11px] sm:text-[12px] text-[#333333] w-full placeholder-[#757575]"
            />
            {search && (
              <button onClick={() => setSearch('')} className="text-[#757575] hover:text-[#333333] cursor-pointer">
                <X size={14} />
              </button>
            )}
          </div>

          {/* ── Filter Dropdown ── */}
          <div className="relative" ref={filterDropdown.ref}>
            <button 
              onClick={() => filterDropdown.setOpen(!filterDropdown.open)}
              className={`flex items-center gap-1.5 border px-3 sm:px-3.5 py-1.5 rounded-[8px] text-[11px] sm:text-[12px] font-semibold transition-colors cursor-pointer shadow-2xs shrink-0 ${
                activeFilterCount > 0 
                  ? 'bg-[#E3DDFF] border-[#856DF3] text-[#856DF3]' 
                  : 'bg-[#FEFEFE] border-[#F0F0F0] text-[#333333] hover:bg-[#F5F5F5]'
              }`}
            >
              <Filter size={14} className={activeFilterCount > 0 ? 'text-[#856DF3]' : 'text-[#757575]'} />
              <span>Filter</span>
              {activeFilterCount > 0 && (
                <span className="w-[18px] h-[18px] bg-[#856DF3] text-white rounded-full text-[10px] font-bold flex items-center justify-center">{activeFilterCount}</span>
              )}
              <ChevronDown size={14} className={`transition-transform ${filterDropdown.open ? 'rotate-180' : ''} ${activeFilterCount > 0 ? 'text-[#856DF3]' : 'text-[#757575]'}`} />
            </button>

            {filterDropdown.open && (
              <div className="absolute top-full right-0 mt-1.5 w-[280px] sm:w-[320px] bg-[#FEFEFE] rounded-[12px] border border-[#F0F0F0] shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-50 p-3 sm:p-4 flex flex-col gap-3 sm:gap-4">
                {/* Filter Header */}
                <div className="flex justify-between items-center">
                  <h4 className="text-[13px] sm:text-[14px] font-bold text-[#333333]">Filters</h4>
                  {activeFilterCount > 0 && (
                    <button onClick={clearAllFilters} className="text-[11px] text-[#856DF3] font-semibold hover:underline cursor-pointer">Clear all</button>
                  )}
                </div>

                {/* Freight Type */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-semibold text-[#757575]">Freight Type</span>
                  <div className="flex flex-wrap gap-1.5">
                    {allTypes.map(t => (
                      <button
                        key={t}
                        onClick={() => toggleFilter(filterTypes, setFilterTypes, t)}
                        className={`px-2.5 py-1 rounded-[6px] text-[11px] font-semibold transition-colors cursor-pointer border ${
                          filterTypes.includes(t)
                            ? 'bg-[#856DF3] text-white border-[#856DF3]'
                            : 'bg-[#F5F5F5] text-[#333333] border-[#F0F0F0] hover:border-[#856DF3]'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Carrier */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-semibold text-[#757575]">Carrier</span>
                  <div className="flex flex-wrap gap-1.5">
                    {allCarriers.map(c => (
                      <button
                        key={c}
                        onClick={() => toggleFilter(filterCarriers, setFilterCarriers, c)}
                        className={`px-2.5 py-1 rounded-[6px] text-[11px] font-semibold transition-colors cursor-pointer border ${
                          filterCarriers.includes(c)
                            ? 'bg-[#856DF3] text-white border-[#856DF3]'
                            : 'bg-[#F5F5F5] text-[#333333] border-[#F0F0F0] hover:border-[#856DF3]'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-semibold text-[#757575]">Category</span>
                  <div className="flex flex-wrap gap-1.5">
                    {allCategories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => toggleFilter(filterCategories, setFilterCategories, cat)}
                        className={`px-2.5 py-1 rounded-[6px] text-[11px] font-semibold transition-colors cursor-pointer border ${
                          filterCategories.includes(cat)
                            ? 'bg-[#856DF3] text-white border-[#856DF3]'
                            : 'bg-[#F5F5F5] text-[#333333] border-[#F0F0F0] hover:border-[#856DF3]'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <button
                  onClick={() => filterDropdown.setOpen(false)}
                  className="w-full py-2 bg-[#333333] text-white text-[12px] font-semibold rounded-[8px] hover:bg-[#222222] transition-colors cursor-pointer mt-1"
                >
                  Apply Filters ({processedShipments.length} results)
                </button>
              </div>
            )}
          </div>

          {/* ── Sort Dropdown ── */}
          <div className="relative flex items-center gap-1.5 shrink-0" ref={sortDropdown.ref}>
            <span className="text-[10px] sm:text-[11px] text-[#757575]">Sort by:</span>
            <button 
              onClick={() => sortDropdown.setOpen(!sortDropdown.open)}
              className="flex items-center gap-1 bg-[#FEFEFE] border border-[#F0F0F0] px-2.5 sm:px-3 py-1.5 rounded-[8px] text-[11px] sm:text-[12px] font-semibold text-[#333333] hover:bg-[#F5F5F5] transition-colors cursor-pointer shadow-2xs"
            >
              <span>{sortOptions.find(o => o.key === sortKey)?.label}</span>
              <ChevronDown size={14} className={`text-[#333333] transition-transform ${sortDropdown.open ? 'rotate-180' : ''}`} />
            </button>

            {sortDropdown.open && (
              <div className="absolute top-full right-0 mt-1.5 w-[160px] sm:w-[180px] bg-[#FEFEFE] rounded-[10px] border border-[#F0F0F0] shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-50 py-1.5 flex flex-col">
                {sortOptions.map(opt => (
                  <button
                    key={opt.key}
                    onClick={() => { setSortKey(opt.key); sortDropdown.setOpen(false); }}
                    className={`px-3 sm:px-4 py-2 text-left text-[11px] sm:text-[12px] transition-colors cursor-pointer ${
                      sortKey === opt.key 
                        ? 'bg-[#E3DDFF] text-[#856DF3] font-bold' 
                        : 'text-[#333333] hover:bg-[#F5F5F5] font-medium'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
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

      {/* ── Active Filter Tags ── */}
      {activeFilterCount > 0 && (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] text-[#757575] font-medium">Active filters:</span>
          {filterTypes.map(t => (
            <span key={t} className="flex items-center gap-1 bg-[#E3DDFF] text-[#856DF3] px-2 py-0.5 rounded-[6px] text-[10px] sm:text-[11px] font-semibold">
              {t}
              <button onClick={() => toggleFilter(filterTypes, setFilterTypes, t)} className="hover:text-[#333333] cursor-pointer"><X size={10} /></button>
            </span>
          ))}
          {filterCarriers.map(c => (
            <span key={c} className="flex items-center gap-1 bg-[#D9F9E7] text-[#007837] px-2 py-0.5 rounded-[6px] text-[10px] sm:text-[11px] font-semibold">
              {c}
              <button onClick={() => toggleFilter(filterCarriers, setFilterCarriers, c)} className="hover:text-[#333333] cursor-pointer"><X size={10} /></button>
            </span>
          ))}
          {filterCategories.map(cat => (
            <span key={cat} className="flex items-center gap-1 bg-[#FFF3D6] text-[#B76E00] px-2 py-0.5 rounded-[6px] text-[10px] sm:text-[11px] font-semibold">
              {cat}
              <button onClick={() => toggleFilter(filterCategories, setFilterCategories, cat)} className="hover:text-[#333333] cursor-pointer"><X size={10} /></button>
            </span>
          ))}
          <button onClick={clearAllFilters} className="text-[11px] text-[#F04A4A] font-semibold hover:underline cursor-pointer ml-1">Clear all</button>
        </div>
      )}

      {/* ── Empty State ── */}
      {processedShipments.length === 0 && (
        <div className="bg-[#FEFEFE] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs p-8 sm:p-12 flex flex-col items-center justify-center text-center">
          <div className="w-[48px] h-[48px] bg-[#F0F0F0] rounded-[12px] flex items-center justify-center mb-3">
            <Search size={24} className="text-[#757575]" />
          </div>
          <h3 className="text-[16px] font-bold text-[#333333] mb-1">No shipments found</h3>
          <p className="text-[13px] text-[#757575] max-w-[300px]">Try adjusting your search or filter criteria to find what you're looking for.</p>
          <button onClick={() => { setSearch(''); clearAllFilters(); setActiveTab('All'); }} className="mt-4 px-4 py-2 bg-[#856DF3] text-white rounded-[8px] text-[12px] font-semibold hover:bg-[#7259E0] transition-colors cursor-pointer">
            Reset Filters
          </button>
        </div>
      )}

      {/* Main Content Area */}
      {processedShipments.length > 0 && view === 'grid' && (
        /* Grid View Layout */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[12px] sm:gap-[16px] lg:gap-[20px]">
          {processedShipments.map((s) => {
            const Icon = s.icon;
            return (
              <div 
                key={s.id} 
                className="bg-[#FEFEFE] p-3 sm:p-[16px] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between gap-3 sm:gap-3.5 group"
              >
                {/* Header Row: ID + Status + Vehicle Icon */}
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <span className="text-[13px] sm:text-[14px] font-bold text-[#333333] group-hover:text-[#856DF3] transition-colors">
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
                  <div className="w-[34px] h-[34px] sm:w-[36px] sm:h-[36px] bg-[#F5F5F5] text-[#333333] rounded-[8px] flex items-center justify-center shrink-0 border border-[#F0F0F0]">
                    <Icon size={18} />
                  </div>
                </div>

                {/* Company Row */}
                <div className="flex items-center gap-2.5 pt-1">
                  <div className="w-[30px] h-[30px] sm:w-[32px] sm:h-[32px] rounded-[8px] bg-[#333333] text-white flex items-center justify-center font-bold text-[11px] sm:text-[12px] shrink-0">
                    {s.company.charAt(0)}
                  </div>
                  <div className="flex flex-col truncate">
                    <span className="text-[12px] sm:text-[13px] font-semibold text-[#333333] truncate">{s.company}</span>
                    <span className="text-[10px] text-[#757575]">{s.category}</span>
                  </div>
                </div>

                {/* Route Box (Origin -> Destination) */}
                <div className="bg-[#F5F5F5] rounded-[8px] p-2.5 sm:p-3 flex flex-col gap-2">
                  {/* Origin */}
                  <div className="flex justify-between items-start text-[10px] sm:text-[11px]">
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
                  <div className="flex justify-between items-start text-[10px] sm:text-[11px] pt-1 border-t border-[#F0F0F0]/80">
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
                  <div className="flex justify-between items-center text-[10px] sm:text-[11px]">
                    <span className="text-[#757575]">Progress <strong className="text-[#333333]">{s.progress}%</strong></span>
                    <span className="text-[#757575]">Carriers <strong className="text-[#333333]">{s.carrier}</strong></span>
                  </div>
                  <div className="w-full h-[6px] bg-[#F0F0F0] rounded-full overflow-hidden">
                    <div className="h-full bg-[#856DF3] rounded-full transition-all" style={{ width: `${s.progress}%` }} />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}

      {processedShipments.length > 0 && view === 'table' && (
        /* Table View Layout */
        <div className="bg-[#FEFEFE] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs overflow-hidden">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left whitespace-nowrap">
              <thead className="bg-[#F5F5F5] text-[10px] sm:text-[11px] uppercase font-semibold text-[#757575] border-b border-[#F0F0F0]">
                <tr>
                  <th className="px-4 sm:px-6 py-3 sm:py-3.5">Shipping ID</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-3.5">Company</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-3.5">Type</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-3.5">Carriers</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-3.5">Weight</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-3.5">Route</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-3.5">Issue & Due Date</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-3.5">Progress</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-3.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0F0F0] text-[11px] sm:text-[12px]">
                {processedShipments.map((s) => {
                  const Icon = s.icon;
                  return (
                    <tr key={s.id} className="hover:bg-[#F5F5F5]/60 transition-colors">
                      <td className="px-4 sm:px-6 py-3 sm:py-4 font-bold text-[#856DF3]">{s.id}</td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-[#333333] text-white flex items-center justify-center text-[10px] font-bold">
                            {s.company.charAt(0)}
                          </div>
                          <span className="font-semibold text-[#333333]">{s.company}</span>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-[#757575]">{s.type}</td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-[#333333]">{s.carrier}</td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-[#333333]">{s.weight}</td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-[#757575]">
                        {s.origin.split(',')[0]} &rarr; {s.dest.split(',')[0]}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-[#757575] text-[10px] sm:text-[11px]">
                        {s.originTime.split('–')[0]} (Iss) / {s.destTime.split('–')[0]} (Due)
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4">
                        <div className="flex items-center gap-2 w-24 sm:w-28">
                          <div className="w-full h-1.5 bg-[#F0F0F0] rounded-full overflow-hidden">
                            <div className="h-full bg-[#856DF3] rounded-full transition-all" style={{ width: `${s.progress}%` }} />
                          </div>
                          <span className="text-[10px] sm:text-[11px] font-bold text-[#333333]">{s.progress}%</span>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4">
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
      {processedShipments.length > 0 && (
        <div className="flex flex-col sm:flex-row justify-between items-center pt-2 sm:pt-3 border-t border-[#F0F0F0] text-[11px] sm:text-[12px] text-[#757575] gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <span>Show</span>
            <select className="bg-[#FEFEFE] border border-[#F0F0F0] rounded-[6px] px-2 py-1 text-[11px] sm:text-[12px] text-[#333333] outline-none shadow-2xs font-semibold cursor-pointer">
              <option>12</option>
              <option>24</option>
              <option>48</option>
            </select>
            <span>of {processedShipments.length} results</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button className="w-7 h-7 bg-[#F5F5F5] rounded-[6px] flex items-center justify-center hover:bg-[#F0F0F0] transition-colors text-[#757575] cursor-pointer">
              <ChevronLeft size={14} />
            </button>
            <button className="w-7 h-7 bg-[#856DF3] rounded-[6px] text-[11px] sm:text-[12px] font-bold text-white flex items-center justify-center shadow-2xs">1</button>
            <button className="w-7 h-7 bg-[#FEFEFE] border border-[#F0F0F0] rounded-[6px] text-[11px] sm:text-[12px] font-semibold text-[#333333] flex items-center justify-center hover:bg-[#F5F5F5] cursor-pointer">2</button>
            <button className="w-7 h-7 bg-[#FEFEFE] border border-[#F0F0F0] rounded-[6px] text-[11px] sm:text-[12px] font-semibold text-[#333333] flex items-center justify-center hover:bg-[#F5F5F5] cursor-pointer">3</button>
            <span className="px-1 text-[#757575]">...</span>
            <button className="w-7 h-7 bg-[#FEFEFE] border border-[#F0F0F0] rounded-[6px] text-[11px] sm:text-[12px] font-semibold text-[#333333] flex items-center justify-center hover:bg-[#F5F5F5] cursor-pointer">16</button>
            <button className="w-7 h-7 bg-[#FEFEFE] border border-[#F0F0F0] rounded-[6px] text-[11px] sm:text-[12px] font-semibold text-[#333333] flex items-center justify-center hover:bg-[#F5F5F5] cursor-pointer">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Page Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-center pt-3 sm:pt-4 border-t border-[#F0F0F0] text-[11px] sm:text-[12px] text-[#757575] gap-3">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
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
