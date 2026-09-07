import React from 'react';
import { 
  Home, UserCheck, Users, Briefcase, Code2, ShieldAlert, 
  PlusCircle, Cpu, Layers, Zap, User, GitMerge, 
  PlayCircle, Activity, CheckCircle2, Star, Award
} from 'lucide-react';

export default function FlowDiagramTree({ currentStage, onSelectStage }) {
  const getStageColor = (nodeId) => {
    if (currentStage === nodeId) {
      return 'border-indigo-500 bg-indigo-950/90 text-white shadow-lg shadow-indigo-500/40 ring-2 ring-indigo-400 scale-105';
    }
    return 'border-slate-800 bg-slate-900/80 text-slate-300 hover:border-slate-700 hover:bg-slate-800/80';
  };

  return (
    <div className="w-full glass-card rounded-2xl p-6 border border-indigo-500/20 relative overflow-hidden my-6">
      
      {/* Glow Effects */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <h3 className="text-sm font-extrabold tracking-wider uppercase text-indigo-400">
              Interactive System Architecture Flow Map
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Click any block in the architectural tree to trigger and inspect live platform modules.
          </p>
        </div>

        <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-400">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span> Active Stage
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-slate-700"></span> Platform Flow
          </span>
        </div>
      </div>

      {/* Visual Flowchart Tree Canvas */}
      <div className="flex flex-col items-center space-y-4 font-sans max-w-4xl mx-auto py-2">
        
        {/* Node 1: HOME */}
        <button
          onClick={() => onSelectStage('home')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border text-xs font-bold transition-all duration-300 cursor-pointer ${getStageColor('home')}`}
        >
          <Home className="w-4 h-4 text-indigo-400" />
          <span>HOME</span>
        </button>

        {/* Down Arrow */}
        <div className="w-0.5 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 relative">
          <div className="absolute -bottom-1 -left-1 w-2 h-2 border-r-2 border-b-2 border-purple-500 rotate-45"></div>
        </div>

        {/* Node 2: LOGIN / REGISTER */}
        <button
          onClick={() => onSelectStage('auth')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border text-xs font-bold transition-all duration-300 cursor-pointer ${getStageColor('auth')}`}
        >
          <UserCheck className="w-4 h-4 text-purple-400" />
          <span>LOGIN / REGISTER</span>
        </button>

        {/* Branch Lines to 3 Roles */}
        <div className="w-full max-w-2xl flex flex-col items-center py-1">
          <div className="w-0.5 h-4 bg-purple-500"></div>
          {/* Horizontal Connector Line */}
          <div className="w-4/5 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500"></div>
          {/* 3 Vertical Drops */}
          <div className="w-4/5 flex justify-between">
            <div className="w-0.5 h-4 bg-indigo-500"></div>
            <div className="w-0.5 h-4 bg-purple-500"></div>
            <div className="w-0.5 h-4 bg-rose-500"></div>
          </div>
        </div>

        {/* Node 3: Three Roles (CLIENT | FREELANCER | ADMIN) */}
        <div className="w-full max-w-3xl grid grid-cols-3 gap-3 sm:gap-6 text-center">
          
          {/* Client Column */}
          <div className="flex flex-col items-center space-y-3">
            <button
              onClick={() => onSelectStage('client_dashboard')}
              className={`w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border text-xs font-bold transition-all ${getStageColor('client_dashboard')}`}
            >
              <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
              <span>CLIENT</span>
            </button>

            <div className="w-0.5 h-4 bg-indigo-500/60"></div>

            <button
              onClick={() => onSelectStage('create_project')}
              className={`w-full flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl border text-[11px] font-semibold transition-all ${getStageColor('create_project')}`}
            >
              <PlusCircle className="w-3.5 h-3.5 text-indigo-400" />
              <span>Create Project</span>
            </button>

            <div className="w-0.5 h-4 bg-indigo-500/60"></div>

            <button
              onClick={() => onSelectStage('analysis')}
              className={`w-full flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl border text-[11px] font-bold text-indigo-300 bg-indigo-950/60 border-indigo-800 transition-all ${getStageColor('analysis')}`}
            >
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              <span>AI Requirement Analysis</span>
            </button>
          </div>

          {/* Freelancer Column */}
          <div className="flex flex-col items-center space-y-3">
            <button
              onClick={() => onSelectStage('freelancer_dashboard')}
              className={`w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border text-xs font-bold transition-all ${getStageColor('freelancer_dashboard')}`}
            >
              <Code2 className="w-3.5 h-3.5 text-purple-400" />
              <span>FREELANCER</span>
            </button>

            <div className="w-0.5 h-4 bg-purple-500/60"></div>

            <button
              onClick={() => onSelectStage('freelancer_dashboard')}
              className={`w-full flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl border text-[11px] font-semibold transition-all ${getStageColor('freelancer_dashboard')}`}
            >
              <User className="w-3.5 h-3.5 text-purple-400" />
              <span>Skill Profile</span>
            </button>

            <div className="w-0.5 h-4 bg-purple-500/60"></div>

            <button
              onClick={() => onSelectStage('skill_graph')}
              className={`w-full flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl border text-[11px] font-bold text-purple-300 bg-purple-950/60 border-purple-800 transition-all ${getStageColor('skill_graph')}`}
            >
              <Layers className="w-3.5 h-3.5 text-purple-400" />
              <span>AI Skill Graph</span>
            </button>
          </div>

          {/* Admin Column */}
          <div className="flex flex-col items-center space-y-3">
            <button
              onClick={() => onSelectStage('admin_dashboard')}
              className={`w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border text-xs font-bold transition-all ${getStageColor('admin_dashboard')}`}
            >
              <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
              <span>ADMIN</span>
            </button>

            <div className="w-0.5 h-16 bg-rose-500/40 border-r border-dashed border-rose-500/30"></div>
            
            <div className="text-[10px] text-rose-400 font-semibold px-2 py-1 bg-rose-950/40 rounded border border-rose-900/60">
              System Governance
            </div>
          </div>

        </div>

        {/* Merge Lines into AI MATCHING ENGINE */}
        <div className="w-full max-w-xl flex flex-col items-center py-1">
          <div className="w-2/3 flex justify-between">
            <div className="w-0.5 h-4 bg-indigo-500"></div>
            <div className="w-0.5 h-4 bg-purple-500"></div>
          </div>
          <div className="w-2/3 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
          <div className="w-0.5 h-4 bg-amber-500"></div>
        </div>

        {/* Central Core: AI MATCHING ENGINE */}
        <button
          onClick={() => onSelectStage('matching')}
          className={`flex items-center gap-2 px-6 py-3 rounded-2xl border text-sm font-extrabold transition-all duration-300 cursor-pointer shadow-xl ${
            currentStage === 'matching'
              ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 border-amber-300 ring-4 ring-amber-400/40 scale-110'
              : 'bg-gradient-to-r from-amber-950/80 to-orange-950/80 text-amber-200 border-amber-800/80 hover:border-amber-600'
          }`}
        >
          <Zap className="w-5 h-5 text-amber-400 animate-bounce" />
          <span>AI MATCHING ENGINE</span>
        </button>

        {/* Split to Individual Match & Team Formation */}
        <div className="w-full max-w-md flex flex-col items-center py-1">
          <div className="w-0.5 h-4 bg-amber-500"></div>
          <div className="w-3/4 h-0.5 bg-gradient-to-r from-indigo-500 to-emerald-500"></div>
          <div className="w-3/4 flex justify-between">
            <div className="w-0.5 h-4 bg-indigo-500"></div>
            <div className="w-0.5 h-4 bg-emerald-500"></div>
          </div>
        </div>

        {/* Individual Match vs Team Formation */}
        <div className="w-full max-w-lg grid grid-cols-2 gap-4 text-center">
          <button
            onClick={() => onSelectStage('matching')}
            className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border text-xs font-bold transition-all ${getStageColor('matching')}`}
          >
            <User className="w-3.5 h-3.5 text-indigo-400" />
            <span>Individual Match</span>
          </button>

          <button
            onClick={() => onSelectStage('matching')}
            className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border text-xs font-bold transition-all ${getStageColor('matching')}`}
          >
            <GitMerge className="w-3.5 h-3.5 text-emerald-400" />
            <span>Team Formation</span>
          </button>
        </div>

        {/* Merge Lines into Execution */}
        <div className="w-full max-w-md flex flex-col items-center py-1">
          <div className="w-3/4 flex justify-between">
            <div className="w-0.5 h-4 bg-indigo-500"></div>
            <div className="w-0.5 h-4 bg-emerald-500"></div>
          </div>
          <div className="w-3/4 h-0.5 bg-gradient-to-r from-indigo-500 to-emerald-500"></div>
          <div className="w-0.5 h-4 bg-cyan-500"></div>
        </div>

        {/* Sequence: Project Execution -> Progress Monitoring -> AI Risk Detection -> Completion -> Rating + Trust Score */}
        <div className="w-full max-w-md flex flex-col items-center space-y-3">
          
          {/* Project Execution */}
          <button
            onClick={() => onSelectStage('execution')}
            className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl border text-xs font-bold transition-all ${getStageColor('execution')}`}
          >
            <PlayCircle className="w-4 h-4 text-cyan-400" />
            <span>Project Execution</span>
          </button>

          <div className="w-0.5 h-3 bg-cyan-500"></div>

          {/* Progress Monitoring */}
          <button
            onClick={() => onSelectStage('execution')}
            className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl border text-xs font-bold transition-all ${getStageColor('execution')}`}
          >
            <Activity className="w-4 h-4 text-blue-400" />
            <span>Progress Monitoring</span>
          </button>

          <div className="w-0.5 h-3 bg-rose-500"></div>

          {/* AI Risk Detection */}
          <button
            onClick={() => onSelectStage('risk')}
            className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl border text-xs font-bold transition-all ${getStageColor('risk')}`}
          >
            <ShieldAlert className="w-4 h-4 text-rose-400" />
            <span>AI Risk Detection</span>
          </button>

          <div className="w-0.5 h-3 bg-emerald-500"></div>

          {/* Project Completion */}
          <button
            onClick={() => onSelectStage('completion')}
            className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl border text-xs font-bold transition-all ${getStageColor('completion')}`}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Project Completion</span>
          </button>

          <div className="w-0.5 h-3 bg-amber-500"></div>

          {/* Rating + Trust Score */}
          <button
            onClick={() => onSelectStage('completion')}
            className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border text-xs font-extrabold transition-all ${
              currentStage === 'completion'
                ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 border-amber-300 shadow-lg shadow-amber-500/30'
                : 'bg-amber-950/60 text-amber-300 border-amber-800 hover:border-amber-600'
            }`}
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>Rating + Trust Score</span>
          </button>

        </div>

      </div>
    </div>
  );
}
