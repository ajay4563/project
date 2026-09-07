import React, { useState } from 'react';
import { X, Briefcase, Code2, Shield, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, onSelectRole }) {
  const [selectedRole, setSelectedRole] = useState('client');
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    onSelectRole(selectedRole);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg glass-card rounded-2xl p-6 sm:p-8 border border-indigo-500/30 shadow-2xl shadow-indigo-950/50">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-900/60 hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center mx-auto mb-3">
            <Sparkles className="w-6 h-6 text-indigo-400" />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Access SuperCook Platform</h2>
          <p className="text-xs text-slate-400 mt-1">
            Choose your persona to test the AI Requirement Analysis & Matching Engine.
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <button
            type="button"
            onClick={() => setSelectedRole('client')}
            className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${
              selectedRole === 'client'
                ? 'bg-indigo-950/80 border-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <Briefcase className="w-5 h-5 text-indigo-400" />
            <span className="text-xs font-bold">Client</span>
            <span className="text-[10px] text-slate-400">Post & Hire</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedRole('freelancer')}
            className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${
              selectedRole === 'freelancer'
                ? 'bg-purple-950/80 border-purple-500 text-white shadow-lg shadow-purple-500/20'
                : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <Code2 className="w-5 h-5 text-purple-400" />
            <span className="text-xs font-bold">Freelancer</span>
            <span className="text-[10px] text-slate-400">Skill Graph</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedRole('admin')}
            className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${
              selectedRole === 'admin'
                ? 'bg-rose-950/80 border-rose-500 text-white shadow-lg shadow-rose-500/20'
                : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <Shield className="w-5 h-5 text-rose-400" />
            <span className="text-xs font-bold">Admin</span>
            <span className="text-[10px] text-slate-400">Risk Console</span>
          </button>
        </div>

        {/* Quick Demo Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              User Email / Account ID
            </label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={`demo-${selectedRole}@supercook.ai`}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800 text-xs text-slate-300 space-y-1">
            <div className="flex items-center gap-2 text-indigo-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Simulated AI Engine Credentials</span>
            </div>
            <p className="text-[11px] text-slate-400">
              {selectedRole === 'client' && 'Unlocks AI Requirement Analysis, Project Posting, & AI Team Formation.'}
              {selectedRole === 'freelancer' && 'Unlocks Interactive AI Skill Graph, Verification Badges & Match Alerts.'}
              {selectedRole === 'admin' && 'Unlocks System-wide AI Risk Monitor & Trust Score algorithm panel.'}
            </p>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 shadow-lg shadow-indigo-500/25 transition-all"
          >
            <span>Enter as {selectedRole.toUpperCase()}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
}
