import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, Clock, Truck, 
  Plus, Minus, PhoneCall, Compass, Layers, MapPin, Eye, ListFilter
} from 'lucide-react';

interface ShipmentTrackData {
  id: string;
  driver: string;
  phone: string;
  vehicle: string;
  status: string;
  speed: string;
  location: string;
  nextStop: string;
  distance: string;
  eta: string;
  origin: string;
  destination: string;
  progress: number;
  center: [number, number]; // [lat, lng]
  zoom: number;
  waypoints: { name: string; lat: number; lng: number }[];
  currentPos: [number, number];
  timeline: { title: string; desc: string; time: string; done: boolean; current?: boolean }[];
}

const mockShipmentTracks: Record<string, ShipmentTrackData> = {
  '#TR-1029': {
    id: '#TR-1029',
    driver: 'Alex Morgan',
    phone: '+1 (555) 234-8901',
    vehicle: 'Freightliner Cascadia #VH-882',
    status: 'IN TRANSIT',
    speed: '54 mph',
    location: 'I-80 East, Mile 142 (Des Moines, IA)',
    nextStop: 'Chicago Distribution Center',
    distance: '184 miles',
    eta: 'Today, 2:30 PM',
    origin: 'Portland Hub',
    destination: 'Chicago Terminal',
    progress: 72,
    center: [42.5000, -96.0000],
    zoom: 5,
    currentPos: [41.5868, -93.6250],
    waypoints: [
      { name: 'Portland Hub (Origin)', lat: 45.5152, lng: -122.6784 },
      { name: 'Boise Checkpoint', lat: 43.6150, lng: -116.2023 },
      { name: 'Des Moines (Current)', lat: 41.5868, lng: -93.6250 },
      { name: 'Chicago Terminal (Destination)', lat: 41.8781, lng: -87.6298 }
    ],
    timeline: [
      { title: 'Out for Delivery', desc: 'Driver is approaching destination corridor.', time: 'Today, 09:42 AM', done: true, current: true },
      { title: 'Arrived at Local Hub', desc: 'Processed at Des Moines regional hub.', time: 'Yesterday, 11:20 PM', done: true },
      { title: 'In Transit', desc: 'Departed Salt Lake City transit center.', time: 'Oct 23, 04:15 PM', done: true },
      { title: 'Label Created', desc: 'Shipment info received at Portland Hub.', time: 'Oct 23, 10:00 AM', done: true },
    ]
  },
  '#TR-4081': {
    id: '#TR-4081',
    driver: 'David Miller',
    phone: '+1 (555) 892-1144',
    vehicle: 'Volvo VNL 860 #VH-401',
    status: 'OUT FOR DELIVERY',
    speed: '38 mph',
    location: 'US-101 South (Los Angeles, CA)',
    nextStop: 'Long Beach Terminal 4',
    distance: '12 miles',
    eta: 'Today, 11:45 AM',
    origin: 'San Francisco Depot',
    destination: 'Long Beach Port',
    progress: 91,
    center: [35.5000, -119.5000],
    zoom: 7,
    currentPos: [34.0522, -118.2437],
    waypoints: [
      { name: 'San Francisco Depot (Origin)', lat: 37.7749, lng: -122.4194 },
      { name: 'Bakersfield Checkpoint', lat: 35.3733, lng: -119.0187 },
      { name: 'Los Angeles (Current)', lat: 34.0522, lng: -118.2437 },
      { name: 'Long Beach Port (Destination)', lat: 33.7701, lng: -118.1937 }
    ],
    timeline: [
      { title: 'Out for Delivery', desc: 'Vehicle in final delivery zone.', time: 'Today, 10:15 AM', done: true, current: true },
      { title: 'Sorting Completed', desc: 'LA Regional Hub dispatch verified.', time: 'Today, 06:30 AM', done: true },
      { title: 'In Transit', desc: 'Departed SF Bay Area sorting center.', time: 'Yesterday, 08:00 PM', done: true },
      { title: 'Manifest Created', desc: 'Electronic waybill registered.', time: 'Yesterday, 02:00 PM', done: true },
    ]
  },
  '#TR-9902': {
    id: '#TR-9902',
    driver: 'Sarah Jenkins',
    phone: '+1 (555) 341-9980',
    vehicle: 'Kenworth T680 #VH-609',
    status: 'SCHEDULED',
    speed: '62 mph',
    location: 'I-95 North (Richmond, VA)',
    nextStop: 'Philadelphia Cargo Hub',
    distance: '310 miles',
    eta: 'Tomorrow, 09:00 AM',
    origin: 'Atlanta Yard',
    destination: 'New York Metro',
    progress: 45,
    center: [37.0000, -79.0000],
    zoom: 6,
    currentPos: [37.5407, -77.4360],
    waypoints: [
      { name: 'Atlanta Yard (Origin)', lat: 33.7490, lng: -84.3880 },
      { name: 'Charlotte Hub', lat: 35.2271, lng: -80.8431 },
      { name: 'Richmond VA (Current)', lat: 37.5407, lng: -77.4360 },
      { name: 'New York Metro (Destination)', lat: 40.7128, lng: -74.0060 }
    ],
    timeline: [
      { title: 'In Transit', desc: 'Cruising Northbound on interstate.', time: 'Today, 08:00 AM', done: true, current: true },
      { title: 'Cargo Loaded', desc: 'Atlanta Terminal dock #14 cleared.', time: 'Today, 04:30 AM', done: true },
      { title: 'Order Confirmed', desc: 'Freight booking approved.', time: 'Yesterday, 05:00 PM', done: true },
    ]
  }
};

