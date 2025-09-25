"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVideoByIdHandler = exports.updateVideosHandler = exports.getVideos = exports.createVideoHandler = exports.getVideoByIdHandler = void 0;
var videoRepos_1 = require("../infrastructure/videoRepos");
var HttpStatus_1 = require("../../types/HttpStatus");
var getVideoByIdHandler = function (req, res) {
    var video = videoRepos_1.videoRepos.getVideoById(+req.params.id);
    if (video) {
        res.status(HttpStatus_1.HttpStatus.OK).json(video);
    }
    else {
        res.sendStatus(HttpStatus_1.HttpStatus.NOT_FOUND);
    }
};
exports.getVideoByIdHandler = getVideoByIdHandler;
var createVideoHandler = function (req, res) {
    var _a = req.body, title = _a.title, author = _a.author, availableResolutions = _a.availableResolutions;
    var result = videoRepos_1.videoRepos.createVideo(title, author, availableResolutions);
    if (result && 'errorsMessages' in result) {
        return res.status(HttpStatus_1.HttpStatus.BAD_REQUEST).json(result);
    }
    res.status(HttpStatus_1.HttpStatus.CREATED).json(result);
};
exports.createVideoHandler = createVideoHandler;
var getVideos = function (req, res) {
    var videos = videoRepos_1.videoRepos.getVideo();
    res.status(HttpStatus_1.HttpStatus.OK).json(videos);
};
exports.getVideos = getVideos;
var updateVideosHandler = function (req, res) {
    var result = videoRepos_1.videoRepos.updateVideos(+req.params.id, req.body);
    if (result === null) {
        return res.sendStatus(HttpStatus_1.HttpStatus.NOT_FOUND);
    }
    if (result && 'errorsMessages' in result) {
        return res.status(HttpStatus_1.HttpStatus.BAD_REQUEST).json(result);
    }
    // успешное обновление
    return res.sendStatus(HttpStatus_1.HttpStatus.NO_CONTENT);
};
exports.updateVideosHandler = updateVideosHandler;
var deleteVideoByIdHandler = function (req, res) {
    var id = +req.params.id;
    var isDeleted = videoRepos_1.videoRepos.deleteVideo(id);
    if (!isDeleted) {
        return res.sendStatus(HttpStatus_1.HttpStatus.NOT_FOUND);
    }
    return res.sendStatus(HttpStatus_1.HttpStatus.NO_CONTENT);
};
exports.deleteVideoByIdHandler = deleteVideoByIdHandler;
//# sourceMappingURL=videoHandlers.js.map