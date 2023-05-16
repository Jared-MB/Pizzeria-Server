import { Router } from 'express'
import { ProductsService } from '../services'

const router = Router()

router.post('/api/products', ProductsService.createProduct)
router.get('/api/products', ProductsService.getAllProducts)
router.get('/api/products/:id', ProductsService.getProductById)
router.delete('/api/products/:id', ProductsService.deleteProductById)

export default router