export default function Tracking() {
  const [selectedId, setSelectedId] = useState('#TR-1029');
  const [searchQuery, setSearchQuery] = useState('');
  const [mapLayer, setMapLayer] = useState<'streets' | 'satellite' | 'traffic'>('streets');
  const [showDriverCall, setShowDriverCall] = useState(false);
  const [mobileTab, setMobileTab] = useState<'map' | 'details'>('map');
  const [leafletLoaded, setLeafletLoaded] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  const activeTrack = mockShipmentTracks[selectedId] || mockShipmentTracks['#TR-1029'];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && mockShipmentTracks[searchQuery.trim()]) {
      setSelectedId(searchQuery.trim());
    }
  };

  // Dynamically load Leaflet CDN if not available
  useEffect(() => {
    if ((window as any).L) {
      setLeafletLoaded(true);
      return;
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.async = true;
    script.onload = () => setLeafletLoaded(true);
    document.body.appendChild(script);
  }, []);

  // Initialize and update Leaflet Map
  useEffect(() => {
    if (!leafletLoaded || !mapContainerRef.current) return;
    const L = (window as any).L;
    if (!L) return;

    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    const map = L.map(mapContainerRef.current, {
      center: activeTrack.center,
      zoom: activeTrack.zoom,
      zoomControl: false
    });

    mapInstanceRef.current = map;

    let tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    let attribution = '&copy; OpenStreetMap';

    if (mapLayer === 'satellite') {
      tileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
      attribution = '&copy; Esri World Imagery';
    } else if (mapLayer === 'traffic') {
      tileUrl = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
      attribution = '&copy; CARTO';
    }

    L.tileLayer(tileUrl, { attribution, maxZoom: 19 }).addTo(map);

    const latLngs = activeTrack.waypoints.map(w => [w.lat, w.lng]);
    const routeLine = L.polyline(latLngs, {
      color: '#856DF3',
      weight: 5,
      opacity: 0.8,
      dashArray: mapLayer === 'traffic' ? '8, 8' : undefined
    }).addTo(map);

    map.fitBounds(routeLine.getBounds(), { padding: [30, 30] });

    const createCustomIcon = (bgColor: string, text: string) => L.divIcon({
      className: 'custom-leaflet-marker',
      html: `<div style="background-color: ${bgColor}; width: 26px; height: 26px; border-radius: 50%; border: 2.5px solid #FEFEFE; box-shadow: 0 4px 10px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 11px;">${text}</div>`,
      iconSize: [26, 26],
      iconAnchor: [13, 13]
    });

    activeTrack.waypoints.forEach((wp, idx) => {
      const isOrigin = idx === 0;
      const isDest = idx === activeTrack.waypoints.length - 1;
      const isCurrent = wp.name.includes('Current');

      let color = '#757575';
      let symbol = (idx + 1).toString();

      if (isOrigin) { color = '#007837'; symbol = 'A'; }
      else if (isDest) { color = '#856DF3'; symbol = 'B'; }
      else if (isCurrent) { color = '#856DF3'; symbol = '🚚'; }

      const marker = L.marker([wp.lat, wp.lng], { icon: createCustomIcon(color, symbol) }).addTo(map);
      marker.bindPopup(`
        <div style="font-family: sans-serif; padding: 2px;">
          <strong style="color: #333; font-size: 12px;">${wp.name}</strong>
        </div>
      `);
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [leafletLoaded, selectedId, mapLayer, mobileTab]);

  const zoomIn = () => { if (mapInstanceRef.current) mapInstanceRef.current.zoomIn(); };
  const zoomOut = () => { if (mapInstanceRef.current) mapInstanceRef.current.zoomOut(); };

  return (
    <div className="flex flex-col gap-[12px] sm:gap-[16px] lg:gap-[20px] w-full min-w-0 pb-[30px] sm:pb-[40px]">
      
      {/* ── Top Header ── */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <div className="flex items-center gap-1 text-[11px] text-[#757575] mb-0.5">
            <span>Logistics</span>
            <span>/</span>
            <span className="text-[#856DF3] font-semibold">Live Tracking</span>
          </div>
          <h1 className="text-[18px] sm:text-[24px] font-bold text-[#333333] leading-tight">GPS Tracking Dashboard</h1>
        </div>
        
        {/* Mobile View Switcher (Visible on small screens) */}
        <div className="flex lg:hidden w-full sm:w-auto bg-[#F5F5F5] p-1 rounded-[10px] border border-[#F0F0F0]">
          <button 
            onClick={() => setMobileTab('map')}
            className={`flex-1 sm:flex-none px-4 py-1.5 rounded-[8px] text-[12px] font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              mobileTab === 'map' ? 'bg-[#FEFEFE] text-[#856DF3] shadow-2xs' : 'text-[#757575]'
            }`}
          >
            <Eye size={14} />
            <span>Map View</span>
          </button>
          <button 
            onClick={() => setMobileTab('details')}
            className={`flex-1 sm:flex-none px-4 py-1.5 rounded-[8px] text-[12px] font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              mobileTab === 'details' ? 'bg-[#FEFEFE] text-[#856DF3] shadow-2xs' : 'text-[#757575]'
            }`}
          >
            <ListFilter size={14} />
            <span>Timeline</span>
          </button>
        </div>

        {/* Search Bar + Shipment Selector */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
          <form onSubmit={handleSearch} className="flex items-center bg-[#FEFEFE] px-3 py-2 rounded-[8px] border border-[#F0F0F0] w-full sm:w-[220px] shadow-2xs">
            <Search size={16} className="text-[#757575] shrink-0" />
            <input 
              type="text" 
              placeholder="Search #TR-1029..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ml-2 bg-transparent outline-none text-[12px] text-[#333333] w-full placeholder-[#757575]"
            />
          </form>

          {/* Selector Dropdown */}
          <div className="relative w-full sm:w-auto">
            <select 
              value={selectedId} 
              onChange={(e) => setSelectedId(e.target.value)}
              className="w-full sm:w-auto bg-[#333333] text-white text-[12px] font-semibold px-3 py-2 rounded-[8px] outline-none cursor-pointer hover:bg-[#222222] transition-colors truncate"
            >
              <option value="#TR-1029">#TR-1029 (Portland → Chicago)</option>
              <option value="#TR-4081">#TR-4081 (SF → Long Beach)</option>
              <option value="#TR-9902">#TR-9902 (Atlanta → NY)</option>
            </select>
          </div>
        </div>
      </div>

      {/* ── Main Layout (Sidebar + Map) ── */}
      <div className="flex flex-col lg:flex-row gap-[12px] sm:gap-[16px] lg:gap-[20px] w-full min-w-0">
        
        {/* ── Left Sidebar: Tracking Details ── */}
        <div className={`w-full lg:w-[340px] shrink-0 bg-[#FEFEFE] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs flex flex-col justify-between overflow-hidden ${
          mobileTab === 'map' ? 'hidden lg:flex' : 'flex'
        }`}>
          
          <div className="p-3.5 sm:p-5 border-b border-[#F0F0F0] flex items-center justify-between">
            <div className="min-w-0 pr-2">
              <span className="text-[10px] sm:text-[11px] font-semibold text-[#757575] block">Tracking ID</span>
              <h3 className="text-[16px] sm:text-[18px] font-bold text-[#333333] truncate mt-0.5">
                {activeTrack.id}
                <span className="text-[11px] font-normal text-[#757575] ml-1">({activeTrack.vehicle.split('#')[1]})</span>
              </h3>
            </div>
            <span className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-[8px] text-[10px] sm:text-[11px] font-bold bg-[#D9F9E7] text-[#007837] shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#007837] animate-pulse" />
              {activeTrack.status}
            </span>
          </div>
          
          {/* Status Timeline */}
          <div className="p-3.5 sm:p-5 flex-1">
            <h4 className="text-[10px] sm:text-[11px] font-bold text-[#757575] uppercase tracking-wider mb-4">Status Timeline</h4>
            <div className="relative border-l-2 border-[#F0F0F0] ml-2.5 pl-4 sm:pl-5 flex flex-col gap-4 sm:gap-5">
              {activeTrack.timeline.map((step, idx) => (
                <div key={idx} className="relative min-w-0">
                  <div className={`absolute -left-[23px] sm:-left-[27px] top-0.5 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border-2 border-white ${
                    step.current ? 'bg-[#856DF3] ring-4 ring-[#E3DDFF]' : 'bg-[#007837]'
                  }`} />
                  <p className={`text-[12px] sm:text-[13px] font-bold ${step.current ? 'text-[#856DF3]' : 'text-[#333333]'}`}>{step.title}</p>
                  <p className="text-[10px] sm:text-[11px] text-[#757575] mt-0.5 leading-snug">{step.desc}</p>
                  <p className={`text-[10px] font-semibold mt-0.5 ${step.current ? 'text-[#856DF3]' : 'text-[#757575]'}`}>{step.time}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Estimated Delivery Banner */}
          <div className="p-3.5 sm:p-4 bg-[#F9F9F9] border-t border-[#F0F0F0] flex items-center justify-between">
            <div>
              <p className="text-[9px] sm:text-[10px] text-[#757575] uppercase font-bold tracking-wider">Est. Delivery</p>
              <p className="text-[14px] sm:text-[15px] font-bold text-[#856DF3]">{activeTrack.eta}</p>
              <p className="text-[10px] text-[#757575] mt-0.5">Remaining: {activeTrack.distance}</p>
            </div>
            <div className="p-2 sm:p-2.5 bg-[#FEFEFE] rounded-[10px] border border-[#F0F0F0] shadow-2xs text-[#856DF3] shrink-0">
              <Clock size={18} />
            </div>
          </div>
        </div>
        
        {/* ── Right Column: Real OpenStreetMap Leaflet Container ── */}
        <div className={`flex-1 bg-[#FEFEFE] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs overflow-hidden relative min-h-[420px] sm:min-h-[520px] flex flex-col min-w-0 ${
          mobileTab === 'details' ? 'hidden lg:flex' : 'flex'
        }`}>
          
          {/* Top Responsive Map Toolbar Overlay */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 z-20 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2 pointer-events-none">
            {/* Map Origin -> Destination Pill */}
            <div className="pointer-events-auto bg-[#FEFEFE]/95 backdrop-blur-md px-3 py-1.5 sm:py-2 rounded-[10px] border border-[#F0F0F0] shadow-md flex items-center justify-between sm:justify-start gap-2 max-w-full overflow-hidden">
              <div className="flex items-center gap-1.5 text-[11px] sm:text-[12px] font-semibold text-[#333333] truncate">
                <div className="w-2 h-2 rounded-full bg-[#007837] shrink-0" />
                <span className="truncate">{activeTrack.origin}</span>
              </div>
              <span className="text-[#757575] text-[10px] shrink-0">→</span>
              <div className="flex items-center gap-1.5 text-[11px] sm:text-[12px] font-semibold text-[#856DF3] truncate">
                <div className="w-2 h-2 rounded-full bg-[#856DF3] shrink-0" />
                <span className="truncate">{activeTrack.destination}</span>
              </div>
            </div>

            {/* Layer & Zoom Controls */}
            <div className="pointer-events-auto flex items-center justify-between sm:justify-end gap-2">
              {/* Layer Toggles */}
              <div className="bg-[#FEFEFE]/95 backdrop-blur-md p-1 rounded-[10px] border border-[#F0F0F0] shadow-md flex items-center gap-1">
                {(['streets', 'satellite', 'traffic'] as const).map((layer) => (
                  <button
                    key={layer}
                    onClick={() => setMapLayer(layer)}
                    className={`px-2 sm:px-2.5 py-1 rounded-[6px] text-[10px] font-bold capitalize transition-colors cursor-pointer ${
                      mapLayer === layer ? 'bg-[#333333] text-white' : 'text-[#757575] hover:text-[#333333]'
                    }`}
                  >
                    {layer}
                  </button>
                ))}
              </div>

              {/* Zoom Buttons */}
              <div className="bg-[#FEFEFE]/95 backdrop-blur-md p-1 rounded-[10px] border border-[#F0F0F0] shadow-md flex items-center gap-0.5">
                <button onClick={zoomIn} className="p-1 sm:p-1.5 hover:bg-[#F5F5F5] rounded-[6px] text-[#333333] cursor-pointer">
                  <Plus size={14} />
                </button>
                <button onClick={zoomOut} className="p-1 sm:p-1.5 hover:bg-[#F5F5F5] rounded-[6px] text-[#333333] cursor-pointer">
                  <Minus size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* ── Real Leaflet Container / Fallback ── */}
          <div className="flex-1 w-full h-full relative">
            <div ref={mapContainerRef} className="absolute inset-0 w-full h-full z-10" />

            {!leafletLoaded && (
              <iframe
                title="Real OpenStreetMap"
                className="absolute inset-0 w-full h-full border-0 z-0"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${activeTrack.center[1]-5}%2C${activeTrack.center[0]-5}%2C${activeTrack.center[1]+5}%2C${activeTrack.center[0]+5}&layer=mapnik&marker=${activeTrack.currentPos[0]}%2C${activeTrack.currentPos[1]}`}
              />
            )}

            {/* ── Overlay Card 1: Responsive Live Driver Info Card ── */}
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-auto sm:w-[300px] z-20 bg-[#FEFEFE]/95 backdrop-blur-md p-3 sm:p-4 rounded-[12px] border border-[#F0F0F0] shadow-lg flex flex-col gap-2.5">
              <div className="flex items-center justify-between border-b border-[#F0F0F0] pb-2">
                <div className="flex items-center gap-2 min-w-0 pr-2">
                  <div className="w-8 h-8 rounded-full bg-[#856DF3] text-white flex items-center justify-center font-bold text-[12px] shrink-0 shadow-2xs">
                    {activeTrack.driver.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[12px] sm:text-[13px] font-bold text-[#333333] leading-tight truncate">{activeTrack.driver}</h4>
                    <p className="text-[10px] text-[#757575] truncate">{activeTrack.vehicle}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowDriverCall(!showDriverCall)}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-[8px] bg-[#D9F9E7] text-[#007837] flex items-center justify-center hover:bg-[#c2f3d5] transition-colors cursor-pointer shrink-0"
                  title="Contact Driver"
                >
                  <PhoneCall size={14} />
                </button>
              </div>

              {showDriverCall && (
                <div className="p-2 bg-[#D9F9E7]/60 rounded-[8px] text-[10px] sm:text-[11px] text-[#007837] font-semibold flex items-center justify-between">
                  <span>Calling {activeTrack.phone}...</span>
                  <button onClick={() => setShowDriverCall(false)} className="text-[#007837] font-bold">✕</button>
                </div>
              )}

              {/* Realtime Telemetry Grid */}
              <div className="grid grid-cols-3 gap-1.5 text-center">
                <div className="bg-[#F9F9F9] p-1.5 rounded-[8px] border border-[#F0F0F0]">
                  <span className="text-[9px] font-bold text-[#757575] block uppercase">Speed</span>
                  <span className="text-[11px] sm:text-[12px] font-bold text-[#333333]">{activeTrack.speed}</span>
                </div>
                <div className="bg-[#F9F9F9] p-1.5 rounded-[8px] border border-[#F0F0F0]">
                  <span className="text-[9px] font-bold text-[#757575] block uppercase">Distance</span>
                  <span className="text-[11px] sm:text-[12px] font-bold text-[#856DF3]">{activeTrack.distance}</span>
                </div>
                <div className="bg-[#F9F9F9] p-1.5 rounded-[8px] border border-[#F0F0F0]">
                  <span className="text-[9px] font-bold text-[#757575] block uppercase">Progress</span>
                  <span className="text-[11px] sm:text-[12px] font-bold text-[#007837]">{activeTrack.progress}%</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-[#757575]">
                <span className="truncate">Location: <strong className="text-[#333333]">{activeTrack.location}</strong></span>
              </div>
            </div>

            {/* ── Overlay Card 2: Next Stop Banner (Hidden on very small screens to avoid overlap) ── */}
            <div className="hidden md:flex absolute top-4 right-4 z-20 bg-[#333333]/90 text-white backdrop-blur-md px-3 py-2 rounded-[10px] shadow-lg items-center gap-2.5 border border-white/10 max-w-[220px]">
              <Compass size={16} className="text-[#856DF3] shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="text-[9px] uppercase font-bold text-gray-400">Next Destination</span>
                <span className="text-[11px] font-bold truncate">{activeTrack.nextStop}</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
