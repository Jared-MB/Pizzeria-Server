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
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    client: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        enum: ['cash', 'card'],
        required: true
    },
    type: {
        type: String,
        enum: ['delivery', 'pickup', 'inStore'],
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'finished', 'canceled'],
        required: true
    },
    products: [{
            _id: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            },
            price: {
                type: Number,
                required: true,
                min: 0
            }
        }
    ]
}, {
    versionKey: false,
    timestamps: {
        updatedAt: false,
        createdAt: true
    },
    methods: {
        calculateTotal() {
            let total = 0;
            for (const product of this.products) {
                total += product.price * product.quantity;
            }
            return total;
        },
        reduceStock() {
            return __awaiter(this, void 0, void 0, function* () {
                for (const product of this.products) {
                    yield mongoose_1.models.Product.updateOne({ _id: product._id }, { $inc: { stock: -product.quantity } });
                }
            });
        },
        getAllPendingOrders() {
            return __awaiter(this, void 0, void 0, function* () {
                return yield mongoose_1.models.Order.find({ status: 'pending' });
            });
        },
        cancelOrder(id) {
            return __awaiter(this, void 0, void 0, function* () {
                yield mongoose_1.models.Order.deleteOne({ _id: id });
            });
        }
    }
});
exports.default = mongoose_1.models.Order || (0, mongoose_1.model)('Order', orderSchema);
