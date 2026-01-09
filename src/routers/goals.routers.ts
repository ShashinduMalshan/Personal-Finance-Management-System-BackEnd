import { Router } from 'express'
import { getAllGoalsRecords ,createGoalsRecord ,deleteGoalsRecord,updateGoalsRecord} from '../controller/goals.controller';

const router  = Router();

router.get('/', getAllGoalsRecords);
router.post('/createGoalRecord', createGoalsRecord);
router.delete('/deleteGoalRecord/:id', deleteGoalsRecord);
router.put('/updateGoalRecord/:id', updateGoalsRecord);

export default router;