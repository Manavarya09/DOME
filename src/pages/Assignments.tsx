import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, Plus, Calendar, CheckCircle, Clock } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Assignments() {
  const { assignments, updateAssignmentProgress, addAssignment } = useAppContext();
  const [newAssignmentTitle, setNewAssignmentTitle] = useState('');

  const handleAddAssignment = () => {
    if (newAssignmentTitle.trim()) {
      addAssignment(newAssignmentTitle);
      setNewAssignmentTitle('');
    } else {
      alert('Please enter an assignment title!');
    }
  };

  return (
    <div className="bg-[#f5f5f5] font-sans text-gray-900 h-full flex flex-col w-full overflow-y-auto">
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600">
              <BookOpen size={24} />
            </Link>
            <h1 className="text-xl font-bold tracking-tight text-gray-900">Assignments</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search assignments..."
                className="pl-10 pr-4 py-2 bg-gray-100 border-transparent rounded-lg text-sm focus:bg-white focus:border-gray-300 focus:ring-2 focus:ring-gray-200 transition-all w-64"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={newAssignmentTitle}
                onChange={e => setNewAssignmentTitle(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleAddAssignment()}
                placeholder="New assignment title..."
                className="px-4 py-2 bg-gray-100 border-transparent rounded-lg text-sm focus:bg-white focus:border-gray-300 focus:ring-2 focus:ring-gray-200 transition-all w-48"
              />
              <button onClick={handleAddAssignment} className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors shadow-md">
                <Plus size={18} />
                <span className="hidden sm:inline">Add</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* To Do Column */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
              <h2 className="font-bold text-gray-900 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                To Do
              </h2>
              <span className="bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs font-bold">
                {assignments.filter(a => a.progress < 100).length}
              </span>
            </div>

            <div className="space-y-3">
              {assignments.filter(a => a.progress < 100).map(assignment => (
                <div key={assignment.id} className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">Task</span>
                    <span className="text-xs font-medium text-gray-500 flex items-center gap-1"><Calendar size={12} /> Upcoming</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{assignment.title}</h3>
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-sm text-gray-500">Progress</p>
                    <span className="text-xs font-bold">{assignment.progress}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={assignment.progress || 0}
                    onChange={(e) => updateAssignmentProgress(assignment.id, parseInt(e.target.value))}
                    className="w-full accent-black cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* In Progress Column */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
              <h2 className="font-bold text-gray-900 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                In Progress
              </h2>
              <span className="bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs font-bold">
                {assignments.filter(a => a.progress > 0 && a.progress < 100).length}
              </span>
            </div>

            <div className="space-y-3">
              {assignments.filter(a => a.progress > 0 && a.progress < 100).map(assignment => (
                <div key={assignment.id} className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Active</span>
                    <span className="text-xs font-medium text-gray-500 flex items-center gap-1"><Calendar size={12} /> Due Soon</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{assignment.title}</h3>
                  <div className="w-full bg-gray-100 rounded-full h-1.5 mt-3">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${assignment.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Completed Column */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 flex flex-col gap-4 opacity-75">
            <div className="flex items-center justify-between px-2">
              <h2 className="font-bold text-gray-900 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                Completed
              </h2>
              <span className="bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs font-bold">
                {assignments.filter(a => a.progress >= 100).length}
              </span>
            </div>

            <div className="space-y-3">
              {assignments.filter(a => a.progress >= 100).map(assignment => (
                <div key={assignment.id} className="bg-gray-50 border border-gray-200 p-4 rounded-xl shadow-sm cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-gray-600 bg-gray-200 px-2 py-1 rounded">Done</span>
                    <span className="text-xs font-medium text-green-600 flex items-center gap-1"><CheckCircle size={12} /> Complete</span>
                  </div>
                  <h3 className="font-bold text-gray-500 line-through mb-1">{assignment.title}</h3>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-3">
                    <div className="bg-gray-400 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
