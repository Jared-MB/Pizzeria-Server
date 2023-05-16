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
exports.UsersRoutes = exports.OrdersRoutes = exports.AuthRoutes = void 0;
var auth_routes_1 = require("./auth.routes");
Object.defineProperty(exports, "AuthRoutes", { enumerable: true, get: function () { return __importDefault(auth_routes_1).default; } });
var orders_routes_1 = require("./orders.routes");
Object.defineProperty(exports, "OrdersRoutes", { enumerable: true, get: function () { return __importDefault(orders_routes_1).default; } });
__exportStar(require("./index"), exports);
var users_routes_1 = require("./users.routes");
Object.defineProperty(exports, "UsersRoutes", { enumerable: true, get: function () { return __importDefault(users_routes_1).default; } });
