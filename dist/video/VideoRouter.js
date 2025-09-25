"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoRouter = void 0;
var express_1 = require("express");
var videoHandlers_1 = require("./handlers/videoHandlers");
var videoRepos_1 = require("./infrastructure/videoRepos");
exports.VideoRouter = (0, express_1.Router)();
// Очистка базы для тестов
exports.VideoRouter.delete('/testing/all-data', function (req, res) {
    videoRepos_1.videoRepos.clearAll();
    res.sendStatus(204);
});
// CRUD для видео
exports.VideoRouter.get('/', videoHandlers_1.getVideos);
exports.VideoRouter.post('/', videoHandlers_1.createVideoHandler);
exports.VideoRouter.get('/:id', videoHandlers_1.getVideoByIdHandler);
exports.VideoRouter.put('/:id', videoHandlers_1.updateVideosHandler);
exports.VideoRouter.delete('/:id', videoHandlers_1.deleteVideoByIdHandler);
//# sourceMappingURL=VideoRouter.js.map