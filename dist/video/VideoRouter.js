"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoRouter = void 0;
var express_1 = require("express");
var videoHandlers_1 = require("./handlers/videoHandlers");
exports.VideoRouter = (0, express_1.Router)();
exports.VideoRouter.get('/', videoHandlers_1.getVideos); // список видео
exports.VideoRouter.post('/create', videoHandlers_1.createVideoHandler);
exports.VideoRouter.get('/:id', videoHandlers_1.getVideoByIdHandler); // видео по ID
exports.VideoRouter.put('/:id', videoHandlers_1.updateVideosHandler);
exports.VideoRouter.delete('/:id', videoHandlers_1.deleteVideoByIdHandler);
// VideoRouter.put('/update', updateVideosHandler);    // обновить видео
// VideoRouter.post('/', createVideoHandler);      // создать видео
// VideoRouter.put('/:id', updateVideoHandler);
// VideoRouter.get('/update',updateVideoHandler);
//s
//http://localhost:3001/products/create
//http://localhost:3001/products/8
//# sourceMappingURL=VideoRouter.js.map