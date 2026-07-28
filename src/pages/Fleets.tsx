import { Search, Filter, Truck, Plus, CheckCircle, Navigation, AlertTriangle, MoreVertical } from 'lucide-react';

const mockFleets = [
  { id: 'FL-9021', name: 'Volvo FH16', type: 'Heavy Duty', status: 'Active', driver: 'John Smith', location: 'Chicago Hub', fuel: '78%' },
  { id: 'FL-8834', name: 'Freightliner Cascadia', type: 'Heavy Duty', status: 'Maintenance', driver: 'Unassigned', location: 'Dallas Shop', fuel: '45%' },
  { id: 'FL-7721', name: 'Ford Transit', type: 'Light Duty', status: 'Active', driver: 'Sarah Jenkins', location: 'Route 66', fuel: '92%' },
  { id: 'FL-6512', name: 'Peterbilt 579', type: 'Heavy Duty', status: 'Rest', driver: 'Mike Davis', location: 'Rest Stop A', fuel: '60%' },
  { id: 'FL-5542', name: 'Mercedes Sprinter', type: 'Light Duty', status: 'Active', driver: 'Alex Ray', location: 'Downtown Hub', fuel: '88%' },
  { id: 'FL-9912', name: 'Kenworth T680', type: 'Heavy Duty', status: 'Alert', driver: 'Tom Wilson', location: 'Highway 9', fuel: '15%' },
];

export default function Fleets() {
  return (
    <div className="p-4 lg:p-8 flex-1 w-full max-w-container-max mx-auto overflow-y-auto">
      <div className="mb-6 flex items-center gap-2 text-label-md text-on-surface-variant">
        <span>Operations</span>
        <span>/</span>
        <span className="text-primary font-bold">Fleets</span>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-headline-md font-bold text-on-surface">Fleet Management</h2>
          <p className="text-body-md text-on-surface-variant mt-1">Manage vehicles, track statuses, and schedule maintenance.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg text-label-md font-bold hover:brightness-110 active:scale-95 transition-all shadow-sm">
          <Plus size={18} />
          Add Vehicle
        </button>
      </div>

      {/* Fleet Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Vehicles', value: '124', icon: Truck, color: 'text-primary' },
          { label: 'Active on Route', value: '86', icon: Navigation, color: 'text-status-success' },
          { label: 'In Maintenance', value: '12', icon: AlertTriangle, color: 'text-status-warning' },
          { label: 'Available', value: '26', icon: CheckCircle, color: 'text-outline' },
        ].map((stat, i) => (
          <div key={i} className="bg-surface-container-lowest p-6 rounded-xl border border-border-light shadow-sm flex items-center gap-4">
            <div className={`p-3 rounded-lg bg-surface-container-low ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-outline uppercase tracking-wider mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-on-surface">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fleet List */}
      <div className="bg-surface-container-lowest rounded-xl border border-border-light shadow-sm overflow-hidden">
        <div className="p-6 border-b border-border-light flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h3 className="font-bold text-lg text-on-surface">Vehicle Directory</h3>
          <div className="flex gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={16} />
              <input 
                type="text" 
                placeholder="Search fleet..."
                className="pl-9 pr-4 py-2 w-full sm:w-64 bg-surface border border-border-light rounded-lg text-sm focus:ring-1 focus:ring-primary focus:outline-none shadow-sm"
              />
            </div>
            <button className="p-2 border border-border-light rounded-lg hover:bg-surface-container-low transition-all">
              <Filter size={18} className="text-on-surface-variant" />
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap">
            <thead className="bg-surface-container-low text-xs uppercase font-bold text-outline border-b border-border-light">
              <tr>
                <th className="px-6 py-4">Vehicle ID</th>
                <th className="px-6 py-4">Model & Type</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Assigned Driver</th>
                <th className="px-6 py-4">Current Location</th>
                <th className="px-6 py-4">Fuel</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light text-sm">
              {mockFleets.map(fleet => (
                <tr key={fleet.id} className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-primary">{fleet.id}</td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-on-surface">{fleet.name}</p>
                    <p className="text-xs text-on-surface-variant">{fleet.type}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold ${
                      fleet.status === 'Active' ? 'bg-status-success/10 text-status-success' :
                      fleet.status === 'Maintenance' ? 'bg-status-warning/10 text-status-warning' :
                      fleet.status === 'Alert' ? 'bg-status-danger/10 text-status-danger' :
                      'bg-outline-variant/20 text-on-surface-variant'
                    }`}>
                      {fleet.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium">{fleet.driver}</td>
                  <td className="px-6 py-4 text-on-surface-variant">{fleet.location}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${parseInt(fleet.fuel) < 20 ? 'bg-status-danger' : 'bg-primary'}`} 
                          style={{ width: fleet.fuel }}
                        ></div>
                      </div>
                      <span className="text-xs font-bold text-on-surface-variant">{fleet.fuel}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-outline hover:text-primary transition-colors p-2"><MoreVertical size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
