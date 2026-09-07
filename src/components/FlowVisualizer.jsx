import React, { useState } from 'react';
import { 
  Home, UserCheck, Users, Briefcase, Cpu, Zap, 
  GitMerge, Activity, ShieldAlert, CheckCircle2, ChevronRight, LayoutGrid, ChevronDown, ChevronUp
} from 'lucide-react';
import FlowDiagramTree from './FlowDiagramTree';

const FLOW_NODES = [
  { id: 'home', label: 'HOME', icon: Home, color: 'from-blue-500 to-indigo-500' },
  { id: 'auth', label: 'LOGIN / REGISTER', icon: UserCheck, color: 'from-indigo-500 to-purple-500' },
  { id: 'role', label: 'CLIENT / FREELANCER / ADMIN', icon: Users, color: 'from-purple-500 to-pink-500' },
  { id: 'analysis', label: 'AI REQUIREMENT / SKILL GRAPH', icon: Cpu, color: 'from-pink-500 to-rose-500' },
  { id: 'matching', label: 'AI MATCHING ENGINE', icon: Zap, color: 'from-amber-500 to-orange-500' },
  { id: 'teams', label: 'INDIVIDUAL / TEAM FORMATION', icon: GitMerge, color: 'from-emerald-500 to-teal-500' },
  { id: 'execution', label: 'EXECUTION & MONITORING', icon: Activity, color: 'from-cyan-500 to-blue-500' },
  { id: 'risk', label: 'AI RISK DETECTION', icon: ShieldAlert, color: 'from-red-500 to-amber-500' },
  { id: 'completion', label: 'COMPLETION & TRUST SCORE', icon: CheckCircle2, color: 'from-yellow-400 to-amber-500' },
];

export default function FlowVisualizer({ currentStage, onSelectStage }) {
  const [showTreeDiagram, setShowTreeDiagram] = useState(false);

  return (
    <div className="w-full bg-[#0d1424]/95 backdrop-blur-md border-b border-indigo-950/60 py-3 px-4 shadow-xl sticky top-16 z-40">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <h3 className="text-xs font-bold tracking-wider uppercase text-indigo-400">
              Interactive System Flow Engine
            </h3>
          </div>
          
          <button
            onClick={() => setShowTreeDiagram(!showTreeDiagram)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold text-indigo-300 bg-indigo-950/80 border border-indigo-800 hover:bg-indigo-900 transition-colors"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-indigo-400" />
            <span>{showTreeDiagram ? 'Hide Flowchart Tree' : 'View Full Architecture Tree'}</span>
            {showTreeDiagram ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Scrollable Flow Track */}
        <div className="flex items-center overflow-x-auto py-1 scrollbar-none gap-1 sm:gap-2">
          {FLOW_NODES.map((node, index) => {
            const Icon = node.icon;
            const isActive = currentStage === node.id;
            const isPast = FLOW_NODES.findIndex(n => n.id === currentStage) > index;

            return (
              <React.Fragment key={node.id}>
                <button
                  onClick={() => onSelectStage(node.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-300 border ${
                    isActive 
                      ? `bg-gradient-to-r ${node.color} text-white border-transparent shadow-lg shadow-indigo-500/25 scale-105` 
                      : isPast
                        ? 'bg-indigo-950/40 text-indigo-300 border-indigo-800/40 hover:bg-indigo-900/50'
                        : 'bg-slate-900/50 text-slate-400 border-slate-800/60 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'animate-bounce' : ''}`} />
                  <span>{node.label}</span>
                  {isPast && <CheckCircle2 className="w-3 h-3 text-emerald-400 ml-1" />}
                </button>
                {index < FLOW_NODES.length - 1 && (
                  <ChevronRight className={`w-3.5 h-3.5 flex-shrink-0 ${
                    isPast ? 'text-indigo-400' : 'text-slate-700'
                  }`} />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Expandable Interactive Flow Tree Diagram */}
        {showTreeDiagram && (
          <div className="mt-4 animate-fadeIn">
            <FlowDiagramTree 
              currentStage={currentStage} 
              onSelectStage={(stage) => {
                onSelectStage(stage);
                setShowTreeDiagram(false);
              }} 
            />
          </div>
        )}
      </div>
    </div>
  );
}
