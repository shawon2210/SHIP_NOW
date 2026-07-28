import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#F0F0F0] text-[#333333] font-['Nunito_Sans',sans-serif]">
      <Sidebar />
      <div className="flex-1 flex flex-col p-[var(--page-gutter)] max-w-[1440px] w-full mx-auto min-w-0">
        <Header />
        <main className="flex-1 flex flex-col gap-[var(--section-gap)] w-full min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
