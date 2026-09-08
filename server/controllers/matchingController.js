import { database } from '../config/db.js';

// Calculate Individual Skill Vector Similarity Match
export const matchIndividualCandidates = (req, res) => {
  const { projectId } = req.body;

  const project = database.projects.find(p => p.id === projectId) || database.projects[0];
  const reqSkills = project?.aiAnalysis?.keyTechNeeded || ["React", "Python", "LangChain"];

  const rankedCandidates = database.freelancers.map(freelancer => {
    // Cosine similarity proxy calculation
    const matchedSkills = freelancer.skills.filter(s => reqSkills.includes(s));
    const skillMatchRatio = matchedSkills.length / Math.max(1, reqSkills.length);
    const trustFactor = freelancer.trustScore / 100;
    
    const overallMatchScore = Math.min(99, Math.round((skillMatchRatio * 0.6 + trustFactor * 0.4) * 100));

    return {
      freelancer,
      matchScore: overallMatchScore,
      matchedSkillsCount: matchedSkills.length,
      matchedSkills
    };
  }).sort((a, b) => b.matchScore - a.matchScore);

  return res.json({
    projectId: project.id,
    projectTitle: project.title,
    count: rankedCandidates.length,
    candidates: rankedCandidates
  });
};

// Autonomous Squad Formation Synergy Engine
export const formAITeams = (req, res) => {
  const { projectId } = req.body;

  const teams = database.aiTeams.map(team => {
    const memberDetails = team.members.map(mId => database.freelancers.find(f => f.id === mId)).filter(Boolean);
    return {
      ...team,
      memberProfiles: memberDetails
    };
  });

  return res.json({
    projectId: projectId || database.projects[0].id,
    recommendedTeamsCount: teams.length,
    teams
  });
};

// Approve and Contract AI Squad / Candidate
export const approveContract = (req, res) => {
  const { projectId, matchedUnit } = req.body;

  const project = database.projects.find(p => p.id === projectId) || database.projects[0];

  project.status = "In Execution";
  if (matchedUnit?.members) {
    project.assignedFreelancers = matchedUnit.members;
  } else if (matchedUnit?.id) {
    project.assignedFreelancers = [matchedUnit.id];
  }

  return res.json({
    message: "Contract approved & Squad deployed into Project Execution stage.",
    project
  });
};
