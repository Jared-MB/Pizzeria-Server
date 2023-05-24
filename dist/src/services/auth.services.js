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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const models_1 = require("../models");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utilities_1 = require("../utilities");
class AuthService {
    static decodeToken(req) {
        const { authorization } = req.headers;
        if (!authorization)
            return null;
        const token = authorization.split(' ')[1];
        if (!token)
            return null;
        try {
            return jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        }
        catch (error) {
            return null;
        }
    }
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password } = req.body;
                const user = yield models_1.EmployeeModel.findOne({ username });
                if (!user)
                    return res.status(401).json({
                        message: 'Username or password incorrect',
                        status: 401
                    });
                const isMatch = yield bcryptjs_1.default.compare(password, user.password);
                if (!isMatch)
                    return res.status(401).json({
                        message: 'Username or password incorrect',
                        status: 401
                    });
                const token = jsonwebtoken_1.default.sign({ id: user._id }, process.env.JWT_SECRET, {
                    expiresIn: 60 * 60 * 24
                });
                const _a = user.toJSON(), { password: _ } = _a, rest = __rest(_a, ["password"]);
                return res.status(200).json({
                    message: 'Login successful',
                    status: 200,
                    user: Object.assign(Object.assign({}, rest), { token })
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    return (0, utilities_1.handleReturns)(res, error.message);
                }
                return res.status(500).json({
                    message: 'Internal server error',
                    status: 500
                });
            }
        });
    }
    static register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password, name, role } = req.body;
            const employee = new models_1.EmployeeModel({ username, password, name, role });
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
        });
    }
}
exports.AuthService = AuthService;
