"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
const mongoose_1 = require("mongoose");
exports.productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: false
    },
    size: {
        type: String,
        required: false
    }
}, {
    timestamps: false,
    versionKey: false
});
exports.default = mongoose_1.models.ProductModel || (0, mongoose_1.model)('Product', exports.productSchema);
