"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVideoHandler = exports.getVideos = exports.getVideoByIdHandler = exports.createVideoHandler = void 0;
var videoRepos_1 = require("../infrastructure/videoRepos");
var createVideoHandler = function (req, res) {
    // TODO: добавить обработку видео
    var create = videoRepos_1.videoRepos.createVideo();
    res.send(200);
};
exports.createVideoHandler = createVideoHandler;
var getVideoByIdHandler = function (req, res) {
    // TODO: find video
};
exports.getVideoByIdHandler = getVideoByIdHandler;
var getVideos = function (req, res) {
    var videos = videoRepos_1.videoRepos.getVideos();
    console.log(videos);
    res.status(200).json(videos);
};
exports.getVideos = getVideos;
var deleteVideoHandler = function (req, res) {
    var deleteVideos = function(req, res) {
        var delete_video = videoRepos_1.videoRepos.deleteVideo();
        console.log('delete is successfull');
        res.send(204);
    };
};
exports.deleteVideoHandler = deleteVideoHandler;
//# sourceMappingURL=videoHandlers.js.map