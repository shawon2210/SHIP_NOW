import { useState, useEffect, useCallback } from 'react';
import {
  ArrowUpRight, ArrowDownRight, TrendingUp, Package, Truck, DollarSign,
  Clock, MapPin, BarChart2, Activity, ChevronDown, MoreHorizontal,
  RefreshCw, Globe, Users, Fuel, ShieldCheck, AlertTriangle
} from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, CartesianGrid
} from 'recharts';

/* ─── Simulated real-time data generators ─── */
const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRevenueData = () => [
  { name: 'Jan', revenue: rand(38000, 45000), cost: rand(20000, 28000) },
  { name: 'Feb', revenue: rand(30000, 40000), cost: rand(15000, 22000) },
  { name: 'Mar', revenue: rand(45000, 55000), cost: rand(25000, 32000) },
  { name: 'Apr', revenue: rand(50000, 62000), cost: rand(28000, 36000) },
  { name: 'May', revenue: rand(70000, 92000), cost: rand(35000, 50000) },
  { name: 'Jun', revenue: rand(60000, 78000), cost: rand(30000, 42000) },
  { name: 'Jul', revenue: rand(68000, 85000), cost: rand(33000, 46000) },
  { name: 'Aug', revenue: rand(55000, 72000), cost: rand(27000, 38000) },
];

const generateDeliveryPerformance = () => [
  { name: 'Mon', onTime: rand(85, 98), late: rand(2, 15) },
  { name: 'Tue', onTime: rand(88, 97), late: rand(3, 12) },
  { name: 'Wed', onTime: rand(82, 96), late: rand(4, 18) },
  { name: 'Thu', onTime: rand(90, 99), late: rand(1, 10) },
  { name: 'Fri', onTime: rand(87, 95), late: rand(5, 13) },
  { name: 'Sat', onTime: rand(80, 94), late: rand(6, 20) },
  { name: 'Sun', onTime: rand(75, 92), late: rand(8, 25) },
];

const generateShipmentVolume = () => [
  { name: '6AM', volume: rand(20, 80) },
  { name: '8AM', volume: rand(80, 200) },
  { name: '10AM', volume: rand(150, 320) },
  { name: '12PM', volume: rand(200, 400) },
  { name: '2PM', volume: rand(250, 450) },
  { name: '4PM', volume: rand(180, 350) },
  { name: '6PM', volume: rand(100, 250) },
  { name: '8PM', volume: rand(50, 150) },
];

const generateRegionalData = () => [
  { name: 'North America', value: rand(32, 42), color: '#856DF3' },
  { name: 'Europe', value: rand(18, 28), color: '#E3DDFF' },
  { name: 'Asia Pacific', value: rand(15, 25), color: '#333333' },
  { name: 'Latin America', value: rand(8, 15), color: '#757575' },
  { name: 'Middle East', value: rand(4, 10), color: '#D9F9E7' },
];

const generateCarrierPerformance = () => [
  { name: 'FedEx', deliveryRate: rand(92, 99), avgDays: (rand(15, 35) / 10).toFixed(1), volume: rand(800, 1500), score: rand(88, 98) },
  { name: 'DHL', deliveryRate: rand(90, 97), avgDays: (rand(18, 40) / 10).toFixed(1), volume: rand(600, 1200), score: rand(85, 96) },
  { name: 'UPS', deliveryRate: rand(91, 98), avgDays: (rand(16, 38) / 10).toFixed(1), volume: rand(700, 1300), score: rand(87, 97) },
  { name: 'USPS', deliveryRate: rand(85, 95), avgDays: (rand(20, 45) / 10).toFixed(1), volume: rand(400, 900), score: rand(80, 93) },
  { name: 'Aramex', deliveryRate: rand(88, 96), avgDays: (rand(22, 48) / 10).toFixed(1), volume: rand(300, 700), score: rand(82, 94) },
];

const generateTopRoutes = () => [
  { from: 'Los Angeles, CA', to: 'New York, NY', shipments: rand(180, 350), avgTime: `${rand(2, 4)}d ${rand(2, 18)}h`, trend: rand(-5, 15) },
  { from: 'Chicago, IL', to: 'Miami, FL', shipments: rand(120, 280), avgTime: `${rand(1, 3)}d ${rand(4, 20)}h`, trend: rand(-3, 12) },
  { from: 'Seattle, WA', to: 'Dallas, TX', shipments: rand(100, 220), avgTime: `${rand(2, 5)}d ${rand(1, 16)}h`, trend: rand(-8, 10) },
  { from: 'San Francisco, CA', to: 'Atlanta, GA', shipments: rand(80, 200), avgTime: `${rand(2, 4)}d ${rand(5, 22)}h`, trend: rand(-4, 14) },
  { from: 'Denver, CO', to: 'Detroit, MI', shipments: rand(60, 170), avgTime: `${rand(1, 3)}d ${rand(8, 23)}h`, trend: rand(-6, 11) },
];

