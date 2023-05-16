import { model, models, Schema } from 'mongoose'

export interface TClient {
	name: string
	address: string
	phone: number
}

const clientSchema = new Schema<TClient>({
	name: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	phone: {
		type: Number,
		required: true
	}
}, {
	versionKey: false,
	timestamps: {
		createdAt: true,
		updatedAt: false
	}
})

export default models.Client || model<TClient>('Client', clientSchema)