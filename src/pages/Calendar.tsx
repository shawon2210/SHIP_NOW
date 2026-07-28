import { Calendar as CalendarIcon, Filter, Search, Plus, ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react';

export default function Calendar() {
  return (
    <div className="p-4 lg:p-8 flex-1 w-full max-w-container-max mx-auto overflow-y-auto">
      <div className="mb-6 flex items-center gap-2 text-label-md text-on-surface-variant">
        <span>Planning</span>
        <span>/</span>
        <span className="text-primary font-bold">Schedule</span>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-headline-md font-bold text-on-surface">Logistics Calendar</h2>
          <p className="text-body-md text-on-surface-variant mt-1">Manage dispatch schedules and delivery windows.</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg text-label-md font-bold hover:brightness-110 active:scale-95 transition-all shadow-sm w-full md:w-auto">
          <Plus size={18} />
          New Event
        </button>
      </div>

      <div className="bg-surface-container-lowest rounded-xl border border-border-light shadow-sm overflow-hidden flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-border-light p-6 shrink-0 bg-surface-container-low">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold">October 2024</h3>
            <div className="flex gap-1">
              <button className="p-1 text-on-surface-variant hover:bg-border-light rounded"><ChevronLeft size={16} /></button>
              <button className="p-1 text-on-surface-variant hover:bg-border-light rounded"><ChevronRight size={16} /></button>
            </div>
          </div>
          {/* Mini Calendar placeholder */}
          <div className="grid grid-cols-7 gap-1 text-center text-xs mb-8">
            {['S','M','T','W','T','F','S'].map(d => <div key={d} className="font-bold text-outline">{d}</div>)}
            {Array.from({length: 31}).map((_, i) => (
              <div key={i} className={`p-1.5 rounded-full ${i===24 ? 'bg-primary text-white font-bold' : 'hover:bg-border-light cursor-pointer'}`}>{i+1}</div>
            ))}
          </div>
          
          <h4 className="text-label-md font-bold text-outline uppercase mb-4 tracking-wider">Filters</h4>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded border-border-light text-primary focus:ring-primary/20 w-4 h-4 cursor-pointer" />
              <span className="text-body-md text-on-surface-variant">Dispatches</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded border-border-light text-primary focus:ring-primary/20 w-4 h-4 cursor-pointer" />
              <span className="text-body-md text-on-surface-variant">Deliveries</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded border-border-light text-primary focus:ring-primary/20 w-4 h-4 cursor-pointer" />
              <span className="text-body-md text-on-surface-variant">Maintenance</span>
            </label>
          </div>
        </div>
        
        {/* Main View */}
        <div className="flex-1 p-6">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <h3 className="text-headline-sm font-bold">Upcoming Events</h3>
            <div className="flex bg-surface-container-low p-1 rounded-lg border border-border-light w-full sm:w-auto overflow-x-auto">
              {['Day', 'Week', 'Month'].map(view => (
                <button key={view} className={`px-4 py-1.5 rounded-md text-label-md font-medium transition-all ${view === 'Week' ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}>{view}</button>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            {/* Event Item */}
            <div className="flex flex-col sm:flex-row gap-4 p-4 border border-border-light rounded-lg hover:border-primary/30 transition-colors">
              <div className="sm:w-24 shrink-0 text-center sm:text-left">
                <p className="text-label-md font-bold text-primary">09:00 AM</p>
                <p className="text-xs text-outline">Oct 25</p>
              </div>
              <div className="w-1 bg-primary/20 rounded-full hidden sm:block"></div>
              <div className="flex-1">
                <h4 className="font-bold text-on-surface">Fleet #44 Maintenance</h4>
                <div className="flex flex-wrap gap-4 mt-2">
                  <div className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                    <Clock size={14} /> 2 Hours
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                    <MapPin size={14} /> Hub Garage
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 p-4 border border-border-light rounded-lg hover:border-primary/30 transition-colors">
              <div className="sm:w-24 shrink-0 text-center sm:text-left">
                <p className="text-label-md font-bold text-status-warning">01:30 PM</p>
                <p className="text-xs text-outline">Oct 25</p>
              </div>
              <div className="w-1 bg-status-warning/20 rounded-full hidden sm:block"></div>
              <div className="flex-1">
                <h4 className="font-bold text-on-surface">Urgent Dispatch: Order #991</h4>
                <div className="flex flex-wrap gap-4 mt-2">
                  <div className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                    <Clock size={14} /> 4.5 Hours
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                    <MapPin size={14} /> Route 66
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
