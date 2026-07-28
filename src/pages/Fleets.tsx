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
    <div className="flex flex-col gap-[20px] w-full min-w-0 pb-[40px]">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-[14px] text-[#757575] leading-tight mb-1">
            Operations / <span className="text-[#856DF3] font-semibold">Fleets</span>
          </h2>
          <h1 className="text-[24px] font-bold text-[#333333] leading-[1.1]">Fleet Management</h1>
        </div>
        <button className="flex items-center justify-center gap-2 bg-[#333333] text-white px-4 py-2.5 rounded-[8px] h-[40px] hover:bg-[#222222] transition-colors cursor-pointer text-[14px] font-semibold shadow-2xs w-full md:w-auto">
          <Plus size={18} />
          Add Vehicle
        </button>
      </div>

      {/* Fleet Overview Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
        {[
          { label: 'Total Vehicles', value: '124', icon: Truck, color: '#856DF3' },
          { label: 'Active on Route', value: '86', icon: Navigation, color: '#007837' },
          { label: 'In Maintenance', value: '12', icon: AlertTriangle, color: '#B76E00' },
          { label: 'Available', value: '26', icon: CheckCircle, color: '#757575' },
        ].map((stat, i) => (
          <div key={i} className="bg-[#FEFEFE] rounded-[12px] p-[16px] border border-[#F0F0F0]/50 shadow-2xs flex items-center gap-4">
            <div className="w-[42px] h-[42px] rounded-[8px] flex items-center justify-center shrink-0 text-white" style={{ backgroundColor: stat.color }}>
              <stat.icon size={22} />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[12px] font-semibold text-[#757575] leading-tight">{stat.label}</span>
              <span className="text-[24px] font-bold text-[#333333] leading-none mt-1">{stat.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Vehicle Directory Table Card */}
      <div className="bg-[#FEFEFE] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs overflow-hidden">
        <div className="p-[16px] border-b border-[#F0F0F0] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h3 className="text-[16px] font-semibold text-[#333333]">Vehicle Directory</h3>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="flex items-center bg-[#FEFEFE] px-3 py-2 rounded-[8px] border border-[#F0F0F0] w-full sm:w-[260px] shadow-2xs">
              <Search size={18} className="text-[#757575]" />
              <input 
                type="text" 
                placeholder="Search fleet..."
                className="ml-2 bg-transparent outline-none text-[14px] text-[#333333] w-full placeholder-[#757575]"
              />
            </div>
            <button className="p-2.5 border border-[#F0F0F0] bg-[#FEFEFE] rounded-[8px] hover:bg-[#F5F5F5] transition-colors cursor-pointer shrink-0">
              <Filter size={18} className="text-[#333333]" />
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap">
            <thead className="bg-[#F5F5F5] text-[11px] uppercase font-bold text-[#757575] border-b border-[#F0F0F0]">
              <tr>
                <th className="px-6 py-3.5">Vehicle ID</th>
                <th className="px-6 py-3.5">Model & Type</th>
                <th className="px-6 py-3.5">Status</th>
                <th className="px-6 py-3.5">Assigned Driver</th>
                <th className="px-6 py-3.5">Location</th>
                <th className="px-6 py-3.5">Fuel Level</th>
                <th className="px-6 py-3.5"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0F0F0] text-[13px]">
              {mockFleets.map(fleet => (
                <tr key={fleet.id} className="hover:bg-[#F5F5F5]/60 transition-colors">
                  <td className="px-6 py-4 font-bold text-[#856DF3]">{fleet.id}</td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-[#333333]">{fleet.name}</p>
                    <p className="text-[11px] text-[#757575]">{fleet.type}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-[10px] text-[11px] font-bold ${
                      fleet.status === 'Active' ? 'bg-[#D9F9E7] text-[#007837]' :
                      fleet.status === 'Maintenance' ? 'bg-[#FFF3D6] text-[#B76E00]' :
                      fleet.status === 'Alert' ? 'bg-[#F04A4A]/10 text-[#F04A4A]' :
                      'bg-[#F0F0F0] text-[#757575]'
                    }`}>
                      {fleet.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-[#333333]">{fleet.driver}</td>
                  <td className="px-6 py-4 text-[#757575]">{fleet.location}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-[#F0F0F0] rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${parseInt(fleet.fuel) < 20 ? 'bg-[#F04A4A]' : 'bg-[#856DF3]'}`} 
                          style={{ width: fleet.fuel }}
                        />
                      </div>
                      <span className="text-[12px] font-semibold text-[#333333]">{fleet.fuel}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-[#757575] hover:text-[#333333] p-1.5 rounded-[6px] hover:bg-[#F0F0F0] transition-colors cursor-pointer">
                      <MoreVertical size={16} />
                    </button>
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
