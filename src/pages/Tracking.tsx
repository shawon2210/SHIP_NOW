import { Search, Map, Navigation, Clock, Package, CheckCircle } from 'lucide-react';

export default function Tracking() {
  return (
    <div className="p-4 lg:p-8 flex-1 w-full max-w-container-max mx-auto flex flex-col h-[calc(100vh-80px)] overflow-hidden">
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
        <div>
          <div className="flex items-center gap-2 text-label-md text-on-surface-variant mb-1">
            <span>Logistics</span>
            <span>/</span>
            <span className="text-primary font-bold">Live Tracking</span>
          </div>
          <h2 className="text-headline-md font-bold text-on-surface">Live Tracking Map</h2>
        </div>
        
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={18} />
          <input 
            type="text" 
            placeholder="Enter Tracking ID..."
            className="pl-10 pr-4 py-2 w-full bg-surface-container-lowest border border-border-light rounded-lg text-body-md focus:ring-1 focus:ring-primary focus:outline-none shadow-sm"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0 overflow-y-auto lg:overflow-hidden pb-4">
        {/* Tracking Sidebar */}
        <div className="w-full lg:w-96 shrink-0 bg-surface-container-lowest rounded-xl border border-border-light shadow-sm flex flex-col h-max lg:h-full">
          <div className="p-6 border-b border-border-light shrink-0">
            <h3 className="font-bold text-lg mb-2">Shipment #TR-1029</h3>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-primary-container text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              IN TRANSIT
            </span>
          </div>
          
          <div className="p-6 flex-1 overflow-y-auto">
            <h4 className="text-label-md font-bold text-outline uppercase tracking-wider mb-6">Status Timeline</h4>
            <div className="relative border-l-2 border-border-light ml-3 pl-6 space-y-8">
              <div className="relative">
                <div className="absolute -left-[33px] top-0 w-4 h-4 rounded-full border-4 border-white bg-primary shadow-sm"></div>
                <p className="font-bold text-on-surface">Out for Delivery</p>
                <p className="text-sm text-on-surface-variant mt-1">Driver is approaching the final destination.</p>
                <p className="text-xs text-outline mt-1 font-medium">Today, 09:42 AM</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[33px] top-0 w-4 h-4 rounded-full border-4 border-white bg-status-success shadow-sm"></div>
                <p className="font-bold text-on-surface">Arrived at Local Hub</p>
                <p className="text-sm text-on-surface-variant mt-1">Processed at distribution center.</p>
                <p className="text-xs text-outline mt-1 font-medium">Yesterday, 11:20 PM</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[33px] top-0 w-4 h-4 rounded-full border-4 border-white bg-status-success shadow-sm"></div>
                <p className="font-bold text-on-surface">In Transit</p>
                <p className="text-sm text-on-surface-variant mt-1">Departed from origin facility.</p>
                <p className="text-xs text-outline mt-1 font-medium">Oct 23, 04:15 PM</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[33px] top-0 w-4 h-4 rounded-full border-4 border-white bg-status-success shadow-sm"></div>
                <p className="font-bold text-on-surface">Label Created</p>
                <p className="text-sm text-on-surface-variant mt-1">Shipment information received.</p>
                <p className="text-xs text-outline mt-1 font-medium">Oct 23, 10:00 AM</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 border-t border-border-light bg-surface-container-low rounded-b-xl shrink-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-outline uppercase font-bold tracking-wider mb-1">Est. Delivery</p>
                <p className="font-bold text-lg text-primary">Today, 2:30 PM</p>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm">
                <Clock size={24} className="text-primary" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Area */}
        <div className="flex-1 bg-surface-container-lowest rounded-xl border border-border-light shadow-sm overflow-hidden relative min-h-[400px]">
          <div className="absolute inset-0 flex items-center justify-center bg-surface-container-high/50">
            <Map className="w-24 h-24 text-outline/20" />
            <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCTqB86Ky0JSBqqs-UJkzGYGxLFScpYRz4XFbQIkCgc_FTHW58q5V4Vv8moJx5qlIFRZuwN8GiMf-gQd3e7Uix1nI50T2f-JXJWxR9l_3uNaVlS0N3AuAy1mP3K9uhxOgVamlFFqY6-X1ED8_ix0rXDTl45jhl1JCszB25zWCZGUZV5MrGaVhg8k0Mkci7t8BUx33YyvID-d786xlNlqmTDPNfllPHLPoniMS_pntn5bnHptzn-sjOb')] bg-cover bg-center mix-blend-multiply opacity-60"></div>
            
            {/* Mock Route Path & Marker */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M 20 80 Q 40 40 80 20" fill="none" stroke="currentColor" className="text-primary/50" strokeWidth="0.5" strokeDasharray="2, 2" />
            </svg>
            <div className="absolute left-[80%] top-[20%] w-4 h-4 bg-primary rounded-full shadow-lg border-2 border-white -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-50"></div>
            </div>
            <div className="absolute left-[20%] top-[80%] w-4 h-4 bg-status-success rounded-full shadow-lg border-2 border-white -translate-x-1/2 -translate-y-1/2"></div>
            
            {/* Info Overlay */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-border-light min-w-[200px]">
              <div className="flex items-center gap-2 mb-2 font-bold text-sm">
                <Navigation size={16} className="text-primary" />
                Live Driver Info
              </div>
              <div className="text-xs space-y-1 text-on-surface-variant font-medium">
                <p>Speed: <span className="text-on-surface">45 mph</span></p>
                <p>Location: <span className="text-on-surface">I-80 East</span></p>
                <p>Next Stop: <span className="text-on-surface">14 miles</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
