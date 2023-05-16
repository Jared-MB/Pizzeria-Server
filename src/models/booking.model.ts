import { model, models, Schema } from 'mongoose'
import { Dayjs } from 'dayjs'

export interface TBooking {
	client: string
	date: Dayjs
	table: number
}

const bookingSchema = new Schema<TBooking>({
	client: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true
	},
	table: {
		type: Number,
		required: true
	}
}, {
	versionKey: false,
	timestamps: false
})

export default models.Booking || model<TBooking>('Booking', bookingSchema)