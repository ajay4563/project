import React from 'react';
import { Cpu, Award, Star, Layers, CheckCircle2, ArrowRight, Activity, DollarSign } from 'lucide-react';

export default function FreelancerDashboard({ freelancer, onNavigate }) {
  if (!freelancer) return null;

  return (
    <div className="space-y-6">
      
      {/* Profile Overview Banner */}
      <div className="glass-card rounded-2xl p-6 border border-purple-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img 
            src={freelancer.avatar} 
            alt={freelancer.name} 
            className="w-16 h-16 rounded-2xl object-cover border-2 border-purple-500/50"
          />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white">{freelancer.name}</h2>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-800">
                Verified Freelancer
              </span>
            </div>
            <p className="text-xs text-purple-300 font-medium">{freelancer.role}</p>
            <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
              <span>Rate: ${freelancer.hourlyRate}/hr</span>
              <span>•</span>
              <span>Projects Completed: {freelancer.completedProjects}</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => onNavigate('skill_graph')}
          className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-95 shadow-lg shadow-purple-500/20 transition-all"
        >
          <Cpu className="w-4 h-4" />
          <span>Inspect AI Skill Graph</span>
        </button>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="glass-card rounded-xl p-4 border border-slate-800">
          <div className="text-xs text-slate-400 font-medium">Network Trust Score</div>
          <div className="text-2xl font-extrabold text-amber-400 mt-1">{freelancer.trustScore} / 100</div>
        </div>

        <div className="glass-card rounded-xl p-4 border border-slate-800">
          <div className="text-xs text-slate-400 font-medium">On-Time Delivery Rate</div>
          <div className="text-2xl font-extrabold text-emerald-400 mt-1">{freelancer.onTimeRate}</div>
        </div>

        <div className="glass-card rounded-xl p-4 border border-slate-800">
          <div className="text-xs text-slate-400 font-medium">Verified Skill Nodes</div>
          <div className="text-2xl font-extrabold text-purple-400 mt-1">
            {freelancer.skillGraph?.nodes?.length || 6} Nodes
          </div>
        </div>
      </div>

      {/* Skill Graph Quick Visual & Matched Opportunities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Quick Skill Graph Summary */}
        <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-400" />
              Verified Skill Graph Topology
            </h3>
            <button 
              onClick={() => onNavigate('skill_graph')}
              className="text-xs font-bold text-purple-400 hover:underline"
            >
              Open Interactive Graph →
            </button>
          </div>

          <div className="space-y-2">
            {freelancer.skillGraph?.nodes?.map((node) => (
              <div key={node.id} className="bg-slate-950 p-3 rounded-xl border border-slate-900 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-xs font-bold text-white">{node.id}</span>
                  <span className="text-[10px] text-slate-400">({node.category})</span>
                </div>
                <div className="w-24 bg-slate-900 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-purple-500 h-full rounded-full" style={{ width: `${node.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Squad Invites */}
        <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-400" />
            AI Team Formation Invitations
          </h3>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white">Team Apex AI</span>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded-full border border-emerald-800">
                98.4% Match
              </span>
            </div>
            <p className="text-xs text-slate-300">
              You've been selected as <strong>AI Lead & Backend</strong> for the Enterprise AI Customer Intelligence Platform.
            </p>
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs font-bold text-indigo-400">Squad Est: $16,500</span>
              <button
                onClick={() => onNavigate('matching')}
                className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500"
              >
                Accept Squad Invite
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
