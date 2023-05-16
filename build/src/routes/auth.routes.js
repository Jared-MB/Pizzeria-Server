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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../models");
const router = (0, express_1.Router)();
router.post('/api/auth/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, name } = req.body;
    const employee = new models_1.EmployeeModel({ username, password, name });
    employee.password = yield employee.hashPassword(employee.password);
    yield employee.save();
    const token = jsonwebtoken_1.default.sign({ id: employee._id }, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24
    });
    res.status(201).json({
        token,
        message: 'Employee created successfully',
        status: 201
    });
}));
exports.default = router;
