import React from 'react';
import { Plus, Briefcase, Zap, Cpu, Activity, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ClientDashboard({ projects, onNavigate }) {
  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="glass-card rounded-2xl p-6 border border-indigo-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">Client Portal</span>
          <h2 className="text-2xl font-bold text-white">Project Management & AI Hiring</h2>
          <p className="text-xs text-slate-300 mt-1">
            Post project briefs, trigger AI Requirement Analysis, and launch autonomous squad formation.
          </p>
        </div>

        <button
          onClick={() => onNavigate('create_project')}
          className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-95 shadow-lg shadow-indigo-500/20 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>New AI Project Brief</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="glass-card rounded-xl p-4 border border-slate-800">
          <div className="text-xs text-slate-400 font-medium">Active Projects</div>
          <div className="text-2xl font-extrabold text-white mt-1">{projects.length}</div>
        </div>
        <div className="glass-card rounded-xl p-4 border border-slate-800">
          <div className="text-xs text-slate-400 font-medium">AI Matches Generated</div>
          <div className="text-2xl font-extrabold text-emerald-400 mt-1">12 Candidates</div>
        </div>
        <div className="glass-card rounded-xl p-4 border border-slate-800">
          <div className="text-xs text-slate-400 font-medium">Platform Risk Level</div>
          <div className="text-2xl font-extrabold text-indigo-400 mt-1">Low (0.3/10)</div>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">
          Your Posted Projects
        </h3>

        <div className="grid grid-cols-1 gap-4">
          {projects.map((proj) => (
            <div key={proj.id} className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-bold text-white">{proj.title}</h4>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-950 text-indigo-300 border border-indigo-800">
                      {proj.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{proj.description}</p>
                </div>

                <div className="text-right">
                  <div className="text-sm font-extrabold text-white">{proj.budget}</div>
                  <div className="text-[10px] text-slate-400">{proj.duration}</div>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] text-slate-400 font-semibold">Tech Needed:</span>
                {proj.aiAnalysis?.keyTechNeeded?.map((tech, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-950 text-indigo-300 border border-slate-900">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('matching')}
                  className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>View AI Team Formations</span>
                </button>

                <button
                  onClick={() => onNavigate('execution')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-slate-800 hover:bg-slate-700"
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>Execution Workspace</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
