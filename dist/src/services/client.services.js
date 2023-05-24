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
exports.ClientService = void 0;
const models_1 = require("../models");
class ClientService {
    static createClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = new models_1.ClientModel(req.body);
            yield client.save();
            return res.status(201).json({
                message: 'Client created successfully',
                status: 201,
                client
            });
        });
    }
    static getAllClients(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clients = yield models_1.ClientModel.find();
            return res.status(200).json({
                message: 'Clients retrieved successfully',
                status: 200,
                clients
            });
        });
    }
    static getClientById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield models_1.ClientModel.findById(req.params.id);
            return res.status(200).json({
                message: 'Client retrieved successfully',
                status: 200,
                client
            });
        });
    }
    static deleteClientById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield models_1.ClientModel.deleteOne({ _id: req.params.id });
            return res.status(200).json({
                message: 'Client deleted successfully',
                status: 200
            });
        });
    }
}
exports.ClientService = ClientService;
