import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Clock, Play, Settings, MoreHorizontal, CheckCircle } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function StudyPlanner() {
  const { studySessions, toggleStudySession, addStudySession } = useAppContext();
  const [newSessionDay, setNewSessionDay] = useState('Mon');
  const [newSessionSubject, setNewSessionSubject] = useState('');

  const handleAddSession = () => {
    if (newSessionSubject.trim()) {
      addStudySession(newSessionDay, newSessionSubject);
      setNewSessionSubject('');
    }
  };

  return (
    <div className="bg-[#1a1a1a] font-mono text-gray-300 h-full flex flex-col overflow-y-auto">
      <header className="bg-[#222] border-b border-gray-800 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="p-2 rounded-md hover:bg-gray-800 transition-colors text-gray-400 hover:text-white">
            <BookOpen size={20} />
          </Link>
          <h1 className="text-xl font-bold text-white tracking-tight">Study Planner</h1>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-md border border-gray-700">
            <Clock size={16} className="text-green-400" />
            <span className="font-bold text-white">02:45:00</span>
            <span className="text-gray-500 ml-2">Focus Today</span>
          </div>
          <button className="p-2 rounded-md hover:bg-gray-800 transition-colors text-gray-400 hover:text-white">
            <Settings size={20} />
          </button>
        </div>
      </header>

      <main className="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Left Column - Timer & Current Session */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          {/* Pomodoro Timer */}
          <div className="bg-[#222] rounded-xl p-8 border border-gray-800 shadow-lg flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute top-4 right-4 flex gap-2">
              <button className="text-xs font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-colors">Pomodoro</button>
              <button className="text-xs font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-colors">Short Break</button>
              <button className="text-xs font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-colors">Long Break</button>
            </div>

            <div className="mt-12 mb-8 relative">
              <svg className="w-64 h-64 transform -rotate-90">
                <circle cx="128" cy="128" r="120" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-gray-800" />
                <circle cx="128" cy="128" r="120" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="753.98" strokeDashoffset="188.49" className="text-green-500 transition-all duration-1000 ease-linear" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-6xl font-black text-white tracking-tighter">25:00</span>
                <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-2">Focus</span>
              </div>
            </div>

            <div className="flex gap-4 w-full">
              <button className="flex-1 py-4 bg-white text-black rounded-lg font-bold text-lg uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                <Play fill="currentColor" size={20} />
                Start
              </button>
            </div>
          </div>

          {/* Current Task */}
          <div className="bg-[#222] rounded-xl p-6 border border-gray-800 shadow-lg flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Current Focus</h3>
              <MoreHorizontal size={20} className="text-gray-600 cursor-pointer hover:text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Advanced Calculus: Chapter 4</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Review integration techniques and complete practice problems 1-15.</p>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-2 text-xs font-bold bg-gray-800 px-3 py-1.5 rounded-md text-gray-300">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                Mathematics
              </div>
              <div className="flex items-center gap-2 text-xs font-bold bg-gray-800 px-3 py-1.5 rounded-md text-gray-300">
                <CheckCircle size={14} className="text-gray-500" />
                {studySessions.filter(s => s.completed).length}/{studySessions.length} Sessions Done
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Schedule & Tasks */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {/* Weekly Schedule Overview */}
          <div className="bg-[#222] rounded-xl p-6 border border-gray-800 shadow-lg">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Calendar size={20} className="text-gray-500" />
                This Week
              </h3>
              <div className="flex gap-2">
                <select
                  value={newSessionDay}
                  onChange={e => setNewSessionDay(e.target.value)}
                  className="bg-gray-800 border-none text-white text-sm rounded-lg py-1.5 px-3 focus:ring-2 focus:ring-green-500"
                >
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => <option key={d} value={d}>{d}</option>)}
                </select>
                <input
                  type="text"
                  value={newSessionSubject}
                  onChange={e => setNewSessionSubject(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleAddSession()}
                  placeholder="Subject..."
                  className="bg-gray-800 border-none text-white text-sm rounded-lg py-1.5 px-3 focus:ring-2 focus:ring-green-500 w-32"
                />
                <button onClick={handleAddSession} className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg text-sm font-bold transition-colors">
                  Add
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-7 gap-2">
              {studySessions.map((session) => (
                <div
                  key={session.id}
                  onClick={() => toggleStudySession(session.id)}
                  className={`flex flex-col items-center p-3 rounded-lg border cursor-pointer hover:bg-gray-800/50 transition-colors ${session.completed ? 'border-green-500 bg-green-500/10' : 'border-gray-800 bg-[#1a1a1a]'}`}
                >
                  <span className={`text-xs font-bold uppercase ${session.completed ? 'text-green-400' : 'text-gray-500'}`}>{session.day}</span>
                  <span className={`text-lg font-black mt-1 ${session.completed ? 'text-white' : 'text-gray-400'}`}>{session.subject}</span>
                  <div className="mt-3 flex flex-col gap-1 w-full">
                    <div className={`h-1.5 w-full rounded-full ${session.completed ? 'bg-green-500' : 'bg-gray-700'}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Tasks/Exams */}
          <div className="bg-[#222] rounded-xl p-6 border border-gray-800 shadow-lg flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white">Upcoming Deadlines</h3>
              <button className="text-sm font-bold text-gray-400 hover:text-white transition-colors">View All</button>
            </div>

            <div className="space-y-4 flex-1 overflow-y-auto pr-2">
              {/* Item 1 */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:border-gray-700 transition-colors group">
                <div className="flex flex-col items-center justify-center w-12 h-12 rounded-md bg-gray-800 text-white flex-shrink-0 border border-gray-700">
                  <span className="text-xs font-bold text-gray-500 uppercase">Oct</span>
                  <span className="text-lg font-black leading-none">28</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-base font-bold text-white truncate group-hover:text-blue-400 transition-colors">Physics Midterm</h4>
                    <span className="text-xs font-bold text-red-400 bg-red-400/10 px-2 py-1 rounded">High Priority</span>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-1 mb-2">Chapters 1-5: Kinematics and Dynamics</p>
                  <div className="w-full bg-gray-800 rounded-full h-1.5">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:border-gray-700 transition-colors group">
                <div className="flex flex-col items-center justify-center w-12 h-12 rounded-md bg-gray-800 text-white flex-shrink-0 border border-gray-700">
                  <span className="text-xs font-bold text-gray-500 uppercase">Nov</span>
                  <span className="text-lg font-black leading-none">02</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-base font-bold text-white truncate group-hover:text-purple-400 transition-colors">Literature Essay Draft</h4>
                    <span className="text-xs font-bold text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">Medium</span>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-1 mb-2">2000 words on modernism in early 20th century poetry.</p>
                  <div className="w-full bg-gray-800 rounded-full h-1.5">
                    <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:border-gray-700 transition-colors group">
                <div className="flex flex-col items-center justify-center w-12 h-12 rounded-md bg-gray-800 text-white flex-shrink-0 border border-gray-700">
                  <span className="text-xs font-bold text-gray-500 uppercase">Nov</span>
                  <span className="text-lg font-black leading-none">15</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-base font-bold text-white truncate group-hover:text-green-400 transition-colors">Computer Science Project Phase 1</h4>
                    <span className="text-xs font-bold text-gray-400 bg-gray-800 px-2 py-1 rounded">Low</span>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-1 mb-2">Initial setup and database schema design.</p>
                  <div className="w-full bg-gray-800 rounded-full h-1.5">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '0%' }}></div>
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
