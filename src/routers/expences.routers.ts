import { Router } from 'express'
import { createExpenceRecord, deleteExpenceRecord, getAllExpenceRecords, updateAutoAddExpence, updateExpenceRecord } from '../controller/expepnce.controller';

const router  = Router();

router.get('/', getAllExpenceRecords);
router.put('/updateAutoAddExpence', updateAutoAddExpence);
router.post('/createExpenceRecord', createExpenceRecord);
router.delete('/deleteExpenceRecord/:id', deleteExpenceRecord);
router.put('/updateExpenceRecord/:id', updateExpenceRecord);

export default router;