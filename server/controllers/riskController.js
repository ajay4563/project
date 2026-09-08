import { database } from '../config/db.js';

// Get AI Risk Detection Alerts for Project
export const getRiskAlerts = (req, res) => {
  const { projectId } = req.params;
  const project = database.projects.find(p => p.id === projectId) || database.projects[0];

  const activeAlerts = project.riskAlerts || [];
  const unmitigatedCount = activeAlerts.filter(a => !a.mitigated).length;
  const platformRiskScore = unmitigatedCount === 0 ? "Low (0.2/10)" : "Moderate (4.8/10)";

  return res.json({
    projectId: project.id,
    platformRiskScore,
    activeAlertsCount: activeAlerts.length,
    unmitigatedCount,
    riskAlerts: activeAlerts
  });
};

// Apply AI Auto-Fix Mitigation for Detected Anomaly
export const applyAutoFixMitigation = (req, res) => {
  const { projectId, alertId } = req.body;

  const project = database.projects.find(p => p.id === projectId) || database.projects[0];
  const targetAlert = project.riskAlerts.find(a => a.id === alertId);

  if (targetAlert) {
    targetAlert.mitigated = true;
  }

  const unmitigatedCount = project.riskAlerts.filter(a => !a.mitigated).length;

  return res.json({
    message: "AI Auto-Fix applied successfully. Telemetry risk anomaly resolved.",
    alertId,
    resolvedAlert: targetAlert,
    platformRiskScore: unmitigatedCount === 0 ? "Low (0.2/10)" : "Moderate (4.8/10)",
    allMitigated: unmitigatedCount === 0
  });
};
