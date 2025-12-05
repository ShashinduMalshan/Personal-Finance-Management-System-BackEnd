import { Router } from 'express'
import { register, login , getMyDetails } from '../controller/auth.controller';
import { status } from '../controller/dashboard.controller';
import { authenticate } from '../middleware/auth'


const router  = Router();

router.post('/register', register);
router.post('/login', login)

router.get('/dashboard', authenticate ,status)
router.get("/me", authenticate, getMyDetails)



export default router;