import { Router } from 'express'
import { AuthService } from '../services'


const router = Router()

router.post('/api/auth/register', AuthService.register)

export default router