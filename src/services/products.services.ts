import { Request, Response } from 'express'
import { ProductModel } from '../models'
import { TProduct } from '../models/product.model'


export class ProductsService {
	static async createProduct(req: Request, res: Response) {
		const product = new ProductModel<TProduct>(req.body as TProduct)
		await product.save()
		return res.status(201).json({
			message: 'Product created successfully',
			status: 201,
			product
		})
	}

	static async getAllProducts(_req: Request, res: Response) {
		const products = await ProductModel.find<TProduct[]>()
		return res.status(200).json({
			message: 'Products retrieved successfully',
			status: 200,
			products
		})
	}

	static async getProductById(req: Request, res: Response) {
		const product = await ProductModel.findById<TProduct>(req.params.id)
		return res.status(200).json({
			message: 'Product retrieved successfully',
			status: 200,
			product
		})
	}

	static async deleteProductById(req: Request, res: Response) {
		await ProductModel.deleteOne({ _id: req.params.id })
		return res.status(200).json({
			message: 'Product deleted successfully',
			status: 200
		})
	}
} 