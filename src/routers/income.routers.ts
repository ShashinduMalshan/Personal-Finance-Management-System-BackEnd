import { Router } from 'express'
import { getAllIncomeRecords ,updateAutoAddIncome ,createIncomeRecord ,deleteIncomeRecord ,updateIncomeRecord} from '../controller/incomes.controller';

const router  = Router();

router.get('/', getAllIncomeRecords);
router.put('/updateAutoAddIncome', updateAutoAddIncome);
router.post('/createIncomeRecord', createIncomeRecord);
router.delete('/deleteIncomeRecord/:id', deleteIncomeRecord);
router.put('/updateIncomeRecord/:id', updateIncomeRecord);


export default router;