/* ─── Stat Card ─── */
const StatCard = ({ title, value, change, isPositive, icon: Icon, iconBg }: any) => (
  <div className="bg-[#FEFEFE] rounded-[12px] p-3 sm:p-4 border border-[#F0F0F0]/50 shadow-2xs flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
    <div className="flex-1 flex flex-col gap-1 sm:gap-2 min-w-0">
      <h3 className="text-[11px] sm:text-[12px] font-semibold text-[#757575] leading-tight truncate">{title}</h3>
      <span className="text-[20px] sm:text-[26px] font-bold text-[#333333] leading-[1.1]">{value}</span>
      <div className="flex items-center gap-1.5">
        <div className={`flex items-center gap-0.5 px-1.5 py-0.5 rounded-[10px] ${isPositive ? 'bg-[#D9F9E7] text-[#007837]' : 'bg-[#F04A4A]/10 text-[#F04A4A]'}`}>
          {isPositive ? <ArrowUpRight size={11} /> : <ArrowDownRight size={11} />}
          <span className="text-[10px] font-bold">{change}</span>
        </div>
        <span className="text-[10px] text-[#757575] hidden sm:inline">vs last period</span>
      </div>
    </div>
    <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-[10px] flex items-center justify-center shrink-0 ${iconBg || 'bg-[#856DF3] text-white'}`}>
      <Icon size={20} />
    </div>
  </div>
);

/* ─── Main Analytics Component ─── */
export default function Analytics() {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [revenueData, setRevenueData] = useState(generateRevenueData);
  const [deliveryData, setDeliveryData] = useState(generateDeliveryPerformance);
  const [volumeData, setVolumeData] = useState(generateShipmentVolume);
  const [regionalData, setRegionalData] = useState(generateRegionalData);
  const [carrierData, setCarrierData] = useState(generateCarrierPerformance);
  const [topRoutes, setTopRoutes] = useState(generateTopRoutes);
  const [liveMetrics, setLiveMetrics] = useState({
    activeShipments: rand(1200, 1500),
    deliveryRate: (rand(920, 980) / 10).toFixed(1),
    totalRevenue: rand(75000, 95000),
    avgDeliveryTime: (rand(25, 42) / 10).toFixed(1),
    fuelEfficiency: (rand(78, 95) / 10).toFixed(1) + ' mpg',
    fleetUtilization: rand(72, 94),
    customerSatisfaction: (rand(43, 49) / 10).toFixed(1),
    onTimePickups: rand(88, 98),
  });
  const [timePeriod, setTimePeriod] = useState('Monthly');

  const refreshData = useCallback(() => {
    setRevenueData(generateRevenueData());
    setDeliveryData(generateDeliveryPerformance());
    setVolumeData(generateShipmentVolume());
    setRegionalData(generateRegionalData());
    setCarrierData(generateCarrierPerformance());
    setTopRoutes(generateTopRoutes());
    setLiveMetrics({
      activeShipments: rand(1200, 1500),
      deliveryRate: (rand(920, 980) / 10).toFixed(1),
      totalRevenue: rand(75000, 95000),
      avgDeliveryTime: (rand(25, 42) / 10).toFixed(1),
      fuelEfficiency: (rand(78, 95) / 10).toFixed(1) + ' mpg',
      fleetUtilization: rand(72, 94),
      customerSatisfaction: (rand(43, 49) / 10).toFixed(1),
      onTimePickups: rand(88, 98),
    });
    setLastUpdated(new Date());
  }, []);

  // Auto-refresh every 8 seconds
  useEffect(() => {
    const interval = setInterval(refreshData, 8000);
    return () => clearInterval(interval);
  }, [refreshData]);

  const totalRevenue = revenueData.reduce((s, d) => s + d.revenue, 0);
  const totalCost = revenueData.reduce((s, d) => s + d.cost, 0);
  const profit = totalRevenue - totalCost;
  const profitMargin = ((profit / totalRevenue) * 100).toFixed(1);

  return (
    <div className="flex flex-col gap-[12px] sm:gap-[16px] lg:gap-[20px] w-full min-w-0 pt-[20px] sm:pt-[30px] lg:pt-[40px]">

      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-4">
        <div>
          <div className="flex items-center gap-1 text-[11px] mb-1">
            <span className="text-[#856DF3]">Dashboard</span>
            <span className="text-[#757575] mx-1">/</span>
            <span className="text-[#333333]">Analytics</span>
          </div>
          <h1 className="text-[20px] sm:text-[24px] font-bold text-[#333333] leading-[1.1]">Analytics Overview</h1>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-[#757575]">
            <Activity size={12} className="text-[#007837] animate-pulse" />
            <span>Live • Updated {lastUpdated.toLocaleTimeString()}</span>
          </div>
          <button onClick={refreshData} className="flex items-center gap-1.5 bg-[#FEFEFE] border border-[#F0F0F0] px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-[8px] text-[11px] sm:text-[12px] font-semibold text-[#333333] hover:bg-[#F0F0F0] transition-colors cursor-pointer shadow-2xs">
            <RefreshCw size={14} />
            Refresh
          </button>
          <button className="flex items-center gap-1.5 bg-[#333333] text-white px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-[8px] text-[11px] sm:text-[12px] font-semibold hover:bg-[#222222] transition-colors cursor-pointer">
            <ChevronDown size={14} />
            {timePeriod}
          </button>
        </div>
      </div>

      {/* ── KPI Row ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[10px] sm:gap-[16px] lg:gap-[20px]">
        <StatCard title="Active Shipments" value={liveMetrics.activeShipments.toLocaleString()} change="+8.7%" isPositive={true} icon={Package} iconBg="bg-[#856DF3] text-white" />
        <StatCard title="Delivery Rate" value={`${liveMetrics.deliveryRate}%`} change="+2.3%" isPositive={true} icon={ShieldCheck} iconBg="bg-[#D9F9E7] text-[#007837]" />
        <StatCard title="Total Revenue" value={`$${(liveMetrics.totalRevenue / 1000).toFixed(0)}K`} change="+12.4%" isPositive={true} icon={DollarSign} iconBg="bg-[#E3DDFF] text-[#856DF3]" />
        <StatCard title="Avg Delivery" value={`${liveMetrics.avgDeliveryTime} days`} change="-0.3d" isPositive={true} icon={Clock} iconBg="bg-[#333333] text-white" />
      </div>

      {/* ── Secondary KPIs ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[10px] sm:gap-[16px] lg:gap-[20px]">
        <div className="bg-[#FEFEFE] rounded-[12px] p-3 sm:p-4 border border-[#F0F0F0]/50 shadow-2xs flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-[10px] bg-[#E3DDFF] text-[#856DF3] flex items-center justify-center shrink-0"><Fuel size={18} /></div>
          <div className="min-w-0">
            <p className="text-[10px] sm:text-[11px] text-[#757575] truncate">Fuel Efficiency</p>
            <p className="text-[16px] sm:text-[18px] font-bold text-[#333333]">{liveMetrics.fuelEfficiency}</p>
          </div>
        </div>
        <div className="bg-[#FEFEFE] rounded-[12px] p-3 sm:p-4 border border-[#F0F0F0]/50 shadow-2xs flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-[10px] bg-[#D9F9E7] text-[#007837] flex items-center justify-center shrink-0"><Truck size={18} /></div>
          <div className="min-w-0">
            <p className="text-[10px] sm:text-[11px] text-[#757575] truncate">Fleet Utilization</p>
            <p className="text-[16px] sm:text-[18px] font-bold text-[#333333]">{liveMetrics.fleetUtilization}%</p>
          </div>
        </div>
        <div className="bg-[#FEFEFE] rounded-[12px] p-3 sm:p-4 border border-[#F0F0F0]/50 shadow-2xs flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-[10px] bg-[#FFF3D6] text-[#C68A00] flex items-center justify-center shrink-0"><Users size={18} /></div>
          <div className="min-w-0">
            <p className="text-[10px] sm:text-[11px] text-[#757575] truncate">Customer Rating</p>
            <p className="text-[16px] sm:text-[18px] font-bold text-[#333333]">{liveMetrics.customerSatisfaction}/5.0</p>
          </div>
        </div>
        <div className="bg-[#FEFEFE] rounded-[12px] p-3 sm:p-4 border border-[#F0F0F0]/50 shadow-2xs flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-[10px] bg-[#F0F0F0] text-[#333333] flex items-center justify-center shrink-0"><MapPin size={18} /></div>
          <div className="min-w-0">
            <p className="text-[10px] sm:text-[11px] text-[#757575] truncate">On-Time Pickups</p>
            <p className="text-[16px] sm:text-[18px] font-bold text-[#333333]">{liveMetrics.onTimePickups}%</p>
          </div>
        </div>
      </div>

      {/* ── Row 1: Revenue & Cost + Delivery Performance ── */}
      <div className="flex flex-col xl:flex-row gap-[12px] sm:gap-[16px] lg:gap-[20px]">
        
        {/* Revenue & Cost Chart */}
        <div className="bg-[#FEFEFE] p-3 sm:p-[16px] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs flex flex-col flex-[1.6] min-w-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-4 gap-2">
            <div>
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#333333]">Revenue vs Cost</h3>
              <div className="flex items-center gap-3 mt-1">
                <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#856DF3]"></div><span className="text-[10px] text-[#757575]">Revenue</span></div>
                <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#E3DDFF]"></div><span className="text-[10px] text-[#757575]">Cost</span></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#D9F9E7] px-2 py-0.5 rounded-[10px] flex items-center gap-1">
                <TrendingUp size={11} className="text-[#007837]" />
                <span className="text-[10px] font-bold text-[#007837]">Profit: ${(profit / 1000).toFixed(0)}K ({profitMargin}%)</span>
              </div>
              <button className="w-7 h-7 flex items-center justify-center bg-[#F0F0F0] rounded-[8px] cursor-pointer">
                <MoreHorizontal size={14} className="text-[#333333]" />
              </button>
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-3 sm:mb-4">
            <span className="text-[20px] sm:text-[24px] font-bold text-[#333333]">${(totalRevenue / 1000).toFixed(0)}K</span>
            <span className="text-[11px] text-[#757575]">Total Revenue</span>
          </div>
          <div className="flex-1 w-full min-h-[200px] sm:min-h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData} barSize={16} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#757575', fontSize: 10 }} dy={8} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#757575', fontSize: 10 }} tickFormatter={(v: number) => `$${v / 1000}K`} width={48} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', background: '#FEFEFE', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} formatter={(v: number) => [`$${v.toLocaleString()}`, '']} />
                <Bar dataKey="revenue" fill="#856DF3" radius={[4, 4, 0, 0]} />
                <Bar dataKey="cost" fill="#E3DDFF" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Delivery Performance */}
        <div className="bg-[#FEFEFE] p-3 sm:p-[16px] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs flex flex-col flex-1 min-w-0">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#333333]">Delivery Performance</h3>
            <button className="w-7 h-7 flex items-center justify-center bg-[#F0F0F0] rounded-[8px] cursor-pointer">
              <MoreHorizontal size={14} className="text-[#333333]" />
            </button>
          </div>
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#007837]"></div><span className="text-[10px] text-[#757575]">On-Time</span></div>
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#F04A4A]"></div><span className="text-[10px] text-[#757575]">Late</span></div>
          </div>
          <div className="flex-1 w-full min-h-[200px] sm:min-h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={deliveryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#757575', fontSize: 10 }} dy={8} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#757575', fontSize: 10 }} tickFormatter={(v: number) => `${v}%`} width={36} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', background: '#FEFEFE', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                <defs>
                  <linearGradient id="onTimeGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#007837" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="#007837" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="lateGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F04A4A" stopOpacity={0.15} />
                    <stop offset="100%" stopColor="#F04A4A" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="onTime" stroke="#007837" strokeWidth={2} fill="url(#onTimeGrad)" />
                <Area type="monotone" dataKey="late" stroke="#F04A4A" strokeWidth={2} fill="url(#lateGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* ── Row 2: Shipment Volume + Regional + Alerts Summary ── */}
      <div className="flex flex-col lg:flex-row gap-[12px] sm:gap-[16px] lg:gap-[20px]">

        {/* Real-Time Shipment Volume */}
        <div className="bg-[#FEFEFE] p-3 sm:p-[16px] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs flex flex-col flex-1 min-w-0">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <div>
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#333333]">Live Shipment Volume</h3>
              <p className="text-[10px] sm:text-[11px] text-[#757575] mt-0.5">Hourly distribution today</p>
            </div>
            <div className="flex items-center gap-1 bg-[#D9F9E7] px-2 py-0.5 rounded-[10px]">
              <Activity size={11} className="text-[#007837] animate-pulse" />
              <span className="text-[10px] font-bold text-[#007837]">Live</span>
            </div>
          </div>
          <div className="flex-1 w-full min-h-[180px] sm:min-h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={volumeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#757575', fontSize: 10 }} dy={8} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#757575', fontSize: 10 }} width={32} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', background: '#FEFEFE', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                <Line type="monotone" dataKey="volume" stroke="#856DF3" strokeWidth={3} dot={{ r: 4, fill: '#856DF3', stroke: '#FEFEFE', strokeWidth: 2 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Regional Distribution */}
        <div className="bg-[#FEFEFE] p-3 sm:p-[16px] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs flex flex-col flex-[0.8] min-w-0">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#333333]">Regional Split</h3>
            <button className="w-7 h-7 flex items-center justify-center bg-[#F0F0F0] rounded-[8px] cursor-pointer">
              <Globe size={14} className="text-[#333333]" />
            </button>
          </div>
          <div className="relative h-[160px] sm:h-[180px] flex items-center justify-center mb-3">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={regionalData} cx="50%" cy="50%" innerRadius={55} outerRadius={78} paddingAngle={2} dataKey="value" stroke="none">
                  {regionalData.map((entry, i) => (<Cell key={i} fill={entry.color} />))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-[10px] text-[#757575]">Total</span>
              <span className="text-[22px] sm:text-[26px] font-bold text-[#333333]">{regionalData.reduce((s, d) => s + d.value, 0)}%</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:gap-2.5">
            {regionalData.map((r, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: r.color }}></div>
                  <span className="text-[11px] sm:text-[12px] text-[#333333] truncate">{r.name}</span>
                </div>
                <span className="text-[11px] sm:text-[12px] font-bold text-[#333333] shrink-0">{r.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts Summary */}
        <div className="bg-[#FEFEFE] p-3 sm:p-[16px] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs flex flex-col flex-[0.6] min-w-0">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#333333]">Alert Summary</h3>
            <div className="w-5 h-5 rounded-full bg-[#F04A4A] text-white flex items-center justify-center text-[10px] font-bold">!</div>
          </div>
          {[
            { label: 'Delayed Shipments', count: rand(5, 15), icon: Clock, color: 'bg-[#F04A4A]/10 text-[#F04A4A]' },
            { label: 'Address Issues', count: rand(2, 8), icon: MapPin, color: 'bg-[#FFF3D6] text-[#C68A00]' },
            { label: 'Customs Holds', count: rand(1, 6), icon: AlertTriangle, color: 'bg-[#E3DDFF] text-[#856DF3]' },
            { label: 'Fleet Warnings', count: rand(0, 4), icon: Truck, color: 'bg-[#F0F0F0] text-[#333333]' },
          ].map((alert, i) => (
            <div key={i} className="flex items-center justify-between py-2 sm:py-2.5 border-b border-[#F0F0F0] last:border-0">
              <div className="flex items-center gap-2.5">
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-[8px] flex items-center justify-center shrink-0 ${alert.color}`}>
                  <alert.icon size={14} />
                </div>
                <span className="text-[11px] sm:text-[12px] text-[#333333]">{alert.label}</span>
              </div>
              <span className="text-[14px] sm:text-[16px] font-bold text-[#333333]">{alert.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Row 3: Carrier Performance Table + Top Routes ── */}
      <div className="flex flex-col xl:flex-row gap-[12px] sm:gap-[16px] lg:gap-[20px]">

        {/* Carrier Performance Table */}
        <div className="bg-[#FEFEFE] p-3 sm:p-[16px] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs flex flex-col flex-[1.6] min-w-0">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#333333]">Carrier Performance</h3>
            <button className="flex items-center gap-1.5 bg-[#F0F0F0] px-2.5 py-1 rounded-[8px] text-[11px] sm:text-[12px] font-semibold text-[#333333] cursor-pointer">
              This Month <ChevronDown size={12} />
            </button>
          </div>
          <div className="overflow-x-auto w-full custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[540px]">
              <thead>
                <tr className="bg-[#E3DDFF]/60 rounded-[8px]">
                  <th className="py-2.5 px-3 text-[10px] font-semibold text-[#333333] rounded-l-[8px]">Carrier</th>
                  <th className="py-2.5 px-3 text-[10px] font-semibold text-[#333333]">Delivery Rate</th>
                  <th className="py-2.5 px-3 text-[10px] font-semibold text-[#333333]">Avg Days</th>
                  <th className="py-2.5 px-3 text-[10px] font-semibold text-[#333333]">Volume</th>
                  <th className="py-2.5 px-3 text-[10px] font-semibold text-[#333333] rounded-r-[8px]">Score</th>
                </tr>
              </thead>
              <tbody>
                {carrierData.map((c, i) => (
                  <tr key={i} className="border-b border-[#F0F0F0] last:border-0 hover:bg-[#F9F9F9] transition-colors">
                    <td className="py-2.5 sm:py-3 px-3">
                      <span className="text-[12px] sm:text-[13px] font-semibold text-[#333333]">{c.name}</span>
                    </td>
                    <td className="py-2.5 sm:py-3 px-3">
                      <div className="flex items-center gap-2">
                        <div className="w-[60px] sm:w-[80px] h-[6px] bg-[#F0F0F0] rounded-full overflow-hidden">
                          <div className="h-full rounded-full bg-[#856DF3]" style={{ width: `${c.deliveryRate}%` }}></div>
                        </div>
                        <span className="text-[11px] sm:text-[12px] font-semibold text-[#333333]">{c.deliveryRate}%</span>
                      </div>
                    </td>
                    <td className="py-2.5 sm:py-3 px-3 text-[11px] sm:text-[12px] text-[#333333]">{c.avgDays}d</td>
                    <td className="py-2.5 sm:py-3 px-3 text-[11px] sm:text-[12px] text-[#333333]">{c.volume.toLocaleString()}</td>
                    <td className="py-2.5 sm:py-3 px-3">
                      <span className={`px-2 py-0.5 rounded-[12px] text-[10px] sm:text-[11px] font-bold ${c.score >= 90 ? 'bg-[#D9F9E7] text-[#007837]' : c.score >= 85 ? 'bg-[#FFF3D6] text-[#C68A00]' : 'bg-[#F04A4A]/10 text-[#F04A4A]'}`}>
                        {c.score}/100
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Routes */}
        <div className="bg-[#FEFEFE] p-3 sm:p-[16px] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs flex flex-col flex-1 min-w-0">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#333333]">Top Routes</h3>
            <button className="w-7 h-7 flex items-center justify-center bg-[#F0F0F0] rounded-[8px] cursor-pointer">
              <MoreHorizontal size={14} className="text-[#333333]" />
            </button>
          </div>
          <div className="flex flex-col gap-2.5 sm:gap-3">
            {topRoutes.map((route, i) => (
              <div key={i} className="flex items-center justify-between p-2 sm:p-2.5 bg-[#F9F9F9] rounded-[10px] hover:bg-[#F0F0F0]/60 transition-colors">
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-[8px] bg-[#E3DDFF] text-[#856DF3] flex items-center justify-center shrink-0 text-[11px] sm:text-[12px] font-bold">
                    {i + 1}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] sm:text-[12px] font-semibold text-[#333333] truncate">{route.from} → {route.to}</span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] text-[#757575]">{route.shipments} shipments</span>
                      <span className="text-[10px] text-[#757575]">• {route.avgTime}</span>
                    </div>
                  </div>
                </div>
                <div className={`flex items-center gap-0.5 px-1.5 py-0.5 rounded-[10px] shrink-0 ${route.trend >= 0 ? 'bg-[#D9F9E7] text-[#007837]' : 'bg-[#F04A4A]/10 text-[#F04A4A]'}`}>
                  {route.trend >= 0 ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                  <span className="text-[10px] font-bold">{route.trend >= 0 ? '+' : ''}{route.trend}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="flex flex-col sm:flex-row justify-between items-center py-2 mt-2 sm:mt-4 px-1 sm:px-2 gap-3 sm:gap-4">
        <span className="text-[11px] sm:text-[12px] font-semibold text-[#333333]">© 2025 Shipnow</span>
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="#" className="text-[11px] sm:text-[12px] text-[#757575] hover:text-[#333333]">Privacy Policy</a>
          <a href="#" className="text-[11px] sm:text-[12px] text-[#757575] hover:text-[#333333]">Terms and conditions</a>
          <a href="#" className="text-[11px] sm:text-[12px] text-[#757575] hover:text-[#333333]">Contact</a>
        </div>
      </div>

    </div>
  );
}
