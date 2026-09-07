import React, { useState } from 'react';
import { Cpu, CheckCircle2, Zap, Layers, RefreshCw, Plus, Award } from 'lucide-react';

export default function AISkillGraph({ freelancer, onUpdateSkill }) {
  const [selectedNode, setSelectedNode] = useState(freelancer?.skillGraph?.nodes[0] || null);
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillCategory, setNewSkillCategory] = useState('Frontend');
  const [newSkillLevel, setNewSkillLevel] = useState(85);

  const nodes = freelancer?.skillGraph?.nodes || [];
  const links = freelancer?.skillGraph?.links || [];

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;
    
    const newSkill = {
      id: newSkillName.trim(),
      level: Number(newSkillLevel),
      category: newSkillCategory,
      verified: true
    };
    
    onUpdateSkill(newSkill);
    setNewSkillName('');
  };

  return (
    <div className="space-y-6">
      
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-card p-6 rounded-2xl border border-purple-500/30">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img 
              src={freelancer?.avatar} 
              alt={freelancer?.name}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-purple-500/50" 
            />
            <div className="absolute -bottom-1 -right-1 bg-purple-600 text-white rounded-full p-1 border-2 border-slate-900">
              <Award className="w-3.5 h-3.5" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white">{freelancer?.name}</h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                Trust Score: {freelancer?.trustScore}/100
              </span>
            </div>
            <p className="text-xs text-purple-300 font-medium">{freelancer?.role}</p>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">{freelancer?.bio}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800 self-start sm:self-auto">
          <Cpu className="w-5 h-5 text-purple-400 animate-pulse" />
          <div>
            <div className="text-xs font-bold text-white">AI Verified Graph</div>
            <div className="text-[10px] text-slate-400">Node compatibility updated live</div>
          </div>
        </div>
      </div>

      {/* Main Interactive Visual Graph & Inspector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* SVG Node Graph Canvas (2 Columns) */}
        <div className="lg:col-span-2 glass-card rounded-2xl p-6 border border-slate-800 relative overflow-hidden flex flex-col justify-between min-h-[420px]">
          
          <div className="flex items-center justify-between mb-4 z-10">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Skill Topology & Node Graph
              </h3>
            </div>
            <span className="text-xs text-slate-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
              {nodes.length} Verified Skill Nodes
            </span>
          </div>

          {/* SVG Visual Representation */}
          <div className="relative w-full h-80 bg-slate-950/60 rounded-xl border border-slate-900 flex items-center justify-center p-4">
            <svg className="w-full h-full" viewBox="0 0 500 300">
              
              {/* Background Network Grid Lines */}
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#c084fc" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Connecting Edges */}
              {links.map((link, idx) => {
                // Find node positions
                const sourceIdx = nodes.findIndex(n => n.id === link.source);
                const targetIdx = nodes.findIndex(n => n.id === link.target);
                
                const sPos = getCoordinates(sourceIdx, nodes.length);
                const tPos = getCoordinates(targetIdx, nodes.length);

                return (
                  <g key={idx}>
                    <line 
                      x1={sPos.x} 
                      y1={sPos.y} 
                      x2={tPos.x} 
                      y2={tPos.y} 
                      stroke="url(#lineGrad)" 
                      strokeWidth={link.strength * 3}
                      strokeDasharray="4,4"
                      className="animate-pulse"
                    />
                  </g>
                );
              })}

              {/* Nodes */}
              {nodes.map((node, idx) => {
                const pos = getCoordinates(idx, nodes.length);
                const isSelected = selectedNode?.id === node.id;
                const radius = 18 + (node.level / 100) * 10;

                return (
                  <g 
                    key={node.id} 
                    transform={`translate(${pos.x}, ${pos.y})`}
                    onClick={() => setSelectedNode(node)}
                    className="cursor-pointer group"
                  >
                    {/* Node Aura Glow */}
                    <circle 
                      r={radius + (isSelected ? 8 : 4)} 
                      className={`${isSelected ? 'fill-purple-500/30 stroke-purple-400' : 'fill-indigo-500/10 stroke-indigo-500/30'} stroke-1 transition-all`}
                    />

                    {/* Node Core */}
                    <circle 
                      r={radius} 
                      className={`${
                        isSelected 
                          ? 'fill-gradient-to-r from-purple-600 to-pink-600 stroke-white' 
                          : node.category === 'AI/ML' 
                            ? 'fill-purple-900/90 stroke-purple-400' 
                            : node.category === 'Frontend'
                              ? 'fill-blue-900/90 stroke-blue-400'
                              : 'fill-slate-900/90 stroke-indigo-400'
                      } stroke-2 transition-all hover:scale-110`}
                    />

                    {/* Node Text Label */}
                    <text 
                      y={4} 
                      textAnchor="middle" 
                      className="fill-white text-[11px] font-bold pointer-events-none drop-shadow-md"
                    >
                      {node.id}
                    </text>

                    {/* Verified Icon Badge */}
                    {node.verified && (
                      <circle 
                        cx={radius - 4} 
                        cy={-radius + 4} 
                        r="5" 
                        className="fill-emerald-500 stroke-slate-900 stroke-1"
                      />
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 mt-4 z-10">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block"></span> AI / ML</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span> Frontend</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block"></span> Backend</span>
            </div>
            <span>Click any node to adjust proficiency level</span>
          </div>
        </div>

        {/* Node Inspector & Add Skill Sidebar */}
        <div className="space-y-6">
          
          {/* Selected Node Details */}
          {selectedNode && (
            <div className="glass-card rounded-2xl p-5 border border-purple-500/40">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Node Inspector</span>
                {selectedNode.verified && (
                  <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded-md border border-emerald-800">
                    <CheckCircle2 className="w-3 h-3" /> AI Verified
                  </span>
                )}
              </div>

              <h4 className="text-lg font-bold text-white mb-1">{selectedNode.id}</h4>
              <p className="text-xs text-slate-400 mb-4">Category: {selectedNode.category}</p>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                    <span>Proficiency Index</span>
                    <span className="text-purple-400 font-bold">{selectedNode.level}%</span>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
                    <div 
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-500" 
                      style={{ width: `${selectedNode.level}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-xs text-slate-300">
                  <span className="font-semibold text-white">AI Skill Impact:</span>
                  <p className="text-slate-400 mt-0.5">
                    High weight in <strong>Individual Match Engine</strong> for RAG & LLM backend projects.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Add Skill to Graph Form */}
          <div className="glass-card rounded-2xl p-5 border border-slate-800">
            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Plus className="w-4 h-4 text-indigo-400" />
              Add Skill Node to Graph
            </h4>

            <form onSubmit={handleAddSkill} className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Skill Name</label>
                <input 
                  type="text" 
                  value={newSkillName}
                  onChange={(e) => setNewSkillName(e.target.value)}
                  placeholder="e.g. PyTorch, Docker, Next.js"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Category</label>
                  <select 
                    value={newSkillCategory}
                    onChange={(e) => setNewSkillCategory(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="AI/ML">AI / ML</option>
                    <option value="Design">Design</option>
                    <option value="QA">QA / Audit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Level ({newSkillLevel}%)</label>
                  <input 
                    type="range" 
                    min="50" 
                    max="100" 
                    value={newSkillLevel}
                    onChange={(e) => setNewSkillLevel(e.target.value)}
                    className="w-full mt-2 accent-indigo-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl font-bold text-xs text-white bg-indigo-600 hover:bg-indigo-500 transition-colors flex items-center justify-center gap-2"
              >
                <span>Add Node & Re-index Graph</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}

// Helper calculation to distribute SVG nodes evenly in a circle around the canvas
function getCoordinates(index, total) {
  const centerX = 250;
  const centerY = 150;
  const radius = 100;
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  return {
    x: centerX + radius * Math.cos(angle),
    y: centerY + radius * Math.sin(angle)
  };
}
