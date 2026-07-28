import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#F0F0F0] text-[#333333] font-['Nunito_Sans',sans-serif]">
      {/* Sidebar fixed 223px on desktop */}
      <Sidebar />

      {/* Flexible content container */}
      <div className="flex-1 flex flex-col p-[20px] max-w-[1440px] w-full mx-auto min-w-0">
        <Header />
        <main className="flex-1 flex flex-col w-full min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
