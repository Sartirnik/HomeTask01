"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var VideoRouter_1 = require("./video/VideoRouter");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.get('/', function (req, res) {
    res.send('working!').status(200);
});
exports.app.use('/videos', VideoRouter_1.VideoRouter);
//# sourceMappingURL=app.js.map