import { Router } from 'express'
import { ClientService } from '../services'

const router = Router()

router.post('/api/clients', ClientService.createClient)
router.get('/api/clients', ClientService.getAllClients)
router.get('/api/clients/:id', ClientService.getClientById)
router.delete('/api/clients/:id', ClientService.deleteClientById)

export default router