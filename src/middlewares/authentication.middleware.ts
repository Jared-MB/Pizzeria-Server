import { NextFunction, Request, Response } from 'express'
import { handleReturns } from '../utilities'
import jwt, { Secret } from 'jsonwebtoken'

const authentication_middleware = (req: Request, res: Response, next: NextFunction) => {
	const { authorization } = req.headers
	if (!authorization) return handleReturns(res)
	const token = authorization.split(' ')[1]
	if (!token) return handleReturns(res, 'No token found')
	try {
		jwt.verify(token, process.env.JWT_SECRET as Secret)
		return next()
	}
	catch (error: unknown) {
		if (error instanceof Error) {
			return handleReturns(res, error.message)
		}
		return handleReturns(res)
	}
}

export default authentication_middleware