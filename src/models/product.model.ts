import { model, models, Schema } from 'mongoose'

export interface TProduct {
	name: string
	price: number
	description?: string
	size?: string
	stock: number
}

export interface TProductWithQuantity extends TProduct {
	quantity: number
	_id: string
}

export const productSchema = new Schema<TProduct>({
	name: {
		type: String,
		required: true,
		unique: true
	},
	price: {
		type: Number,
		required: true
	},
	stock: {
		type: Number,
		required: true,
		min: 0
	},
	description: {
		type: String,
		required: false
	},
	size: {
		type: String,
		required: false
	}
}, {
	timestamps: false,
	versionKey: false
})

export default models.ProductModel || model<TProduct>('Product', productSchema)