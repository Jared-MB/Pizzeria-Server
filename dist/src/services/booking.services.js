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
exports.BookingService = void 0;
const models_1 = require("../models");
class BookingService {
    static createBooking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const booking = new models_1.BookingModel(req.body);
            yield booking.save();
            return res.status(201).json({
                message: 'Booking created successfully',
                status: 201,
                booking
            });
        });
    }
    static getAllBookings(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bookings = yield models_1.BookingModel.find();
            return res.status(200).json({
                message: 'Bookings retrieved successfully',
                status: 200,
                bookings
            });
        });
    }
    static getBookingById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const booking = yield models_1.BookingModel.findById(req.params.id);
            return res.status(200).json({
                message: 'Booking retrieved successfully',
                status: 200,
                booking
            });
        });
    }
    static deleteBookingById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield models_1.BookingModel.deleteOne({ _id: req.params.id });
            return res.status(200).json({
                message: 'Booking deleted successfully',
                status: 200
            });
        });
    }
}
exports.BookingService = BookingService;
