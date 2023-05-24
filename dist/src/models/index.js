"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientModel = exports.BookingModel = exports.EmployeeModel = exports.ProductModel = exports.OrderModel = void 0;
__exportStar(require("./index"), exports);
var order_model_1 = require("./order.model");
Object.defineProperty(exports, "OrderModel", { enumerable: true, get: function () { return __importDefault(order_model_1).default; } });
var product_model_1 = require("./product.model");
Object.defineProperty(exports, "ProductModel", { enumerable: true, get: function () { return __importDefault(product_model_1).default; } });
var employee_model_1 = require("./employee.model");
Object.defineProperty(exports, "EmployeeModel", { enumerable: true, get: function () { return __importDefault(employee_model_1).default; } });
var booking_model_1 = require("./booking.model");
Object.defineProperty(exports, "BookingModel", { enumerable: true, get: function () { return __importDefault(booking_model_1).default; } });
var client_model_1 = require("./client.model");
Object.defineProperty(exports, "ClientModel", { enumerable: true, get: function () { return __importDefault(client_model_1).default; } });
