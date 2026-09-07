import React, { useState } from 'react';
import { Cpu, Sparkles, AlertTriangle, Clock, DollarSign, CheckCircle2, ArrowRight, Layers } from 'lucide-react';

export default function CreateProjectAI({ onCreateProject, onRunMatching }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rawBudget, setRawBudget] = useState('$15,000');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    setIsAnalyzing(true);
    setAnalysisResult(null);

    // Simulate AI LLM Deep Requirement Processing
    setTimeout(() => {
      setAnalysisResult({
        complexityScore: "High (8.4/10)",
        estimatedHours: 240,
        recommendedTeamSize: 3,
        recommendedBudget: rawBudget,
        estimatedDuration: "5 Weeks",
        keyTechNeeded: ["React", "Python", "LangChain", "PostgreSQL", "Docker"],
        riskLevel: "Low-Medium",
        sprintPlan: [
          { sprint: "Sprint 1", focus: "Architecture & Data Pipeline Spec", duration: "1 Week" },
          { sprint: "Sprint 2", focus: "AI Engine & RAG Retrieval Model", duration: "2 Weeks" },
          { sprint: "Sprint 3", focus: "Interactive Dashboard UI & API Integration", duration: "1.5 Weeks" },
          { sprint: "Sprint 4", focus: "Security Auditing & Production Launch", duration: "0.5 Weeks" }
        ],
        aiSummary: "Requirement is well-suited for autonomous multi-freelancer squad execution. Primary critical path lies in RAG vector store indexing latency."
      });
      setIsAnalyzing(false);
    }, 1200);
  };

  const handleFinalSubmit = () => {
    if (!analysisResult) return;

    const newProject = {
      id: `p-${Date.now()}`,
      title,
      description,
      client: "Current Client",
      budget: rawBudget,
      duration: analysisResult.estimatedDuration,
      status: "Matching",
      aiAnalysis: analysisResult,
      assignedFreelancers: [],
      milestones: analysisResult.sprintPlan.map((s, idx) => ({
        id: `m-${idx}`,
        title: s.focus,
        status: "Pending",
        progress: 0,
        dueDate: `2026-10-0${idx + 1}`
      })),
      riskAlerts: []
    };

    onCreateProject(newProject);
    onRunMatching(newProject);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="glass-card rounded-2xl p-6 border border-indigo-500/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center">
            <Cpu className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Create Project & AI Requirement Analysis</h2>
            <p className="text-xs text-slate-400">
              Input your raw project description — the AI engine will parse technology stacks, sprint deliverables, and risks.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Form Inputs */}
        <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Project Brief</h3>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Project Title</label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. AI-Powered Healthcare Analytics Dashboard"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Target Budget</label>
            <input 
              type="text" 
              value={rawBudget}
              onChange={(e) => setRawBudget(e.target.value)}
              placeholder="$15,000"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Detailed Description & Objectives</label>
            <textarea 
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe what you want to build, target users, integrations required, and key performance targets..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
            ></textarea>
          </div>

          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing || !title || !description}
            className="w-full py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-95 disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20"
          >
            {isAnalyzing ? (
              <>
                <Sparkles className="w-4 h-4 animate-spin text-white" />
                <span>Analyzing Requirements with AI...</span>
              </>
            ) : (
              <>
                <Cpu className="w-4 h-4" />
                <span>Run AI Requirement Analysis</span>
              </>
            )}
          </button>
        </div>

        {/* AI Analysis Output */}
        <div className="glass-card rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                AI Decomposition Specs
              </h3>
              {analysisResult && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                  Ready for AI Matching Engine
                </span>
              )}
            </div>

            {!analysisResult && !isAnalyzing && (
              <div className="text-center py-16 text-slate-500 space-y-2">
                <Layers className="w-10 h-10 mx-auto stroke-1 opacity-50" />
                <p className="text-xs">Fill out project brief and click "Run AI Requirement Analysis"</p>
              </div>
            )}

            {isAnalyzing && (
              <div className="text-center py-16 space-y-4">
                <div className="w-12 h-12 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin mx-auto"></div>
                <p className="text-xs text-indigo-300 font-medium">Decomposing project into micro-sprints & tech stacks...</p>
              </div>
            )}

            {analysisResult && (
              <div className="space-y-4 animate-fadeIn">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <div className="text-[10px] text-slate-400 font-medium">Complexity Score</div>
                    <div className="text-sm font-bold text-white">{analysisResult.complexityScore}</div>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <div className="text-[10px] text-slate-400 font-medium">Est. Duration & Effort</div>
                    <div className="text-sm font-bold text-indigo-300">{analysisResult.estimatedDuration} ({analysisResult.estimatedHours}h)</div>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-300 mb-1.5">Required Tech Stack (AI Inferred)</div>
                  <div className="flex flex-wrap gap-1.5">
                    {analysisResult.keyTechNeeded.map((tech, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg text-xs font-bold bg-indigo-950/80 text-indigo-300 border border-indigo-800/60">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-300 mb-1.5">Decomposed Sprint Milestones</div>
                  <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                    {analysisResult.sprintPlan.map((sp, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-slate-950/70 p-2.5 rounded-lg border border-slate-900 text-xs">
                        <span className="font-bold text-purple-300">{sp.sprint}</span>
                        <span className="text-slate-300 truncate max-w-[180px]">{sp.focus}</span>
                        <span className="text-[10px] text-slate-500">{sp.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-indigo-950/40 p-3 rounded-xl border border-indigo-900/60 text-xs text-slate-300">
                  <span className="font-bold text-indigo-300">AI Summary: </span>
                  {analysisResult.aiSummary}
                </div>
              </div>
            )}
          </div>

          {analysisResult && (
            <button
              onClick={handleFinalSubmit}
              className="mt-6 w-full py-3 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
            >
              <span>Publish Project & Launch AI Matching Engine</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
