import express from 'express';
import { 
  getFreelancerProfile, 
  updateSkillGraphNode, 
  getAllSkillGraphs 
} from '../controllers/skillGraphController.js';

const router = express.Router();

router.get('/profile/:id?', getFreelancerProfile);
router.put('/node', updateSkillGraphNode);
router.get('/graphs', getAllSkillGraphs);

export default router;
