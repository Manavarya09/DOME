import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, MoreVertical, Search, Filter, Plus, Clock, Calendar, AlertCircle } from 'lucide-react';

export default function Tasks() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="bg-[#f5f5f5] font-sans text-gray-900 h-full flex flex-col overflow-y-auto">
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600">
              <CheckCircle size={24} />
            </Link>
            <h1 className="text-xl font-bold tracking-tight text-gray-900">Task Manager</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search tasks..." 
                className="pl-10 pr-4 py-2 bg-gray-100 border-transparent rounded-lg text-sm focus:bg-white focus:border-gray-300 focus:ring-2 focus:ring-gray-200 transition-all w-64"
              />
            </div>
            <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
              <Filter size={20} />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors shadow-md">
              <Plus size={18} />
              <span className="hidden sm:inline">New Task</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <nav className="space-y-1">
            <button 
              onClick={() => setActiveTab('all')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'all' ? 'bg-white shadow-sm border border-gray-200 text-black' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <div className="flex items-center gap-3">
                <CheckCircle size={18} className={activeTab === 'all' ? 'text-black' : 'text-gray-400'} />
                All Tasks
              </div>
              <span className="bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs font-bold">12</span>
            </button>
            <button 
              onClick={() => setActiveTab('today')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'today' ? 'bg-white shadow-sm border border-gray-200 text-black' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <div className="flex items-center gap-3">
                <Calendar size={18} className={activeTab === 'today' ? 'text-black' : 'text-gray-400'} />
                Today
              </div>
              <span className="bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs font-bold">4</span>
            </button>
            <button 
              onClick={() => setActiveTab('upcoming')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'upcoming' ? 'bg-white shadow-sm border border-gray-200 text-black' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <div className="flex items-center gap-3">
                <Clock size={18} className={activeTab === 'upcoming' ? 'text-black' : 'text-gray-400'} />
                Upcoming
              </div>
              <span className="bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs font-bold">8</span>
            </button>
            <button 
              onClick={() => setActiveTab('urgent')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'urgent' ? 'bg-white shadow-sm border border-gray-200 text-black' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <div className="flex items-center gap-3">
                <AlertCircle size={18} className={activeTab === 'urgent' ? 'text-red-500' : 'text-gray-400'} />
                Urgent
              </div>
              <span className="bg-red-100 text-red-600 py-0.5 px-2 rounded-full text-xs font-bold">2</span>
            </button>
          </nav>

          <div className="mt-10">
            <h3 className="px-4 text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Projects</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-black">Design System</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-black">Marketing Site</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-black">Q4 Planning</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
            <h2 className="text-lg font-bold text-gray-900 capitalize">{activeTab} Tasks</h2>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Sort by:</span>
              <select className="bg-transparent border-none font-medium text-gray-900 focus:ring-0 cursor-pointer">
                <option>Due Date</option>
                <option>Priority</option>
                <option>Alphabetical</option>
              </select>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-2">
            <div className="space-y-1">
              {/* Task Item 1 */}
              <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-5 h-5 rounded border-2 border-gray-300 cursor-pointer hover:border-black transition-colors"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4 mb-1">
                    <h4 className="text-base font-semibold text-gray-900 truncate">Finalize monochrome color palette</h4>
                    <div className="flex items-center gap-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1 text-gray-400 hover:text-gray-600 rounded"><MoreVertical size={16} /></button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-3">Ensure contrast ratios meet accessibility standards for both light and dark modes.</p>
                  <div className="flex items-center gap-3 text-xs font-medium">
                    <span className="flex items-center gap-1 text-red-600 bg-red-50 px-2 py-1 rounded-md">
                      <Calendar size={12} />
                      Today
                    </span>
                    <span className="flex items-center gap-1 text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      Design System
                    </span>
                  </div>
                </div>
              </div>

              {/* Task Item 2 */}
              <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-5 h-5 rounded border-2 border-gray-300 cursor-pointer hover:border-black transition-colors"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4 mb-1">
                    <h4 className="text-base font-semibold text-gray-900 truncate">Draft Q4 OKRs</h4>
                    <div className="flex items-center gap-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1 text-gray-400 hover:text-gray-600 rounded"><MoreVertical size={16} /></button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-3">Align with engineering on key deliverables for the next quarter.</p>
                  <div className="flex items-center gap-3 text-xs font-medium">
                    <span className="flex items-center gap-1 text-orange-600 bg-orange-50 px-2 py-1 rounded-md">
                      <Calendar size={12} />
                      Tomorrow
                    </span>
                    <span className="flex items-center gap-1 text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      Q4 Planning
                    </span>
                  </div>
                </div>
              </div>

              {/* Task Item 3 (Completed) */}
              <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 opacity-60">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-5 h-5 rounded border-2 border-black bg-black text-white flex items-center justify-center cursor-pointer">
                    <CheckCircle size={14} />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4 mb-1">
                    <h4 className="text-base font-semibold text-gray-500 line-through truncate">Review marketing copy</h4>
                    <div className="flex items-center gap-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1 text-gray-400 hover:text-gray-600 rounded"><MoreVertical size={16} /></button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 line-through line-clamp-1 mb-3">Check the new landing page copy for brand voice consistency.</p>
                  <div className="flex items-center gap-3 text-xs font-medium">
                    <span className="flex items-center gap-1 text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                      Marketing Site
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
