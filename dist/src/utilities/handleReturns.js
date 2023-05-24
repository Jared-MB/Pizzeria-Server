"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleReturns = (res, message = 'No authorization header found', status = 401) => {
    if (process.env.NODE_ENV === 'development') {
        return res.status(401).json({
            message,
            status
        });
    }
    return res.status(404).json({
        message: 'No route found',
        status: 404
    });
};
exports.default = handleReturns;
