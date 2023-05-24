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
exports.Role = void 0;
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["EMPLOYEE"] = "employee";
})(Role = exports.Role || (exports.Role = {}));
const employeeSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ['admin', 'employee'],
        required: true,
    },
    phone: {
        type: Number,
        required: true
    }
}, {
    methods: {
        hashPassword(password) {
            return __awaiter(this, void 0, void 0, function* () {
                const salt = bcryptjs_1.default.genSaltSync(10);
                return yield bcryptjs_1.default.hash(password, salt);
            });
        }
    },
    versionKey: false,
    timestamps: false
});
exports.default = mongoose_1.models.Employee || (0, mongoose_1.model)('Employee', employeeSchema);
