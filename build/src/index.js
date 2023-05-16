"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
const database_1 = __importDefault(require("./database"));
const app = (0, express_1.default)();
dotenv_1.default.config();
(0, database_1.default)();
app.use(express_1.default.json());
app.use(routes_1.UsersRoutes);
app.use(routes_1.AuthRoutes);
app.use(routes_1.OrdersRoutes);
app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port ' + process.env.PORT);
});
