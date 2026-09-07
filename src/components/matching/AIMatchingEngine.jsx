import React, { useState } from 'react';
import { 
  Zap, Users, UserCheck, GitMerge, Award, ShieldCheck, 
  ArrowRight, Sparkles, CheckCircle2, DollarSign, Clock, Layers
} from 'lucide-react';
import { MOCK_AI_TEAMS } from '../../data/mockData';

export default function AIMatchingEngine({ freelancers, projects, onSelectMatch }) {
  const [activeTab, setActiveTab] = useState('teams'); // 'individual' | 'teams'
  const [selectedProject, setSelectedProject] = useState(projects[0] || null);

  return (
    <div className="space-y-6">
      
      {/* Header Engine Banner */}
      <div className="glass-card rounded-2xl p-6 border border-emerald-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Zap className="w-6 h-6 text-white animate-bounce" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-extrabold text-white">AI Matching & Team Formation Engine</h2>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                Live Algorithm Active
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              Evaluating skill graph alignment, complementary synergy, and trust score history.
            </p>
          </div>
        </div>

        {/* Tab Switchers */}
        <div className="flex items-center gap-1 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('teams')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'teams'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <GitMerge className="w-3.5 h-3.5" />
            AI Team Formation
          </button>

          <button
            onClick={() => setActiveTab('individual')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'individual'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            Individual Matches
          </button>
        </div>
      </div>

      {/* Selected Target Project Switcher */}
      {selectedProject && (
        <div className="glass-card rounded-xl p-4 border border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Layers className="w-4 h-4 text-indigo-400" />
            <div>
              <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Matching For Project:</span>
              <div className="text-sm font-bold text-white">{selectedProject.title}</div>
            </div>
          </div>
          <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-lg border border-emerald-800">
            Budget: {selectedProject.budget}
          </span>
        </div>
      )}

      {/* TEAM FORMATION TAB */}
      {activeTab === 'teams' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">
              Autonomous AI Assembled Squads ({MOCK_AI_TEAMS.length})
            </h3>
            <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Multi-Role Synergy Optimized
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {MOCK_AI_TEAMS.map((team) => (
              <div key={team.id} className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 space-y-5">
                
                {/* Team Card Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-bold text-white">{team.name}</h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                        {team.compatibilityIndex} Compatibility
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">Synergy Index Score: <span className="text-emerald-400 font-bold">{team.synergyScore}/100</span></p>
                  </div>

                  <div className="text-right">
                    <div className="text-sm font-extrabold text-white">{team.totalCost}</div>
                    <div className="text-[10px] text-slate-400">{team.estTime}</div>
                  </div>
                </div>

                {/* Team Member Badges */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-slate-300">Assembled Squad Members:</div>
                  <div className="space-y-2">
                    {team.roles.map((r, idx) => {
                      const freelancer = freelancers.find(f => f.id === r.freelancerId);
                      if (!freelancer) return null;
                      return (
                        <div key={idx} className="flex items-center justify-between bg-slate-950 p-2.5 rounded-xl border border-slate-900">
                          <div className="flex items-center gap-3">
                            <img src={freelancer.avatar} alt={freelancer.name} className="w-8 h-8 rounded-lg object-cover" />
                            <div>
                              <div className="text-xs font-bold text-white">{freelancer.name}</div>
                              <div className="text-[10px] text-indigo-300">{r.role}</div>
                            </div>
                          </div>

                          <div className="text-right">
                            <span className="text-xs font-bold text-emerald-400">Trust: {freelancer.trustScore}</span>
                            <div className="text-[10px] text-slate-500">${freelancer.hourlyRate}/hr</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* AI Synergy Strengths */}
                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-900 text-xs space-y-1">
                  <span className="font-bold text-indigo-400">AI Synergy Matrix Highlights:</span>
                  <ul className="space-y-1 text-slate-300 text-[11px] mt-1">
                    {team.strengths.map((str, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onSelectMatch(team, selectedProject)}
                  className="w-full py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
                >
                  <span>Approve & Contract AI Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            ))}
          </div>
        </div>
      )}

      {/* INDIVIDUAL MATCH TAB */}
      {activeTab === 'individual' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">
              Top Individual Freelancer Matches
            </h3>
            <span className="text-xs text-slate-400">Ranked by Skill Graph & Past Work</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {freelancers.map((freelancer, idx) => {
              const matchScore = 98 - idx * 3;
              return (
                <div key={freelancer.id} className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <img src={freelancer.avatar} alt={freelancer.name} className="w-12 h-12 rounded-xl object-cover border border-slate-700" />
                        <div>
                          <h4 className="text-base font-bold text-white">{freelancer.name}</h4>
                          <p className="text-xs text-indigo-300">{freelancer.role}</p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg text-xs font-extrabold bg-indigo-950 text-indigo-300 border border-indigo-800">
                        {matchScore}% Match
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 mb-4 line-clamp-2">{freelancer.bio}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {freelancer.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-900 text-slate-300 border border-slate-800">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-white">${freelancer.hourlyRate}/hr</span>
                      <span className="text-[10px] text-slate-400 ml-2">Trust: {freelancer.trustScore}</span>
                    </div>
                    
                    <button
                      onClick={() => onSelectMatch(freelancer, selectedProject)}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
                    >
                      Hire Candidate
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}
