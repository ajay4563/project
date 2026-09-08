import { database } from '../config/db.js';

// Get Execution Details for Project
export const getExecutionStatus = (req, res) => {
  const { id } = req.params;
  const project = database.projects.find(p => p.id === id) || database.projects[0];

  const totalMilestones = project.milestones.length;
  const completedMilestones = project.milestones.filter(m => m.status === 'Completed').length;
  const overallProgress = totalMilestones > 0 ? Math.round((completedMilestones / totalMilestones) * 100) : 68;

  return res.json({
    project,
    overallProgress,
    commits: database.commits
  });
};

// Update Milestone Progress
export const updateMilestoneProgress = (req, res) => {
  const { projectId, milestoneId, status, progress } = req.body;

  const project = database.projects.find(p => p.id === projectId) || database.projects[0];
  const milestone = project.milestones.find(m => m.id === milestoneId);

  if (milestone) {
    if (status) milestone.status = status;
    if (progress !== undefined) milestone.progress = Number(progress);
  }

  return res.json({
    message: "Milestone status updated successfully.",
    project
  });
};

// Push Simulated Git Commit Activity Stream
export const pushGitCommit = (req, res) => {
  const { branch, author, message, changes } = req.body;

  const newCommit = {
    id: `c-${Date.now()}`,
    branch: branch || "feat/ai-sprint",
    author: author || "Alex Rivera",
    message: message || "Automated milestone commit push",
    changes: changes || "+85 lines, -4 lines",
    timestamp: "Just now"
  };

  database.commits.unshift(newCommit);

  return res.status(201).json({
    message: "Git commit logged to activity stream.",
    commit: newCommit
  });
};
