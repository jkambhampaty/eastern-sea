"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInfoValidId = exports.ensureInteger = exports.isInfoSupplied = void 0;
const mongoose_1 = require("mongoose");
const util_1 = require("./util");
const isInfoSupplied = (reqInfoType, ...fields) => async (req, res, next) => {
    const information = req[reqInfoType];
    for (const field of fields) {
        if (!information[field]) {
            return res.status(util_1.BAD_REQUEST).json({
                error: `field '${field}' not supplied in ${reqInfoType}`,
            });
        }
    }
    next();
};
exports.isInfoSupplied = isInfoSupplied;
const ensureInteger = (reqInfoType, ...fields) => {
    return async (req, res, next) => {
        const information = req[reqInfoType];
        for (const field of fields) {
            const value = information[field];
            if (value && isNaN(parseInt(value))) {
                return res.status(util_1.BAD_REQUEST).json({
                    error: `field '${field}' is not an integer in ${reqInfoType}`,
                });
            }
        }
        next();
    };
};
exports.ensureInteger = ensureInteger;
const isInfoValidId = (reqInfoType, ...fields) => async (req, res, next) => {
    const information = req[reqInfoType];
    for (const field of fields) {
        if (!mongoose_1.Types.ObjectId.isValid(information[field])) {
            return res.status(util_1.BAD_REQUEST).json({
                error: `field '${field}' is not a valid 12-byte Mongo ID in req.${reqInfoType}`,
            });
        }
    }
    next();
};
exports.isInfoValidId = isInfoValidId;
