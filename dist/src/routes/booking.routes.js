"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const services_1 = require("../services");
const router = (0, express_1.Router)();
router.post('/api/booking', services_1.BookingService.createBooking);
router.get('/api/booking', services_1.BookingService.getAllBookings);
router.get('/api/booking/:id', services_1.BookingService.getBookingById);
router.delete('/api/booking/:id', services_1.BookingService.deleteBookingById);
exports.default = router;