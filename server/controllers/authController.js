import { database } from '../config/db.js';

export const login = (req, res) => {
  const { email, role } = req.body;
  
  if (!role) {
    return res.status(400).json({ error: "Role ('client' | 'freelancer' | 'admin') is required." });
  }

  const user = database.users.find(u => u.role === role) || {
    id: `u-${Date.now()}`,
    email: email || `user-${role}@supercook.ai`,
    name: `${role.toUpperCase()} User`,
    role
  };

  return res.json({
    message: "Login successful",
    token: `jwt-simulated-${user.id}-${Date.now()}`,
    user
  });
};

export const getMe = (req, res) => {
  return res.json({
    user: database.users[0],
    systemStatus: "Operational",
    engineVersion: "v2.5 AI Flow"
  });
};
