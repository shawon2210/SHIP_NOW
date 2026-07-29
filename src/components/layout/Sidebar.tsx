import { NavLink, useNavigate } from 'react-router-dom';
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
  X,
  LogOut
} from 'lucide-react';
import { useUser } from '../../context/UserContext';
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
  { name: 'Settings', path: '/settings', icon: Settings, badge: null },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsOpen(false);
    navigate('/login');
  };

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
        className={`fixed lg:sticky top-0 left-0 h-screen w-[150px] min-w-[150px] sm:w-[180px] sm:min-w-[180px] md:w-[223px] md:min-w-[223px] bg-[#FEFEFE] border-r border-[#F0F0F0] flex flex-col justify-between z-40 transition-transform duration-300 overflow-y-auto ${
           isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
         }`}
        style={{ padding: '12px 10px' }}
      >
        <div className="flex flex-col gap-2.5">
          {/* 2.1 Logo Block */}
          <div className="flex items-center gap-[10px] w-full h-[40px] px-1">
            <div className="relative w-[24px] h-[24px] shrink-0">
              {/* Two small purple squares offset */}
              <div className="absolute top-0 left-0 w-[13px] h-[14px] bg-[#856DF3] rounded-[2px]" />
              <div className="absolute bottom-0 right-0 w-[13px] h-[14px] bg-[#856DF3] rounded-[2px] opacity-80" />
            </div>
            <span 
              className="text-base font-[900] italic uppercase leading-[120%] tracking-tight text-[#333333]"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              SHIPNOW
            </span>
          </div>

          {/* 2.2 User Profile Card */}
          <div className="flex items-center justify-between p-2 bg-[#F0F0F0] rounded-[8px] w-full">
            <div className="flex items-center gap-2 overflow-hidden">
              <img
                src={user.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"}
                alt={user.name}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover shrink-0"
              />
              <div className="flex flex-col leading-tight truncate">
                <span className="text-[13px] font-semibold text-[#333333] truncate">{user.name}</span>
                <span className="text-[11px] text-[#757575] truncate">{user.role}</span>
              </div>
            </div>
            <button className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center bg-[#F0F0F0] hover:bg-[#E0E0E0] rounded-[6px] transition-colors cursor-pointer shrink-0" aria-label="User Options">
              <ChevronDown size={14} className="text-[#333333]" />
            </button>
          </div>

          {/* 2.3 Primary Nav (Main-menu) */}
          <div className="flex flex-col">
            <h2 className="text-[10px] font-semibold text-[#757575] uppercase tracking-wider mb-1 px-1">Main</h2>
            <nav className="flex flex-col gap-0.5 sm:gap-1 w-full">
              {primaryNavItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2 sm:gap-2.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-[6px] transition-colors text-[12px] sm:text-[13px] font-semibold min-h-[34px] sm:min-h-[38px] ${
                          isActive
                            ? 'bg-[#E3DDFF] text-[#2A1298]'
                            : 'text-[#757575] hover:bg-[#F5F5F5] hover:text-[#333333]'
                        }`
                  }
                >
                  <item.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0" />
                  <span className="truncate">{item.name}</span>
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Divider line */}
          <div className="w-full h-[1px] bg-[#F0F0F0] my-1" />

          {/* 2.4 Secondary Nav */}
          <div className="flex flex-col">
            <h2 className="text-[10px] font-semibold text-[#757575] uppercase tracking-wider mb-1 px-1">More</h2>
            <nav className="flex flex-col gap-0.5 sm:gap-1 w-full">
              {secondaryNavItems.map((item) => {
                const LinkComponent = item.path.startsWith('/') ? NavLink : 'a';
                const linkProps = item.path.startsWith('/')
                  ? { to: item.path, onClick: () => setIsOpen(false) }
                  : { href: item.path, onClick: (e: React.MouseEvent) => e.preventDefault() };
                return (
                  <LinkComponent
                    key={item.name}
                    {...linkProps}
                    className={item.path.startsWith('/')
                      ? ({ isActive }: any) =>
                          `flex items-center justify-between px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-[6px] transition-colors text-[12px] sm:text-[13px] font-semibold min-h-[34px] sm:min-h-[38px] ${
                            isActive
                              ? 'bg-[#E3DDFF] text-[#2A1298]'
                              : 'text-[#757575] hover:bg-[#F5F5F5] hover:text-[#333333]'
                          }`
                      : 'flex items-center justify-between px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-[6px] text-[#757575] hover:bg-[#F5F5F5] hover:text-[#333333] transition-colors text-[12px] sm:text-[13px] font-semibold min-h-[34px] sm:min-h-[38px]'
                    }
                  >
                    <div className="flex items-center gap-2 sm:gap-2.5 truncate">
                      <item.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0" />
                      <span className="truncate">{item.name}</span>
                    </div>
                    {item.badge !== null && (
                      <span className="px-1.5 py-0.5 bg-[#856DF3] text-[#FEFEFE] text-[10px] sm:text-[11px] font-semibold rounded-full min-w-[18px] text-center shrink-0">
                        {item.badge}
                      </span>
                    )}
                  </LinkComponent>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-2 mt-3">
          {/* 2.5 Promotional Banner (Bottom of sidebar) */}
          <div className="relative p-3 sm:p-4 bg-[#333333] text-[#FEFEFE] rounded-[10px] overflow-hidden flex flex-col gap-1.5">
            {/* Overlapping purple pattern squares bleeding off top right */}
            <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#856DF3] opacity-40 rounded-[8px] pointer-events-none transform rotate-12" />
            <div className="absolute top-1 -right-1 w-9 h-9 bg-[#856DF3] opacity-20 rounded-[6px] pointer-events-none transform -rotate-6" />

            <h3 className="text-xs sm:text-sm font-bold leading-tight text-[#FEFEFE] relative z-10">
              Loving ShipNow Free?
            </h3>
            <p className="text-[10px] sm:text-[11px] text-[#FEFEFE] opacity-90 leading-tight relative z-10">
              Go Pro to access priority support, real-time tracking, and full analytics.
            </p>
            <button className="w-full mt-1 py-1.5 px-3 bg-[#FEFEFE] text-[#333333] rounded-[6px] text-[11px] sm:text-[12px] font-semibold hover:bg-[#F0F0F0] active:scale-95 transition-all text-center relative z-10 min-h-[32px] cursor-pointer">
              Go Pro Today
            </button>
          </div>

          <button 
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 text-[13px] font-semibold text-[#333333] hover:text-[#F04A4A] hover:bg-[#FDEAEA] rounded-[6px] py-1.5 w-full text-center transition-colors cursor-pointer"
          >
            <LogOut size={16} />
            <span>Logout</span>
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
