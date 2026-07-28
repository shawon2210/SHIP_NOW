import { Search, Bell, Settings, Plus } from 'lucide-react';
import { user } from '../../data/mockData';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <header className="fixed top-0 right-0 lg:w-[calc(100%-var(--spacing-sidebar-width))] w-full h-20 bg-surface z-40 border-b border-border-light flex justify-between items-center px-4 lg:px-8">
      <div className="flex items-center gap-4 pl-10 lg:pl-0">
        <div className="hidden sm:block">
          <p className="text-xs text-on-surface-variant font-medium">Hello {user.name.split(' ')[0]}!</p>
          <h2 className="text-title-lg font-bold text-on-surface">Good Morning</h2>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center max-w-xl px-4 hidden md:flex">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={16} />
          <input
            type="text"
            placeholder="Search anything"
            className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low border border-border-light rounded-lg text-body-sm focus:ring-1 focus:ring-primary focus:outline-none"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-3 lg:gap-4 shrink-0">
        <Link 
          to="/shipments/new"
          className="flex items-center gap-2 px-4 py-2.5 bg-secondary text-white rounded-lg text-label-md font-bold hover:brightness-110 active:scale-95 transition-all shadow-sm"
        >
          <Plus size={18} />
          <span className="hidden sm:inline">Add New Shipping</span>
          <span className="sm:hidden">New</span>
        </Link>
        
        <div className="flex items-center gap-1 border-l border-border-light pl-3 lg:pl-4">
          <button className="p-2 hover:bg-surface-container-low rounded-full transition-all text-on-surface-variant">
            <Bell size={20} />
          </button>
          <button className="p-2 hover:bg-surface-container-low rounded-full transition-all text-on-surface-variant">
            <Settings size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
