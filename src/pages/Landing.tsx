import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { ArrowRight, Grid, Layers, Wallet, CheckCircle, Shirt } from 'lucide-react';
import AuthModal from '../components/AuthModal';
import { useAuth } from '../context/AuthContext';

export default function Landing() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black flex flex-col">
      <header className="px-8 py-6 flex items-center justify-between sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-white text-black flex items-center justify-center font-black text-xl tracking-tighter">
            D
          </div>
          <span className="font-bold text-xl tracking-widest uppercase">DOME</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsAuthModalOpen(true)} className="text-sm font-bold uppercase tracking-widest hover:text-gray-300 transition-colors hidden sm:block">Log In</button>
          <button onClick={() => setIsAuthModalOpen(true)} className="px-6 py-3 rounded-full bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
            Get Started
          </button>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMzMzMiPjwvcmVjdD4KPC9zdmc+')] opacity-50 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-gray-300 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            DOME OS v2.0 is now live
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
            YOUR LIFE,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">BEAUTIFULLY ORGANIZED.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl leading-relaxed mt-4">
            A unified, monochrome workspace designed to reduce cognitive load and elevate your daily productivity.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <button onClick={() => setIsAuthModalOpen(true)} className="px-8 py-4 rounded-full bg-white text-black font-black text-lg uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center gap-3 w-full sm:w-auto justify-center">
              Enter DOME
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 rounded-full border border-white/20 text-white font-bold text-lg uppercase tracking-widest hover:bg-white/10 transition-colors w-full sm:w-auto justify-center">
              View Demo
            </button>
          </div>
        </div>

        {/* Feature Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32 max-w-6xl mx-auto relative z-10 w-full px-4">
          <Link to="/finance" className="p-8 rounded-3xl bg-[#111] border border-white/10 hover:border-white/30 transition-colors group text-left flex flex-col gap-6">
            <div className="size-14 rounded-2xl bg-white text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Wallet size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Finance</h3>
              <p className="text-gray-400 leading-relaxed">Track expenses, manage budgets, and visualize your wealth in a clean, distraction-free interface.</p>
            </div>
          </Link>

          <Link to="/notes" className="p-8 rounded-3xl bg-[#111] border border-white/10 hover:border-white/30 transition-colors group text-left flex flex-col gap-6 md:-translate-y-8">
            <div className="size-14 rounded-2xl bg-white text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Layers size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Notes & Ideas</h3>
              <p className="text-gray-400 leading-relaxed">Capture thoughts instantly with our skeuomorphic notebook design. Tactile, intuitive, and always ready.</p>
            </div>
          </Link>

          <Link to="/assignments" className="p-8 rounded-3xl bg-[#111] border border-white/10 hover:border-white/30 transition-colors group text-left flex flex-col gap-6">
            <div className="size-14 rounded-2xl bg-white text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <CheckCircle size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Task Manager</h3>
              <p className="text-gray-400 leading-relaxed">Prioritize your day with precision. A robust task system that adapts to your workflow, not the other way around.</p>
            </div>
          </Link>
        </div>
      </main>

      <footer className="border-t border-white/10 py-12 px-8 text-center text-gray-500 text-sm font-bold uppercase tracking-widest relative z-10 bg-black">
        <p>© 2024 DOME OS. All rights reserved.</p>
      </footer>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  );
}
