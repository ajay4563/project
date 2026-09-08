import express from 'express';
import { 
  analyzeRequirements, 
  createProject, 
  getProjects, 
  getProjectById 
} from '../controllers/projectController.js';

const router = express.Router();

router.post('/analyze-requirements', analyzeRequirements);
router.post('/create', createProject);
router.get('/', getProjects);
router.get('/:id', getProjectById);

export default router;
