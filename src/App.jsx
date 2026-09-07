import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FlowVisualizer from './components/FlowVisualizer';
import HeroLanding from './components/HeroLanding';
import AuthModal from './components/auth/AuthModal';

import ClientDashboard from './components/client/ClientDashboard';
import CreateProjectAI from './components/client/CreateProjectAI';

import FreelancerDashboard from './components/freelancer/FreelancerDashboard';
import AISkillGraph from './components/freelancer/AISkillGraph';

import AIMatchingEngine from './components/matching/AIMatchingEngine';
import ProjectMonitor from './components/execution/ProjectMonitor';
import AIRiskDetection from './components/execution/AIRiskDetection';
import TrustScoreSystem from './components/trust/TrustScoreSystem';
import AdminDashboard from './components/admin/AdminDashboard';

import { INITIAL_FREELANCERS, INITIAL_PROJECTS } from './data/mockData';

export default function App() {
  const [userRole, setUserRole] = useState('client'); // 'client' | 'freelancer' | 'admin'
  const [activeView, setActiveView] = useState('home'); // 'home' | 'client_dashboard' | 'freelancer_dashboard' | 'admin_dashboard' | 'create_project' | 'skill_graph' | 'matching' | 'execution' | 'risk' | 'completion'
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const [freelancers, setFreelancers] = useState(INITIAL_FREELANCERS);
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [activeProject, setActiveProject] = useState(INITIAL_PROJECTS[0]);

  // Handle flow stage selection from visualizer bar or tree map
  const handleSelectStage = (stageId) => {
    switch(stageId) {
      case 'home':
        setActiveView('home');
        break;
      case 'auth':
        setIsAuthOpen(true);
        break;
      case 'role':
        if (userRole === 'client') setActiveView('client_dashboard');
        else if (userRole === 'freelancer') setActiveView('freelancer_dashboard');
        else setActiveView('admin_dashboard');
        break;
      case 'client_dashboard':
        setUserRole('client');
        setActiveView('client_dashboard');
        break;
      case 'freelancer_dashboard':
        setUserRole('freelancer');
        setActiveView('freelancer_dashboard');
        break;
      case 'admin_dashboard':
        setUserRole('admin');
        setActiveView('admin_dashboard');
        break;
      case 'create_project':
        setUserRole('client');
        setActiveView('create_project');
        break;
      case 'skill_graph':
        setUserRole('freelancer');
        setActiveView('skill_graph');
        break;
      case 'analysis':
        if (userRole === 'freelancer') setActiveView('skill_graph');
        else setActiveView('create_project');
        break;
      case 'matching':
      case 'teams':
        setActiveView('matching');
        break;
      case 'execution':
        setActiveView('execution');
        break;
      case 'risk':
        setActiveView('risk');
        break;
      case 'completion':
        setActiveView('completion');
        break;
      default:
        setActiveView('home');
    }
  };

  const handleRoleChange = (newRole) => {
    setUserRole(newRole);
    if (newRole === 'client') setActiveView('client_dashboard');
    else if (newRole === 'freelancer') setActiveView('freelancer_dashboard');
    else if (newRole === 'admin') setActiveView('admin_dashboard');
  };

  const handleAddProject = (newProject) => {
    setProjects(prev => [newProject, ...prev]);
    setActiveProject(newProject);
  };

  const handleUpdateFreelancerSkill = (newSkill) => {
    setFreelancers(prev => prev.map(f => {
      if (f.id === 'f1') {
        const existingIndex = f.skillGraph.nodes.findIndex(n => n.id === newSkill.id);
        let updatedNodes = [...f.skillGraph.nodes];
        if (existingIndex >= 0) {
          updatedNodes[existingIndex] = newSkill;
        } else {
          updatedNodes.push(newSkill);
        }
        return {
          ...f,
          skills: [...new Set([...f.skills, newSkill.id])],
          skillGraph: { ...f.skillGraph, nodes: updatedNodes }
        };
      }
      return f;
    }));
  };

  // Determine active visualizer flow stage highlight
  const getFlowStageId = () => {
    if (activeView === 'home') return 'home';
    if (activeView.includes('dashboard')) return 'role';
    if (activeView === 'create_project' || activeView === 'skill_graph') return 'analysis';
    if (activeView === 'matching') return 'matching';
    if (activeView === 'execution') return 'execution';
    if (activeView === 'risk') return 'risk';
    if (activeView === 'completion') return 'completion';
    return 'home';
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#080c14] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Top Navbar */}
      <Navbar 
        userRole={userRole}
        onRoleChange={handleRoleChange}
        onOpenAuth={() => setIsAuthOpen(true)}
        activeView={activeView}
        setActiveView={setActiveView}
      />

      {/* Interactive System Flow Bar */}
      <FlowVisualizer 
        currentStage={getFlowStageId()}
        onSelectStage={handleSelectStage}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {activeView === 'home' && (
          <HeroLanding 
            onGetStarted={(role) => {
              handleRoleChange(role);
            }}
            onSelectStage={handleSelectStage}
            currentStage={getFlowStageId()}
          />
        )}

        {activeView === 'client_dashboard' && (
          <ClientDashboard 
            projects={projects}
            onNavigate={(view) => setActiveView(view)}
          />
        )}

        {activeView === 'create_project' && (
          <CreateProjectAI 
            onCreateProject={handleAddProject}
            onRunMatching={(proj) => {
              setActiveProject(proj);
              setActiveView('matching');
            }}
          />
        )}

        {activeView === 'freelancer_dashboard' && (
          <FreelancerDashboard 
            freelancer={freelancers[0]}
            onNavigate={(view) => setActiveView(view)}
          />
        )}

        {activeView === 'skill_graph' && (
          <AISkillGraph 
            freelancer={freelancers[0]}
            onUpdateSkill={handleUpdateFreelancerSkill}
          />
        )}

        {activeView === 'matching' && (
          <AIMatchingEngine 
            freelancers={freelancers}
            projects={projects}
            onSelectMatch={(matchedUnit, proj) => {
              setActiveView('execution');
            }}
          />
        )}

        {activeView === 'execution' && (
          <ProjectMonitor 
            project={activeProject}
            onTriggerRisk={() => setActiveView('risk')}
          />
        )}

        {activeView === 'risk' && (
          <AIRiskDetection 
            project={activeProject}
            onResolveRisk={() => {}}
            onProceedToCompletion={() => setActiveView('completion')}
          />
        )}

        {activeView === 'completion' && (
          <TrustScoreSystem 
            project={activeProject}
            freelancers={freelancers}
            onCompleteFeedback={() => {}}
          />
        )}

        {activeView === 'admin_dashboard' && (
          <AdminDashboard 
            projects={projects}
            freelancers={freelancers}
            onNavigate={(view) => setActiveView(view)}
          />
        )}

      </main>

      {/* Auth / Role Switcher Modal */}
      <AuthModal 
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onSelectRole={(role) => handleRoleChange(role)}
      />

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-[#060910] py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>SuperCook AI Platform & System Flow Engine © 2026</span>
          <div className="flex items-center gap-4">
            <button onClick={() => setActiveView('home')} className="hover:text-slate-300">Home</button>
            <button onClick={() => setActiveView('matching')} className="hover:text-slate-300">AI Engine</button>
            <button onClick={() => setActiveView('risk')} className="hover:text-slate-300">Risk Console</button>
          </div>
        </div>
      </footer>

    </div>
  );
}
