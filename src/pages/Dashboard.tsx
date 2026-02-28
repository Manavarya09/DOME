import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Wallet, CheckCircle, Shirt, Power } from 'lucide-react';

export default function Dashboard() {
  const handleAction = (e: React.MouseEvent, action: string) => {
    e.preventDefault();
    alert(`${action} triggered!`);
  };

  return (
    <div className="flex-1 overflow-y-auto bg-[#181818] p-8 relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-4xl font-black text-white tracking-tight">Welcome back, <span className="text-gray-400">Alex.</span></h2>
            <p className="text-gray-500 mt-2 font-medium">System status: All modules operational.</p>
          </div>
          <div className="text-right hidden md:block">
            <div className="text-3xl font-bold text-white tracking-tighter">10:42 AM</div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Wednesday, Oct 25</div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Finance Widget */}
          <Link to="/finance" className="skeuo-card-light rounded-[2rem] p-6 shadow-skeuo-lg border border-white/40 flex flex-col gap-6 relative overflow-hidden group transition-transform hover:-translate-y-1 block text-slate-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg skeuo-inset-light shadow-skeuo-inner flex items-center justify-center">
                  <Wallet size={20} className="text-gray-800" />
                </div>
                <h3 className="font-bold text-lg text-gray-800">Finance</h3>
              </div>
              <div className="size-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
            </div>
            <div className="skeuo-inset-light rounded-2xl p-6 shadow-skeuo-inner border border-white/60">
              <p className="text-[10px] uppercase font-black text-gray-400 tracking-[0.2em] mb-1">Current Balance</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-gray-900 tracking-tighter">$14,250</span>
                <span className="text-green-600 text-sm font-bold bg-green-100 px-1.5 py-0.5 rounded">+2.4%</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-auto">
              <button onClick={(e) => handleAction(e, 'View Details')} className="py-3 px-4 rounded-xl bg-white shadow-skeuo-button text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-black active:shadow-skeuo-button-active transition-all">Details</button>
              <button onClick={(e) => handleAction(e, 'Send Funds')} className="py-3 px-4 rounded-xl bg-white shadow-skeuo-button text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-black active:shadow-skeuo-button-active transition-all">Send</button>
            </div>
          </Link>

          {/* Task Manager Widget */}
          <Link to="/assignments" className="skeuo-card-light rounded-[2rem] p-6 shadow-skeuo-lg border border-white/40 flex flex-col gap-4 relative overflow-hidden group transition-transform hover:-translate-y-1 block text-slate-800">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg skeuo-inset-light shadow-skeuo-inner flex items-center justify-center">
                  <CheckCircle size={20} className="text-gray-800" />
                </div>
                <h3 className="font-bold text-lg text-gray-800">Task Manager</h3>
              </div>
              <span className="text-xs font-bold text-gray-400">3 Pending</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-skeuo-button border border-gray-100">
                <div className="size-5 rounded border-2 border-gray-300"></div>
                <span className="text-sm font-bold text-gray-700">Review Q3 Report</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-skeuo-button border border-gray-100">
                <div className="size-5 rounded border-2 border-gray-800 bg-gray-800 flex items-center justify-center">
                  <CheckCircle size={16} className="text-white" />
                </div>
                <span className="text-sm font-bold text-gray-400 line-through">Email Client</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-skeuo-button border border-gray-100">
                <div className="size-5 rounded border-2 border-gray-300"></div>
                <span className="text-sm font-bold text-gray-700">Update Software</span>
              </div>
            </div>
          </Link>

          {/* Assignments Widget */}
          <Link to="/assignments" className="skeuo-card-light rounded-[2rem] p-6 shadow-skeuo-lg border border-white/40 flex flex-col gap-6 relative overflow-hidden transition-transform hover:-translate-y-1 block text-slate-800">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-lg skeuo-inset-light shadow-skeuo-inner flex items-center justify-center">
                <CheckCircle size={20} className="text-gray-800" />
              </div>
              <h3 className="font-bold text-lg text-gray-800">Assignments</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs font-bold text-gray-500">Quarterly Audit</span>
                  <span className="text-xs font-bold text-gray-900">75%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200 shadow-inner">
                  <div className="h-full bg-gray-800 w-3/4 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs font-bold text-gray-500">Research Phase</span>
                  <span className="text-xs font-bold text-gray-900">40%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200 shadow-inner">
                  <div className="h-full bg-gray-400 w-2/5 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="mt-auto pt-2">
              <div className="flex items-center justify-between p-3 rounded-xl skeuo-inset-light shadow-skeuo-inner border border-white/60">
                <span className="text-xs font-bold text-gray-600">Next Deadline</span>
                <span className="text-[10px] bg-black text-white px-2 py-0.5 rounded-full font-bold uppercase">Today</span>
              </div>
            </div>
          </Link>

          {/* Outfit Selector Widget */}
          <Link to="/outfit" className="skeuo-card-light rounded-[2rem] p-6 shadow-skeuo-lg border border-white/40 flex flex-col gap-4 relative overflow-hidden transition-transform hover:-translate-y-1 block text-slate-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg skeuo-inset-light shadow-skeuo-inner flex items-center justify-center">
                  <Shirt size={20} className="text-gray-800" />
                </div>
                <h3 className="font-bold text-lg text-gray-800">Outfit Selector</h3>
              </div>
              <div className="text-[10px] font-black uppercase text-gray-400 tracking-widest">24°C Sunny</div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-4 py-2">
              <div className="w-full flex justify-center gap-4">
                <div className="size-16 bg-white rounded-xl shadow-skeuo-button flex items-center justify-center border border-gray-100">
                  <Shirt size={32} className="text-gray-800" />
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-600">Smart Casual • Monochrome</p>
            </div>
            <div onClick={(e) => handleAction(e, 'Generate Outfit')} className="w-full py-3 rounded-xl bg-black text-white shadow-lg shadow-gray-400/50 text-xs font-bold uppercase tracking-widest active:scale-95 transition-transform text-center hover:bg-gray-900 cursor-pointer">Generate New Look</div>
          </Link>

          {/* Study Planner Widget */}
          <Link to="/study" className="skeuo-card-light rounded-[2rem] p-6 shadow-skeuo-lg border border-white/40 flex flex-col gap-5 relative overflow-hidden transition-transform hover:-translate-y-1 block text-slate-800">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-lg skeuo-inset-light shadow-skeuo-inner flex items-center justify-center">
                <CheckCircle size={20} className="text-gray-800" />
              </div>
              <h3 className="font-bold text-lg text-gray-800">Study Planner</h3>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              <div className="flex-shrink-0 w-24 p-3 rounded-xl bg-gray-800 text-white flex flex-col items-center justify-center gap-1 shadow-lg">
                <span className="text-[10px] uppercase opacity-70">Mon</span>
                <span className="text-xl font-bold">Math</span>
              </div>
              <div className="flex-shrink-0 w-24 p-3 rounded-xl bg-white border border-gray-200 flex flex-col items-center justify-center gap-1 shadow-skeuo-button opacity-50">
                <span className="text-[10px] uppercase text-gray-500">Tue</span>
                <span className="text-xl font-bold text-gray-800">Hist</span>
              </div>
              <div className="flex-shrink-0 w-24 p-3 rounded-xl bg-white border border-gray-200 flex flex-col items-center justify-center gap-1 shadow-skeuo-button opacity-50">
                <span className="text-[10px] uppercase text-gray-500">Wed</span>
                <span className="text-xl font-bold text-gray-800">Sci</span>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white shadow-skeuo-button border border-gray-100 mt-auto">
              <CheckCircle size={16} className="text-gray-400" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-800">Focus Session</span>
                <span className="text-[10px] text-gray-500">25m remaining</span>
              </div>
            </div>
          </Link>

          {/* Notes Widget */}
          <Link to="/notes" className="skeuo-card-light rounded-[2rem] p-6 shadow-skeuo-lg border border-white/40 flex flex-col gap-4 relative overflow-hidden transition-transform hover:-translate-y-1 block text-slate-800">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-lg skeuo-inset-light shadow-skeuo-inner flex items-center justify-center">
                <CheckCircle size={20} className="text-gray-800" />
              </div>
              <h3 className="font-bold text-lg text-gray-800">Notes</h3>
            </div>
            <div className="skeuo-inset-light rounded-xl p-4 shadow-skeuo-inner border border-white/60 flex-1 relative">
              <div className="absolute top-0 left-6 bottom-0 w-[1px] bg-red-300/50"></div>
              <p className="text-sm font-serif text-gray-700 leading-relaxed pl-4" style={{ fontFamily: "'Georgia', serif" }}>
                <span className="block mb-2 text-xs text-gray-400 font-sans">10:23 AM</span>
                Meeting with design team regarding the monochrome transition. Needs to be high contrast.
              </p>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-gray-400">4 Notes</span>
              <button onClick={(e) => handleAction(e, 'Create Note')} className="size-8 rounded-full bg-white shadow-skeuo-button flex items-center justify-center hover:scale-110 transition-transform">
                <span className="text-sm text-gray-800">+</span>
              </button>
            </div>
          </Link>
        </div>

        <section className="mt-16 mb-8">
          <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-white rounded-full"></span>
            System Diagnostics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="size-32 rounded-full bg-[#181818] shadow-skeuo-dark-lg border-4 border-[#222] flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border-t-4 border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] opacity-80 rotate-45"></div>
                <span className="text-2xl font-black text-white">82%</span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Core Temp</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="size-32 rounded-full bg-[#181818] shadow-skeuo-dark-lg border-4 border-[#222] flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border-t-4 border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] opacity-80 -rotate-90"></div>
                <span className="text-2xl font-black text-white">14ms</span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Latency</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="size-32 rounded-full bg-[#181818] shadow-skeuo-dark-lg border-4 border-[#222] flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border-t-4 border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] opacity-80 rotate-180"></div>
                <span className="text-2xl font-black text-white">4.2kW</span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Power Draw</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="size-32 rounded-full bg-[#181818] shadow-skeuo-dark-lg border-4 border-[#222] flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border-t-4 border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] opacity-80 rotate-[220deg]"></div>
                <span className="text-2xl font-black text-white">99.9%</span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Uptime</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
