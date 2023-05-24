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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersServices = void 0;
const models_1 = require("../models");
class OrdersServices {
    static createOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const { products, client, paymentMethod, type, status } : TOrder = req.body
            const order = new models_1.OrderModel(req.body);
            yield order.save();
            yield order.reduceStock();
            return res.status(201).json({
                message: 'Order created successfully',
                status: 201,
                order
            });
        });
    }
    static getAllOrders(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const orders = yield models_1.OrderModel.find();
            return res.status(200).json({
                message: 'Orders retrieved successfully',
                status: 200,
                orders
            });
        });
    }
    static getOrderById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield models_1.OrderModel.findById(req.params.id);
            return res.status(200).json({
                message: 'Order retrieved successfully',
                status: 200,
                order
            });
        });
    }
    static getAllPendingOrders(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const orders = yield new models_1.OrderModel().getAllPendingOrders();
            return res.status(200).json({
                message: 'Orders retrieved successfully',
                status: 200,
                orders
            });
        });
    }
    static cancelOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield new models_1.OrderModel().cancelOrder(req.params.id);
            return res.status(200).json({
                message: 'Order canceled successfully',
                status: 200
            });
        });
    }
}
exports.OrdersServices = OrdersServices;
