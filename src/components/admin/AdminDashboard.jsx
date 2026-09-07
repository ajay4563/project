import React from 'react';
import { ShieldAlert, Cpu, Activity, Users, Award, Zap, CheckCircle2 } from 'lucide-react';

export default function AdminDashboard({ projects, freelancers, onNavigate }) {
  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="glass-card rounded-2xl p-6 border border-rose-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400">Admin Operations Console</span>
          <h2 className="text-2xl font-bold text-white">System Governance & Risk Engine</h2>
          <p className="text-xs text-slate-300 mt-1">
            Global monitoring of AI risk detection alerts, matching engine health, and trust score integrity.
          </p>
        </div>

        <button
          onClick={() => onNavigate('risk')}
          className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-rose-600 to-amber-600 hover:opacity-95 shadow-lg shadow-rose-500/20 transition-all"
        >
          <ShieldAlert className="w-4 h-4" />
          <span>Launch AI Risk Console</span>
        </button>
      </div>

      {/* Global System Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="glass-card rounded-xl p-4 border border-slate-800">
          <div className="text-xs text-slate-400 font-medium">Total Active Projects</div>
          <div className="text-2xl font-extrabold text-white mt-1">{projects.length}</div>
        </div>

        <div className="glass-card rounded-xl p-4 border border-slate-800">
          <div className="text-xs text-slate-400 font-medium">Verified Freelancers</div>
          <div className="text-2xl font-extrabold text-purple-400 mt-1">{freelancers.length}</div>
        </div>

        <div className="glass-card rounded-xl p-4 border border-slate-800">
          <div className="text-xs text-slate-400 font-medium">AI Matching Latency</div>
          <div className="text-2xl font-extrabold text-emerald-400 mt-1">1.2 seconds</div>
        </div>

        <div className="glass-card rounded-xl p-4 border border-slate-800">
          <div className="text-xs text-slate-400 font-medium">Avg Trust Score</div>
          <div className="text-2xl font-extrabold text-amber-400 mt-1">96.2 / 100</div>
        </div>
      </div>

      {/* Global AI Risk Logs */}
      <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-rose-400" />
          System-Wide AI Telemetry Log
        </h3>

        <div className="space-y-3">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
              <div>
                <div className="text-xs font-bold text-white">Timeline Delay Flagged (#p1)</div>
                <div className="text-[10px] text-slate-400">Vector store embedding latency during stress test</div>
              </div>
            </div>
            <button
              onClick={() => onNavigate('risk')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-rose-300 bg-rose-950 border border-rose-800"
            >
              Inspect Risk
            </button>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <div>
                <div className="text-xs font-bold text-white">Autonomous Team Apex Formation Complete</div>
                <div className="text-[10px] text-slate-400">Synergy Index: 97/100, 3 Freelancers mapped</div>
              </div>
            </div>
            <span className="text-[10px] font-bold text-emerald-400">Verified</span>
          </div>
        </div>
      </div>

    </div>
  );
}
