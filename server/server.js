import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import skillGraphRoutes from './routes/skillGraphRoutes.js';
import matchingRoutes from './routes/matchingRoutes.js';
import executionRoutes from './routes/executionRoutes.js';
import riskRoutes from './routes/riskRoutes.js';
import trustScoreRoutes from './routes/trustScoreRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// API Route Mounts matching project flow
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skill-graph', skillGraphRoutes);
app.use('/api/matching', matchingRoutes);
app.use('/api/execution', executionRoutes);
app.use('/api/risk', riskRoutes);
app.use('/api/trust-score', trustScoreRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    system: 'SuperCook Autonomous AI Freelance Engine Backend',
    timestamp: new Date().toISOString(),
    supportedFlow: [
      "HOME",
      "LOGIN / REGISTER",
      "ROLE (CLIENT | FREELANCER | ADMIN)",
      "CREATE PROJECT / SKILL PROFILE",
      "AI REQUIREMENT ANALYSIS / AI SKILL GRAPH",
      "AI MATCHING ENGINE",
      "INDIVIDUAL MATCH / TEAM FORMATION",
      "PROJECT EXECUTION",
      "PROGRESS MONITORING",
      "AI RISK DETECTION",
      "PROJECT COMPLETION",
      "RATING + TRUST SCORE"
    ]
  });
});

// Start Express API Server
app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🚀 SuperCook AI Backend API Server running on port ${PORT}`);
  console.log(`📡 Base URL: http://localhost:${PORT}/api`);
  console.log(`💚 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`======================================================\n`);
});
