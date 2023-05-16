import { Router } from 'express'
import { OrdersServices } from '../services'

const router = Router()

router.post('/api/orders', OrdersServices.createOrder)
router.get('/api/orders', OrdersServices.getAllOrders)
router.get('/api/orders-pending', OrdersServices.getAllPendingOrders)
router.get('/api/orders/:id', OrdersServices.getOrderById)
router.delete('/api/orders/:id', OrdersServices.cancelOrder)

export default router