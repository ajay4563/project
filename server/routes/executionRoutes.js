import express from 'express';
import { 
  getExecutionStatus, 
  updateMilestoneProgress, 
  pushGitCommit 
} from '../controllers/executionController.js';

const router = express.Router();

router.get('/status/:id?', getExecutionStatus);
router.put('/milestone', updateMilestoneProgress);
router.post('/commit', pushGitCommit);

export default router;
