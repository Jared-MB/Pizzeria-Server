import { Request, Response } from 'express'
import { ClientModel } from '../models'
import { TClient } from '../models/client.model'

export class ClientService {
	static async createClient(req: Request, res: Response) {
		const client = new ClientModel<TClient>(req.body as TClient)
		await client.save()
		return res.status(201).json({
			message: 'Client created successfully',
			status: 201,
			client
		})
	}
}