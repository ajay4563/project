import express from 'express';
import { 
  getRiskAlerts, 
  applyAutoFixMitigation 
} from '../controllers/riskController.js';

const router = express.Router();

router.get('/alerts/:projectId?', getRiskAlerts);
router.post('/auto-mitigate', applyAutoFixMitigation);

export default router;
