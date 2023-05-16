import express from 'express'
import dotenv from 'dotenv'
import { AuthRoutes, BookingRoutes, OrdersRoutes, ProductsRoutes, ClientRoutes } from './routes'
import connectDB from './database'
import { AuthService } from './services/auth.services'
import { AuthenticationMiddleware } from './middlewares'

const app = express()
dotenv.config()
connectDB()

app.use(express.json())

app.post('/api/auth/login', (_req, _res, next) => {
	next()
}, AuthService.login)

app.use(AuthenticationMiddleware)

app.use(ProductsRoutes)
app.use(AuthRoutes)
app.use(OrdersRoutes)
app.use(BookingRoutes)
app.use(ClientRoutes)

app.listen(process.env.PORT || 3000, () => {
	console.log('Server is running on port ' + process.env.PORT)
})
