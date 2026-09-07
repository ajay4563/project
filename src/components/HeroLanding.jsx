import React from 'react';
import { 
  Sparkles, Zap, Cpu, GitMerge, ShieldAlert, Award, 
  ArrowRight, CheckCircle2, Play, Users, Layers, Code2, Briefcase, Shield
} from 'lucide-react';
import FlowDiagramTree from './FlowDiagramTree';

export default function HeroLanding({ onGetStarted, onSelectStage, currentStage }) {
  return (
    <div className="relative overflow-hidden pt-4 pb-16">
      
      {/* Dynamic Background Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-950/80 border border-indigo-500/30 mb-6 shadow-inner">
            <Sparkles className="w-4 h-4 text-indigo-400 animate-spin" />
            <span className="text-xs font-bold text-indigo-200 uppercase tracking-wider">
              Autonomous AI Freelance Platform & Workflow Engine
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Smart Matching, Autonomous <br className="hidden sm:inline" />
            <span className="gradient-text">AI Skill Graphs & Squad Formations</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            From raw AI requirement analysis to dynamic skill graph topology, multi-freelancer squad assembly, continuous telemetry risk detection, and immutable trust scores.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onGetStarted('client')}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 shadow-xl shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <Briefcase className="w-4.5 h-4.5" />
              <span>Client Flow (Create Project)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onGetStarted('freelancer')}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-slate-900/90 border border-slate-700 hover:bg-slate-800 hover:border-purple-500/50 transition-all transform hover:-translate-y-0.5"
            >
              <Cpu className="w-4 h-4 text-purple-400" />
              <span>Freelancer Flow (AI Skill Graph)</span>
            </button>

            <button
              onClick={() => onGetStarted('admin')}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-rose-300 bg-rose-950/40 border border-rose-800/60 hover:bg-rose-900/50 transition-all transform hover:-translate-y-0.5"
            >
              <Shield className="w-4 h-4 text-rose-400" />
              <span>Admin Flow (Risk Console)</span>
            </button>
          </div>
        </div>

        {/* Embedded Interactive System Architecture Flow Diagram */}
        <div className="my-10">
          <FlowDiagramTree 
            currentStage={currentStage || 'home'} 
            onSelectStage={onSelectStage} 
          />
        </div>

        {/* Dynamic Architectural Flow Cards Grid */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white tracking-wide uppercase">
              End-to-End System Workflow Modules
            </h2>
            <p className="text-xs text-slate-400">Click any card below to launch the corresponding live platform view</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Card 1: Requirement Analysis */}
            <div 
              onClick={() => onSelectStage('analysis')}
              className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-800 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="w-5 h-5 text-indigo-400" />
              </div>
              <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">Step 1</div>
              <h3 className="text-base font-bold text-white mb-2">AI Requirement Analysis</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Parse client project briefs into micro-sprints, stack specifications, duration estimates, and effort points.
              </p>
            </div>

            {/* Card 2: Skill Graph */}
            <div 
              onClick={() => onSelectStage('skill_graph')}
              className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-800 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Layers className="w-5 h-5 text-purple-400" />
              </div>
              <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">Step 2</div>
              <h3 className="text-base font-bold text-white mb-2">AI Skill Graph Topology</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Verified graph representation mapping freelancer node levels, inter-skill connections, and proficiency weights.
              </p>
            </div>

            {/* Card 3: Matching & Teams */}
            <div 
              onClick={() => onSelectStage('matching')}
              className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-800 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-600/20 border border-amber-500/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">Step 3</div>
              <h3 className="text-base font-bold text-white mb-2">AI Team Formation Engine</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Compute synergy matrices, individual skill vectors, and automatically assemble multi-role product squads.
              </p>
            </div>

            {/* Card 4: Risk & Trust */}
            <div 
              onClick={() => onSelectStage('risk')}
              className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-800 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-rose-600/20 border border-rose-500/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldAlert className="w-5 h-5 text-rose-400" />
              </div>
              <div className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-1">Step 4</div>
              <h3 className="text-base font-bold text-white mb-2">AI Risk & Trust Score</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Real-time telemetry delay flagging, AI auto-mitigation fixes, and weighted global Trust Score updates.
              </p>
            </div>

          </div>
        </div>

        {/* Live System Metrics Banner */}
        <div className="mt-12 glass-card rounded-2xl p-6 sm:p-8 border border-indigo-900/40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-indigo-400 mb-1">99.4%</div>
              <div className="text-xs text-slate-400 font-medium">AI Skill Match Accuracy</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-purple-400 mb-1">&lt; 35s</div>
              <div className="text-xs text-slate-400 font-medium">Squad Assembling Velocity</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-pink-400 mb-1">98.2%</div>
              <div className="text-xs text-slate-400 font-medium">On-Time Execution Delivery</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mb-1">100%</div>
              <div className="text-xs text-slate-400 font-medium">Verified Skill Graphs</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
