import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, Clock, Truck, 
  Plus, Minus, PhoneCall, Compass, Eye, ListFilter, RefreshCw
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
    driver: 'Rahim Ahmed',
    phone: '+880 1711-234567',
    vehicle: 'Tata Prima 4928 #DH-882',
    status: 'IN TRANSIT',
    speed: '65 km/h',
    location: 'Dhaka-Chittagong Highway (Feni Bypass)',
    nextStop: 'Chittagong Port Terminal 3',
    distance: '92 km',
    eta: 'Today, 4:30 PM',
    origin: 'Dhaka Central Hub',
    destination: 'Chittagong Port',
    progress: 68,
    center: [23.1000, 91.1000],
    zoom: 8,
    currentPos: [23.0159, 91.3976],
    waypoints: [
      { name: 'Dhaka Central Hub (Origin)', lat: 23.8103, lng: 90.4125 },
      { name: 'Comilla Checkpoint', lat: 23.4607, lng: 91.1809 },
      { name: 'Feni Bypass (Current Position)', lat: 23.0159, lng: 91.3976 },
      { name: 'Chittagong Port (Destination)', lat: 22.3569, lng: 91.7832 }
    ],
    timeline: [
      { title: 'In Transit - Feni Bypass', desc: 'Cargo vessel approaching Chittagong division entry.', time: 'Today, 01:15 PM', done: true, current: true },
      { title: 'Passed Comilla Toll', desc: 'Highway weight & clearance verified.', time: 'Today, 11:30 AM', done: true },
      { title: 'Departed Tejgaon Hub', desc: 'Container sealed and loaded at Dhaka Depot.', time: 'Today, 08:00 AM', done: true },
      { title: 'Waybill Generated', desc: 'Electronic manifest issued by ShipNow Bangladesh.', time: 'Yesterday, 06:00 PM', done: true },
    ]
  },
  '#TR-4081': {
    id: '#TR-4081',
    driver: 'Kamal Hossain',
    phone: '+880 1819-890123',
    vehicle: 'Ashok Leyland 3118 #SY-401',
    status: 'OUT FOR DELIVERY',
    speed: '50 km/h',
    location: 'Gazipur Chaurasta (Dhaka Approach)',
    nextStop: 'Uttara Cargo Distribution',
    distance: '18 km',
    eta: 'Today, 2:15 PM',
    origin: 'Sylhet Sreemangal Yard',
    destination: 'Dhaka Uttara Center',
    progress: 88,
    center: [24.3000, 91.0000],
    zoom: 8,
    currentPos: [23.9999, 90.4203],
    waypoints: [
      { name: 'Sylhet Depot (Origin)', lat: 24.8949, lng: 91.8687 },
      { name: 'Sreemangal Hub', lat: 24.3065, lng: 91.7296 },
      { name: 'Gazipur (Current Position)', lat: 23.9999, lng: 90.4203 },
      { name: 'Uttara Hub (Destination)', lat: 23.8759, lng: 90.3795 }
    ],
    timeline: [
      { title: 'Approaching Metro Zone', desc: 'Vehicle cleared Gazipur toll corridor.', time: 'Today, 01:30 PM', done: true, current: true },
      { title: 'Passed Narsingdi Station', desc: 'Scheduled driver rotation complete.', time: 'Today, 10:45 AM', done: true },
      { title: 'Departed Sylhet Tea Estate', desc: 'Export tea containers loaded.', time: 'Yesterday, 09:00 PM', done: true },
      { title: 'Manifest Registered', desc: 'Customs & transport clearance passed.', time: 'Yesterday, 03:00 PM', done: true },
    ]
  },
  '#TR-9902': {
    id: '#TR-9902',
    driver: 'Tanvir Mahmud',
    phone: '+880 1912-345678',
    vehicle: 'ISUZU GVR 900 #RJ-609',
    status: 'IN TRANSIT',
    speed: '58 km/h',
    location: 'Pabna Highway (Lalon Shah Bridge)',
    nextStop: 'Khulna Rupsha Logistics Park',
    distance: '145 km',
    eta: 'Tomorrow, 10:00 AM',
    origin: 'Rajshahi Mango Yard',
    destination: 'Khulna Sea Logistics',
    progress: 42,
    center: [23.5000, 89.2000],
    zoom: 8,
    currentPos: [24.0084, 89.0494],
    waypoints: [
      { name: 'Rajshahi Yard (Origin)', lat: 24.3745, lng: 88.6042 },
      { name: 'Pabna Bridge (Current Position)', lat: 24.0084, lng: 89.0494 },
      { name: 'Jessore Hub', lat: 23.1664, lng: 89.2081 },
      { name: 'Khulna Terminal (Destination)', lat: 22.8456, lng: 89.5403 }
    ],
    timeline: [
      { title: 'In Transit - Pabna Crossing', desc: 'Vehicle crossing Lalon Shah Bridge.', time: 'Today, 12:00 PM', done: true, current: true },
      { title: 'Departed Rajshahi Center', desc: 'Fresh produce & silk goods dispatched.', time: 'Today, 07:30 AM', done: true },
      { title: 'Booking Confirmed', desc: 'Route assignment complete.', time: 'Yesterday, 04:00 PM', done: true },
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

  // Initialize and update Leaflet Map with high-performance CartoDB Voyager tiles
  useEffect(() => {
    if (!leafletLoaded || !mapContainerRef.current) return;
    const L = (window as any).L;
    if (!L) return;

    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // High performance tiles
    let tileUrl = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
    let attribution = '&copy; OpenStreetMap, CARTO';

    if (mapLayer === 'satellite') {
      tileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
      attribution = '&copy; Esri World Imagery';
    } else if (mapLayer === 'traffic') {
      tileUrl = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
      attribution = '&copy; OpenStreetMap, CARTO';
    }

    const map = L.map(mapContainerRef.current, {
      center: activeTrack.center,
      zoom: activeTrack.zoom,
      zoomControl: false,
      fadeAnimation: false,
      markerZoomAnimation: true
    });

    mapInstanceRef.current = map;

    L.tileLayer(tileUrl, { 
      attribution, 
      maxZoom: 19,
      subdomains: 'abcd',
      updateWhenIdle: false,
      updateWhenZooming: true
    }).addTo(map);

    // Draw Route Polyline
    const latLngs = activeTrack.waypoints.map(w => [w.lat, w.lng]);
    const routeLine = L.polyline(latLngs, {
      color: '#856DF3',
      weight: 6,
      opacity: 0.9,
      dashArray: mapLayer === 'traffic' ? '8, 8' : undefined
    }).addTo(map);

    map.fitBounds(routeLine.getBounds(), { padding: [40, 40] });

    // Ensure Leaflet resizes properly
    setTimeout(() => {
      if (mapInstanceRef.current) mapInstanceRef.current.invalidateSize();
    }, 100);

    const createCustomIcon = (bgColor: string, text: string) => L.divIcon({
      className: 'custom-leaflet-marker',
      html: `<div style="background-color: ${bgColor}; width: 30px; height: 30px; border-radius: 50%; border: 3px solid #FEFEFE; box-shadow: 0 4px 12px rgba(0,0,0,0.35); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 12px;">${text}</div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15]
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
        <div style="font-family: sans-serif; padding: 4px;">
          <strong style="color: #333; font-size: 13px;">${wp.name}</strong><br/>
          <span style="color: #757575; font-size: 11px;">Lat: ${wp.lat.toFixed(4)}, Lng: ${wp.lng.toFixed(4)}</span>
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

  // Handle window resize & invalidate size
  useEffect(() => {
    const handleResize = () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const zoomIn = () => { if (mapInstanceRef.current) mapInstanceRef.current.zoomIn(); };
  const zoomOut = () => { if (mapInstanceRef.current) mapInstanceRef.current.zoomOut(); };
  const resetBounds = () => {
    if (mapInstanceRef.current && activeTrack) {
      const L = (window as any).L;
      if (!L) return;
      const latLngs = activeTrack.waypoints.map(w => [w.lat, w.lng]);
      mapInstanceRef.current.fitBounds(L.polyline(latLngs).getBounds(), { padding: [40, 40] });
    }
  };

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
          <h1 className="text-[18px] sm:text-[24px] font-bold text-[#333333] leading-tight">Bangladesh Live Map Tracking</h1>
        </div>
        
        {/* Mobile View Switcher */}
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
          <form onSubmit={handleSearch} className="flex items-center bg-[#FEFEFE] px-3 py-2 rounded-[8px] border border-[#F0F0F0] w-full sm:w-[200px] shadow-2xs">
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
              <option value="#TR-1029">#TR-1029 (Dhaka → Chittagong)</option>
              <option value="#TR-4081">#TR-4081 (Sylhet → Dhaka)</option>
              <option value="#TR-9902">#TR-9902 (Rajshahi → Khulna)</option>
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
        
        {/* ── Right Column: High Performance OpenStreetMap Leaflet Container ── */}
        <div className={`flex-1 bg-[#FEFEFE] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs overflow-hidden relative min-h-[460px] sm:min-h-[560px] flex flex-col min-w-0 ${
          mobileTab === 'details' ? 'hidden lg:flex' : 'flex'
        }`}>
          
          {/* Top Integrated Control Bar Overlay */}
          <div className="absolute top-3 left-3 right-3 z-[400] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 pointer-events-none">
            
            {/* Left: Origin -> Destination Banner */}
            <div className="pointer-events-auto bg-[#FEFEFE]/95 backdrop-blur-md px-3 py-1.5 sm:py-2 rounded-[10px] border border-[#F0F0F0] shadow-md flex items-center gap-2 max-w-full overflow-hidden">
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

            {/* Right: Layer Switcher + Zoom Controls */}
            <div className="pointer-events-auto flex items-center justify-between sm:justify-end gap-2 shrink-0">
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

              <div className="bg-[#FEFEFE]/95 backdrop-blur-md p-1 rounded-[10px] border border-[#F0F0F0] shadow-md flex items-center gap-0.5">
                <button onClick={zoomIn} className="p-1 sm:p-1.5 hover:bg-[#F5F5F5] rounded-[6px] text-[#333333] cursor-pointer" title="Zoom In">
                  <Plus size={14} />
                </button>
                <button onClick={zoomOut} className="p-1 sm:p-1.5 hover:bg-[#F5F5F5] rounded-[6px] text-[#333333] cursor-pointer" title="Zoom Out">
                  <Minus size={14} />
                </button>
                <button onClick={resetBounds} className="p-1 sm:p-1.5 hover:bg-[#F5F5F5] rounded-[6px] text-[#856DF3] cursor-pointer border-l border-[#F0F0F0]" title="Reset View">
                  <RefreshCw size={13} />
                </button>
              </div>
            </div>

          </div>

          {/* ── Leaflet Container ── */}
          <div className="flex-1 w-full h-full relative min-h-[400px]">
            <div ref={mapContainerRef} className="absolute inset-0 w-full h-full z-10 bg-[#E8ECEF]" />

            {!leafletLoaded && (
              <iframe
                title="Bangladesh OpenStreetMap"
                className="absolute inset-0 w-full h-full border-0 z-0"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${activeTrack.center[1]-2}%2C${activeTrack.center[0]-2}%2C${activeTrack.center[1]+2}%2C${activeTrack.center[0]+2}&layer=mapnik&marker=${activeTrack.currentPos[0]}%2C${activeTrack.currentPos[1]}`}
              />
            )}

            {/* ── Overlay Card 1: Responsive Live Driver & Next Destination Panel ── */}
            <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:w-[320px] z-[400] bg-[#FEFEFE]/95 backdrop-blur-md p-3 sm:p-4 rounded-[12px] border border-[#F0F0F0] shadow-lg flex flex-col gap-2.5">
              
              {/* Next Destination Banner */}
              <div className="flex items-center gap-2 px-2.5 py-1.5 bg-[#333333] text-white rounded-[8px] text-[11px] font-semibold">
                <Compass size={14} className="text-[#856DF3] shrink-0" />
                <div className="flex items-center justify-between w-full min-w-0">
                  <span className="text-[10px] text-gray-300 shrink-0">Next Stop:</span>
                  <span className="text-[11px] font-bold text-white truncate ml-1.5">{activeTrack.nextStop}</span>
                </div>
              </div>

              {/* Driver Details Header */}
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

          </div>

        </div>

      </div>

    </div>
  );
}
