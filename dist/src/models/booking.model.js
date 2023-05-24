"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookingSchema = new mongoose_1.Schema({
    client: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    table: {
        type: Number,
        required: true
    }
}, {
    versionKey: false,
    timestamps: false
});
exports.default = mongoose_1.models.Booking || (0, mongoose_1.model)('Booking', bookingSchema);
