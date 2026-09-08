# SuperCook Autonomous AI Freelance Platform — Backend API Server

This Node.js + Express REST API backend provides the complete data and intelligence layer for the Autonomous AI Freelance Marketplace, directly mapping to the 12-step architectural workflow:

```
                    HOME
                      │
              LOGIN / REGISTER
                      │
          ┌───────────┼───────────┐
          ↓           ↓           ↓
       CLIENT      FREELANCER    ADMIN
          │           │
          ↓           ↓
    Create Project   Skill Profile
          │           │
          ↓           ↓
    AI Requirement   AI Skill Graph
       Analysis          │
          │              │
          └──────┬───────┘
                 ↓
          AI MATCHING ENGINE
                 ↓
        ┌────────┴────────┐
        ↓                 ↓
  Individual Match    Team Formation
        │                 │
        └────────┬────────┘
                 ↓
          Project Execution
                 ↓
        Progress Monitoring
                 ↓
          AI Risk Detection
                 ↓
          Project Completion
                 ↓
          Rating + Trust Score
```

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Start Backend Server
```bash
# Production mode
npm start

# Development watch mode
npm run dev
```

Server runs on `http://localhost:5000`

---

## 📡 API Endpoints Reference

### 1. Auth & Persona Management
- `POST /api/auth/login` — Login user with role (`client`, `freelancer`, `admin`)
- `GET /api/auth/me` — Get current user session & system status

### 2. Client & Project Creation
- `POST /api/projects/analyze-requirements` — AI LLM Requirement Analysis Engine (parses tech stack, complexity, duration, sprint breakdown)
- `POST /api/projects/create` — Publish project brief
- `GET /api/projects` — Retrieve all projects

### 3. Freelancer AI Skill Graph
- `GET /api/skill-graph/profile/:id` — Retrieve freelancer skill graph topology
- `PUT /api/skill-graph/node` — Add or update verified skill node level
- `GET /api/skill-graph/graphs` — List all verified freelancer skill graphs

### 4. AI Matching Engine & Squad Formation
- `POST /api/matching/match-individual` — Cosine similarity ranking for individual freelancers
- `POST /api/matching/form-teams` — Multi-role synergy matrix algorithm for squad assembly
- `POST /api/matching/approve-contract` — Contract approval and squad deployment

### 5. Execution & Monitoring
- `GET /api/execution/status/:id` — Sprint milestone progress & live commit activity stream
- `PUT /api/execution/milestone` — Update milestone progress
- `POST /api/execution/commit` — Push simulated git commit

### 6. AI Risk Detection Console
- `GET /api/risk/alerts/:projectId` — Fetch continuous AI telemetry risk alerts
- `POST /api/risk/auto-mitigate` — Apply AI Auto-Fix mitigation

### 7. Completion & Trust Score Algorithm
- `POST /api/trust-score/review` — Submit client review & update Trust Score
- `GET /api/trust-score/matrix` — Fetch global Trust Score audit matrix
