"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = require("../models");
const utilities_1 = require("../utilities");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = (0, express_1.Router)();
router.post('/api/orders', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { total } = req.body;
    const { authorization } = req.headers;
    if (!authorization) {
        return (0, utilities_1.handleReturns)(res);
    }
    const token = authorization.split(' ')[1];
    if (!token) {
        return (0, utilities_1.handleReturns)(res, 'No token found');
    }
    try {
        jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const order = new models_1.OrderModel({ total });
        yield order.save();
        return res.status(201).json({
            message: 'Order created successfully',
            status: 201,
            order
        });
    }
    catch (error) {
        if (error instanceof Error) {
            return (0, utilities_1.handleReturns)(res, error.message);
        }
        return (0, utilities_1.handleReturns)(res);
    }
}));
exports.default = router;
