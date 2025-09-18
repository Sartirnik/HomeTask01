"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoRepos = void 0;
var VIDEO_DB = {
    video: [],
    title: [],
    author: [],
    canBeDownloaded: [],
    minAgeRestriction: [],
    createdAt: [],
    publicationDate: [],
    availableResolutions: []
};
exports.videoRepos = {
    createVideo: function () {
        VIDEO_DB.video.push({
            "id": 0,
            "title": "string",
            "author": "string",
            "canBeDownloaded": true,
            "minAgeRestriction": null,
            "createdAt": "2025-09-18T10:58:44.779Z",
            "publicationDate": "2025-09-18T10:58:44.779Z",
            "availableResolutions": ["P144"]
        });
    },
    getVideos: function () {
        return VIDEO_DB.video;
    },
    deleteVideo: function () {
        VIDEO_DB.video.remove();
    }
};
//# sourceMappingURL=videoRepos.js.map