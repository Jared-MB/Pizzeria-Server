"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const clientSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
}, {
    versionKey: false,
    timestamps: {
        createdAt: true,
        updatedAt: false
    }
});
exports.default = mongoose_1.models.Client || (0, mongoose_1.model)('Client', clientSchema);
