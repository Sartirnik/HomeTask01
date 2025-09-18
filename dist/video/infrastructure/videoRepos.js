"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoRepos = void 0;
var VIDEO_DB = {
    video: [],
    author: []
};
exports.videoRepos = {
    createVideo: function () {
        VIDEO_DB.video.push({ id: 1 });
    },
    deleteVideo: function () {
        VIDEO_DB.video.remove();
    },
    getVideos: function () {
        return VIDEO_DB.video;
    }
};
//# sourceMappingURL=videoRepos.js.map