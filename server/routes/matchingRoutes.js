import express from 'express';
import { 
  matchIndividualCandidates, 
  formAITeams, 
  approveContract 
} from '../controllers/matchingController.js';

const router = express.Router();

router.post('/match-individual', matchIndividualCandidates);
router.post('/form-teams', formAITeams);
router.post('/approve-contract', approveContract);

export default router;
