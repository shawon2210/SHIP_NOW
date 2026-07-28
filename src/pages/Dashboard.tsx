import { Link } from 'react-router-dom';
import { 
  Search, Plus, Minus, ChevronDown, MoreHorizontal, ArrowUpRight, Copy, Tag, 
  RotateCcw, CheckCircle2, FileX, MapPinOff, CloudLightning, Filter,
  Truck, BarChart2, DollarSign
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

const shipmentStatisticData = [
  { name: 'Jan', value: 1200 },
  { name: 'Feb', value: 1800 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2400 },
  { name: 'May', value: 3124 },
  { name: 'Jun', value: 2800 },
  { name: 'Jul', value: 2600 },
  { name: 'Aug', value: 2900 },
];

const profitData = [
  { name: 'Jan', revenue: 40000, cost: 24000 },
  { name: 'Feb', revenue: 30000, cost: 13980 },
  { name: 'Mar', revenue: 50000, cost: 30000 },
  { name: 'Apr', revenue: 60000, cost: 35000 },
  { name: 'May', revenue: 87524, cost: 45680 },
  { name: 'Jun', revenue: 70000, cost: 38000 },
  { name: 'Jul', revenue: 80000, cost: 43000 },
  { name: 'Aug', revenue: 65000, cost: 30000 },
];

const typeData = [
  { name: 'Road Freight', value: 46, count: '1,150 shipment', color: '#856DF3' },
  { name: 'Ocean Freight', value: 17, count: '425 shipments', color: '#E3DDFF' },
  { name: 'Air Freight', value: 28, count: '700 shipments', color: '#333333' },
  { name: 'Rail Freight', value: 9, count: '225 shipments', color: '#757575' },
];

const StatCard = ({ title, value, change, isPositive, icon: Icon }: any) => (
  <div className="bg-[#FEFEFE] rounded-[12px] p-[16px] border border-[#F0F0F0]/50 shadow-2xs flex items-center gap-4 flex-1">
    <div className="flex-1 flex flex-col gap-2.5">
      <h3 className="text-[12px] font-semibold text-[#757575] leading-tight">{title}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-[28px] font-bold text-[#333333] leading-[1.1]">{value}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className={`flex items-center justify-center gap-1 px-1.5 py-0.5 rounded-[10px] ${isPositive ? 'bg-[#D9F9E7] text-[#007837]' : 'bg-[#F04A4A]/10 text-[#F04A4A]'}`}>
          {isPositive ? <ArrowUpRight size={12} /> : <ArrowUpRight size={12} className="rotate-90" />}
          <span className="text-[10px] font-bold">{change}</span>
        </div>
        <span className="text-[10px] text-[#757575]">vs last month</span>
      </div>
    </div>
    <div className="w-[42px] h-[42px] bg-[#856DF3] text-white rounded-[8px] flex items-center justify-center shrink-0">
      <Icon size={22} />
    </div>
  </div>
);

export default function Dashboard() {
  return (
        <div className="flex flex-col gap-[20px] w-full min-w-0">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-[16px] text-[#757575] leading-tight">Hello shawon</h2>
          <h1 className="text-[24px] font-bold text-[#333333] leading-[1.1] mt-1">Good Morning</h1>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full md:w-auto mt-3 md:mt-0">
          <div className="flex items-center bg-[#FEFEFE] px-2.5 py-2 rounded-[8px] border border-[#F0F0F0] w-full md:w-[290px] shadow-2xs">
            <Search size={20} className="text-[#333333]" />
            <input type="text" placeholder="Search anything..." className="ml-2.5 bg-transparent outline-none text-[14px] text-[#757575] w-full" />
          </div>
          <Link 
            to="/shipments/new" 
            className="flex items-center justify-center gap-1 bg-[#333333] text-white px-4 py-2.5 rounded-[8px] h-[40px] whitespace-nowrap hover:bg-[#222222] transition-colors cursor-pointer"
          >
            <Plus size={18} />
            <span className="text-[14px] font-semibold">Add New Shipping</span>
          </Link>
        </div>
      </div>

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-[20px]">
        
        {/* Left Col (Stats + Charts) */}
        <div className="flex flex-col gap-[20px] flex-[2.8]">
          
          {/* Section Overview */}
          <div className="flex flex-col sm:flex-row gap-[20px]">
            <StatCard title="Active Shipments" value="1,284" change="+8.7%" isPositive={true} icon={Truck} />
            <StatCard title="Delivery Performance" value="94.3%" change="-1.2%" isPositive={false} icon={BarChart2} />
            <StatCard title="Revenue" value="$82,450" change="+12.4%" isPositive={true} icon={DollarSign} />
          </div>

          {/* Charts Row */}
          <div className="flex flex-col sm:flex-row gap-[20px]">
            
            {/* Shipment Statistic */}
            <div className="bg-[#FEFEFE] p-[16px] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs flex flex-col flex-1 h-auto min-h-[259px]">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[16px] font-semibold text-[#333333]">Shipment Statistic</h3>
                <button className="flex items-center gap-2 bg-[#F0F0F0] px-2.5 py-1.5 rounded-[8px] text-[12px] font-semibold text-[#333333] cursor-pointer">
                  Weekly <ChevronDown size={12} />
                </button>
              </div>
              <div className="flex items-center gap-1 mb-4">
                <span className="text-[24px] font-bold text-[#333333]">4,352</span>
                <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-[10px] bg-[#D9F9E7] text-[#007837] ml-2">
                  <ArrowUpRight size={12} />
                  <span className="text-[10px]">+8.7%</span>
                </div>
              </div>
              <div className="flex-1 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={shipmentStatisticData} barSize={24}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#757575', fontSize: 10}} dy={10} />
                    <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '8px', border: 'none', background: '#E3DDFF'}} />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {shipmentStatisticData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.name === 'May' ? '#856DF3' : '#F0F0F0'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Profit Summary */}
            <div className="bg-[#FEFEFE] p-[16px] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs flex flex-col flex-[1.3] h-auto min-h-[259px]">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[16px] font-semibold text-[#333333]">Profit Summary</h3>
                <button className="flex items-center gap-2 bg-[#F0F0F0] px-2.5 py-1.5 rounded-[8px] text-[12px] font-semibold text-[#333333] cursor-pointer">
                  Monthly <ChevronDown size={12} />
                </button>
              </div>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-1">
                  <span className="text-[24px] font-bold text-[#333333]">$624,550</span>
                  <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-[10px] bg-[#D9F9E7] text-[#007837] ml-2">
                    <ArrowUpRight size={12} />
                    <span className="text-[10px]">+5.6%</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-[2px] bg-[#856DF3]"></div>
                    <span className="text-[10px] text-[#757575]">Revenue</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-[2px] bg-[#333333]"></div>
                    <span className="text-[10px] text-[#757575]">Cost</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={profitData} barSize={12} barGap={4}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#757575', fontSize: 10}} dy={10} />
                    <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '8px', border: 'none', background: '#F0F0F0'}} />
                    <Bar dataKey="revenue" radius={[4, 4, 0, 0]}>
                      {profitData.map((entry, index) => (
                        <Cell key={`cell-rev-${index}`} fill={entry.name === 'May' ? '#856DF3' : '#E3DDFF'} />
                      ))}
                    </Bar>
                    <Bar dataKey="cost" radius={[4, 4, 0, 0]}>
                      {profitData.map((entry, index) => (
                        <Cell key={`cell-cost-${index}`} fill={entry.name === 'May' ? '#333333' : '#F0F0F0'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        </div>

        {/* Right Col (Shipment Type) */}
        <div className="bg-[#FEFEFE] p-[16px] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs flex flex-col flex-1 h-auto lg:h-[394px]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[16px] font-semibold text-[#333333]">Shipment Type</h3>
            <button className="w-7 h-7 flex items-center justify-center bg-[#F0F0F0] rounded-[8px] cursor-pointer">
              <MoreHorizontal size={16} className="text-[#333333]" />
            </button>
          </div>
          
          <div className="relative h-[217px] flex items-center justify-center mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={typeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={75}
                  outerRadius={105}
                  paddingAngle={0}
                  dataKey="value"
                  stroke="none"
                >
                  {typeData.map((entry, index) => (
                    <Cell key={`pie-cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-[12px] text-[#757575] font-normal">Total</span>
              <span className="text-[28px] font-bold text-[#333333] mt-[-2px]">2,500</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-y-4 gap-x-2">
            {typeData.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div 
                  className="w-8 h-8 rounded-[6px] flex items-center justify-center font-bold text-[10px] shrink-0"
                  style={{ backgroundColor: item.color, color: item.name === 'Ocean Freight' || item.name === 'Rail Freight' ? '#333333' : '#FEFEFE' }}
                >
                  {item.value}%
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-semibold text-[#333333] leading-tight">{item.name}</span>
                  <span className="text-[10px] text-[#757575] mt-[2px]">{item.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col lg:flex-row gap-[20px]">
        
        {/* Product Categories */}
        <div className="bg-[#FEFEFE] p-[16px] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs flex flex-col flex-1 h-auto lg:h-[443px]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[16px] font-semibold text-[#333333]">Product Categories</h3>
            <button className="w-7 h-7 flex items-center justify-center bg-[#F0F0F0] rounded-[8px] cursor-pointer">
              <MoreHorizontal size={16} className="text-[#333333]" />
            </button>
          </div>
          
          <div className="flex justify-between items-end mb-4">
            <span className="text-[14px] text-[#757575]">Total Products</span>
            <span className="text-[24px] font-bold text-[#333333]">1,000</span>
          </div>

          <div className="w-full h-[53px] rounded-[8px] flex overflow-hidden mb-6">
            <div style={{width: '24%'}} className="bg-[#856DF3]"></div>
            <div style={{width: '20%'}} className="bg-[#E3DDFF]"></div>
            <div style={{width: '18%'}} className="bg-[#333333]"></div>
            <div style={{width: '14%'}} className="bg-[#757575]"></div>
            <div style={{width: '12%'}} className="bg-[#E0E0E0]"></div>
            <div style={{width: '12%'}} className="bg-[#F0F0F0]"></div>
          </div>

          <div className="flex-1 flex flex-col justify-between">
            {[
              { name: 'Electronics', count: '240 products', percent: '24%', color: 'bg-[#856DF3]' },
              { name: 'Home & Kitchen', count: '200 products', percent: '20%', color: 'bg-[#E3DDFF]' },
              { name: 'Apparel', count: '180 products', percent: '18%', color: 'bg-[#333333]' },
              { name: 'Beauty & Health', count: '140 products', percent: '14%', color: 'bg-[#757575]' },
              { name: 'Sports & Outdoors', count: '120 products', percent: '12%', color: 'bg-[#E0E0E0]' },
              { name: 'Automotive', count: '120 products', percent: '12%', color: 'bg-[#F0F0F0]' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between py-1.5">
                <div className="flex items-center gap-2">
                  <div className={`w-2.5 h-2.5 rounded-[6px] ${item.color}`}></div>
                  <span className="text-[14px] font-semibold text-[#333333]">{item.name}</span>
                </div>
                <div className="flex items-center gap-2 bg-[#F0F0F0] px-2 py-1 rounded-[4px]">
                  <span className="text-[12px] text-[#757575]">{item.count}</span>
                  <div className="w-[1px] h-3 bg-[#E0E0E0]"></div>
                  <span className="text-[12px] font-bold text-[#333333] w-7 text-center">{item.percent}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Tracking */}
        <div className="bg-[#FEFEFE] p-[16px] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs flex flex-col flex-[1.3] h-auto lg:h-[443px] relative">
          <div className="bg-[#F0F0F0] rounded-[8px] flex-1 relative min-h-[200px] overflow-hidden mb-4">
             {/* Map Background SVG mock */}
             <div className="absolute inset-0 opacity-50 flex items-center justify-center overflow-hidden">
                <svg width="100%" height="100%" viewBox="0 0 445 230" preserveAspectRatio="xMidYMid slice">
                  <path d="M -50 150 Q 150 100 250 120 T 500 50" fill="none" stroke="#856DF3" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" />
                  <circle cx="-50" cy="150" r="8" fill="#856DF3" />
                  <circle cx="500" cy="50" r="8" fill="#856DF3" />
                  {/* Current pin */}
                  <g transform="translate(250, 120)">
                    <circle cx="0" cy="0" r="16" fill="#856DF3" opacity="0.3" />
                    <circle cx="0" cy="0" r="8" fill="#856DF3" />
                  </g>
                </svg>
             </div>
             
             {/* Map Controls */}
             <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
               <div className="bg-[#FEFEFE] rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex items-center px-3 py-2 w-[254px]">
                 <Search size={16} className="text-[#333333]" />
                 <input type="text" placeholder="Search shipping id..." className="ml-2 bg-transparent outline-none text-[12px] text-[#757575] w-full" />
               </div>
               <div className="bg-[#FEFEFE] rounded-[8px] shadow-[0_4px_8px_rgba(0,0,0,0.12)] flex flex-col">
                 <button className="p-2 border-b border-[#E1E1E1] hover:bg-gray-50 rounded-t-[8px]">
                   <Plus size={16} className="text-[#333333]" />
                 </button>
                 <button className="p-2 hover:bg-gray-50 rounded-b-[8px]">
                   <Minus size={16} className="text-[#333333]" />
                 </button>
               </div>
             </div>
          </div>
          
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="text-[14px] font-bold text-[#333333]">#SH8743921</span>
                <div className="flex items-center gap-2">
                  <span className="bg-[#E3DDFF] px-2 py-0.5 rounded-[18px] text-[10px] text-[#333333]">In Transit</span>
                  <span className="text-[10px] text-[#757575]">On Schedule</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#757575]">Courier</span>
                <span className="text-[12px] font-semibold text-[#333333]">Daniel Cooper</span>
                <span className="text-[10px] text-[#757575]">SkyLogix Express</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="w-full h-1 bg-[#E0E0E0] rounded-full relative">
                <div className="absolute top-0 left-0 h-full bg-[#856DF3] w-[60%]"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3.5 h-3.5 bg-[#856DF3] rounded-full border-2 border-white"></div>
                <div className="absolute top-1/2 left-[60%] -translate-y-1/2 w-6 h-6 bg-[#856DF3] rounded-full border-2 border-[#856DF3] flex items-center justify-center">
                  <Truck size={12} className="text-white" />
                </div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3.5 h-3.5 bg-[#F0F0F0] rounded-full border-2 border-[#E0E0E0]"></div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between mt-2 gap-2 sm:gap-0">
                <div className="flex flex-col">
                  <span className="text-[14px] font-semibold text-[#333333]">San Francisco, CA</span>
                  <span className="text-[10px] text-[#757575]">Mar 19, 2035 • 10:30 AM</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[14px] font-semibold text-[#333333]">New York, NY</span>
                  <span className="text-[10px] text-[#757575]">Mar 23, 2035 • 03:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shipment Alerts */}
        <div className="bg-[#FEFEFE] p-[16px] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs flex flex-col flex-[0.8] h-auto lg:h-[443px]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[16px] font-semibold text-[#333333]">Shipment Alerts</h3>
            <button className="w-7 h-7 flex items-center justify-center bg-[#F0F0F0] rounded-[8px] cursor-pointer">
              <MoreHorizontal size={16} className="text-[#333333]" />
            </button>
          </div>
          
          <div className="flex items-center gap-1 mb-6">
            <span className="text-[24px] font-bold text-[#333333]">12</span>
            <span className="text-[14px] text-[#757575] ml-1">Delays Detected</span>
          </div>

          <div className="flex gap-1 mb-6">
            <div className="flex-1 bg-[#E3DDFF] rounded-[8px] py-4 flex flex-col items-center justify-center gap-2">
              <span className="text-[24px] font-bold text-[#333333]">5</span>
              <span className="text-[10px] text-[#333333] text-center px-1 leading-tight">Customs Clearance Delay</span>
            </div>
            <div className="flex-1 bg-[#E3DDFF] rounded-[8px] py-4 flex flex-col items-center justify-center gap-2">
              <span className="text-[24px] font-bold text-[#333333]">4</span>
              <span className="text-[10px] text-[#333333] text-center px-1 leading-tight">Incorrect Address Provided</span>
            </div>
            <div className="flex-1 bg-[#E3DDFF] rounded-[8px] py-4 flex flex-col items-center justify-center gap-2">
              <span className="text-[24px] font-bold text-[#333333]">3</span>
              <span className="text-[10px] text-[#333333] text-center px-1 leading-tight">Weather-Related Hold</span>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            {[
              { icon: FileX, title: 'Customs Clearance Delay', id: '#SH8743921', type: 'Ocean Freight', time: '1h ago', color: 'bg-[#F0F0F0]' },
              { icon: MapPinOff, title: 'Incorrect Address Provided', id: '#SH8725810', type: 'Road Freight', time: '2h ago', color: 'bg-[#F0F0F0]' },
              { icon: CloudLightning, title: 'Weather-Related Hold', id: '#SH8790043', type: 'Air Freight', time: '3h ago', color: 'bg-[#F0F0F0]' },
            ].map((alert, idx) => (
              <div key={idx} className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-[8px] flex items-center justify-center shrink-0 ${alert.color}`}>
                    <alert.icon size={16} className="text-[#333333]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-semibold text-[#333333]">{alert.title}</span>
                    <div className="flex items-center gap-1.5 mt-[2px]">
                      <span className="text-[10px] font-bold text-[#856DF3]">{alert.id}</span>
                      <div className="w-1 h-1 bg-[#E0E0E0] rounded-full"></div>
                      <span className="text-[10px] text-[#757575]">{alert.type}</span>
                      <div className="w-1 h-1 bg-[#E0E0E0] rounded-full"></div>
                      <span className="text-[10px] text-[#757575]">{alert.time}</span>
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-[#757575]" />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row gap-[20px]">
        
        {/* Recent Shipments */}
        <div className="bg-[#FEFEFE] p-[16px] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs flex flex-col flex-[2.8] h-auto lg:h-[404px] overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
            <h3 className="text-[16px] font-bold text-[#333333]">Recent Shipments</h3>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="flex items-center bg-[#F0F0F0] px-2.5 py-1.5 rounded-[8px] flex-1 sm:w-[223px]">
                <Search size={16} className="text-[#333333]" />
                <input type="text" placeholder="Search by ID, Company..." className="ml-2 bg-transparent outline-none text-[12px] text-[#757575] w-full" />
              </div>
              <button className="w-[28px] h-[28px] flex items-center justify-center bg-[#F0F0F0] rounded-[8px] cursor-pointer">
                <Filter size={16} className="text-[#333333]" />
              </button>
              <button className="w-[28px] h-[28px] flex items-center justify-center bg-[#F0F0F0] rounded-[8px] cursor-pointer">
                <MoreHorizontal size={16} className="text-[#333333]" />
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto w-full custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#E3DDFF] rounded-[8px]">
                  <th className="py-3 px-3 rounded-l-[8px] w-10">
                    <div className="w-3 h-3 rounded-[3px] border border-[#E0E0E0] bg-[#F0F0F0]"></div>
                  </th>
                  <th className="py-3 px-2 text-[10px] font-normal text-[#333333]">Shipping ID</th>
                  <th className="py-3 px-2 text-[10px] font-normal text-[#333333]">Company</th>
                  <th className="py-3 px-2 text-[10px] font-normal text-[#333333]">Carriers</th>
                  <th className="py-3 px-2 text-[10px] font-normal text-[#333333]">Route</th>
                  <th className="py-3 px-2 text-[10px] font-normal text-[#333333]">Shipping Date</th>
                  <th className="py-3 px-2 text-[10px] font-normal text-[#333333] rounded-r-[8px]">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: '#SH9283746', company: 'TechGear Inc.', cat: 'Electronics', carrier: 'FedEx', route: 'Los Angeles, CA → Chicago, IL', date: 'Mar 20, 2035', status: 'In Transit', statusColor: 'bg-[#E0E0E0] text-[#333333]' },
                  { id: '#SH9182635', company: 'StyleHub Co.', cat: 'Apparel', carrier: 'DHL', route: 'New York, NY → Atlanta, GA', date: 'Mar 19, 2035', status: 'Out for Delivery', statusColor: 'bg-[#E3DDFF] text-[#856DF3]' },
                  { id: '#SH9037821', company: 'FreshNest', cat: 'Home & Kitchen', carrier: 'UPS', route: 'Dallas, TX → Miami, FL', date: 'Mar 18, 2035', status: 'Delivered', statusColor: 'bg-[#D9F9E7] text-[#007837]' },
                  { id: '#SH9374652', company: 'FitPlus Gear', cat: 'Sports & Outdoors', carrier: 'USPS', route: 'Seattle, WA → Denver, CO', date: 'Mar 21, 2035', status: 'Processing', statusColor: 'bg-[#E3EDFF] text-[#235BC2]' },
                  { id: '#SH9457830', company: 'AutoParts Pro', cat: 'Automotive', carrier: 'Aramex', route: 'Detroit, MI → San Diego, CA', date: 'Mar 20, 2035', status: 'In Transit', statusColor: 'bg-[#E0E0E0] text-[#333333]' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-[#E0E0E0] last:border-0 hover:bg-gray-50/50 transition-colors">
                    <td className="py-3.5 px-3">
                      <div className="w-3 h-3 rounded-[3px] border border-[#E0E0E0] bg-[#F0F0F0]"></div>
                    </td>
                    <td className="py-3.5 px-2 font-semibold text-[#856DF3] text-[12px]">{row.id}</td>
                    <td className="py-3.5 px-2">
                      <p className="text-[12px] text-[#333333]">{row.company}</p>
                      <p className="text-[10px] text-[#757575]">{row.cat}</p>
                    </td>
                    <td className="py-3.5 px-2 text-[12px] text-[#333333]">{row.carrier}</td>
                    <td className="py-3.5 px-2 text-[12px] text-[#333333]">{row.route}</td>
                    <td className="py-3.5 px-2 text-[12px] text-[#333333]">{row.date}</td>
                    <td className="py-3.5 px-2">
                      <span className={`px-2 py-0.5 rounded-[20px] text-[11px] font-semibold inline-block ${row.statusColor}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Shipping Logs */}
        <div className="bg-[#FEFEFE] p-[16px] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs flex flex-col flex-1 h-auto lg:h-[404px]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[16px] font-bold text-[#333333]">Shipping Logs</h3>
            <button className="w-7 h-7 flex items-center justify-center bg-[#F0F0F0] rounded-[8px] cursor-pointer">
              <MoreHorizontal size={16} className="text-[#333333]" />
            </button>
          </div>
          
          <div className="flex-1 px-1">
            {[
              { icon: Copy, color: 'bg-[#E3DDFF] text-[#333333]', text: 'User @TechGuru99 submitted a bulk shipment request', time: '12:00 PM' },
              { icon: Tag, color: 'bg-[#E0E0E0] text-[#333333]', text: 'Customer Support @SupportKen added a priority tag to Order ID 77889JKL', time: '11:30 AM' },
              { icon: RotateCcw, color: 'bg-[#E3DDFF] text-[#333333]', text: 'User @SallyMae88 initiated a return process for Order ID 44556GHI', time: '11:00 AM' },
              { icon: CheckCircle2, color: 'bg-[#E0E0E0] text-[#333333]', text: 'Administrator @AdminLisa resolved a delivery issue for Order ID 12345XYZ', time: '10:15 AM' },
            ].map((activity, idx, arr) => (
              <div key={idx} className="flex gap-3 relative">
                {idx !== arr.length - 1 && (
                  <div className="absolute left-[17px] top-9 bottom-[-4px] w-[1px] bg-[#E0E0E0]"></div>
                )}
                <div className={`w-9 h-9 rounded-[24px] flex items-center justify-center shrink-0 z-10 ${activity.color} shadow-sm`}>
                  <activity.icon size={16} />
                </div>
                <div className="pb-6 pt-0.5">
                  <p className="text-[14px] text-[#333333] leading-tight">
                    {activity.text}
                  </p>
                  <p className="text-[10px] text-[#757575] mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-center py-2 mt-4 px-2 gap-4">
        <span className="text-[12px] font-semibold text-[#333333]">© 2025 Shipnow</span>
        <div className="flex items-center gap-6">
          <a href="#" className="text-[12px] text-[#757575] hover:text-[#333333]">Privacy Policy</a>
          <a href="#" className="text-[12px] text-[#757575] hover:text-[#333333]">Terms and conditions</a>
          <a href="#" className="text-[12px] text-[#757575] hover:text-[#333333]">Contact</a>
        </div>
      </div>

    </div>
  );
}
