"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    total: {
        type: Number,
        required: true,
        min: 0
    }
}, {
    versionKey: false,
    timestamps: {
        updatedAt: false,
        createdAt: true
    }
});
exports.default = mongoose_1.models.Order || (0, mongoose_1.model)('Order', orderSchema);
