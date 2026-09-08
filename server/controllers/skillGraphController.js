import { database } from '../config/db.js';

// Get Freelancer Profile & Skill Graph
export const getFreelancerProfile = (req, res) => {
  const { id } = req.params;
  const freelancer = database.freelancers.find(f => f.id === (id || 'f1')) || database.freelancers[0];

  return res.json({
    freelancer
  });
};

// Add or Update Skill Node in AI Skill Graph
export const updateSkillGraphNode = (req, res) => {
  const { freelancerId, skillName, level, category } = req.body;

  const targetFreelancer = database.freelancers.find(f => f.id === (freelancerId || 'f1')) || database.freelancers[0];

  const existingNodeIndex = targetFreelancer.skillGraph.nodes.findIndex(n => n.id.toLowerCase() === skillName.toLowerCase());

  const newNode = {
    id: skillName,
    level: Number(level) || 85,
    category: category || "Backend",
    verified: true
  };

  if (existingNodeIndex >= 0) {
    targetFreelancer.skillGraph.nodes[existingNodeIndex] = newNode;
  } else {
    targetFreelancer.skillGraph.nodes.push(newNode);
    if (!targetFreelancer.skills.includes(skillName)) {
      targetFreelancer.skills.push(skillName);
    }
  }

  return res.json({
    message: "Skill node added & AI Graph topology re-indexed successfully.",
    freelancer: targetFreelancer
  });
};

// List All Verified Freelancer Skill Graphs
export const getAllSkillGraphs = (req, res) => {
  const graphs = database.freelancers.map(f => ({
    id: f.id,
    name: f.name,
    role: f.role,
    trustScore: f.trustScore,
    nodesCount: f.skillGraph.nodes.length,
    skillGraph: f.skillGraph
  }));

  return res.json({
    count: graphs.length,
    graphs
  });
};
