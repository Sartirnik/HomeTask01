"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoRepos = void 0;
var VIDEO_DB = {
    videos: []
};
var UPD_VID_DB = {
    errorsMessage: []
};
exports.videoRepos = {
    createVideo: function () {
        var newVideo = {
            "id": 0,
            "title": "string",
            "author": "string",
            "canBeDownloaded": true,
            "minAgeRestriction": null,
            "createdAt": "2025-09-19T21:28:52.571Z",
            "publicationDate": "2025-09-19T21:28:52.571Z",
            "availableResolutions": [
                "P144"
            ]
        };
        VIDEO_DB.videos.push(newVideo);
    },
    getVideo: function () {
        return VIDEO_DB.videos;
    },
    getVideoById: function (id) {
        return VIDEO_DB.videos.find(function (v) { return v.id === id; }) || null;
    },
    updateVideo: function (id, data) {
        var video = VIDEO_DB.videos.find(function (v) { return v.id === id; });
        if (!video) {
            //ЕСЛИ ВИДЕО НЕТ возвращаем null => и в хендлере if(video === null) res.status(404).send(...)
            return {
                errorsMessages: [{ message: "Video not found", field: "id" }]
            };
        }
        // Обновляем только допустимые поля
        if (data.title)
            video.title = data.title;
        if (data.author)
            video.author = data.author;
        return __assign(__assign({}, video), { errorsMessages: [] });
    },
    deleteVideo: function (id) {
        var index = VIDEO_DB.videos.findIndex(function (v) { return v.id === id; });
        if (index === -1)
            return false;
        VIDEO_DB.videos.splice(index, 1);
        return true;
    },
    getUpdateVideo: function () {
    }
    // getVideoMessage : (videoId: number) => {
    //     return videoRepos.UPD_DB();
    // }
    // deleteVideo : ()=>{
    //     VIDEO_DB.video.delete();
    // },
};
//# sourceMappingURL=videoRepos.js.map