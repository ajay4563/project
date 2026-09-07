import React from 'react';
import { Activity, CheckCircle2, Clock, Play, Code, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function ProjectMonitor({ project, onTriggerRisk }) {
  if (!project) return null;

  return (
    <div className="space-y-6">
      
      {/* Header Overview Card */}
      <div className="glass-card rounded-2xl p-6 border border-indigo-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-950 text-indigo-300 border border-indigo-800">
              Active Execution Phase
            </span>
            <span className="text-xs text-slate-400">Client: {project.client}</span>
          </div>
          <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          <p className="text-xs text-slate-300 mt-1 max-w-2xl">{project.description}</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onTriggerRisk}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-rose-300 bg-rose-950/80 border border-rose-800 hover:bg-rose-900 transition-colors"
          >
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            <span>Check AI Risk Console</span>
          </button>
        </div>
      </div>

      {/* Grid: Milestones & Real-Time Code Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Milestones Column (2 Columns) */}
        <div className="lg:col-span-2 glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Activity className="w-4 h-4 text-indigo-400" />
              Sprint Milestones Progress
            </h3>
            <span className="text-xs text-slate-400 font-medium">Overall Progress: 68%</span>
          </div>

          {/* Overall Progress Bar */}
          <div className="w-full bg-slate-950 rounded-full h-3 overflow-hidden border border-slate-800">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 h-full rounded-full w-[68%] transition-all duration-500"></div>
          </div>

          <div className="space-y-3 mt-4">
            {project.milestones.map((m, idx) => (
              <div key={m.id} className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                    m.status === 'Completed' 
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                      : m.status === 'In Progress'
                        ? 'bg-indigo-950 text-indigo-400 border border-indigo-800'
                        : 'bg-slate-900 text-slate-500 border border-slate-800'
                  }`}>
                    {m.status === 'Completed' ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white">{m.title}</h4>
                    <p className="text-[10px] text-slate-400">Due: {m.dueDate}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${
                    m.status === 'Completed'
                      ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800'
                      : m.status === 'In Progress'
                        ? 'bg-indigo-950/80 text-indigo-300 border border-indigo-800'
                        : 'bg-slate-900 text-slate-500 border border-slate-800'
                  }`}>
                    {m.status} ({m.progress}%)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Code Activity Stream */}
        <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Code className="w-4 h-4 text-purple-400" />
            Live Code Activity Stream
          </h3>

          <div className="space-y-3 font-mono text-xs">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-900 space-y-1">
              <div className="flex items-center justify-between text-slate-400 text-[10px]">
                <span className="text-indigo-400">feat/rag-vector-store</span>
                <span>12m ago</span>
              </div>
              <p className="text-slate-200">Alex Rivera pushed commit #8f32a</p>
              <p className="text-[10px] text-emerald-400">+142 lines, -18 lines</p>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-900 space-y-1">
              <div className="flex items-center justify-between text-slate-400 text-[10px]">
                <span className="text-purple-400">design/figma-tokens</span>
                <span>1h ago</span>
              </div>
              <p className="text-slate-200">Sophia Chen updated UI component tokens</p>
              <p className="text-[10px] text-purple-400">Exported SVG icons & color system</p>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-900 space-y-1">
              <div className="flex items-center justify-between text-slate-400 text-[10px]">
                <span className="text-rose-400">audit/security-test</span>
                <span>3h ago</span>
              </div>
              <p className="text-slate-200">Elena Rostova ran automated QA suite</p>
              <p className="text-[10px] text-emerald-400">100% tests passed (34/34)</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
