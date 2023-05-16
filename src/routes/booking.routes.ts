import { Router } from 'express'
import { BookingService } from '../services'

const router = Router()

router.post('/api/booking', BookingService.createBooking)
router.get('/api/booking', BookingService.getAllBookings)
router.get('/api/booking/:id', BookingService.getBookingById)
router.delete('/api/booking/:id', BookingService.deleteBookingById)

export default router