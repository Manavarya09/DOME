import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Grid, Wallet, CheckCircle, Shirt, Power, BookOpen, PenTool, Folder, FileText } from 'lucide-react';

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/dashboard', icon: Grid, label: 'Dashboard' },
    { path: '/finance', icon: Wallet, label: 'Finance' },
    { path: '/tasks', icon: CheckCircle, label: 'Tasks' },
    { path: '/assignments', icon: BookOpen, label: 'Assignments' },
    { path: '/study', icon: PenTool, label: 'Study Planner' },
    { path: '/notes', icon: FileText, label: 'Notes' },
    { path: '/outfit', icon: Shirt, label: 'Outfit' },
  ];

  const projects = [
    { name: 'Design System', color: 'bg-blue-500' },
    { name: 'Marketing Site', color: 'bg-purple-500' },
    { name: 'Q4 Planning', color: 'bg-green-500' },
    { name: 'Mobile App', color: 'bg-orange-500' },
  ];

  return (
    <aside className="w-72 bg-[#121212] border-r border-white/5 flex flex-col p-6 justify-between shadow-skeuo-dark-lg z-20 relative flex-shrink-0 h-screen overflow-y-auto">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4 p-2">
          <div className="size-12 rounded-xl skeuo-dark-surface shadow-skeuo-dark-btn flex items-center justify-center border border-white/10">
            <Grid className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter text-white">DOME</h1>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Monochrome OS</p>
          </div>
        </div>
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                isActive(item.path)
                  ? 'skeuo-dark-surface shadow-skeuo-dark-inner border border-white/5 text-white font-semibold'
                  : 'text-gray-500 hover:text-white hover:bg-white/5 font-medium'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-4">
          <h3 className="px-4 text-xs font-bold uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
            <Folder size={14} /> Projects
          </h3>
          <div className="flex flex-col gap-1">
            {projects.map((project, idx) => (
              <div key={idx} className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/5 cursor-pointer group transition-colors">
                <div className={`w-2 h-2 rounded-full ${project.color}`}></div>
                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{project.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-4 mt-8">
        <div className="p-4 rounded-xl bg-[#0f0f0f] shadow-skeuo-dark-inner border border-white/5">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full border-2 border-white/10 shadow-lg overflow-hidden bg-black">
              <img className="w-full h-full object-cover grayscale opacity-80" alt="User profile avatar of Alex" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdEwknhkF-afJQ9407dl8gmkFa8tEBHhq73VGYSR99U3C-_xgdu-oMw6G5vrjLPh6aGmFSjWX6cxgHpcd9Ry26fSXHnBdMgGvZ9Laat-ve_fAqRE516wqLaF62mhyOtdI_tm_MN3d-XlJ31eaG7mIC31zd_MYixNQbyK_ZNKHHEbeu3uI3bUPqK3u8QQcr8B8qT6-wAu3t86k7-2LViEPnwmsIqQ_dIzRkviO0Utr2aLKAL0oqWuerqYWv2eNIg6b80P5XIFsLlXY" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-200">Alex Johnson</p>
              <p className="text-[10px] text-gray-500 uppercase font-black">Pro User</p>
            </div>
          </div>
        </div>
        <Link to="/" className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl skeuo-dark-surface shadow-skeuo-dark-btn border border-white/5 text-gray-400 hover:text-white hover:shadow-skeuo-dark-inner transition-all active:scale-95 group">
          <Power size={16} className="group-active:translate-x-1 transition-transform" />
          <span className="font-bold uppercase text-xs tracking-widest">Logout</span>
        </Link>
      </div>
    </aside>
  );
}
