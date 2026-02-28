import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Search, Plus, Share2, Bookmark, MoreHorizontal, Settings } from 'lucide-react';

export default function Notes() {
  const handleAction = (action: string) => {
    alert(`${action} triggered!`);
  };

  return (
    <div className="text-dome-black antialiased overflow-hidden h-full flex flex-col bg-[#f0f0f0]" style={{ backgroundImage: 'radial-gradient(#d1d1d1 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      <header className="bg-dome-white border-b border-gray-200 shadow-sm z-50 flex-none">
        <div className="px-6 py-3 flex items-center justify-between max-w-full">
          <div className="flex items-center gap-3">
            <Link to="/dashboard" className="flex h-9 w-9 items-center justify-center rounded-lg bg-dome-black text-white shadow-lg shadow-black/20">
              <Layers size={20} />
            </Link>
            <h2 className="text-xl font-black tracking-tight text-dome-black">DOME</h2>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 border-l border-gray-300 pl-3 ml-1">Notes</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-gray-200 border border-gray-300 shadow-inner flex items-center justify-center">
              <Search size={16} className="text-gray-500" />
            </div>
            <div className="h-8 w-8 rounded-full bg-dome-black text-white flex items-center justify-center shadow-md">
              <span className="text-xs font-bold">JD</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow flex p-4 md:p-8 gap-6 max-h-full overflow-hidden">
        <aside className="w-64 md:w-80 flex-none flex flex-col gap-6 relative z-10 hidden md:flex">
          <div className="px-2">
            <button onClick={() => handleAction('New Entry')} className="clicker-btn w-full h-12 rounded-lg flex items-center justify-center gap-2 text-dome-dark-gray font-bold tracking-wide text-sm uppercase">
              <Plus size={18} />
              New Entry
            </button>
          </div>

          <div className="flex-grow flex flex-col gap-1 overflow-y-auto pr-2 pb-4">
            <div className="group cursor-pointer relative">
              <div className="absolute left-0 top-1 bottom-1 w-4 bg-gray-900 rounded-l-md z-10 shadow-lg"></div>
              <div className="ml-2 leather-texture h-16 rounded-r-md rounded-l-sm shadow-xl flex items-center justify-between px-6 border-t border-b border-r border-gray-800 relative transform transition-transform group-hover:-translate-x-1">
                <div className="absolute right-4 top-0 bottom-0 w-3 bg-gray-900 shadow-md opacity-80"></div>
                <span className="text-gray-200 font-bold tracking-wide text-sm ml-2">Project Alpha</span>
                <span className="text-gray-500 text-xs font-mono">12</span>
              </div>
            </div>

            <div className="group cursor-pointer relative mt-2 opacity-90 hover:opacity-100 transition-opacity">
              <div className="absolute left-0 top-1 bottom-1 w-4 bg-gray-700 rounded-l-md z-10 shadow-lg"></div>
              <div className="ml-2 bg-dome-dark-gray h-14 rounded-r-md rounded-l-sm shadow-lg flex items-center justify-between px-6 border border-gray-600 relative transform transition-transform group-hover:-translate-x-1">
                <span className="text-gray-300 font-medium tracking-wide text-sm ml-2">Q3 Financials</span>
                <span className="text-gray-500 text-xs font-mono">4</span>
              </div>
            </div>

            <div className="group cursor-pointer relative mt-2 opacity-90 hover:opacity-100 transition-opacity">
              <div className="absolute left-0 top-1 bottom-1 w-4 bg-gray-300 rounded-l-md z-10 shadow-lg border-l border-gray-400"></div>
              <div className="ml-2 bg-gray-100 h-14 rounded-r-md rounded-l-sm shadow-lg flex items-center justify-between px-6 border border-gray-300 relative transform transition-transform group-hover:-translate-x-1">
                <div className="absolute right-4 top-0 bottom-0 w-3 bg-gray-200 shadow-inner opacity-60 border-x border-gray-300"></div>
                <span className="text-gray-600 font-medium tracking-wide text-sm ml-2">Personal Goals</span>
                <span className="text-gray-400 text-xs font-mono">8</span>
              </div>
            </div>

            <div className="mt-auto pt-6 px-4">
              <div className="h-2 w-full bg-gray-300 rounded-sm border border-gray-400 mx-auto shadow-sm mb-1 transform scale-95"></div>
              <div className="h-2 w-full bg-gray-300 rounded-sm border border-gray-400 mx-auto shadow-sm mb-1 transform scale-100"></div>
              <div className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Archives</div>
            </div>
          </div>
        </aside>

        <div className="flex-grow flex flex-col relative bg-[#e8e8e8] rounded-xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),_inset_0_-2px_4px_rgba(255,255,255,0.5)] border border-gray-300 p-2 overflow-hidden">
          <div className="flex items-end px-4 gap-1 h-10 select-none">
            <div className="folder-tab active px-6 py-2 cursor-default text-xs uppercase tracking-wider text-gray-800 w-32 text-center truncate">
              Inbox
            </div>
            <div onClick={() => handleAction('Open Meetings')} className="folder-tab px-6 py-2 cursor-pointer text-xs uppercase tracking-wider text-gray-500 hover:text-gray-700 w-32 text-center truncate">
              Meetings
            </div>
            <div onClick={() => handleAction('Open Ideas')} className="folder-tab px-6 py-2 cursor-pointer text-xs uppercase tracking-wider text-gray-500 hover:text-gray-700 w-32 text-center truncate">
              Ideas
            </div>
            <div className="ml-auto">
              <button onClick={() => handleAction('Settings')} className="text-gray-400 hover:text-gray-600">
                <Settings size={20} />
              </button>
            </div>
          </div>

          <div className="flex-grow bg-white shadow-paper rounded-b-md rounded-tr-md relative flex flex-col z-20 overflow-hidden mx-1 mb-1">
            <div className="h-16 border-b border-gray-200 bg-white flex items-center px-8 justify-between flex-none z-10">
              <div className="flex flex-col">
                <h1 className="font-mono text-2xl font-bold text-dome-black tracking-tight">Q4 Roadmap Brainstorm</h1>
                <span className="text-xs text-gray-400 font-mono">Last edited: Today, 10:42 AM</span>
              </div>
              <div className="flex gap-3">
                <Share2 onClick={() => handleAction('Share Note')} size={20} className="text-gray-400 hover:text-dome-black cursor-pointer" />
                <Bookmark onClick={() => handleAction('Bookmark Note')} size={20} className="text-gray-400 hover:text-dome-black cursor-pointer" />
                <MoreHorizontal onClick={() => handleAction('More Options')} size={20} className="text-gray-400 hover:text-dome-black cursor-pointer" />
              </div>
            </div>

            <div className="flex-grow relative overflow-hidden flex">
              <div className="w-16 h-full border-r border-red-200 bg-white flex-none flex flex-col items-center py-8 gap-12 relative z-10">
                <div className="absolute -left-3 top-10 flex flex-col gap-32">
                  <div className="binder-ring"></div>
                  <div className="binder-ring"></div>
                  <div className="binder-ring"></div>
                </div>
                <div className="w-4 h-4 rounded-full bg-gray-800 shadow-inner mt-4"></div>
                <div className="w-4 h-4 rounded-full bg-gray-800 shadow-inner mt-24"></div>
                <div className="w-4 h-4 rounded-full bg-gray-800 shadow-inner mt-24"></div>
              </div>

              <div className="flex-grow h-full overflow-y-auto ruled-paper relative">
                <div className="paper-clip"></div>
                <div className="p-8 max-w-3xl font-mono text-dome-dark-gray text-lg ruled-paper-content">
                  <p className="mb-8">
                    Objective: Define key deliverables for the upcoming cycle. Focus on monochrome transition and skeuomorphic elements.
                  </p>
                  <p className="mb-8">
                    1. Review current design assets.<br />
                    2. Establish texture library (leather, paper, metal).<br />
                    3. Finalize typography choices: Inter for UI, Courier for content.
                  </p>
                  <p className="mb-8">
                    <span className="bg-yellow-100 px-1 border-b border-yellow-200">Idea:</span> Should the "Save" interaction feel like a stamp?
                  </p>
                  <p className="mb-8 text-gray-400 italic">
                    // Remember to check contrast ratios for the light theme.
                  </p>
                  <p className="mb-8">
                    Meeting Notes:<br />
                    - Client prefers tactile feedback on hover states.<br />
                    - Shadow depth should be realistic, simulating a single top-down light source.
                  </p>
                  <p className="mb-8">
                    Action Items:<br />
                    [ ] Prototype the filing cabinet animation.<br />
                    [x] Update color palette variables.<br />
                    [ ] Schedule user testing session.
                  </p>
                  <div className="h-32"></div>
                </div>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-3 bg-transparent border-l border-gray-100 pointer-events-none"></div>
            </div>

            <div className="h-8 border-t border-gray-100 bg-white flex items-center justify-between px-4 text-xs font-mono text-gray-400">
              <span>Page 1 of 1</span>
              <span>342 Words</span>
            </div>
          </div>

          <div className="absolute bottom-2 left-6 right-6 h-2 bg-white rounded-b-md shadow-md z-0 transform translate-y-1"></div>
          <div className="absolute bottom-2 left-8 right-8 h-2 bg-white rounded-b-md shadow-md z-[-1] transform translate-y-2"></div>
        </div>
      </main>
    </div>
  );
}
