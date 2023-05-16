import { Response } from 'express'

const handleReturns = (res: Response, message = 'No authorization header found', status = 401) => {
	if (process.env.NODE_ENV === 'development') {
		return res.status(401).json({
			message,
			status
		})
	}
	return res.status(404).json({
		message: 'No route found',
		status: 404
	})
}

export default handleReturns