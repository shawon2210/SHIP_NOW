import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Truck, LineChart, Calendar, MapPin, Navigation, Users, Factory, Receipt, LogOut, Menu } from 'lucide-react';
import { user } from '../../data/mockData';
import { useState } from 'react';

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Shipments', path: '/shipments', icon: Truck },
  { name: 'Analytics', path: '/analytics', icon: LineChart },
  { name: 'Calendar', path: '/calendar', icon: Calendar },
  { name: 'Tracking', path: '/tracking', icon: MapPin },
  { name: 'Fleets', path: '/fleets', icon: Navigation },
  { name: 'Drivers', path: '/drivers', icon: Users },
  { name: 'Warehouse', path: '/warehouse', icon: Factory },
  { name: 'Invoices & Billing', path: '/invoices', icon: Receipt },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        className="lg:hidden fixed top-3 left-4 z-50 p-2 bg-surface rounded shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>

      <aside className={`fixed h-full w-sidebar-width left-0 top-0 bg-surface flex flex-col z-50 border-r border-border-light overflow-y-auto transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-1 w-6 h-8 justify-center">
              <div className="w-4 h-3 bg-primary rounded-[2px] transform -skew-x-[20deg] translate-x-1.5"></div>
              <div className="w-4 h-3 bg-primary rounded-[2px] transform -skew-x-[20deg] -translate-x-1.5"></div>
            </div>
            <h1 className="text-xl font-black text-on-surface tracking-widest uppercase mt-1">ShipNow</h1>
          </div>
        </div>
        
        <nav className="flex-1 px-4 space-y-1 mt-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 transition-colors duration-200 ${
                  isActive || (item.name === 'Shipments' && window.location.pathname.includes('/shipments'))
                    ? 'bg-primary-container text-primary rounded-lg font-medium opacity-100'
                    : 'text-on-surface-variant hover:bg-surface-container-low rounded-lg opacity-80 hover:opacity-100'
                }`
              }
            >
              <item.icon size={20} />
              <span className="font-label-md text-label-md">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-6 mt-auto border-t border-border-light flex items-center gap-3">
          <img
            src={user.avatar}
            alt="User profile"
            className="w-10 h-10 rounded-full object-cover bg-surface-container-high"
          />
          <div className="flex-1 overflow-hidden">
            <p className="text-label-md font-bold text-on-surface truncate">{user.name}</p>
            <p className="text-[10px] text-on-surface-variant truncate uppercase">{user.role}</p>
          </div>
          <button className="text-on-surface-variant hover:text-on-surface transition-colors">
            <LogOut size={16} />
          </button>
        </div>
      </aside>
      
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
