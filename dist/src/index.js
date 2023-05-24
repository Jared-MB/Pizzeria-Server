"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
const database_1 = __importDefault(require("./database"));
const auth_services_1 = require("./services/auth.services");
const middlewares_1 = require("./middlewares");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
dotenv_1.default.config();
(0, database_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post('/api/auth/login', (_req, _res, next) => {
    next();
}, auth_services_1.AuthService.login);
app.use(middlewares_1.AuthenticationMiddleware);
app.use(routes_1.ProductsRoutes);
app.use(routes_1.AuthRoutes);
app.use(routes_1.OrdersRoutes);
app.use(routes_1.BookingRoutes);
app.use(routes_1.ClientRoutes);
app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port ' + process.env.PORT);
});
