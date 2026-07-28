import { NavLink } from 'react-router-dom';
import {
  LayoutGrid,
  LineChart,
  Calendar,
  Truck,
  MapPin,
  Warehouse as WarehouseIcon,
  Bus,
  IdCard,
  Receipt,
  MessageSquare,
  Bell,
  Settings,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { user } from '../../data/mockData';
import { useState, useEffect } from 'react';

const primaryNavItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutGrid },
  { name: 'Analytics', path: '/analytics', icon: LineChart },
  { name: 'Calendar', path: '/calendar', icon: Calendar },
  { name: 'Shipments', path: '/shipments', icon: Truck },
  { name: 'Tracking', path: '/tracking', icon: MapPin },
  { name: 'Warehouse', path: '/warehouse', icon: WarehouseIcon },
  { name: 'Fleets', path: '/fleets', icon: Bus },
  { name: 'Drivers', path: '/drivers', icon: IdCard },
  { name: 'Invoices & Billing', path: '/invoices', icon: Receipt },
];

const secondaryNavItems = [
  { name: 'Message', path: '#', icon: MessageSquare, badge: 19 },
  { name: 'Notification', path: '#', icon: Bell, badge: 5 },
  { name: 'Settings', path: '#', icon: Settings, badge: null },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Mobile Drawer Hamburger Trigger */}
      <button 
        className="lg:hidden fixed top-3 left-4 z-50 p-2 bg-[#FEFEFE] rounded-lg shadow-md border border-[#E0E0E0] text-[#333333] min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar container */}
      <aside 
        className={`fixed lg:sticky top-0 left-0 h-screen w-[223px] min-w-[223px] bg-[#FEFEFE] border-r border-[#F0F0F0] flex flex-col justify-between z-40 transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
        style={{ padding: '20px 16px' }}
      >
        <div className="flex flex-col gap-[20px]">
          {/* 2.1 Logo Block */}
          <div className="flex items-center gap-[10px] w-[147px] h-[40px] px-1">
            <div className="relative w-[24px] h-[24px] shrink-0">
              {/* Two small purple squares offset */}
              <div className="absolute top-0 left-0 w-[13px] h-[14px] bg-[#856DF3] rounded-[2px]" />
              <div className="absolute bottom-0 right-0 w-[13px] h-[14px] bg-[#856DF3] rounded-[2px] opacity-80" />
            </div>
            <span 
              className="text-[19.13px] font-[900] italic uppercase leading-[120%] tracking-tight text-[#333333]"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              SHIPNOW
            </span>
          </div>

          {/* 2.2 User Profile Card */}
          <div className="flex items-center justify-between p-[8px] bg-[#F0F0F0] rounded-[8px] w-full">
            <div className="flex items-center gap-[8px]">
              <img
                src={user.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"}
                alt="John Doe"
                className="w-[32px] h-[32px] rounded-full object-cover shrink-0"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-[14px] font-semibold text-[#333333]">John Doe</span>
                <span className="text-[10px] text-[#757575]">Admin</span>
              </div>
            </div>
            <button className="w-[32px] h-[32px] flex items-center justify-center bg-[#F0F0F0] hover:bg-[#E0E0E0] rounded-[8px] transition-colors cursor-pointer" aria-label="User Options">
              <ChevronDown size={14} className="text-[#333333]" />
            </button>
          </div>

          {/* 2.3 Primary Nav (Main-menu) */}
          <nav className="flex flex-col gap-[8px] w-full">
            {primaryNavItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-[12px] px-[14px] py-[8px] rounded-[4px] transition-colors text-[14px] font-semibold min-h-[40px] ${
                    isActive
                      ? 'bg-[#E3DDFF] text-[#2A1298]'
                      : 'text-[#757575] hover:bg-[#F5F5F5] hover:text-[#333333]'
                  }`
                }
              >
                <item.icon size={22} className="shrink-0" />
                <span className="truncate">{item.name}</span>
              </NavLink>
            ))}
          </nav>

          {/* Divider line */}
          <div className="w-full h-[1px] bg-[#F0F0F0] my-[8px]" />

          {/* 2.4 Secondary Nav */}
          <nav className="flex flex-col gap-[8px] w-full">
            {secondaryNavItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => e.preventDefault()}
                className="flex items-center justify-between px-[14px] py-[8px] rounded-[4px] text-[#757575] hover:bg-[#F5F5F5] hover:text-[#333333] transition-colors text-[14px] font-semibold min-h-[40px]"
              >
                <div className="flex items-center gap-[12px]">
                  <item.icon size={22} className="shrink-0" />
                  <span>{item.name}</span>
                </div>
                {item.badge !== null && (
                  <span className="px-[6px] py-[2px] bg-[#856DF3] text-[#FEFEFE] text-[12px] font-semibold rounded-full min-w-[20px] text-center">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>
        </div>

        {/* 2.5 Promotional Banner (Bottom of sidebar) */}
        <div className="relative mt-[20px] p-[24px_16px] bg-[#333333] text-[#FEFEFE] rounded-[12px] overflow-hidden flex flex-col gap-[12px]">
          {/* Overlapping purple pattern squares bleeding off top right */}
          <div className="absolute -top-3 -right-3 w-[60px] h-[60px] bg-[#856DF3] opacity-40 rounded-[8px] pointer-events-none transform rotate-12" />
          <div className="absolute top-2 -right-1 w-[45px] h-[45px] bg-[#856DF3] opacity-20 rounded-[6px] pointer-events-none transform -rotate-6" />

          <h3 className="text-[24px] font-bold leading-tight text-[#FEFEFE] relative z-10">
            Loving ShipNow Free?
          </h3>
          <p className="text-[12px] text-[#FEFEFE] opacity-90 leading-snug relative z-10">
            Go Pro to access priority support, real-time tracking, and full analytics.
          </p>
          <button className="w-full mt-[4px] py-[12px] px-[18px] bg-[#FEFEFE] text-[#333333] rounded-[8px] text-[14px] font-semibold hover:bg-[#F0F0F0] active:scale-95 transition-all text-center relative z-10 min-h-[40px] cursor-pointer">
            Go Pro Today
          </button>
        </div>
      </aside>

      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
