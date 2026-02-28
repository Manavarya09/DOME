import React from 'react';
import Sidebar from './Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#121212]">
      <Sidebar />
      <div className="flex-1 h-full overflow-hidden relative flex flex-col">
        {children}
      </div>
    </div>
  );
}
