import React from 'react';
import { 
  Sparkles, ShieldCheck, User, LogIn, ChevronDown, 
  Briefcase, Code2, ShieldAlert, Cpu
} from 'lucide-react';

export default function Navbar({ 
  userRole, 
  onRoleChange, 
  onOpenAuth, 
  activeView, 
  setActiveView 
}) {
  return (
    <nav className="sticky top-0 z-50 bg-[#080c14]/90 backdrop-blur-xl border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <div 
            onClick={() => setActiveView('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                  SuperCook <span className="gradient-text">AI</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/60">
                  v2.5 Engine
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium">Autonomous Matching & AI Skill Graph</p>
            </div>
          </div>

          {/* Center Role Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => { onRoleChange('client'); setActiveView('client_dashboard'); }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                userRole === 'client' && activeView.includes('client')
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              Client Portal
            </button>

            <button
              onClick={() => { onRoleChange('freelancer'); setActiveView('freelancer_dashboard'); }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                userRole === 'freelancer' && activeView.includes('freelancer')
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              Freelancer Portal
            </button>

            <button
              onClick={() => { onRoleChange('admin'); setActiveView('admin_dashboard'); }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                userRole === 'admin' && activeView.includes('admin')
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              Admin Center
            </button>
          </div>

          {/* Right Action Menu */}
          <div className="flex items-center gap-3">
            {/* Quick Engine Direct Action Links */}
            <button
              onClick={() => setActiveView('matching')}
              className="hidden lg:flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-indigo-400 transition-colors bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800"
            >
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              <span>AI Engine</span>
            </button>

            {/* Login / Profile Switcher Button */}
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 shadow-md shadow-indigo-500/20 transition-all transform active:scale-95"
            >
              <User className="w-4 h-4" />
              <span>Sign In / Role</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
