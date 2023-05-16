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

	static async getAllBookings(_req: Request, res: Response) {
		const bookings = await BookingModel.find<TBooking[]>()
		return res.status(200).json({
			message: 'Bookings retrieved successfully',
			status: 200,
			bookings
		})
	}

	static async getBookingById(req: Request, res: Response) {
		const booking = await BookingModel.findById<TBooking>(req.params.id)
		return res.status(200).json({
			message: 'Booking retrieved successfully',
			status: 200,
			booking
		})
	}

	static async deleteBookingById(req: Request, res: Response) {
		await BookingModel.deleteOne({ _id: req.params.id })
		return res.status(200).json({
			message: 'Booking deleted successfully',
			status: 200
		})
	}
}