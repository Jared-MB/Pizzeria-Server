import { Request, Response } from 'express'
import { BookingModel } from '../models'
import { TBooking } from '../models/booking.model'

export class BookingService {
	static async createBooking(req: Request, res: Response) {
		const booking = new BookingModel<TBooking>(req.body as TBooking)
		await booking.save()
		return res.status(201).json({
			message: 'Booking created successfully',
			status: 201,
			booking
		})
	}
}