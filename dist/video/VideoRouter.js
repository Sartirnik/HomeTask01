"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoRouter = void 0;
var express_1 = require("express");
var videoHandlers_1 = require("./handlers/videoHandlers");
exports.VideoRouter = (0, express_1.Router)();
exports.VideoRouter.post('/', videoHandlers_1.createVideoHandler);
exports.VideoRouter.get('/:id', videoHandlers_1.getVideoByIdHandler);
//# sourceMappingURL=VideoRouter.js.map