import { Request, Response } from 'express'
import { OrderModel } from '../models'
import { TOrder } from '../models/order.model'

export class OrdersServices {
	static async createOrder(req: Request, res: Response) {
		// const { products, client, paymentMethod, type, status } : TOrder = req.body
		const order = new OrderModel<TOrder>(req.body)
		await order.save()
		await order.reduceStock()
		return res.status(201).json({
			message: 'Order created successfully',
			status: 201,
			order
		})
	}

	static async getAllOrders(_req: Request, res: Response) {
		const orders = await OrderModel.find<TOrder[]>()
		return res.status(200).json({
			message: 'Orders retrieved successfully',
			status: 200,
			orders
		})
	}

	static async getOrderById(req: Request, res: Response) {
		const order = await OrderModel.findById<TOrder>(req.params.id)
		return res.status(200).json({
			message: 'Order retrieved successfully',
			status: 200,
			order
		})
	}

	static async getAllPendingOrders(_req: Request, res: Response) {
		const orders = await new OrderModel().getAllPendingOrders()
		return res.status(200).json({
			message: 'Orders retrieved successfully',
			status: 200,
			orders
		})
	}

	static async cancelOrder(req: Request, res: Response) {
		await new OrderModel().cancelOrder(req.params.id)
		return res.status(200).json({
			message: 'Order canceled successfully',
			status: 200
		})
	}
}