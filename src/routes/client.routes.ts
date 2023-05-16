import { Router } from 'express'
import { ClientService } from '../services'

const router = Router()

router.post('/api/clients', ClientService.createClient)

export default router