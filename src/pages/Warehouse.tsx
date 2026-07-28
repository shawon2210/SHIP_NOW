import { warehouseInventory } from '../data/mockData';
import { PackageSearch, Search, Filter, AlertTriangle, ArrowRight, Settings, Box, BarChart3, Map, TrendingUp, CheckCircle, Clock } from 'lucide-react';

export default function Warehouse() {
  return (
    <div className="flex-1 w-full max-w-[1440px] mx-auto p-4 lg:p-8 bg-[#F0F0F0] font-['Nunito_Sans']">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-[28px] font-bold text-on-surface leading-tight">Warehouse & Inventory</h1>
          <p className="text-[16px] text-on-surface-variant mt-1">Manage stock, capacity, and facility maps.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
          <button className="px-5 py-2.5 bg-white border border-[#E0E0E0] rounded-[8px] text-[14px] font-bold text-on-surface hover:bg-gray-50 transition-colors shadow-sm w-full sm:w-auto text-center">
            Download Report
          </button>
          <button className="px-5 py-2.5 bg-primary text-white rounded-[8px] text-[14px] font-bold hover:brightness-110 transition-colors shadow-sm w-full sm:w-auto text-center">
            New Allocation
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        
        {/* Capacity Usage Widget */}
        <div className="lg:col-span-8 bg-white p-6 rounded-[12px] border border-[#E0E0E0] shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[18px] font-bold text-on-surface">Capacity Usage</h2>
            <select className="bg-[#F8F9FA] border border-[#E0E0E0] rounded-[6px] px-3 py-1.5 text-[14px] font-medium outline-none text-on-surface focus:ring-1 focus:ring-primary">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          
          <div className="flex items-end gap-8 mb-6">
            <div>
              <div className="text-[36px] font-bold text-on-surface">82%</div>
              <div className="text-[14px] text-on-surface-variant">Total Capacity Used</div>
            </div>
            <div className="pb-2">
              <span className="flex items-center text-status-success text-[14px] font-bold bg-status-success/10 px-2 py-1 rounded">
                <TrendingUp size={16} className="mr-1" />
                +4.2% from last week
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <div className="flex justify-between text-[14px] font-bold mb-1">
                <span>Zone A (Electronics)</span>
                <span>95%</span>
              </div>
              <div className="w-full bg-[#F0F0F0] h-[8px] rounded-full overflow-hidden">
                <div className="bg-status-danger h-full rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="relative">
              <div className="flex justify-between text-[14px] font-bold mb-1">
                <span>Zone B (Apparel)</span>
                <span>72%</span>
              </div>
              <div className="w-full bg-[#F0F0F0] h-[8px] rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>
            <div className="relative">
              <div className="flex justify-between text-[14px] font-bold mb-1">
                <span>Zone C (Home Goods)</span>
                <span>45%</span>
              </div>
              <div className="w-full bg-[#F0F0F0] h-[8px] rounded-full overflow-hidden">
                <div className="bg-status-success h-full rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Package Status Widget */}
        <div className="lg:col-span-4 bg-white p-6 rounded-[12px] border border-[#E0E0E0] shadow-sm flex flex-col">
          <h2 className="text-[18px] font-bold text-on-surface mb-6">Package Status</h2>
          
          <div className="flex-1 flex flex-col justify-center gap-6">
            <div className="flex items-center justify-between p-4 bg-[#F8F9FA] rounded-[8px] border border-[#E0E0E0]">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 text-primary rounded-full">
                  <Box size={20} />
                </div>
                <div>
                  <div className="text-[14px] font-bold text-on-surface">Processing</div>
                  <div className="text-[12px] text-on-surface-variant">In staging area</div>
                </div>
              </div>
              <div className="text-[18px] font-bold">1,248</div>
            </div>

            <div className="flex items-center justify-between p-4 bg-[#F8F9FA] rounded-[8px] border border-[#E0E0E0]">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-status-success/10 text-status-success rounded-full">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <div className="text-[14px] font-bold text-on-surface">Ready to Ship</div>
                  <div className="text-[12px] text-on-surface-variant">Cleared for dispatch</div>
                </div>
              </div>
              <div className="text-[18px] font-bold">842</div>
            </div>

            <div className="flex items-center justify-between p-4 bg-[#F8F9FA] rounded-[8px] border border-[#E0E0E0]">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-status-warning/10 text-status-warning rounded-full">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-[14px] font-bold text-on-surface">Delayed</div>
                  <div className="text-[12px] text-on-surface-variant">Needs inspection</div>
                </div>
              </div>
              <div className="text-[18px] font-bold">45</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        {/* Warehouse Storage Table */}
        <div className="lg:col-span-8 bg-white rounded-[12px] border border-[#E0E0E0] overflow-hidden shadow-sm flex flex-col">
          <div className="p-6 border-b border-[#E0E0E0] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-[18px] font-bold text-on-surface">Warehouse Storage</h2>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={16} />
                <input 
                  type="text" 
                  placeholder="Search SKU or Zone..."
                  className="w-full pl-9 pr-4 py-2 bg-[#F8F9FA] border border-[#E0E0E0] rounded-[8px] text-[14px] focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>
              <button className="p-2 border border-[#E0E0E0] rounded-[8px] hover:bg-gray-50 transition-colors">
                <Filter size={18} className="text-on-surface-variant" />
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left min-w-[600px]">
              <thead className="bg-[#F8F9FA] border-b border-[#E0E0E0]">
                <tr>
                  <th className="px-6 py-4 text-[12px] font-bold text-on-surface-variant uppercase tracking-wider">SKU</th>
                  <th className="px-6 py-4 text-[12px] font-bold text-on-surface-variant uppercase tracking-wider">Category</th>
                  <th className="px-6 py-4 text-[12px] font-bold text-on-surface-variant uppercase tracking-wider">Zone</th>
                  <th className="px-6 py-4 text-[12px] font-bold text-on-surface-variant uppercase tracking-wider">Stock</th>
                  <th className="px-6 py-4 text-[12px] font-bold text-on-surface-variant uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E0E0E0]">
                {warehouseInventory.map((inv, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 text-[14px] font-bold text-primary">{inv.sku}</td>
                    <td className="px-6 py-4 text-[14px] font-medium text-on-surface">{inv.category}</td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 bg-[#F8F9FA] border border-[#E0E0E0] rounded-[4px] text-[12px] font-bold font-mono text-on-surface">{inv.zone}</span>
                    </td>
                    <td className="px-6 py-4 text-[14px] font-bold text-on-surface">{inv.stock}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-[4px] text-[11px] font-bold tracking-wider ${
                        inv.status === 'OPTIMAL' ? 'bg-status-success/10 text-status-success' :
                        inv.status === 'REORDER' ? 'bg-status-warning/10 text-status-warning' :
                        'bg-status-danger/10 text-status-danger'
                      }`}>
                        {inv.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Warehouse Map */}
        <div className="lg:col-span-4 bg-white p-6 rounded-[12px] border border-[#E0E0E0] shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[18px] font-bold text-on-surface flex items-center gap-2">
              <Map size={20} className="text-primary" />
              Warehouse Map
            </h2>
            <button className="text-[14px] font-bold text-primary hover:underline">View Full Map</button>
          </div>
          
          <div className="flex-1 bg-[#F8F9FA] border border-[#E0E0E0] rounded-[8px] p-4 relative min-h-[250px] overflow-hidden flex flex-col">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
              backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
            
            <div className="relative z-10 flex-1 grid grid-cols-2 gap-3">
              {/* Zone A */}
              <div className="col-span-2 bg-white border-2 border-status-danger/30 rounded flex flex-col items-center justify-center p-2 shadow-sm cursor-pointer hover:border-status-danger transition-colors group">
                <span className="text-[14px] font-bold text-on-surface group-hover:text-status-danger transition-colors">Zone A (95%)</span>
                <span className="text-[10px] text-on-surface-variant">Electronics</span>
              </div>
              
              {/* Zone B */}
              <div className="bg-white border-2 border-primary/30 rounded flex flex-col items-center justify-center p-2 shadow-sm cursor-pointer hover:border-primary transition-colors group">
                <span className="text-[14px] font-bold text-on-surface group-hover:text-primary transition-colors">Zone B (72%)</span>
                <span className="text-[10px] text-on-surface-variant">Apparel</span>
              </div>
              
              {/* Zone C */}
              <div className="bg-white border-2 border-status-success/30 rounded flex flex-col items-center justify-center p-2 shadow-sm cursor-pointer hover:border-status-success transition-colors group">
                <span className="text-[14px] font-bold text-on-surface group-hover:text-status-success transition-colors">Zone C (45%)</span>
                <span className="text-[10px] text-on-surface-variant">Home Goods</span>
              </div>

              {/* Staging */}
              <div className="col-span-2 bg-[#E0E0E0]/50 border-2 border-dashed border-[#A0A0A0] rounded flex items-center justify-center p-2 mt-2">
                <span className="text-[12px] font-bold text-on-surface-variant uppercase tracking-widest">Staging Area</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
