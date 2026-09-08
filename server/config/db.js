// In-Memory Persistent Database Store pre-seeded for SuperCook AI Platform

export const database = {
  users: [
    {
      id: "u-client-1",
      email: "client@supercook.ai",
      name: "Nexus Global Tech",
      role: "client"
    },
    {
      id: "u-freelancer-1",
      email: "alex@supercook.ai",
      name: "Alex Rivera",
      role: "freelancer"
    },
    {
      id: "u-admin-1",
      email: "admin@supercook.ai",
      name: "System Governor",
      role: "admin"
    }
  ],

  freelancers: [
    {
      id: "f1",
      userId: "u-freelancer-1",
      name: "Alex Rivera",
      role: "Full-Stack AI Developer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      trustScore: 98,
      rating: 4.95,
      hourlyRate: 85,
      completedProjects: 34,
      onTimeRate: "99%",
      skills: ["React", "Python", "LangChain", "Node.js", "PyTorch", "TailwindCSS"],
      skillGraph: {
        nodes: [
          { id: "React", level: 95, category: "Frontend", verified: true },
          { id: "Python", level: 98, category: "AI/ML", verified: true },
          { id: "LangChain", level: 92, category: "AI/ML", verified: true },
          { id: "Node.js", level: 88, category: "Backend", verified: true },
          { id: "PyTorch", level: 85, category: "AI/ML", verified: true },
          { id: "TailwindCSS", level: 90, category: "Frontend", verified: true }
        ],
        links: [
          { source: "Python", target: "LangChain", strength: 0.95 },
          { source: "Python", target: "PyTorch", strength: 0.9 },
          { source: "React", target: "TailwindCSS", strength: 0.88 },
          { source: "React", target: "Node.js", strength: 0.85 },
          { source: "Node.js", target: "Python", strength: 0.75 }
        ]
      },
      bio: "Specializing in building end-to-end LLM applications, RAG pipelines, and high-performance web systems."
    },
    {
      id: "f2",
      userId: "u-freelancer-2",
      name: "Sophia Chen",
      role: "UI/UX & AI Interface Designer",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
      trustScore: 96,
      rating: 4.92,
      hourlyRate: 75,
      completedProjects: 28,
      onTimeRate: "97%",
      skills: ["Figma", "Design Systems", "Prototyping", "TailwindCSS", "User Research"],
      skillGraph: {
        nodes: [
          { id: "Figma", level: 98, category: "Design", verified: true },
          { id: "Design Systems", level: 94, category: "Design", verified: true },
          { id: "Prototyping", level: 90, category: "Design", verified: true },
          { id: "TailwindCSS", level: 82, category: "Frontend", verified: true },
          { id: "User Research", level: 88, category: "Design", verified: true }
        ],
        links: [
          { source: "Figma", target: "Design Systems", strength: 0.96 },
          { source: "Figma", target: "Prototyping", strength: 0.92 },
          { source: "Design Systems", target: "TailwindCSS", strength: 0.80 }
        ]
      },
      bio: "Crafting intuitive, accessible interfaces for complex AI agents and web dashboards."
    },
    {
      id: "f3",
      userId: "u-freelancer-3",
      name: "Marcus Vance",
      role: "Backend Architect & DevOps",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      trustScore: 94,
      rating: 4.89,
      hourlyRate: 90,
      completedProjects: 42,
      onTimeRate: "96%",
      skills: ["Go", "Kubernetes", "PostgreSQL", "Docker", "AWS", "GraphQL"],
      skillGraph: {
        nodes: [
          { id: "Go", level: 92, category: "Backend", verified: true },
          { id: "Kubernetes", level: 95, category: "DevOps", verified: true },
          { id: "PostgreSQL", level: 90, category: "Database", verified: true },
          { id: "Docker", level: 96, category: "DevOps", verified: true },
          { id: "AWS", level: 94, category: "Cloud", verified: true }
        ],
        links: [
          { source: "Docker", target: "Kubernetes", strength: 0.98 },
          { source: "Go", target: "PostgreSQL", strength: 0.88 },
          { source: "Kubernetes", target: "AWS", strength: 0.94 }
        ]
      },
      bio: "Cloud-native microservices specialist with deep experience scaling high-traffic AI platforms."
    },
    {
      id: "f4",
      userId: "u-freelancer-4",
      name: "Elena Rostova",
      role: "AI Risk & QA Engineer",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      trustScore: 97,
      rating: 4.96,
      hourlyRate: 80,
      completedProjects: 31,
      onTimeRate: "100%",
      skills: ["Automated Testing", "AI Model Auditing", "Python", "CI/CD", "Security Auditing"],
      skillGraph: {
        nodes: [
          { id: "Automated Testing", level: 96, category: "QA", verified: true },
          { id: "AI Model Auditing", level: 92, category: "AI/ML", verified: true },
          { id: "Python", level: 86, category: "Backend", verified: true },
          { id: "Security Auditing", level: 94, category: "Security", verified: true }
        ],
        links: [
          { source: "Automated Testing", target: "AI Model Auditing", strength: 0.90 },
          { source: "Automated Testing", target: "Security Auditing", strength: 0.92 }
        ]
      },
      bio: "Ensuring AI reliability, hallucination prevention, compliance, and automated test coverage."
    }
  ],

  projects: [
    {
      id: "p1",
      title: "Enterprise AI Customer Intelligence Platform",
      client: "Nexus Global Tech",
      budget: "$24,500",
      duration: "6 Weeks",
      status: "In Execution",
      description: "Building a real-time AI dashboard that synthesizes multi-channel customer communications using LLM sentiment analysis and custom RAG indexes.",
      aiAnalysis: {
        complexityScore: "High (8.7/10)",
        estimatedHours: 320,
        recommendedTeamSize: 3,
        keyTechNeeded: ["React", "Python", "LangChain", "PostgreSQL", "Figma"],
        riskLevel: "Low-Medium",
        aiSummary: "Requirement breaks down into 4 core sprints: Data ingestion pipeline (W1-2), RAG Engine & Embedding store (W2-3), Interactive Dashboard UI (W4-5), Security audit & benchmark load test (W6)."
      },
      assignedFreelancers: ["f1", "f2", "f3"],
      milestones: [
        { id: "m1", title: "AI Requirements & Architecture Spec", status: "Completed", progress: 100, dueDate: "2026-09-01" },
        { id: "m2", title: "RAG Engine & Embeddings Data Pipeline", status: "Completed", progress: 100, dueDate: "2026-09-05" },
        { id: "m3", title: "Frontend Dashboard & Visual Analytics", status: "In Progress", progress: 75, dueDate: "2026-09-12" },
        { id: "m4", title: "Security Audit & Final Deployment", status: "Pending", progress: 0, dueDate: "2026-09-20" }
      ],
      riskAlerts: [
        {
          id: "r1",
          severity: "high",
          type: "Timeline Delay Risk",
          metric: "+2.5 Days Estimated Delay",
          message: "Vector database ingestion latency spike during high-concurrency query benchmark testing.",
          aiRecommendation: "Auto-provision Redis cache layer & batch embedding queries in 250-node chunk payloads.",
          mitigated: false
        },
        {
          id: "r2",
          severity: "medium",
          type: "Budget Burn Rate Alert",
          metric: "8% Above Target Burn Rate",
          message: "Additional Cloud API token calls during experimental model fine-tuning phase.",
          aiRecommendation: "Throttle development model calls & redirect staging to quantized local model.",
          mitigated: false
        }
      ]
    }
  ],

  aiTeams: [
    {
      id: "team-apex",
      name: "Team Apex AI",
      synergyScore: 97,
      compatibilityIndex: "98.4%",
      totalCost: "$16,500",
      estTime: "4.5 Weeks",
      members: ["f1", "f2", "f4"],
      roles: [
        { freelancerId: "f1", role: "AI Lead & Backend" },
        { freelancerId: "f2", role: "UI/UX & Design" },
        { freelancerId: "f4", role: "AI Risk & QA" }
      ],
      strengths: [
        "100% past project success match on React + LangChain stack",
        "Complementary time zone coverage",
        "Zero skill gaps detected for Enterprise AI specs"
      ]
    },
    {
      id: "team-quantum",
      name: "Team Quantum Systems",
      synergyScore: 92,
      compatibilityIndex: "93.1%",
      totalCost: "$18,200",
      estTime: "4 Weeks",
      members: ["f1", "f3"],
      roles: [
        { freelancerId: "f1", role: "Full-Stack AI Developer" },
        { freelancerId: "f3", role: "Cloud Infrastructure Architect" }
      ],
      strengths: [
        "Ultra-fast execution velocity",
        "Deep DevOps and Kubernetes scaling mastery"
      ]
    }
  ],

  commits: [
    {
      id: "c1",
      branch: "feat/rag-vector-store",
      author: "Alex Rivera",
      message: "pushed commit #8f32a: Optimization of vector store indexing pipeline",
      changes: "+142 lines, -18 lines",
      timestamp: "12m ago"
    },
    {
      id: "c2",
      branch: "design/figma-tokens",
      author: "Sophia Chen",
      message: "updated UI component tokens & color palette export",
      changes: "Exported SVG icons & design tokens",
      timestamp: "1h ago"
    },
    {
      id: "c3",
      branch: "audit/security-test",
      author: "Elena Rostova",
      message: "ran automated QA suite & model hallucination tests",
      changes: "100% tests passed (34/34)",
      timestamp: "3h ago"
    }
  ]
};
