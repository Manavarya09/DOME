import React from 'react';
import { Link } from 'react-router-dom';
import { Shirt, RefreshCw, Layers, CheckCircle, Search, Save, Settings } from 'lucide-react';

export default function Outfit() {
  return (
    <div className="bg-[#121212] font-display text-white h-full selection:bg-white selection:text-black flex flex-col overflow-y-auto">
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#181818] sticky top-0 z-50 shadow-skeuo-dark-lg">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="flex items-center justify-center p-2 rounded-xl skeuo-dark-surface shadow-skeuo-dark-btn border border-white/5 hover:shadow-skeuo-dark-inner transition-all active:scale-95">
            <Shirt size={20} className="text-gray-300" />
          </Link>
          <div>
            <h2 className="text-xl font-black tracking-tighter uppercase">Wardrobe</h2>
            <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">System v2.4</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-black border border-white/10 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Sync Active</span>
          </div>
          <button className="p-2 rounded-xl skeuo-dark-surface shadow-skeuo-dark-btn border border-white/5 text-gray-400 hover:text-white transition-colors">
            <Settings size={20} />
          </button>
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        <div className="absolute inset-0 bg-textured pointer-events-none opacity-50"></div>
        
        {/* Left Panel - Controls */}
        <aside className="w-full lg:w-80 border-r border-white/10 bg-[#151515] flex flex-col z-10 shadow-2xl relative">
          <div className="p-6 flex flex-col gap-6 h-full overflow-y-auto">
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2">
                <Search size={14} />
                Parameters
              </h3>
              
              <div className="space-y-3">
                <div className="p-4 rounded-2xl skeuo-dark-surface shadow-skeuo-dark-inner border border-white/5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block">Weather Context</label>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black tracking-tighter">18°C</span>
                    <span className="text-sm font-bold text-gray-500 uppercase">Overcast</span>
                  </div>
                </div>
                
                <div className="p-4 rounded-2xl skeuo-dark-surface shadow-skeuo-dark-inner border border-white/5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block">Formality Index</label>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 rounded-lg bg-black text-gray-500 text-xs font-bold uppercase border border-white/10 shadow-inner hover:text-white transition-colors">Casual</button>
                    <button className="flex-1 py-2 rounded-lg bg-white text-black text-xs font-bold uppercase shadow-skeuo-button active:shadow-skeuo-button-active transition-all">Smart</button>
                    <button className="flex-1 py-2 rounded-lg bg-black text-gray-500 text-xs font-bold uppercase border border-white/10 shadow-inner hover:text-white transition-colors">Formal</button>
                  </div>
                </div>
                
                <div className="p-4 rounded-2xl skeuo-dark-surface shadow-skeuo-dark-inner border border-white/5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 block">Color Palette</label>
                  <div className="flex gap-3 justify-center">
                    <div className="size-8 rounded-full bg-black border-2 border-gray-600 shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
                    <div className="size-8 rounded-full bg-gray-800 border-2 border-gray-600 shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
                    <div className="size-8 rounded-full bg-gray-400 border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] cursor-pointer hover:scale-110 transition-transform relative">
                      <div className="absolute inset-0 rounded-full border border-black/20"></div>
                    </div>
                    <div className="size-8 rounded-full bg-white border-2 border-gray-300 shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-6 space-y-4">
              <button className="w-full py-4 rounded-2xl bg-white text-black font-black uppercase tracking-[0.15em] shadow-skeuo-button active:shadow-skeuo-button-active transition-all flex items-center justify-center gap-3">
                <RefreshCw size={20} />
                Generate Look
              </button>
              <button className="w-full py-4 rounded-2xl skeuo-dark-surface text-gray-300 font-bold uppercase tracking-[0.15em] shadow-skeuo-dark-btn border border-white/5 active:shadow-skeuo-dark-inner transition-all flex items-center justify-center gap-3 hover:text-white">
                <Save size={20} />
                Save to Archive
              </button>
            </div>
          </div>
        </aside>

        {/* Right Panel - Display */}
        <div className="flex-1 p-6 lg:p-12 overflow-y-auto relative z-0 flex flex-col items-center justify-center min-h-[600px]">
          <div className="w-full max-w-3xl">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
                Look <span className="text-gray-600">#042</span>
              </h1>
              <div className="flex gap-2">
                <button className="size-10 rounded-full skeuo-dark-surface shadow-skeuo-dark-btn border border-white/5 flex items-center justify-center hover:text-white text-gray-400 transition-colors">
                  <Layers size={18} />
                </button>
                <button className="size-10 rounded-full skeuo-dark-surface shadow-skeuo-dark-btn border border-white/5 flex items-center justify-center hover:text-white text-gray-400 transition-colors">
                  <CheckCircle size={18} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Main Image Area */}
              <div className="md:col-span-7 lg:col-span-8">
                <div className="polaroid mx-auto max-w-md relative group">
                  <div className="aspect-[3/4] bg-gray-200 overflow-hidden relative border border-gray-300 shadow-inner">
                    <img 
                      src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" 
                      alt="Monochrome outfit" 
                      className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white font-bold tracking-wide">Urban Minimalist</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center px-2">
                    <span className="font-handwritten text-2xl text-black font-bold transform -rotate-2">Autumn Core</span>
                    <span className="text-[10px] font-mono text-gray-400 uppercase">Oct 25, 2024</span>
                  </div>
                  <div className="absolute -top-4 -right-4 size-12 rounded-full bg-red-600 shadow-lg border-4 border-white flex items-center justify-center transform rotate-12 z-10">
                    <span className="text-white font-black text-xs">NEW</span>
                  </div>
                </div>
              </div>

              {/* Item Breakdown */}
              <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-4">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-2 border-b border-white/10 pb-2">Components</h3>
                
                <div className="p-4 rounded-2xl skeuo-dark-surface shadow-skeuo-dark-btn border border-white/5 flex gap-4 items-center group cursor-pointer hover:bg-[#222] transition-colors">
                  <div className="size-16 rounded-xl bg-gray-800 border border-gray-700 shadow-inner overflow-hidden flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=200&auto=format&fit=crop" alt="Jacket" className="w-full h-full object-cover grayscale" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Outerwear</p>
                    <p className="font-bold text-sm text-gray-200 group-hover:text-white transition-colors">Structured Wool Coat</p>
                    <p className="text-xs text-gray-600 font-mono mt-1">Charcoal • M</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl skeuo-dark-surface shadow-skeuo-dark-btn border border-white/5 flex gap-4 items-center group cursor-pointer hover:bg-[#222] transition-colors">
                  <div className="size-16 rounded-xl bg-gray-800 border border-gray-700 shadow-inner overflow-hidden flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=200&auto=format&fit=crop" alt="Shirt" className="w-full h-full object-cover grayscale" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Top</p>
                    <p className="font-bold text-sm text-gray-200 group-hover:text-white transition-colors">Heavyweight Mock Neck</p>
                    <p className="text-xs text-gray-600 font-mono mt-1">Black • L</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl skeuo-dark-surface shadow-skeuo-dark-btn border border-white/5 flex gap-4 items-center group cursor-pointer hover:bg-[#222] transition-colors">
                  <div className="size-16 rounded-xl bg-gray-800 border border-gray-700 shadow-inner overflow-hidden flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=200&auto=format&fit=crop" alt="Pants" className="w-full h-full object-cover grayscale" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Bottom</p>
                    <p className="font-bold text-sm text-gray-200 group-hover:text-white transition-colors">Pleated Trousers</p>
                    <p className="text-xs text-gray-600 font-mono mt-1">Slate • 32x30</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl skeuo-dark-surface shadow-skeuo-dark-btn border border-white/5 flex gap-4 items-center group cursor-pointer hover:bg-[#222] transition-colors">
                  <div className="size-16 rounded-xl bg-gray-800 border border-gray-700 shadow-inner overflow-hidden flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=200&auto=format&fit=crop" alt="Shoes" className="w-full h-full object-cover grayscale" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Footwear</p>
                    <p className="font-bold text-sm text-gray-200 group-hover:text-white transition-colors">Chunky Derby Shoes</p>
                    <p className="text-xs text-gray-600 font-mono mt-1">Black Leather • 10</p>
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
