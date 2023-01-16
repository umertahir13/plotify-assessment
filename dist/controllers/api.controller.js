"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiSuccess = (res, result, message = "success") => {
    res.status(200).json({
        error: false,
        message: message,
        data: result,
        errors: []
    });
};
const apiError = (res, message = "Unable to process request", result = null, err, errorCode = 400) => {
    console.log(err);
    res.status(errorCode).json({
        error: true,
        message: message,
        data: result,
        errors: [err.parent ? err.parent.code : err || null]
    });
};
exports.default = {
    apiError,
    apiSuccess
};
