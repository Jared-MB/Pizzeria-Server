import { Router } from 'express'
import { BookingService } from '../services'

const router = Router()

router.post('/api/booking', BookingService.createBooking)

export default router