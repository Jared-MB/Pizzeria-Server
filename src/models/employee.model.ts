import { model, models, Schema } from 'mongoose'
import bcrypt from 'bcryptjs'

export enum Role {
	ADMIN = 'admin',
	EMPLOYEE = 'employee'
}

export interface TEmployee {
	name: string
	username: string
	password: string
	role: Role
	phone: number
	hashPassword(password: string): Promise<string>
}

const employeeSchema = new Schema<TEmployee>({
	name: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		require: true
	},
	role: {
		type: String,
		enum: ['admin', 'employee'],
		required: true,
	},
	phone: {
		type: Number,
		required: true
	}
}, {
	methods: {
		async hashPassword(password: string): Promise<string> {
			const salt = bcrypt.genSaltSync(10)
			return await bcrypt.hash(password, salt)
		}
	},
	versionKey: false,
	timestamps: false
})

export default models.Employee || model<TEmployee>('Employee', employeeSchema)