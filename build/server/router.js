"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const util_1 = require("./util");
const router = express_1.default.Router();
router.get("/hello", (_, res) => {
    return res
        .status(util_1.OK)
        .send('<p>"We live in a twilight world...<br />- The Protagonist"</p>');
});
router.get("/*", (_, res) => {
    return res.status(util_1.OK).json({ data: { message: "Hello world!" } });
});
exports.default = router;
