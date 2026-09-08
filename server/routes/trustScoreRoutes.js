import express from 'express';
import { 
  submitReviewAndUpdateTrustScore, 
  getTrustScoreMatrix 
} from '../controllers/trustScoreController.js';

const router = express.Router();

router.post('/review', submitReviewAndUpdateTrustScore);
router.get('/matrix', getTrustScoreMatrix);

export default router;
