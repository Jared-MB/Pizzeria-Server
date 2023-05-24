"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authentication_middleware = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization)
        return (0, utilities_1.handleReturns)(res);
    const token = authorization.split(' ')[1];
    if (!token)
        return (0, utilities_1.handleReturns)(res, 'No token found');
    try {
        jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        return next();
    }
    catch (error) {
        if (error instanceof Error) {
            return (0, utilities_1.handleReturns)(res, error.message);
        }
        return (0, utilities_1.handleReturns)(res);
    }
};
exports.default = authentication_middleware;
