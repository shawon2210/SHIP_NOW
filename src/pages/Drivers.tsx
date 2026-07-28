import { Search, Filter, UserPlus, Star, Phone, MoreVertical, Navigation } from 'lucide-react';

const mockDrivers = [
  { id: 'DRV-102', name: 'John Smith', status: 'On Duty', rating: '4.8', route: 'Chicago to Detroit', phone: '+1 (555) 019-2834' },
  { id: 'DRV-105', name: 'Sarah Jenkins', status: 'Off Duty', rating: '4.9', route: 'N/A', phone: '+1 (555) 012-9931' },
  { id: 'DRV-112', name: 'Mike Davis', status: 'On Duty', rating: '4.7', route: 'Dallas to Austin', phone: '+1 (555) 018-2234' },
  { id: 'DRV-120', name: 'Alex Ray', status: 'On Break', rating: '5.0', route: 'Local SF Route', phone: '+1 (555) 017-8822' },
  { id: 'DRV-124', name: 'Tom Wilson', status: 'On Duty', rating: '4.5', route: 'Seattle to Portland', phone: '+1 (555) 015-4421' },
  { id: 'DRV-130', name: 'Emily Chen', status: 'Off Duty', rating: '4.9', route: 'N/A', phone: '+1 (555) 014-9988' },
];

export default function Drivers() {
  return (
    <div className="p-4 lg:p-8 flex-1 w-full max-w-container-max mx-auto overflow-y-auto">
      <div className="mb-6 flex items-center gap-2 text-label-md text-on-surface-variant">
        <span>Operations</span>
        <span>/</span>
        <span className="text-primary font-bold">Drivers</span>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-headline-md font-bold text-on-surface">Driver Directory</h2>
          <p className="text-body-md text-on-surface-variant mt-1">Manage personnel, assignments, and performance metrics.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg text-label-md font-bold hover:brightness-110 active:scale-95 transition-all shadow-sm">
          <UserPlus size={18} />
          Add Driver
        </button>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={16} />
          <input 
            type="text" 
            placeholder="Search drivers by name or ID..."
            className="pl-9 pr-4 py-2 w-full bg-surface-container-lowest border border-border-light rounded-lg text-sm focus:ring-1 focus:ring-primary focus:outline-none shadow-sm"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <select className="bg-surface-container-lowest border border-border-light rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm font-medium w-full sm:w-auto">
            <option>All Statuses</option>
            <option>On Duty</option>
            <option>Off Duty</option>
            <option>On Break</option>
          </select>
          <button className="p-2 border border-border-light bg-surface-container-lowest rounded-lg hover:bg-surface-container-low transition-all shadow-sm flex items-center justify-center">
            <Filter size={20} className="text-on-surface-variant" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockDrivers.map(driver => (
          <div key={driver.id} className="bg-surface-container-lowest rounded-xl border border-border-light shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-container text-primary flex items-center justify-center font-bold text-lg">
                  {driver.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-bold text-on-surface">{driver.name}</h3>
                  <p className="text-xs text-outline font-medium">{driver.id}</p>
                </div>
              </div>
              <button className="text-outline hover:text-primary transition-colors"><MoreVertical size={16}/></button>
            </div>
            
            <div className="mb-4 flex items-center justify-between">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                driver.status === 'On Duty' ? 'bg-status-success/10 text-status-success' :
                driver.status === 'On Break' ? 'bg-status-warning/10 text-status-warning' :
                'bg-outline-variant/20 text-on-surface-variant'
              }`}>
                {driver.status}
              </span>
              <div className="flex items-center gap-1 text-sm font-bold text-on-surface-variant">
                <Star size={14} className="text-status-warning fill-status-warning" />
                {driver.rating}
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Navigation size={16} className="text-outline mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-outline uppercase tracking-wider">Current Route</p>
                  <p className="font-medium text-on-surface">{driver.route}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-outline" />
                <p className="font-medium text-on-surface">{driver.phone}</p>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-border-light flex gap-2">
              <button className="flex-1 py-2 text-sm font-bold text-primary hover:bg-primary/5 rounded-lg transition-colors border border-primary/20">Message</button>
              <button className="flex-1 py-2 text-sm font-bold text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors border border-border-light">Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
