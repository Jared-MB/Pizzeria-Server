import bcrypt from 'bcryptjs'
import { EmployeeModel } from '../models'
import { Request, Response } from 'express'
import jwt, { Secret } from 'jsonwebtoken'
import { handleReturns } from '../utilities'

export class AuthService {
	static decodeToken(req: Request): string | null {
		const { authorization } = req.headers
		if (!authorization) return null
		const token = authorization.split(' ')[1]
		if (!token) return null
		try {
			return jwt.verify(token, process.env.JWT_SECRET as Secret) as string
		}
		catch (error: unknown) {
			return null
		}
	}

	static async login(req: Request, res: Response) {
		try {
			const { username, password } = req.body
			const user = await EmployeeModel.findOne({ username })
			if (!user) return res.status(401).json({
				message: 'Username or password incorrect',
				status: 401
			})
			const isMatch = await bcrypt.compare(password, user.password)
			if (!isMatch) return res.status(401).json({
				message: 'Username or password incorrect',
				status: 401
			})
			const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as Secret, {
				expiresIn: 60 * 60 * 24
			})
			const { password: _, ...rest } = user.toJSON()
			return res.status(200).json({
				message: 'Login successful',
				status: 200,
				user: {
					...rest,
					token
				}
			})
		}
		catch (error: unknown) {
			if (error instanceof Error) {
				return handleReturns(res, error.message)
			}
			return res.status(500).json({
				message: 'Internal server error',
				status: 500
			})
		}
	}

	static async register(req: Request, res: Response) {
		const { username, password, name, role } = req.body
		const employee = new EmployeeModel({ username, password, name, role })
		employee.password = await employee.hashPassword(employee.password)
		await employee.save()
		const token = jwt.sign({ id: employee._id }, process.env.JWT_SECRET as Secret, {
			expiresIn: 60 * 60 * 24
		})
		res.status(201).json({
			token,
			message: 'Employee created successfully',
			status: 201
		})
	}
}