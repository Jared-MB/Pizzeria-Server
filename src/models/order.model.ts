import { Document, model, models, Schema } from 'mongoose'
import { TProductWithQuantity } from './product.model'

export interface TOrder extends Document {
	products: [TProductWithQuantity]
	client: string
	paymentMethod: 'cash' | 'card'
	type: 'delivery' | 'pickup' | 'inStore'
	status: 'pending' | 'finished' | 'canceled'
	calculateTotal(): number
	reduceStock(): Promise<void>
	cancelOrder(id: string): Promise<void>
}

const orderSchema = new Schema<TOrder>({
	client: {
		type: String,
		required: true
	},
	paymentMethod: {
		type: String,
		enum: ['cash', 'card'],
		required: true
	},
	type: {
		type: String,
		enum: ['delivery', 'pickup', 'inStore'],
		required: true
	},
	status: {
		type: String,
		enum: ['pending', 'finished', 'canceled'],
		required: true
	},
	products: [{
		_id: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		quantity: {
			type: Number,
			required: true,
			min: 1
		},
		price: {
			type: Number,
			required: true,
			min: 0
		}
	}
	]
}, {
	versionKey: false,
	timestamps: {
		updatedAt: false,
		createdAt: true
	},
	methods: {
		calculateTotal(): number {
			let total = 0
			for (const product of this.products) {
				total += product.price * product.quantity
			}
			return total
		},
		async reduceStock(): Promise<void> {
			for (const product of this.products) {
				await models.Product.updateOne({ _id: product._id }, { $inc: { stock: -product.quantity } })
			}
		},
		async getAllPendingOrders(): Promise<TOrder[]> {
			return await models.Order.find({ status: 'pending' })
		},
		async cancelOrder(id: string): Promise<void> {
			await models.Order.deleteOne({ _id: id })
		}
	}
})

export default models.Order || model<TOrder>('Order', orderSchema)