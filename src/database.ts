import { connect } from 'mongoose'

export default async function connectDB() {
	try {
		const connection = await connect(process.env.MONGO_URL as string)
		console.log(`MongoDB connected: ${connection.connection.name}`)
	}
	catch (err) {
		console.log(err)
	}
}