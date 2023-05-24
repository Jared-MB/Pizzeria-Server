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
exports.ProductsService = void 0;
const models_1 = require("../models");
class ProductsService {
    static createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = new models_1.ProductModel(req.body);
            yield product.save();
            return res.status(201).json({
                message: 'Product created successfully',
                status: 201,
                product
            });
        });
    }
    static getAllProducts(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield models_1.ProductModel.find();
            return res.status(200).json({
                message: 'Products retrieved successfully',
                status: 200,
                products
            });
        });
    }
    static getProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield models_1.ProductModel.findById(req.params.id);
            return res.status(200).json({
                message: 'Product retrieved successfully',
                status: 200,
                product
            });
        });
    }
    static deleteProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield models_1.ProductModel.deleteOne({ _id: req.params.id });
            return res.status(200).json({
                message: 'Product deleted successfully',
                status: 200
            });
        });
    }
}
exports.ProductsService = ProductsService;
