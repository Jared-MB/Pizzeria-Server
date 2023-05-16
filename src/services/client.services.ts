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

	static async getAllClients(_req: Request, res: Response) {
		const clients = await ClientModel.find<TClient[]>()
		return res.status(200).json({
			message: 'Clients retrieved successfully',
			status: 200,
			clients
		})
	}

	static async getClientById(req: Request, res: Response) {
		const client = await ClientModel.findById<TClient>(req.params.id)
		return res.status(200).json({
			message: 'Client retrieved successfully',
			status: 200,
			client
		})
	}

	static async deleteClientById(req: Request, res: Response) {
		await ClientModel.deleteOne({ _id: req.params.id })
		return res.status(200).json({
			message: 'Client deleted successfully',
			status: 200
		})
	}
}