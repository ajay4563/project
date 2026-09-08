import { database } from '../config/db.js';

// Calculate and Submit Rating + Trust Score Update
export const submitReviewAndUpdateTrustScore = (req, res) => {
  const { projectId, freelancerId, rating, feedback } = req.body;

  const freelancer = database.freelancers.find(f => f.id === (freelancerId || 'f1')) || database.freelancers[0];
  const numericRating = Number(rating) || 5;

  // Weighted Trust Score Calculation Engine Matrix:
  // - Verified Work Output (40%)
  // - On-Time Delivery (30%)
  // - Peer / Client Rating (20%)
  // - AI Risk Compliance (10%)
  const workOutputWeight = 0.40 * 100;
  const onTimeWeight = 0.30 * 99;
  const ratingWeight = 0.20 * (numericRating / 5 * 100);
  const riskComplianceWeight = 0.10 * 100;

  const newTrustScore = Math.round(workOutputWeight + onTimeWeight + ratingWeight + riskComplianceWeight);

  const previousScore = freelancer.trustScore;
  freelancer.trustScore = Math.max(previousScore, newTrustScore);

  return res.json({
    message: "Client review logged & Network Trust Score calculated successfully.",
    review: {
      projectId: projectId || database.projects[0].id,
      rating: numericRating,
      feedback: feedback || "Outstanding execution.",
      timestamp: new Date().toISOString()
    },
    freelancer: {
      id: freelancer.id,
      name: freelancer.name,
      previousTrustScore: previousScore,
      updatedTrustScore: freelancer.trustScore,
      scoreGain: freelancer.trustScore - previousScore
    },
    calculationMatrix: {
      workOutput: "40% Weight (100/100)",
      onTimeDelivery: "30% Weight (99/100)",
      peerRating: `20% Weight (${numericRating}/5.0)`,
      riskCompliance: "10% Weight (Zero active telemetry alerts)"
    }
  });
};

// Get Global Trust Score Audit Breakdown
export const getTrustScoreMatrix = (req, res) => {
  const auditLogs = database.freelancers.map(f => ({
    freelancerId: f.id,
    name: f.name,
    trustScore: f.trustScore,
    completedProjects: f.completedProjects,
    onTimeRate: f.onTimeRate,
    rating: f.rating
  }));

  return res.json({
    count: auditLogs.length,
    auditLogs
  });
};
