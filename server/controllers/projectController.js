import { database } from '../config/db.js';

// AI Requirement Analysis Engine Endpoint
export const analyzeRequirements = (req, res) => {
  const { title, description, budget } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: "Title and description are required for AI Analysis." });
  }

  // Parse technology keywords from brief
  const knownTech = ["React", "Python", "LangChain", "Node.js", "PostgreSQL", "Go", "Docker", "Kubernetes", "Figma", "PyTorch", "TailwindCSS"];
  const inferredTech = knownTech.filter(tech => 
    description.toLowerCase().includes(tech.toLowerCase()) || title.toLowerCase().includes(tech.toLowerCase())
  );

  const finalTech = inferredTech.length >= 3 ? inferredTech : ["React", "Python", "LangChain", "PostgreSQL", "Docker"];

  // Compute effort estimation
  const wordCount = description.split(' ').length;
  const estimatedHours = Math.max(120, Math.min(500, wordCount * 5 + 150));
  const estimatedDurationWeeks = Math.ceil(estimatedHours / 60);

  const analysisResult = {
    complexityScore: estimatedHours > 300 ? "High (8.6/10)" : "Medium (6.4/10)",
    estimatedHours,
    recommendedTeamSize: estimatedHours > 250 ? 3 : 2,
    recommendedBudget: budget || "$18,000",
    estimatedDuration: `${estimatedDurationWeeks} Weeks`,
    keyTechNeeded: finalTech,
    riskLevel: "Low-Medium",
    sprintPlan: [
      { sprint: "Sprint 1", focus: "Architecture & Data Pipeline Specs", duration: "1 Week" },
      { sprint: "Sprint 2", focus: "AI Engine, LLM Integration & RAG Retrieval Model", duration: `${Math.max(1, estimatedDurationWeeks - 3)} Weeks` },
      { sprint: "Sprint 3", focus: "Interactive Dashboard UI & API Integration", duration: "1.5 Weeks" },
      { sprint: "Sprint 4", focus: "Security Audit, Load Testing & Production Launch", duration: "0.5 Weeks" }
    ],
    aiSummary: `Parsed project '${title}' successfully. Requirement breaks down into ${estimatedDurationWeeks} weeks across ${finalTech.length} tech stacks. Ready for AI Squad Matching Engine.`
  };

  return res.json({
    success: true,
    analysis: analysisResult
  });
};

// Create New Project Endpoint
export const createProject = (req, res) => {
  const { title, description, budget, aiAnalysis } = req.body;

  const newProject = {
    id: `p-${Date.now()}`,
    title: title || "New AI Project",
    description: description || "Project brief",
    client: "Client User",
    budget: budget || "$20,000",
    duration: aiAnalysis?.estimatedDuration || "5 Weeks",
    status: "Matching",
    aiAnalysis: aiAnalysis || {
      complexityScore: "Medium (6.5/10)",
      estimatedHours: 200,
      recommendedTeamSize: 2,
      keyTechNeeded: ["React", "Python", "Node.js"],
      riskLevel: "Low",
      aiSummary: "Standard full-stack project."
    },
    assignedFreelancers: [],
    milestones: (aiAnalysis?.sprintPlan || [
      { sprint: "Sprint 1", focus: "Initial Design & Setup", duration: "1 Week" },
      { sprint: "Sprint 2", focus: "Core Execution", duration: "2 Weeks" }
    ]).map((s, idx) => ({
      id: `m-${Date.now()}-${idx}`,
      title: s.focus,
      status: "Pending",
      progress: 0,
      dueDate: `2026-10-0${idx + 1}`
    })),
    riskAlerts: []
  };

  database.projects.unshift(newProject);

  return res.status(201).json({
    message: "Project published successfully",
    project: newProject
  });
};

// Get All Projects
export const getProjects = (req, res) => {
  return res.json({
    count: database.projects.length,
    projects: database.projects
  });
};

// Get Single Project by ID
export const getProjectById = (req, res) => {
  const { id } = req.params;
  const project = database.projects.find(p => p.id === id);

  if (!project) {
    return res.status(404).json({ error: "Project not found." });
  }

  return res.json({ project });
};
